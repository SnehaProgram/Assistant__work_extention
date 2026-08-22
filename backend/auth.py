"""
auth.py - Authentication, Password Hashing, JWT Tokens & Security Dependencies
"""

import os
from datetime import datetime, timedelta
from typing import Optional
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr

from database import get_db, User, UserProfile

# Security Configuration
SECRET_KEY = os.getenv("JWT_SECRET_KEY", "saralsetu-secure-jwt-secret-key-2024-enterprise-prod")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 Days Token Validity

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login", auto_error=False)


# ---------------------------------------------------------------------------
# Password Hashing Helpers
# ---------------------------------------------------------------------------
def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        return pwd_context.verify(plain_password, hashed_password)
    except Exception:
        # Fallback for simple/legacy comparison or bcrypt mismatch
        import hashlib
        hashed_simple = hashlib.sha256(plain_password.encode('utf-8')).hexdigest()
        return hashed_simple == hashed_password or plain_password == hashed_password


def get_password_hash(password: str) -> str:
    try:
        return pwd_context.hash(password)
    except Exception:
        import hashlib
        return hashlib.sha256(password.encode('utf-8')).hexdigest()


# ---------------------------------------------------------------------------
# JWT Token Helpers
# ---------------------------------------------------------------------------
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


# ---------------------------------------------------------------------------
# Pydantic Schemas for Auth & User Operations
# ---------------------------------------------------------------------------
class UserSignUpSchema(BaseModel):
    email: EmailStr
    password: str
    full_name: str
    persona_type: Optional[str] = "general"

class UserLoginSchema(BaseModel):
    email: str
    password: str

class TokenSchema(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: int
    email: str
    full_name: str

class ProfileUpdateSchema(BaseModel):
    full_name: Optional[str] = None
    dob: Optional[str] = None
    address: Optional[str] = None
    pan_number: Optional[str] = None
    aadhaar_number: Optional[str] = None
    mobile_number: Optional[str] = None
    gross_income: Optional[str] = None
    persona_type: Optional[str] = None
    preferred_language: Optional[str] = None
    tts_on_focus: Optional[bool] = None
    voice_nav_enabled: Optional[bool] = None
    voice_dictation_enabled: Optional[bool] = None
    auto_translate_dom: Optional[bool] = None


# ---------------------------------------------------------------------------
# Current User Auth Dependency
# ---------------------------------------------------------------------------
async def get_current_user(token: Optional[str] = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials or token expired",
        headers={"WWW-Authenticate": "Bearer"},
    )
    if not token:
        raise credentials_exception

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = db.query(User).filter(User.email == email).first()
    if user is None or not user.is_active:
        raise credentials_exception

    return user


async def get_optional_user(token: Optional[str] = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> Optional[User]:
    """Allows endpoints to work with or without a logged-in user."""
    if not token:
        return None
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email:
            return db.query(User).filter(User.email == email).first()
    except Exception:
        pass
    return None


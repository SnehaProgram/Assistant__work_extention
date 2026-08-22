"""
database.py - Database Models & Connection Management
Supports PostgreSQL (async/sync) with automatic SQLite fallback for local development.
"""

import os
import json
from datetime import datetime
from typing import Optional, Dict, Any
from sqlalchemy import (
    create_engine, Column, Integer, String, Boolean, Text, DateTime, ForeignKey, Float
)
from sqlalchemy.orm import declarative_base, sessionmaker, relationship, Session

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./saralsetu.db")

# Normalize postgres URL formats (handling postgres://, postgresql+asyncpg://, postgresql://)
SYNC_DATABASE_URL = DATABASE_URL
if SYNC_DATABASE_URL.startswith("postgres://"):
    SYNC_DATABASE_URL = SYNC_DATABASE_URL.replace("postgres://", "postgresql://", 1)
if SYNC_DATABASE_URL.startswith("postgresql+asyncpg://"):
    SYNC_DATABASE_URL = SYNC_DATABASE_URL.replace("postgresql+asyncpg://", "postgresql://", 1)

# Handle sqlite connect_args
connect_args = {}
if "sqlite" in SYNC_DATABASE_URL:
    connect_args = {"check_same_thread": False}

try:
    engine = create_engine(SYNC_DATABASE_URL, connect_args=connect_args, pool_pre_ping=True)
except Exception as e:
    # Fallback to local SQLite if postgres connection string fails
    print(f"Warning: Primary database connection failed ({e}). Falling back to sqlite:///./saralsetu.db")
    SYNC_DATABASE_URL = "sqlite:///./saralsetu.db"
    engine = create_engine(SYNC_DATABASE_URL, connect_args={"check_same_thread": False}, pool_pre_ping=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()



# ---------------------------------------------------------------------------
# Database Models
# ---------------------------------------------------------------------------
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    full_name = Column(String(150), nullable=False)
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    profile = relationship("UserProfile", back_populates="user", uselist=False, cascade="all, delete-orphan")
    documents = relationship("DocumentGuide", back_populates="user", cascade="all, delete-orphan")
    submissions = relationship("FormSubmission", back_populates="user", cascade="all, delete-orphan")


class UserProfile(Base):
    __tablename__ = "user_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    
    # Profile Vault for Auto-Fill
    full_name = Column(String(150), default="Aarav Sharma")
    dob = Column(String(50), default="1992-08-14")
    address = Column(Text, default="Flat 402, Shanti Niketan, Sector 15, New Delhi - 110001")
    pan_number = Column(String(20), default="ABCDE1234F")
    aadhaar_number = Column(String(20), default="XXXX-XXXX-9012")
    mobile_number = Column(String(20), default="+91 98765 43210")
    gross_income = Column(String(50), default="₹ 8,50,000")
    digilocker_linked = Column(Boolean, default=True)

    # Accessibility & Persona Preferences
    persona_type = Column(String(50), default="general") # visual, motor, dyslexic, hearing, elderly, general
    preferred_language = Column(String(10), default="en") # hi, en, ta, te, bn, etc.
    tts_on_focus = Column(Boolean, default=False)
    voice_nav_enabled = Column(Boolean, default=False)
    voice_dictation_enabled = Column(Boolean, default=False)
    auto_translate_dom = Column(Boolean, default=False)
    visual_captions_enabled = Column(Boolean, default=False)
    large_touch_targets = Column(Boolean, default=False)
    high_contrast = Column(Boolean, default=False)

    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = relationship("User", back_populates="profile")


class DocumentGuide(Base):
    __tablename__ = "document_guides"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=True)
    document_name = Column(String(255), nullable=False)
    file_size = Column(String(50), default="2.4 MB")
    pages = Column(Integer, default=14)
    summary_en = Column(Text, nullable=True)
    summary_hi = Column(Text, nullable=True)
    key_dates_json = Column(Text, default="[]")
    eligibility_json = Column(Text, default="[]")
    upload_date = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="documents")


class FormSubmission(Base):
    __tablename__ = "form_submissions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=True)
    form_title = Column(String(255), nullable=False)
    department = Column(String(255), nullable=False)
    status = Column(String(50), default="Submitted") # Draft, Ready for Review, Submitted, Completed
    progress = Column(Integer, default=100)
    payload_data_json = Column(Text, default="{}")
    submitted_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="submissions")


# ---------------------------------------------------------------------------
# Database Initialization & Dependency
# ---------------------------------------------------------------------------
def init_db():
    """Create tables automatically upon startup."""
    Base.metadata.create_all(bind=engine)


def get_db():
    """FastAPI database session dependency."""
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()

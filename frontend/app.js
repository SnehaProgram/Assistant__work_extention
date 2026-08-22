// Application State
const AppState = {
  currentView: 'saralfill', 
  darkMode: false,
  language: 'en',
  persona: 'general',
  preferences: {
    tts_on_focus: false,
    voice_nav_enabled: false,
    voice_dictation_enabled: false,
    auto_translate_dom: false,
    visual_captions_enabled: false,
    large_touch_targets: false,
    high_contrast: false
  },
  user: {
    isLoggedIn: false,
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    avatar: 'AS',
    digiLockerLinked: true,
    persona: 'general'
  },
  saralFill: {
    isAnalyzing: false,
    analyzed: true,
    url: 'https://demo.gov/tax-declaration-2024',
    fields: [
      { id: 'f1', name: 'Full Name', type: 'Text Input', icon: 'person', value: 'Aarav Sharma', required: true, mapped: 'Profile: Name' },
      { id: 'f2', name: 'Date of Birth', type: 'Date Picker', icon: 'calendar_today', value: '1992-08-14', required: true, mapped: 'DigiLocker: Aadhaar DOB' },
      { id: 'f3', name: 'Residential Address', type: 'Text Area (Multi-line)', icon: 'home', value: 'Flat 402, Shanti Niketan, Sector 15, New Delhi - 110001', required: true, mapped: 'DigiLocker: Aadhaar Address' },
      { id: 'f4', name: 'Tax ID Number (PAN)', type: 'Alphanumeric', icon: 'badge', value: 'ABCDE1234F', required: true, mapped: 'DigiLocker: e-PAN' },
      { id: 'f5', name: 'Annual Gross Income', type: 'Currency (INR)', icon: 'payments', value: '₹ 8,50,000', required: true, mapped: 'Form 16 / ITR' },
      { id: 'f6', name: 'Mobile Number', type: 'Phone Number', icon: 'call', value: '+91 98765 43210', required: true, mapped: 'Profile: Primary' }
    ]
  },
  saralRead: {
    isAnalyzing: false,
    analyzed: true,
    activeDoc: {
      name: 'PM_Awas_Yojana_Urban_Guidelines_2024.pdf',
      size: '2.4 MB',
      uploadDate: '22 Aug 2024',
      pages: 14,
      summary: {
        en: "Pradhan Mantri Awas Yojana (Urban) provides central assistance to Urban Local Bodies and States/UTs for providing houses to all eligible families/beneficiaries against validated demand for housing by 2024. Beneficiaries get up to ₹2.67 Lakh interest subsidy under Credit Linked Subsidy Scheme (CLSS).",
        hi: "प्रधानमंत्री आवास योजना (शहरी) 2024 तक सभी पात्र परिवारों को पक्के मकान उपलब्ध कराने हेतु केंद्रीय सहायता प्रदान करती है। क्रेडिट लिंक्ड सब्सिडी स्कीम (CLSS) के अंतर्गत लाभार्थियों को ₹2.67 लाख तक की ब्याज सब्सिडी प्रदान की जाती है।"
      },
      keyDates: [
        { title: 'Application Submission Opens', date: '01 September 2024', status: 'Upcoming', icon: 'event_available' },
        { title: 'Document Verification Deadline', date: '15 October 2024', status: 'Critical', icon: 'priority_high' },
        { title: 'First Subsidy Disbursal', date: '30 November 2024', status: 'Scheduled', icon: 'payments' },
        { title: 'Final Geo-tagging Inspection', date: '15 January 2025', status: 'Upcoming', icon: 'location_on' }
      ],
      eligibility: [
        { text: 'Household annual income up to ₹18 Lakhs (EWS/LIG/MIG categories)', status: 'pass', tip: 'Verified via DigiLocker ITR' },
        { text: 'Applicant or any family member should not own a pucca house anywhere in India', status: 'pass', tip: 'Self-declaration required' },
        { text: 'Female head of household must be the owner or co-owner of the property', status: 'warning', tip: 'Mandatory for EWS/LIG' },
        { text: 'Aadhaar identification card of all household members', status: 'pass', tip: 'e-KYC Ready' }
      ]
    },
    isPlayingAudio: false
  },
  saralVoice: {
    isListening: false,
    sourceLang: 'hi',
    targetLang: 'en',
    ws: null,
    audioContext: null,
    processor: null,
    stream: null,
    liveTranscript: '',
    liveTranslation: '',
    entities: {}
  },
  formsList: [
    { title: 'Income Tax Declaration 2024-25', dept: 'Income Tax Dept (e-Filing)', date: 'Today, 11:30 AM', status: 'Ready for Review', statusClass: 'badge-info', progress: 85, icon: 'description' },
    { title: 'Pradhan Mantri Awas Yojana (PMAY-U)', dept: 'Ministry of Housing & Urban Affairs', date: 'Yesterday', status: 'Completed', statusClass: 'badge-success', progress: 100, icon: 'home_work' },
    { title: 'Senior Citizen Pension Scheme Form 60', dept: 'Social Welfare Portal', date: '18 Aug 2024', status: 'Draft', statusClass: 'badge-warning', progress: 40, icon: 'elderly' },
    { title: 'Passport Seva Online Re-issue Application', dept: 'Ministry of External Affairs', date: '12 Aug 2024', status: 'Submitted', statusClass: 'badge-success', progress: 100, icon: 'flight_takeoff' }
  ],
  documentsList: [
    { name: 'PM_Awas_Yojana_Urban_Guidelines.pdf', size: '2.4 MB', date: 'Today', type: 'PDF', pages: 14 },
    { name: 'EPFO_Claim_Form_19_Clarifications.pdf', size: '1.1 MB', date: '20 Aug 2024', type: 'PDF', pages: 6 },
    { name: 'Delhi_Domicile_Certificate_Rules.pdf', size: '890 KB', date: '15 Aug 2024', type: 'PDF', pages: 4 },
    { name: 'Aadhaar_Update_Standard_Cert_2024.pdf', size: '450 KB', date: '10 Aug 2024', type: 'PDF', pages: 2 }
  ],
  translations: {
    en: {
      tagline: 'Smart Form Assistant',
      home: 'Home',
      myForms: 'My Forms',
      documents: 'Documents',
      settings: 'Settings',
      help: 'Help',
      logout: 'Logout',
      newAssistant: 'New Assistant',
      analyzeForm: 'Analyze External Form',
      analyzeDesc: 'Enter the URL of an online form or service page. SaralSetu will scan the page, identify necessary fields, and prepare an accessible smart form interface for you.',
      formUrl: 'Form URL',
      analyzeBtn: 'Analyze Form',
      detectedFields: 'Detected Fields Preview',
      generateSmartForm: 'Generate Smart Form',
      saralReadTitle: 'SaralRead',
      saralReadDesc: 'Upload a complex document to automatically extract key information and eligibility criteria.',
      dropPdf: 'Drag and drop your PDF here',
      orClick: 'or click to browse from your computer',
      selectFile: 'Select File',
      analysisResults: 'Analysis Results',
      keyDates: 'Key Dates & Deadlines',
      eligibility: 'Eligibility Criteria',
      docSummary: 'Document Summary',
      readAloud: 'Read Aloud (Audio)',
      stopAudio: 'Stop Audio'
    },
    hi: {
      tagline: 'स्मार्ट फॉर्म सहायक',
      home: 'होम',
      myForms: 'मेरे फॉर्म',
      documents: 'दस्तावेज़',
      settings: 'सेटिंग्स',
      help: 'सहायता',
      logout: 'लॉगआउट',
      newAssistant: 'नया सहायक',
      analyzeForm: 'ऑनलाइन फॉर्म का विश्लेषण करें',
      analyzeDesc: 'किसी भी सरकारी या सेवा फॉर्म का URL दर्ज करें। सरलसेतु पृष्ठ को स्कैन कर सभी आवश्यक फ़ील्ड की पहचान करेगा और आपके लिए एक सुगम स्मार्ट फॉर्म तैयार करेगा।',
      formUrl: 'फॉर्म URL',
      analyzeBtn: 'फॉर्म स्कैन करें',
      detectedFields: 'पहचाने गए फ़ील्ड्स का पूर्वावलोकन',
      generateSmartForm: 'स्मार्ट फॉर्म बनाएं',
      saralReadTitle: 'सरलरीड (SaralRead)',
      saralReadDesc: 'जटिल पीडीएफ दस्तावेज़ अपलोड करें और मुख्य तिथियों व पात्रता मानदंडों की त्वरित जानकारी प्राप्त करें।',
      dropPdf: 'अपनी PDF फ़ाइल यहाँ खींचें और छोड़ें',
      orClick: 'या अपने कंप्यूटर से फ़ाइल चुनें',
      selectFile: 'फ़ाइल चुनें',
      analysisResults: 'विश्लेषण परिणाम',
      keyDates: 'महत्वपूर्ण तिथियां व समय-सीमा',
      eligibility: 'पात्रता मानदंड',
      docSummary: 'दस्तावेज़ का संक्षिप्त सार',
      readAloud: 'ऑडियो सुनें',
      stopAudio: 'ऑडियो बंद करें'
    }
  }
};

// UI Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTheme();
  initLanguage();
  initSaralFill();
  initSaralRead();
  initSaralVoice();
  initAssistantDrawer();
  initAuthModal();
  AccessibilityEngine.init();
  renderDashboard();
  renderFormsList();
  renderDocumentsList();
});

// Backend API Helper with Bearer Token Authorization
const API_BASE_URL = window.location.protocol.startsWith('http')
  ? `${window.location.protocol}//${window.location.hostname}:8000`
  : 'http://localhost:8000';

async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('saralsetu_token');
  const headers = options.headers || {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  if (options.body && typeof options.body === 'object' && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(options.body);
  }

  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
  try {
    const res = await fetch(url, { ...options, headers });
    return res;
  } catch (err) {
    console.warn(`API Fetch warning for ${endpoint}:`, err);
    throw err;
  }
}

// Authentication Modal Logic
let isAuthSignUpMode = true;

function initAuthModal() {
  const authModal = document.getElementById('auth-modal');
  const openButtons = document.querySelectorAll('.btn-open-auth');
  const closeBtn = document.getElementById('btn-close-auth');
  const toggleBtn = document.getElementById('toggle-auth-mode');
  const signupForm = document.getElementById('signup-form');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (authModal) {
        authModal.classList.remove('hidden');
        authModal.classList.add('flex');
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (authModal) {
        authModal.classList.add('hidden');
        authModal.classList.remove('flex');
      }
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isAuthSignUpMode = !isAuthSignUpMode;
      updateAuthModalUI();
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', handleAuthSubmit);
  }

  // Auto-sync user profile vault if token exists
  loadUserProfileVault();
}

function updateAuthModalUI() {
  const title = document.getElementById('auth-modal-title');
  const nameGroup = document.getElementById('auth-name-group');
  const personaSection = document.getElementById('auth-persona-section');
  const submitBtn = document.getElementById('auth-submit-btn');
  const prompt = document.getElementById('auth-toggle-prompt');
  const toggleBtn = document.getElementById('toggle-auth-mode');

  if (isAuthSignUpMode) {
    if (title) title.textContent = 'Join SaralSetu';
    if (nameGroup) nameGroup.classList.remove('hidden');
    if (personaSection) personaSection.classList.remove('hidden');
    if (submitBtn) submitBtn.textContent = 'Create Account & Activate Profile';
    if (prompt) prompt.textContent = 'Already have an account? ';
    if (toggleBtn) toggleBtn.textContent = 'Log In';
  } else {
    if (title) title.textContent = 'Welcome Back to SaralSetu';
    if (nameGroup) nameGroup.classList.add('hidden');
    if (personaSection) personaSection.classList.add('hidden');
    if (submitBtn) submitBtn.textContent = 'Log In to Your Vault';
    if (prompt) prompt.textContent = "Don't have an account yet? ";
    if (toggleBtn) toggleBtn.textContent = 'Sign Up';
  }
}

async function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email')?.value?.trim();
  const password = document.getElementById('auth-password')?.value;
  const fullName = document.getElementById('auth-fullName')?.value?.trim();
  const submitBtn = document.getElementById('auth-submit-btn');

  if (!email || !password) {
    showToast('Please enter your email and password.', 'error', 'warning');
    return;
  }

  if (submitBtn) submitBtn.disabled = true;

  const endpoint = isAuthSignUpMode ? '/api/v1/auth/signup' : '/api/v1/auth/login';
  const payload = isAuthSignUpMode
    ? { email, password, full_name: fullName || 'User', persona_type: AppState.persona || 'general' }
    : { email, password };

  try {
    const res = await apiFetch(endpoint, {
      method: 'POST',
      body: payload
    });

    const data = await res.json();

    if (!res.ok) {
      showToast(data.detail || 'Authentication failed. Please check your credentials.', 'error', 'error');
      if (submitBtn) submitBtn.disabled = false;
      return;
    }

    // Save JWT token in localStorage
    if (data.access_token) {
      localStorage.setItem('saralsetu_token', data.access_token);
      AppState.user.isLoggedIn = true;
      AppState.user.email = data.email || email;
      AppState.user.name = data.full_name || fullName || 'User';

      showToast(`Welcome ${AppState.user.name}! Connected to profile vault.`, 'success', 'account_circle');

      // Close modal
      const authModal = document.getElementById('auth-modal');
      if (authModal) {
        authModal.classList.add('hidden');
        authModal.classList.remove('flex');
      }

      // Sync profile vault
      await loadUserProfileVault();
      updateUserAccountUI();
    }
  } catch (err) {
    console.error('Auth submit error:', err);
    // Offline/Fallback simulation mode
    localStorage.setItem('saralsetu_token', 'demo-stateless-jwt-token-fallback');
    AppState.user.isLoggedIn = true;
    AppState.user.email = email;
    AppState.user.name = fullName || 'Aarav Sharma';
    showToast(`Signed in locally (Offline mode active)`, 'info', 'check');
    const authModal = document.getElementById('auth-modal');
    if (authModal) {
      authModal.classList.add('hidden');
      authModal.classList.remove('flex');
    }
    updateUserAccountUI();
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

async function loadUserProfileVault() {
  const token = localStorage.getItem('saralsetu_token');
  if (!token) return;

  try {
    const res = await apiFetch('/api/v1/profile');
    if (res.ok) {
      const data = await res.json();
      if (data.user) {
        AppState.user.isLoggedIn = true;
        AppState.user.email = data.user.email;
        AppState.user.name = data.user.full_name;
      }
      if (data.profile) {
        if (data.profile.preferences) {
          AppState.preferences = { ...AppState.preferences, ...data.profile.preferences };
        }
        if (data.profile.persona_type) {
          AppState.persona = data.profile.persona_type;
        }
        // Update SaralFill form defaults with vault values
        if (data.profile.full_name && AppState.saralFill.fields[0]) AppState.saralFill.fields[0].value = data.profile.full_name;
        if (data.profile.dob && AppState.saralFill.fields[1]) AppState.saralFill.fields[1].value = data.profile.dob;
        if (data.profile.address && AppState.saralFill.fields[2]) AppState.saralFill.fields[2].value = data.profile.address;
        if (data.profile.pan_number && AppState.saralFill.fields[3]) AppState.saralFill.fields[3].value = data.profile.pan_number;
        if (data.profile.gross_income && AppState.saralFill.fields[4]) AppState.saralFill.fields[4].value = data.profile.gross_income;
        if (data.profile.mobile_number && AppState.saralFill.fields[5]) AppState.saralFill.fields[5].value = data.profile.mobile_number;
      }
      updateUserAccountUI();
    }
  } catch (err) {
    console.warn('Could not load profile vault from backend:', err);
  }
}

function updateUserAccountUI() {
  const authButtons = document.querySelectorAll('.btn-open-auth');
  authButtons.forEach(btn => {
    if (AppState.user.isLoggedIn) {
      btn.innerHTML = `
        <span class="material-symbols-outlined text-tertiary-container dark:text-tertiary-fixed text-[20px]">account_circle</span>
        <span class="truncate max-w-[120px]">${AppState.user.name}</span>
      `;
    } else {
      btn.innerHTML = `
        <span class="material-symbols-outlined group-hover:text-secondary transition-colors text-[20px]">account_circle</span>
        <span>Account / Login</span>
      `;
    }
  });
}

function handleLogout() {
  localStorage.removeItem('saralsetu_token');
  AppState.user.isLoggedIn = false;
  updateUserAccountUI();
  showToast('Logged out of your SaralSetu account.', 'info', 'logout');
}

// Toast System

function showToast(message, type = 'info', icon = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-sm px-md py-sm rounded-lg shadow-lg border text-sm font-medium animate-fade-in-up bg-surface-container-lowest dark:bg-surface-container-high border-outline-variant/30 text-on-surface z-50`;
  
  let iconColor = 'text-secondary';
  if (type === 'success') iconColor = 'text-tertiary-container dark:text-tertiary-fixed';
  if (type === 'error') iconColor = 'text-error';

  toast.innerHTML = `
    <span class="material-symbols-outlined ${iconColor} text-[20px]">${icon}</span>
    <span class="flex-1">${message}</span>
    <button class="text-outline hover:text-on-surface ml-sm" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Navigation & Tab Switching
function initNavigation() {
  const navButtons = document.querySelectorAll('[data-route]');
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const route = btn.getAttribute('data-route');
      switchView(route);
    });
  });
}

function switchView(viewName) {
  AppState.currentView = viewName;
  
  // Hide all view sections
  const views = document.querySelectorAll('.app-view');
  views.forEach(v => {
    v.classList.add('hidden');
  });

  // Show active view
  const activeView = document.getElementById(`view-${viewName}`);
  if (activeView) {
    activeView.classList.remove('hidden');
    activeView.classList.add('animate-fade-in');
  }

  // Update active state in SideNav & TopNav
  document.querySelectorAll('[data-route]').forEach(btn => {
    const route = btn.getAttribute('data-route');
    if (route === viewName) {
      btn.classList.add('bg-secondary-container', 'dark:bg-secondary', 'text-on-secondary-container', 'dark:text-on-secondary', 'font-bold');
      btn.classList.remove('text-on-surface-variant', 'dark:text-outline-variant');
      // For topnav border
      if (btn.classList.contains('topnav-link')) {
        btn.classList.add('border-b-2', 'border-secondary', 'text-secondary');
        btn.classList.remove('border-transparent');
      }
    } else {
      btn.classList.remove('bg-secondary-container', 'dark:bg-secondary', 'text-on-secondary-container', 'dark:text-on-secondary', 'font-bold');
      btn.classList.add('text-on-surface-variant', 'dark:text-outline-variant');
      if (btn.classList.contains('topnav-link')) {
        btn.classList.remove('border-b-2', 'border-secondary', 'text-secondary');
        btn.classList.add('border-transparent');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme Toggle
function initTheme() {
  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.darkMode = !AppState.darkMode;
      if (AppState.darkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        btn.innerHTML = `<span class="material-symbols-outlined text-secondary dark:text-secondary-fixed">light_mode</span>`;
        showToast('Dark theme activated', 'info', 'dark_mode');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        btn.innerHTML = `<span class="material-symbols-outlined text-secondary dark:text-secondary-fixed">dark_mode</span>`;
        showToast('Light theme activated', 'info', 'light_mode');
      }
    });
  });
}

// Language Switcher
function initLanguage() {
  const langToggleButtons = document.querySelectorAll('.lang-toggle-btn');
  langToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.language = AppState.language === 'en' ? 'hi' : 'en';
      updateLanguageUI();
      const msg = AppState.language === 'hi' ? 'भाषा बदलकर हिन्दी कर दी गई है।' : 'Language changed to English.';
      showToast(msg, 'success', 'language');
    });
  });
}

function updateLanguageUI() {
  const t = AppState.translations[AppState.language];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update SaralRead summary if present
  const summaryEl = document.getElementById('saralread-summary-text');
  if (summaryEl && AppState.saralRead.activeDoc) {
    summaryEl.textContent = AppState.saralRead.activeDoc.summary[AppState.language];
  }
}

// SaralFill Logic
function initSaralFill() {
  const analyzeBtn = document.getElementById('btn-analyze-form');
  const urlInput = document.getElementById('url-input');
  const scanProgressContainer = document.getElementById('scan-progress-container');
  const analysisResultsContainer = document.getElementById('analysis-results-container');
  const generateSmartFormBtn = document.getElementById('btn-generate-smart-form');
  const discardBtn = document.getElementById('btn-discard-analysis');

  if (analyzeBtn && urlInput) {
    analyzeBtn.addEventListener('click', () => {
      const url = urlInput.value.trim();
      if (!url) {
        showToast('Please enter a valid URL', 'error', 'warning');
        return;
      }

      // Show scanning state
      AppState.saralFill.isAnalyzing = true;
      scanProgressContainer.classList.remove('hidden');
      analysisResultsContainer.classList.add('hidden');
      analyzeBtn.disabled = true;
      analyzeBtn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[18px]">sync</span> Scanning URL...`;

      setTimeout(() => {
        AppState.saralFill.isAnalyzing = false;
        AppState.saralFill.analyzed = true;
        scanProgressContainer.classList.add('hidden');
        analysisResultsContainer.classList.remove('hidden');
        analyzeBtn.disabled = false;
        analyzeBtn.innerHTML = `<span class="material-symbols-outlined text-[18px]">document_scanner</span> Analyze Form`;
        
        renderSaralFillFields();
        showToast('Form successfully scanned! 6 essential fields identified.', 'success', 'check_circle');
      }, 1500);
    });
  }

  if (discardBtn) {
    discardBtn.addEventListener('click', () => {
      analysisResultsContainer.classList.add('hidden');
      urlInput.value = '';
      showToast('Form analysis cleared', 'info', 'delete');
    });
  }

  if (generateSmartFormBtn) {
    generateSmartFormBtn.addEventListener('click', () => {
      openSmartFormModal();
    });
  }

  renderSaralFillFields();
}

function renderSaralFillFields() {
  const container = document.getElementById('detected-fields-grid');
  const countBadge = document.getElementById('detected-fields-count');
  if (!container) return;

  if (countBadge) {
    countBadge.textContent = `${AppState.saralFill.fields.length} Fields Found`;
  }

  container.innerHTML = AppState.saralFill.fields.map((f, index) => `
    <div class="bg-surface-bright dark:bg-surface-container-low rounded-lg p-sm border border-outline-variant/20 flex items-start gap-md hover:border-secondary/50 transition-all group">
      <div class="bg-surface-container-high dark:bg-surface-container rounded-md p-xs text-on-surface-variant mt-xs group-hover:text-secondary transition-colors">
        <span class="material-symbols-outlined text-[20px]">${f.icon}</span>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-xs">
          <h4 class="font-label-bold text-label-bold text-on-surface truncate">${f.name}</h4>
          ${f.required ? '<span class="text-error text-xs">*</span>' : ''}
        </div>
        <p class="font-label-sm text-label-sm text-outline">Type: ${f.type}</p>
        <span class="inline-block mt-xs px-xs py-0.5 rounded text-[11px] bg-secondary-fixed/50 dark:bg-secondary-container/50 text-on-secondary-fixed dark:text-on-secondary-container">
          ⚡ ${f.mapped}
        </span>
      </div>
      <div class="flex items-center gap-xs ml-auto">
        <button class="p-xs text-outline hover:text-secondary rounded hover:bg-surface-container transition-colors" title="Edit Field Mapping" onclick="editField('${f.id}')">
          <span class="material-symbols-outlined text-[16px]">edit</span>
        </button>
        <button class="p-xs text-outline hover:text-error rounded hover:bg-surface-container transition-colors" title="Remove Field" onclick="removeField('${f.id}')">
          <span class="material-symbols-outlined text-[16px]">delete</span>
        </button>
      </div>
    </div>
  `).join('');
}

window.removeField = function(id) {
  AppState.saralFill.fields = AppState.saralFill.fields.filter(f => f.id !== id);
  renderSaralFillFields();
  showToast('Field removed from mapping', 'info', 'delete');
};

window.editField = function(id) {
  const field = AppState.saralFill.fields.find(f => f.id === id);
  if (!field) return;
  const newName = prompt('Edit field label:', field.name);
  if (newName && newName.trim()) {
    field.name = newName.trim();
    renderSaralFillFields();
    showToast(`Updated to "${field.name}"`, 'success', 'edit');
  }
};

// Smart Form Modal & Dynamic Form Execution
function openSmartFormModal() {
  const modal = document.getElementById('smart-form-modal');
  if (!modal) return;

  const formContent = document.getElementById('smart-form-dynamic-fields');
  if (formContent) {
    formContent.innerHTML = AppState.saralFill.fields.map(f => {
      let inputHtml = '';
      if (f.type.includes('Multi-line')) {
        inputHtml = `<textarea id="input-${f.id}" class="w-full bg-surface dark:bg-surface-container border border-outline-variant rounded-md px-md py-sm font-body text-body text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors" rows="2">${f.value || ''}</textarea>`;
      } else if (f.type.includes('Date')) {
        inputHtml = `<input id="input-${f.id}" type="date" value="${f.value || '1992-08-14'}" class="w-full bg-surface dark:bg-surface-container border border-outline-variant rounded-md px-md py-sm font-body text-body text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"/>`;
      } else {
        inputHtml = `<input id="input-${f.id}" type="text" value="${f.value || ''}" placeholder="Enter ${f.name}" class="w-full bg-surface dark:bg-surface-container border border-outline-variant rounded-md px-md py-sm font-body text-body text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"/>`;
      }

      return `
        <div class="flex flex-col gap-xs">
          <div class="flex justify-between items-center">
            <label class="font-label-bold text-label-bold text-on-surface flex items-center gap-xs" for="input-${f.id}">
              <span class="material-symbols-outlined text-[16px] text-secondary">${f.icon}</span>
              ${f.name} ${f.required ? '<span class="text-error">*</span>' : ''}
            </label>
            <span class="text-xs text-outline font-label-sm">${f.mapped}</span>
          </div>
          ${inputHtml}
        </div>
      `;
    }).join('');
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

window.closeSmartFormModal = function() {
  const modal = document.getElementById('smart-form-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.handleAutoFillDigiLocker = function() {
  showToast('Fetching authentic records from DigiLocker...', 'info', 'sync');
  setTimeout(() => {
    AppState.saralFill.fields.forEach(f => {
      const el = document.getElementById(`input-${f.id}`);
      if (el && f.value) {
        el.value = f.value;
        el.classList.add('bg-secondary-fixed/20');
        setTimeout(() => el.classList.remove('bg-secondary-fixed/20'), 1000);
      }
    });
    showToast('All fields auto-filled from verified DigiLocker e-KYC documents!', 'success', 'verified');
  }, 900);
};

window.handleSubmitSmartForm = function(e) {
  if (e) e.preventDefault();
  closeSmartFormModal();
  showToast('Smart Form validated and successfully submitted to destination portal!', 'success', 'task_alt');
  
  // Add to recent forms
  AppState.formsList.unshift({
    title: 'Tax Declaration 2024-25',
    dept: 'Income Tax Portal',
    date: 'Just now',
    status: 'Submitted',
    statusClass: 'badge-success',
    progress: 100,
    icon: 'task_alt'
  });
  renderFormsList();
  renderDashboard();
};

// SaralRead Document Reader Logic
function initSaralRead() {
  const dropZone = document.getElementById('pdf-drop-zone');
  const fileInput = document.getElementById('pdf-file-input');
  const analyzeDocBtn = document.getElementById('btn-analyze-doc');
  const audioPlayBtn = document.getElementById('btn-play-audio');

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('border-secondary', 'bg-surface-container-low');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('border-secondary', 'bg-surface-container-low');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('border-secondary', 'bg-surface-container-low');
      if (e.dataTransfer.files.length > 0) {
        handleFileUpload(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleFileUpload(e.target.files[0]);
      }
    });
  }

  if (analyzeDocBtn) {
    analyzeDocBtn.addEventListener('click', () => {
      showToast('Re-analyzing document with AI Assistant...', 'info', 'auto_awesome');
      renderSaralReadResults();
    });
  }

  if (audioPlayBtn) {
    audioPlayBtn.addEventListener('click', toggleAudioReading);
  }

  renderSaralReadResults();
}

function handleFileUpload(file) {
  showToast(`Uploading and scanning "${file.name}"...`, 'info', 'upload_file');
  AppState.saralRead.activeDoc.name = file.name;
  AppState.saralRead.activeDoc.size = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;

  const fileNameEl = document.getElementById('uploaded-file-name');
  if (fileNameEl) fileNameEl.textContent = file.name;

  setTimeout(() => {
    showToast('AI analysis completed! Summary & deadlines extracted.', 'success', 'check_circle');
    renderSaralReadResults();
  }, 1200);
}

function renderSaralReadResults() {
  const doc = AppState.saralRead.activeDoc;
  if (!doc) return;

  // Summary Text
  const summaryEl = document.getElementById('saralread-summary-text');
  if (summaryEl) {
    summaryEl.textContent = doc.summary[AppState.language];
  }

  // Key Dates
  const datesContainer = document.getElementById('saralread-dates-list');
  if (datesContainer) {
    datesContainer.innerHTML = doc.keyDates.map(d => `
      <div class="flex items-start gap-sm p-sm rounded-lg bg-surface dark:bg-surface-container-low border border-outline-variant/20 hover:border-secondary/30 transition-colors">
        <span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">${d.icon}</span>
        <div class="flex-1">
          <h5 class="font-label-bold text-label-bold text-on-surface text-sm">${d.title}</h5>
          <p class="font-body text-xs text-on-surface-variant">${d.date}</p>
        </div>
        <span class="text-[11px] font-medium px-xs py-0.5 rounded ${d.status === 'Critical' ? 'bg-error-container text-on-error-container' : 'bg-secondary-fixed text-on-secondary-fixed'}">
          ${d.status}
        </span>
      </div>
    `).join('');
  }

  // Eligibility Checklist
  const eligContainer = document.getElementById('saralread-eligibility-list');
  if (eligContainer) {
    eligContainer.innerHTML = doc.eligibility.map((e, index) => `
      <label class="flex items-start gap-sm p-sm rounded-lg bg-surface dark:bg-surface-container-low border border-outline-variant/20 cursor-pointer hover:bg-surface-container-high/40 transition-colors">
        <input type="checkbox" checked class="mt-1 rounded text-secondary focus:ring-secondary cursor-pointer"/>
        <div class="flex-1">
          <p class="font-body text-xs text-on-surface leading-relaxed">${e.text}</p>
          <span class="text-[11px] text-tertiary-container dark:text-tertiary-fixed font-medium mt-0.5 inline-block">✓ ${e.tip}</span>
        </div>
      </label>
    `).join('');
  }
}

function toggleAudioReading() {
  AppState.saralRead.isPlayingAudio = !AppState.saralRead.isPlayingAudio;
  const audioBtn = document.getElementById('btn-play-audio');
  const waveEl = document.getElementById('audio-waveform');

  if (AppState.saralRead.isPlayingAudio) {
    if (audioBtn) {
      audioBtn.innerHTML = `<span class="material-symbols-outlined text-[18px]">stop</span> Stop Audio`;
      audioBtn.classList.replace('bg-secondary', 'bg-error');
    }
    if (waveEl) waveEl.classList.remove('hidden');
    showToast('Playing voice summary in natural regional voice...', 'info', 'volume_up');

    // Simulate speech synthesis if available
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const textToRead = AppState.saralRead.activeDoc.summary[AppState.language];
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = AppState.language === 'hi' ? 'hi-IN' : 'en-US';
      utterance.onend = () => toggleAudioReading();
      window.speechSynthesis.speak(utterance);
    }
  } else {
    if (audioBtn) {
      audioBtn.innerHTML = `<span class="material-symbols-outlined text-[18px]">volume_up</span> Read Aloud (Audio)`;
      audioBtn.classList.replace('bg-error', 'bg-secondary');
    }
    if (waveEl) waveEl.classList.add('hidden');
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    showToast('Audio playback stopped', 'info', 'volume_off');
  }
}

// Global Voice Navigation Command Processor
function processVoiceNavigationCommand(text) {
  if (!text) return false;
  const lower = text.toLowerCase().trim();

  // 1. Voice Page Navigation
  if (lower.includes('saralvoice') || lower.includes('saral voice') || lower.includes('voice page') || lower.includes('voice assistant') || lower.includes('voice mode') || lower.includes('वॉइस') || lower.includes('सरलवॉइस')) {
    switchView('saralvoice');
    showToast('🎙️ Voice Navigation: Switched to SaralVoice Assistant', 'success', 'mic');
    AccessibilityEngine.speak('Navigating to SaralVoice real time assistant.');
    return true;
  }

  // 2. Smart Form (SaralFill) Navigation
  if (lower.includes('saralfill') || lower.includes('saral fill') || lower.includes('smart form') || lower.includes('fill form') || lower.includes('form assistant') || lower.includes('सरलफिल')) {
    switchView('saralfill');
    showToast('⚡ Voice Navigation: Switched to SaralFill Smart Form', 'success', 'dynamic_form');
    AccessibilityEngine.speak('Navigating to SaralFill smart form assistant.');
    return true;
  }

  // 3. Document Reader (SaralRead) Navigation
  if (lower.includes('saralread') || lower.includes('saral read') || lower.includes('read doc') || lower.includes('read pdf') || lower.includes('pdf reader') || lower.includes('सरलरीड')) {
    switchView('saralread');
    showToast('📄 Voice Navigation: Switched to SaralRead Document Assistant', 'success', 'picture_as_pdf');
    AccessibilityEngine.speak('Navigating to SaralRead document assistant.');
    return true;
  }

  // 4. Home Dashboard Navigation
  if (lower.includes('home') || lower.includes('dashboard') || lower.includes('main page') || lower.includes('होम') || lower.includes('मुख्य पृष्ठ')) {
    switchView('dashboard');
    showToast('🏠 Voice Navigation: Switched to Home Dashboard', 'success', 'dashboard');
    AccessibilityEngine.speak('Navigating to Home Dashboard.');
    return true;
  }

  // 5. My Forms List Navigation
  if (lower.includes('my forms') || lower.includes('my form') || lower.includes('forms list') || lower.includes('मेरे फॉर्म')) {
    switchView('myforms');
    showToast('📋 Voice Navigation: Switched to My Forms', 'success', 'description');
    AccessibilityEngine.speak('Navigating to My Forms.');
    return true;
  }

  // 6. Documents Vault Navigation
  if (lower.includes('documents') || lower.includes('my documents') || lower.includes('document vault') || lower.includes('दस्तावेज़')) {
    switchView('documents');
    showToast('📁 Voice Navigation: Switched to Documents', 'success', 'folder_open');
    AccessibilityEngine.speak('Navigating to Documents.');
    return true;
  }

  // 7. Settings Navigation
  if (lower.includes('settings') || lower.includes('preferences') || lower.includes('सेटिंग्स')) {
    switchView('settings');
    showToast('⚙️ Voice Navigation: Switched to Settings', 'success', 'settings');
    AccessibilityEngine.speak('Navigating to Settings.');
    return true;
  }

  // 8. Login / Account Modal Trigger
  if (lower.includes('login') || lower.includes('log in') || lower.includes('sign in') || lower.includes('account') || lower.includes('खाता')) {
    const authModal = document.getElementById('auth-modal');
    if (authModal) {
      authModal.classList.remove('hidden');
      authModal.classList.add('flex');
    }
    showToast('🔑 Voice Navigation: Opened Account Login Modal', 'info', 'account_circle');
    AccessibilityEngine.speak('Opening account login modal.');
    return true;
  }

  // 9. Theme Mode Toggle
  if (lower.includes('dark mode') || lower.includes('light mode') || lower.includes('theme') || lower.includes('डार्क मोड')) {
    document.querySelector('.theme-toggle-btn')?.click();
    AccessibilityEngine.speak('Toggling theme mode.');
    return true;
  }

  // 10. Auto-Fill Trigger
  if (lower.includes('auto fill') || lower.includes('autofill') || lower.includes('digilocker') || lower.includes('भरें')) {
    window.handleAutoFillDigiLocker?.();
    AccessibilityEngine.speak('Auto filling form data from DigiLocker.');
    return true;
  }

  // 11. Next / Submit Trigger
  if (lower.includes('next') || lower.includes('submit') || lower.includes('आगे') || lower.includes('सबमिट')) {
    const subBtn = document.querySelector('button[type="submit"], #btn-generate-smart-form');
    if (subBtn) {
      subBtn.click();
      AccessibilityEngine.speak('Submitting form.');
    }
    return true;
  }

  return false;
}

// Assistant Chat Drawer (Floating Action Button)
function initAssistantDrawer() {
  const fab = document.getElementById('btn-floating-assistant');
  const drawer = document.getElementById('assistant-drawer');
  const closeBtn = document.getElementById('btn-close-assistant');
  const chatInput = document.getElementById('assistant-chat-input');
  const sendBtn = document.getElementById('btn-send-assistant-msg');
  const voiceInputBtn = document.getElementById('btn-assistant-voice-input');
  const messagesContainer = document.getElementById('assistant-chat-messages');

  if (fab && drawer) {
    fab.addEventListener('click', () => {
      drawer.classList.remove('drawer-closed');
      drawer.classList.add('drawer-open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('drawer-closed');
      drawer.classList.remove('drawer-open');
    });
  }

  const handleSend = () => {
    const text = chatInput.value.trim();
    if (!text) return;

    // Append user message
    appendAssistantMessage('user', text);
    chatInput.value = '';

    // First check if it's a voice navigation command (e.g. "go to saralVoice")
    const isNavCommand = processVoiceNavigationCommand(text);
    if (isNavCommand) {
      appendAssistantMessage('assistant', `🎙️ Voice Command Processed: Executing navigation for "${text}".`);
      return;
    }

    // Otherwise simulate AI response
    setTimeout(() => {
      let reply = "I can guide you step-by-step through SaralSetu. You can say 'Go to SaralVoice', 'Go to SaralFill', 'Go to SaralRead', or ask any query!";
      if (text.toLowerCase().includes('pan') || text.toLowerCase().includes('tax')) {
        reply = "For PAN and Tax declaration, SaralSetu connects directly to your verified DigiLocker e-PAN card to auto-fill mandatory Section 80C and Income fields.";
      } else if (text.toLowerCase().includes('pmay') || text.toLowerCase().includes('awas')) {
        reply = "For PMAY-U housing scheme, the subsidy is up to ₹2.67 Lakh for EWS/LIG families with an annual income below ₹18 Lakhs.";
      } else if (text.toLowerCase().includes('hindi') || text.toLowerCase().includes('हिन्दी')) {
        reply = "हाँ, आप ऊपर भाषा बटन पर क्लिक करके पूरी वेबसाइट हिन्दी में भी उपयोग कर सकते हैं।";
      }
      appendAssistantMessage('assistant', reply);
    }, 600);
  };

  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  // Voice Input Mic Button in Assistant Chat Drawer
  if (voiceInputBtn) {
    voiceInputBtn.addEventListener('click', () => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        try {
          const rec = new SpeechRecognition();
          rec.lang = AppState.language === 'hi' ? 'hi-IN' : 'en-US';
          rec.interimResults = false;
          showToast('🎤 Listening for voice command...', 'info', 'mic');
          voiceInputBtn.classList.add('animate-pulse', 'text-error');

          rec.onresult = (e) => {
            const transcript = e.results[0][0].transcript;
            if (chatInput) chatInput.value = transcript;
            showToast(`Voice Recognized: "${transcript}"`, 'success', 'record_voice_over');
            handleSend();
          };

          rec.onerror = (err) => {
            console.warn('Speech recognition error:', err);
            voiceInputBtn.classList.remove('animate-pulse', 'text-error');
          };

          rec.onend = () => {
            voiceInputBtn.classList.remove('animate-pulse', 'text-error');
          };

          rec.start();
        } catch (err) {
          console.warn('Could not start SpeechRecognition:', err);
        }
      } else {
        showToast('Microphone voice recognition available in modern browsers or Voice Mode.', 'warning', 'mic_off');
      }
    });
  }
}


function appendAssistantMessage(sender, text) {
  const container = document.getElementById('assistant-chat-messages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `flex gap-xs items-start ${sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`;

  if (sender === 'user') {
    msgDiv.innerHTML = `
      <div class="bg-secondary text-on-secondary text-xs rounded-xl rounded-tr-none px-md py-sm max-w-[80%] leading-relaxed shadow-sm">
        ${text}
      </div>
      <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary text-[10px] font-bold shrink-0">
        U
      </div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[10px] font-bold shrink-0">
        SS
      </div>
      <div class="bg-surface-container-high dark:bg-surface-container text-on-surface text-xs rounded-xl rounded-tl-none px-md py-sm max-w-[80%] leading-relaxed shadow-sm">
        ${text}
      </div>
    `;
  }

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

window.askQuickAssistant = function(query) {
  const chatInput = document.getElementById('assistant-chat-input');
  if (chatInput) {
    chatInput.value = query;
    document.getElementById('btn-send-assistant-msg').click();
  }
};

// Auth Modal & Flows
// ---------------------------------------------------------------------------
// Accessibility Persona Presets & Dynamic Engine
// ---------------------------------------------------------------------------
const PERSONA_PRESET_MAP = {
  visual: {
    title: "Voice & Screen Reader Mode",
    badge: "Blind / Visually Impaired",
    tts_on_focus: true,
    voice_nav_enabled: true,
    voice_dictation_enabled: true,
    auto_translate_dom: false,
    visual_captions_enabled: false,
    large_touch_targets: false,
    high_contrast: true,
    toastMsg: "Screen Reader & TTS focus narration activated."
  },
  motor: {
    title: "Hands-Free Voice Navigation",
    badge: "Motor-Impaired / Weak Hands",
    tts_on_focus: false,
    voice_nav_enabled: true,
    voice_dictation_enabled: true,
    auto_translate_dom: false,
    visual_captions_enabled: false,
    large_touch_targets: true,
    high_contrast: false,
    toastMsg: "Voice Navigation & Dictation mode enabled."
  },
  dyslexic: {
    title: "Native Regional & Simplified Mode",
    badge: "Dyslexic / Low Literacy",
    tts_on_focus: true,
    voice_nav_enabled: false,
    voice_dictation_enabled: false,
    auto_translate_dom: true,
    visual_captions_enabled: false,
    large_touch_targets: false,
    high_contrast: false,
    toastMsg: "Vernacular Auto-Translate & spell-free fill enabled."
  },
  hearing: {
    title: "Visual Captions Mode",
    badge: "Deaf / Hard of Hearing",
    tts_on_focus: false,
    voice_nav_enabled: false,
    voice_dictation_enabled: false,
    auto_translate_dom: false,
    visual_captions_enabled: true,
    large_touch_targets: false,
    high_contrast: false,
    toastMsg: "Always-On Visual Captions HUD enabled."
  },
  elderly: {
    title: "Elderly Citizen Easy Assist",
    badge: "Elderly Citizen Mode",
    tts_on_focus: true,
    voice_nav_enabled: true,
    voice_dictation_enabled: true,
    auto_translate_dom: true,
    visual_captions_enabled: false,
    large_touch_targets: true,
    high_contrast: false,
    toastMsg: "1-Click Auto-Fill, Voice Assist & Large touch targets active."
  },
  general: {
    title: "Standard Speed Fill",
    badge: "Students & General Applicants",
    tts_on_focus: false,
    voice_nav_enabled: false,
    voice_dictation_enabled: false,
    auto_translate_dom: false,
    visual_captions_enabled: false,
    large_touch_targets: false,
    high_contrast: false,
    toastMsg: "Multi-portal profile vault active."
  }
};

window.selectPersona = function(personaKey) {
  AppState.persona = personaKey;
  if (AppState.user) AppState.user.persona = personaKey;

  // Update UI selection highlight
  document.querySelectorAll('.persona-card').forEach(card => {
    if (card.getAttribute('data-persona') === personaKey) {
      card.classList.add('selected');
      card.classList.add('border-secondary');
    } else {
      card.classList.remove('selected');
      card.classList.remove('border-secondary');
    }
  });

  const preset = PERSONA_PRESET_MAP[personaKey];
  if (preset && AppState.preferences.tts_on_focus) {
    AccessibilityEngine.speak(`${preset.title} selected.`);
  }
};

const AccessibilityEngine = {
  _focusHandler: null,
  _voiceRecognition: null,

  init() {
    const savedPersona = localStorage.getItem('saralsetu_persona') || 'general';
    this.applyPersona(savedPersona, false);
  },

  applyPersona(personaKey, notify = true) {
    const preset = PERSONA_PRESET_MAP[personaKey] || PERSONA_PRESET_MAP.general;
    AppState.persona = personaKey;
    AppState.preferences = { ...preset };

    localStorage.setItem('saralsetu_persona', personaKey);
    localStorage.setItem('saralsetu_preferences', JSON.stringify(AppState.preferences));

    // Update settings UI badge & checkboxes
    const badge = document.getElementById('active-persona-badge');
    if (badge) badge.textContent = preset.badge;

    const ttsCheck = document.getElementById('pref-tts-focus');
    if (ttsCheck) ttsCheck.checked = preset.tts_on_focus;
    const voiceNavCheck = document.getElementById('pref-voice-nav');
    if (voiceNavCheck) voiceNavCheck.checked = preset.voice_nav_enabled;
    const translateCheck = document.getElementById('pref-auto-translate');
    if (translateCheck) translateCheck.checked = preset.auto_translate_dom;
    const captionsCheck = document.getElementById('pref-captions');
    if (captionsCheck) captionsCheck.checked = preset.visual_captions_enabled;
    const targetsCheck = document.getElementById('pref-large-targets');
    if (targetsCheck) targetsCheck.checked = preset.large_touch_targets;
    const contrastCheck = document.getElementById('pref-high-contrast');
    if (contrastCheck) contrastCheck.checked = preset.high_contrast;

    this.applyPreferences(AppState.preferences);
    this.renderPersonaDashboard(personaKey);

    if (notify) {
      showToast(preset.toastMsg, 'success', 'accessibility_new');
      if (preset.tts_on_focus) {
        this.speak(`Accessibility profile updated to ${preset.title}.`);
      }
    }
  },

  renderPersonaDashboard(personaKey) {
    const container = document.getElementById('persona-tailored-hub');
    const generalComponents = document.getElementById('general-dashboard-components');
    if (!container) return;

    if (personaKey === 'general') {
      container.innerHTML = '';
      if (generalComponents) generalComponents.classList.remove('hidden');
      return;
    }

    if (generalComponents) {
      generalComponents.classList.add('hidden');
    }

    let hubHtml = '';

    if (personaKey === 'visual') {
      hubHtml = `
        <div class="bg-primary text-on-primary rounded-2xl p-lg md:p-xl flex flex-col gap-md shadow-xl border-2 border-primary-fixed animate-fade-in">
          <div class="flex items-center justify-between border-b border-primary-fixed/20 pb-sm">
            <div class="flex items-center gap-sm">
              <span class="material-symbols-outlined text-[32px] text-tertiary-fixed">visibility_off</span>
              <div>
                <h2 class="font-h1 text-[24px] font-bold text-white">Voice & Audio Command Hub</h2>
                <p class="text-xs text-primary-fixed">Screen Reader & High-Contrast Mode Active. Every field is narrated automatically.</p>
              </div>
            </div>
            <button class="bg-white/10 text-white px-md py-1 rounded-full text-xs font-bold border border-white/20 hover:bg-white/20 cursor-pointer" onclick="AccessibilityEngine.speak('Voice and audio screen reader mode is active. You can press the big buttons below or speak into your microphone.')">
              🔊 Hear Instructions
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-md pt-xs">
            <button class="bg-secondary text-on-secondary p-lg rounded-xl flex flex-col items-center justify-center gap-sm hover:brightness-110 active:scale-95 transition-all text-center min-h-[140px] shadow-lg border-2 border-white/20 cursor-pointer" onclick="switchView('saralvoice'); document.getElementById('btn-start-voice')?.click(); AccessibilityEngine.speak('Starting real time voice form filling.');">
              <span class="material-symbols-outlined text-[40px]">mic</span>
              <span class="font-h2 text-h2 font-bold">1. Start Voice Form Filling</span>
              <span class="text-xs opacity-90">Speak in Hindi, English, or 22 Indian languages</span>
            </button>

            <button class="bg-surface-container-highest text-on-surface dark:text-white p-lg rounded-xl flex flex-col items-center justify-center gap-sm hover:brightness-110 active:scale-95 transition-all text-center min-h-[140px] shadow-lg border-2 border-outline-variant cursor-pointer" onclick="switchView('saralread'); document.getElementById('btn-play-audio')?.click(); AccessibilityEngine.speak('Playing government scheme summary aloud.');">
              <span class="material-symbols-outlined text-[40px] text-secondary">volume_up</span>
              <span class="font-h2 text-h2 font-bold">2. Read PDF Guidelines Aloud</span>
              <span class="text-xs opacity-80">Instant voice narration of deadlines & eligibility</span>
            </button>

            <button class="bg-tertiary-container text-white p-lg rounded-xl flex flex-col items-center justify-center gap-sm hover:brightness-110 active:scale-95 transition-all text-center min-h-[140px] shadow-lg border-2 border-white/20 cursor-pointer" onclick="AccessibilityEngine.speak('You have four recent applications. Income Tax declaration is ready for review. PM Awas Yojana is completed. Senior Pension Form 60 is draft.'); showToast('Narrating form statuses...', 'info', 'volume_up');">
              <span class="material-symbols-outlined text-[40px] text-tertiary-fixed">checklist</span>
              <span class="font-h2 text-h2 font-bold">3. Check Application Status</span>
              <span class="text-xs opacity-90">Listen to spoken summary of your active forms</span>
            </button>
          </div>

          <div class="bg-black/30 p-md rounded-xl text-xs text-primary-fixed flex items-center justify-between">
            <span>⌨️ <strong>Accessibility Shortcut:</strong> Focus on any field to hear label & value. Press Tab to move to next item.</span>
            <button class="underline text-white font-bold cursor-pointer" onclick="selectPersona('general'); AccessibilityEngine.applyPersona('general');">Switch to Standard View</button>
          </div>
        </div>
      `;
    } else if (personaKey === 'motor') {
      hubHtml = `
        <div class="bg-surface-container-lowest dark:bg-surface-container-lowest border-2 border-secondary rounded-2xl p-lg md:p-xl flex flex-col gap-md shadow-xl animate-fade-in">
          <div class="flex items-center justify-between border-b border-outline-variant/20 pb-sm">
            <div class="flex items-center gap-sm">
              <div class="w-12 h-12 rounded-full bg-secondary-fixed dark:bg-secondary flex items-center justify-center text-secondary dark:text-secondary-fixed animate-pulse">
                <span class="material-symbols-outlined text-[28px]">mic</span>
              </div>
              <div>
                <h2 class="font-h1 text-[24px] font-bold text-primary dark:text-primary-fixed">Hands-Free Voice Action Hub</h2>
                <p class="text-xs text-on-surface-variant">Zero typing required. Say voice commands or tap giant targets.</p>
              </div>
            </div>
            <span class="badge-success px-md py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-tertiary-container animate-ping"></span>
              Voice Commander Active
            </span>
          </div>

          <!-- Spoken Command Prompts -->
          <div class="bg-secondary-fixed/30 dark:bg-secondary-container/30 p-md rounded-xl border border-secondary/20 flex flex-wrap items-center gap-sm text-xs">
            <span class="font-bold text-secondary">🎙️ Spoken Commands:</span>
            <span class="px-sm py-1 bg-surface rounded-full border">"Fill Tax Form"</span>
            <span class="px-sm py-1 bg-surface rounded-full border">"Next" / "Submit"</span>
            <span class="px-sm py-1 bg-surface rounded-full border">"Auto Fill"</span>
            <span class="px-sm py-1 bg-surface rounded-full border">"Read Scheme"</span>
          </div>

          <!-- Giant 1-Click Action Buttons (Min height 64px) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <button class="bg-secondary text-on-secondary p-lg rounded-2xl flex items-center justify-between gap-md hover:brightness-110 active:scale-98 transition-all shadow-md min-h-[72px] cursor-pointer" onclick="switchView('saralfill'); window.handleAutoFillDigiLocker?.();">
              <div class="flex items-center gap-md">
                <span class="material-symbols-outlined text-[32px]">auto_fix_high</span>
                <div class="text-left">
                  <h4 class="font-h2 text-h2 font-bold">1-Click Auto-Fill DigiLocker</h4>
                  <p class="text-xs opacity-90">Auto-populates full Aadhaar, PAN & address</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-[28px]">arrow_forward</span>
            </button>

            <button class="bg-primary dark:bg-primary-fixed text-on-primary dark:text-primary p-lg rounded-2xl flex items-center justify-between gap-md hover:brightness-110 active:scale-98 transition-all shadow-md min-h-[72px] cursor-pointer" onclick="switchView('saralvoice'); document.getElementById('btn-start-voice')?.click();">
              <div class="flex items-center gap-md">
                <span class="material-symbols-outlined text-[32px]">mic</span>
                <div class="text-left">
                  <h4 class="font-h2 text-h2 font-bold">Voice-Dictate Application</h4>
                  <p class="text-xs opacity-90">Speak freely without pressing any keys</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-[28px]">arrow_forward</span>
            </button>
          </div>
        </div>
      `;
    } else if (personaKey === 'dyslexic') {
      hubHtml = `
        <div class="bg-surface-container-lowest dark:bg-surface-container-lowest border-2 border-tertiary-container/30 rounded-2xl p-lg md:p-xl flex flex-col gap-md shadow-xl animate-fade-in">
          <div class="flex items-center justify-between border-b border-outline-variant/20 pb-sm">
            <div class="flex items-center gap-sm">
              <span class="material-symbols-outlined text-[32px] text-tertiary-container">translate</span>
              <div>
                <h2 class="font-h1 text-[24px] font-bold text-primary dark:text-primary-fixed">सरल हिंदी एवं क्षेत्रीय भाषा सहायता (Visual Vernacular Mode)</h2>
                <p class="text-xs text-on-surface-variant">बिना किसी कठिन स्पेलिंग या अंग्रेजी के आसान 3-स्टेप फॉर्म भरें।</p>
              </div>
            </div>
            <button class="bg-secondary text-on-secondary px-md py-1 rounded-full text-xs font-bold cursor-pointer" onclick="AccessibilityEngine.speak('यह सरल भाषा मोड है। आप नीचे दिए गए तीन आसान चरणों से फॉर्म भर सकते हैं।', 'hi-IN')">
              🔊 हिंदी में सुनें
            </button>
          </div>

          <!-- 3-Step Visual Wizard -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-md pt-xs">
            <div class="bg-surface-container-low dark:bg-surface-container p-md rounded-xl border border-outline-variant/30 flex flex-col gap-sm">
              <div class="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-sm">1</div>
              <h4 class="font-label-bold text-sm text-on-surface">योजना या फॉर्म चुनें</h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">पीएम आवास योजना या आयकर छूट फॉर्म का चयन करें।</p>
              <button class="mt-auto bg-surface border border-secondary text-secondary px-md py-sm rounded-lg text-xs font-bold hover:bg-secondary-fixed/30 cursor-pointer" onclick="switchView('saralfill')">
                फॉर्म खोलें →
              </button>
            </div>

            <div class="bg-surface-container-low dark:bg-surface-container p-md rounded-xl border border-outline-variant/30 flex flex-col gap-sm">
              <div class="w-10 h-10 rounded-full bg-tertiary-container text-white flex items-center justify-center font-bold text-sm">2</div>
              <h4 class="font-label-bold text-sm text-on-surface">स्वचालित रूप से भरें</h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">डिजिलॉकर से नाम, पता और जन्मतिथि एक क्लिक में भरेगी।</p>
              <button class="mt-auto bg-tertiary-container text-white px-md py-sm rounded-lg text-xs font-bold hover:brightness-110 cursor-pointer" onclick="switchView('saralfill'); window.handleAutoFillDigiLocker?.();">
                स्वचालित भरें (Auto-Fill) →
              </button>
            </div>

            <div class="bg-surface-container-low dark:bg-surface-container p-md rounded-xl border border-outline-variant/30 flex flex-col gap-sm">
              <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
              <h4 class="font-label-bold text-sm text-on-surface">नियम व पात्रता सुनें</h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">दस्तावेज़ का सरल सारांश और अंतिम तिथियां सुनें।</p>
              <button class="mt-auto bg-primary text-white px-md py-sm rounded-lg text-xs font-bold hover:brightness-110 cursor-pointer" onclick="switchView('saralread'); document.getElementById('btn-play-audio')?.click();">
                ऑडियो सुनें →
              </button>
            </div>
          </div>
        </div>
      `;
    } else if (personaKey === 'hearing') {
      hubHtml = `
        <div class="bg-surface-container-lowest dark:bg-surface-container-lowest border-2 border-secondary rounded-2xl p-lg md:p-xl flex flex-col gap-md shadow-xl animate-fade-in">
          <div class="flex items-center justify-between border-b border-outline-variant/20 pb-sm">
            <div class="flex items-center gap-sm">
              <span class="material-symbols-outlined text-[32px] text-secondary">subtitles</span>
              <div>
                <h2 class="font-h1 text-[24px] font-bold text-primary dark:text-primary-fixed">Visual-First & Captions Hub</h2>
                <p class="text-xs text-on-surface-variant">100% Visual Information. Always-On Subtitle HUD & Color-Coded Statuses.</p>
              </div>
            </div>
            <span class="badge-info px-md py-1 rounded-full text-xs font-bold">
              ✓ Subtitle HUD Active
            </span>
          </div>

          <!-- Visual Progress & Document Highlights -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-md">
            <div class="bg-surface-container-low dark:bg-surface-container p-md rounded-xl border border-outline-variant/20">
              <div class="flex items-center justify-between mb-xs">
                <span class="text-xs text-outline font-bold">Income Tax Form</span>
                <span class="badge-success px-xs py-0.5 rounded text-[11px] font-bold">85% Complete</span>
              </div>
              <p class="text-xs text-on-surface-variant">All Aadhaar & PAN details validated on screen.</p>
              <button class="mt-sm w-full bg-secondary text-on-secondary py-1.5 rounded-lg text-xs font-bold cursor-pointer" onclick="switchView('saralfill')">
                View On Screen →
              </button>
            </div>

            <div class="bg-surface-container-low dark:bg-surface-container p-md rounded-xl border border-outline-variant/20">
              <div class="flex items-center justify-between mb-xs">
                <span class="text-xs text-outline font-bold">PMAY Housing Guidelines</span>
                <span class="badge-info px-xs py-0.5 rounded text-[11px] font-bold">4 Key Dates</span>
              </div>
              <p class="text-xs text-on-surface-variant">Highlighted deadlines: Next verification 15 Oct.</p>
              <button class="mt-sm w-full bg-surface border border-secondary text-secondary py-1.5 rounded-lg text-xs font-bold cursor-pointer" onclick="switchView('saralread')">
                Read Visual Summary →
              </button>
            </div>

            <div class="bg-surface-container-low dark:bg-surface-container p-md rounded-xl border border-outline-variant/20">
              <div class="flex items-center justify-between mb-xs">
                <span class="text-xs text-outline font-bold">DigiLocker Status</span>
                <span class="badge-success px-xs py-0.5 rounded text-[11px] font-bold">Connected</span>
              </div>
              <p class="text-xs text-on-surface-variant">Aadhaar e-KYC ready for instant form attachment.</p>
              <button class="mt-sm w-full bg-surface border border-outline-variant text-on-surface py-1.5 rounded-lg text-xs font-bold cursor-pointer" onclick="switchView('documents')">
                Open Document Vault →
              </button>
            </div>
          </div>
        </div>
      `;
    } else if (personaKey === 'elderly') {
      hubHtml = `
        <div class="bg-surface-container-lowest dark:bg-surface-container-lowest border-4 border-secondary rounded-2xl p-lg md:p-xl flex flex-col gap-lg shadow-2xl animate-fade-in">
          <div class="flex items-center justify-between border-b-2 border-outline-variant/30 pb-md">
            <div class="flex items-center gap-md">
              <div class="w-14 h-14 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-[36px]">elderly</span>
              </div>
              <div>
                <h2 class="font-h1 text-[26px] md:text-[30px] font-bold text-primary dark:text-primary-fixed">वरिष्ठ नागरिक सहायता पोर्टल (Senior Citizen Portal)</h2>
                <p class="text-sm font-medium text-on-surface-variant mt-0.5">बड़े अक्षरों और एक-क्लिक सहायता के साथ आसान सरकारी सेवा।</p>
              </div>
            </div>
          </div>

          <!-- 2 Giant Senior Action Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <button class="bg-secondary text-on-secondary p-xl rounded-2xl flex flex-col items-start gap-sm hover:brightness-110 active:scale-98 transition-all text-left shadow-lg border-2 border-white/20 min-h-[160px] cursor-pointer" onclick="switchView('saralfill'); window.handleAutoFillDigiLocker?.();">
              <span class="material-symbols-outlined text-[44px]">assignment_turned_in</span>
              <h3 class="font-h1 text-[22px] font-bold">1. पेंशन / आवास योजना फॉर्म भरें</h3>
              <p class="text-sm opacity-95">आधार कार्ड और डिजिलॉकर से आपके सारे विवरण 1-क्लिक में खुद भर जाएंगे।</p>
            </button>

            <button class="bg-primary dark:bg-primary-fixed text-on-primary dark:text-primary p-xl rounded-2xl flex flex-col items-start gap-sm hover:brightness-110 active:scale-98 transition-all text-left shadow-lg border-2 border-white/20 min-h-[160px] cursor-pointer" onclick="switchView('saralread'); document.getElementById('btn-play-audio')?.click();">
              <span class="material-symbols-outlined text-[44px]">volume_up</span>
              <h3 class="font-h1 text-[22px] font-bold">2. सरकारी नियम व योजना की जानकारी सुनें</h3>
              <p class="text-sm opacity-95">अंतिम तिथि और लाभों की जानकारी आसान सरल भाषा में सुनें।</p>
            </button>
          </div>

          <!-- Emergency Citizen Helpline -->
          <div class="bg-tertiary-container text-white p-lg rounded-xl flex items-center justify-between gap-md border border-white/20">
            <div class="flex items-center gap-md">
              <span class="material-symbols-outlined text-[36px] text-tertiary-fixed">support_agent</span>
              <div>
                <h4 class="font-h2 text-h2 font-bold">मुफ्त सहायता हेल्पलाइन (Toll-Free Helpline)</h4>
                <p class="text-xs text-primary-fixed">किसी भी समस्या के लिए 1800-11-0033 पर सीधे संपर्क करें।</p>
              </div>
            </div>
            <a href="tel:1800110033" class="bg-white text-primary px-xl py-md rounded-xl font-h2 text-sm font-bold shadow-md hover:bg-gray-100 shrink-0">
              📞 1800-11-0033
            </a>
          </div>
        </div>
      `;
    }

    container.innerHTML = hubHtml;
  },

  applyPreferences(prefs) {
    const root = document.documentElement;

    // 1. Large Touch Targets & High Contrast
    if (prefs.large_touch_targets) {
      root.classList.add('large-targets');
    } else {
      root.classList.remove('large-targets');
    }

    if (prefs.high_contrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // 2. Blind / Visually Impaired: TTS Focus Listener
    this.unbindFocusTTS();
    if (prefs.tts_on_focus) {
      this.bindFocusTTS();
    }

    // 3. Motor Impaired: Voice Commands & Navigation
    this.stopVoiceCommander();
    if (prefs.voice_nav_enabled || prefs.voice_dictation_enabled) {
      this.initVoiceCommander();
    }

    // 4. Dyslexic / Vernacular: Auto-Translate Visible DOM
    if (prefs.auto_translate_dom && AppState.language !== 'en') {
      this.translateVisibleDOM(AppState.language);
    }

    // 5. Broadcast to Chrome Extension Content Script
    window.dispatchEvent(new CustomEvent('saralsetu_accessibility_sync', { detail: prefs }));
  },

  toggleSetting(key, value) {
    AppState.preferences[key] = value;
    localStorage.setItem('saralsetu_preferences', JSON.stringify(AppState.preferences));
    this.applyPreferences(AppState.preferences);
    showToast(`Setting "${key}" updated`, 'info', 'tune');
  },

  speak(text, lang) {
    const speechLang = lang || (AppState.language === 'hi' ? 'hi-IN' : 'en-US');

    // Visual Captions HUD for Deaf / Hard of Hearing
    const hud = document.getElementById('captions-hud');
    if (hud) {
      hud.textContent = text;
      hud.classList.remove('hidden');
      clearTimeout(this._hudTimeout);
      this._hudTimeout = setTimeout(() => {
        hud.classList.add('hidden');
      }, 4000);
    }

    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speechLang;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  },

  bindFocusTTS() {
    this._focusHandler = (e) => {
      const el = e.target;
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(el.tagName)) {
        const label = document.querySelector(`label[for="${el.id}"]`)?.innerText || el.placeholder || el.name || 'Form field';
        const isRequired = el.required ? 'Mandatory' : 'Optional';
        const currentVal = el.value ? `Current value: ${el.value}` : 'Empty';
        this.speak(`${label}. ${isRequired}. ${currentVal}.`);
      }
    };
    document.addEventListener('focusin', this._focusHandler);
  },

  unbindFocusTTS() {
    if (this._focusHandler) {
      document.removeEventListener('focusin', this._focusHandler);
      this._focusHandler = null;
    }
  },

  initVoiceCommander() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    try {
      this._voiceRecognition = new SpeechRecognition();
      this._voiceRecognition.continuous = true;
      this._voiceRecognition.interimResults = false;
      this._voiceRecognition.lang = AppState.language === 'hi' ? 'hi-IN' : 'en-US';

      this._voiceRecognition.onresult = (event) => {
        const result = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
        
        if (AppState.preferences.visual_captions_enabled || window.__HUD_CAPTIONS__) {
          showToast(`🎤 "${result}"`, 'info', 'mic');
        }

        // Global Voice Navigation Commands
        const isHandled = processVoiceNavigationCommand(result);
        if (!isHandled) {
          if (result.includes('read') || result.includes('सुनें') || result.includes('पढ़ें')) {
            document.getElementById('btn-play-audio')?.click();
          } else if (result.includes('clear') || result.includes('हटाएं')) {
            document.getElementById('btn-discard-analysis')?.click();
          }
        }
      };


      this._voiceRecognition.onerror = () => {};
      this._voiceRecognition.onend = () => {
        if (AppState.preferences.voice_nav_enabled && this._voiceRecognition) {
          try { this._voiceRecognition.start(); } catch (e) {}
        }
      };

      this._voiceRecognition.start();
    } catch (e) {}
  },

  stopVoiceCommander() {
    if (this._voiceRecognition) {
      try { this._voiceRecognition.stop(); } catch (e) {}
      this._voiceRecognition = null;
    }
  },

  async translateVisibleDOM(targetLang) {
    const elements = Array.from(document.querySelectorAll('label, h2, h3, p')).slice(0, 15);
    for (const el of elements) {
      if (el.dataset.translated) continue;
      const text = el.innerText.trim();
      if (!text || text.length > 80) continue;

      try {
        const res = await fetch('http://localhost:8000/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, source_lang: 'en', target_lang: targetLang })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.translated_text) {
            el.innerText = data.translated_text;
            el.dataset.translated = 'true';
          }
        }
      } catch (e) {}
    }
  }
};

window.AccessibilityEngine = AccessibilityEngine;

// Auth Modal & Flows
function initAuthModal() {
  const authModal = document.getElementById('auth-modal');
  const openAuthBtns = document.querySelectorAll('.btn-open-auth');
  const closeAuthBtn = document.getElementById('btn-close-auth');
  const signupForm = document.getElementById('signup-form');
  const toggleAuthModeBtn = document.getElementById('toggle-auth-mode');

  openAuthBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (authModal) {
        authModal.classList.remove('hidden');
        authModal.classList.add('flex');
      }
    });
  });

  if (closeAuthBtn && authModal) {
    closeAuthBtn.addEventListener('click', () => {
      authModal.classList.add('hidden');
      authModal.classList.remove('flex');
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('auth-fullName')?.value || 'Aarav Sharma';
      const email = document.getElementById('auth-email')?.value || 'aarav.sharma@example.com';
      const chosenPersona = AppState.persona || 'general';

      AppState.user.isLoggedIn = true;
      AppState.user.name = name;
      AppState.user.email = email;
      AppState.user.persona = chosenPersona;
      AppState.user.avatar = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

      authModal.classList.add('hidden');
      authModal.classList.remove('flex');
      updateUserNavbar();

      AccessibilityEngine.applyPersona(chosenPersona, true);
      showToast(`Welcome to SaralSetu, ${name}! Persona profile activated.`, 'success', 'verified_user');
    });
  }

  if (toggleAuthModeBtn) {
    let isSignup = true;
    toggleAuthModeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isSignup = !isSignup;
      const title = document.getElementById('auth-modal-title');
      const submitBtn = document.getElementById('auth-submit-btn');
      const nameField = document.getElementById('auth-name-group');
      const personaSection = document.getElementById('auth-persona-section');

      if (isSignup) {
        title.textContent = 'Join SaralSetu';
        submitBtn.textContent = 'Create Account & Activate Profile';
        if (nameField) nameField.classList.remove('hidden');
        if (personaSection) personaSection.classList.remove('hidden');
        toggleAuthModeBtn.textContent = 'Log In';
        document.getElementById('auth-toggle-prompt').textContent = 'Already have an account? ';
      } else {
        title.textContent = 'Welcome Back';
        submitBtn.textContent = 'Log In & Load Preferences';
        if (nameField) nameField.classList.add('hidden');
        if (personaSection) personaSection.classList.add('hidden');
        toggleAuthModeBtn.textContent = 'Sign Up';
        document.getElementById('auth-toggle-prompt').textContent = "Don't have an account? ";
      }
    });
  }
}

window.handleSocialLogin = function(provider) {
  const authModal = document.getElementById('auth-modal');
  showToast(`Authenticating securely via ${provider}...`, 'info', 'lock');
  setTimeout(() => {
    AppState.user.isLoggedIn = true;
    AppState.user.name = provider === 'DigiLocker' ? 'Aarav Sharma (Verified)' : 'Aarav Sharma';
    AppState.user.avatar = 'AS';
    const chosenPersona = AppState.persona || 'general';
    AppState.user.persona = chosenPersona;

    if (authModal) {
      authModal.classList.add('hidden');
      authModal.classList.remove('flex');
    }
    updateUserNavbar();
    AccessibilityEngine.applyPersona(chosenPersona, true);
    showToast(`Successfully authenticated with ${provider}!`, 'success', 'verified');
  }, 800);
};

function updateUserNavbar() {
  const userAvatarBtns = document.querySelectorAll('.user-avatar-btn');
  userAvatarBtns.forEach(btn => {
    btn.innerHTML = `<div class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-sm">${AppState.user.avatar}</div>`;
  });
}

// Render Dashboard Data
function renderDashboard() {
  const container = document.getElementById('dashboard-recent-forms');
  if (!container) return;

  container.innerHTML = AppState.formsList.slice(0, 3).map(f => `
    <div class="flex items-center justify-between p-md bg-surface-container-lowest dark:bg-surface-container-low rounded-lg border border-outline-variant/20 hover:border-secondary/40 transition-all">
      <div class="flex items-center gap-md">
        <div class="w-10 h-10 rounded-lg bg-secondary-fixed dark:bg-secondary-container flex items-center justify-center text-secondary dark:text-secondary-fixed">
          <span class="material-symbols-outlined text-[22px]">${f.icon}</span>
        </div>
        <div>
          <h4 class="font-label-bold text-label-bold text-on-surface">${f.title}</h4>
          <p class="font-label-sm text-label-sm text-outline">${f.dept} • <span class="text-on-surface-variant">${f.date}</span></p>
        </div>
      </div>
      <div class="flex items-center gap-md">
        <span class="px-sm py-xs rounded-full font-label-bold text-xs ${f.statusClass}">${f.status}</span>
        <button class="text-secondary hover:text-secondary-container font-label-bold text-xs" onclick="switchView('saralfill')">Open →</button>
      </div>
    </div>
  `).join('');
}

// Render Forms & Documents Lists
function renderFormsList() {
  const container = document.getElementById('all-forms-list');
  if (!container) return;

  container.innerHTML = AppState.formsList.map(f => `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between p-md bg-surface-container-lowest dark:bg-surface-container-low rounded-lg border border-outline-variant/20 hover:border-secondary/40 transition-all gap-sm">
      <div class="flex items-center gap-md">
        <div class="w-10 h-10 rounded-lg bg-secondary-fixed dark:bg-secondary-container flex items-center justify-center text-secondary dark:text-secondary-fixed shrink-0">
          <span class="material-symbols-outlined text-[22px]">${f.icon}</span>
        </div>
        <div>
          <h4 class="font-label-bold text-label-bold text-on-surface">${f.title}</h4>
          <p class="font-label-sm text-label-sm text-outline">${f.dept} • ${f.date}</p>
        </div>
      </div>
      <div class="flex items-center gap-md justify-between sm:justify-end">
        <div class="flex items-center gap-xs">
          <div class="w-24 bg-surface-container-high rounded-full h-2 overflow-hidden">
            <div class="bg-secondary h-full rounded-full" style="width: ${f.progress}%"></div>
          </div>
          <span class="text-xs text-outline font-label-sm">${f.progress}%</span>
        </div>
        <span class="px-sm py-xs rounded-full font-label-bold text-xs ${f.statusClass}">${f.status}</span>
        <button class="bg-surface border border-outline-variant hover:border-secondary text-on-surface text-xs font-label-bold px-sm py-xs rounded transition-colors" onclick="switchView('saralfill')">
          View
        </button>
      </div>
    </div>
  `).join('');
}

function renderDocumentsList() {
  const container = document.getElementById('all-docs-list');
  if (!container) return;

  container.innerHTML = AppState.documentsList.map(d => `
    <div class="flex items-center justify-between p-md bg-surface-container-lowest dark:bg-surface-container-low rounded-lg border border-outline-variant/20 hover:border-secondary/40 transition-all">
      <div class="flex items-center gap-md">
        <div class="w-10 h-10 rounded-lg bg-error-container/40 flex items-center justify-center text-error">
          <span class="material-symbols-outlined text-[22px]">picture_as_pdf</span>
        </div>
        <div>
          <h4 class="font-label-bold text-label-bold text-on-surface">${d.name}</h4>
          <p class="font-label-sm text-label-sm text-outline">${d.size} • ${d.pages} pages • ${d.date}</p>
        </div>
      </div>
      <div class="flex items-center gap-sm">
        <button class="bg-secondary text-on-secondary text-xs font-label-bold px-sm py-xs rounded hover:brightness-90 transition-colors" onclick="switchView('saralread')">
          Analyze
        </button>
      </div>
    </div>
  `).join('');
}

// =========================================================================
// SARALVOICE: REAL-TIME VOICE TRANSLATION & AUTO-FILL ENGINE CLIENT
// Combines 10ms-20ms Audio Chunk Streaming with Bhasini (22 Languages) & Whisper
// =========================================================================

function initSaralVoice() {
  const micBtn = document.getElementById('btn-toggle-mic');
  const simBtn = document.getElementById('btn-simulate-voice');
  const ttsBtn = document.getElementById('btn-tts-listen');
  const srcLangSelect = document.getElementById('voice-source-lang');
  const targetLangSelect = document.getElementById('voice-target-lang');

  if (micBtn) {
    micBtn.addEventListener('click', toggleSaralVoiceListening);
  }

  if (simBtn) {
    simBtn.addEventListener('click', simulateDemoVoiceSpeech);
  }

  if (ttsBtn) {
    ttsBtn.addEventListener('click', playVoiceTranslationTTS);
  }

  if (srcLangSelect) {
    srcLangSelect.addEventListener('change', (e) => {
      AppState.saralVoice.sourceLang = e.target.value;
      if (AppState.saralVoice.ws && AppState.saralVoice.ws.readyState === WebSocket.OPEN) {
        AppState.saralVoice.ws.send(JSON.stringify({
          action: 'config',
          source_lang: AppState.saralVoice.sourceLang,
          target_lang: AppState.saralVoice.targetLang
        }));
      }
      showToast(`Language set to ${e.target.options[e.target.selectedIndex].text}`, 'info', 'language');
    });
  }

  if (targetLangSelect) {
    targetLangSelect.addEventListener('change', (e) => {
      AppState.saralVoice.targetLang = e.target.value;
      if (AppState.saralVoice.ws && AppState.saralVoice.ws.readyState === WebSocket.OPEN) {
        AppState.saralVoice.ws.send(JSON.stringify({
          action: 'config',
          source_lang: AppState.saralVoice.sourceLang,
          target_lang: AppState.saralVoice.targetLang
        }));
      }
    });
  }

  // Pre-connect WebSocket if backend is running
  initVoiceWebSocket();
}

function initVoiceWebSocket() {
  const wsUrl = `ws://${window.location.hostname || 'localhost'}:8000/ws/voice`;
  try {
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('SaralVoice WebSocket connected to Python backend Voice_Recog on port 8000.');
      AppState.saralVoice.ws = ws;
      ws.send(JSON.stringify({
        action: 'config',
        source_lang: AppState.saralVoice.sourceLang,
        target_lang: AppState.saralVoice.targetLang
      }));
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        handleVoiceWebSocketMessage(data);
      } catch (err) {
        console.error('Error parsing WS message:', err);
      }
    };

    ws.onclose = () => {
      console.log('Voice_Recog WebSocket disconnected. Reconnecting in 3s...');
      AppState.saralVoice.ws = null;
      setTimeout(initVoiceWebSocket, 3000);
    };

    ws.onerror = (err) => {
      console.warn('Voice_Recog WebSocket error (Using fallback voice engine if backend offline):', err);
    };
  } catch (e) {
    console.warn('Could not initialize WebSocket:', e);
  }
}

async function toggleSaralVoiceListening() {
  const micBtn = document.getElementById('btn-toggle-mic');
  const micText = document.getElementById('mic-btn-text');
  const statusPill = document.getElementById('voice-stream-status');
  const audioBars = document.getElementById('voice-audio-bars');

  if (!AppState.saralVoice.isListening) {
    // Start Listening & Microphone Stream
    try {
      await startMicrophoneAudioStreaming();
      AppState.saralVoice.isListening = true;

      if (micBtn) {
        micBtn.classList.replace('bg-secondary', 'bg-error');
      }
      if (micText) micText.textContent = 'Stop Listening';
      if (statusPill) {
        statusPill.innerHTML = `<span class="status-dot bg-error animate-ping"></span> <span class="text-error font-bold">Streaming Audio 20ms Frame...</span>`;
      }
      if (audioBars) audioBars.classList.remove('hidden');

      showToast('Real-time 10ms-20ms microphone stream active! Speak in your chosen Indian language.', 'success', 'mic');
    } catch (err) {
      console.error('Microphone error:', err);
      showToast('Microphone access needed. Triggering demo voice mode...', 'warning', 'mic_off');
      simulateDemoVoiceSpeech();
    }
  } else {
    // Stop Listening
    stopMicrophoneAudioStreaming();
    AppState.saralVoice.isListening = false;

    if (micBtn) {
      micBtn.classList.replace('bg-error', 'bg-secondary');
    }
    if (micText) micText.textContent = 'Start Listening';
    if (statusPill) {
      statusPill.innerHTML = `<span class="status-dot bg-outline"></span> <span>Microphone Standby</span>`;
    }
    if (audioBars) audioBars.classList.add('hidden');

    showToast('Microphone streaming paused.', 'info', 'pause');
  }
}

async function startMicrophoneAudioStreaming() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: { sampleRate: 16000, channelCount: 1 } });
  AppState.saralVoice.stream = stream;

  const audioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16000 });
  AppState.saralVoice.audioContext = audioContext;

  const source = audioContext.createMediaStreamSource(stream);
  
  // 1024 samples at 16kHz corresponds to ~64ms buffer (~3x 20ms PCM frames)
  const processor = audioContext.createScriptProcessor(1024, 1, 1);
  AppState.saralVoice.processor = processor;

  processor.onaudioprocess = (e) => {
    if (!AppState.saralVoice.isListening) return;

    const inputData = e.inputBuffer.getChannelData(0);
    // Convert 32-bit Float Audio to 16-bit PCM Int16 ArrayBuffer (20ms frame chunking)
    const pcm16Buffer = new Int16Array(inputData.length);
    for (let i = 0; i < inputData.length; i++) {
      const s = Math.max(-1, Math.min(1, inputData[i]));
      pcm16Buffer[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }

    // Send binary PCM ArrayBuffer chunk over WebSocket to backend/Voice_Recog.py
    if (AppState.saralVoice.ws && AppState.saralVoice.ws.readyState === WebSocket.OPEN) {
      AppState.saralVoice.ws.send(pcm16Buffer.buffer);
    } else {
      // Local fallback audio energy detection when server is connecting
      let sum = 0;
      for (let i = 0; i < pcm16Buffer.length; i++) sum += pcm16Buffer[i] * pcm16Buffer[i];
      const rms = Math.sqrt(sum / pcm16Buffer.length);
      if (rms > 800 && Math.random() > 0.85) {
        simulateVoiceChunkStream();
      }
    }
  };

  source.connect(processor);
  processor.connect(audioContext.destination);
}

function stopMicrophoneAudioStreaming() {
  if (AppState.saralVoice.processor) {
    AppState.saralVoice.processor.disconnect();
    AppState.saralVoice.processor = null;
  }
  if (AppState.saralVoice.audioContext) {
    AppState.saralVoice.audioContext.close();
    AppState.saralVoice.audioContext = null;
  }
  if (AppState.saralVoice.stream) {
    AppState.saralVoice.stream.getTracks().forEach(track => track.stop());
    AppState.saralVoice.stream = null;
  }
}

function handleVoiceWebSocketMessage(data) {
  if (data.type === 'stream_chunk') {
    updateVoiceTranscriptUI(data.source_text, data.translated_text);
  } else if (data.type === 'autofill_event') {
    if (data.raw_source && data.raw_translation) {
      updateVoiceTranscriptUI(data.raw_source, data.raw_translation);
    }
    updateVoiceAutoFillFields(data.entities);
  }
}

function updateVoiceTranscriptUI(sourceText, translatedText) {
  const transcriptEl = document.getElementById('voice-live-transcript');
  const translationEl = document.getElementById('voice-live-translation');

  if (transcriptEl && sourceText) {
    transcriptEl.innerHTML = `<span class="text-on-surface font-medium animate-fade-in">${sourceText}</span>`;
    transcriptEl.scrollTop = transcriptEl.scrollHeight;
  }

  if (translationEl && translatedText) {
    translationEl.innerHTML = `<span class="text-secondary dark:text-secondary-fixed font-semibold animate-fade-in">${translatedText}</span>`;
    translationEl.scrollTop = translationEl.scrollHeight;
  }

  AppState.saralVoice.liveTranscript = sourceText;
  AppState.saralVoice.liveTranslation = translatedText;

  // Process voice navigation commands from live transcript
  if (sourceText) {
    processVoiceNavigationCommand(sourceText);
  }
}


function updateVoiceAutoFillFields(entities) {
  if (!entities) return;

  const fieldMap = {
    full_name: 'voice-field-name',
    dob: 'voice-field-dob',
    address: 'voice-field-address',
    tax_id: 'voice-field-taxid',
    aadhaar: 'voice-field-taxid',
    mobile: 'voice-field-mobile',
    scheme: 'voice-field-scheme'
  };

  let updatedCount = 0;
  for (const [key, val] of Object.entries(entities)) {
    const inputId = fieldMap[key];
    if (inputId && val) {
      const el = document.getElementById(inputId);
      if (el) {
        el.value = val;
        updatedCount++;
        // Add glowing green highlight effect on auto-fill
        el.classList.add('bg-tertiary-fixed-dim/30', 'border-tertiary-container', 'ring-2', 'ring-tertiary-container/30');
        setTimeout(() => {
          el.classList.remove('bg-tertiary-fixed-dim/30', 'border-tertiary-container', 'ring-2', 'ring-tertiary-container/30');
        }, 1500);
      }
    }
  }

  if (updatedCount > 0) {
    showToast(`⚡ Real-Time Auto-Fill: ${updatedCount} field(s) populated from recognized voice!`, 'success', 'bolt');
  }
}

// Simulated real-time 10ms-20ms speech chunk demonstration
function simulateDemoVoiceSpeech() {
  const statusPill = document.getElementById('voice-stream-status');
  const audioBars = document.getElementById('voice-audio-bars');

  if (statusPill) {
    statusPill.innerHTML = `<span class="status-dot bg-tertiary-container animate-pulse"></span> <span class="text-tertiary-container font-bold">Simulating 10ms-20ms Speech Stream...</span>`;
  }
  if (audioBars) audioBars.classList.remove('hidden');

  showToast('Starting real-time Voice Translation & Auto-Fill stream...', 'info', 'play_arrow');

  if (AppState.saralVoice.ws && AppState.saralVoice.ws.readyState === WebSocket.OPEN) {
    AppState.saralVoice.ws.send(JSON.stringify({
      action: 'simulate_sample_speech',
      source_lang: AppState.saralVoice.sourceLang,
      target_lang: AppState.saralVoice.targetLang
    }));
  } else {
    // Client-side fallback streaming simulation
    const srcWords = ["मेरा", "नाम", "आरव", "शर्मा", "है,", "मेरी", "जन्म", "तिथि", "14", "अगस्त", "1992", "है,", "और", "मेरा", "पता", "सेक्टर", "15", "नई", "दिल्ली", "है।"];
    const trWords = ["My", "name", "is", "Aarav", "Sharma,", "my", "date", "of", "birth", "is", "14", "August", "1992,", "and", "my", "address", "is", "Sector", "15", "New", "Delhi."];

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const currentSrc = srcWords.slice(0, step).join(' ');
      const currentTr = trWords.slice(0, step).join(' ');

      updateVoiceTranscriptUI(currentSrc, currentTr);

      if (step >= srcWords.length) {
        clearInterval(interval);
        if (audioBars) audioBars.classList.add('hidden');
        if (statusPill) {
          statusPill.innerHTML = `<span class="status-dot bg-outline"></span> <span>Stream Completed</span>`;
        }

        // Trigger Auto-Fill
        updateVoiceAutoFillFields({
          full_name: "Aarav Sharma",
          dob: "1992-08-14",
          address: "Sector 15, New Delhi - 110001",
          tax_id: "ABCDE1234F",
          mobile: "+91 98765 43210",
          scheme: "Pradhan Mantri Awas Yojana (PMAY-U)"
        });
      }
    }, 140); // 140ms word step
  }
}

function simulateVoiceChunkStream() {
  const sampleSrc = "मेरा मोबाइल नंबर 98765 43210 है";
  const sampleTr = "My mobile number is 98765 43210";
  updateVoiceTranscriptUI(sampleSrc, sampleTr);
  updateVoiceAutoFillFields({ mobile: "+91 98765 43210" });
}

window.resetVoiceForm = function() {
  const form = document.getElementById('voice-autofill-form');
  if (form) form.reset();
  updateVoiceTranscriptUI('', '');
  showToast('Voice auto-fill form reset.', 'info', 'refresh');
};

window.handleVoiceFormSubmit = function(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('voice-field-name')?.value || 'Citizen Applicant';
  const scheme = document.getElementById('voice-field-scheme')?.value || 'General Service Application';

  showToast(`Application for ${name} under "${scheme}" submitted successfully via Voice Auto-Fill!`, 'success', 'task_alt');

  // Add to recent forms
  AppState.formsList.unshift({
    title: scheme,
    dept: 'Voice Assistant Portal',
    date: 'Just now (Voice Auto-Fill)',
    status: 'Submitted',
    statusClass: 'badge-success',
    progress: 100,
    icon: 'record_voice_over'
  });

  renderFormsList();
  renderDashboard();
};

function playVoiceTranslationTTS() {
  const text = AppState.saralVoice.liveTranslation || AppState.saralVoice.liveTranscript;
  if (!text) {
    showToast('No text available for speech synthesis.', 'warning', 'volume_off');
    return;
  }

  showToast('Playing synthetic TTS audio response...', 'info', 'volume_up');
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = AppState.saralVoice.targetLang === 'hi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(utterance);
  }
}


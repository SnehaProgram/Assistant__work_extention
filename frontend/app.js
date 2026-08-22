// Application State
const AppState = {
  currentView: 'saralfill', 
  darkMode: false,
  language: 'en',
  user: {
    isLoggedIn: false,
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    avatar: 'AS',
    digiLockerLinked: true
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
  initAssistantDrawer();
  initAuthModal();
  renderDashboard();
  renderFormsList();
  renderDocumentsList();
});

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

// Assistant Chat Drawer (Floating Action Button)
function initAssistantDrawer() {
  const fab = document.getElementById('btn-floating-assistant');
  const drawer = document.getElementById('assistant-drawer');
  const closeBtn = document.getElementById('btn-close-assistant');
  const chatInput = document.getElementById('assistant-chat-input');
  const sendBtn = document.getElementById('btn-send-assistant-msg');
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

    // Simulate AI response
    setTimeout(() => {
      let reply = "I can guide you step-by-step through SaralSetu. You can paste any portal URL in SaralFill or upload any government PDF in SaralRead!";
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
      AppState.user.isLoggedIn = true;
      AppState.user.name = name;
      AppState.user.email = email;
      AppState.user.avatar = name.split(' ').map(n => n[0]).join('').toUpperCase();

      authModal.classList.add('hidden');
      authModal.classList.remove('flex');
      updateUserNavbar();
      showToast(`Welcome to SaralSetu, ${name}!`, 'success', 'verified_user');
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

      if (isSignup) {
        title.textContent = 'Join SaralSetu';
        submitBtn.textContent = 'Create Account';
        if (nameField) nameField.classList.remove('hidden');
        toggleAuthModeBtn.textContent = 'Log In';
        document.getElementById('auth-toggle-prompt').textContent = 'Already have an account? ';
      } else {
        title.textContent = 'Welcome Back';
        submitBtn.textContent = 'Log In';
        if (nameField) nameField.classList.add('hidden');
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
    if (authModal) {
      authModal.classList.add('hidden');
      authModal.classList.remove('flex');
    }
    updateUserNavbar();
    showToast(`Successfully linked & logged in with ${provider}!`, 'success', 'verified');
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

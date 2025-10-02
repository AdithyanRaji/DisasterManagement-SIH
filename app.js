// ResQNet - Professional Disaster Management Application

// Application Data - International Version
const appData = {
  branding: {
    name: "ResQNet",
    tagline: "Professional Disaster Management Platform",
    subtitle: "Emergency Response & Community Resilience",
    logo: "🛡️"
  },
  emergencyContacts: [
    {"name": "Police", "number": "112", "icon": "🚔", "category": "law_enforcement"},
    {"name": "Fire Department", "number": "112", "icon": "🚒", "category": "fire_rescue"},
    {"name": "Emergency Medical", "number": "102", "icon": "🚑", "category": "medical_emergency"},
    {"name": "Emergency Management", "number": "011-24363260", "icon": "🆘", "category": "disaster_response"},
    {"name": "Emergency Helpline", "number": "1098", "icon": "📞", "category": "information_support"}
  ],
  dashboardMetrics: [
    {"title": "Active Alerts", "value": 3, "target": 3, "change": "+2", "trend": "up", "icon": "🚨", "color": "#DC3545", "priority": "critical"},
    {"title": "Community Members", "value": 15247, "target": 15247, "change": "+324", "trend": "up", "icon": "👥", "color": "#17A2B8", "priority": "info"},
    {"title": "Resources Available", "value": 89, "target": 100, "change": "+5%", "trend": "up", "icon": "📦", "color": "#28A745", "priority": "positive"},
    {"title": "Training Completed", "value": 72, "target": 100, "change": "+12%", "trend": "up", "icon": "🎓", "color": "#FFC107", "priority": "progress"}
  ],
  disasters: [
    {"id": 1, "type": "Hurricane Alert", "location": "Eastern Coast", "severity": "Critical", "status": "Active", "time": "2 hours ago", "affected": "2.3M people", "icon": "🌀", "priority": "critical"},
    {"id": 2, "type": "Flood Warning", "location": "River Valley", "severity": "High", "status": "Watch", "time": "4 hours ago", "affected": "850K people", "icon": "🌊", "priority": "warning"},
    {"id": 3, "type": "Earthquake Advisory", "location": "Metropolitan Area", "severity": "Moderate", "status": "Advisory", "time": "6 hours ago", "affected": "30M people", "icon": "🌍", "priority": "info"}
  ],
  resources: [
    {"id": 1, "type": "Emergency Shelter", "name": "Community Center Alpha", "location": "Downtown District", "capacity": 500, "occupancy": 115, "status": "Available", "contact": "+1-555-0123", "icon": "🏠"},
    {"id": 2, "type": "Medical Facility", "name": "General Hospital", "location": "Medical District", "capacity": 200, "occupancy": 134, "status": "Operational", "contact": "+1-555-0456", "icon": "🏥"},
    {"id": 3, "type": "Relief Distribution Center", "name": "Community Center", "location": "Central Avenue", "capacity": 300, "occupancy": 0, "status": "Standby", "contact": "+1-555-0789", "icon": "🏫"}
  ],
  quizQuestions: [
    {
      "id": 1,
      "question": "What is the correct response during an earthquake?",
      "options": ["Run outside immediately", "Drop, Cover, and Hold On", "Stand in a doorway", "Call emergency services first"],
      "correct": 1,
      "explanation": "Drop, Cover, and Hold On - seek shelter under a sturdy table or desk.",
      "points": 10,
      "category": "Earthquake Safety"
    },
    {
      "id": 2,
      "question": "How many days of emergency supplies should households maintain?",
      "options": ["1-2 days", "3-7 days", "2 weeks", "1 month"],
      "correct": 1,
      "explanation": "Emergency management experts recommend maintaining 3-7 days of food, water, and essential supplies.",
      "points": 15,
      "category": "Emergency Preparedness"
    },
    {
      "id": 3,
      "question": "What is the recommended amount of water per person per day for emergency preparedness?",
      "options": ["1 liter", "2 liters", "4 liters", "6 liters"],
      "correct": 2,
      "explanation": "Store at least 4 liters of water per person per day for drinking, cooking, and hygiene needs.",
      "points": 10,
      "category": "Resource Management"
    }
  ],
  achievements: [
    {"id": "community_champion", "name": "Community Champion", "description": "Complete 10 community service activities", "icon": "🏆", "points": 100, "rarity": "gold", "progress": 85},
    {"id": "disaster_expert", "name": "Disaster Management Expert", "description": "Master comprehensive disaster preparedness", "icon": "🎓", "points": 150, "rarity": "platinum", "progress": 65},
    {"id": "community_protector", "name": "Community Protector", "description": "Lead emergency response training", "icon": "🛡️", "points": 125, "rarity": "gold", "progress": 40},
    {"id": "first_aid_specialist", "name": "First Aid Specialist", "description": "Complete advanced first aid certification", "icon": "⚕️", "points": 75, "rarity": "silver", "progress": 90}
  ],
  communityPosts: [
    {
      "id": 1,
      "title": "Hurricane Preparedness: Essential Guidelines for Coastal Areas",
      "author": "Dr. Sarah Johnson",
      "role": "Emergency Management Specialist",
      "content": "Comprehensive guide for hurricane preparedness in coastal regions...",
      "replies": 24,
      "likes": 45,
      "timestamp": "2 hours ago",
      "category": "hurricane_preparedness"
    },
    {
      "id": 2,
      "title": "Community Earthquake Drill: Lessons Learned and Best Practices",
      "author": "Michael Chen",
      "role": "Emergency Response Coordinator",
      "content": "Sharing insights from our recent earthquake preparedness drill...",
      "replies": 18,
      "likes": 32,
      "timestamp": "5 hours ago", 
      "category": "earthquake_preparedness"
    }
  ],
  preparednessChecklist: [
    {"id": 1, "category": "Emergency Kit", "item": "First Aid Kit with Essential Medicines", "completed": false, "priority": "critical"},
    {"id": 2, "category": "Emergency Kit", "item": "Flashlight with Extra Batteries", "completed": false, "priority": "high"},
    {"id": 3, "category": "Emergency Kit", "item": "Emergency Food Supply (3-7 days)", "completed": false, "priority": "critical"},
    {"id": 4, "category": "Emergency Kit", "item": "Water Storage (4L per person/day)", "completed": false, "priority": "critical"},
    {"id": 5, "category": "Communication", "item": "Emergency Contact Information", "completed": false, "priority": "high"},
    {"id": 6, "category": "Communication", "item": "Battery-powered Radio", "completed": false, "priority": "medium"},
    {"id": 7, "category": "Documentation", "item": "Important Documents (waterproof copies)", "completed": false, "priority": "high"},
    {"id": 8, "category": "Documentation", "item": "Insurance and Medical Records", "completed": false, "priority": "medium"}
  ],
  languages: [
    {"code": "en", "name": "English", "flag": "🇺🇸"},
    {"code": "es", "name": "Español", "flag": "🇪🇸"},
    {"code": "fr", "name": "Français", "flag": "🇫🇷"},
    {"code": "de", "name": "Deutsch", "flag": "🇩🇪"},
    {"code": "pt", "name": "Português", "flag": "🇵🇹"},
    {"code": "it", "name": "Italiano", "flag": "🇮🇹"},
    {"code": "zh", "name": "中文", "flag": "🇨🇳"}
  ],
  userProfile: {
    "name": "Community Member",
    "level": "Preparedness Advocate",
    "points": 245,
    "achievements": 1,
    "completedTraining": 3,
    "communityRank": 1847,
    "language": "en",
    "location": "Local Area",
    "joinDate": "2024-08-15",
    "lastActive": "2025-10-02"
  }
};

// Application State
let appState = {
  userPoints: 0,
  userBadges: 0,
  currentQuestionIndex: 0,
  quizScore: 0,
  forumPostsCount: 0,
  achievements: [],
  checklistProgress: 0,
  reportCount: 0
};

// Chatbot Responses for Emergency Guidance
const chatbotResponses = {
  'earthquake': 'During an earthquake: DROP to hands and knees, take COVER under a sturdy desk/table, HOLD ON until shaking stops. Stay away from windows and heavy objects. If outdoors, move away from buildings and power lines.',
  'flood': 'During floods: Move to higher ground immediately. Avoid walking/driving through flood water - just 6 inches can knock you down, 12 inches can carry away a vehicle. Listen to emergency broadcasts for evacuation updates.',
  'fire': 'Fire safety: Stay low to avoid smoke inhalation, feel doors before opening (hot door = fire on other side), have multiple escape routes planned, never use elevators during fire. Call 911 immediately.',
  'first aid': 'Basic first aid: Check for responsiveness and breathing, call for professional help (911), control bleeding with direct pressure, keep patient warm and comfortable. Do not move someone with potential spine injury.',
  'hurricane': 'Hurricane safety: Stay indoors away from windows, store emergency supplies including water and food, listen to weather updates on battery radio, evacuate immediately if advised by authorities. Secure outdoor items.',
  'emergency kit': 'Essential emergency kit items: 3-7 days food and water (4L per person/day), first aid supplies, flashlight with extra batteries, battery/hand-crank radio, important documents in waterproof container, emergency contact information.',
  'evacuation': 'Evacuation planning: Know multiple routes from your area, identify meeting points for family, keep emergency kit ready, follow official evacuation orders, never return to evacuated area until authorities declare it safe.',
  'default': 'I can help with earthquake, flood, fire, first aid, hurricane safety, emergency kits, and evacuation planning. What specific emergency guidance do you need?'
};

// Current state variables
let currentSection = 'dashboard';
let currentQuizQuestion = 0;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('ResQNet initializing...');
  initializeApp();
  setupEventListeners();
  updateUserStats();
  initializeAccessibility();
});

// Initialize all application components
function initializeApp() {
  // Initialize alert ticker with rotating messages
  updateAlertTicker();
  
  // Populate emergency contacts
  populateEmergencyContacts();
  
  // Initialize resources
  populateResources();
  
  // Initialize preparedness checklist
  populateChecklist();
  
  // Initialize quiz system
  initializeQuiz();
  
  // Initialize achievements system
  populateAchievements();
  
  // Initialize community forum
  populateForumPosts();
  
  // Initialize language selector
  populateLanguages();
  
  // Initialize active alerts
  populateActiveAlerts();
  
  console.log('ResQNet initialized successfully');
}

// Setup all event listeners
function setupEventListeners() {
  // Navigation event listeners
  document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', (e) => {
      const section = e.currentTarget.dataset.section;
      navigateToSection(section);
    });
  });

  // Quick action buttons
  document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const section = e.currentTarget.dataset.section;
      if (section) {
        navigateToSection(section);
      }
    });
  });

  // Emergency SOS button
  const emergencyBtn = document.getElementById('emergencyBtn');
  const closeEmergencyModal = document.getElementById('closeEmergencyModal');
  
  if (emergencyBtn) {
    emergencyBtn.addEventListener('click', showEmergencyModal);
  }
  if (closeEmergencyModal) {
    closeEmergencyModal.addEventListener('click', hideEmergencyModal);
  }

  // Tab switching functionality
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabName = e.target.dataset.tab;
      switchTab(e.target, tabName);
    });
  });

  // Quiz functionality
  const submitAnswerBtn = document.getElementById('submitAnswer');
  const restartQuizBtn = document.getElementById('restartQuiz');
  
  if (submitAnswerBtn) {
    submitAnswerBtn.addEventListener('click', submitQuizAnswer);
  }
  if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', restartQuiz);
  }

  // Forum functionality
  const newPostBtn = document.getElementById('newPostBtn');
  const closeModal = document.getElementById('closeModal');
  const cancelPost = document.getElementById('cancelPost');
  const newPostForm = document.getElementById('newPostForm');
  
  if (newPostBtn) {
    newPostBtn.addEventListener('click', () => {
      document.getElementById('newPostModal').classList.remove('hidden');
    });
  }
  
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      document.getElementById('newPostModal').classList.add('hidden');
    });
  }
  
  if (cancelPost) {
    cancelPost.addEventListener('click', () => {
      document.getElementById('newPostModal').classList.add('hidden');
    });
  }

  if (newPostForm) {
    newPostForm.addEventListener('submit', handleNewPost);
  }

  // Incident reporting
  const incidentForm = document.getElementById('incidentForm');
  if (incidentForm) {
    incidentForm.addEventListener('submit', handleIncidentReport);
  }

  // Chatbot functionality
  const chatSend = document.getElementById('chatSend');
  const chatInput = document.getElementById('chatInput');
  
  if (chatSend) {
    chatSend.addEventListener('click', sendChatMessage);
  }
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendChatMessage();
      }
    });
  }

  // Settings
  const languageSelect = document.getElementById('languageSelect');
  const offlineMode = document.getElementById('offlineMode');
  
  if (languageSelect) {
    languageSelect.addEventListener('change', handleLanguageChange);
  }
  if (offlineMode) {
    offlineMode.addEventListener('change', handleOfflineMode);
  }

  // Footer links
  setupFooterEventListeners();
}

// Setup footer modal event listeners
function setupFooterEventListeners() {
  // Privacy Policy
  const privacyLink = document.getElementById('privacy-policy');
  const closePrivacyModal = document.getElementById('closePrivacyModal');
  
  if (privacyLink) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('privacyModal').classList.remove('hidden');
    });
  }

  if (closePrivacyModal) {
    closePrivacyModal.addEventListener('click', () => {
      document.getElementById('privacyModal').classList.add('hidden');
    });
  }

  // Terms of Service
  const termsLink = document.getElementById('terms-service');
  const closeTermsModal = document.getElementById('closeTermsModal');
  
  if (termsLink) {
    termsLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('termsModal').classList.remove('hidden');
    });
  }

  if (closeTermsModal) {
    closeTermsModal.addEventListener('click', () => {
      document.getElementById('termsModal').classList.add('hidden');
    });
  }

  // Contact Us
  const contactLink = document.getElementById('contact-us');
  const closeContactModal = document.getElementById('closeContactModal');
  
  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('contactModal').classList.remove('hidden');
    });
  }

  if (closeContactModal) {
    closeContactModal.addEventListener('click', () => {
      document.getElementById('contactModal').classList.add('hidden');
    });
  }

  // Close modals when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
}

// Navigation between sections
function navigateToSection(sectionName) {
  // Update nav items
  document.querySelectorAll('.nav__item').forEach(item => {
    item.classList.remove('active');
  });
  const activeNavItem = document.querySelector(`[data-section="${sectionName}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }

  // Update sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const activeSection = document.getElementById(sectionName);
  if (activeSection) {
    activeSection.classList.add('active');
  }

  currentSection = sectionName;
}

// Tab switching functionality
function switchTab(tabButton, tabName) {
  const tabContainer = tabButton.closest('section') || tabButton.closest('.container');
  
  // Update tab buttons
  tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  tabButton.classList.add('active');

  // Update tab content
  tabContainer.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  const targetTab = tabContainer.querySelector(`#${tabName}`);
  if (targetTab) {
    targetTab.classList.add('active');
  }
}

// Update rotating alert ticker
function updateAlertTicker() {
  const ticker = document.getElementById('alertTicker');
  if (!ticker) return;
  
  const alerts = appData.disasters.map(d => `${d.type} in ${d.location} - ${d.status}`);
  let currentAlert = 0;
  
  function showNextAlert() {
    if (alerts.length > 0) {
      ticker.textContent = alerts[currentAlert];
      currentAlert = (currentAlert + 1) % alerts.length;
    }
  }
  
  showNextAlert();
  setInterval(showNextAlert, 4000);
}

// Populate emergency contacts
function populateEmergencyContacts() {
  const contactsList = document.getElementById('emergencyContactsList');
  const modalContacts = document.getElementById('emergencyContactsModal');
  
  if (!contactsList || !modalContacts) return;
  
  appData.emergencyContacts.forEach(contact => {
    // Dashboard contacts
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-item';
    contactDiv.innerHTML = `
      <span class="contact-icon">${contact.icon}</span>
      <div class="contact-info">
        <strong>${contact.name}</strong>
        <div>${contact.number}</div>
      </div>
    `;
    contactsList.appendChild(contactDiv);

    // Modal contacts
    const modalContactDiv = document.createElement('div');
    modalContactDiv.className = 'emergency-contact-item';
    modalContactDiv.innerHTML = `
      <span>${contact.icon}</span>
      <div>
        <strong>${contact.name}</strong><br>
        <a href="tel:${contact.number}" style="color: var(--resq-primary); text-decoration: none;">${contact.number}</a>
      </div>
    `;
    modalContacts.appendChild(modalContactDiv);
  });
}

// Populate resource information
function populateResources() {
  const resourcesList = document.getElementById('resourcesList');
  if (!resourcesList) return;
  
  appData.resources.forEach(resource => {
    const resourceDiv = document.createElement('div');
    resourceDiv.className = 'resource-item';
    resourceDiv.style.cssText = `
      background: var(--resq-white);
      border-radius: var(--radius-base);
      padding: var(--space-16);
      margin-bottom: var(--space-12);
      border-left: 4px solid var(--resq-success);
      box-shadow: var(--shadow-sm);
    `;
    resourceDiv.innerHTML = `
      <h4 style="color: var(--resq-primary); margin-bottom: var(--space-8);">${resource.name}</h4>
      <p><strong>Type:</strong> ${resource.type}</p>
      <p><strong>Location:</strong> ${resource.location}</p>
      <p><strong>Capacity:</strong> ${resource.capacity} people</p>
      <p><strong>Current Occupancy:</strong> ${resource.occupancy}</p>
      <p><strong>Status:</strong> <span style="color: var(--resq-success); font-weight: 600;">${resource.status}</span></p>
      ${resource.contact ? `<p><strong>Contact:</strong> ${resource.contact}</p>` : ''}
    `;
    resourcesList.appendChild(resourceDiv);
  });
}

// Populate and manage preparedness checklist
function populateChecklist() {
  const checklistItems = document.getElementById('checklistItems');
  if (!checklistItems) return;
  
  appData.preparednessChecklist.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'checklist-item';
    itemDiv.style.cssText = `
      background: var(--resq-white);
      border: 2px solid var(--resq-border);
      border-radius: var(--radius-base);
      padding: var(--space-12);
      margin-bottom: var(--space-8);
      display: flex;
      align-items: center;
      gap: var(--space-12);
      cursor: pointer;
      transition: all var(--duration-fast) var(--ease-standard);
    `;
    
    itemDiv.innerHTML = `
      <span class="checklist-mark ${item.completed ? 'completed' : 'not-completed'}" 
            data-id="${item.id}"
            style="font-size: var(--font-size-xl); cursor: pointer;">
        ${item.completed ? '✅' : '❌'}
      </span>
      <div>
        <strong style="color: var(--resq-primary);">${item.category}</strong><br>
        <span style="color: var(--resq-text-dark);">${item.item}</span>
        ${item.priority === 'critical' ? '<span style="color: var(--resq-warning); font-size: var(--font-size-sm); margin-left: var(--space-8);">⚡ Critical</span>' : ''}
      </div>
    `;
    
    itemDiv.addEventListener('click', (e) => {
      if (e.target.classList.contains('checklist-mark')) {
        toggleChecklistItem(e);
      } else {
        // Click anywhere on item to toggle
        const mark = itemDiv.querySelector('.checklist-mark');
        if (mark) {
          toggleChecklistItem({target: mark});
        }
      }
    });
    
    checklistItems.appendChild(itemDiv);
  });
  
  updateChecklistProgress();
}

// Toggle checklist item completion
function toggleChecklistItem(e) {
  const itemId = parseInt(e.target.dataset.id);
  const item = appData.preparednessChecklist.find(i => i.id === itemId);
  
  if (item) {
    item.completed = !item.completed;
    e.target.textContent = item.completed ? '✅' : '❌';
    e.target.className = `checklist-mark ${item.completed ? 'completed' : 'not-completed'}`;
    
    // Award points for completing items
    if (item.completed) {
      appState.userPoints += 5;
    } else {
      appState.userPoints -= 5;
    }
    
    updateChecklistProgress();
    
    // Check if all items are completed for achievement
    const allCompleted = appData.preparednessChecklist.every(i => i.completed);
    if (allCompleted && !appState.achievements.includes('community_champion')) {
      awardAchievement('community_champion');
    }
  }
}

// Update checklist progress display
function updateChecklistProgress() {
  const completed = appData.preparednessChecklist.filter(i => i.completed).length;
  const total = appData.preparednessChecklist.length;
  const percentage = Math.round((completed / total) * 100);
  
  appState.checklistProgress = percentage;
  
  const progressBar = document.getElementById('checklistProgressBar');
  const progressText = document.getElementById('checklistProgressText');
  
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
    progressBar.style.background = 'var(--resq-success)';
  }
  if (progressText) {
    progressText.textContent = `${percentage}% Complete`;
  }
  
  updateUserStats();
}

// Initialize quiz system
function initializeQuiz() {
  currentQuizQuestion = 0;
  appState.quizScore = 0;
  showQuizQuestion();
}

// Display current quiz question
function showQuizQuestion() {
  const question = appData.quizQuestions[currentQuizQuestion];
  const questionEl = document.getElementById('quizQuestion');
  const optionsEl = document.getElementById('quizOptions');
  const currentQuestionEl = document.getElementById('currentQuestion');
  const totalQuestionsEl = document.getElementById('totalQuestions');
  const submitBtn = document.getElementById('submitAnswer');
  
  if (!question || !questionEl || !optionsEl) return;
  
  questionEl.textContent = question.question;
  if (currentQuestionEl) currentQuestionEl.textContent = currentQuizQuestion + 1;
  if (totalQuestionsEl) totalQuestionsEl.textContent = appData.quizQuestions.length;
  
  optionsEl.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'quiz-option';
    optionDiv.innerHTML = `
      <input type="radio" name="quiz-option" value="${index}" id="option-${index}">
      <label for="option-${index}" style="cursor: pointer; flex: 1;">${option}</label>
    `;
    optionsEl.appendChild(optionDiv);
    
    optionDiv.addEventListener('click', () => {
      document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
      optionDiv.classList.add('selected');
      optionDiv.querySelector('input').checked = true;
      if (submitBtn) submitBtn.disabled = false;
    });
  });
  
  if (submitBtn) submitBtn.disabled = true;
}

// Submit quiz answer and show feedback
function submitQuizAnswer() {
  const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
  if (!selectedOption) return;
  
  const question = appData.quizQuestions[currentQuizQuestion];
  const selectedIndex = parseInt(selectedOption.value);
  const isCorrect = selectedIndex === question.correct;
  
  if (isCorrect) {
    appState.quizScore++;
    appState.userPoints += 10;
  }
  
  // Show explanation
  const optionsEl = document.getElementById('quizOptions');
  const explanationDiv = document.createElement('div');
  explanationDiv.style.cssText = `
    background: ${isCorrect ? 'var(--color-bg-3)' : 'var(--color-bg-4)'};
    border: 2px solid ${isCorrect ? 'var(--resq-success)' : 'var(--resq-warning)'};
    border-radius: var(--radius-base);
    padding: var(--space-12);
    margin-top: var(--space-12);
  `;
  explanationDiv.innerHTML = `
    <strong style="color: ${isCorrect ? 'var(--resq-success)' : 'var(--resq-warning)'};">
      ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}
    </strong><br>
    <span style="color: var(--resq-text-dark);">${question.explanation}</span>
  `;
  optionsEl.appendChild(explanationDiv);
  
  // Disable further selection
  document.querySelectorAll('.quiz-option input').forEach(input => input.disabled = true);
  const submitBtn = document.getElementById('submitAnswer');
  if (submitBtn) submitBtn.style.display = 'none';
  
  // Show next question after delay
  setTimeout(() => {
    currentQuizQuestion++;
    if (currentQuizQuestion < appData.quizQuestions.length) {
      showQuizQuestion();
      if (submitBtn) submitBtn.style.display = 'block';
    } else {
      showQuizResults();
    }
  }, 3000);
  
  updateUserStats();
}

// Show final quiz results
function showQuizResults() {
  const quizContent = document.getElementById('quizContent');
  const resultsEl = document.getElementById('quizResults');
  
  if (quizContent) quizContent.style.display = 'none';
  if (resultsEl) resultsEl.classList.remove('hidden');
  
  const finalScore = document.getElementById('finalScore');
  const pointsEarned = document.getElementById('pointsEarned');
  
  if (finalScore) finalScore.textContent = `${appState.quizScore}/${appData.quizQuestions.length}`;
  if (pointsEarned) pointsEarned.textContent = appState.quizScore * 10;
  
  // Award achievement for perfect score
  if (appState.quizScore === appData.quizQuestions.length && !appState.achievements.includes('disaster_expert')) {
    awardAchievement('disaster_expert');
  }
}

// Restart quiz functionality
function restartQuiz() {
  const quizContent = document.getElementById('quizContent');
  const resultsEl = document.getElementById('quizResults');
  
  if (quizContent) quizContent.style.display = 'block';
  if (resultsEl) resultsEl.classList.add('hidden');
  
  initializeQuiz();
}

// Populate achievements display
function populateAchievements() {
  const achievementsList = document.getElementById('achievementsList');
  if (!achievementsList) return;
  
  achievementsList.innerHTML = '';
  
  appData.achievements.forEach(achievement => {
    const achievementDiv = document.createElement('div');
    achievementDiv.style.cssText = `
      background: var(--resq-white);
      border-radius: var(--radius-lg);
      padding: var(--space-16);
      border: 2px solid ${appState.achievements.includes(achievement.id) ? 'var(--resq-success)' : 'var(--resq-border)'};
      opacity: ${appState.achievements.includes(achievement.id) ? '1' : '0.5'};
      display: flex;
      align-items: flex-start;
      gap: var(--space-12);
      transition: all var(--duration-fast) var(--ease-standard);
      min-width: 280px;
    `;
    
    achievementDiv.innerHTML = `
      <span style="font-size: var(--font-size-3xl);">${achievement.icon}</span>
      <div>
        <h4 style="color: var(--resq-primary); margin-bottom: var(--space-4);">${achievement.name}</h4>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--space-8);">${achievement.description}</p>
        <strong style="color: var(--resq-action);">${achievement.points} points</strong>
        ${achievement.progress ? `<div style="margin-top: var(--space-8);"><div style="background: var(--color-bg-1); height: 6px; border-radius: 3px; overflow: hidden;"><div style="background: var(--resq-success); height: 100%; width: ${achievement.progress}%; transition: width 0.3s ease;"></div></div><small style="color: var(--color-text-secondary);">${achievement.progress}% complete</small></div>` : ''}
      </div>
    `;
    
    achievementsList.appendChild(achievementDiv);
  });
}

// Award achievement to user
function awardAchievement(achievementId) {
  if (!appState.achievements.includes(achievementId)) {
    appState.achievements.push(achievementId);
    const achievement = appData.achievements.find(a => a.id === achievementId);
    
    if (achievement) {
      appState.userPoints += achievement.points;
      appState.userBadges++;
      
      // Show professional notification
      showAchievementNotification(achievement);
    }
    
    updateUserStats();
    populateAchievements();
  }
}

// Show achievement notification
function showAchievementNotification(achievement) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--resq-success);
    color: var(--resq-white);
    padding: var(--space-16);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    z-index: 60;
    max-width: 300px;
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-8);">
      <span style="font-size: var(--font-size-xl);">${achievement.icon}</span>
      <strong>Achievement Unlocked!</strong>
    </div>
    <div style="margin-bottom: var(--space-4);">${achievement.name}</div>
    <div style="font-size: var(--font-size-sm); opacity: 0.9;">+${achievement.points} points</div>
  `;
  
  document.body.appendChild(notification);
  
  // Remove notification after 4 seconds
  setTimeout(() => {
    notification.remove();
  }, 4000);
}

// Populate forum posts
function populateForumPosts() {
  const forumPosts = document.getElementById('forumPosts');
  if (!forumPosts) return;
  
  forumPosts.innerHTML = '';
  
  appData.communityPosts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.style.cssText = `
      background: var(--resq-white);
      border-radius: var(--radius-lg);
      padding: var(--space-20);
      margin-bottom: var(--space-16);
      border: 1px solid var(--resq-border);
      box-shadow: var(--shadow-sm);
      transition: transform var(--duration-fast) var(--ease-standard);
    `;
    
    postDiv.innerHTML = `
      <h3 style="color: var(--resq-primary); margin-bottom: var(--space-12); font-size: var(--font-size-xl);">${post.title}</h3>
      <div style="display: flex; align-items: center; gap: var(--space-16); margin-bottom: var(--space-12); font-size: var(--font-size-sm); color: var(--color-text-secondary);">
        <span>👤 ${post.author}</span>
        <span>⏰ ${post.timestamp}</span>
        <span>💬 ${post.replies} replies</span>
        <span>👍 ${post.likes} likes</span>
      </div>
      <p style="color: var(--resq-text-dark);">${post.content}</p>
    `;
    
    postDiv.addEventListener('mouseenter', () => {
      postDiv.style.transform = 'translateY(-2px)';
      postDiv.style.boxShadow = 'var(--shadow-md)';
    });
    
    postDiv.addEventListener('mouseleave', () => {
      postDiv.style.transform = 'translateY(0)';
      postDiv.style.boxShadow = 'var(--shadow-sm)';
    });
    
    forumPosts.appendChild(postDiv);
  });
}

// Populate language selector
function populateLanguages() {
  const languageSelect = document.getElementById('languageSelect');
  if (!languageSelect) return;
  
  languageSelect.innerHTML = '';
  
  appData.languages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang.code;
    option.textContent = `${lang.flag} ${lang.name}`;
    languageSelect.appendChild(option);
  });
  
  // Set default language
  languageSelect.value = 'en';
}

// Populate active alerts
function populateActiveAlerts() {
  const alertsList = document.getElementById('activeAlertsList');
  if (!alertsList) return;
  
  alertsList.innerHTML = '';
  
  appData.disasters.forEach(disaster => {
    const alertDiv = document.createElement('div');
    const severityColor = disaster.severity.toLowerCase() === 'critical' ? 'var(--resq-warning)' : 
                         disaster.severity.toLowerCase() === 'high' ? 'var(--resq-action)' : 'var(--resq-info)';
    
    alertDiv.style.cssText = `
      background: var(--resq-white);
      border-left: 4px solid ${severityColor};
      border-radius: var(--radius-base);
      padding: var(--space-12);
      margin-bottom: var(--space-12);
      box-shadow: var(--shadow-sm);
    `;
    
    alertDiv.innerHTML = `
      <h4 style="color: var(--resq-primary); margin-bottom: var(--space-4);">${disaster.icon} ${disaster.type}</h4>
      <p><strong>Location:</strong> ${disaster.location}</p>
      <p><strong>Status:</strong> <span style="color: ${severityColor}; font-weight: 600;">${disaster.status}</span></p>
      <p><strong>Affected:</strong> ${disaster.affected}</p>
      <small style="color: var(--color-text-secondary);">${disaster.time}</small>
    `;
    alertsList.appendChild(alertDiv);
  });
}

// Show emergency modal
function showEmergencyModal() {
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

// Hide emergency modal
function hideEmergencyModal() {
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Handle new forum post submission
function handleNewPost(e) {
  e.preventDefault();
  const formElements = e.target.elements;
  const title = formElements[0].value;
  const content = formElements[1].value;
  
  if (title && content) {
    const newPost = {
      id: appData.communityPosts.length + 1,
      title: title,
      author: 'You',
      role: 'Community Member',
      timestamp: 'Just now',
      content: content,
      replies: 0,
      likes: 0
    };
    
    appData.communityPosts.unshift(newPost);
    appState.forumPostsCount++;
    appState.userPoints += 5;
    
    // Award achievement for community participation
    if (appState.forumPostsCount >= 5 && !appState.achievements.includes('community_protector')) {
      awardAchievement('community_protector');
    }
    
    populateForumPosts();
    updateUserStats();
    
    document.getElementById('newPostModal').classList.add('hidden');
    e.target.reset();
    
    // Show success message
    showNotification('Post created successfully!', 'success');
  }
}

// Handle incident report submission
function handleIncidentReport(e) {
  e.preventDefault();
  appState.userPoints += 15;
  
  const reportCount = (appState.reportCount || 0) + 1;
  appState.reportCount = reportCount;
  
  // Award achievement for reporting incidents
  if (reportCount >= 3 && !appState.achievements.includes('first_aid_specialist')) {
    awardAchievement('first_aid_specialist');
  }
  
  updateUserStats();
  e.target.reset();
  
  showNotification('Incident report submitted successfully! Local authorities have been notified.', 'success');
}

// Send chat message to AI assistant
function sendChatMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  
  if (!chatInput || !chatMessages) return;
  
  const message = chatInput.value.trim().toLowerCase();
  
  if (message) {
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.style.cssText = `
      background: var(--resq-info);
      color: var(--resq-white);
      margin-left: var(--space-32);
    `;
    userMessage.innerHTML = `<div class="message-content">${chatInput.value}</div>`;
    chatMessages.appendChild(userMessage);
    
    // Generate bot response
    let response = chatbotResponses.default;
    for (const keyword in chatbotResponses) {
      if (message.includes(keyword)) {
        response = chatbotResponses[keyword];
        break;
      }
    }
    
    // Add bot response after delay
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.className = 'chat-message bot';
      botMessage.innerHTML = `<div class="message-content">${response}</div>`;
      chatMessages.appendChild(botMessage);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
    
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Handle language change
function handleLanguageChange(e) {
  const selectedLang = e.target.value;
  const selectedLanguage = appData.languages.find(lang => lang.code === selectedLang);
  
  if (selectedLanguage) {
    showNotification(`Language changed to ${selectedLanguage.name}. In a real application, this would translate the interface.`, 'info');
  }
}

// Handle offline mode toggle
function handleOfflineMode(e) {
  const isOffline = e.target.checked;
  if (isOffline) {
    showNotification('📱 Offline mode enabled. Critical disaster information will be cached for offline access.', 'info');
  } else {
    showNotification('🌐 Offline mode disabled. App will require internet connection.', 'info');
  }
}

// Update user statistics display
function updateUserStats() {
  // Update dashboard stats
  const elements = {
    userPoints: document.getElementById('userPoints'),
    userBadges: document.getElementById('userBadges'),
    checklistProgress: document.getElementById('checklistProgress'),
    profilePoints: document.getElementById('profilePoints'),
    profileBadges: document.getElementById('profileBadges'),
    profilePosts: document.getElementById('profilePosts'),
    leaderboardScore: document.getElementById('leaderboardScore'),
    currentScore: document.getElementById('currentScore')
  };
  
  if (elements.userPoints) elements.userPoints.textContent = appState.userPoints;
  if (elements.userBadges) elements.userBadges.textContent = appState.userBadges;
  if (elements.checklistProgress) elements.checklistProgress.textContent = `${appState.checklistProgress}%`;
  if (elements.profilePoints) elements.profilePoints.textContent = appState.userPoints;
  if (elements.profileBadges) elements.profileBadges.textContent = appState.userBadges;
  if (elements.profilePosts) elements.profilePosts.textContent = appState.forumPostsCount;
  if (elements.leaderboardScore) elements.leaderboardScore.textContent = `${appState.userPoints} pts`;
  if (elements.currentScore) elements.currentScore.textContent = appState.userPoints;
}

// Show notification message
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const colors = {
    success: 'var(--resq-success)',
    error: 'var(--resq-warning)',
    warning: 'var(--resq-action)',
    info: 'var(--resq-info)'
  };
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${colors[type]};
    color: var(--resq-white);
    padding: var(--space-16);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    z-index: 60;
    max-width: 350px;
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 4000);
}

// Simulated weather updates
function updateWeatherWidget() {
  const temperatures = ['25°C', '28°C', '30°C', '26°C', '29°C'];
  const conditions = ['☀️', '⛅', '🌤️', '🌦️', '☀️'];
  const humidities = ['60%', '65%', '70%', '68%', '62%'];
  
  const randomIndex = Math.floor(Math.random() * temperatures.length);
  
  const tempEl = document.querySelector('.weather-temp');
  const iconEl = document.querySelector('.weather-icon');
  const humidityEl = document.querySelector('.weather-details div:first-child');
  
  if (tempEl) tempEl.textContent = temperatures[randomIndex];
  if (iconEl) iconEl.textContent = conditions[randomIndex];
  if (humidityEl) humidityEl.textContent = `Humidity: ${humidities[randomIndex]}`;
}

// Initialize accessibility features
function initializeAccessibility() {
  // Add ARIA labels to interactive elements
  document.querySelectorAll('.btn, .action-btn, .nav__item').forEach(btn => {
    if (!btn.getAttribute('aria-label')) {
      btn.setAttribute('aria-label', btn.textContent.trim());
    }
  });
  
  // Add keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any open modals
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
      });
    }
  });

  // Add focus management for footer links
  document.querySelectorAll('.footer__link').forEach(link => {
    link.setAttribute('aria-label', link.textContent + ' - Opens in modal dialog');
  });
  
  console.log('Accessibility features initialized');
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Auto-update weather every 30 seconds
setInterval(updateWeatherWidget, 30000);

// Log successful initialization
console.log('ResQNet Professional Disaster Management Platform loaded successfully');
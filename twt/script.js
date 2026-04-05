// ===== Theme Toggle =====
let isDarkTheme = true;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('light-theme', !isDarkTheme);
    
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.textContent = isDarkTheme ? '🌙' : '☀️';
    
    // Save preference
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Load saved theme
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        isDarkTheme = false;
        document.body.classList.add('light-theme');
        document.getElementById('theme-toggle').textContent = '☀️';
    }
});

// ===== Language Toggle =====
let currentLang = 'en';

const translations = {
    en: {},
    zh: {
        'Home': '首頁',
        'About': '關於',
        'Observations': '觀測',
        'Gallery': '圖片庫',
        'Quiz': '問答',
        'Contact': '聯絡',
        'Explore the Infinite Universe': '探索宇宙的無限可能',
        'Look up at the stars and discover endless mysteries and beauty': '仰望星空，發現無盡的奧秘與美麗',
        'Start Exploring': '開始探索',
        'About the Observatory': '關於天文臺',
        'Professional Observation': '專業觀測',
        'Equipped with advanced telescopes and observation equipment, providing professional-grade astronomical observation services.': '配備先進的天文望遠鏡和觀測設備，提供專業級的天文觀測服務。',
        'Science Education': '科普教育',
        'Regular astronomy lectures and observation activities to promote astronomical science education.': '定期舉辦天文知識講座和觀測活動，推廣天文科普教育。',
        'Research & Exploration': '研究探索',
        'Dedicated to astrophysics research, exploring the origin and evolution of the universe.': '致力於天文物理研究，探索宇宙的起源與演化。',
        "Today's Observation Info": '今日觀測資訊',
        'Sunset Time': '日落時間',
        'Moonrise Time': '月出時間',
        'Moon Phase': '月相',
        'Visible Planets': '可見行星',
        'Observation Weather Status': '觀測天氣狀況',
        'Visibility': '能見度',
        'Cloud Cover': '雲量',
        'Observation Index': '觀測指數',
        'Star Gallery': '星空圖片庫',
        'Contact Us': '聯絡我們',
        'Observatory Information': '天文臺資訊',
        'Address:': '地址：',
        'Phone:': '電話：',
        'Email:': '郵箱：',
        'Opening Hours:': '開放時間：',
        'City University of Hong Kong, Kowloon, Hong Kong': '香港九龍香港城市大學',
        'Tuesday - Sunday: 09:00 - 21:00': '週二至週日 09:00-21:00',
        'Name': '姓名',
        'Your Email': '電子郵件',
        'Message': '訊息內容',
        '📧 Send via Email': '📧 發送郵件',
        'Astronomy Knowledge Quiz': '天文知識問答',
        'Test your astronomy knowledge with 15 fun questions!': '15道有趣的天文問題，測試你的天文知識！',
        "💡 Each correct answer = 1 point. Let's see how much you know!": '💡 答對一題得1分，看看你能得多少分！',
        'Ready to Test Your Knowledge?': '準備好測試你的知識了嗎？',
        '15 questions about astronomy, space, and the universe': '15道關於天文、太空和宇宙的問題',
        '🚀 Start Quiz': '🚀 開始答題',
        'All Rights Reserved.': '保留所有權利。',
        'Good': '良好',
        'New Moon': '新月',
        'Jupiter, Saturn': '木星、土星',
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    
    const langBtn = document.getElementById('lang-toggle');
    langBtn.textContent = currentLang === 'en' ? '中文' : 'English';
    
    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });
    
    // Update labels
    document.querySelectorAll('[data-en-label]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}-label`);
        if (text) el.textContent = text;
    });
    
    // If quiz is active, refresh current question
    if (document.getElementById('quiz-game-screen').style.display === 'block') {
        showQuestion();
        if (answered) {
            showFeedback(answered === true ? null : null);
        }
    }
    
    // Save preference
    localStorage.setItem('language', currentLang);
}

// Load saved language
window.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'zh') {
        toggleLanguage();
    }
});

// ===== Back to Top Button =====
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// ===== Navigation Scroll Effect =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// ===== Smooth Scroll to Section =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation links smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
        // Close mobile menu
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Dynamic Observation Data Updates =====
function updateObservationData() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Simulate sunset time (varies by season)
    const month = now.getMonth();
    let sunsetHour = 18;
    if (month >= 5 && month <= 7) { // Summer
        sunsetHour = 19;
    } else if (month >= 11 || month <= 1) { // Winter
        sunsetHour = 17;
    }
    
    // Update sunset time
    document.getElementById('sunset-time').textContent = 
        `${sunsetHour}:${minutes < 10 ? '0' : ''}${minutes}`;
    
    // Update moonrise time (simulated)
    const moonriseHour = (sunsetHour + 1) % 24;
    document.getElementById('moonrise-time').textContent = 
        `${moonriseHour}:${minutes < 10 ? '0' : ''}${minutes}`;
    
    // Update moon phase (simulated based on lunar cycle)
    const moonPhases = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
    const dayOfMonth = now.getDate();
    const phaseIndex = Math.floor((dayOfMonth % 30) / 3.75);
    document.getElementById('moon-phase').textContent = moonPhases[phaseIndex];
    
    // Update visible planets (based on time)
    let planets = [];
    if (hours >= 18 || hours < 6) {
        planets = ['Jupiter', 'Saturn'];
        if (month >= 3 && month <= 9) {
            planets.push('Mars');
        }
        if (month >= 10 || month <= 2) {
            planets.push('Venus');
        }
    } else {
        planets = ['None (Daytime)'];
    }
    document.getElementById('visible-planets').textContent = planets.join(', ');
}

// Update observation data on page load
updateObservationData();
// Update every minute
setInterval(updateObservationData, 60000);

// ===== Weather Status Simulation =====
function updateWeatherInfo() {
    // Simulated weather data
    const visibilityLevels = ['Excellent', 'Good', 'Fair', 'Poor'];
    const cloudCovers = ['5%', '10%', '15%', '20%', '25%'];
    const obsIndexes = ['★★★★★', '★★★★☆', '★★★☆☆', '★★☆☆☆'];
    
    // Simulate different weather conditions based on current time
    const hour = new Date().getHours();
    let weatherQuality = 1; // Default good
    
    if (hour >= 20 || hour < 5) {
        weatherQuality = 0; // Better weather at night
    }
    
    document.getElementById('visibility').textContent = visibilityLevels[weatherQuality];
    document.getElementById('cloud-cover').textContent = cloudCovers[weatherQuality];
    document.getElementById('obs-index').textContent = obsIndexes[weatherQuality];
}

updateWeatherInfo();
setInterval(updateWeatherInfo, 300000); // Update every 5 minutes

// ===== Gallery Modal Functionality =====
const modal = document.getElementById('image-modal');
const modalImage = modal.querySelector('.modal-image');
const modalTitle = modal.querySelector('.modal-title');
const closeBtn = modal.querySelector('.close-btn');

// Add click event to each gallery item
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const placeholderImg = this.querySelector('.placeholder-img');
        const title = this.getAttribute('data-title');
        const background = placeholderImg.style.backgroundImage;
        
        modalImage.style.backgroundImage = background;
        modalImage.style.backgroundSize = 'cover';
        modalImage.style.backgroundPosition = 'center';
        modalImage.innerHTML = '';
        modalTitle.textContent = title;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ESC key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields!', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address!', 'error');
            return;
        }
        
        // Open email client with pre-filled content
        const subject = encodeURIComponent(`Message from ${name} - Observatory Website`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:wuzijing1112@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        showNotification('Opening your email client...', 'success');
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== Notification System =====
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        border-radius: 8px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animation styles
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// ===== Scroll Animations (Fade-in Effect) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add scroll animation to all cards and items
document.querySelectorAll('.about-card, .obs-item, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Current Time Display =====
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Update time element if exists
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// ===== Page Load Initialization =====
window.addEventListener('load', function() {
    console.log('Observatory website loaded successfully!');
    
    // Add page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Console Welcome Message =====
console.log('%c🔭 Welcome to the Observatory Website!', 'font-size: 20px; color: #e94560; font-weight: bold;');
console.log('%cExplore the infinite possibilities of the universe 🌟', 'font-size: 14px; color: #667eea;');

// ===== Astronomy Quiz =====
const quizData = [
    {
        question: { en: "What is the closest star to Earth?", zh: "離地球最近的恆星是什麼？" },
        options: { en: ["Proxima Centauri", "The Sun", "Sirius", "Vega"], zh: ["比鄰星", "太陽", "天狼星", "織女星"] },
        correct: 1,
        answer: { en: "The Sun is the closest star to Earth, about 150 million kilometers away. Proxima Centauri is the closest star outside our solar system.", zh: "太陽是離地球最近的恆星，約1.5億公里遠。比鄰星是太陽系外最近的恆星。" }
    },
    {
        question: { en: "How many planets are in our solar system?", zh: "我們的太陽系有多少顆行星？" },
        options: { en: ["7", "8", "9", "10"], zh: ["7", "8", "9", "10"] },
        correct: 1,
        answer: { en: "There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet in 2006.", zh: "我們的太陽系有8顆行星：水星、金星、地球、火星、木星、土星、天王星和海王星。冥王星在2006年被重新歸類為矮行星。" }
    },
    {
        question: { en: "Which planet is known as the 'Red Planet'?", zh: "哪顆行星被稱為「紅色星球」？" },
        options: { en: ["Venus", "Jupiter", "Mars", "Mercury"], zh: ["金星", "木星", "火星", "水星"] },
        correct: 2,
        answer: { en: "Mars is called the 'Red Planet' because of its reddish appearance, caused by iron oxide (rust) on its surface.", zh: "火星被稱為「紅色星球」，因為其表面有氧化鐵（鐵鏽）而呈現紅色。" }
    },
    {
        question: { en: "What is the largest planet in our solar system?", zh: "太陽系中最大的行星是哪顆？" },
        options: { en: ["Saturn", "Neptune", "Jupiter", "Uranus"], zh: ["土星", "海王星", "木星", "天王星"] },
        correct: 2,
        answer: { en: "Jupiter is the largest planet, with a mass more than twice that of all other planets combined. Its Great Red Spot is a storm larger than Earth!", zh: "木星是最大的行星，質量是其他所有行星總和的兩倍多。它的大紅斑是一個比地球還大的風暴！" }
    },
    {
        question: { en: "What causes the tides on Earth?", zh: "是什麼造成地球上的潮汐？" },
        options: { en: ["Wind", "The Moon's gravity", "Earth's rotation", "The Sun's heat"], zh: ["風", "月球引力", "地球自轉", "太陽熱量"] },
        correct: 1,
        answer: { en: "The Moon's gravitational pull is the main cause of tides. The Sun also contributes, but to a lesser extent.", zh: "月球的引力是造成潮汐的主要原因。太陽也有貢獻，但程度較小。" }
    },
    {
        question: { en: "What is a light-year a measure of?", zh: "光年是衡量什麼的單位？" },
        options: { en: ["Time", "Brightness", "Distance", "Speed"], zh: ["時間", "亮度", "距離", "速度"] },
        correct: 2,
        answer: { en: "A light-year is a measure of distance - the distance light travels in one year, about 9.46 trillion kilometers.", zh: "光年是距離的單位——光在一年中傳播的距離，約9.46兆公里。" }
    },
    {
        question: { en: "Which planet has the most visible rings?", zh: "哪顆行星有最明顯的環？" },
        options: { en: ["Jupiter", "Uranus", "Neptune", "Saturn"], zh: ["木星", "天王星", "海王星", "土星"] },
        correct: 3,
        answer: { en: "Saturn has the most spectacular and visible ring system, made of ice and rock particles ranging from tiny grains to house-sized chunks.", zh: "土星有最壯觀且可見的環系統，由冰和岩石顆粒組成，從微小顆粒到房屋大小的碎片都有。" }
    },
    {
        question: { en: "What is the name of our galaxy?", zh: "我們所在的星系叫什麼名字？" },
        options: { en: ["Andromeda", "The Milky Way", "Whirlpool", "Sombrero"], zh: ["仙女座", "銀河", "渦狀", "草帽"] },
        correct: 1,
        answer: { en: "Our galaxy is called the Milky Way, containing about 100-400 billion stars. It's a barred spiral galaxy about 100,000 light-years in diameter.", zh: "我們的星系叫銀河，包含約1000-4000億顆恆星。它是一個棒旋星系，直徑約10萬光年。" }
    },
    {
        question: { en: "How long does it take light from the Sun to reach Earth?", zh: "太陽的光需要多久才能到達地球？" },
        options: { en: ["8 seconds", "8 minutes", "8 hours", "8 days"], zh: ["8秒", "8分鐘", "8小時", "8天"] },
        correct: 1,
        answer: { en: "Sunlight takes about 8 minutes and 20 seconds to reach Earth, traveling at 300,000 km/s.", zh: "陽光大約需要8分20秒才能到達地球，以每秒30萬公里的速度傳播。" }
    },
    {
        question: { en: "What is the Great Red Spot on Jupiter?", zh: "木星上的大紅斑是什麼？" },
        options: { en: ["A volcano", "A crater", "A storm", "A lake"], zh: ["火山", "隕石坑", "風暴", "湖泊"] },
        correct: 2,
        answer: { en: "The Great Red Spot is a giant storm that has been raging for at least 400 years. It's larger than Earth!", zh: "大紅斑是一個巨大的風暴，已經肆虐至少400年。它比地球還大！" }
    },
    {
        question: { en: "Which planet rotates on its side?", zh: "哪顆行星是側著自轉的？" },
        options: { en: ["Neptune", "Uranus", "Saturn", "Mars"], zh: ["海王星", "天王星", "土星", "火星"] },
        correct: 1,
        answer: { en: "Uranus rotates on its side with an axial tilt of 98 degrees, likely due to an ancient collision with an Earth-sized object.", zh: "天王星的自轉軸傾斜98度，可能是因為古代與地球大小的物體碰撞所致。" }
    },
    {
        question: { en: "What is the hottest planet in our solar system?", zh: "太陽系中最熱的行星是哪顆？" },
        options: { en: ["Mercury", "Venus", "Mars", "Jupiter"], zh: ["水星", "金星", "火星", "木星"] },
        correct: 1,
        answer: { en: "Venus is the hottest planet (462°C) due to its thick atmosphere of CO2 creating a strong greenhouse effect, even though Mercury is closer to the Sun.", zh: "金星是最熱的行星（462°C），因為其濃厚的大氣層產生強烈的溫室效應，儘管水星離太陽更近。" }
    },
    {
        question: { en: "What phase is the Moon when we can't see it?", zh: "月亮什麼時候看不見？" },
        options: { en: ["Full Moon", "New Moon", "Crescent Moon", "Gibbous Moon"], zh: ["滿月", "新月", "蛾眉月", "盈凸月"] },
        correct: 1,
        answer: { en: "During the New Moon phase, the Moon is between Earth and the Sun, so the side facing us is not illuminated.", zh: "在新月期間，月球位於地球和太陽之間，所以朝向我們的一面沒有被照亮。" }
    },
    {
        question: { en: "What is a nebula?", zh: "星雲是什麼？" },
        options: { en: ["A type of star", "A cloud of gas and dust", "A planet", "A comet"], zh: ["一種恆星", "氣體和塵埃雲", "行星", "彗星"] },
        correct: 1,
        answer: { en: "A nebula is a giant cloud of dust and gas in space. Some nebulae are regions where new stars are forming, making them 'stellar nurseries'.", zh: "星雲是太空中巨大的塵埃和氣體雲。一些星雲是新恆星形成的區域，被稱為「恆星育嬰室」。" }
    },
    {
        question: { en: "How many moons does Earth have?", zh: "地球有多少顆衛星？" },
        options: { en: ["0", "1", "2", "3"], zh: ["0", "1", "2", "3"] },
        correct: 1,
        answer: { en: "Earth has 1 natural satellite - the Moon. It's the fifth-largest moon in the solar system and the largest relative to its planet's size.", zh: "地球有1顆天然衛星——月球。它是太陽系中第五大的衛星，也是相對於行星尺寸最大的衛星。" }
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// Start Quiz
function startQuiz() {
    document.getElementById('quiz-start-screen').style.display = 'none';
    document.getElementById('quiz-game-screen').style.display = 'block';
    document.getElementById('quiz-result-screen').style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    showQuestion();
}

// Show Current Question
function showQuestion() {
    answered = false;
    const quiz = quizData[currentQuestionIndex];
    const questionContainer = document.getElementById('quiz-current-question');
    const feedbackContainer = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next-btn');
    const skipBtn = document.getElementById('quiz-skip-btn');
    
    // Hide feedback and next button
    feedbackContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    skipBtn.style.display = 'inline-block';
    skipBtn.textContent = currentLang === 'zh' ? '💡 顯示答案' : '💡 Show Answer';
    
    // Update progress
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('progress-fill').style.width = `${((currentQuestionIndex) / quizData.length) * 100}%`;
    
    // Generate question HTML with current language
    let optionsHTML = '';
    quiz.options[currentLang].forEach((option, index) => {
        optionsHTML += `
            <button class="quiz-option" onclick="checkAnswer(${index})" id="opt-${index}">
                ${option}
            </button>
        `;
    });
    
    questionContainer.innerHTML = `
        <h3 class="quiz-question">${quiz.question[currentLang]}</h3>
        <div class="quiz-options">
            ${optionsHTML}
        </div>
    `;
}

// Check Answer
function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    
    const quiz = quizData[currentQuestionIndex];
    const isCorrect = selectedIndex === quiz.correct;
    
    // Highlight options
    quiz.options[currentLang].forEach((_, index) => {
        const optionBtn = document.getElementById(`opt-${index}`);
        optionBtn.disabled = true;
        
        if (index === quiz.correct) {
            optionBtn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            optionBtn.classList.add('incorrect');
        }
    });
    
    // Update score
    if (isCorrect) {
        score++;
        updateScore();
    }
    
    // Show feedback
    showFeedback(isCorrect);
    
    // Hide skip button, show next button
    document.getElementById('quiz-skip-btn').style.display = 'none';
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.style.display = 'inline-block';
    
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.innerHTML = currentLang === 'zh' ? '🎉 查看結果' : '🎉 See Results';
    } else {
        nextBtn.innerHTML = `<span data-en="Next Question" data-zh="下一題">${currentLang === 'zh' ? '下一題' : 'Next Question'}</span> →`;
    }
}

// Skip Question (Show Answer)
function skipQuestion() {
    if (answered) return;
    answered = true;
    
    const quiz = quizData[currentQuestionIndex];
    
    // Highlight correct answer
    quiz.options[currentLang].forEach((_, index) => {
        const optionBtn = document.getElementById(`opt-${index}`);
        optionBtn.disabled = true;
        
        if (index === quiz.correct) {
            optionBtn.classList.add('correct');
        }
    });
    
    // Show feedback (skipped)
    showFeedback(null);
    
    // Hide skip button, show next button
    document.getElementById('quiz-skip-btn').style.display = 'none';
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.style.display = 'inline-block';
    
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.innerHTML = currentLang === 'zh' ? '🎉 查看結果' : '🎉 See Results';
    } else {
        nextBtn.innerHTML = `<span data-en="Next Question" data-zh="下一題">${currentLang === 'zh' ? '下一題' : 'Next Question'}</span> →`;
    }
}

// Show Feedback
function showFeedback(isCorrect) {
    const quiz = quizData[currentQuestionIndex];
    const feedbackContainer = document.getElementById('quiz-feedback');
    feedbackContainer.style.display = 'block';
    
    let feedbackHTML = '';
    if (isCorrect === true) {
        feedbackHTML = `<strong>${currentLang === 'zh' ? '✅ 正確！' : '✅ Correct!'}</strong><br>`;
    } else if (isCorrect === false) {
        feedbackHTML = `<strong>${currentLang === 'zh' ? '❌ 不正確！' : '❌ Not quite!'}</strong><br>`;
    } else {
        feedbackHTML = `<strong>${currentLang === 'zh' ? '💡 答案揭曉' : '💡 Answer Revealed'}</strong><br>`;
    }
    
    feedbackHTML += `💡 ${quiz.answer[currentLang]}`;
    feedbackContainer.innerHTML = feedbackHTML;
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= quizData.length) {
        showResults();
    } else {
        showQuestion();
    }
}

// Update Score Display
function updateScore() {
    document.getElementById('live-score').textContent = score;
}

// Show Results
function showResults() {
    document.getElementById('quiz-game-screen').style.display = 'none';
    document.getElementById('quiz-result-screen').style.display = 'block';

    const wrong = quizData.length - score;

    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('wrong-count').textContent = wrong;

    // Result message based on score
    let message = '';
    let icon = '';
    if (currentLang === 'zh') {
        if (score === 15) {
            message = '完美！你是天文學專家！🌟';
            icon = '🏆';
        } else if (score >= 12) {
            message = '太棒了！你真的很了解！⭐';
            icon = '🎉';
        } else if (score >= 8) {
            message = '做得好！繼續學習！🚀';
            icon = '👏';
        } else if (score >= 5) {
            message = '不錯的嘗試！還有更多可以探索！🌙';
            icon = '😊';
        } else {
            message = '繼續探索宇宙！🌌';
            icon = '🔭';
        }
    } else {
        if (score === 15) {
            message = "Perfect! You're an astronomy expert! 🌟";
            icon = '🏆';
        } else if (score >= 12) {
            message = 'Excellent! You really know your stuff! ⭐';
            icon = '🎉';
        } else if (score >= 8) {
            message = 'Good job! Keep learning! 🚀';
            icon = '👏';
        } else if (score >= 5) {
            message = "Nice try! There's more to explore! 🌙";
            icon = '😊';
        } else {
            message = 'Keep exploring the universe! 🌌';
            icon = '🔭';
        }
    }

    document.getElementById('result-message').textContent = message;
    document.getElementById('result-icon').textContent = icon;
}

// Restart Quiz
function restartQuiz() {
    document.getElementById('quiz-start-screen').style.display = 'block';
    document.getElementById('quiz-game-screen').style.display = 'none';
    document.getElementById('quiz-result-screen').style.display = 'none';
    document.getElementById('quiz-skip-btn').style.display = 'inline-block';
    currentQuestionIndex = 0;
    score = 0;
}

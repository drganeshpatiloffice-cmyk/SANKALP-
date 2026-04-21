const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

// --- 1. TOP STRIP & TICKER LOGIC ---
document.querySelectorAll('.top-strip').forEach((strip) => {
    strip.innerHTML = `
    <div class="container top-strip-inner" style="display: flex; justify-content: space-between; align-items: center;">
      <div class="ticker-container" style="overflow: hidden; white-space: nowrap; flex-grow: 1;">
        <div class="ticker-wrapper" style="display: inline-block; animation: ticker 25s linear infinite;">
          <span class="ticker-item" style="padding: 0 40px;">🌐 <strong>Webinar:</strong> Scientific Pond Fish Farming & Management - April 22, 2026. Join Dr. Vivek Vartak !</span>
          <span class="ticker-item" style="padding: 0 40px;">🛡️ Sankalp Gramin Vikas Sanstha: Committed to Rural Empowerment and Sustainable Development.</span>
        </div>
      </div>
      <div class="social-block" style="display: flex; align-items: center; gap: 15px; margin-left: 20px;">
        <span>info@sankalpgvs.org</span>
        <span class="social-icons" aria-label="Social media">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="social-icon">
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="social-icon">
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M14 8h2.5V4.5H14c-2.8 0-4.5 1.7-4.5 4.8V11H7v3.3h2.5V20H13v-5.7h2.8L16.3 11H13V9.7c0-1.1.4-1.7 1-1.7Z" fill="currentColor"/></svg>
          </a>
        </span>
      </div>
    </div>
  `;
});

// --- 2. GOV IDENTITY & UTILITY MENU ---
document.querySelectorAll('.gov-identity .utility').forEach((utility) => {
    utility.innerHTML = `
    <nav class="identity-menu" aria-label="Main Menu">
      <ul class="identity-menu-list">
        <li><a href="index.html">Home</a></li>
        <li class="identity-has-submenu">
          <a href="about.html">About Us</a>
          <ul class="identity-submenu">
            <li><a href="mission-vision.html">Mission and Vision</a></li>
            <li><a href="president-desk.html">President Desk</a></li>
            <li><a href="ceo-secretary-desk.html">CEO and Secretary Desk</a></li>
            <li><a href="who-we-are.html">Who We Are</a></li>
          </ul>
        </li>
        <li class="identity-has-submenu">
          <a href="departments.html">Departments</a>
          <ul class="identity-submenu">
            <li><a href="department-agriculture.html">Agriculture Department</a></li>
            <li><a href="department-science-technology.html">Science and Technology Department</a></li>
            <li><a href="department-education.html">Education Department</a></li>
          </ul>
        </li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="donate.html" class="menu-donate-inline">Donate Now</a></li>
      </ul>
    </nav>
  `;
});

// --- 3. HERO SLIDER LOGIC ---
const heroSlider = document.getElementById('heroSlider');
const heroSlidesWrap = document.getElementById('heroSlides');
const heroDots = document.getElementById('heroDots');

if (heroSlider && heroSlidesWrap && heroDots) {
    const slides = Array.from(heroSlidesWrap.querySelectorAll('.hero-slide'));
    let currentIndex = 0;
    
    const dotButtons = slides.map((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'hero-dot';
        dot.addEventListener('click', () => showSlide(index));
        heroDots.appendChild(dot);
        return dot;
    });

    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
        dotButtons.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    setInterval(() => showSlide(currentIndex + 1), 5000);
    showSlide(0);
}

// --- 4. VISITOR COUNTER LOGIC ---
function updateVisitorCounter() {
    const counterDisplay = document.getElementById('visitorCount');
    if (!counterDisplay) return;

    let count = localStorage.getItem('v_count');
    if (!count) {
        count = 12540; // Starting point for Sankalp GVS
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('v_count', count);
    counterDisplay.innerText = count.toString().padStart(6, '0');
}

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
    updateVisitorCounter();
    if (window.googleTranslateElementInit) window.googleTranslateElementInit();
});

// Mobile Menu Toggle
if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

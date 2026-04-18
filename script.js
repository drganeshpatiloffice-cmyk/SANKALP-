const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

document.querySelectorAll('.top-strip').forEach((strip) => {
  strip.innerHTML = `
    <div class="container top-strip-inner">
      <span>1800 1200 188 (Tollfree)</span>
      <span>care@svgs.in</span>
      <span class="social-icons" aria-label="Social media">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 8h2.5V4.5H14c-2.8 0-4.5 1.7-4.5 4.8V11H7v3.3h2.5V20H13v-5.7h2.8L16.3 11H13V9.7c0-1.1.4-1.7 1-1.7Z" fill="currentColor"/></svg>
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X" class="social-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h3.8l4.1 5.8L16.7 4H20l-6.3 7.2L20.4 20h-3.8l-4.6-6.4L6.8 20H3.6l6.7-7.7L4 4Z" fill="currentColor"/></svg>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="9" width="3" height="11" fill="currentColor"/><rect x="4" y="4" width="3" height="3" fill="currentColor"/><path d="M10 9h2.9v1.5h.1c.5-.9 1.7-1.8 3.5-1.8 3.1 0 3.5 2 3.5 4.7V20h-3v-5.8c0-1.4 0-2.4-1.6-2.4s-1.8 1.2-1.8 2.3V20h-3V9Z" fill="currentColor"/></svg>
        </a>
      </span>
    </div>
  `;
});

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
            <li><a href="why-sankalp.html">Why Sankalp</a></li>
            <li><a href="who-we-are.html">Who We Are</a></li>
          </ul>
        </li>
        <li class="identity-has-submenu">
          <a href="departments.html">Departments</a>
          <ul class="identity-submenu">
            <li><a href="department-agriculture.html">Agriculture Department</a></li>
            <li><a href="department-child-welfare.html">Child Welfare Department</a></li>
            <li><a href="department-culture.html">Culture Department</a></li>
            <li><a href="department-disaster-response.html">Disaster Response Cell</a></li>
            <li><a href="department-education.html">Education Department</a></li>
            <li><a href="department-environment.html">Environment Department</a></li>
            <li><a href="department-health.html">Health Department</a></li>
            <li><a href="department-livelihood.html">Livelihood Department</a></li>
            <li><a href="department-mental-health.html">Mental Health Department</a></li>
            <li><a href="department-research-development.html">Research and Development</a></li>
            <li><a href="department-science-technology.html">Science and Technology Department</a></li>
            <li><a href="department-social-justice.html">Social Justice Department</a></li>
            <li><a href="department-sports.html">Sports Department</a></li>
            <li><a href="department-spirituality.html">Spirituality Department</a></li>
            <li><a href="department-women-empowerment.html">Women Empowerment Department</a></li>
            <li><a href="department-youth.html">Youth Department</a></li>
          </ul>
        </li>
        <li class="identity-has-submenu">
          <a href="initiatives.html">Our Initiatives</a>
          <ul class="identity-submenu">
            <li><a href="initiative-yashodaya-academy.html">Yashodaya Academy</a></li>
            <li><a href="initiative-sarathi-abhyasika.html">Sarathi Study Center</a></li>
            <li><a href="initiative-udyog-prashikshan-kendra.html">Sankalp Entrepreneurship and Training Center</a></li>
            <li><a href="initiative-sankalp-vruddhashram.html">Sankalp Elder Care Home</a></li>
            <li><a href="initiative-anathalay.html">Sankalp Anathalay</a></li>
            <li><a href="initiative-community-radio-center.html">Community Radio Center</a></li>
            <li><a href="initiative-sankalp-goshala.html">Sankalp Goshala</a></li>
          </ul>
        </li>
        <li class="identity-has-submenu">
          <a href="board-of-directors.html">Our Team</a>
          <ul class="identity-submenu">
            <li><a href="board-of-directors.html">Board of Directors</a></li>
            <li><a href="specialist.html">Specialist</a></li>
            <li><a href="advisors.html">Advisors</a></li>
          </ul>
        </li>
        <li class="identity-has-submenu">
          <a href="volunteers.html">Join Us</a>
          <ul class="identity-submenu">
            <li><a href="volunteers.html">Volunteers</a></li>
            <li><a href="specialist.html">Specialist</a></li>
            <li><a href="current-openings.html">Current Openings</a></li>
          </ul>
        </li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="donate.html" class="menu-donate-inline">Donate Now</a></li>
      </ul>
    </nav>
  `;
});

document.querySelectorAll('.gov-identity .container').forEach((identityRow) => {
  const infoBlock = identityRow.children[1];
  if (infoBlock) {
    infoBlock.innerHTML = `
      <h1>Sankalp Gramin Vikas Sanstha, Rashin</h1>
      <p>Registered under the Societies Registration Act, 1860</p>
    `;
  }
});

document.querySelectorAll('.brand').forEach((brand) => {
  brand.textContent = 'Sankalp Gramin Vikas Sanstha';
});

document.querySelectorAll('.emblem').forEach((emblem) => {
  emblem.innerHTML =
    '<img src="assets/logo/sankalp-logo.png" alt="Sankalp Logo" class="site-logo" onerror="this.style.display=\'none\'; this.parentElement.textContent=\'🛡️\';" />';
});

document.querySelectorAll('#navLinks').forEach((menu) => {
  menu.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="mission-vision.html">Mission and Vision</a></li>
    <li><a href="president-desk.html">President Desk</a></li>
    <li><a href="ceo-secretary-desk.html">CEO and Secretary Desk</a></li>
    <li><a href="why-sankalp.html">Why Sankalp</a></li>
    <li><a href="who-we-are.html">Who We Are</a></li>
    <li><a href="departments.html">Departments</a></li>
    <li><a href="department-agriculture.html">Agriculture Department</a></li>
    <li><a href="department-science-technology.html">Science and Technology Department</a></li>
    <li><a href="department-research-development.html">Research and Development</a></li>
    <li><a href="department-health.html">Health Department</a></li>
    <li><a href="department-mental-health.html">Mental Health Department</a></li>
    <li><a href="department-sports.html">Sports Department</a></li>
    <li><a href="department-youth.html">Youth Department</a></li>
    <li><a href="department-culture.html">Culture Department</a></li>
    <li><a href="department-spirituality.html">Spirituality Department</a></li>
    <li><a href="initiatives.html">Our Initiatives</a></li>
    <li><a href="board-of-directors.html">Our Team - Board of Directors</a></li>
    <li><a href="specialist.html">Our Team - Specialist</a></li>
    <li><a href="advisors.html">Our Team - Advisors</a></li>
    <li><a href="volunteers.html">Join Us - Volunteers</a></li>
    <li><a href="specialist.html">Join Us - Specialist</a></li>
    <li><a href="current-openings.html">Join Us - Current Openings</a></li>
    <li><a href="contact.html">Contact Us</a></li>
    <li class="menu-donate"><a href="donate.html">Donate Now</a></li>
  `;
});

document.querySelectorAll('.gov-identity').forEach((headerBlock) => {
  if (headerBlock.nextElementSibling && headerBlock.nextElementSibling.classList.contains('notice-strip')) {
    return;
  }

  headerBlock.insertAdjacentHTML(
    'afterend',
    `
      <section class="notice-strip" aria-label="Notifications">
        <div class="container notice-strip-inner">
          <strong>Notifications:</strong>
          <div class="notice-marquee">
        </div>
      </section>
    `
  );
});

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

document.querySelectorAll('.identity-has-submenu > a').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    if (window.innerWidth > 980) {
      return;
    }

    const parent = anchor.parentElement;
    if (!parent) {
      return;
    }

    const currentlyOpen = parent.classList.contains('open');
    document.querySelectorAll('.identity-has-submenu.open').forEach((item) => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });

    if (!currentlyOpen) {
      event.preventDefault();
      parent.classList.add('open');
    }
  });
});

window.addEventListener('scroll', () => {
  if (!navbar) {
    return;
  }

  if (window.scrollY > 8) {
    navbar.style.boxShadow = '0 8px 16px rgba(16, 42, 73, 0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

window.googleTranslateElementInit = () => {
  if (!document.getElementById('google_translate_element')) {
    return;
  }

  if (!window.google || !window.google.translate) {
    return;
  }

  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'hi,mr,gu,pa,bn,ta,te,kn,ml,or,as,ur,ne,sd,sa,mai,mni,ks,doi',
      autoDisplay: false,
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    'google_translate_element'
  );
};

if (document.getElementById('google_translate_element')) {
  const translateScript = document.createElement('script');
  translateScript.src =
    'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  translateScript.async = true;
  document.body.appendChild(translateScript);
}

const indianLanguages = [
  ['en', 'English'],
  ['hi', 'Hindi'],
  ['mr', 'Marathi'],
  ['gu', 'Gujarati'],
  ['pa', 'Punjabi'],
  ['bn', 'Bengali'],
  ['ta', 'Tamil'],
  ['te', 'Telugu'],
  ['kn', 'Kannada'],
  ['ml', 'Malayalam'],
  ['or', 'Odia'],
  ['as', 'Assamese'],
  ['ur', 'Urdu'],
  ['ne', 'Nepali'],
  ['sd', 'Sindhi'],
  ['sa', 'Sanskrit'],
  ['mai', 'Maithili'],
  ['mni', 'Meitei'],
  ['ks', 'Kashmiri'],
  ['doi', 'Dogri'],
];

if (!document.getElementById('langFloat')) {
  const langBar = document.createElement('div');
  langBar.className = 'lang-float';
  langBar.id = 'langFloat';

  const options = indianLanguages
    .map(([code, label]) => `<button type="button" class="lang-item" data-lang="${code}">${label}</button>`)
    .join('');

  langBar.innerHTML = `
    <button type="button" class="lang-toggle" id="langToggle">Language</button>
    <div class="lang-menu" id="langMenu">${options}</div>
  `;

  document.body.appendChild(langBar);
}

const langToggle = document.getElementById('langToggle');
const langMenu = document.getElementById('langMenu');

if (langToggle && langMenu) {
  langToggle.addEventListener('click', () => {
    langMenu.classList.toggle('open');
  });

  langMenu.querySelectorAll('.lang-item').forEach((item) => {
    item.addEventListener('click', () => {
      const langCode = item.getAttribute('data-lang') || 'en';
      const translateValue = `/en/${langCode}`;
      document.cookie = `googtrans=${translateValue};path=/`;
      document.cookie = `googtrans=${translateValue};domain=${window.location.hostname};path=/`;
      window.location.reload();
    });
  });
}

const imagePools = {
  education: [
    'assets/sections/pexels-photo-5648222.jpeg',
    'assets/departments/department-mental-health.jpg',
    'assets/departments/department-research-development.jpg',
  ],
  health: [
    'assets/sections/pexels-photo-20515978.jpeg',
    'assets/sections/pexels-photo-7415326.jpeg',
    'assets/departments/department-disaster-response.jpg',
  ],
  mental: [
    'assets/departments/department-mental-health.jpg',
    'assets/sections/pexels-photo-20515978.jpeg',
    'assets/departments/department-research-development.jpg',
  ],
  women: [
    'assets/departments/department-women-empowerment.jpg',
    'assets/sections/pexels-photo-7685716.jpeg',
    'assets/departments/department-social-justice.jpg',
  ],
  agriculture: [
    'assets/sections/pexels-photo-20344348.jpeg',
    'assets/departments/department-agriculture.jpg',
    'assets/sections/pexels-photo-17034795.jpeg',
  ],
  environment: [
    'assets/sections/pexels-photo-20344348.jpeg',
    'assets/sections/pexels-photo-17034795.jpeg',
    'assets/departments/department-agriculture.jpg',
  ],
  disaster: [
    'assets/sections/pexels-photo-20515978.jpeg',
    'assets/departments/department-disaster-response.jpg',
    'assets/sections/pexels-photo-7415326.jpeg',
  ],
  community: [
    'assets/sections/pexels-photo-20515978.jpeg',
    'assets/departments/department-research-development.jpg',
    'assets/departments/department-disaster-response.jpg',
  ],
  maharashtra: [
    'assets/sections/pexels-photo-7415326.jpeg',
    'assets/departments/department-mental-health.jpg',
    'assets/sections/pexels-photo-5648222.jpeg',
    'assets/sections/pexels-photo-20344348.jpeg',
    'assets/departments/department-agriculture.jpg',
    'assets/sections/pexels-photo-17034795.jpeg',
  ],
};

function getImageTopic(text) {
  const value = (text || '').toLowerCase();
  if (value.includes('mental')) return 'mental';
  if (value.includes('education') || value.includes('school') || value.includes('student') || value.includes('academy')) return 'education';
  if (value.includes('health') || value.includes('medical') || value.includes('nutrition')) return 'health';
  if (value.includes('women') || value.includes('empowerment') || value.includes('girl') || value.includes('shg')) return 'women';
  if (value.includes('agriculture') || value.includes('farmer') || value.includes('farming') || value.includes('crop') || value.includes('soil')) return 'agriculture';
  if (value.includes('environment') || value.includes('tree') || value.includes('water') || value.includes('climate') || value.includes('green')) return 'environment';
  if (value.includes('disaster') || value.includes('relief') || value.includes('emergency')) return 'disaster';
  if (value.includes('livelihood') || value.includes('social') || value.includes('justice') || value.includes('child') || value.includes('community') || value.includes('board') || value.includes('president') || value.includes('ceo') || value.includes('team')) return 'community';
  return 'maharashtra';
}

function hashText(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickImageByTopic(topic, contextKey) {
  const safeTopic = imagePools[topic] ? topic : 'maharashtra';
  const pool = imagePools[safeTopic];
  const position = hashText(contextKey || safeTopic) % pool.length;
  return pool[position];
}

const pageHint = `${document.title} ${window.location.pathname}`;

document.querySelectorAll('img[src*="images.pexels.com"]').forEach((image, index) => {
  const context = `${pageHint} ${image.alt || ''} ${image.closest('section')?.textContent || ''}`;
  const topic = getImageTopic(context);
  image.src = pickImageByTopic(topic, `${context}-${index}`);
});

document.querySelectorAll('[style*="images.pexels.com"]').forEach((element, index) => {
  if (
    element.classList.contains('dept-hero') &&
    (window.location.pathname.includes('initiative-') || window.location.pathname.includes('department-'))
  ) {
    return;
  }

  const context = `${pageHint} ${element.className || ''} ${element.textContent || ''}`;
  const topic = getImageTopic(context);
  const nextUrl = pickImageByTopic(topic, `${context}-${index}`);
  element.style.backgroundImage = (element.style.backgroundImage || '').replace(
    /url\((['"]?)(https:\/\/images\.pexels\.com[^)'"]+)\1\)/g,
    `url('${nextUrl}')`
  );
});

const heroSlider = document.getElementById('heroSlider');
const heroSlidesWrap = document.getElementById('heroSlides');
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');
const heroDots = document.getElementById('heroDots');

if (heroSlider && heroSlidesWrap && heroDots) {
  const slides = Array.from(heroSlidesWrap.querySelectorAll('.hero-slide'));
  let currentIndex = 0;
  let autoplayTimer;

  const dotButtons = slides.map((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot';
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => {
      showSlide(index);
      restartAutoplay();
    });
    heroDots.appendChild(dot);
    return dot;
  });

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === currentIndex);
    });
    dotButtons.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function startAutoplay() {
    autoplayTimer = window.setInterval(nextSlide, 4000);
  }

  function restartAutoplay() {
    window.clearInterval(autoplayTimer);
    startAutoplay();
  }

  if (heroPrev) {
    heroPrev.addEventListener('click', () => {
      showSlide(currentIndex - 1);
      restartAutoplay();
    });
  }

  if (heroNext) {
    heroNext.addEventListener('click', () => {
      nextSlide();
      restartAutoplay();
    });
  }

  heroSlider.addEventListener('mouseenter', () => {
    window.clearInterval(autoplayTimer);
  });

  heroSlider.addEventListener('mouseleave', () => {
    startAutoplay();
  });

  showSlide(0);
  startAutoplay();
}

const recentDonorList = document.getElementById('recentDonorList');
const recentDonorEmpty = document.getElementById('recentDonorEmpty');

if (recentDonorList) {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  let donationRecords = [];
  try {
    const raw = window.localStorage.getItem('sankalp_recent_donations');
    const parsed = raw ? JSON.parse(raw) : [];
    donationRecords = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    donationRecords = [];
  }

  const latestRecords = donationRecords.slice(0, 10);
  let donorItemsMarkup = '';

  if (!latestRecords.length) {
   const sampleDonors = [];

    donorItemsMarkup = sampleDonors
      .map((donor) => `<li><strong>${escapeHtml(donor.name)}</strong> donated ₹${Number(donor.amount).toLocaleString('en-IN')} for ${escapeHtml(donor.initiative)}</li>`)
      .join('');

    if (recentDonorEmpty) {
      recentDonorEmpty.style.display = 'none';
    }
  } else {
    if (recentDonorEmpty) {
      recentDonorEmpty.style.display = 'none';
    }

    donorItemsMarkup = latestRecords
      .map((record) => {
        const donorName = record && record.name ? escapeHtml(record.name) : 'Donor';
        const amount = Number(record && record.amount ? record.amount : 0);
        const safeAmount = Number.isFinite(amount) ? amount.toLocaleString('en-IN') : '0';
        const initiative = record && record.initiative ? escapeHtml(record.initiative) : 'General Fund';
        return `<li><strong>${donorName}</strong> donated ₹${safeAmount} for ${initiative}</li>`;
      })
      .join('');
  }

  const donorItems = donorItemsMarkup ? donorItemsMarkup.match(/<li[\s\S]*?<\/li>/g) || [] : [];
  if (!donorItems.length) {
    recentDonorList.innerHTML = '';
    recentDonorList.classList.remove('is-animated');
  } else if (donorItems.length === 1) {
    recentDonorList.innerHTML = donorItems[0].replace('<li>', '<li class="recent-donor-item">');
    recentDonorList.classList.remove('is-animated');
  } else {
    const preparedItems = donorItems.map((itemMarkup) => itemMarkup.replace('<li>', '<li class="recent-donor-item">'));
    recentDonorList.innerHTML = `${preparedItems.join('')}${preparedItems.join('')}`;
    recentDonorList.classList.add('is-animated');
  }
}

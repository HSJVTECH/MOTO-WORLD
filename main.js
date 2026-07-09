/* ============================================================
   BIKER'S HUB — MAIN JAVASCRIPT
   3D Helmet Three.js, GSAP ScrollTrigger, Cart, Filter, Search
   ============================================================ */

'use strict';

/* ============================================================
   PRODUCT DATA
   ============================================================ */
const PRODUCTS = [
  {
    id: 'p1', brand: 'SMK', name: 'SMK Stellar Full-Face Helmet',
    price: '₹4,500', priceRange: null,
    cert: ['ECE 22.06'], img: 'assets/helmet_product.jpg',
    filter: 'ECE 22.06', category: 'helmet'
  },
  {
    id: 'p2', brand: 'AXOR', name: 'Axor Hunter Modular Helmet',
    price: '₹6,200', priceRange: null,
    cert: ['ECE 22.06', 'DOT'], img: 'assets/helmet_product.jpg',
    filter: 'Dual', category: 'helmet'
  },
  {
    id: 'p3', brand: 'RYNOX', name: 'Rynox Optimus Riding Jacket',
    price: null, priceRange: '₹4,500 – ₹7,000',
    cert: [], img: 'assets/jacket_product.jpg',
    filter: 'all', category: 'jacket'
  },
  {
    id: 'p4', brand: 'VEGA', name: 'Vega Bolt Bunny Full-Face',
    price: '₹1,800', priceRange: null,
    cert: ['BIS'], img: 'assets/helmet_product.jpg',
    filter: 'BIS', category: 'helmet'
  },
  {
    id: 'p5', brand: 'STEELBIRD', name: 'Steelbird Robot Helmet',
    price: '₹2,299', priceRange: null,
    cert: ['DOT', 'BIS'], img: 'assets/helmet_product.jpg',
    filter: 'DOT', category: 'helmet'
  },
  {
    id: 'p6', brand: 'STUDDS', name: 'Studds Premium Racing Gloves',
    price: null, priceRange: '₹800 – ₹1,500',
    cert: [], img: 'assets/gloves_product.jpg',
    filter: 'all', category: 'gloves'
  },
  {
    id: 'p7', brand: 'LS2', name: 'LS2 FF900 Valiant Full-Face',
    price: '₹14,500', priceRange: null,
    cert: ['ECE 22.06'], img: 'assets/helmet_product.jpg',
    filter: 'ECE 22.06', category: 'helmet'
  },
  {
    id: 'p8', brand: 'RED FOX', name: 'Red Fox Premium Open Face',
    price: null, priceRange: '₹900 – ₹1,100',
    cert: ['BIS'], img: 'assets/helmet_product.jpg',
    filter: 'BIS', category: 'helmet'
  }
];

const CERT_INFO = {
  'all': {
    title: 'All Safety Standards',
    desc: 'Browse our complete collection of certified safety helmets from top brands including SMK, Axor, LS2, and more.'
  },
  'ECE 22.06': {
    title: 'ECE 22.06 — European Safety Standard',
    desc: 'The latest and most rigorous European helmet standard. Tests for linear and rotational impacts, visor performance, and retention system integrity.'
  },
  'DOT': {
    title: 'DOT — US Federal Motor Vehicle Safety Standard',
    desc: 'The US Department of Transportation standard (FMVSS 218). All helmets must meet penetration, impact absorption, and strap requirements.'
  },
  'BIS': {
    title: 'BIS — Bureau of Indian Standards',
    desc: 'Mandatory Indian Standard (IS 4151). All helmets sold in India must carry the ISI mark. We stock only genuine BIS-certified products.'
  },
  'Dual': {
    title: 'Dual Certified — ECE 22.06 + DOT',
    desc: 'The best of both worlds. These helmets meet both European and US safety standards, ideal for touring riders and enthusiasts who demand maximum protection.'
  }
};

const SEARCH_SUGGESTIONS = [
  'SMK helmet', 'Axor modular', 'LS2 full face', 'Vega helmet',
  'Steelbird helmet', 'riding jacket', 'motorcycle gloves',
  'ECE certified helmet', 'DOT helmet', 'helmet Mumbai'
];

/* ============================================================
   STATE
   ============================================================ */
let cart = [];
let activeFilter = 'all';

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCursor();
  initNavbar();
  initHeroCanvas();
  initParticles();
  initCategoryCards();
  initFilterSection();
  initProducts();
  initShowcaseCanvas();
  initScrollAnimations();
  initCart();
  initSearch();
  initHamburger();
  initHeroParallax();
});

/* ============================================================
   PRELOADER
   ============================================================ */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add('hidden');
    document.body.style.overflow = '';
    initGSAPAnimations();
  }, 2400);
  document.body.style.overflow = 'hidden';
}

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const interactiveSelectors = 'a, button, .category-card, .product-card, .brand-card, .filter-chip, .review-card, .store-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80;
          const y = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        // Close mobile menu
        closeMobileMenu();
      }
    });
  });
}

function updateActiveNavLink() {
  const sections = ['home', 'categories', 'products', 'brands', 'reviews', 'stores'];
  const scrollPos = window.scrollY + 120;
  let currentSection = 'home';

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && scrollPos >= el.offsetTop) {
      currentSection = id;
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   HAMBURGER / MOBILE MENU
   ============================================================ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   HERO THREE.JS CANVAS — Floating 3D Ring + Particles
   ============================================================ */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 8);

  // Ambient + Point lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.3));
  const orangeLight = new THREE.PointLight(0xFF5722, 3, 20);
  orangeLight.position.set(3, 3, 5);
  scene.add(orangeLight);
  const blueLight = new THREE.PointLight(0x2979FF, 1.5, 20);
  blueLight.position.set(-4, -2, 4);
  scene.add(blueLight);

  // Torus rings
  const rings = [];
  const ringParams = [
    { radius: 2.8, tube: 0.04, color: 0xFF5722, rotX: 0.4, rotY: 0.2, speed: 0.003 },
    { radius: 3.6, tube: 0.025, color: 0xFF8A50, rotX: -0.6, rotY: 0.4, speed: -0.002 },
    { radius: 4.4, tube: 0.018, color: 0xFF5722, rotX: 0.3, rotY: -0.5, speed: 0.0015 },
  ];
  ringParams.forEach(p => {
    const geo = new THREE.TorusGeometry(p.radius, p.tube, 16, 120);
    const mat = new THREE.MeshStandardMaterial({
      color: p.color, emissive: p.color, emissiveIntensity: 0.6,
      metalness: 0.8, roughness: 0.2
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = p.rotX;
    mesh.rotation.y = p.rotY;
    mesh.userData.speed = p.speed;
    scene.add(mesh);
    rings.push(mesh);
  });

  // Floating dots / stars
  const dotCount = 180;
  const dotGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(dotCount * 3);
  for (let i = 0; i < dotCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
  }
  dotGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const dotMat = new THREE.PointsMaterial({
    color: 0xFF5722, size: 0.06, transparent: true, opacity: 0.5,
    sizeAttenuation: true
  });
  scene.add(new THREE.Points(dotGeo, dotMat));

  // Icosahedron wireframe
  const icoGeo = new THREE.IcosahedronGeometry(1.2, 1);
  const icoMat = new THREE.MeshStandardMaterial({
    color: 0xFF5722, wireframe: true,
    emissive: 0xFF5722, emissiveIntensity: 0.3
  });
  const ico = new THREE.Mesh(icoGeo, icoMat);
  ico.position.set(-6, 2, -2);
  scene.add(ico);

  let mouseXNorm = 0, mouseYNorm = 0;
  document.addEventListener('mousemove', (e) => {
    mouseXNorm = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseYNorm = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.01;

    rings.forEach(ring => {
      ring.rotation.z += ring.userData.speed;
      ring.rotation.x += ring.userData.speed * 0.5;
    });

    // Camera subtle parallax
    camera.position.x += (mouseXNorm * 0.5 - camera.position.x) * 0.04;
    camera.position.y += (-mouseYNorm * 0.3 - camera.position.y) * 0.04;

    ico.rotation.y += 0.006;
    ico.rotation.x += 0.003;

    orangeLight.position.x = Math.sin(t) * 4;
    orangeLight.position.y = Math.cos(t * 0.7) * 3;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}

/* ============================================================
   SHOWCASE THREE.JS CANVAS — Rotating particles ring
   ============================================================ */
function initShowcaseCanvas() {
  const canvas = document.getElementById('showcase-canvas');
  if (!canvas || !window.THREE) return;

  const wrap = canvas.parentElement;
  const w = wrap.clientWidth, h = wrap.clientHeight || 500;
  canvas.width  = w;
  canvas.height = h;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 50);
  camera.position.z = 6;

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const pl = new THREE.PointLight(0xFF5722, 4, 15);
  pl.position.set(0, 0, 4);
  scene.add(pl);

  // Particle ring
  const count = 300;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const r = 2.5 + (Math.random() - 0.5) * 0.6;
    pos[i*3]   = Math.cos(angle) * r;
    pos[i*3+1] = Math.sin(angle) * r;
    pos[i*3+2] = (Math.random() - 0.5) * 0.4;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xFF5722, size: 0.05,
    transparent: true, opacity: 0.7
  });
  const ring = new THREE.Points(geo, mat);
  scene.add(ring);

  function animate() {
    requestAnimationFrame(animate);
    ring.rotation.z += 0.004;
    renderer.render(scene, camera);
  }
  animate();
}

/* ============================================================
   FLOATING PARTICLES IN HERO
   ============================================================ */
function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  const count = 40;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px; height: ${size}px;
      --dur: ${Math.random() * 8 + 5}s;
      --dx: ${(Math.random() - 0.5) * 80}px;
      --op: ${Math.random() * 0.4 + 0.1};
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(p);
  }
}

/* ============================================================
   CATEGORY CARD 3D TILT
   ============================================================ */
function initCategoryCards() {
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `translateY(-6px) scale(1.01) rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ============================================================
   FILTER SECTION
   ============================================================ */
function initFilterSection() {
  const chips = document.querySelectorAll('.filter-chip');
  const certTitle = document.getElementById('cert-title');
  const certDesc  = document.getElementById('cert-desc');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;

      // Update info card
      const info = CERT_INFO[activeFilter] || CERT_INFO['all'];
      if (certTitle) certTitle.textContent = info.title;
      if (certDesc)  certDesc.textContent  = info.desc;

      // Filter products
      filterProducts(activeFilter);
    });
  });
}

function filterProducts(filter) {
  document.querySelectorAll('.product-card').forEach(card => {
    const cardFilter = card.dataset.filter;
    const show = filter === 'all' ||
                 cardFilter === filter ||
                 (filter === 'Dual' && cardFilter === 'Dual');

    card.style.transition = 'opacity 0.3s, transform 0.3s';
    if (show) {
      card.style.opacity  = '1';
      card.style.transform = '';
      card.style.pointerEvents = '';
    } else {
      card.style.opacity  = '0.2';
      card.style.transform = 'scale(0.96)';
      card.style.pointerEvents = 'none';
    }
  });
}

/* ============================================================
   PRODUCTS GRID
   ============================================================ */
function initProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  PRODUCTS.forEach((p, i) => {
    const card = createProductCard(p, i);
    grid.appendChild(card);
  });
}

function createProductCard(product, index) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.filter = product.filter;
  card.dataset.productId = product.id;
  card.style.animationDelay = (index * 0.08) + 's';

  const certBadges = product.cert.map(c =>
    `<span class="cert-tag">${c}</span>`
  ).join('');

  const priceDisplay = product.priceRange
    ? `<span class="product-price">${product.priceRange}</span>`
    : `<span class="product-price">${product.price}</span>`;

  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${product.img}" alt="${product.name}" loading="lazy" />
      <div class="product-cert">${certBadges}</div>
      <button class="product-wishlist" aria-label="Add to wishlist" data-id="${product.id}">♡</button>
    </div>
    <div class="product-info">
      <div class="product-brand">${product.brand}</div>
      <div class="product-name">${product.name}</div>
      ${priceDisplay}
    </div>
    <div class="product-footer">
      <button class="product-add" data-id="${product.id}">Add to Cart</button>
    </div>
  `;

  // 3D tilt
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `translateY(-8px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });

  // Wishlist toggle
  const wishlistBtn = card.querySelector('.product-wishlist');
  wishlistBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    wishlistBtn.classList.toggle('active');
    wishlistBtn.textContent = wishlistBtn.classList.contains('active') ? '♥' : '♡';
  });

  // Add to cart
  const addBtn = card.querySelector('.product-add');
  addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product);
    animateAddToCart(addBtn);
  });

  return card;
}

function animateAddToCart(btn) {
  const originalText = btn.textContent;
  btn.textContent = '✓ Added!';
  btn.style.background = '#4CAF50';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 1500);
}

/* ============================================================
   CART
   ============================================================ */
function initCart() {
  const cartBtn     = document.getElementById('nav-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartDrawer  = document.getElementById('cart-drawer');
  const cartClose   = document.getElementById('cart-close-btn');
  const shopLink    = document.getElementById('cart-shop-link');

  if (!cartBtn || !cartDrawer) return;

  cartBtn.addEventListener('click',     () => openCart());
  cartClose.addEventListener('click',   () => closeCart());
  cartOverlay.addEventListener('click', () => closeCart());
  if (shopLink) {
    shopLink.addEventListener('click', () => closeCart());
  }
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const badge    = document.getElementById('cart-badge');
  const items    = document.getElementById('cart-items');
  const empty    = document.getElementById('cart-empty');
  const footer   = document.getElementById('cart-footer');
  const totalEl  = document.getElementById('cart-total-val');

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  if (badge) badge.textContent = totalQty;

  if (!items) return;

  if (cart.length === 0) {
    if (empty) empty.style.display = 'block';
    if (footer) footer.style.display = 'none';
    // Clear items except empty state
    items.innerHTML = '';
    items.appendChild(document.getElementById('cart-empty') || createEmptyCartEl());
    return;
  }

  if (empty) empty.style.display = 'none';
  if (footer) footer.style.display = 'block';

  // Rebuild cart items
  const existingRows = items.querySelectorAll('.cart-item-row');
  existingRows.forEach(r => r.remove());

  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price || item.priceRange} × ${item.qty}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove">✕</button>
    `;
    row.querySelector('.cart-item-remove').addEventListener('click', () => {
      removeFromCart(item.id);
    });
    items.insertBefore(row, items.firstChild);
  });

  // Total (simplified)
  if (totalEl) {
    totalEl.textContent = `₹ — Visit Store`;
  }
}

/* ============================================================
   SEARCH
   ============================================================ */
function initSearch() {
  const searchBtn     = document.getElementById('nav-search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose   = document.getElementById('search-close-btn');
  const searchInput   = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchBtn || !searchOverlay) return;

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput && searchInput.focus(), 100);
    showSearchSuggestions();
  });

  searchClose.addEventListener('click', () => closeSearch());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if (q.length > 0) {
        showSearchResults(q);
      } else {
        showSearchSuggestions();
      }
    });
  }

  function closeSearch() {
    searchOverlay.classList.remove('open');
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
  }

  function showSearchSuggestions() {
    if (!searchResults) return;
    searchResults.innerHTML = SEARCH_SUGGESTIONS.map(s =>
      `<div class="search-result-item">
        <span class="result-icon">🔍</span>
        <span>${s}</span>
      </div>`
    ).join('');

    searchResults.querySelectorAll('.search-result-item').forEach((item, idx) => {
      item.addEventListener('click', () => {
        if (searchInput) searchInput.value = SEARCH_SUGGESTIONS[idx];
        showSearchResults(SEARCH_SUGGESTIONS[idx].toLowerCase());
      });
    });
  }

  function showSearchResults(query) {
    if (!searchResults) return;
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.cert.some(c => c.toLowerCase().includes(query))
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-result-item" style="color:var(--text-3);">No products found. Visit our store for more options.</div>`;
      return;
    }

    searchResults.innerHTML = matches.map(p =>
      `<div class="search-result-item" data-id="${p.id}">
        <span class="result-icon">⛑️</span>
        <span><strong>${p.brand}</strong> — ${p.name} <span style="color:var(--accent);margin-left:8px;">${p.price || p.priceRange || ''}</span></span>
      </div>`
    ).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        closeSearch();
        const section = document.getElementById('products');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}

/* ============================================================
   SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
        setTimeout(() => {
          el.classList.add('visible');
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

/* ============================================================
   GSAP ANIMATIONS (runs after preloader)
   ============================================================ */
function initGSAPAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero stats counter
  const stats = document.querySelectorAll('.stat-val');
  stats.forEach(stat => {
    const text = stat.textContent;
    const num  = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (!isNaN(num)) {
      gsap.from(stat, {
        textContent: 0,
        duration: 2, delay: 1.8,
        ease: 'power2.out',
        snap: { textContent: num < 10 ? 0.1 : 1 },
        onUpdate() {
          const val = parseFloat(this.targets()[0].textContent);
          const suffix = text.replace(/[0-9.]/g, '');
          this.targets()[0].textContent = (num < 10 ? val.toFixed(1) : Math.round(val)) + suffix;
        }
      });
    }
  });

  // Brands grid stagger
  gsap.from('.brand-card', {
    scrollTrigger: {
      trigger: '#brands',
      start: 'top bottom',
      once: true
    },
    immediateRender: false,
    opacity: 0, y: 30, stagger: 0.06, duration: 0.5, ease: 'power2.out'
  });

  // Product cards stagger — immediateRender:false prevents opacity:0 being set before trigger fires
  gsap.from('.product-card', {
    scrollTrigger: {
      trigger: '#products',
      start: 'top bottom',
      once: true
    },
    immediateRender: false,
    opacity: 0, y: 40, stagger: 0.08, duration: 0.6, ease: 'power2.out'
  });

  // Feature items
  gsap.from('.feature-item', {
    scrollTrigger: {
      trigger: '.showcase-section',
      start: 'top bottom',
      once: true
    },
    immediateRender: false,
    opacity: 0, x: -30, stagger: 0.15, duration: 0.6, ease: 'power2.out'
  });

  // Parallax on hero helmet
  gsap.to('#hero-image-wrap', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: -60, ease: 'none'
  });
}

/* ============================================================
   HERO PARALLAX (mouse-based on hero image)
   ============================================================ */
function initHeroParallax() {
  const heroImg = document.getElementById('hero-image-wrap');
  if (!heroImg) return;

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    heroImg.style.transform = `translateY(calc(-50% + ${y}px)) translateX(${x * 0.3}px)`;
  });
}

/* ============================================================
   SMOOTH ANCHOR LINKS (all <a href="#...">)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#' || href.length <= 1) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   BRAND CARD HOVER SOUND EFFECT (visual feedback)
   ============================================================ */
document.querySelectorAll('.brand-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 20px rgba(255,87,34,0.15)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});

/* ============================================================
   STORE CARDS — Click ripple effect
   ============================================================ */
document.querySelectorAll('.store-card').forEach(card => {
  card.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position:absolute; width:${size}px; height:${size}px;
      border-radius:50%; background:rgba(255,87,34,0.15);
      top:${e.clientY - rect.top - size/2}px;
      left:${e.clientX - rect.left - size/2}px;
      animation:ripple-anim 0.6s ease-out forwards;
      pointer-events:none;
    `;
    card.style.position = 'relative';
    card.style.overflow = 'hidden';
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Inject ripple keyframe
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple-anim {
    from { transform: scale(0); opacity: 1; }
    to   { transform: scale(2); opacity: 0; }
  }
`;
document.head.appendChild(rippleStyle);

/* ============================================================
   PAGE VISIBILITY — Pause animations when tab hidden
   ============================================================ */
document.addEventListener('visibilitychange', () => {
  const marquee = document.querySelector('.marquee-track');
  if (marquee) {
    marquee.style.animationPlayState = document.hidden ? 'paused' : 'running';
  }
});

console.log(`
  ██████╗ ██╗██╗  ██╗███████╗██████╗ ███████╗
  ██╔══██╗██║██║ ██╔╝██╔════╝██╔══██╗██╔════╝
  ██████╔╝██║█████╔╝ █████╗  ██████╔╝███████╗
  ██╔══██╗██║██╔═██╗ ██╔══╝  ██╔══██╗╚════██║
  ██████╔╝██║██║  ██╗███████╗██║  ██║███████║
  ╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝
  
  🏍️  BIKER'S HUB — Mumbai's #1 Riding Gear Store
  📍 Kandivali West | Kharghar | Grant Road
  📞 099205 77747
`);

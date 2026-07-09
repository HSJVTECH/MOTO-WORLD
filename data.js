/* ============================================================
   BIKER'S HUB — SHARED DATA & CART ENGINE
   data.js — Import on every page
   ============================================================ */

'use strict';

/* ---- FULL PRODUCT CATALOG ---- */
const CATALOG = [
  /* ── HELMETS ── */
  {
    id: 'h1', brand: 'SMK', name: 'SMK Stellar Full-Face',
    price: 4500, display: '₹4,500',
    cert: ['ECE 22.06'], type: 'Full-Face', category: 'helmet',
    img: 'assets/helmet_product.jpg',
    rating: 4.8, reviews: 124,
    desc: 'The SMK Stellar is a premium full-face helmet built for sport touring. With an aerodynamic shell and ECE 22.06 certification, it offers superior protection for the discerning rider.',
    specs: { Shell: 'Thermoplastic Alloy', Weight: '1,380g', Ventilation: '3 intake + 2 exhaust', Visor: 'Anti-scratch, UV400', Liner: 'Removable & washable', Certification: 'ECE 22.06' },
    colors: ['Matte Black', 'Gloss White', 'Carbon Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'h2', brand: 'AXOR', name: 'Axor Hunter Modular',
    price: 6200, display: '₹6,200',
    cert: ['ECE 22.06', 'DOT'], type: 'Modular', category: 'helmet',
    img: 'assets/helmet_product.jpg',
    rating: 4.9, reviews: 87,
    desc: 'The Axor Hunter Modular offers the best of both worlds — full-face protection with the convenience of a flip-up chin bar. Dual certified ECE 22.06 + DOT.',
    specs: { Shell: 'Polycarbonate', Weight: '1,520g', Ventilation: '4 intake + 3 exhaust', Visor: 'Pinlock ready', Liner: 'Premium memory foam', Certification: 'ECE 22.06 + DOT' },
    colors: ['Matte Black', 'Pearl White', 'Gunmetal'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'h3', brand: 'VEGA', name: 'Vega Bolt Bunny Full-Face',
    price: 1800, display: '₹1,800',
    cert: ['BIS'], type: 'Full-Face', category: 'helmet',
    img: 'assets/helmet_product.jpg',
    rating: 4.3, reviews: 312,
    desc: 'An affordable full-face helmet with BIS certification. Perfect for daily commuters seeking safety on a budget. Lightweight construction with adequate ventilation.',
    specs: { Shell: 'Polycarbonate', Weight: '1,100g', Ventilation: '2 intake + 1 exhaust', Visor: 'Clear, UV protected', Liner: 'Washable', Certification: 'BIS' },
    colors: ['Black', 'Red', 'Blue', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'h4', brand: 'STEELBIRD', name: 'Steelbird Robot SBH-11',
    price: 2299, display: '₹2,299',
    cert: ['DOT', 'BIS'], type: 'Full-Face', category: 'helmet',
    img: 'assets/helmet_product.jpg',
    rating: 4.5, reviews: 198,
    desc: 'Steelbird\'s Robot series is one of India\'s most popular helmets. Dual certified with DOT and BIS, it offers exceptional value with a sleek robotic design.',
    specs: { Shell: 'Polycarbonate', Weight: '1,200g', Ventilation: '2 intake + 2 exhaust', Visor: 'Anti-scratch', Liner: 'Comfort padding', Certification: 'DOT + BIS' },
    colors: ['Matte Black', 'White', 'Yellow', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'h5', brand: 'LS2', name: 'LS2 FF900 Valiant II',
    price: 14500, display: '₹14,500',
    cert: ['ECE 22.06'], type: 'Full-Face', category: 'helmet',
    img: 'assets/helmet_product.jpg',
    rating: 4.9, reviews: 56,
    desc: 'The LS2 FF900 Valiant II is a premium flip-up touring helmet with Kinetic Polymer Alloy shell and emergency release system. Top-of-the-line protection with luxury comfort.',
    specs: { Shell: 'KPA (Kinetic Polymer Alloy)', Weight: '1,480g', Ventilation: 'Full aerodynamic system', Visor: 'Pinlock MaxVision ready', Liner: 'Coolmax + leather', Certification: 'ECE 22.06' },
    colors: ['Gloss Black', 'Matt Titanium', 'Pearl White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'h6', brand: 'RED FOX', name: 'Red Fox Open Face Classic',
    price: 950, display: '₹950',
    cert: ['BIS'], type: 'Open-Face', category: 'helmet',
    img: 'assets/helmet_product.jpg',
    rating: 4.1, reviews: 445,
    desc: 'A classic open-face helmet for city riders. Affordable, BIS certified, and comfortable for daily use. Available in multiple vibrant colors.',
    specs: { Shell: 'ABS Plastic', Weight: '900g', Ventilation: 'Open design', Visor: 'Half visor', Liner: 'Comfort foam', Certification: 'BIS' },
    colors: ['Black', 'Red', 'Blue', 'Green', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'h7', brand: 'AXXIS', name: 'Axxis Draken Carbon',
    price: 8900, display: '₹8,900',
    cert: ['ECE 22.06'], type: 'Full-Face', category: 'helmet',
    img: 'assets/helmet_product.jpg',
    rating: 4.7, reviews: 43,
    desc: 'The Axxis Draken features a genuine carbon fiber shell for ultra-light weight without compromising safety. ECE 22.06 certified for the performance-focused rider.',
    specs: { Shell: 'Carbon Fibre', Weight: '1,250g', Ventilation: '4 intake + 2 exhaust', Visor: 'Anti-fog, Pinlock', Liner: 'Full removable', Certification: 'ECE 22.06' },
    colors: ['Carbon Black', 'Carbon Red'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'h8', brand: 'STUDDS', name: 'Studds Thunder D5 Decor',
    price: 1299, display: '₹1,299',
    cert: ['BIS'], type: 'Full-Face', category: 'helmet',
    img: 'assets/helmet_product.jpg',
    rating: 4.2, reviews: 521,
    desc: 'Studds Thunder D5 is a graphic full-face helmet with bold designs and BIS certification. Great for riders who want style and safety at an accessible price.',
    specs: { Shell: 'Polycarbonate', Weight: '1,050g', Ventilation: '2 intake vents', Visor: 'UV protected', Liner: 'Washable', Certification: 'BIS' },
    colors: ['Black/Orange', 'Black/Blue', 'Black/Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },

  /* ── JACKETS ── */
  {
    id: 'j1', brand: 'RYNOX', name: 'Rynox Optimus Pro Jacket',
    price: 6500, display: '₹6,500',
    cert: [], type: 'Textile', category: 'jacket',
    img: 'assets/jacket_product.jpg',
    rating: 4.8, reviews: 93,
    desc: 'The Rynox Optimus Pro is a premium textile touring jacket with CE Level 2 armor, waterproof membrane, and reflective panels for all-day comfort and safety.',
    specs: { Material: '600D Cordura', Armor: 'CE Level 2 Shoulder + Elbow + Back', Waterproof: 'Yes (removable liner)', Ventilation: 'Full zip vents', Sizes: 'S–4XL', Reflective: 'Yes' },
    colors: ['Black', 'Hi-Viz Yellow', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']
  },
  {
    id: 'j2', brand: 'RAIDA', name: 'Raida TourPro Leather Jacket',
    price: 4800, display: '₹4,800',
    cert: [], type: 'Leather', category: 'jacket',
    img: 'assets/jacket_product.jpg',
    rating: 4.6, reviews: 71,
    desc: 'Classic genuine leather riding jacket from Raida with pre-curved sleeves and CE armor pockets. Timeless style meets serious protection for the urban rider.',
    specs: { Material: 'Genuine Cowhide Leather', Armor: 'CE Level 1 (upgradeable)', Waterproof: 'No (leather)', Ventilation: 'Perforated panels', Sizes: 'S–3XL', Reflective: 'Minimal' },
    colors: ['Black', 'Brown'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
  },
  {
    id: 'j3', brand: 'RYNOX', name: 'Rynox Tornado Pro Mesh',
    price: 3900, display: '₹3,900',
    cert: [], type: 'Mesh', category: 'jacket',
    img: 'assets/jacket_product.jpg',
    rating: 4.5, reviews: 128,
    desc: 'Purpose-built for India\'s hot climate, the Rynox Tornado Pro is a full-mesh jacket with CE armor and maximum airflow. The ideal summer riding jacket.',
    specs: { Material: 'Polyester Mesh', Armor: 'CE Level 1 Shoulder + Elbow', Waterproof: 'No', Ventilation: 'Maximum (mesh)', Sizes: 'S–4XL', Reflective: 'Yes' },
    colors: ['Black', 'Orange/Black', 'Blue/Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']
  },
  {
    id: 'j4', brand: 'SCALA', name: 'Scala Classic Riding Jacket',
    price: 5200, display: '₹5,200',
    cert: [], type: 'Textile', category: 'jacket',
    img: 'assets/jacket_product.jpg',
    rating: 4.4, reviews: 52,
    desc: 'Scala\'s Classic riding jacket blends everyday wearability with riding protection. CE approved armor, stretch panels, and a clean modern look.',
    specs: { Material: 'Mixed textile', Armor: 'CE Level 1', Waterproof: 'Water resistant', Ventilation: 'Side vents', Sizes: 'S–3XL', Reflective: 'Yes' },
    colors: ['Black', 'Navy Blue'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
  },

  /* ── GLOVES ── */
  {
    id: 'g1', brand: 'STUDDS', name: 'Studds Racing Pro Gloves',
    price: 950, display: '₹950',
    cert: [], type: 'Racing', category: 'gloves',
    img: 'assets/gloves_product.jpg',
    rating: 4.4, reviews: 287,
    desc: 'Full-grain leather racing gloves with carbon fiber knuckle protection, palm sliders, and Velcro wrist closure. Great grip and feel for spirited riding.',
    specs: { Material: 'Full Grain Leather', Knuckle: 'Carbon Fiber', Palm: 'Dual-density slider', Wrist: 'Velcro + stretch', Season: 'Summer/Sport' },
    colors: ['Black/Orange', 'Black/Blue', 'Black/Red'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'g2', brand: 'AXOR', name: 'Axor Cruz Touring Gloves',
    price: 1400, display: '₹1,400',
    cert: [], type: 'Touring', category: 'gloves',
    img: 'assets/gloves_product.jpg',
    rating: 4.6, reviews: 164,
    desc: 'Premium touring gloves with waterproof liner, heated grip compatibility, and reflective panels. Built for long-distance riders who need comfort and safety.',
    specs: { Material: 'Goatskin leather', Knuckle: 'Hard TPU', Palm: 'Clarino palm', Wrist: 'Long cuff', Season: 'All season' },
    colors: ['Black', 'Brown'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'g3', brand: 'VEGA', name: 'Vega Bolt Mesh Gloves',
    price: 550, display: '₹550',
    cert: [], type: 'Summer', category: 'gloves',
    img: 'assets/gloves_product.jpg',
    rating: 4.2, reviews: 398,
    desc: 'Affordable mesh gloves for daily commuters. Lightweight, breathable, and equipped with basic knuckle protection. Great value for everyday riding.',
    specs: { Material: 'Mesh + synthetic leather', Knuckle: 'Hard plastic', Palm: 'Reinforced', Wrist: 'Elastic + Velcro', Season: 'Summer' },
    colors: ['Black', 'Blue', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'g4', brand: 'RYNOX', name: 'Rynox Air GT Gloves',
    price: 1800, display: '₹1,800',
    cert: [], type: 'Touring', category: 'gloves',
    img: 'assets/gloves_product.jpg',
    rating: 4.7, reviews: 112,
    desc: 'Rynox\'s Air GT gloves are the ultimate summer touring glove with full CE certification, 4-way stretch mesh, and ergonomic fit. Top pick for adventure riders.',
    specs: { Material: 'Kangaroo leather + mesh', Knuckle: 'D3O Level 1', Palm: 'Clarino + gel', Wrist: 'Long cuff with buckle', Season: 'Summer/Touring' },
    colors: ['Black', 'Grey/Black'],
    sizes: ['S', 'M', 'L', 'XL']
  }
];

/* ============================================================
   CART ENGINE — localStorage persistence
   ============================================================ */
const CART_KEY = 'bikers_hub_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateAllCartBadges();
}

function addToCart(productId, size = 'M', color = null, qty = 1) {
  const cart = getCart();
  const product = CATALOG.find(p => p.id === productId);
  if (!product) return;

  const key = `${productId}-${size}`;
  const existing = cart.find(i => i.key === key);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      key,
      id: productId,
      brand: product.brand,
      name: product.name,
      price: product.price,
      display: product.display,
      img: product.img,
      size,
      color: color || product.colors[0],
      qty
    });
  }
  saveCart(cart);
  return cart;
}

function removeFromCart(key) {
  const cart = getCart().filter(i => i.key !== key);
  saveCart(cart);
  return cart;
}

function updateQty(key, qty) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (item) {
    if (qty < 1) {
      return removeFromCart(key);
    }
    item.qty = qty;
    saveCart(cart);
  }
  return getCart();
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateAllCartBadges();
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateAllCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function getProductById(id) {
  return CATALOG.find(p => p.id === id) || null;
}

function getByCategory(cat) {
  return CATALOG.filter(p => p.category === cat);
}

/* ============================================================
   SHARED NAVBAR HTML (injected by each page)
   ============================================================ */
function renderNavbar(activePage = '') {
  const pages = [
    { href: 'index.html',   label: 'Home',       key: 'home' },
    { href: 'helmets.html', label: 'Helmets',     key: 'helmets' },
    { href: 'jackets.html', label: 'Jackets',     key: 'jackets' },
    { href: 'gloves.html',  label: 'Gloves',      key: 'gloves' },
    { href: '#stores',      label: 'Stores',      key: 'stores' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="nav-link${activePage === p.key ? ' active' : ''}">${p.label}</a></li>`
  ).join('');

  const count = getCartCount();

  return `
  <nav id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <span class="logo-icon">⬡</span>
        <div class="logo-text">
          <span class="logo-main">BIKER'S HUB</span>
          <span class="logo-sub">MUMBAI</span>
        </div>
      </a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-actions">
        <a href="cart.html" class="nav-cart-btn" aria-label="Cart" id="nav-cart-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span class="cart-badge" style="display:${count > 0 ? 'flex' : 'none'}">${count}</span>
        </a>
        <a href="cart.html" class="nav-cta" id="nav-cta-btn">Cart${count > 0 ? ' (' + count + ')' : ''}</a>
        <button class="hamburger" id="hamburger-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <ul>
      ${pages.map(p => `<li><a href="${p.href}" class="mobile-link">${p.label}</a></li>`).join('')}
      <li><a href="cart.html" class="mobile-link">🛒 Cart (${count})</a></li>
    </ul>
  </div>`;
}

/* ---- Inject navbar & init common behaviors ---- */
function initPage(activePage = '') {
  // Inject navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = renderNavbar(activePage);

  updateAllCartBadges();

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburger
  document.addEventListener('click', e => {
    const btn = e.target.closest('#hamburger-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.classList.toggle('open');
      menu.classList.toggle('open');
    }
  });

  // Custom cursor
  initCursor();
}

function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.cssText = `left:${mx}px;top:${my}px`; });
  (function move() { rx += (mx-rx)*0.12; ry += (my-ry)*0.12; ring.style.cssText = `left:${rx}px;top:${ry}px`; requestAnimationFrame(move); })();
  document.addEventListener('mouseover', e => { if (e.target.closest('a,button,.card,.product-card,.category-card')) document.body.classList.add('cursor-hover'); });
  document.addEventListener('mouseout',  e => { if (e.target.closest('a,button,.card,.product-card,.category-card')) document.body.classList.remove('cursor-hover'); });
}

/* Expose everything globally */
window.BH = {
  CATALOG, getCart, saveCart, addToCart, removeFromCart,
  updateQty, clearCart, getCartTotal, getCartCount,
  getProductById, getByCategory, renderNavbar, initPage,
  updateAllCartBadges
};

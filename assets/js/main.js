/**
* Template Name: Company
* Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  const compatibilityStyles = document.createElement('style');
  compatibilityStyles.textContent = `
    .btn-premium-outline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 48px;
      padding: 13px 22px;
      border-radius: 4px;
      font-weight: 800;
      text-decoration: none;
      border: 1px solid rgba(255, 253, 248, 0.45);
      color: #fffdf8 !important;
      background: rgba(255, 255, 255, 0.08);
    }
    .btn-premium-outline:hover { color: #fff !important; border-color: #fffdf8; background: rgba(255,255,255,0.16); }
    .inner-hero .premium-card p { color: #5b6862 !important; }
    .inner-hero .premium-card strong { color: #13221d !important; }
    .feature-list { display: flex; align-items: center; gap: 10px; }
    .feature-list i { color: #0f7f5c; flex: 0 0 auto; }
    .client-card img { max-height: 110px; object-fit: contain; margin-bottom: 18px; }
    @media (max-width: 575px) { .btn-premium-outline { width: 100%; } }
  `;
  document.head.appendChild(compatibilityStyles);

  const originalSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, value) {
    if (this.tagName === 'SCRIPT' && String(name).toLowerCase() === 'crossorigin' && value === '*') return;
    return originalSetAttribute.call(this, name, value);
  };

  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectBody || !selectHeader) return;
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
  toggleScrolled();

  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    if (!mobileNavToggleBtn) return;
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      if (this.parentNode.nextElementSibling) {
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      }
      e.stopImmediatePropagation();
    });
  });

  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);
  toggleScrollTop();

  function aosInit() {
    if (typeof AOS === 'undefined') return;
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  }
  aosInit();
  document.addEventListener('DOMContentLoaded', aosInit);
  window.addEventListener('load', aosInit);

  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    const carousel = carouselIndicator.closest('.carousel');
    if (!carousel) return;
    carousel.querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      carouselIndicator.innerHTML += index === 0 ? `<li data-bs-target="#${carousel.id}" data-bs-slide-to="${index}" class="active"></li>` : `<li data-bs-target="#${carousel.id}" data-bs-slide-to="${index}"></li>`;
    });
  });

  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

  if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
      const isotopeContainer = isotopeItem.querySelector('.isotope-container');
      if (!isotopeContainer) return;

      let initIsotope;
      imagesLoaded(isotopeContainer, function() {
        initIsotope = new Isotope(isotopeContainer, { itemSelector: '.isotope-item', layoutMode: layout, filter: filter, sortBy: sort });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          const activeFilter = isotopeItem.querySelector('.isotope-filters .filter-active');
          if (activeFilter) activeFilter.classList.remove('filter-active');
          this.classList.add('filter-active');
          if (initIsotope) initIsotope.arrange({ filter: this.getAttribute('data-filter') });
          aosInit();
        }, false);
      });
    });
  }

  if (typeof Waypoint !== 'undefined') {
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      new Waypoint({ element: item, offset: '80%', handler: function() {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => { el.style.width = el.getAttribute('aria-valuenow') + '%'; });
      }});
    });
  }

  function initSwiper() {
    if (typeof Swiper === 'undefined') return;
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      const configElement = swiperElement.querySelector(".swiper-config");
      if (!configElement) return;
      let config = JSON.parse(configElement.innerHTML.trim());
      if (swiperElement.classList.contains("swiper-tab") && typeof initSwiperWithCustomPagination === 'function') {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  initSwiper();
  window.addEventListener("load", initSwiper);

})();

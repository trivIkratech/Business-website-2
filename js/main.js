/**
 * THE VERDANT TERRACES - MAIN APPLICATION CONTROLLER
 * Sticky Header, Scroll Spy, Configuration Switcher, Floor Plan Modal,
 * FAQ Accordion, Back-to-Top, Dynamic Data Hydration
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    hydrateProjectData();
    initStickyHeader();
    initScrollSpy();
    initMobileNavigation();
    initConfigurationSelector();
    initPlanViewer();
    initLocationFilter();
    initFaqAccordion();
    initBackToTop();
    initScrollReveal();
    initModals();
  });

  /**
   * 1. Hydrate dynamic details from PROJECT_DATA
   */
  function hydrateProjectData() {
    const data = window.PROJECT_DATA;
    if (!data) return;

    // Contact telephone links
    const phoneLinks = document.querySelectorAll('.dynamic-phone-link');
    phoneLinks.forEach(link => {
      link.href = `tel:${data.contact.phoneTel}`;
      const textSpan = link.querySelector('.phone-text');
      if (textSpan) textSpan.textContent = data.contact.phoneDisplay;
    });

    // WhatsApp buttons & links
    const whatsappLinks = document.querySelectorAll('.dynamic-whatsapp-link');
    const waText = encodeURIComponent(data.contact.whatsappDefaultText);
    const waUrl = `https://wa.me/${data.contact.whatsappNumber}?text=${waText}`;
    whatsappLinks.forEach(link => {
      link.href = waUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });

    // Brochure download links
    const brochureBtns = document.querySelectorAll('.dynamic-brochure-link');
    brochureBtns.forEach(btn => {
      btn.href = data.brand.brochureUrl;
      btn.download = "Aurelia-Riverfront-Residences-Brochure.pdf";
    });

    // Email links
    const emailLinks = document.querySelectorAll('.dynamic-email-link');
    emailLinks.forEach(link => {
      link.href = `mailto:${data.contact.email}`;
      link.textContent = data.contact.email;
    });
  }

  /**
   * 2. Sticky Header with Scroll Effect
   */
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /**
   * 3. Scroll Spy for Active Navigation Highlighting
   */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link-item, .mobile-nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }

  /**
   * 4. Mobile Navigation Drawer
   */
  function initMobileNavigation() {
    const hamburger = document.getElementById('hamburgerBtn');
    const drawer = document.getElementById('mobileNavDrawer');
    const closeBtn = document.getElementById('mobileNavClose');
    const overlay = document.getElementById('drawerOverlay');
    const drawerLinks = document.querySelectorAll('.mobile-nav-link');

    if (!hamburger || !drawer) return;

    function openDrawer() {
      drawer.classList.add('open');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      hamburger.setAttribute('aria-expanded', 'true');
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  /**
   * 5. Configuration Selector Tabs
   */
  function initConfigurationSelector() {
    const tabBtns = document.querySelectorAll('.config-tab-btn');
    const configCards = document.querySelectorAll('.config-card');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        configCards.forEach(card => {
          if (card.id === targetId) {
            card.classList.add('active');
          } else {
            card.classList.remove('active');
          }
        });
      });
    });

    // Handle "Enquire for this Unit" button within configuration cards
    const enquireUnitBtns = document.querySelectorAll('.btn-enquire-unit');
    enquireUnitBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const unitType = btn.getAttribute('data-unit') || '';
        const formConfigSelect = document.querySelector('#mainEnquiryForm select[name="configuration"]');
        if (formConfigSelect && unitType) {
          formConfigSelect.value = unitType;
        }
        const enquirySection = document.getElementById('enquiry');
        if (enquirySection) {
          enquirySection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /**
   * 6. Master Plan and Floor Plan Viewer
   */
  function initPlanViewer() {
    const planBtns = document.querySelectorAll('.plan-toggle-btn');
    const planImg = document.getElementById('activePlanImg');
    const planTitle = document.getElementById('activePlanTitle');
    const planDesc = document.getElementById('activePlanDesc');
    const zoomBtn = document.getElementById('planZoomTrigger');
    const zoomDialog = document.getElementById('planZoomDialog');
    const zoomImg = document.getElementById('planZoomImg');
    const zoomTitle = document.getElementById('planZoomTitle');

    if (!planBtns.length || !planImg) return;

    planBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        planBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const src = btn.getAttribute('data-src');
        const title = btn.getAttribute('data-title');
        const desc = btn.getAttribute('data-desc');

        planImg.style.opacity = '0';
        setTimeout(() => {
          planImg.src = src;
          planImg.alt = title;
          if (planTitle) planTitle.textContent = title;
          if (planDesc) planDesc.textContent = desc;
          planImg.style.opacity = '1';
        }, 150);
      });
    });

    if (zoomBtn && zoomDialog && zoomImg) {
      zoomBtn.addEventListener('click', () => {
        const activeBtn = document.querySelector('.plan-toggle-btn.active');
        const src = activeBtn ? activeBtn.getAttribute('data-src') : planImg.src;
        const title = activeBtn ? activeBtn.getAttribute('data-title') : 'Floor Plan Preview';

        zoomImg.src = src;
        zoomImg.alt = title;
        if (zoomTitle) zoomTitle.textContent = title;

        if (typeof zoomDialog.showModal === 'function') {
          zoomDialog.showModal();
        } else {
          zoomDialog.setAttribute('open', '');
        }
      });
    }
  }

  /**
   * 7. Location Category Filter
   */
  function initLocationFilter() {
    const filterBtns = document.querySelectorAll('.loc-filter-btn');
    const cards = document.querySelectorAll('.loc-destination-card');
    const countBadge = document.getElementById('locItemsCount');

    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-loc-filter') || 'all';
        let visibleCount = 0;

        cards.forEach(card => {
          const cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (countBadge) {
          countBadge.textContent = `${visibleCount} Destination${visibleCount === 1 ? '' : 's'}`;
        }
      });
    });
  }

  /**
   * 8. FAQ Accordion
   */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      const panel = item.querySelector('.faq-answer-panel');

      if (!btn || !panel) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            const otherPanel = otherItem.querySelector('.faq-answer-panel');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherPanel) otherPanel.style.maxHeight = '0px';
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          panel.style.maxHeight = '0px';
        } else {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  /**
   * 8. Back to Top Button
   */
  function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * 9. Scroll Reveal Animations (IntersectionObserver)
   */
  function initScrollReveal() {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const reveals = document.querySelectorAll('.reveal-on-scroll');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  /**
   * 10. Native <dialog> Modal Controllers
   */
  function initModals() {
    // Generic Dialog Closes
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => {
      // Close buttons inside dialog
      const closeBtns = dialog.querySelectorAll('.modal-close-trigger');
      closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (typeof dialog.close === 'function') {
            dialog.close();
          } else {
            dialog.removeAttribute('open');
          }
        });
      });

      // Light dismiss (click on backdrop outside dialog content)
      dialog.addEventListener('click', (e) => {
        const inner = dialog.querySelector('.modal-dialog-inner') || dialog.querySelector('.lightbox-content-box');
        if (inner && !inner.contains(e.target)) {
          if (typeof dialog.close === 'function') {
            dialog.close();
          } else {
            dialog.removeAttribute('open');
          }
        }
      });
    });

    // Brochure Modal Triggers
    const brochureModal = document.getElementById('brochureDialog');
    const openBrochureTriggers = document.querySelectorAll('.trigger-brochure-modal');
    if (brochureModal && openBrochureTriggers.length) {
      openBrochureTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (typeof brochureModal.showModal === 'function') {
            brochureModal.showModal();
          } else {
            brochureModal.setAttribute('open', '');
          }
        });
      });
    }

    // Privacy Policy Modal Triggers
    const privacyModal = document.getElementById('privacyDialog');
    const openPrivacyTriggers = document.querySelectorAll('.trigger-privacy-modal');
    if (privacyModal && openPrivacyTriggers.length) {
      openPrivacyTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (typeof privacyModal.showModal === 'function') {
            privacyModal.showModal();
          } else {
            privacyModal.setAttribute('open', '');
          }
        });
      });
    }
  }

})();


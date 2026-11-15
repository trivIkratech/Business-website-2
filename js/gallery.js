/**
 * THE VERDANT TERRACES - GALLERY & LIGHTBOX MODULE
 * Filterable asymmetric gallery with accessible native <dialog> lightbox
 */

(function () {
  'use strict';

  let currentCategory = 'all';
  let currentIndex = 0;
  let activeItems = [];

  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryGrid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxClose = document.getElementById('lightboxClose');

  function initGallery() {
    if (!galleryGrid) return;

    // Attach click events on filter buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter') || 'all';
        applyFilter(filter);
      });
    });

    // Attach click handlers on gallery items
    refreshGalleryItems();

    // Lightbox navigation controls
    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
      });
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        closeLightbox();
      });
    }

    // Lightbox light dismiss (click outside inner content box)
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        const contentBox = lightbox.querySelector('.lightbox-content-box');
        if (contentBox && !contentBox.contains(e.target)) {
          closeLightbox();
        }
      });

      // Keyboard navigation
      lightbox.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
          navigateLightbox(1);
        } else if (e.key === 'Escape') {
          closeLightbox();
        }
      });
    }
  }

  function applyFilter(category) {
    currentCategory = category;
    const items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      if (category === 'all' || itemCat === category) {
        item.style.display = 'block';
        item.classList.add('is-revealed');
      } else {
        item.style.display = 'none';
      }
    });
    refreshGalleryItems();
  }

  function refreshGalleryItems() {
    const allItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
    activeItems = allItems.filter(item => item.style.display !== 'none');

    activeItems.forEach((item, index) => {
      item.onclick = () => {
        openLightbox(index);
      };
      // Keyboard enter/space to open
      item.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      };
    });
  }

  function openLightbox(index) {
    if (!lightbox || activeItems.length === 0) return;
    currentIndex = (index >= 0 && index < activeItems.length) ? index : 0;
    updateLightboxContent();

    if (typeof lightbox.showModal === 'function') {
      lightbox.showModal();
    } else {
      lightbox.setAttribute('open', '');
    }
  }

  function closeLightbox() {
    if (!lightbox) return;
    if (typeof lightbox.close === 'function') {
      lightbox.close();
    } else {
      lightbox.removeAttribute('open');
    }
  }

  function navigateLightbox(direction) {
    if (activeItems.length <= 1) return;
    currentIndex = (currentIndex + direction + activeItems.length) % activeItems.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = activeItems[currentIndex];
    if (!item) return;

    const img = item.querySelector('img');
    const title = item.getAttribute('data-title') || (img ? img.alt : '');
    const desc = item.getAttribute('data-desc') || '';
    const src = item.getAttribute('data-full') || (img ? img.src : '');

    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = title;
    }

    if (lightboxCaption) {
      lightboxCaption.innerHTML = `<strong>${title}</strong>${desc ? `<span class="d-block text-sage small mt-1">${desc}</span>` : ''}`;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${activeItems.length}`;
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();


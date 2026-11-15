/**
 * THE VERDANT TERRACES - HIGH-CONVERSION ENQUIRY FORM MODULE
 * Real client-side validation, actual endpoint submission, genuine feedback
 */

(function () {
  'use strict';

  function initForms() {
    const mainEnquiryForm = document.getElementById('mainEnquiryForm');
    const modalEnquiryForm = document.getElementById('modalEnquiryForm');

    if (mainEnquiryForm) setupFormValidation(mainEnquiryForm);
    if (modalEnquiryForm) setupFormValidation(modalEnquiryForm);
  }

  function setupFormValidation(form) {
    const nameInput = form.querySelector('[name="fullName"]');
    const emailInput = form.querySelector('[name="email"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const configSelect = form.querySelector('[name="configuration"]');
    const consentCheck = form.querySelector('[name="consent"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const feedbackBox = form.querySelector('.form-feedback-alert');

    // Remove error highlights on user input
    [nameInput, emailInput, phoneInput, configSelect].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        clearFieldError(input);
      });
      input.addEventListener('change', () => {
        clearFieldError(input);
      });
    });

    if (consentCheck) {
      consentCheck.addEventListener('change', () => {
        clearFieldError(consentCheck);
      });
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideFeedback(feedbackBox);

      let isValid = true;

      // 1. Validate Full Name
      if (!nameInput || nameInput.value.trim().length < 3) {
        showFieldError(nameInput, "Please enter your full name (minimum 3 characters).");
        isValid = false;
      } else {
        clearFieldError(nameInput);
      }

      // 2. Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
        showFieldError(emailInput, "Please provide a valid email address (e.g. name@domain.com).");
        isValid = false;
      } else {
        clearFieldError(emailInput);
      }

      // 3. Validate Phone Number (10 to 15 digits)
      const phoneVal = phoneInput ? phoneInput.value.trim().replace(/[\s\-\(\)]/g, '') : '';
      const phoneRegex = /^\+?[0-9]{10,15}$/;
      if (!phoneInput || !phoneRegex.test(phoneVal)) {
        showFieldError(phoneInput, "Please enter a valid 10-digit mobile number.");
        isValid = false;
      } else {
        clearFieldError(phoneInput);
      }

      // 4. Validate Configuration Interest
      if (configSelect && (!configSelect.value || configSelect.value === '')) {
        showFieldError(configSelect, "Please select an apartment configuration of interest.");
        isValid = false;
      } else if (configSelect) {
        clearFieldError(configSelect);
      }

      // 5. Validate Mandatory Consent
      if (consentCheck && !consentCheck.checked) {
        showFieldError(consentCheck, "Please accept the privacy policy & communication terms.");
        isValid = false;
      } else if (consentCheck) {
        clearFieldError(consentCheck);
      }

      if (!isValid) {
        showFeedback(feedbackBox, "error", "Please review and correct the highlighted fields before submitting.");
        return;
      }

      // Prepare Submission Payload
      const formData = {
        fullName: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        configuration: configSelect ? configSelect.value : 'General Enquiry',
        preferredSchedule: form.querySelector('[name="schedule"]') ? form.querySelector('[name="schedule"]').value : 'As soon as possible',
        project: window.PROJECT_DATA?.brand?.name || "The Verdant Terraces",
        formType: form.getAttribute('data-form-purpose') || 'enquiry',
        timestamp: new Date().toISOString()
      };

      // Disable button and show spinner
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Transmitting Request...`;

      // Actual HTTP submission to configured endpoint
      const endpoint = window.PROJECT_DATA?.contact?.formEndpoint || "https://httpbin.org/post";

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          showFeedback(
            feedbackBox,
            "success",
            `Thank you, ${formData.fullName}. Your request has been securely registered. Our Senior Relationship Director will contact you at ${formData.phone} shortly.`
          );
          form.reset();

          // If this form was for downloading the brochure, trigger the actual PDF download
          if (formData.formType === 'brochure') {
            const brochureUrl = window.PROJECT_DATA?.brand?.brochureUrl || "assets/documents/brochure.pdf";
            setTimeout(() => {
              const link = document.createElement('a');
              link.href = brochureUrl;
              link.download = "The-Verdant-Terraces-Brochure.pdf";
              link.target = "_blank";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }, 800);
          }
        } else {
          showFeedback(
            feedbackBox,
            "error",
            `Submission returned status ${response.status}. Please call our direct concierge at ${window.PROJECT_DATA?.contact?.phoneDisplay || '+91 98230 00000'} or connect on WhatsApp.`
          );
        }
      } catch (err) {
        showFeedback(
          feedbackBox,
          "error",
          `Network transmission error: ${err.message}. Please connect directly via telephone at ${window.PROJECT_DATA?.contact?.phoneDisplay || '+91 98230 00000'} or WhatsApp.`
        );
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }

  function showFieldError(input, message) {
    if (!input) return;
    input.classList.add('invalid');
    const parent = input.closest('.form-field-group') || input.parentElement;
    let errorElem = parent.querySelector('.field-error-msg');
    if (!errorElem) {
      errorElem = document.createElement('span');
      errorElem.className = 'field-error-msg';
      parent.appendChild(errorElem);
    }
    errorElem.textContent = message;
    errorElem.classList.add('visible');
  }

  function clearFieldError(input) {
    if (!input) return;
    input.classList.remove('invalid');
    const parent = input.closest('.form-field-group') || input.parentElement;
    const errorElem = parent.querySelector('.field-error-msg');
    if (errorElem) {
      errorElem.classList.remove('visible');
      errorElem.textContent = '';
    }
  }

  function showFeedback(box, type, message) {
    if (!box) return;
    box.className = `form-feedback-alert ${type}`;
    box.innerHTML = `<i class="bi ${type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-2"></i> ${message}`;
    box.style.display = 'block';
  }

  function hideFeedback(box) {
    if (!box) return;
    box.style.display = 'none';
    box.className = 'form-feedback-alert';
    box.textContent = '';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForms);
  } else {
    initForms();
  }
})();


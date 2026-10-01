/**
 * Jacob Irish Portfolio - Client-Side Logic
 * - Native <dialog> Modal Controllers (Resume & EternalPlan Notes) with light-dismiss
 * - One-click Email Clipboard Copy
 * - Contact Form Handler
 * - Mobile Navigation Toggle & Header Scroll Styling
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Dynamic Year ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- Navigation Header Scroll Styling ---
  const navHeader = document.getElementById('navHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navHeader.classList.add('scrolled');
    } else {
      navHeader.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn && navHeader) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      navHeader.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navHeader.classList.remove('mobile-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Resume Modal Controller (Native <dialog>) ---
  const resumeModal = document.getElementById('resumeModal');
  const btnOpenResumeNav = document.getElementById('btnOpenResumeNav');
  const btnOpenResumeHero = document.getElementById('btnOpenResumeHero');
  const btnCloseResume = document.getElementById('btnCloseResume');
  const btnCloseResumeFooter = document.getElementById('btnCloseResumeFooter');

  function openResume() {
    if (resumeModal && typeof resumeModal.showModal === 'function') {
      resumeModal.showModal();
    }
  }

  function closeResume() {
    if (resumeModal && typeof resumeModal.close === 'function') {
      resumeModal.close();
    }
  }

  if (btnOpenResumeNav) btnOpenResumeNav.addEventListener('click', openResume);
  if (btnOpenResumeHero) btnOpenResumeHero.addEventListener('click', openResume);
  if (btnCloseResume) btnCloseResume.addEventListener('click', closeResume);
  if (btnCloseResumeFooter) btnCloseResumeFooter.addEventListener('click', closeResume);

  // Light dismiss on backdrop click
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      const dialogDimensions = resumeModal.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        resumeModal.close();
      }
    });
  }

  // --- Project Modal Controller ---
  const projectModal = document.getElementById('projectModal');
  const btnCloseProjectModal = document.getElementById('btnCloseProjectModal');
  const btnCloseProjectFooter = document.getElementById('btnCloseProjectFooter');

  window.openProjectModal = function(projectId) {
    if (projectModal && typeof projectModal.showModal === 'function') {
      projectModal.showModal();
    }
  };

  function closeProjectModal() {
    if (projectModal && typeof projectModal.close === 'function') {
      projectModal.close();
    }
  }

  if (btnCloseProjectModal) btnCloseProjectModal.addEventListener('click', closeProjectModal);
  if (btnCloseProjectFooter) btnCloseProjectFooter.addEventListener('click', closeProjectModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      const rect = projectModal.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        projectModal.close();
      }
    });
  }

  // --- Copy Email to Clipboard ---
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('jirish05@gmail.com');
        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = 'Copied! ✓';
        copyEmailBtn.style.color = '#34d399';
        copyEmailBtn.style.borderColor = '#10b981';
        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
          copyEmailBtn.style.color = '';
          copyEmailBtn.style.borderColor = '';
        }, 2500);
      } catch (err) {
        window.location.href = 'mailto:jirish05@gmail.com';
      }
    });
  }

  // --- Contact Form Submission ---
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || '';
      const email = document.getElementById('contactEmail')?.value || '';
      const subject = document.getElementById('contactSubject')?.value || 'Internship Inquiry';
      const message = document.getElementById('contactMessage')?.value || '';

      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
      const mailtoUrl = `mailto:jirish05@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

      if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.style.color = '#34d399';
        formStatus.innerHTML = `Opening your email client to send to <strong>jirish05@gmail.com</strong>...`;
      }

      window.location.href = mailtoUrl;

      setTimeout(() => {
        contactForm.reset();
        if (formStatus) {
          formStatus.innerHTML = `Message prepared! You can also reach out directly at <a href="mailto:jirish05@gmail.com" style="color: #38bdf8; text-decoration: underline;">jirish05@gmail.com</a>.`;
        }
      }, 1500);
    });
  }

});

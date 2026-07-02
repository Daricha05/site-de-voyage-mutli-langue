document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var yearNode = document.querySelector("[data-year]");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  /* ---------- HEADER SCROLL ---------- */
  function handleScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 80);
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* ---------- MOBILE MENU ---------- */
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
    });
  });

  /* ---------- SCROLL ANIMATIONS ---------- */
  var animObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll("[data-animate]").forEach(function (n) {
    animObserver.observe(n);
  });

  /* ---------- COUNTERS ---------- */
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var node = entry.target;
      var target = Number(node.dataset.counter || 0);
      if (target === 0) { node.textContent = "0"; return; }
      var duration = 1200;
      var startTime = performance.now();
      function tick(now) {
        var elapsed = now - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var current = Math.floor(progress * target);
        node.textContent = current.toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
        else node.textContent = target.toLocaleString();
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(node);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-counter]").forEach(function (n) {
    counterObserver.observe(n);
  });

  /* ---------- FILTER BY DATA-CATEGORY ---------- */
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var scope = btn.closest("[data-filter-scope]");
      if (!scope) return;
      scope.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      var value = btn.dataset.filter || "all";
      scope.querySelectorAll("[data-category]").forEach(function (card) {
        if (value === "all" || card.dataset.category === value) {
          card.style.display = "";
          card.style.opacity = "0";
          requestAnimationFrame(function () {
            card.style.opacity = "1";
          });
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* ---------- TESTIMONIAL CAROUSEL ---------- */
  var slides = Array.from(document.querySelectorAll(".testimonial-slide"));
  if (slides.length) {
    var idx = 0;
    var interval;
    function showSlide(n) {
      slides.forEach(function (s, i) {
        s.classList.toggle("active", i === n);
      });
      document.querySelectorAll(".testimonial-dot").forEach(function (d, i) {
        d.classList.toggle("active", i === n);
      });
    }
    function startAuto() {
      interval = setInterval(function () {
        idx = (idx + 1) % slides.length;
        showSlide(idx);
      }, 5000);
    }
    function stopAuto() { clearInterval(interval); }
    showSlide(0);
    startAuto();
    document.querySelectorAll("[data-slide]").forEach(function (b) {
      b.addEventListener("click", function () {
        stopAuto();
        idx = (idx + Number(b.dataset.slide) + slides.length) % slides.length;
        showSlide(idx);
        startAuto();
      });
    });
    document.querySelectorAll(".testimonial-dot").forEach(function (d) {
      d.addEventListener("click", function () {
        stopAuto();
        idx = Number(d.dataset.index);
        showSlide(idx);
        startAuto();
      });
    });
  }

  /* ---------- FAQ ACCORDION ---------- */
  document.querySelectorAll(".faq-question").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq-item");
      var parent = item.parentElement;
      var isActive = item.classList.contains("active");
      parent.querySelectorAll(".faq-item").forEach(function (x) {
        x.classList.remove("active");
      });
      if (!isActive) item.classList.add("active");
    });
  });

  /* ---------- LIGHTBOX ---------- */
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    var lbClose = lightbox.querySelector(".lightbox-close");
    document.querySelectorAll("[data-lightbox]").forEach(function (img) {
      img.addEventListener("click", function () {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });
    function closeLightbox() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    }
    if (lbClose) lbClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ---------- TABS ---------- */
  document.querySelectorAll(".tab-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parent = btn.closest(".tabs").parentElement;
      parent.querySelectorAll(".tab-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      parent.querySelectorAll(".tab-content").forEach(function (c) {
        c.classList.remove("active");
      });
      btn.classList.add("active");
      var target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add("active");
    });
  });

  /* ---------- CONTACT/QUOTE FORM ---------- */
  var contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    var budgetSlider = contactForm.querySelector("#budget");
    var budgetDisplay = contactForm.querySelector("#budgetDisplay");
    var depDate = contactForm.querySelector("#depart");
    var retDate = contactForm.querySelector("#return");

    if (budgetSlider && budgetDisplay) {
      budgetDisplay.textContent = Number(budgetSlider.value).toLocaleString() + " €";
      budgetSlider.addEventListener("input", function () {
        budgetDisplay.textContent = Number(this.value).toLocaleString() + " €";
      });
    }

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      contactForm.querySelectorAll("[required]").forEach(function (field) {
        var feedback = field.parentElement.querySelector(".form-feedback");
        if (!field.value.trim()) {
          field.classList.add("error");
          if (feedback) {
            feedback.textContent = field.dataset.errorRequired || "Ce champ est requis.";
            feedback.className = "form-feedback error";
          }
          valid = false;
        } else {
          field.classList.remove("error");
          if (feedback) {
            feedback.textContent = "";
            feedback.className = "form-feedback";
          }
        }
      });
      var emailField = contactForm.querySelector("#email");
      if (emailField && emailField.value.trim()) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
          emailField.classList.add("error");
          var fb = emailField.parentElement.querySelector(".form-feedback");
          if (fb) {
            fb.textContent = emailField.dataset.errorEmail || "Email invalide.";
            fb.className = "form-feedback error";
          }
          valid = false;
        }
      }
      if (depDate && retDate && depDate.value && retDate.value) {
        if (new Date(retDate.value) <= new Date(depDate.value)) {
          retDate.classList.add("error");
          var fb = retDate.parentElement.querySelector(".form-feedback");
          if (fb) {
            fb.textContent = retDate.dataset.errorDates || "La date de retour doit être postérieure.";
            fb.className = "form-feedback error";
          }
          valid = false;
        }
      }
      if (!valid) return;
      contactForm.querySelector(".form-success").classList.add("show");
      contactForm.reset();
      if (budgetDisplay) budgetDisplay.textContent = "0 €";
    });
  }

  /* ---------- NEWSLETTER ---------- */
  var newsletterForm = document.querySelector("#newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector("input");
      if (!input.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        input.classList.add("error");
        return;
      }
      input.classList.remove("error");
      var msg = document.createElement("p");
      msg.textContent = input.dataset.successMsg || "Merci pour votre inscription !";
      msg.style.cssText = "color:#28a745;font-weight:600;margin-top:0.75rem;";
      newsletterForm.appendChild(msg);
      newsletterForm.querySelector("button").disabled = true;
      input.value = "";
    });
  }

  /* ---------- BACK TO TOP ---------- */
  var backBtn = document.querySelector(".back-to-top");
  if (backBtn) {
    window.addEventListener("scroll", function () {
      backBtn.classList.toggle("visible", window.scrollY > 400);
    }, { passive: true });
    backBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

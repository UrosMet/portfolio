// =====================
// TYPING
// =====================

const texts = ["Fullstack Developer", "Backend Developer"];

let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  currentText = texts[i];

  j = isDeleting ? j - 1 : j + 1;

  document.getElementById("typing").textContent = currentText.substring(0, j);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    return setTimeout(type, 1000);
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// =====================
// 3D TILT
// =====================

const card = document.querySelector(".card-inner");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = -(y - rect.height / 2) / 15;
  const rotateY = (x - rect.width / 2) / 15;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// =====================
// SCROLL SNAP (FIX)
// =====================

let isScrolling = false;

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  const sections = document.querySelectorAll(".section");
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  let currentIndex = Math.round(scrollPosition / windowHeight);

  // FIX granica
  currentIndex = Math.max(0, Math.min(currentIndex, sections.length - 1));

  isScrolling = true;

  if (e.deltaY > 0) {
    // dole
    if (currentIndex < sections.length - 1) {
      sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // gore
    if (currentIndex > 0) {
      sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
    }
  }

  setTimeout(() => {
    isScrolling = false;
  }, 800);
});

let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");

  slides[currentSlide].classList.remove("active");

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;

  slides[currentSlide].classList.add("active");
}

let currentSlide2 = 0;

function changeSlide2(direction) {
  const slides = document.querySelectorAll(".slide2");

  slides[currentSlide2].classList.remove("active");

  currentSlide2 += direction;

  if (currentSlide2 < 0) currentSlide2 = slides.length - 1;
  if (currentSlide2 >= slides.length) currentSlide2 = 0;

  slides[currentSlide2].classList.add("active");
}

let currentSlide3 = 0;

function changeSlide3(direction) {
  const slides = document.querySelectorAll(".slide3");

  slides[currentSlide3].classList.remove("active");

  currentSlide3 += direction;

  if (currentSlide3 < 0) currentSlide3 = slides.length - 1;
  if (currentSlide3 >= slides.length) currentSlide3 = 0;

  slides[currentSlide3].classList.add("active");
}
// =====================
// BG ANIMATION
// =====================

gsap.to(".bg-blur", {
  x: 100,
  y: 50,
  duration: 10,
  repeat: -1,
  yoyo: true
});

gsap.to(".bg-blur2", {
  x: -100,
  y: -50,
  duration: 12,
  repeat: -1,
  yoyo: true
});

gsap.utils.toArray(".bio-card").forEach((card, i) => {
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none", // NEMA resetovanja
          once: true // KLJUČNO
        }
      }
    );
  });

  

// =====================
// LANG
// =====================

const translations = {
  en: {
    name: "Uroš Mirković",
    about: "Bachelor of Software Engineering at Metropolitan University.",
    p1_title: "Monitoring System",
    p2_title: "Reservation System",
    p2_desc: "Angular + Spring Boot reservation platform.",
    contact: "Contact"
  },
  sr: {
    name: "Uroš Mirković",
    about: "Diplomirani softverski inženjer na Univerzitetu Metropolitan.",
    p1_title: "Monitoring Sistem",
    p2_title: "Sistem za rezervacije",
    p2_desc: "Fullstack aplikacija za rezervacije.",
    contact: "Kontakt"
  }
};

translations.en.about_title = "About Me";
translations.en.about_text = "I am a Bachelor of Software Engineering from Metropolitan University. I specialize in building scalable systems, backend architectures, and monitoring solutions.";
translations.en.about_text2 = "My focus is on reliability, performance, and clean architecture.";

translations.sr.about_title = "O meni";
translations.sr.about_text = "Ja sam diplomirani softverski inženjer sa Univerziteta Metropolitan. Specijalizovan za razvoj skalabilnih sistema i backend arhitekture.";
translations.sr.about_text2 = "Moj glavni fokus na pouzdanosti, performansama i čistoj arhitekturi.";

translations.en.about_title = "About Me";
translations.en.about_text = "I am a graduate Software Engineer with a degree from Metropolitan University. I specialize in building scalable systems, backend architectures, and modern web applications.";
translations.en.about_text2 = "I am a highly motivated and ambitious individual with a strong passion for technology and continuous improvement. My experience in both individual and team environments allows me to deliver reliable and high-performance solutions.";

translations.en.education_title = "🎓 Education";
translations.en.education_uni = "Software Engineering (2021–2026)";
translations.en.education_high = "IT Engineer (2015–2019)";

translations.en.skills_title = "⚡ Skills";

translations.en.extra_title = "🌍 Language & License";
translations.en.language = "English";
translations.en.license = "Driving License: B, A";

translations.sr.about_title = "O meni";
translations.sr.about_text = "Ja sam diplomirani softverski inženjer sa Univerziteta Metropolitan. Specijalizovan za razvoj skalabilnih sistema, backend arhitekture i modernih web aplikacija.";
translations.sr.about_text2 = "Za sebe mislim da sam motivisana i ambiciozna osoba sa velikom strašću prema tehnologiji i stalnom unapređenju. Imam iskustvo u timskom radu na fakultetskim projektima i iskustvo u samostalnom radu koje mi omogućava da isporučim pouzdana i visoko-performantna rešenja.";

translations.sr.education_title = "🎓 Obrazovanje";
translations.sr.education_uni = "Softversko inženjerstvo (2021–2026)";
translations.sr.education_high = "Elektrotehničar Informacionih Tehnologija (2015–2019)";

translations.sr.skills_title = "⚡ Veštine";

translations.sr.extra_title = "🌍 Dodatno";
translations.sr.language = "Engleski";
translations.sr.license = "Vozačka dozvola: B, A";

// EN
translations.en.p1_title = "Honey Subscription Platform";
translations.en.p1_desc = "Fullstack web platform for managing honey subscriptions, orders, and deliveries.";
translations.en.p1_desc2 = "Users can subscribe to products, track deliveries and manage orders, while administrators manage products, users and payments.";

// SR
translations.sr.p1_title = "Web platforma za pretplatu na med";
translations.sr.p1_desc = "Fullstack web platforma za upravljanje pretplatama, porudžbinama i isporukama meda.";
translations.sr.p1_desc2 = "Korisnici mogu da se pretplate na proizvode, prate isporuke i upravljaju porudžbinama, dok administratori upravljaju proizvodima, korisnicima i plaćanjima.";

// EN
translations.en.p2_title = "Hotel Management System";
translations.en.p2_desc = "Fullstack web application for managing hotel operations including reservations, guests, and administration.";
translations.en.p2_desc2 = "The system supports receptionist workflows, room management, reservations, transport services, and financial tracking.";

// SR
translations.sr.p2_title = "Sistem za upravljanje hotelom";
translations.sr.p2_desc = "Fullstack web aplikacija za upravljanje hotelskim poslovanjem uključujući rezervacije, goste i administraciju.";
translations.sr.p2_desc2 = "Sistem podržava rad recepcionera, upravljanje sobama, rezervacije, transport i finansijsko praćenje.";

// EN
translations.en.p3_title = "Midentia Website";
translations.en.p3_desc = "Modern presentation website for a dental and aesthetic medicine clinic focused on design and user experience.";
translations.en.p3_desc2 = "Includes services, pricing, testimonials, gallery, and contact system with responsive design.";

// SR
translations.sr.p3_title = "Midentia sajt";
translations.sr.p3_desc = "Moderan prezentacioni sajt za ordinaciju dentalne i estetske medicine sa fokusom na dizajn i korisničko iskustvo.";
translations.sr.p3_desc2 = "Sadrži usluge, cenovnik, iskustva pacijenata, galeriju i kontakt sistem sa responzivnim dizajnom.";

function setLang(lang) {
    localStorage.setItem("lang", lang);
  
    document.querySelectorAll("[data-key]").forEach(el => {
      el.textContent = translations[lang][el.getAttribute("data-key")];
    });
  
    document.querySelectorAll("[data-placeholder]").forEach(el => {
      el.placeholder = translations[lang][el.getAttribute("data-placeholder")];
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setLang(localStorage.getItem("lang") || "en");
  });


// EN
translations.en.contact_title = "Contact Me";
translations.en.contact_desc = "Feel free to reach out for collaboration, projects, or any questions.";
translations.en.contact_name = "Your Name";
translations.en.contact_email = "Your Email";
translations.en.contact_message = "Your Message";
translations.en.contact_btn = "Send Message";
translations.en.contact_email_label = "Email";
translations.en.contact_phone_label = "Phone";

// SR
translations.sr.contact_title = "Kontakt";
translations.sr.contact_desc = "Slobodno me kontaktirajte za saradnju, projekte ili bilo kakva pitanja.";
translations.sr.contact_name = "Vaše ime";
translations.sr.contact_email = "Vaš email";
translations.sr.contact_message = "Vaša poruka";
translations.sr.contact_btn = "Pošalji poruku";
translations.sr.contact_email_label = "Email";
translations.sr.contact_phone_label = "Telefon";

translations.en.contact_success = "Message sent successfully!";
translations.sr.contact_success = "Poruka je uspešno poslata!";

translations.en.cv_download = "Download CV ⬇";
translations.en.cv_preview = "Preview CV 👁";

translations.sr.cv_download = "Preuzmi CV ⬇";
translations.sr.cv_preview = "Pregled CV-a 👁";

// =====================
// SCROLL BUTTON
// =====================

function scrollToNext() {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
}

// =====================
// CONTACT FORM (AJAX + TOAST)
// =====================

const form = document.querySelector("form");
const toast = document.getElementById("toast");

// ako koristiš jezik
let currentLang = localStorage.getItem("lang") || "en";

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();

      // SUCCESS TOAST
      toast.textContent =
        translations[currentLang]?.contact_success ||
        "Message sent successfully!";

      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);

    } else {
      showError();
    }

  } catch (error) {
    showError();
  }
});

// ERROR HANDLER
function showError() {
  toast.textContent =
    translations[currentLang]?.contact_error ||
    "Something went wrong.";

  toast.style.color = "#f87171"; // crvena

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.style.color = "#4ade80"; // vrati zelenu
  }, 3000);
}

function openCV() {
    document.getElementById("cv-modal").classList.remove("hidden");
  }
  
  function closeCV() {
    document.getElementById("cv-modal").classList.add("hidden");
  }

  document.getElementById("cv-modal").addEventListener("click", function(e) {
    if (e.target === this) {
      closeCV();
    }
  });

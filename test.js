
  

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

    const firebaseConfig = {
      apiKey: "AIzaSyCbkDvh2pD8nVpsulSIlzvKPUM8eLNQE2Q",
      authDomain: "test-50ab3.firebaseapp.com",
      databaseURL: "https://test-50ab3-default-rtdb.firebaseio.com/",  // مهم!
      projectId: "test-50ab3",
      storageBucket: "test-50ab3.firebasestorage.app",
      messagingSenderId: "793717385544",
      appId: "1:793717385544:web:1104c70be562fa18ffab7d"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    document.getElementById("submitr").addEventListener("click", async function(e) {
      e.preventDefault();  // منع إعادة تحميل الصفحة
      
      const service = document.getElementById("serviceSelect").value;
      const phone = document.getElementById("phoneInput").value;
      
      if (!service || !phone) {
        alert("املأ الحقول كلها!");
        return;
      }

      try {
        console.log("جاري الحفظ...");  // للـ console
        await set(ref(db, "Choose/" + service), {
          Choose: service,
          phone: phone,
          timestamp: Date.now()  // للتأكيد إنها جديدة
        });
        console.log("تم الحفظ بنجاح!");  // للـ console
        alert("تم الحفظ بنجاح! شوف الـ Console والـ Firebase.");
      } catch (error) {
        console.error("خطأ في الحفظ:", error);  // هيطبع الخطأ بالتفصيل
        alert("فشل الحفظ: " + error.message);
      }
    });





















  


  // Quick booking form (front-end demo)
  document.getElementById('quickForm').addEventListener('submit', function(e){
    e.preventDefault();
    const service = document.getElementById('serviceSelect').value;
    const phone = document.getElementById('phoneInput').value.trim();
    if(!service || !phone){ alert('من فضلك اكمل البيانات'); return; }
    alert('تم استلام طلبك! سنقوم بالتواصل معك على: ' + phone);
    this.reset();
  });

  // Contact form (stub)
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('تم إرسال رسالتك. شكراً لتواصلك معنا!');
    this.reset();
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      // collapse mobile nav
      const bsCollapse = bootstrap.Collapse.getInstance(document.getElementById('navMain'));
      if(bsCollapse && window.innerWidth < 992) bsCollapse.hide();
    });
  });
document.querySelector(".hero button").onclick = function(){
  window.open("https://wa.me/01022758630?text=أريد حجز خدمة غسيل", "_blank");
}

// استبدل "#" بروابط متجرك الحقيقة
const playUrl = "https://play.google.com/store/apps/details?id=your.app.id";
const appStoreUrl = "https://apps.apple.com/app/idYOUR_APP_ID";

document.getElementById('playBadge').href = playUrl;
document.getElementById('appBadge').href = appStoreUrl;

// اختيار تلقائي حسب منصة المستخدم (mobile)
(function showBestBadge(){
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /android/i.test(ua);
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  if(isAndroid && !isIOS){
    document.getElementById('appBadge').style.display = 'none';
  } else if(isIOS && !isAndroid){
    document.getElementById('playBadge').style.display = 'none';
  }
})();

const translations = {
  "ar": {
    "hero_title": "خدمة غسيل السيارات المتنقلة - بسرعة واحتراف",
    "hero_text": "احجز غسيل سيارتك في أي وقت وبأفضل جودة",
    "book_now": "احجز الآن",
  },

  "en": {
    "hero_title": "Mobile Car Wash Service - Fast & Professional",
    "hero_text": "Book your car wash anytime with top quality service.",
    "book_now": "Book Now",
  }
};

let currentLang = "ar";

document.getElementById("langToggle").onclick = function () {
  currentLang = currentLang === "ar" ? "en" : "ar";
  this.innerText = currentLang === "ar" ? "EN" : "AR";

  document.documentElement.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[currentLang][key];
  });
};


// ====================================
// البيانات التفصيلية للحروف
// ====================================
const letterDetails = {
  أ: {
    title: "حرف الألف - التفاصيل الكاملة",
    text: `
            <strong>المخرج:</strong> الجوف (الخلاء الداخل في الفم والحلق)<br><br>
            
            <strong>كيفية النطق:</strong><br>
            - يخرج الحرف من الجوف بمد الصوت<br>
            - لا يعتمد على مخرج محدد في الفم<br>
            - يمتد الصوت في الخلاء الداخلي<br><br>
            
            <strong>الصفات:</strong><br>
            - حرف مد: يمد بمقدار حركتين أو أكثر حسب الأحكام<br>
            - الرخاوة: يجري معه الصوت<br>
            - الاستفال: ينخفض اللسان عند النطق<br>
            - الانفتاح: ينفتح الفم عند النطق<br><br>
            
            <strong>ملاحظات مهمة:</strong><br>
            - لا يكون إلا ساكناً وما قبله مفتوح<br>
            - من حروف المد الثلاثة (ا، و، ي)
        `,
  },
  ب: {
    title: "حرف الباء - التفاصيل الكاملة",
    text: `
            <strong>المخرج:</strong> الشفتان (من انطباقهما)<br><br>
            
            <strong>كيفية النطق:</strong><br>
            - ينطبق الشفتان على بعضهما انطباقاً محكماً<br>
            - ثم ينفرجان فجأة مع خروج الصوت<br>
            - يصاحبه جهر وشدة<br><br>
            
            <strong>الصفات:</strong><br>
            - الجهر: يجري معه النفس ولا يجري معه الصوت عند سكونه<br>
            - الشدة: ينحبس الصوت عند النطق به ثم ينفجر<br>
            - الاستفال: ينخفض اللسان<br>
            - الانفتاح: ينفتح الفم<br>
            - الإذلاق: سهولة النطق به<br><br>
            
            <strong>ملاحظات مهمة:</strong><br>
            - يجب تحقيق انطباق الشفتين الكامل<br>
            - عدم المبالغة في الشدة
        `,
  },
  ت: {
    title: "حرف التاء - التفاصيل الكاملة",
    text: `
            <strong>المخرج:</strong> طرف اللسان مع أصول الثنايا العليا<br><br>
            
            <strong>كيفية النطق:</strong><br>
            - يصعد طرف اللسان إلى أصول الثنايا العليا<br>
            - يحدث انحباس للصوت ثم انفجار<br>
            - الصوت مهموس خفيف<br><br>
            
            <strong>الصفات:</strong><br>
            - الهمس: يجري معه النفس ولا يجري معه الصوت<br>
            - الشدة: ينحبس الصوت ثم ينفجر<br>
            - الاستفال: ينخفض اللسان<br>
            - الانفتاح: ينفتح الفم<br><br>
            
            <strong>ملاحظات مهمة:</strong><br>
            - التمييز بينه وبين الطاء بعدم الإطباق<br>
            - عدم الخلط بينه وبين الثاء
        `,
  },
  ث: {
    title: "حرف الثاء - التفاصيل الكاملة",
    text: `
            <strong>المخرج:</strong> طرف اللسان مع أطراف الثنايا العليا<br><br>
            
            <strong>كيفية النطق:</strong><br>
            - يوضع طرف اللسان على أطراف الثنايا العليا<br>
            - يخرج الهواء مع احتكاك خفيف<br>
            - الصوت رخو مهموس<br><br>
            
            <strong>الصفات:</strong><br>
            - الهمس: يجري معه النفس<br>
            - الرخاوة: يجري معه الصوت<br>
            - الاستفال: ينخفض اللسان<br>
            - الانفتاح: ينفتح الفم<br><br>
            
            <strong>ملاحظات مهمة:</strong><br>
            - التمييز بينه وبين السين والتاء<br>
            - إظهار طرف اللسان قليلاً بين الأسنان
        `,
  },
  ج: {
    title: "حرف الجيم - التفاصيل الكاملة",
    text: `
            <strong>المخرج:</strong> وسط اللسان مع الحنك الأعلى<br><br>
            
            <strong>كيفية النطق:</strong><br>
            - يرتفع وسط اللسان نحو الحنك الأعلى<br>
            - ينحبس الصوت ثم ينفجر مع جهر<br>
            - يتميز بصوت مجهور شديد<br><br>
            
            <strong>الصفات:</strong><br>
            - الجهر: لا يجري معه النفس<br>
            - الشدة: ينحبس الصوت<br>
            - الاستفال: ينخفض اللسان<br>
            - الانفتاح: ينفتح الفم<br><br>
            
            <strong>ملاحظات مهمة:</strong><br>
            - عدم المبالغة في التشديد<br>
            - النطق الفصيح دون تعطيش
        `,
  },
  ح: {
    title: "حرف الحاء - التفاصيل الكاملة",
    text: `
            <strong>المخرج:</strong> وسط الحلق<br><br>
            
            <strong>كيفية النطق:</strong><br>
            - يخرج من وسط الحلق<br>
            - صوت رخو مهموس<br>
            - يشعر بحرارة خفيفة في الحلق<br><br>
            
            <strong>الصفات:</strong><br>
            - الهمس: يجري معه النفس<br>
            - الرخاوة: يجري معه الصوت<br>
            - الاستفال: ينخفض اللسان<br>
            - الانفتاح: ينفتح الفم<br><br>
            
            <strong>ملاحظات مهمة:</strong><br>
            - التمييز بينه وبين الهاء والخاء<br>
            - إخراجه من مخرجه الصحيح في الحلق
        `,
  },
};

// ====================================
// أمثلة الحروف من القرآن
// ====================================
const letterExamples = {
  أ: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
  ب: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  ت: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
  ث: "ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ تُبْعَثُونَ",
  ج: "جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
  ح: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
};

// ====================================
// تحميل الأصوات - أسرع طريقة ممكنة!
// ====================================
let audioContext;
const audioBuffers = {};
const exampleBuffers = {};
let isAudioReady = false;

// قائمة مصادر الأصوات
const audioSources = {
  أ: "audios/hamzah.mp3",
  ه: "audios/هاء.mp3",
  ع: "audios/عين.mp3",
  ح: "audios/حاء.mp3",
  غ: "audios/غين.mp3",
  خ: "audios/خاء.mp3",
  ق: "audios/قاف.mp3",
  ك: "audios/كاف.mp3",
  ج: "audios/جيم.mp3",
  ش: "audios/شين.mp3", //هون بدنا مثال
  ي: "audios/ياء غير .mp3",
  ض: "audios/ضاد.mp3",
  ل: "audios/لام.mp3",
  ن: "audios/نون.mp3",
  ر: "audios/راء.mp3",
  ط: "audios/طاء.mp3",
  ط: "audios/طاء.mp3",

  د: "audios/دال.mp3",
  ت: "audios/تاء.mp3",

  ظ: "audios/ظاء.mp3",
  ذ: "audios/ذال.mp3",
  ث: "audios/ثاء مثال (2).mp3", //هون بدنا مثال

  ص: "audios/صاد.mp3",
  س: "audios/سين.mp3",
  ز: "audios/زاي.mp3",

  ف: "audios/فاء.mp3",
  م: "audios/ميم.mp3",
  ب: "audios/باء .mp3",
  و: "audios/واو غير.mp3",
};

// قائمة مصادر أمثلة الحروف
const exampleSources = {
  أ: "audios/hamzah.mp3",
  ه: "audios/هاء مثال.mp3",
  ع: "audios/عين مثال.mp3",
  ح: "audios/حاء مثال.mp3",
  غ: "audios/غين مثال.mp3",
  خ: "audios/خاء مثال.mp3",
  ق: "audios/قاف مثال.mp3",
  ك: "audios/كاف مثال.mp3",
  ج: "audios/جيم مثال.mp3",
  ش: "audios/شين مثال.mp3",
  ي: "audios/شين مثال.mp3",
  ض: "audios/ضاد مثال.mp3",
  ل: "audios/لام مثال.mp3",
  ن: "audios/نون مثا.mp3",
  ر: "audios/راء مثال.mp3",
  ط: "audios/طاء مثال.mp3",
  د: "audios/دال مثال.mp3",
  ت: "audios/تاء مثال.mp3",

  ظ: "audios/ظاء مثال.mp3",
  ذ: "audios/ذال مثال.mp3",
  ث: "audios/ثاء مثال.mp3",

  ص: "audios/صاد مثال.mp3",
  س: "audios/السين مثال.mp3",
  ز: "audios/زاي مثال.mp3",

  ف: "audios/فاء مثال.mp3",
  م: "audios/ميم مثال.mp3",
  ب: "audios/باء مثال.mp3",
  و: "audios/واو غير مثال.mp3",
};

// تهيئة Audio Context
function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// تحميل ملف صوتي واحد
// تحميل ملف صوتي واحد
async function loadAudioFile(letter, url, targetBuffers, type = "حرف") {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    targetBuffers[letter] = audioBuffer;
    console.log(`✅ تم تحميل ${type}: ${letter}`);
    return true;
  } catch (error) {
    console.warn(`⚠️ فشل تحميل ${type} ${letter}:`, error);
    return false;
  }
}

// تحميل جميع الأصوات عند فتح الصفحة
// تحميل جميع الأصوات عند فتح الصفحة
window.addEventListener("DOMContentLoaded", async () => {
  console.log("🔄 بدء تحميل الأصوات...");
  initAudioContext();

  // تحميل أصوات الحروف
  const letterPromises = Object.entries(audioSources).map(([letter, url]) =>
    loadAudioFile(letter, url, audioBuffers),
  );

  // تحميل أصوات الأمثلة
  const examplePromises = Object.entries(exampleSources).map(([letter, url]) =>
    loadAudioFile(letter, url, exampleBuffers, "مثال"),
  );

  await Promise.all([...letterPromises, ...examplePromises]);
  isAudioReady = true;
  console.log("🎵 جميع الأصوات والأمثلة جاهزة!");
});
// ====================================
// دالة تشغيل الفيديو عند الضغط على الكارد
// ====================================
function playCardVideo(card) {
  const video = card.querySelector("video");
  const overlay = card.querySelector(".video-overlay");

  if (!video) return;

  if (video.paused) {
    document.querySelectorAll("video").forEach((v) => {
      if (v !== video) {
        v.pause();
        v.currentTime = 0;
        const ov = v.parentElement.querySelector(".video-overlay");
        if (ov) ov.classList.remove("hidden");
      }
    });

    video.play().catch(console.warn);
    if (overlay) overlay.classList.add("hidden");
  } else {
    video.pause();
    if (overlay) overlay.classList.remove("hidden");
  }
}

// ====================================
// دالة عرض الشرح التفصيلي
// ====================================
function showDetail(letter) {
  const modal = document.getElementById("detailModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");

  modalTitle.textContent = letterDetails[letter].title;
  modalText.innerHTML = letterDetails[letter].text;

  modal.style.display = "flex";
}

// ====================================
// دالة إغلاق النافذة المنبثقة
// ====================================
function closeModal() {
  document.getElementById("detailModal").style.display = "none";
}

// ====================================
// دالة تشغيل نطق الحرف - فوري! ⚡
// ====================================
let currentSource = null; // لتتبع الصوت الحالي

function playLetter(letter) {
  const btn = event.target;
  btn.classList.add("playing");

  // التأكد من تفعيل Audio Context
  if (!audioContext) {
    initAudioContext();
  }

  // استئناف Audio Context في حال كان متوقف
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const buffer = audioBuffers[letter];

  if (buffer) {
    // إيقاف أي صوت يشتغل حالياً
    if (currentSource) {
      try {
        currentSource.stop();
      } catch (e) {
        // تجاهل الخطأ إذا كان الصوت متوقف بالفعل
      }
    }

    // إنشاء مصدر صوت جديد
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    currentSource = source;

    // تشغيل فوري! ⚡
    source.start(0);
    console.log(`▶️ تشغيل صوت حرف: ${letter}`);

    // إزالة التأثير عند انتهاء الصوت
    source.onended = () => {
      btn.classList.remove("playing");
      if (currentSource === source) {
        currentSource = null;
      }
    };
  } else {
    // الملف لم يُحمل بعد
    alert(
      `الملف الصوتي للحرف "${letter}" لم يكتمل تحميله بعد.\n\nيرجى الانتظار قليلاً ثم المحاولة مرة أخرى.`,
    );
    btn.classList.remove("playing");
    console.warn(`⚠️ الملف الصوتي للحرف ${letter} غير جاهز`);
  }

  // 🎬 تشغيل الفيديو تلقائياً
  const card = btn.closest(".card");
  if (card) {
    playCardVideo(card);
  }
}

// ====================================
// دالة تشغيل مثال الحرف من القرآن
// ====================================
// ====================================
// دالة تشغيل مثال الحرف من القرآن - فوري! ⚡
// ====================================
let currentExampleSource = null; // لتتبع صوت المثال الحالي

function playExample(letter) {
  const btn = event.target;
  btn.classList.add("playing");

  // التأكد من تفعيل Audio Context
  if (!audioContext) {
    initAudioContext();
  }

  // استئناف Audio Context في حال كان متوقف
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const buffer = exampleBuffers[letter];

  if (buffer) {
    // إيقاف أي مثال يشتغل حالياً
    if (currentExampleSource) {
      try {
        currentExampleSource.stop();
      } catch (e) {
        // تجاهل الخطأ إذا كان الصوت متوقف بالفعل
      }
    }

    // إنشاء مصدر صوت جديد
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    currentExampleSource = source;

    // تشغيل فوري! ⚡
    source.start(0);
    console.log(`▶️ تشغيل مثال حرف: ${letter}`);

    // إزالة التأثير عند انتهاء الصوت
    source.onended = () => {
      btn.classList.remove("playing");
      if (currentExampleSource === source) {
        currentExampleSource = null;
      }
    };
  } else {
    // الملف لم يُحمل بعد
    const example = letterExamples[letter];
    alert(
      `الملف الصوتي للمثال "${example}" لم يكتمل تحميله بعد.\n\nيرجى الانتظار قليلاً ثم المحاولة مرة أخرى.`,
    );
    btn.classList.remove("playing");
    console.warn(`⚠️ الملف الصوتي للمثال ${letter} غير جاهز`);
  }
  // 🎬 تشغيل الفيديو تلقائياً
  const card = btn.closest(".card");
  if (card) {
    playCardVideo(card);
  }
}

// ====================================
// إظهار أيقونة التشغيل عند انتهاء الفيديو
// ====================================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("ended", function () {
      const overlay = this.parentElement.querySelector(".video-overlay");
      overlay.classList.remove("hidden");
      this.currentTime = 0;
    });
  });
});

// ====================================
// إغلاق النافذة المنبثقة عند الضغط خارجها
// ====================================
window.onclick = function (event) {
  const modal = document.getElementById("detailModal");
  if (event.target == modal) {
    closeModal();
  }
};

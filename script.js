var EMAILJS_PUBLIC_KEY = ""; // if you want run thid project replace thsese keys with
//your  email.js account keys
var EMAILJS_SERVICE_ID = "";
var EMAILJS_TEMPLATE_ID = "";
var EMAILJS_AUTOREPLY_ID = "";

var STORAGE_KEY = "mazaMenu";
var WA_NUMBER = "2011111111111";

var MENU_DEFAULT = [
  {
    id: 1,
    name: "حمّص بيتنا",
    price: 45,
    cat: "starters",
    desc: "حمص كريمي بزيت الزيتون البكر وصنوبر محمص وخبز بيتا ساخن",
    img: "images/حمّص بيتنا.avif",
    icon: "icon-hummus",
    tile: "tile-olive",
  },
  {
    id: 2,
    name: "مقبلات المذاق",
    price: 60,
    cat: "starters",
    desc: "تشكيلة من الصلصات والمخللات البيتية تُقدَّم مع خبز طازج من الفرن",
    img: "images/مقبلات المذاق.jpg",
    icon: "icon-mezze",
    tile: "tile-olive",
  },
  {
    id: 3,
    name: "خبز الطابون",
    price: 20,
    cat: "starters",
    desc: "يُخبز على الطريقة التقليدية داخل فرن طيني، دافئ ومقرمش من الأطراف",
    img: "images/خبز الطابون.jpg",
    icon: "icon-bread",
    tile: "tile-olive",
  },
  {
    id: 4,
    name: "مشاوي مذاق المشكّلة",
    price: 180,
    cat: "mains",
    desc: "تشكيلة من اللحوم المشوية على الفحم مع أرز بالشعرية وسلطة موسمية",
    img: "images/مشاوي مذاق.avif",
    icon: "icon-skewer",
    tile: "tile-pomegranate",
  },
  {
    id: 5,
    name: "مندي البيت",
    price: 150,
    cat: "mains",
    desc: "لحم طري يُطهى ببطء فوق الأرز المُعطّر بالبهارات والزعفران",
    img: "images/مندي البيت.avif",
    icon: "icon-bowl-steam",
    tile: "tile-pomegranate",
  },
  {
    id: 6,
    name: "دجاج مذاق بالفرن",
    price: 120,
    cat: "mains",
    desc: "دجاجة كاملة متبّلة تُشوى ببطء حتى تصل لأشهى درجات النضج",
    img: "images/دجاج مذاق بالفرن.avif",
    icon: "icon-chicken",
    tile: "tile-pomegranate",
  },
  {
    id: 7,
    name: "مائدة الكرم",
    price: 240,
    cat: "mains",
    desc: "تشكيلة مشتركة من ألذ أطباقنا الرئيسية، مثالية للمشاركة العائلية",
    img: "images/مائدة الكرم.avif",
    icon: "icon-platter",
    tile: "tile-pomegranate",
  },
  {
    id: 8,
    name: "كنافة الجدّة",
    price: 55,
    cat: "sweets",
    desc: "عجينة مقرمشة وقشطة طازجة وشربات عسل، تُقدَّم ساخنة من الفرن",
    img: "images/sweet-2.jpg",
    icon: "icon-kunafa",
    tile: "tile-saffron",
  },
  {
    id: 9,
    name: "مشكّل مذاق الحلو",
    price: 65,
    cat: "sweets",
    desc: "تشكيلة يومية من الحلويات الشرقية بالمكسرات وماء الورد",
    img: "images/مذاق الحلو.avif",
    icon: "icon-sweets",
    tile: "tile-saffron",
  },
];

var TILE_MAP = {
  starters: "tile-olive",
  mains: "tile-pomegranate",
  sweets: "tile-saffron",
};

var ICON_MAP = {
  starters: "icon-hummus",
  mains: "icon-skewer",
  sweets: "icon-sweets",
};

var WA_SVG =
  '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>';

function getMenuData() {
  try {
    var s = localStorage.getItem(STORAGE_KEY);
    if (s) return JSON.parse(s);
  } catch (e) {}

  return JSON.parse(JSON.stringify(MENU_DEFAULT));
}

var activeCat = "all";

function renderMenu() {
  var grid = document.getElementById("menuGrid");

  if (!grid) return;

  var data = getMenuData();

  grid.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var d = data[i];

    var tile = d.tile || TILE_MAP[d.cat] || "tile-olive";
    var icon = d.icon || ICON_MAP[d.cat] || "icon-hummus";

    var wa = encodeURIComponent(
      "مرحباً، أود طلب: " + d.name + " (" + d.price + " ج.م) من مطعم مذاق",
    );

    var el = document.createElement("article");

    el.className = "dish-card cat-" + d.cat;
    el.setAttribute("data-cat", d.cat);

    el.style.display = activeCat === "all" || d.cat === activeCat ? "" : "none";

    el.innerHTML =
      '<div class="dish-img">' +
      '<div class="art-tile ' +
      tile +
      '">' +
      '<img class="art-photo" loading="lazy" src="' +
      (d.img || "") +
      '" alt="' +
      d.name +
      '" onerror="this.style.display=\'none\'">' +
      '<svg class="art-watermark" viewBox="0 0 100 100">' +
      '<use href="#star8"/>' +
      "</svg>" +
      '<svg class="art-icon">' +
      '<use href="#' +
      icon +
      '"/>' +
      "</svg>" +
      "</div>" +
      "</div>" +
      '<div class="dish-body">' +
      '<div class="dish-top">' +
      "<h3>" +
      d.name +
      "</h3>" +
      '<span class="price">' +
      Number(d.price).toLocaleString("ar-EG") +
      " ج.م" +
      "</span>" +
      "</div>" +
      "<p>" +
      (d.desc || "") +
      "</p>" +
      '<a href="https://wa.me/' +
      WA_NUMBER +
      "?text=" +
      wa +
      '" class="dish-order-wa" target="_blank" rel="noopener noreferrer">' +
      WA_SVG +
      "اطلب عبر واتساب" +
      "</a>" +
      "</div>";

    grid.appendChild(el);
  }
}

function applyFilter(cat) {
  activeCat = cat;

  document.querySelectorAll(".menu-tab").forEach(function (b) {
    b.classList.toggle("is-active", b.getAttribute("data-filter") === cat);
  });

  document.querySelectorAll("#menuGrid .dish-card").forEach(function (c) {
    c.style.display =
      cat === "all" || c.getAttribute("data-cat") === cat ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  renderMenu();

  document.querySelectorAll(".menu-tab").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(this.getAttribute("data-filter"));
    });
  });

  window.addEventListener("storage", function (e) {
    if (e.key === STORAGE_KEY) {
      renderMenu();
    }
  });

  var header = document.getElementById("siteHeader");
  var backTop = document.getElementById("backTop");

  window.addEventListener("scroll", function () {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 60);
    }

    if (backTop) {
      backTop.classList.toggle("is-visible", window.scrollY > 500);
    }
  });

  var cb = document.getElementById("navCheckbox");
  var mn = document.getElementById("mainNav");

  if (cb && mn) {
    mn.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        cb.checked = false;
      });
    });
  }

  var secs = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".main-nav a");

  window.addEventListener("scroll", function () {
    var cur = "hero";

    secs.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - 140) {
        cur = s.id;
      }
    });

    navLinks.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + cur);
    });
  });

  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            ro.unobserve(e.target);
          }
        });
      },
      {
        threshold: 0.08,
      },
    );

    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("pre-reveal");
      ro.observe(el);
    });
  }

  var hr = document.querySelectorAll('input[name="heroSlide"]');

  if (hr.length) {
    var hi = 0;

    var ht = setInterval(function () {
      hi = (hi + 1) % hr.length;
      hr[hi].checked = true;
    }, 5500);

    hr.forEach(function (r, i) {
      r.addEventListener("change", function () {
        if (r.checked) {
          hi = i;

          clearInterval(ht);

          ht = setInterval(function () {
            hi = (hi + 1) % hr.length;
            hr[hi].checked = true;
          }, 5500);
        }
      });
    });
  }

  document.querySelectorAll(".stat").forEach(function (el) {
    if (!("IntersectionObserver" in window)) return;

    var so = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;

          var tgt = parseInt(el.getAttribute("data-count"), 10);

          var ne = el.querySelector(".stat-num");

          if (!ne || isNaN(tgt)) return;

          var t0 = performance.now();

          (function tick(now) {
            var p = Math.min((now - t0) / 1600, 1);

            ne.textContent = Math.floor(
              (1 - Math.pow(1 - p, 3)) * tgt,
            ).toLocaleString("ar-EG");

            if (p < 1) {
              requestAnimationFrame(tick);
            } else {
              ne.textContent = tgt.toLocaleString("ar-EG");
            }
          })(performance.now());

          so.unobserve(el);
        });
      },
      {
        threshold: 0.4,
      },
    );

    so.observe(el);
  });

  var tr = document.querySelectorAll('input[name="tSlide"]');

  if (tr.length) {
    var ti = 0;

    tr.forEach(function (r, i) {
      r.addEventListener("change", function () {
        if (r.checked) {
          ti = i;
        }
      });
    });

    setInterval(function () {
      ti = (ti + 1) % tr.length;
      tr[ti].checked = true;
    }, 6000);
  }

  var pre = document.getElementById("preloader");

  if (pre) {
    setTimeout(function () {
      pre.classList.add("is-done");
    }, 400);

    window.addEventListener("load", function () {
      pre.classList.add("is-done");
    });

    setTimeout(function () {
      pre.classList.add("is-done");
    }, 2500);
  }

  /* =====================
     نموذج التواصل — EmailJS
     إيميل ١: يروح لبريدك
     إيميل ٢: يروح للعميل
  ============================================================ */

  var form = document.getElementById("contactForm");
  var noteEl = document.getElementById("formNote");
  var btnText = document.getElementById("formBtnText");
  var btn = document.getElementById("formSubmitBtn");

  if (form && noteEl) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      noteEl.textContent = "";
      noteEl.className = "form-note";

      var name = (
        document.getElementById("formName") || { value: "" }
      ).value.trim();

      var phone = (
        document.getElementById("formPhone") || { value: "" }
      ).value.trim();

      var email = (
        document.getElementById("formEmail") || { value: "" }
      ).value.trim();

      if (!name || !phone || !email) {
        noteEl.textContent = "يرجى ملء الاسم والهاتف والبريد الإلكتروني";

        noteEl.classList.add("is-error");

        return;
      }

      if (btnText) {
        btnText.textContent = "جاري الإرسال...";
      }

      if (btn) {
        btn.disabled = true;
      }

      var params = {
        from_name: name,
        from_email: email,
        phone: phone,

        guests_date: (document.getElementById("formGuests") || { value: "" })
          .value,

        message: (document.getElementById("formMessage") || { value: "" })
          .value,

        to_name: "فريق مذاق",
      };

      function resetBtn() {
        if (btnText) {
          btnText.textContent = "إرسال الطلب";
        }

        if (btn) {
          btn.disabled = false;
        }
      }

     

      emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)

        .then(function () {
          if (EMAILJS_AUTOREPLY_ID !== "") {
            return emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_AUTOREPLY_ID,
              params,
            );
          }
        })

        .then(function () {
          noteEl.textContent =
            "تم إرسال طلبك بنجاح! ستصلك رسالة تأكيد على بريدك الإلكتروني ";

          form.reset();
        })

        .catch(function (err) {
          console.error("EmailJS error:", err);

          noteEl.textContent = "حدث خطأ في الإرسال. يرجى التواصل عبر واتساب";

          noteEl.classList.add("is-error");
        })

        .finally(function () {
          resetBtn();
        });
    });
  }
});

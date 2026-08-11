








<div align="center">

# 🍽️ مذاق — Restaurant Management Dashboard

### Full-Stack Arabic Restaurant Website & Admin Dashboard

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![EmailJS](https://img.shields.io/badge/EmailJS-E34F26?style=for-the-badge)](https://www.emailjs.com/)
[![LocalStorage](https://img.shields.io/badge/LocalStorage-4A90D9?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://fonts.google.com/)
[![WhatsApp API](https://img.shields.io/badge/WhatsApp_API-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/)
[![RTL](https://img.shields.io/badge/RTL_Arabic-009900?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Glossary/rtl)

https://github.com/user-attachments/assets/a3bd4736-f2c3-4d70-857a-951da6d5f987
**A production-ready Arabic restaurant website with a full admin dashboard for menu management.**
Built with vanilla HTML, CSS, and JavaScript — featuring RTL Arabic design, cinematic hero sections, WhatsApp ordering, and a password-protected admin panel.


</div>

---

## 📖 Introduction

**مذاق (Mazaq)** is a full-featured Arabic restaurant web presence with a built-in menu management system. It goes far beyond a typical restaurant template — every dish on the public site is editable through a password-protected admin dashboard, orders flow directly through WhatsApp, and the entire experience is crafted for Arabic-speaking audiences with authentic RTL design.

| Typical Restaurant Template | مذاق |
|---|---|
| Static menu you edit in code | ✅ Live menu managed via admin dashboard with full CRUD |
| English-only layout | ✅ Full Arabic RTL design with authentic typography |
| No admin access control | ✅ Password-protected admin dashboard |
| Hardcoded contact form | ✅ EmailJS integration with auto-reply to customers |
| No ordering flow | ✅ WhatsApp ordering button on every dish card |
| Generic fonts | ✅ Aref Ruqaa, Reem Kufi & Cairo — premium Arabic type stack |
| Static hero images | ✅ Auto-advancing hero slideshow with 3 slides |
| No animations | ✅ Scroll-reveal, counter animations, smooth transitions |

---

## ✨ Features

### 🌐 Public Website
- Cinematic hero slideshow with auto-advance and dot navigation
- Animated statistics strip with live Arabic numeral counters
- About section with layered art tile imagery and golden frame accent
- Three specialties section with animated icon cards
- Full filterable menu grid (All / Starters / Mains / Sweets)
- Ingredient spotlight section with full-bleed background
- Chef team section with hover-reveal info cards
- Testimonial carousel with auto-advance
- Contact form powered by EmailJS (owner email + customer auto-reply)
- WhatsApp floating action button with pulse animation
- Smooth scroll with active nav link highlighting
- Back-to-top button
- IntersectionObserver scroll-reveal animations throughout

### 🔐 Admin Dashboard (`/admin`)
- Password-protected login screen
- Live dish statistics (total, starters, mains, sweets)
- Add new dishes with name, price, category, description, and image
- Edit existing dishes via modal
- Delete dishes with confirmation prompt
- Search and category filter across all dishes
- Changes persist via localStorage and sync instantly to the public site
- Toast notifications for all actions (add, edit, delete, errors)
- Logout button

### 📱 WhatsApp Integration
- Floating WhatsApp FAB on all pages with tooltip
- Per-dish "Order via WhatsApp" button with pre-filled message
- WhatsApp contact button in the contact section

### 📧 Email Integration (EmailJS)
- Contact form sends email to restaurant owner
- Optional auto-reply email to the customer
- Graceful error handling with Arabic feedback messages

---

## 🚀 Tech Stack

### Frontend
- **HTML5** — Semantic markup with RTL `dir="rtl"` and `lang="ar"`
- **CSS3** — Custom properties, CSS Grid, Flexbox, keyframe animations
- **Vanilla JavaScript** — No framework, zero dependencies
- **Arabic Typography** — Aref Ruqaa (display), Reem Kufi (UI), Cairo (body)

### Integrations
- **EmailJS** — Contact form email delivery and auto-reply
- **WhatsApp API** — Direct ordering and contact via `wa.me` links
- **Google Fonts** — Arabic font stack loaded via CDN
- **LocalStorage** — Menu data persistence across sessions

### Design System
- Custom CSS variables for saffron, pomegranate, and olive color palette
- Art tile system with layered SVG watermarks and food icons
- Consistent `cubic-bezier(.22,.68,0,1)` easing throughout
- Fully responsive — mobile-first breakpoints at 360px, 480px, 640px, 768px, 980px, 1024px

---

## 📦 Modules

### 🌍 Public Pages

| Section | Features |
|---|---|
| **Hero** | 3-slide auto-advancing carousel, SVG corner frames, CTA buttons |
| **Stats Strip** | Animated Arabic numeral counters on scroll |
| **About** | Layered art photo, offset golden frame, year badge |
| **Specialties** | 3 icon cards — woodfire, spices, hospitality |
| **Menu** | Category tabs, dish cards with WhatsApp order, live from localStorage |
| **Ingredients** | Full-bleed art section — saffron, sumac, za'atar |
| **Team** | Chef cards with hover-reveal info overlay |
| **Reviews** | Auto-advancing testimonial carousel |
| **Contact** | EmailJS form + WhatsApp button + address/hours |
| **Footer** | Logo, nav links, admin link (hidden) |

### 🔐 Admin Panel (`admin.html`)

| Module | Features |
|---|---|
| **Login** | Password screen with error feedback and Enter key support |
| **Stats** | Live count cards — total, starters, mains, sweets |
| **Add Dish** | Name, price, category, description, image URL |
| **Dish Grid** | Search, category filter, paginated dish cards |
| **Edit Modal** | Pre-filled form, save with validation |
| **Delete** | Confirm dialog, instant UI update |
| **Toast System** | Success and error notifications |

---

## 🗂️ Project Structure

```
mazaq/
├── index.html          # Public restaurant website
├── admin.html          # Admin dashboard
├── style.css           # Full design system for public site
├── script.js           # Public site JS (menu, EmailJS, animations)
└── images/
    ├── main.avif
    ├── main-2.avif
    ├── main-4.avif
    ├── من نحن.avif
    ├── مشاوي مذاق.avif
    ├── مندي البيت.avif
    ├── دجاج مذاق بالفرن.avif
    ├── مائدة الكرم.avif
    ├── حمّص بيتنا.avif
    ├── مقبلات المذاق.jpg
    ├── خبز الطابون.jpg
    ├── مذاق الحلو.avif
    ├── sweet-2.jpg
    ├── chief-1.avif
    ├── chief-2.avif
    └── chief-3.jpg
```

---

## ⚙️ Setup & Configuration

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/mazaq.git
cd mazaq
```

### 2. Configure EmailJS

Open `script.js` and replace the placeholder keys with your [EmailJS](https://emailjs.com) credentials:

```js
var EMAILJS_PUBLIC_KEY   = "your_public_key";
var EMAILJS_SERVICE_ID   = "your_service_id";
var EMAILJS_TEMPLATE_ID  = "your_template_id";   // Email to restaurant owner
var EMAILJS_AUTOREPLY_ID = "your_autoreply_id";  // Auto-reply to customer (optional)
```

### 3. Configure WhatsApp number

In `script.js`, update the WhatsApp number (international format, no `+`):

```js
var WA_NUMBER = "201001234567"; // Replace with your number
```

Also update the `href` links in `index.html` for the FAB and contact section buttons.

### 4. Change the admin password

In `admin.html`, find and update:





## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**Built with ❤️ using Vanilla HTML, CSS & JavaScript**

</div>

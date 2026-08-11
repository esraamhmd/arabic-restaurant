
https://github.com/user-attachments/assets/1f05800f-e343-419e-9299-420774a681fe
<div align="center">

# 🍽️ Mazaq — Arabic Restaurant



[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![EmailJS](https://img.shields.io/badge/EmailJS-E34F26?style=for-the-badge)](https://www.emailjs.com/)
[![WhatsApp API](https://img.shields.io/badge/WhatsApp_API-25D366?style=for-the-badge\&logo=whatsapp\&logoColor=white)](https://wa.me/)
[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge\&logo=google\&logoColor=white)](https://fonts.google.com/)
[![LocalStorage](https://img.shields.io/badge/LocalStorage-4A90D9?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[![RTL](https://img.shields.io/badge/RTL_Arabic-009900?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Glossary/rtl)



**An  Arabic restaurant website with a password-protected admin dashboard for live menu management.**
Built entirely with vanilla HTML, CSS, and JavaScript.


https://github.com/user-attachments/assets/c4bb827b-7280-4c2b-b944-5e98e8b57ebc



</div>

---

## 📖 Introduction

**Mazaq (مذاق)** is a beautifully designed Arabic restaurant website targeting Egyptian audiences. The public-facing site presents the restaurant's story, menu, chefs, and contact details in a cinematic Arabic RTL layout. A hidden admin dashboard (`admin.html`) lets the restaurant owner manage the menu — adding, editing, and deleting dishes — with all changes instantly reflected on the public site via `localStorage`.

## ✨ Features

### 🌐 Public Site (`index.html` + `style.css` + `script.js`)

**Hero Section**

* 3-slide CSS-only carousel using `<input type="radio">` — zero JS needed for the slide logic
* Auto-advance via `setInterval` every 5.5 seconds with reset on manual dot click
* SVG corner frame overlay, scroll-cue animation, and two CTA buttons

**Stats Strip**

* 4 animated counters (27 years, 48 dishes, 15 spices, 9,600 guests)
* Count-up animation using `requestAnimationFrame` and easing curve
* Numbers rendered in Arabic-Eastern (`ar-EG` locale)

**About Section**

* Layered art tile with pomegranate/saffron/olive gradient backgrounds
* SVG watermark star + hand-drawn food icon overlays on every image
* Offset golden border frame and circular "Since 1998" badge

**Specialties Section**

* 3 cards: Woodfire cooking, Handground spices, Hospitality
* Inline SVG icons with custom stroke animations on hover

**Menu Section**

* Dish cards rendered entirely from JavaScript reading `localStorage`
* Category filter tabs: All / Starters / Mains / Sweets
* Each card: art tile thumbnail, dish name, price in `ar-EG` locale, description, WhatsApp order button
* Defaults to 9 hardcoded dishes if localStorage is empty
* Syncs live with admin via the `storage` browser event — open both tabs and edits appear instantly

**Ingredients Section**

* Full-bleed background art tile with large SVG watermark
* 3 highlighted spices: Saffron, Sumac, Za'atar with colored badge tags

**Chef Team Section**

* 3 chef cards with art tile photos
* Info (name + role) revealed on hover via CSS gradient overlay

**Reviews / Testimonials**

* 3-slide CSS radio carousel, auto-advances every 6 seconds
* Star ratings and display-font quotes

**Contact Section**

* EmailJS form with two sends: one to the restaurant owner, one auto-reply to the customer
* Inline Arabic validation messages
* WhatsApp direct contact button with pre-filled Arabic message
* Address, phone, and working hours listed
* Social links row (Facebook, Instagram, WhatsApp)

**Navigation & UX**

* Sticky header with blur backdrop and scroll-shadow transition
* CSS-only hamburger menu using a hidden `<input type="checkbox">`
* Active nav link tracking via scroll position
* Preloader animation (star spin + brand name fade) with `IntersectionObserver` auto-dismiss
* Back-to-top button, visible after 500px scroll
* WhatsApp FAB with CSS pulse ring animation and hover tooltip

---

### 🔐 Admin Dashboard (`admin.html`)

A fully self-contained single HTML file — own styles, own script, no dependencies on `style.css` or `script.js`.

**Login Screen**

* Full-screen password gate before anything is shown
* Wrong password shakes the input border red and clears the field
* Enter key supported

**Stats Panel (sidebar)**

* 4 live stat cards: Total dishes / Starters / Mains / Sweets
* Update instantly on every add, edit, or delete

**Add Dish Form (sidebar)**

* Fields: dish name, price, category (dropdown), description, image URL
* Validates name and price before saving
* Saves to `localStorage` under key `mazaMenu`
* Dispatches a `StorageEvent` so the public site tab updates without a reload

**Dish Grid (main panel)**

* Renders all dishes as cards with thumbnail image (falls back to emoji placeholder if image fails)
* Category color accent strip per card (olive = starters, pomegranate = mains, saffron = sweets)
* Category badge overlay on thumbnail
* Search input filters by dish name or description in real time
* Filter tabs: All / Starters / Mains / Sweets

**Edit Modal**

* Opens pre-filled with the selected dish's data
* Same validation as add form
* Saves changes and re-renders the grid
* Closes on backdrop click or Escape key

**Delete**

* `window.confirm` dialog before deletion
* Removes from array and re-saves to `localStorage`

**Toast Notifications**

* Bottom-center toast for: added, saved, deleted, and error states
* Auto-dismisses after 2.8 seconds

**Logout**

* Hides the dashboard, shows the login screen, clears the password field

---

## 🚀 Tech Stack

| Layer       | Technology                                         |
| ----------- | -------------------------------------------------- |
| Markup      | HTML5, `dir="rtl"`, `lang="ar"`                    |
| Styling     | CSS3 — custom properties, Grid, Flexbox, keyframes |
| Scripting   | Vanilla JavaScript (ES5-compatible) — no framework |
| Fonts       | Google Fonts — Aref Ruqaa, Reem Kufi, Cairo        |
| Email       | EmailJS browser SDK v4                             |
| Ordering    | WhatsApp `wa.me` deep links                        |
| Persistence | Browser `localStorage`                             |
| Hosting     | Any static host (Vercel, Netlify, GitHub Pages)    |

---

## 📄 License

This project is licensed under the MIT License.

<div align="center">

**Built with ❤️ using Vanilla HTML, CSS & JavaScript**

</div>

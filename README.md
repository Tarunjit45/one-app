# 🧘 ONE — One Question Per Day for Intentional Living

[![Android APK](https://img.shields.io/badge/Download-ONE.apk-3DDC84?style=for-the-badge&logo=android&logoColor=white)](ONE.apk)
[![Web PWA](https://img.shields.io/badge/Platform-Web%20%2F%20PWA-4285F4?style=for-the-badge)](index.html)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> *"ONE asks you one question per day — based on the life you want.*  
> *No motivation. No advice. No distractions.*  
> *Just honesty, once a day."*

**ONE** is an ultra-minimalist, distraction-free introspection application available as a responsive web app and an Android APK (`ONE.apk`). Designed to counteract information overload and social media noise, ONE presents a single profound question every 24 hours to help you align your daily actions with your core values.

---

## 📌 Why ONE?

Modern life inundates us with productivity podcasts, motivational quotes, and endless notifications. But external advice rarely changes behavior—**self-honesty does**.

* **Zero Fluff:** No streaks that shame you, no ads, no social feeds.
* **1 Daily Prompt:** Refreshes once every 24 hours. Once answered or contemplated, the app quietly closes.
* **Platform Detection:** `script.js` automatically detects user device (iOS vs. Android vs. Desktop) and serves the native install package or web experience.

---

## 📱 Download Android APK

The production Android application package is bundled directly in this repository:
👉 **[Download ONE.apk](ONE.apk)**

---

## 📁 Repository Structure

```text
one-app/
├── ONE.apk             # Android application package for direct sideloading
├── index.html          # Minimalist web app entry & platform router
├── script.js           # Daily prompt rotation & OS device detection logic
├── style.css           # Clean, distraction-free typography & monochromatic styling
├── logo.png            # Application icon
├── LICENSE             # MIT License
└── README.md
```

---

## 🚀 Web Usage

Serve the static web app locally using any web server:

```bash
git clone https://github.com/Tarunjit45/one-app.git
cd one-app

python -m http.server 8080
```

Visit [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

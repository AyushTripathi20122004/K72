# K72 Studio

<p align="center">
  <a href="YOUR_LIVE_WEBSITE_URL">
    <img src="YOUR_PREVIEW_IMAGE_URL" alt="K72 Studio Preview" width="100%">
  </a>
</p>

<p align="center">
  <strong>A creative, interactive and animation-focused web experience.</strong>
</p>

<p align="center">
  Built with React.js, Tailwind CSS, GSAP and Lenis.
</p>

---

## 🌐 Live Website

**[Visit K72 Studio](YOUR_LIVE_WEBSITE_URL)**

---

## 📖 About The Project

K72 Studio is a modern creative website built with a strong focus on visual design, smooth scrolling, interactive elements and high-quality web animations.

The project focuses on creating an immersive frontend experience using React.js, Tailwind CSS, GSAP and Lenis.

This project was created to explore modern creative-development techniques and improve skills in building animation-heavy and responsive websites.

---

## ✨ Features

* Modern creative agency-style design
* Fully responsive layout
* Smooth scrolling
* GSAP-powered animations
* Scroll-triggered animations
* Interactive elements
* Page transitions and visual effects
* Responsive navigation
* Modern typography
* Component-based React architecture
* Optimized Vite development workflow

---

## 🛠️ Technologies Used

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React.js     | Frontend development          |
| Tailwind CSS | Styling and responsive design |
| GSAP         | Animations and interactions   |
| Lenis        | Smooth scrolling              |
| JavaScript   | Application logic             |
| HTML5        | Page structure                |
| CSS3         | Styling                       |
| Vite         | Development and build tool    |
| Git          | Version control               |
| GitHub       | Repository and deployment     |

---

## 📚 Libraries Used

### React

Used to create reusable UI components and manage the application's frontend structure.

### GSAP

GSAP is used for advanced animations and interactions throughout the website.

It is used for:

* Scroll animations
* Element transitions
* Timeline animations
* Interactive animations
* Transformations
* Entrance and exit animations

### Lenis

Lenis is used to provide smooth and natural scrolling throughout the website.

### Tailwind CSS

Tailwind CSS is used for:

* Layout
* Spacing
* Typography
* Responsive design
* Flexbox
* Grid
* Positioning
* UI styling

### Vite

Vite is used as the development server and production build tool.

---

## 🚀 Getting Started

Follow the steps below to run this project locally.

### 1. Clone the Repository

```bash
git clone YOUR_REPO_URL
```

### 2. Open the Project

```bash
cd k72-studio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The project will now run on:

```text
http://localhost:5173
```

---

## 📦 Available Commands

### Start Development Server

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 🌐 GitHub Pages Deployment

This project uses the `gh-pages` package to deploy the production build to GitHub Pages.

### Install gh-pages

```bash
npm install gh-pages --save-dev
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Deploy

Run:

```bash
npm run deploy
```

The `predeploy` script automatically creates the production build before `gh-pages` publishes the `dist` folder.

---

## 📁 Project Structure

```text
k72-studio/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── vite.config.js
└── README.md
```

---

## 🧩 React Structure

The website is built using reusable React components.

A typical component structure looks like:

```jsx
import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="container mx-auto px-5">
        <h1 className="text-5xl font-bold">
          K72 Studio
        </h1>

        <p>
          Creative digital experience.
        </p>
      </div>
    </section>
  );
};

export default Hero;
```

Components are then combined inside the main application.

```jsx
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
```

---

## 💻 HTML

The project uses HTML5 as the main document structure through Vite.

The main `index.html` contains the React root element:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <title>K72 Studio</title>
  </head>

  <body>
    <div id="root"></div>

    <script
      type="module"
      src="/src/main.jsx"
    ></script>
  </body>
</html>
```

The majority of the website's HTML structure is created using JSX inside React components.

---

## 🎨 Tailwind CSS

Tailwind CSS is used throughout the project to create responsive layouts and modern UI elements.

Example:

```jsx
<div className="flex min-h-screen w-full items-center justify-center px-5 md:px-10">
  <h1 className="text-4xl font-bold md:text-7xl">
    K72 Studio
  </h1>
</div>
```

Responsive Tailwind utilities are used to adapt the website to different screen sizes.

---

## 🎬 GSAP Animations

GSAP is used to create the website's interactive animation system.

Example:

```javascript
import gsap from "gsap";

gsap.to(".hero-title", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out"
});
```

GSAP can also be combined with scroll interactions to create dynamic scrolling animations.

---

## 🖱️ Smooth Scrolling

Lenis is used to provide smooth scrolling.

Example setup:

```javascript
import Lenis from "lenis";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

---

## 📱 Responsive Design

The website is designed to work across different screen sizes.

### Supported Devices

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

Tailwind CSS responsive utilities are used to adjust layouts, typography, spacing and positioning according to the screen size.

---

## ⚡ Performance

The project uses Vite for fast development and optimized production builds.

Production build:

```bash
npm run build
```

The generated production files are placed inside:

```text
dist/
```

---

## 🎯 Project Goals

The main goals of this project were to improve skills in:

* React.js
* Tailwind CSS
* GSAP
* Lenis
* Creative frontend development
* Responsive web design
* UI/UX implementation
* Scroll-based animations
* Interactive web experiences
* Component-based architecture

---

## 🔧 Development Tools

The project was developed using:

* **VS Code** — Code editor
* **Git** — Version control
* **GitHub** — Repository hosting
* **Vite** — Development environment
* **Chrome DevTools** — Debugging and responsive testing
* **npm** — Package management

---

## 📸 Preview

<p align="center">
  <a href="YOUR_LIVE_WEBSITE_URL">
    <img src="YOUR_PREVIEW_IMAGE_URL" alt="K72 Studio Website" width="100%">
  </a>
</p>

<p align="center">
  <a href="YOUR_LIVE_WEBSITE_URL">
    <strong>🚀 View Live Website</strong>
  </a>
</p>

---

## 👨‍💻 Author

### Ayush Tripathi

Frontend Developer passionate about creating modern, interactive and visually engaging web experiences.

**Portfolio:**
https://aayush-tripaathi-portfolio.vercel.app/

**GitHub:**
https://github.com/AyushTripathi2004

---

## ⭐ Show Your Support

If you like this project, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for learning and frontend development practice.

# 🏛️ BRAWNSTERDAM
### *Our Return Is Inevitable...*

[![WebGL](https://img.shields.io/badge/WebGL-2.0-red?style=for-the-badge&logo=webgl&logoColor=white)](https://get.webgl.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Nanogl](https://img.shields.io/badge/Nanogl-3D%20Engine-blue?style=for-the-badge)](https://github.com/makemepulse/nanogl)
[![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)](LICENSE)

An immersive, award-winning interactive 3D WebGL web experience and digital art installation built with custom GLSL shaders, Nanogl WebGL engine, procedural animation, ambient audio soundscapes, and gesture-driven interactions.

---

## 🌟 Interactive Journey & Chapters

Experience the story across multiple interactive chapters:

| Chapter | Title | Interaction Mechanic | Visual Motif |
| :--- | :--- | :--- | :--- |
| **00** | **The Awakening** | Initial Entry & Reveal | Floating Monolith & Dimensional Shift |
| **01** | **Éclosion** | `TAP` | Blooming Flora, Organic Growth & Particle Dissolve |
| **02** | **Adieu** | `SWIPE` | Crystalline Scepters, Shimmering Monoliths & Flight |
| **03** | **Voyage** | `HOLD` | Feather Morphing, Speed Trails & Atmospheric Cloudscapes |
| **04** | **Brawnsterdam Ending** | Interactive Cursor / Hover | Letter Reveal Animation, Tribute Signature & Social Links |

---

## ✨ Key Features

- **🎨 Handcrafted WebGL Renderer**: Built with Nanogl PBR and custom vertex/fragment shaders for hatching shadows, morph deformations, noise swirl, and outlines.
- **🎯 Custom Circular Sketch Cursor**: Dynamic physics-driven circular canvas cursor that scales, morphs, and responds fluidly to mouse gestures and UI hovers.
- **🔊 Multi-Stem Spatial Audio Engine**: Dynamic multi-layer soundscapes that react in real-time to user interactions, clicks, and chapter transitions.
- **🎬 Cinematic Letter-by-Letter Ending**: Tailored ending sequence displaying **"BRAWNSTERDAM... OUR RETURN IS INEVITABLE..."** with custom entrance typography.
- **✍️ Non-Looping Signature Animation**: Elegant hand-drawn alpha GIF signature (*Tribute to Brownsterdam*) that plays once smoothly on conclusion.
- **📱 Responsive & Multi-Platform**: Adaptive layout and touch gestures (`Swipe`, `Tap`, `Hold`, `Drag`) tailored for both Desktop and Mobile viewports.

---

## 🕹️ Interaction Controls

| Device | Action | Description |
| :--- | :--- | :--- |
| **Mouse (Desktop)** | `Left Click` / `Hold` | Charge scenes, accelerate flight, and interact with objects |
| **Mouse Movement** | `Move Cursor` | Control camera perspective and dynamic parallax lighting |
| **Touch (Mobile)** | `Swipe Up` / `Tap` | Advance story steps and interact with 3D elements |
| **Audio Toggle** | `Bottom Right Button` | Toggle ambient soundtrack and interactive sound effects |

---

## 🛠️ Tech Stack & Architecture

- **Rendering Engine**: [Nanogl](https://github.com/makemepulse/nanogl) (Modular WebGL micro-framework)
- **Shaders & Deformers**: Custom GLSL (Blendshapes, Hatched Shadows, Alpha Masks, Noise Deformations)
- **Animation Engine**: [GSAP / TweenLite](https://greensock.com/) + Custom Bézier Easing curves
- **UI Architecture**: Reactive component framework & Custom Canvas overlay
- **Audio Pipeline**: Web Audio API with multi-track gain nodes & stem switching
- **Server**: Lightweight zero-dependency Node.js HTTP server supporting partial range streaming

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/akaAkshat246/Brawnsterdam.git
cd Brawnsterdam
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm start
```
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🌐 One-Click Deployment Options

<details>
<summary><b>Deploy to Vercel (Recommended)</b></summary>

```bash
# Using Vercel CLI
npx vercel
```
Or import your GitHub repository directly on the [Vercel Dashboard](https://vercel.com).
</details>

<details>
<summary><b>Deploy to GitHub Pages</b></summary>

1. Push this repository to GitHub.
2. In your repository on GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Branch**, choose `main` and `/ (root)`.
4. Click **Save**. Your site will be published at `https://akaAkshat246.github.io/Brawnsterdam/`.
</details>

<details>
<summary><b>Deploy to Netlify</b></summary>

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the project folder directly into the browser.
3. Your live URL is generated instantly.
</details>

---

## 📂 Project Structure

```
Brawnsterdam/
├── assets/
│   ├── adieu/              # Chapter 2 3D models, shaders & textures
│   ├── audio/              # Spatial soundscapes, voiceovers & stems
│   ├── common/             # Common WebGL textures, noise maps & LUTs
│   ├── eclosion/           # Chapter 1 flora models & deformer assets
│   ├── ending/             # Ending GLTF binary & geometry
│   ├── fonts/              # Gotham typography webfonts
│   ├── img/                # UI textures, icons, favicons & signature GIF
│   ├── premiere/           # Chapter 0 introduction models
│   ├── transitions/        # Scene transition GLB geometries
│   └── voyage/             # Chapter 3 flight & cloudscape assets
├── favicon.ico             # Multi-resolution favicon icon
├── favicon.png             # High-res favicon asset
├── index.html              # Main HTML entry point & OpenGraph metadata
├── main.css                # Style system, responsive rules & cursor layers
├── main.js                 # Compiled WebGL pipeline, chapters & UI logic
├── package.json            # Node project configuration
├── server.js               # Dev server with streaming audio & range support
└── README.md               # Interactive documentation
```

---

## 📬 Connect & Author

- **Author**: Akshat Vats
- **GitHub**: [@akaAkshat246](https://github.com/akaAkshat246/)
- **Email**: [akshatavs1122@gmail.com](mailto:akshatavs1122@gmail.com)
- **Instagram**: [@who_akshatvats](https://www.instagram.com/who_akshatvats/)

---

<p align="center">
  <b>Tribute to Brownsterdam</b><br>
  <i>Our return is inevitable.</i>
</p>

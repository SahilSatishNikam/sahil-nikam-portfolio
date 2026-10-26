# Sahil Nikam — Software Developer Portfolio

A modern, responsive React + Vite developer portfolio designed with a deep navy & electric blue palette, tailored for showcasing Java & Spring Boot backend engineering, projects, credentials, and experience.

## Tech Stack
- **Framework**: React 19 + Vite
- **Routing**: React Router DOM (Single Page Application with smooth hash navigation)
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS custom properties (with `@media (prefers-reduced-motion)` support)
- **Styling**: Vanilla CSS Design System with theme variables and responsive clamp typography

---

## Getting Started

### 1. Requirements
- Node.js 20+ or 22+
- npm

### 2. Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Build for production
```bash
npm run build
npm run preview
```
The production bundle is compiled into the `dist/` directory.

---

## Assets & Configuration

### Profile Photograph
- Stored at: `public/images/sahil-profile.jpg`
- Integrated on the right side of the hero section with an electric blue & violet frame.

### Resume Document
- Expected at: `public/resume/Sahil-Nikam-Resume.pdf`
- When placed in this directory, the **"Download Resume"** and **"View Resume"** buttons will directly serve this file.

### Personalizing Details (`src/data.js`)
Edit `src/data.js` to update:
1. **Email**: Replace `'YOUR_EMAIL@example.com'` with your verified professional email.
2. **Current Employer**: Update `experience[0].company` and dates if you wish to display specific employer credentials.
3. **Project Repositories**: Update `projects[].github` links with individual GitHub repo URLs when public.
4. **Availability Indicator**: Toggle `profile.isOpenToOpportunities` to `true` if you wish to display an active availability badge in the Hero section.

---

## Deployment

### Deploy on Vercel
1. Push this project to GitHub.
2. In Vercel, select **Import Project** and pick your repository.
3. Preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**.
*(Note: `vercel.json` is already included for SPA routing).*

### Deploy on Netlify
1. Push this project to GitHub.
2. In Netlify, choose **Add new site** > **Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**.
*(Note: `public/_redirects` is already included for SPA routing).*

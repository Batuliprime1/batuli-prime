# BATULI PRIME — Website

> **AI Stories · Digital Products · Online Training**
> Production-ready React website for Batuli Prime, Tanzania.

---

## 🗂 Project Structure

```
batuli-prime/
├── public/
│   ├── logo.svg           # SVG logo (loads instantly, no request)
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO crawl rules
│   ├── sitemap.xml        # SEO sitemap (update domain)
│   └── _redirects         # Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── EbookCover.jsx     # 3D CSS book mockup
│   │   ├── EbookModal.jsx     # Ebook purchase flow (WhatsApp)
│   │   ├── EnrollModal.jsx    # Course enrollment flow (WhatsApp)
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx           # Inline SVG logo component
│   │   ├── Navbar.jsx         # Sticky nav + mobile drawer
│   │   ├── Reveal.jsx         # Scroll reveal animation wrapper
│   │   ├── Toast.jsx          # Notification toast
│   │   └── WhatsAppButton.jsx # Floating WhatsApp CTA
│   ├── hooks/
│   │   └── useReveal.js       # IntersectionObserver hook
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Courses.jsx
│   │   ├── Ebook.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── utils/
│   │   ├── analytics.js   # GA4 event tracking helpers
│   │   └── constants.js   # Brand config, colors, pricing
│   ├── App.jsx            # Root + routing + modals
│   ├── index.css          # Global styles + animations
│   └── main.jsx           # React entry point
├── index.html             # SEO meta, GA4, fonts
├── package.json
├── vite.config.js
└── vercel.json            # Vercel routing + security headers
```

---

## ⚡ Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → Opens at http://localhost:3000

# 3. Build for production
npm run build
# → Output in /dist folder

# 4. Preview production build
npm run preview
```

---

## 🔧 Configuration (Do This First)

Open **`src/utils/constants.js`** and update:

```js
export const BRAND = {
  whatsapp: '255XXXXXXXXX',     // ← Your real WhatsApp number (no +)
  email:    'bcreative0111@gmail.com',
  amazon:   'https://www.amazon.com/your-book-url',  // ← Real Amazon URL
  youtube:  'https://www.youtube.com/@BCreativeAIStories',
  tiktok:   'https://www.tiktok.com/@_bcreative',
  instagram:'https://www.instagram.com/mtaa.stories',
}
```

Open **`index.html`** and replace Google Analytics ID:
```html
<!-- Replace G-XXXXXXXXXX with your real GA4 Measurement ID -->
<script async src="...?id=G-XXXXXXXXXX"></script>
gtag('config', 'G-XXXXXXXXXX', ...);
```

Open **`public/sitemap.xml`** and replace domain:
```xml
<loc>https://batuliprime.com/</loc>   ← replace with your domain
```

---

## 🚀 Deploy to Vercel (Recommended — Free)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial Batuli Prime website"
git remote add origin https://github.com/YOUR_USERNAME/batuli-prime.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to **https://vercel.com** and sign up (free)
2. Click **"New Project"**
3. Import your GitHub repository
4. Settings (auto-detected):
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"** — live in ~60 seconds ✅

### Step 3 — Custom Domain (Optional)
1. In Vercel dashboard → **Settings → Domains**
2. Add `batuliprime.com`
3. Update your domain DNS:
   ```
   A Record:    @    →  76.76.19.61
   CNAME:       www  →  cname.vercel-dns.com
   ```

---

## 🌐 Deploy to Netlify (Alternative — Also Free)

### Option A — Drag & Drop (fastest)
1. Run `npm run build`
2. Go to **https://app.netlify.com**
3. Drag the `dist/` folder onto the page
4. Live instantly! ✅

### Option B — Git Deploy (auto-updates)
1. Push code to GitHub
2. Go to **Netlify → "Add new site" → "Import an existing project"**
3. Connect GitHub → select repo
4. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy site"**

### Custom Domain on Netlify
1. Site Settings → Domain Management → Add custom domain
2. Update DNS to point to Netlify's servers

---

## 📊 Google Analytics Setup

1. Go to **https://analytics.google.com**
2. Create a new GA4 property
3. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Replace `G-XXXXXXXXXX` in `index.html` (appears twice)
5. Deploy — traffic tracked automatically

**Events already tracked:**
- Page views (every navigation)
- Ebook buy intent clicks
- Course enrollment clicks
- WhatsApp button clicks (floating + contact page)
- Contact form submissions
- Service inquiry clicks

---

## 💳 Payment Flow

The website uses a **WhatsApp-based payment flow** (no payment gateway needed):

**Ebook:** Customer fills name + phone → WhatsApp opens with pre-filled order → You send M-Pesa number → Customer pays → You send PDF

**Courses:** Customer fills name + phone → WhatsApp opens with enrollment request → You confirm and collect payment

**To add M-Pesa direct integration later:** Use the Selcom or Azampay API (Tanzania payment gateways).

---

## 🎨 Customization

### Change colors
Edit `src/utils/constants.js` → `COLORS` object

### Change prices
Edit `src/utils/constants.js` → `COURSES` array and `EBOOK` object

### Add/remove services
Edit `src/pages/Services.jsx` → `SERVICES` array

### Change testimonials
Edit `src/pages/Home.jsx` → `TESTIMONIALS` array

---

## 📱 Performance Features

- ✅ Mobile-first responsive design
- ✅ Lazy scroll animations (IntersectionObserver)
- ✅ Preconnect to Google Fonts
- ✅ Code splitting (vendor chunk separate)
- ✅ Minified production build (Terser)
- ✅ PWA manifest (installable on mobile)
- ✅ Security headers via vercel.json
- ✅ robots.txt + sitemap.xml for SEO
- ✅ JSON-LD structured data
- ✅ Open Graph + Twitter Card meta tags
- ✅ Keyboard accessible (focus-visible)
- ✅ Reduced motion support
- ✅ ARIA labels on all interactive elements

---

## 📞 Support

**Batuli Prime**
📧 bcreative0111@gmail.com
📺 @BCreativeAIStories
📍 Tanzania, East Africa

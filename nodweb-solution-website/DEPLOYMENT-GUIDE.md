# 🚀 Pre-Deployment Updates Required

**Status:** Ready for deployment - Update domain URLs before going live

---

## ⚠️ MUST UPDATE BEFORE DEPLOYMENT

### **1. Domain URL Updates**

Once you purchase your domain, replace `https://nodwebsolution.com/` with your actual domain in these files:

#### **File 1: `/public/sitemap.xml`**
Replace all 5 instances:
```xml
<loc>https://nodwebsolution.com/</loc>
<loc>https://nodwebsolution.com/about</loc>
<loc>https://nodwebsolution.com/services</loc>
<loc>https://nodwebsolution.com/career</loc>
<loc>https://nodwebsolution.com/contact</loc>
```
With your domain:
```xml
<loc>https://YOUR-DOMAIN.com/</loc>
<loc>https://YOUR-DOMAIN.com/about</loc>
<loc>https://YOUR-DOMAIN.com/services</loc>
<loc>https://YOUR-DOMAIN.com/career</loc>
<loc>https://YOUR-DOMAIN.com/contact</loc>
```

#### **File 2: `/public/robots.txt`**
Replace:
```
Sitemap: https://nodwebsolution.com/sitemap.xml
```
With:
```
Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
```

#### **File 3: `/src/components/SEO.jsx`** (Line 11)
Replace:
```jsx
const canonicalUrl = `https://nodwebsolution.com${url}`;
```
With:
```jsx
const canonicalUrl = `https://YOUR-DOMAIN.com${url}`;
```

#### **File 4: `/src/components/StructuredData.jsx`** (Lines 8, 10, 36, 38, 74, 77)
Replace all 6 instances of `https://nodwebsolution.com` with `https://YOUR-DOMAIN.com`

#### **File 5: `/index.html`** (Lines 18 & 26)
Replace:
```html
<meta property="og:url" content="https://nodwebsolution.com/" />
<meta property="twitter:url" content="https://nodwebsolution.com/" />
```
With:
```html
<meta property="og:url" content="https://YOUR-DOMAIN.com/" />
<meta property="twitter:url" content="https://YOUR-DOMAIN.com/" />
```

---

### **2. Environment Variables**

Add these in your hosting platform (Vercel/Netlify):

```
VITE_EMAILJS_SERVICE_ID=service_t0vmcrn
VITE_EMAILJS_TEMPLATE_ID=template_dcnmd2j
VITE_EMAILJS_PUBLIC_KEY=WX3mmriQKbLHz_y6u
```

---

## ✅ That's It!

After updating the domain URLs in these 5 files and adding environment variables to your hosting, your website is ready to deploy.

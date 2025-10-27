# MR Flashing (Web PWA) — v2
Features:
- Draw profile → save as template
- Dimensions & attributes: length (mm), colour, gauge, qty, notes
- Supplier address book (+ set default supplier)
- Pricing (base $/m with gauge factor)
- Email order and **Export PDF** (jsPDF)
- State persists on device

## One-tap deploy on iPad (Vercel)
1) Unzip this folder.
2) Go to vercel.com/new → **Import** → **Drag & Drop** this folder.
3) Click **Deploy**. (No env vars needed)
4) Open the URL on your iPad in Safari → Share → **Add to Home Screen**.

## Local dev
```bash
npm install
npm run dev
```
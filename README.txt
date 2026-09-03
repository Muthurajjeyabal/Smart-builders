சைட் கணக்கு (SiteKanakku) — MVP
================================
தனி சிவில் இன்ஜினியர் · பல building projects · owner பணம் + daily expense +
supplier பாக்கி + worker attendance/advance + cash flow + estimated profit.

DEMO LOGIN
  Phone: 9876543210
  PIN:   1234
  Projects: 3BHK Anna Nagar, 4BHK Velachery

இந்த ZIP-ல் உள்ளது
  index.html   — app
  styles.css
  app.js
  api.php      — PHP hosting-ல் data server-ல் save
  data/        — db.json இங்கே உருவாகும்
  README.txt

வழி 1 — உடனே பார்க்க (computer)
  index.html-ஐ browser-ல் திறக்கவும்.
  Data இந்த computer-லேயே save ஆகும்.

வழி 2 — லைவ் போட (PHP hosting: Hostinger, GoDaddy, InfinityFree)
  1. cPanel File Manager அல்லது FTP திறக்கவும்
  2. public_html (அல்லது subdomain folder) உள்ளே இந்த folder files-ஐ extract செய்யவும்
  3. data folder-க்கு write permission கொடுக்கவும் (755 அல்லது 775)
  4. https://yourdomain.com  திறக்கவும்
  api.php இருந்தால் phone + laptop இரண்டிலும் same accounts தெரியும்.

வழி 3 — Netlify / GitHub Pages (PHP இல்லை)
  folder-ஐ drag & drop upload.
  Data ஒவ்வொரு phone-லும் தனி. Reports பக்கத்தில் JSON backup எடுத்து வைக்கவும்.

முதல் வாடிக்கையாளருக்கு
  Settings/மேலும் → புதிய project — உங்கள் 2 running sites-ஐ உருவாக்கவும்
  Demo reset செய்து காலி செய்து உண்மை entries போடலாம்
  அல்லது demo numbers-ஐ மாற்றிப் பயன்படுத்தலாம்

கணக்கு
  Owner பாக்கி     = Sale value − received
  Expense total    = qty × rate
  Expense பாக்கி   = total − paid
  Supplier பாக்கி  = purchases − payments
  Weekly worker    = present இருந்த weeks × weekly wage − advance − paid
  Daily worker     = present days × daily wage − advance − paid
  Cash balance     = owner received − (material paid + extra supplier paid + worker paid + other paid)
  Estimated profit = Sale value − (material bills + worker earned + other expenses)

10 இன்ஜினியருக்கு விற்க
  இப்போது 1 demo user. api.php + db.json-ல் users array-ல் புதிய phone/PIN/tenant சேர்க்கலாம்.
  முழு SaaS signup/payment அடுத்த version.

Phase 2 (இந்த MVP-ல் இல்லை)
  Photo bill, PDF statement, WhatsApp, GST/TDS, Play Store app

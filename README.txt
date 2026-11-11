KNOWKEFF STUDIOS — PWA INSTALLABLE

1. Extract the ZIP. Upload the CONTENTS of this folder (index.html, sw.js, manifest.webmanifest and icons/) to your Cloudflare Pages or Netlify site. Keep file structure intact.
2. Serve over HTTPS (Cloudflare Pages and Netlify provide it).
3. Android Chrome: visit the site, use the "Instalar KnowKeff" button when offered, or browser menu > Install app.
4. iPhone Safari: Share > Add to Home Screen > Add. iOS may not display the install button.
5. Desktop Chrome/Edge: use the browser's install option when available.
6. The interface shell can open offline after first successful visit; movies require an internet connection and working video URLs. PWA packaging DOES NOT configure Cloudflare Stream. The Cloudflare Stream video embed/URL must be integrated separately.
7. To test locally use a localhost HTTP server, not file://. Example: python -m http.server 8000 and visit http://localhost:8000.
8. The PWA is not automatically listed on Google Play or Apple App Store.

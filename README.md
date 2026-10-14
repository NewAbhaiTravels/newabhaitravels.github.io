# New Abhai Travels

Website for New Abhai Travels, Kanpur: cars, tempo travellers and buses on rent, with a driver. A single-page site plus five legal pages. Plain HTML, CSS and JavaScript, with no build step and no backend. Bookings happen through a call, WhatsApp or email, never through online payment.

## Folder structure

```
new-abhai-travels/
├── index.html                        Main site: hero, fleet, steps to book, about, testimonials & FAQ, feedback, contact
├── privacy-policy.html
├── terms-and-conditions.html
├── cancellation-refund-policy.html
├── disclaimer.html
├── grievance-redressal.html
├── README.md
├── .gitignore
├── tailwind.config.js                Tailwind settings (only used when rebuilding the CSS)
└── assets/
    ├── css/
    │   ├── tailwind.css              Pre-built styles loaded by every page
    │   └── tailwind.input.css        Source for rebuilding tailwind.css
    ├── icons/                        Favicon and home-screen icons
    ├── images/
    │   ├── hero.jpg                  Hero background
    │   ├── logo.png                  Logo for light backgrounds
    │   ├── logo-white.png            Logo for dark backgrounds
    │   ├── qr-code.png               QR code for the review form (Feedback section)
    │   ├── office/                   Office photos (About section)
    │   └── fleet/                    One folder per vehicle
    │       ├── innova-crysta/  dzire/  wagonr/  ertiga/  fortuner/  xuv300/
    │       ├── tempo-traveller-17/  tempo-traveller-21/  tempo-traveller-26/
    │       └── bus/
    └── videos/                       Customer video reviews (.mp4) and their poster images
```

## Viewing it locally

Serve the folder with any static file server and open `http://localhost:8000`. For example:

```bash
python3 -m http.server 8000
```

## Publishing (GitHub Pages)

1. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select the `main` branch and the `/ (root)` folder.
2. After a minute or two the site is live at `https://newabhaitravels.github.io`. That short address works because the repository is named `newabhaitravels.github.io`, matching the account name.
3. To use a custom domain, enter it under **Settings → Pages → Custom domain** and add the DNS records GitHub shows you at the domain registrar.

## Common edits

**Contact details.** The phone number, WhatsApp number and email appear on every page. Search all `.html` files for these and replace each format:
- `918090202020` (WhatsApp and `tel:` links)
- `80902 02020` (displayed number)
- `newabhaitravels@yahoo.co.in`

**Adding or changing a vehicle.**
1. Put its photos in a new folder under `assets/images/fleet/`, named in lowercase with hyphens (e.g. `innova-hycross/`).
2. Add an entry to `carData` or `busData` in the `<script>` near the bottom of `index.html`.
3. The first path in `images` is the fleet-card thumbnail. The rest fill the photo gallery in the vehicle's popup.

**Adding a video review.** Add the `.mp4` and a poster `.jpg` to `assets/videos/`. Then add a button in the Testimonials section and a matching entry in `testimonialVideos` in `index.html`.

## Editing the design

The site's styling comes from a pre-built file, `assets/css/tailwind.css`. It contains only the Tailwind classes the pages use today.

- **No rebuild needed** for changes to text, phone numbers, photos, or new vehicles and reviews that reuse existing styles.
- **Rebuild needed** after adding a Tailwind class used nowhere else on the site (a new colour, size or spacing). Until you rebuild, that class has no effect.

To rebuild (needs [Node.js](https://nodejs.org/)), run this from the project folder:

```bash
npx tailwindcss@3.4.17 -c tailwind.config.js -i assets/css/tailwind.input.css -o assets/css/tailwind.css --minify
```

Colours and fonts are set in `tailwind.config.js`.

## Security notes

- **Content Security Policy.** Every page has a `Content-Security-Policy` meta tag near the top of `<head>`. It only lets the page load files from this site, Google Fonts and jsDelivr. If you add something from another site (a Google Maps embed, a YouTube video, analytics) and it doesn't show up, add that site's address to the matching rule in this tag on every page.
- **Icon files are integrity-checked.** The two Phosphor Icons stylesheets carry `integrity` hashes, so the browser refuses them if they've been changed. If you change the icon version in the URL, update the hashes too ([jsDelivr](https://www.jsdelivr.com/package/npm/@phosphor-icons/web) lists them).
- **No secrets in this repository.** It's public, so never commit passwords, API keys or private documents.

## Image guidelines

Keep the site fast on mobile data:
- Fleet photos: JPG, at most 1200px wide, ideally under 150 KB each.
- Office photos: at most 1000px on the longest side.
- Videos: `.mp4` (H.264), not `.mov`. Under 25 MB each so they can be uploaded through GitHub's website.

## Tech

- [Tailwind CSS](https://tailwindcss.com/) v3.4.17, pre-built into `assets/css/tailwind.css`
- [Phosphor Icons](https://phosphoricons.com/) v2.1.2 (regular and fill styles from jsDelivr, integrity-checked)
- Google Fonts: Syne (headings) and Inter (body text)
- Plain JavaScript, no framework

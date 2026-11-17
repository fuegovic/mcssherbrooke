# My Canadian Stock - Sherbrooke

Welcome to the My Canadian Stock - Sherbrooke project! This web application serves as an online presence for our retail store located in Sherbrooke, Canada. The project is designed to provide users with essential information about our store, including operating hours, contact details, and location.

## Project Structure

The project is organized as follows:

```
my-canadian-stock-sherbrooke
├── src
│   ├── assets/             # Store photo, brand mark, and social icons
│   ├── index.html          # Static storefront, bilingual content, and interactions
│   ├── robots.txt
│   ├── sitemap.xml
│   └── styles/main.css     # Responsive page styles
└── README.md               # Project documentation
```

## Features

- **Bilingual Support**: The website supports both English and French languages, allowing users to switch between them seamlessly.
- **Store Schedule**: Users can view the operating hours of the store.
- **Contact Information**: Easy access to the store's phone number and email address.
- **Location Map**: An interactive map showing the store's location.
- **Social Media Links**: Direct links to our Instagram and Facebook pages for updates and promotions.

## Local Development

No package installation or build step is needed. From the project root, start a local preview server:

```powershell
python -m http.server 8000 --directory src
```

Then open `http://localhost:8000`. Tailwind CSS, Google Fonts, and the embedded map load from external services.

The storefront is static. Its bilingual copy and interactions live in `src/index.html`, with local style overrides in `src/styles/main.css`. Tailwind CSS and Google Fonts load from their CDNs. No production build step is required; Cloudflare Pages serves `src/` directly.

## Publish With Cloudflare Pages

The site is hosted on Cloudflare Pages, connected directly to this GitHub repository, at:

```text
https://mcssherbrooke.ca
```

### 1. Project setup

The Cloudflare Pages project (`mcssherbrooke`) is connected to `fuegovic/mcssherbrooke` on GitHub with these build settings:

```text
Build command:  (default)
Path:           /src
```

No Dockerfile, container, or separate build step is needed — Cloudflare serves the contents of `src/` directly.

### 2. Custom domain

`mcssherbrooke.ca` is registered as a Cloudflare zone and attached directly in the Pages project's **Custom domains** settings. Since the domain and the Pages project are in the same Cloudflare account, DNS records and the TLS certificate are managed automatically — no manual CNAME/A records or DNS-only toggling required.

### 3. Update the live site

Push to `main` and Cloudflare Pages rebuilds and republishes automatically:

```powershell
git add .
git commit -m "Update website"
git push
```

Check the deployment status and logs in the Cloudflare dashboard under the `mcssherbrooke` Pages project.
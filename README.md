# My Canadian Stock - Sherbrooke

Welcome to the My Canadian Stock - Sherbrooke project! This web application serves as an online presence for our retail store located in Sherbrooke, Canada. The project is designed to provide users with essential information about our store, including operating hours, contact details, and location.

## Project Structure

The project is organized as follows:

```
my-canadian-stock-sherbrooke
├── src
│   ├── index.html          # Main HTML file for the website
│   ├── styles              # Directory for CSS styles
│   │   └── main.css        # Main stylesheet
│   ├── scripts             # Directory for JavaScript files
│   │   ├── main.js         # Main JavaScript file
│   │   └── map.js          # JavaScript for map integration
│   ├── locales             # Directory for localization files
│   │   ├── en.json         # English translations
│   │   └── fr.json         # French translations
│   ├── components          # Directory for React components
│   │   ├── Header.js       # Header component
│   │   ├── Footer.js       # Footer component
│   │   ├── Schedule.js     # Schedule component
│   │   ├── ContactInfo.js   # Contact information component
│   │   ├── SocialLinks.js   # Social media links component
│   │   └── MapView.js      # Map view component
│   └── assets              # Directory for assets
│       └── icons           # Icons used in the website
├── package.json            # NPM configuration file
└── README.md               # Project documentation
```

## Features

- **Bilingual Support**: The website supports both English and French languages, allowing users to switch between them seamlessly.
- **Store Schedule**: Users can view the operating hours of the store.
- **Contact Information**: Easy access to the store's phone number and email address.
- **Location Map**: An interactive map showing the store's location.
- **Social Media Links**: Direct links to our Instagram and Facebook pages for updates and promotions.

## Local Development

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-canadian-stock-sherbrooke
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit the URL shown by Live Server to view the application.

The site is static, but it must be served through a web server because the page loads the English and French locale files with `fetch()`.

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
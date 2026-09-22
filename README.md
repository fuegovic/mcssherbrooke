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
├── Dockerfile              # Production Nginx image
├── docker-compose.yml      # Portainer deployment definition
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

## Publish With Docker and Cloudflare Tunnel

The production setup uses the included Nginx image and your existing Cloudflare Tunnel. The container serves the `src` folder on port `8085` on the home server.

### 1. Build and start the website

Run these commands from the project folder:

```powershell
docker build -t my-canadian-stock .
docker rm -f my-canadian-stock 2>$null
docker run -d --name my-canadian-stock --restart unless-stopped -p 8085:80 my-canadian-stock
```

Test it from the home server before exposing it publicly:

```text
http://localhost:8085
```

### 2. Add the Cloudflare Tunnel route

In Cloudflare Zero Trust:

1. Open **Networks > Tunnels** and select the tunnel used by your home server.
2. Add a **Published application** route.
3. Set the hostname to `mcs.fuegovic.com`.
4. Set the service type to `HTTP`.
5. Set the service URL to `http://localhost:8085`.
6. Save the route and wait for the tunnel configuration to apply.

If `cloudflared` runs in its own Docker network instead of directly on the host, use the website container or service name as the target instead, for example `http://my-canadian-stock:80`, and make sure both containers share a Docker network.

### 3. Verify the public site

Open [mcs.fuegovic.com](https://mcs.fuegovic.com) and check:

- The page loads over HTTPS.
- The MCS favicon appears in the browser tab.
- The FR/EN switch works.
- The light/dark button works.
- The map, phone, Instagram, and Facebook links work.
- The page works on a phone-sized screen.

### Updating the published site

After changing the HTML, CSS, JavaScript, locale files, or assets, rebuild the image and recreate the container. The existing Cloudflare Tunnel route stays the same.

Run these commands from the project folder:

```powershell
# Build a fresh image with the latest files
docker build -t my-canadian-stock .

# Remove the old running container
docker rm -f my-canadian-stock

# Start the updated container
docker run -d --name my-canadian-stock --restart unless-stopped -p 8085:80 my-canadian-stock
```

The `docker rm -f` command stops and removes the old container. It does not delete your image, project files, or Cloudflare configuration.

Verify the update on the home server first:

```powershell
docker ps
curl http://localhost:8085
```

Then open [mcs.fuegovic.com](https://mcs.fuegovic.com) in a browser. A hard refresh may be needed if the browser has cached an older stylesheet or image.

## Deploy From GitHub With Portainer

Portainer can pull this repository and build the Docker image on the home server, so you do not need to rebuild it manually on your workstation.

### 1. Put the project on GitHub

Create a new GitHub repository, then run these commands from the project folder. Replace the URL with your repository URL:

```powershell
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-canadian-stock-sherbrooke.git
git push -u origin main
```

Do not commit passwords, Cloudflare tokens, or other secrets to this repository.

For later website changes:

```powershell
git add .
git commit -m "Update website"
git push
```

### 2. Create a Portainer Stack from Git

In Portainer on the home server:

1. Open **Stacks** and select **Add stack**.
2. Give it a name such as `my-canadian-stock`.
3. Select **Git repository** as the build method.
4. Enter the GitHub repository URL.
5. Set the branch to `main`.
6. Set the Compose path to `docker-compose.yml`.
7. Deploy the stack.

Portainer will read `docker-compose.yml`, build the included `Dockerfile`, and run the site on port `8085`.

### 3. Point Cloudflare Tunnel to Portainer

Keep the Cloudflare Published application route set to:

```text
Hostname: mcs.fuegovic.com
Service:  http://localhost:8085
```

If `cloudflared` is running in Docker, use a shared Docker network and point it to:

```text
http://my-canadian-stock:80
```

### 4. Update from GitHub

After pushing a change to GitHub, open the Portainer stack and choose **Pull and redeploy** or **Update the stack**, depending on your Portainer version. Enable **Re-pull image and redeploy** if shown. Portainer will pull the latest files, rebuild the image, and replace the running container while keeping the same port and Cloudflare route.

## Contributing

We welcome contributions to improve the project. Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Thank you for checking out My Canadian Stock - Sherbrooke! We hope you enjoy your experience.
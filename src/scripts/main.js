document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const themeSwitcher = document.getElementById('theme-switcher');
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let language = 'en';
    let content;

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('mcs-theme');
    const setTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        const isDark = theme === 'dark';
        themeSwitcher.textContent = isDark ? '☀' : '☾';
        themeSwitcher.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        themeSwitcher.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    };

    setTheme(savedTheme || (systemTheme.matches ? 'dark' : 'light'));
    if (!savedTheme) {
        systemTheme.addEventListener('change', (event) => setTheme(event.matches ? 'dark' : 'light'));
    }

    themeSwitcher.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('mcs-theme', nextTheme);
        setTheme(nextTheme);
    });

    const labels = {
        en: { days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], phone: 'Phone', call: 'Call', email: 'Email', address: 'Address', directions: 'Get directions', follow: 'Follow us', map: 'Open in Google Maps' },
        fr: { days: ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'], phone: 'Téléphone', call: 'Appeler', email: 'Courriel', address: 'Adresse', directions: 'Itinéraire', follow: 'Suivez-nous', map: 'Ouvrir dans Google Maps' }
    };

    const render = () => {
        const label = labels[language];
        document.documentElement.lang = language;
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const value = content.ui?.[element.dataset.i18n];
            if (value) element.textContent = value;
        });
        document.getElementById('about-content').innerHTML = content.about.cards.map((card) => `<article class="about-card"><h3>${card.title}</h3><p>${card.body}</p>${card.items ? `<ul>${card.items.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}</article>`).join('');
        document.getElementById('schedule').innerHTML = days.map((day, index) =>
            `<div class="hours-row"><span>${label.days[index]}</span><strong>${content.schedule[day]}</strong></div>`).join('');
        const emailLink = content.contact.email ? `<a href="mailto:${content.contact.email}">✉ ${content.contact.email}</a>` : '';
        const addressQuery = encodeURIComponent(`${content.address.street}, ${content.address.city}, ${content.address.province} ${content.address.postalCode}`);
        document.getElementById('contact-info').innerHTML = `<strong>${label.address}</strong><span>${content.address.street}<br>${content.address.city}, ${content.address.province}<br>${content.address.postalCode}, Canada</span><a class="action-button" href="tel:${content.contact.phone.replace(/[^+\d]/g, '')}">☎ ${label.call} · ${content.contact.phone}</a><a class="action-button secondary-action" href="https://www.google.com/maps/dir/?api=1&destination=${addressQuery}" target="_blank" rel="noopener">↗ ${label.directions}</a>${emailLink}`;
        document.getElementById('social-links').innerHTML = `<strong>${label.follow}</strong><a class="social-link" href="${content.socialMedia.instagram}" target="_blank" rel="noopener"><img class="social-icon" src="assets/Instagram_logo_2022.svg.webp" alt="" aria-hidden="true" />Instagram ↗</a><a class="social-link" href="${content.socialMedia.facebook}" target="_blank" rel="noopener"><img class="social-icon" src="assets/2023_Facebook_icon.svg.webp" alt="" aria-hidden="true" />Facebook ↗</a>`;
        const query = encodeURIComponent(`${content.address.street}, ${content.address.city}, ${content.address.province}`);
        document.getElementById('map-view').innerHTML = `<iframe title="${content.storeName}" src="https://www.google.com/maps?q=${query}&output=embed" loading="lazy"></iframe><div class="map-address">${content.address.street}, ${content.address.city}, ${content.address.province} ${content.address.postalCode} · <a href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noopener">${label.map} ↗</a></div>`;
        languageSwitcher.textContent = language === 'en' ? 'FR' : 'EN';
    };

    const loadContent = async () => {
        const response = await fetch(`./locales/${language}.json`);
        content = await response.json();
        render();
    };

    languageSwitcher.addEventListener('click', async () => {
        language = language === 'en' ? 'fr' : 'en';
        await loadContent();
    });
    document.getElementById('year').textContent = new Date().getFullYear();
    loadContent().catch(() => {
        document.getElementById('schedule').textContent = 'Please run this site with Live Server to load store details.';
    });
});
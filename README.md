# UniSynthe — Landing Site

Minimal SaaS landing page for UniSynthe (unisynthe.com).

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview   # preview production build locally
```

Output in `dist/`.

## Deploy

### Option A: Vercel (recommended for static)

1. Push to GitHub
2. Import repo at vercel.com/new
3. Framework: Vite, output: `dist`
4. Set custom domain: unisynthe.com

### Option B: Netlify

1. Push to GitHub
2. Import at app.netlify.com
3. Build command: `npm run build`, publish dir: `dist`
4. Set custom domain: unisynthe.com

### Option C: Existing VPS (mario.team server)

1. Clone repo on VPS:
   ```bash
   cd ~
   git clone <repo-url> unisynthe
   cd unisynthe && npm ci && npx vite build
   ```

2. Add Nginx server block (`/etc/nginx/sites-available/unisynthe`):
   ```nginx
   server {
       listen 80;
       server_name unisynthe.com www.unisynthe.com;
       root /home/ubuntu/unisynthe/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. Enable and get SSL:
   ```bash
   sudo ln -s /etc/nginx/sites-available/unisynthe /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   sudo certbot --nginx -d unisynthe.com -d www.unisynthe.com
   ```

4. Point DNS A records to 44.227.57.43

## Formspree

Replace `YOUR_FORM_ID` in `src/components/ContactForm.tsx` with your actual Formspree form ID from https://formspree.io

## Email Setup (unisynthe.com)

To receive email at support@unisynthe.com, add MX records.
See project notes for provider options (Zoho, ImprovMX, Cloudflare Email Routing).

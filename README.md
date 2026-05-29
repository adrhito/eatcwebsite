# Engineering at Carolina Website

Official website for Engineering at Carolina (EaC), a student organization at UNC-Chapel Hill.

## Live Site

🔗 **Production:** [https://eac-website-tau.vercel.app](https://eac-website-tau.vercel.app)

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) with App Router
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **3D Graphics:** Three.js with React Three Fiber & Drei
- **Deployment:** Vercel
- **Language:** TypeScript

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── page.tsx      # Home page
│   ├── accelerator/  # Accelerator program page
│   ├── eweek/        # E-Week page
│   └── recruitment/  # Recruitment page
├── components/       # React components
└── public/          # Static assets
```

## Deployment

This site is configured for static export and automatically deploys to Vercel on every push to the main branch.

### Manual Deployment

```bash
vercel --prod
```

### Build Locally

```bash
npm run build
```

The static site will be exported to the `out/` directory.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test locally with `npm run dev`
4. Push to GitHub - Vercel will automatically deploy a preview
5. Create a pull request

## Links

- **Live Site:** https://eac-website-tau.vercel.app
- **Vercel Dashboard:** https://vercel.com/adrhitos-projects/eac-website
- **GitHub Repository:** https://github.com/adrhito/eatcwebsite

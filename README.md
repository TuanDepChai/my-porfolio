<<<<<<< HEAD
# my-porfolio
=======
# Professional Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. This portfolio is designed to showcase personal information, work experience, projects, awards, and contact details in an elegant and professional manner.

## Features

- Responsive design that works on all devices
- Clean and modern UI with smooth animations
- Timeline-based work experience section
- Project showcase with links to GitHub repositories and live demos
- Awards and activities section
- Contact information with social links
- Smooth scrolling navigation

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

To personalize this portfolio:

1. Update the personal information in `src/components/About.tsx`
2. Modify work experience in `src/components/Experience.tsx`
3. Add your projects in `src/components/Projects.tsx`
4. Update awards and activities in `src/components/Awards.tsx`
5. Change contact information in `src/components/Contact.tsx`
6. Replace the placeholder image URLs with your own images

## Deployment

This portfolio can be easily deployed to GitHub Pages:

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add the following to your `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio-website",
"scripts": {
  // other scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy the site:
```bash
npm run deploy
```

## License

This project is open source and available under the [MIT License](LICENSE).
>>>>>>> 8a2c8a5 (Add new files)

# Adam Bacchus Resume Website

A professional resume website with PDF download functionality, built with React and Vite.

## Features

- Clean, professional resume layout
- Responsive design for all devices
- PDF download functionality
- Print-optimized styling

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment

This project can be deployed to Vercel, Netlify, or any static hosting service.

### Vercel Deployment

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

The site will be available at `your-username.vercel.app` or your custom domain.

## PDF Generation

The PDF download uses html2canvas and jsPDF to convert the resume HTML to PDF format. The generated PDF maintains the styling and layout of the web version.


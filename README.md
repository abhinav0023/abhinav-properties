# Green Acres Realty - Real Estate Landing Page

A modern, responsive single-page landing page for a real estate business specializing in lands and plots in India.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with earthy color scheme
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Functional form with console logging (ready for backend integration)
- **SEO Optimized**: Proper meta tags, alt text, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation support
- **Performance**: Optimized images and fast loading

## Sections

1. **Hero Section**: Full-width background with call-to-action
2. **About Section**: Business description with key statistics
3. **Gallery Section**: Property showcase with hover effects
4. **Contact Section**: Contact form, details, and embedded map
5. **Footer**: Links and copyright information

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Images**: Next.js Image component with optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project files
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Images
Replace placeholder images with actual property photos:
- Hero background: High-quality landscape/property image
- Gallery images: 6 property photos (400x300px recommended)
- Optimize images for web before uploading

### Content
Update the following in `app/page.tsx`:
- Business name and tagline
- About section text
- Property locations and types
- Contact information
- Social media links

### Colors
Modify the color scheme in `app/globals.css`:
- Primary: Emerald green tones
- Secondary: Stone/brown tones
- Accent: Beige/neutral tones

### Contact Form
The form currently logs to console. To integrate with a backend:
1. Replace the `handleSubmit` function
2. Add API endpoint for form submission
3. Implement email notifications or database storage

## Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
\`\`\`bash
npm run build
\`\`\`

The `out` folder contains the static files for deployment.

## SEO Optimization

The page includes:
- Descriptive title and meta description
- Open Graph tags for social sharing
- Structured data markup ready
- Alt text for all images
- Semantic HTML structure

## Performance Features

- Next.js Image optimization
- Lazy loading for images
- Minimal JavaScript bundle
- CSS optimization
- Fast loading animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for Green Acres Realty. Modify as needed for your business requirements.

## Support

For customization or technical support, please refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- shadcn/ui documentation: https://ui.shadcn.com

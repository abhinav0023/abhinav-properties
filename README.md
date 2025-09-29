<<<<<<< HEAD
# Abhinav Properties - Real Estate Website

A modern, responsive real estate website built with React.js and vanilla CSS. This website showcases premium properties in Hyderabad and provides a professional platform for property listings and client inquiries.

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with elegant typography and consistent color scheme
- **Property Listings**: Dynamic property grid with filtering capabilities
- **Contact Form**: Functional contact form with client-side validation
- **Navigation**: Sticky navbar with mobile hamburger menu
- **SEO Friendly**: Semantic HTML structure and proper meta tags

## Tech Stack

- **Frontend**: React.js 18.2.0
- **Routing**: React Router DOM 6.8.0
- **Styling**: Vanilla CSS (no external UI libraries)
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages ready

## Project Structure

\`\`\`
abhinav-properties/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PropertyCard.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Properties.tsx
│   │   └── Contact.tsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── navbar.css
│   │   ├── footer.css
│   │   ├── home.css
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── properties.css
│   │   └── property-card.css
│   ├── data/
│   │   └── properties.json
│   └── App.tsx
├── package.json
└── README.md
\`\`\`

## Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/abhinav-properties.git
   cd abhinav-properties
   \`\`\`

2. **Install dependencies**
=======
Abhinav Properties 

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
>>>>>>> b56d4fc3fdc50b300541215be91d39f2915e5f26
   \`\`\`bash
   npm install
   \`\`\`

<<<<<<< HEAD
3. **Start development server**
   \`\`\`bash
   npm start
   \`\`\`
   The application will open at `http://localhost:3000`

4. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

## Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Repository created on GitHub
- Custom domain `abhinavproperties.com` (optional)

### Deployment Steps

1. **Install gh-pages package** (already included in package.json)
   \`\`\`bash
   npm install --save-dev gh-pages
   \`\`\`

2. **Update package.json homepage field**
   \`\`\`json
   {
     "homepage": "https://yourusername.github.io/abhinav-properties"
   }
   \`\`\`
   Replace `yourusername` with your GitHub username.

3. **Deploy to GitHub Pages**
   \`\`\`bash
   npm run deploy
   \`\`\`

4. **Enable GitHub Pages in repository settings**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click Save

### Custom Domain Setup (abhinavproperties.com)

1. **Add CNAME file**
   Create a file named `CNAME` in the `public` folder with your domain:
   \`\`\`
   abhinavproperties.com
   \`\`\`

2. **Configure DNS settings**
   In your domain registrar's DNS settings, add these records:
   \`\`\`
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   \`\`\`

3. **Update package.json homepage**
   \`\`\`json
   {
     "homepage": "https://abhinavproperties.com"
   }
   \`\`\`

4. **Deploy again**
   \`\`\`bash
   npm run deploy
   \`\`\`

5. **Configure custom domain in GitHub**
   - Go to repository Settings > Pages
   - Enter your custom domain: `abhinavproperties.com`
   - Enable "Enforce HTTPS"

## Features Overview

### Home Page
- Hero section with call-to-action buttons
- Features section highlighting company strengths
- Featured properties preview
- Call-to-action section

### Properties Page
- Property filtering by type and price range
- Responsive property grid
- Property cards with detailed information
- Dynamic property loading from JSON data

### About Page
- Company story and background
- Mission and vision statements
- Core values section
- Team member profiles
- Company statistics

### Contact Page
- Contact form with validation
- Multiple contact methods
- Business hours information
- Success message handling

## Customization

### Adding New Properties
Edit `src/data/properties.json` to add or modify property listings:

\`\`\`json
{
  "id": 7,
  "title": "New Property Title",
  "price": "₹X.X Crores",
  "location": "Location, Hyderabad",
  "image": "/path/to/image.jpg",
  "bedrooms": 3,
  "bathrooms": 2,
  "area": "XXXX sq ft",
  "type": "Villa"
}
\`\`\`

### Styling Customization
- Global styles: `src/styles/global.css`
- Component-specific styles: Individual CSS files in `src/styles/`
- Color scheme: Update CSS custom properties in global.css

### Content Updates
- Company information: Update content in `src/pages/About.tsx`
- Contact details: Update information in `src/components/Footer.tsx` and `src/pages/Contact.tsx`
=======
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
>>>>>>> b56d4fc3fdc50b300541215be91d39f2915e5f26

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

<<<<<<< HEAD
## Performance Optimizations

- Optimized images with proper sizing
- CSS minification in production build
- Component-based architecture for better code splitting
- Semantic HTML for better SEO

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact:
- Email: info@abhinavproperties.com
- Phone: +91 98765 43210

## Acknowledgments

- React.js community for excellent documentation
- Create React App for the build setup
- GitHub Pages for free hosting
=======
## License

This project is created for Green Acres Realty. Modify as needed for your business requirements.

## Support

For customization or technical support, please refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- shadcn/ui documentation: https://ui.shadcn.com
>>>>>>> b56d4fc3fdc50b300541215be91d39f2915e5f26

import { Link } from "react-router-dom"
import "../styles/home.css"

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="/bg-img-.jpg" alt="Luxury Properties" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">Find Your Dream Property</h1>
              <p className="hero-subtitle">
                Discover premium residential and commercial properties in Hyderabad's most sought-after locations. Your
                perfect home awaits.
              </p>
              <div className="hero-buttons">
                <Link to="/properties" className="btn btn-primary">
                  View Properties
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Abhinav Properties?</h2>
            <p>We provide exceptional service and expertise in the real estate market</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              <h3>Premium Properties</h3>
              <p>
                Carefully curated selection of high-quality residential and commercial properties in prime locations.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Expert Guidance</h3>
              <p>
                Our experienced team provides personalized service and expert advice throughout your property journey.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3>Trusted Service</h3>
              <p>Years of experience and hundreds of satisfied customers make us your trusted real estate partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="featured-properties">
        <div className="container">
          <div className="section-header">
            <h2>Featured Properties</h2>
            <p>Explore our handpicked selection of premium properties</p>
          </div>
          <div className="properties-preview">
            <div className="property-card">
              <div className="property-image">
                <img src="/generated-luxury-villa-image.jpg" alt="Luxury Villa" />
              </div>
              <div className="property-info">
                <h3>Luxury Villa in Banjara Hills</h3>
                <p className="property-price">₹2.5 Crores</p>
                <p className="property-location">Banjara Hills, Hyderabad</p>
                <div className="property-features">
                  <span>4 Beds</span>
                  <span>3 Baths</span>
                  <span>3500 sq ft</span>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image">
                <img src="/generated-modern-apartment-image.jpg" alt="Modern Apartment" />
              </div>
              <div className="property-info">
                <h3>Modern Apartment in Gachibowli</h3>
                <p className="property-price">₹85 Lakhs</p>
                <p className="property-location">Gachibowli, Hyderabad</p>
                <div className="property-features">
                  <span>3 Beds</span>
                  <span>2 Baths</span>
                  <span>1800 sq ft</span>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image">
                <img src="/generated-premium-flat-image.jpg" alt="Premium Flat" />
              </div>
              <div className="property-info">
                <h3>Premium Flat in Jubilee Hills</h3>
                <p className="property-price">₹1.8 Crores</p>
                <p className="property-location">Jubilee Hills, Hyderabad</p>
                <div className="property-features">
                  <span>3 Beds</span>
                  <span>2 Baths</span>
                  <span>2200 sq ft</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <Link to="/properties" className="btn btn-primary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Dream Property?</h2>
            <p>Let our experts help you find the perfect property that matches your needs and budget.</p>
            <Link to="/contact" className="btn btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

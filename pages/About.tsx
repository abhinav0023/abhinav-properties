import "../styles/about.css"

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Abhinav Properties</h1>
          <p>Your trusted partner in real estate for over a decade</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Abhinav Properties has been at the forefront of Hyderabad's real estate market, helping
                thousands of families find their dream homes and investors discover lucrative opportunities. Our journey
                began with a simple vision: to make property buying and selling transparent, efficient, and stress-free.
              </p>
              <p>
                Over the years, we have built a reputation for excellence, integrity, and customer satisfaction. Our
                deep understanding of the local market, combined with our commitment to personalized service, has made
                us one of the most trusted names in Hyderabad's real estate industry.
              </p>
              <p>
                Today, we continue to evolve and adapt to the changing needs of our clients, leveraging technology and
                market insights to provide unparalleled service in property transactions.
              </p>
            </div>
            <div className="about-image">
              <img src="/modern-luxury-real-estate-building-with-glass-faca.jpg" alt="Abhinav Properties Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide exceptional real estate services that exceed our clients' expectations while maintaining the
                highest standards of professionalism, integrity, and transparency in every transaction.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading real estate company in Hyderabad, recognized for our innovative approach,
                customer-centric services, and contribution to the city's growth and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z" />
                  <path d="M3 12v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6" />
                </svg>
              </div>
              <h4>Integrity</h4>
              <p>We conduct all our business with honesty, transparency, and ethical practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Customer Focus</h4>
              <p>Our clients' needs and satisfaction are at the center of everything we do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>We embrace new technologies and methods to improve our services continuously.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h4>Excellence</h4>
              <p>We strive for excellence in every aspect of our service delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>Experienced professionals dedicated to your success</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/generated-abhinav-kumar.jpg" alt="Abhinav Kumar" />
              </div>
              <div className="member-info">
                <h4>Abhinav Kumar</h4>
                <p className="member-role">Founder & CEO</p>
                <p className="member-description">
                  With over 15 years of experience in real estate, Abhinav leads our team with vision and expertise.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/generated-priya-sharma.jpg" alt="Priya Sharma" />
              </div>
              <div className="member-info">
                <h4>Priya Sharma</h4>
                <p className="member-role">Sales Director</p>
                <p className="member-description">
                  Priya brings 12 years of sales expertise and has helped over 500 families find their dream homes.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/generated-rajesh-patel.jpg" alt="Rajesh Patel" />
              </div>
              <div className="member-info">
                <h4>Rajesh Patel</h4>
                <p className="member-role">Property Consultant</p>
                <p className="member-description">
                  Rajesh specializes in commercial properties and investment opportunities with 10 years of experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Properties Sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">13+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

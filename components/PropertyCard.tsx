import "../styles/property-card.css"

interface Property {
  id: number
  title: string
  price: string
  location: string
  image: string
  bedrooms: number
  bathrooms: number
  area: string
  type: string
}

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const getPropertyImage = (id: number) => {
    switch (id) {
      case 1:
        return "/luxury-villa-with-modern-architecture.jpg"
      case 2:
        return "/modern-apartment-building-with-glass-windows.jpg"
      case 3:
        return "/premium-residential-flat-with-balcony.jpg"
      case 4:
        return "/modern-luxury-real-estate-building-with-glass-faca.jpg"
      case 5:
        return "/modern-apartment-building-with-glass-windows.jpg"
      case 6:
        return "/luxury-villa-with-modern-architecture.jpg"
      default:
        return property.image
    }
  }

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={getPropertyImage(property.id) || "/placeholder.svg"} alt={property.title} />
        <div className="property-type-badge">{property.type}</div>
      </div>
      <div className="property-details">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-price">{property.price}</p>
        <p className="property-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {property.location}
        </p>
        <div className="property-features">
          <div className="feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1 0l-1 1a1.5 1.5 0 0 0 0 1L6.5 9 9 6Z" />
              <path d="M15 5 9 11l4 4 6-6-4-4Z" />
              <path d="M18 4h2v2" />
              <path d="M14 8h2v2" />
            </svg>
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
              <path d="M15 3v18" />
              <path d="M3 9h18" />
              <path d="M3 15h18" />
            </svg>
            <span>{property.area}</span>
          </div>
        </div>
        <div className="property-actions">
          <button className="btn btn-primary">View Details</button>
          <button className="btn btn-secondary">Contact Agent</button>
        </div>
      </div>
    </div>
  )
}

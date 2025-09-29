"use client"

import { useState } from "react"
import PropertyCard from "../components/PropertyCard"
import propertiesData from "../data/properties.json"
import "../styles/properties.css"

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

export default function Properties() {
  const [properties] = useState<Property[]>(propertiesData)
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(propertiesData)
  const [selectedType, setSelectedType] = useState<string>("All")
  const [priceRange, setPriceRange] = useState<string>("All")

  const propertyTypes = ["All", "Villa", "Apartment", "Flat", "House"]
  const priceRanges = ["All", "Under ₹1 Crore", "₹1-2 Crores", "Above ₹2 Crores"]

  const handleTypeFilter = (type: string) => {
    setSelectedType(type)
    applyFilters(type, priceRange)
  }

  const handlePriceFilter = (range: string) => {
    setPriceRange(range)
    applyFilters(selectedType, range)
  }

  const applyFilters = (type: string, range: string) => {
    let filtered = properties

    // Filter by type
    if (type !== "All") {
      filtered = filtered.filter((property) => property.type === type)
    }

    // Filter by price range
    if (range !== "All") {
      filtered = filtered.filter((property) => {
        const priceValue = Number.parseFloat(
          property.price
            .replace(/[₹,\s]/g, "")
            .replace("Crores", "")
            .replace("Lakhs", ""),
        )
        const isLakhs = property.price.includes("Lakhs")
        const actualPrice = isLakhs ? priceValue / 100 : priceValue

        switch (range) {
          case "Under ₹1 Crore":
            return actualPrice < 1
          case "₹1-2 Crores":
            return actualPrice >= 1 && actualPrice <= 2
          case "Above ₹2 Crores":
            return actualPrice > 2
          default:
            return true
        }
      })
    }

    setFilteredProperties(filtered)
  }

  return (
    <div className="properties-page">
      <div className="properties-hero">
        <div className="container">
          <h1>Our Properties</h1>
          <p>Discover your perfect home from our curated collection of premium properties</p>
        </div>
      </div>

      <div className="properties-content">
        <div className="container">
          {/* Filters */}
          <div className="filters-section">
            <div className="filter-group">
              <label className="filter-label">Property Type:</label>
              <div className="filter-buttons">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    className={`filter-btn ${selectedType === type ? "active" : ""}`}
                    onClick={() => handleTypeFilter(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Price Range:</label>
              <div className="filter-buttons">
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    className={`filter-btn ${priceRange === range ? "active" : ""}`}
                    onClick={() => handlePriceFilter(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="results-info">
            <p>
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
          </div>

          {/* Properties Grid */}
          <div className="properties-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => <PropertyCard key={property.id} property={property} />)
            ) : (
              <div className="no-results">
                <h3>No properties found</h3>
                <p>Try adjusting your filters to see more properties.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServicesSearch.module.css";
import { useCategory } from "../CategoryContext/CategoryContext";

const ServicesSearch = () => {
  const navigate = useNavigate();
  const { activeCategory, setActiveCategory } = useCategory();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const servicesData = [
    {
      id: 1,
      title: "Search Engine Optimization",
      description: "Dominating search results with data-driven ranking strategies.",
      type: "SEO",
      icon: "🚀",
      color: "#00f3ff",
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "Building community and engagement across all major platforms.",
      type: "Social",
      icon: "📱",
      color: "#bc13fe",
    },
    {
      id: 3,
      title: "Pay-Per-Click (PPC)",
      description: "Instant traffic and high ROI with targeted ad campaigns.",
      type: "Ads",
      icon: "💸",
      color: "#ff0055",
    },
    {
      id: 4,
      title: "Content Strategy",
      description: "Storytelling that converts readers into loyal customers.",
      type: "Content",
      icon: "✍️",
      color: "#ccff00",
    },
    {
      id: 5,
      title: "Email Marketing",
      description: "Automated flows to nurture leads and drive repeat sales.",
      type: "Email",
      icon: "📩",
      color: "#f59e0b",
    },
    {
      id: 6,
      title: "Influencer Marketing",
      description: "Leverage authority figures to amplify your brand voice.",
      type: "Social",
      icon: "🌟",
      color: "#ff0099",
    },
    {
      id: 7,
      title: "Conversion Optimization",
      description: "Scientific A/B testing to maximize website performance.",
      type: "CRO",
      icon: "📈",
      color: "#00ff99",
    },
    {
      id: 8,
      title: "Brand Identity Design",
      description: "Visual systems that make your brand unforgettable.",
      type: "Design",
      icon: "🎨",
      color: "#3B82F6",
    },
    {
      id: 9,
      title: "Video Marketing",
      description: "Cinematic content production for the TikTok era.",
      type: "Content",
      icon: "🎥",
      color: "#ff3333",
    },
    {
      id: 10,
      title: "Marketing Analytics",
      description: "Real-time dashboards tracking every click and conversion.",
      type: "Analytics",
      icon: "📊",
      color: "#8B5CF6",
    },
    {
      id: 11,
      title: "Reputation Management",
      description: "Protecting and polishing your brand's public image.",
      type: "PR",
      icon: "🛡️",
      color: "#10B981",
    },
    {
      id: 12,
      title: "Affiliate Marketing",
      description: "Expanding reach through strategic partner networks.",
      type: "Ads",
      icon: "🤝",
      color: "#6366F1",
    },
  ];

  const serviceTypes = [
    "All",
    ...new Set(servicesData.map((service) => service.type)),
  ];

  // Sync activeCategory with selectedType
  useEffect(() => {
    if (activeCategory) {
      setSelectedType(activeCategory);
      sessionStorage.removeItem("fromFooterCategory");
    }
  }, [activeCategory]);

  const filteredAndSortedServices = useMemo(() => {
    let filtered = servicesData.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        selectedType === "All" || service.type === selectedType;
      return matchesSearch && matchesType;
    });

    if (sortOrder === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "type") {
      filtered.sort((a, b) => a.type.localeCompare(b.type));
    }

    return filtered;
  }, [searchTerm, selectedType, sortOrder]);

  const handleDetailsClick = () => {
    navigate("/Error");
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    if (term) {
      setSelectedType("All");
      setActiveCategory(null);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setActiveCategory(null);
    setSortOrder("default");
  };

  return (
    <div data-aos="fade" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Service Protocol_</h1>
        <p className={styles.subtitle}>Select a module to initiate strategy.</p>
      </div>

      {/* New Sticky Command Bar Layout */}
      <div className={styles.stickyBar}>
        <div className={styles.controls}>
          <div className={styles.searchContainer}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              id="services-search-input"
              name="services-search"
              placeholder="Search Modules..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterGroup}>
            <select
              id="service-type-filter"
              name="service-type"
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setActiveCategory(e.target.value);
              }}
              className={styles.filterSelect}
            >
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <select
              id="sort-order-filter"
              name="sort-order"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="default">Sort: Default</option>
              <option value="name">Sort: A-Z</option>
              <option value="type">Sort: Type</option>
            </select>
          </div>

          {(searchTerm || selectedType !== "All") && (
            <button className={styles.resetButton} onClick={clearAllFilters}>
              Reset
            </button>
          )}
        </div>
      </div>

      <div className={styles.resultsInfo}>
        <span> SYSTEM: {filteredAndSortedServices.length} MODULES ACTIVE</span>
      </div>

      <div className={styles.servicesGrid}>
        {filteredAndSortedServices.map((service) => (
          <div
            key={service.id}
            className={styles.serviceCard}
            style={{ "--accent-color": service.color }}
            onClick={handleDetailsClick}
          >
            {/* Massive Watermark Icon */}
            <div className={styles.watermarkIcon}>{service.icon}</div>

            {/* Scanline Effect */}
            <div className={styles.scanline}></div>

            <div className={styles.cardContent}>
              <div className={styles.typeBadge}>{service.type}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>

            {/* Button slides up on hover */}
            <div className={styles.cardAction}>
              <span className={styles.actionText}>Initialize Sequence &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedServices.length === 0 && (
        <div className={styles.noResults}>
          <h3> ERROR: NO MODULES FOUND</h3>
          <button className={styles.resetButton} onClick={clearAllFilters}>
            Reboot Search
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesSearch;
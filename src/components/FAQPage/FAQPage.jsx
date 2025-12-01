import React, { useState, useEffect } from 'react';
import styles from './FAQPage.module.css';

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      id: 'general',
      topic: 'General Inquiries',
      icon: 'fa-solid fa-circle-info',
      questions: [
        {
          q: "What makes your digital agency different?",
          a: "We don't just focus on vanity metrics like 'likes'. We focus on ROI, data-driven strategies, and scalable growth. Our team combines creative artistry with technical precision to ensure your brand dominates the market."
        },
        {
          q: "Do you work with international clients?",
          a: "Absolutely. We are a globally connected agency with clients across Europe, North America, and Asia. Our digital infrastructure allows seamless collaboration regardless of time zones."
        },
        {
          q: "How do I start a project with you?",
          a: "Simply click the 'Get Started' button or book a free consultation call. We'll assess your needs, propose a strategy, and once approved, we begin the onboarding process immediately."
        },
        {
          q: "What industries do you specialize in?",
          a: "We have expertise across multiple sectors including E-commerce, SaaS, B2B services, Healthcare, Finance, and Technology. Our strategies are tailored to each industry's unique challenges."
        },
        {
          q: "Do you provide detailed reporting?",
          a: "Yes, we provide comprehensive monthly reports with clear metrics, insights, and strategic recommendations. All data is presented in easy-to-understand dashboards."
        }
      ]
    },
    {
      id: 'services',
      topic: 'Services & Strategy',
      icon: 'fa-solid fa-layer-group',
      questions: [
        {
          q: "How long does it take to see results from SEO?",
          a: "SEO is a long-term investment. Typically, significant improvements in ranking and traffic are visible within 3-6 months, depending on the competitiveness of your industry and current site health."
        },
        {
          q: "Can you handle both organic and paid marketing?",
          a: "Yes. We believe in a holistic approach. We often combine SEO (organic) with PPC (paid) campaigns to maximize visibility while building long-term authority."
        },
        {
          q: "Do you offer social media management?",
          a: "We offer end-to-end social media solutions including content creation, community management, influencer partnerships, and paid social advertising strategies."
        },
        {
          q: "What's included in your SEO services?",
          a: "Our SEO package includes technical audit, keyword research, on-page optimization, content strategy, link building, and ongoing monitoring with monthly reporting."
        },
        {
          q: "Do you provide email marketing automation?",
          a: "Yes, we design and implement complete email marketing funnels including lead nurturing sequences, promotional campaigns, and automated workflows."
        }
      ]
    },
    {
      id: 'branding',
      topic: 'Branding & Design',
      icon: 'fa-solid fa-pen-nib',
      questions: [
        {
          q: "Do you do logo design and re-branding?",
          a: "Yes. Our design team specializes in creating complete brand identities, including logos, typography systems, color palettes, and brand voice guidelines."
        },
        {
          q: "What is your web design process?",
          a: "We follow a 4-step process: Discovery (Research), Wireframing (UX), UI Design (Visuals), and Development. We ensure your site is mobile-responsive and SEO-optimized from day one."
        },
        {
          q: "Do you offer video production services?",
          a: "Yes, we have an in-house video production team that creates brand videos, explainer animations, product demos, and social media video content."
        },
        {
          q: "Can you redesign my existing website?",
          a: "Absolutely. We analyze your current site, identify improvement areas, and redesign with modern UX/UI principles while preserving your brand identity."
        }
      ]
    },
    {
      id: 'pricing',
      topic: 'Pricing & Plans',
      icon: 'fa-solid fa-tags',
      questions: [
        {
          q: "Do you have fixed packages or custom quotes?",
          a: "We offer both. We have tiered packages for standard services like Social Media, but for complex campaigns or full-scale development, we provide custom quotes tailored to your specific goals."
        },
        {
          q: "Are there any hidden setup fees?",
          a: "Transparency is our policy. All costs, including setup fees, ad spend, and management fees, are clearly outlined in our proposal before we sign the contract."
        },
        {
          q: "What is your minimum contract period?",
          a: "Most of our service agreements start at 3 months for marketing services and 6 months for SEO to ensure we can deliver measurable results."
        },
        {
          q: "Do you offer discounts for long-term contracts?",
          a: "Yes, we provide special pricing for annual contracts and package bundles. Contact us for custom pricing based on your specific needs."
        }
      ]
    },
    {
      id: 'support',
      topic: 'Support & Tech',
      icon: 'fa-solid fa-headset',
      questions: [
        {
          q: "Do you provide website maintenance?",
          a: "Yes, we offer monthly maintenance packages that include security updates, plugin management, backups, and minor content updates to keep your site running smoothly."
        },
        {
          q: "What happens if my site goes down?",
          a: "If you are on our maintenance plan, we offer priority support to restore services immediately. We also implement uptime monitoring to detect issues before they affect your users."
        },
        {
          q: "Do you provide 24/7 support?",
          a: "We offer business hour support with emergency response for critical issues. Premium packages include extended support hours."
        },
        {
          q: "What technologies do you work with?",
          a: "We work with modern tech stacks including React, Next.js, WordPress, Shopify, Webflow, and custom backend solutions using Node.js and Python."
        }
      ]
    },
    {
      id: 'results',
      topic: 'Results & Analytics',
      icon: 'fa-solid fa-chart-line',
      questions: [
        {
          q: "How do you measure campaign success?",
          a: "We track KPIs like ROI, conversion rates, customer acquisition cost, lead quality, and revenue growth. Success is measured against agreed-upon business objectives."
        },
        {
          q: "What analytics tools do you use?",
          a: "We use Google Analytics 4, Google Tag Manager, Search Console, along with specialized tools like SEMrush, Ahrefs, and custom tracking dashboards."
        },
        {
          q: "How often will I receive reports?",
          a: "You'll receive detailed monthly reports with weekly check-ins for active campaigns. Real-time dashboards are available for instant performance monitoring."
        }
      ]
    }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveQuestion(null);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const filteredQuestions = faqData[activeTab].questions.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.faqContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.mainTitle}>
          Digital Marketing <span className={styles.titleGradient}>FAQ</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Expert answers to your most pressing questions about digital strategy
        </p>
        
        <div className={styles.searchContainer}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          {searchTerm && (
            <button 
              className={styles.clearSearch}
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sidebarSection}>
          <div className={styles.sidebarHeader}>
            <h3 className={styles.sidebarTitle}>Topics</h3>
            <div className={styles.sidebarLine}></div>
          </div>
          
          <div className={styles.topicGrid}>
            {faqData.map((item, index) => (
              <button
                key={item.id}
                className={`${styles.topicCard} ${activeTab === index ? styles.activeTopic : ''}`}
                onClick={() => handleTabClick(index)}
              >
                <div className={styles.topicIconContainer}>
                  <i className={`${item.icon} ${styles.topicIcon}`}></i>
                </div>
                <span className={styles.topicName}>{item.topic}</span>
                <span className={styles.questionCount}>
                  {item.questions.length} questions
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.mainSection}>
          <div className={styles.topicHeader}>
            <div className={styles.topicInfo}>
              <h2 className={styles.currentTopic}>
                {faqData[activeTab].topic}
                <span className={styles.topicBadge}>
                  {filteredQuestions.length} results
                </span>
              </h2>
              <p className={styles.topicDescription}>
                Everything you need to know about {faqData[activeTab].topic.toLowerCase()}
              </p>
            </div>
            
            <button 
              className={styles.contactButton}
              onClick={() => window.location.href = '/Error'}
            >
              <i className="fa-solid fa-message"></i>
              Ask New Question
            </button>
          </div>

          <div className={styles.questionsContainer}>
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q, index) => (
                <div 
                  key={index} 
                  className={`${styles.questionCard} ${activeQuestion === index ? styles.activeQuestion : ''}`}
                  onClick={() => toggleQuestion(index)}
                >
                  <div className={styles.questionHeader}>
                    <div className={styles.questionNumber}>
                      Q{index + 1}
                    </div>
                    <h3 className={styles.questionText}>{q.q}</h3>
                    <div className={styles.toggleButton}>
                      <i className={`fa-solid ${activeQuestion === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                  </div>
                  
                  <div 
                    className={styles.answerContainer}
                    style={{ 
                      maxHeight: activeQuestion === index ? '500px' : '0px',
                      opacity: activeQuestion === index ? 1 : 0
                    }}
                  >
                    <div className={styles.answerContent}>
                      <div className={styles.answerIcon}>
                        <i className="fa-solid fa-check-circle"></i>
                      </div>
                      <p className={styles.answerText}>{q.a}</p>
                    </div>
                    
                    <div className={styles.answerActions}>
                      <button 
                        className={styles.actionButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = '/Error';
                        }}
                      >
                        <i className="fa-solid fa-thumbs-up"></i>
                        Helpful
                      </button>
                      <button 
                        className={styles.actionButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = '/Error';
                        }}
                      >
                        <i className="fa-solid fa-share"></i>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                <i className="fa-solid fa-search"></i>
                <h3>No results found for "{searchTerm}"</h3>
                <p>Try searching with different keywords or browse the topics</p>
              </div>
            )}
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Still have questions?</h3>
              <p className={styles.ctaText}>
                Our digital strategists are ready to provide personalized answers
              </p>
            </div>
            <button 
              className={styles.ctaButton}
              onClick={() => window.location.href = '/Error'}
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
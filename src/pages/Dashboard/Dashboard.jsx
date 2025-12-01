import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import Style from './Dashboard.module.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const statsData = [
    { id: 1, label: 'Total Revenue', value: 128500, prefix: '$', change: '+22.5%', trend: 'up', color: '#00f3ff' },
    { id: 2, label: 'Ad Spend', value: 34500, prefix: '$', change: '+8.3%', trend: 'down', color: '#bc13fe' },
    { id: 3, label: 'Total Leads', value: 1920, change: '+18.7%', trend: 'up', color: '#ff0055' },
    { id: 4, label: 'ROI', value: 4.8, suffix: 'x', change: '+0.6x', trend: 'up', color: '#f59e0b' }
  ];

  const campaigns = [
    { id: 1, name: 'Summer Sale', platform: 'Google Ads', progress: 82, budget: '$15K', spent: '$12.4K', color: '#00f3ff' },
    { id: 2, name: 'Brand Awareness', platform: 'Meta', progress: 65, budget: '$8K', spent: '$5.2K', color: '#bc13fe' },
    { id: 3, name: 'B2B Outreach', platform: 'LinkedIn', progress: 42, budget: '$12K', spent: '$5.1K', color: '#ff0055' },
    { id: 4, name: 'Influencer Collab', platform: 'Instagram', progress: 90, budget: '$5K', spent: '$4.5K', color: '#f59e0b' }
  ];

  const trafficSources = [
    { source: 'Organic Search', value: 42, color: '#00f3ff', trend: 'up' },
    { source: 'Paid Ads', value: 28, color: '#bc13fe', trend: 'up' },
    { source: 'Social Media', value: 18, color: '#ff0055', trend: 'up' },
    { source: 'Direct', value: 12, color: '#f59e0b', trend: 'neutral' }
  ];

  const performanceData = [
    { day: 'Mon', clicks: 1240, conversions: 84 },
    { day: 'Tue', clicks: 1560, conversions: 102 },
    { day: 'Wed', clicks: 1420, conversions: 92 },
    { day: 'Thu', clicks: 1780, conversions: 118 },
    { day: 'Fri', clicks: 1620, conversions: 108 },
    { day: 'Sat', clicks: 1340, conversions: 88 },
    { day: 'Sun', clicks: 1120, conversions: 74 }
  ];

  const topKeywords = [
    { keyword: 'digital marketing', rank: 1, traffic: '25K', change: '+12%' },
    { keyword: 'seo services', rank: 3, traffic: '18K', change: '+8%' },
    { keyword: 'social media marketing', rank: 2, traffic: '22K', change: '+15%' },
    { keyword: 'ppc advertising', rank: 5, traffic: '12K', change: '+5%' }
  ];

  const RenderPerformanceChart = () => {
    const maxClicks = Math.max(...performanceData.map(d => d.clicks));
    const maxConversions = Math.max(...performanceData.map(d => d.conversions));
    const maxValue = Math.max(maxClicks, maxConversions);
    
    return (
      <div className={Style.performanceChart}>
        <div className={Style.chartGrid}>
          <div className={Style.yAxis}>
            <span>{(maxValue * 0.75).toLocaleString()}</span>
            <span>{(maxValue * 0.5).toLocaleString()}</span>
            <span>{(maxValue * 0.25).toLocaleString()}</span>
            <span>0</span>
          </div>
          <div className={Style.chartBars}>
            {performanceData.map((item, index) => (
              <div key={index} className={Style.barGroup}>
                <div className={Style.barStack}>
                  <div 
                    className={`${Style.bar} ${Style.clickBar}`}
                    style={{ height: `${(item.clicks / maxValue) * 100}%` }}
                    title={`Clicks: ${item.clicks.toLocaleString()}`}
                  ></div>
                  <div 
                    className={`${Style.bar} ${Style.conversionBar}`}
                    style={{ height: `${(item.conversions / maxValue) * 100}%` }}
                    title={`Conversions: ${item.conversions}`}
                  ></div>
                </div>
                <div className={Style.barLabel}>{item.day}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={Style.chartLegend}>
          <div className={Style.legendItem}>
            <span className={`${Style.legendDot} ${Style.clickDot}`}></span>
            <span>Clicks</span>
          </div>
          <div className={Style.legendItem}>
            <span className={`${Style.legendDot} ${Style.conversionDot}`}></span>
            <span>Conversions</span>
          </div>
        </div>
      </div>
    );
  };

  const RenderTrafficChart = () => {
    let currentAngle = 0;
    const radius = 40;
    
    return (
      <div className={Style.trafficDonut}>
        <svg viewBox="0 0 100 100" className={Style.donutSvg}>
          {trafficSources.map((item, index) => {
            const segmentAngle = (item.value / 100) * 360;
            const largeArc = segmentAngle > 180 ? 1 : 0;
            
            const x1 = 50 + radius * Math.cos((currentAngle * Math.PI) / 180);
            const y1 = 50 + radius * Math.sin((currentAngle * Math.PI) / 180);
            const x2 = 50 + radius * Math.cos(((currentAngle + segmentAngle) * Math.PI) / 180);
            const y2 = 50 + radius * Math.sin(((currentAngle + segmentAngle) * Math.PI) / 180);
            
            currentAngle += segmentAngle;
            
            return (
              <path
                key={index}
                d={`M50,50 L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`}
                fill={item.color}
                className={Style.donutSegment}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            );
          })}
          <circle cx="50" cy="50" r="25" fill="#050505" />
          <text x="50" y="48" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="monospace">Total</text>
          <text x="50" y="56" textAnchor="middle" fill="#00f3ff" fontSize="12" fontFamily="monospace">100%</text>
        </svg>
      </div>
    );
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className={Style.loaderWrapper}>
          <div className={Style.loader}>
            <div className={Style.loaderSpinner}></div>
            <p className={Style.loaderText}>Initializing Dashboard...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={Style.dashboardWrapper}>
        <div className={Style.dashboardHeader}>
          <div className={Style.headerLeft}>
            <h1 className={Style.title}>Marketing Command Center</h1>
            <p className={Style.subtitle}>Real-time analytics & campaign performance</p>
          </div>
          <div className={Style.headerRight}>
            <button 
              className={Style.primaryButton}
              onClick={() => navigate('/Error')}
            >
              <span className={Style.buttonIcon}>+</span>
              New Campaign
            </button>
            <button 
              className={Style.secondaryButton}
              onClick={() => navigate('/Error')}
            >
              Export Report
            </button>
          </div>
        </div>

        <div className={Style.statsGrid}>
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className={Style.statCard}
              onClick={() => navigate('/Error')}
              style={{ '--card-color': stat.color }}
            >
              <div className={Style.statHeader}>
                <h3 className={Style.statLabel}>{stat.label}</h3>
                <span className={`${Style.statChange} ${stat.trend === 'up' ? Style.up : Style.down}`}>
                  {stat.change}
                </span>
              </div>
              <div className={Style.statValue}>
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  separator=","
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
              </div>
              <div className={Style.statProgress}>
                <div 
                  className={Style.progressBar}
                  style={{ 
                    width: `${Math.min((stat.value % 100000) / 1000, 100)}%`,
                    background: stat.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={Style.mainGrid}>
          <div className={Style.chartSection}>
            <div className={Style.sectionHeader}>
              <h2 className={Style.sectionTitle}>Performance Overview</h2>
              <span className={Style.sectionPeriod}>Last 7 Days</span>
            </div>
            <div className={Style.chartWrapper}>
              <RenderPerformanceChart />
            </div>
          </div>

          <div className={Style.trafficSection}>
            <div className={Style.sectionHeader}>
              <h2 className={Style.sectionTitle}>Traffic Sources</h2>
              <span className={Style.sectionPeriod}>This Month</span>
            </div>
            <div className={Style.trafficContent}>
              <RenderTrafficChart />
              <div className={Style.trafficList}>
                {trafficSources.map((source, index) => (
                  <div key={index} className={Style.trafficItem}>
                    <div className={Style.trafficInfo}>
                      <span 
                        className={Style.trafficDot}
                        style={{ backgroundColor: source.color }}
                      ></span>
                      <span className={Style.trafficSource}>{source.source}</span>
                    </div>
                    <div className={Style.trafficStats}>
                      <span className={Style.trafficValue}>{source.value}%</span>
                      <span className={`${Style.trafficTrend} ${source.trend === 'up' ? Style.trendUp : Style.trendNeutral}`}>
                        {source.trend === 'up' ? '↑' : '→'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={Style.campaignsSection}>
          <div className={Style.sectionHeader}>
            <h2 className={Style.sectionTitle}>Active Campaigns</h2>
            <button 
              className={Style.viewAllButton}
              onClick={() => navigate('/Error')}
            >
              View All →
            </button>
          </div>
          <div className={Style.campaignsGrid}>
            {campaigns.map((campaign) => (
              <div 
                key={campaign.id} 
                className={Style.campaignCard}
                onClick={() => navigate('/Error')}
                style={{ '--campaign-color': campaign.color }}
              >
                <div className={Style.campaignHeader}>
                  <div className={Style.campaignIcon}>
                    {campaign.platform.charAt(0)}
                  </div>
                  <div className={Style.campaignInfo}>
                    <h3 className={Style.campaignName}>{campaign.name}</h3>
                    <p className={Style.campaignPlatform}>{campaign.platform}</p>
                  </div>
                </div>
                <div className={Style.campaignProgress}>
                  <div className={Style.progressInfo}>
                    <span className={Style.progressLabel}>Progress</span>
                    <span className={Style.progressValue}>{campaign.progress}%</span>
                  </div>
                  <div className={Style.progressBarContainer}>
                    <div 
                      className={Style.campaignProgressBar}
                      style={{ 
                        width: `${campaign.progress}%`,
                        background: campaign.color
                      }}
                    ></div>
                  </div>
                  <div className={Style.campaignBudget}>
                    <div className={Style.budgetItem}>
                      <span className={Style.budgetLabel}>Budget</span>
                      <span className={Style.budgetValue}>{campaign.budget}</span>
                    </div>
                    <div className={Style.budgetItem}>
                      <span className={Style.budgetLabel}>Spent</span>
                      <span className={Style.budgetValue}>{campaign.spent}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.keywordsSection}>
          <div className={Style.sectionHeader}>
            <h2 className={Style.sectionTitle}>Top Ranking Keywords</h2>
            <button 
              className={Style.viewAllButton}
              onClick={() => navigate('/Error')}
            >
              View All →
            </button>
          </div>
          <div className={Style.keywordsList}>
            {topKeywords.map((keyword, index) => (
              <div 
                key={index} 
                className={Style.keywordCard}
                onClick={() => navigate('/Error')}
              >
                <div className={Style.keywordRank}>
                  <span className={Style.rankNumber}>#{keyword.rank}</span>
                  <span className={`${Style.rankChange} ${keyword.change.startsWith('+') ? Style.positive : Style.neutral}`}>
                    {keyword.change}
                  </span>
                </div>
                <div className={Style.keywordContent}>
                  <h3 className={Style.keywordText}>{keyword.keyword}</h3>
                  <p className={Style.keywordTraffic}>{keyword.traffic} monthly searches</p>
                </div>
                <div className={Style.keywordAction}>
                  <button 
                    className={Style.analyzeButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/Error');
                    }}
                  >
                    Analyze
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
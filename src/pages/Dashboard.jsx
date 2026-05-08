import { dashboardData } from '../data/mockData'
import Card from '../components/Card'
import Button from '../components/Button'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1>{dashboardData.title}</h1>
      </div>

      {/* Stats Cards */}
      <section className="stats-section">
        <div className="stats-grid">
          {dashboardData.stats.map((stat) => (
            <Card key={stat.id} className={`stat-card stat-${stat.color}`}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="section-title">
          <h2>{dashboardData.mapTitle}</h2>
          <span className="activity-badge">{dashboardData.mapData}</span>
        </div>

        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-grid">
                <div className="region region-1">
                  <span>Cap-Vert</span>
                </div>
                <div className="region region-2">
                  <span>Saint-Louis</span>
                </div>
                <div className="region region-3">
                  <span>Sénégal</span>
                </div>
                <div className="region region-4">
                  <span>Casamance</span>
                </div>
              </div>
              <div className="legend">
                <span className="legend-item">● Actif</span>
                <span className="legend-item warning">🔔 Alerte</span>
                <span className="legend-item offline">● Hors-ligne</span>
              </div>
            </div>
          </div>

          {/* Vessels List */}
          <div className="vessels-sidebar">
            <h3>Patrouilles Marines — États Real-Time</h3>
            {dashboardData.vessels.map((vessel) => (
              <div key={vessel.id} className={`vessel-card ${vessel.status.toLowerCase()}`}>
                <div className="vessel-header">
                  <span className="vessel-name">{vessel.name}</span>
                  <span className={`status-badge ${vessel.status.toLowerCase()}`}>
                    {vessel.status}
                  </span>
                </div>
                <p className="vessel-location">📍 {vessel.location}</p>
                <p className="crew-count">👥 {vessel.crewCount} équipiers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Camera Section */}
      <section className="camera-section">
        <div className="section-title">
          <h2>{dashboardData.liveCamera.title}</h2>
          <span className="camera-badge">LIVE</span>
        </div>

        <div className="camera-container">
          <div className="camera-feed">
            <div className="camera-header">
              <span className="camera-id">{dashboardData.liveCamera.camera}</span>
              <span className="timestamp">12:34:53</span>
            </div>

            <div className="video-placeholder">
              <div className="water-bg">
                <div className="boat-silhouette"></div>
              </div>

              {/* Detection Boxes */}
              <div className="detections">
                {dashboardData.liveCamera.detections.map((detection, idx) => (
                  <div
                    key={idx}
                    className={`detection-box ${detection.color}`}
                    style={{
                      top: `${20 + idx * 15}%`,
                      left: `${10 + idx * 12}%`,
                    }}
                  >
                    <span className="detection-label">{detection.type}</span>
                    <span className="confidence">{detection.confidence}</span>
                  </div>
                ))}
              </div>

              <div className="camera-footer">
                <span className="location">{dashboardData.liveCamera.location}</span>
              </div>
            </div>

            <div className="detections-info">
              <h4>Détections IA — {dashboardData.liveCamera.modelInfo}</h4>
              <div className="detection-items">
                {dashboardData.liveCamera.detections.map((detection, idx) => (
                  <div key={idx} className={`detection-item ${detection.color}`}>
                    <span className={`color-box ${detection.color}`}></span>
                    <span className="detection-name">{detection.type}</span>
                    <span className="detection-conf">{detection.confidence}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Camera Selector */}
          <div className="camera-selector">
            <h3>Flux Disponibles</h3>
            <div className="camera-list">
              <div className="camera-item active">
                <span className="camera-thumb">📹</span>
                <span className="camera-label">Jämm baax — Dakar</span>
              </div>
              <div className="camera-item">
                <span className="camera-thumb">📹</span>
                <span className="camera-label">Pirogue Ndar — Saint-Louis</span>
              </div>
              <div className="camera-item">
                <span className="camera-thumb">📹</span>
                <span className="camera-label">Pirogue Sopi — Casamance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <h2>Navigation Principal</h2>
        <div className="menu-grid">
          {dashboardData.menuItems.map((item) => (
            <Card key={item.id} icon={item.icon} title={item.label} className="menu-card" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="dashboard-cta">
        <div className="cta-content">
          <h2>Explorez les autres modules</h2>
          <div className="cta-buttons">
            <Button href="/mool-safe" variant="primary" size="lg">
              🔙 Bracelet Mool-Safe
            </Button>
            <Button href="/app" variant="secondary" size="lg">
              📱 App Mobile
            </Button>
            <Button href="/" variant="outline" size="lg">
              ⏠ Accueil
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

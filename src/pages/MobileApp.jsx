import { useState } from 'react'
import { mobileAppData } from '../data/mockData'
import Button from '../components/Button'
import './MobileApp.css'

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState(0)
  const [sosTriggered, setSosTriggered] = useState(false)

  return (
    <div className="mobile-app-page">
      <div className="page-header">
        <h1>{mobileAppData.title}</h1>
        <p>{mobileAppData.subtitle}</p>
      </div>

      <div className="mobile-container">
        {/* Phone Mockup */}
        <div className="phone-mockup">
          <div className="phone-frame">
            <div className="status-bar">
              <span className="time">12:30</span>
              <span className="phone-icons">📡 📶 🔋</span>
            </div>

            <div className="app-header">
              <div className="app-logo">🎯</div>
              <div className="header-info">
                <p className="username">{mobileAppData.username}</p>
                <p className="boat-id">{mobileAppData.boatId}</p>
              </div>
            </div>

            <div className="screen-content">
              {activeTab === 0 && (
                <div className="tab-content">
                  <div className={`condition-card ${sosTriggered ? 'sos-active' : ''}`}>
                    <span className="condition-label">CONDITION ACTUELLE</span>
                    <h2>{mobileAppData.currentCondition}</h2>
                    <p className="condition-detail">
                      Vent {mobileAppData.windSpeed} — Houle {mobileAppData.waveHeight}
                    </p>
                  </div>

                  <button
                    className={`sos-button-mobile ${sosTriggered ? 'active' : ''}`}
                    onClick={() => setSosTriggered(!sosTriggered)}
                  >
                    <span className="sos-icon">👑</span>
                    {mobileAppData.sosButton}
                  </button>

                  <div className="metrics-grid">
                    {mobileAppData.metrics.map((metric, idx) => (
                      <div key={idx} className="metric-item">
                        <div className="metric-icon">{metric.icon}</div>
                        <p className="metric-label">{metric.label}</p>
                        <p className="metric-value">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  {mobileAppData.warnings.map((warning, idx) => (
                    <div key={idx} className="warning-card">
                      <span className="warning-icon">⚠️</span>
                      <p>{warning.message}</p>
                    </div>
                  ))}

                  <div className="info-card">
                    <h4>{mobileAppData.nearbyVessels.title}</h4>
                    <p>{mobileAppData.nearbyVessels.count}</p>
                  </div>

                  <div className="info-card">
                    <h4>{mobileAppData.weather.title}</h4>
                    <p>{mobileAppData.weather.location}</p>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="tab-content">
                  <div className="map-placeholder">
                    <span>🗺️</span>
                    <p>Carte temps réel</p>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="tab-content">
                  <div className="alerts-list">
                    <div className="alert-item">
                      <span className="alert-icon">🚨</span>
                      <div className="alert-content">
                        <p className="alert-title">Alerte SOS</p>
                        <small>Aucune actuellement</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="tab-content">
                  <div className="vessels-list">
                    <div className="vessel-item">
                      <span className="vessel-icon">⛵</span>
                      <div className="vessel-info">
                        <p>Piroques à proximité</p>
                        <small>3 actives</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 4 && (
                <div className="tab-content">
                  <div className="weather-info">
                    <div className="weather-item">
                      <span className="weather-icon">☀️</span>
                      <p>Ciel dégagé</p>
                      <span className="temp">32°C</span>
                    </div>
                    <div className="weather-item">
                      <span className="weather-icon">💨</span>
                      <p>Vent NE</p>
                      <span className="speed">12 kt</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 5 && (
                <div className="tab-content">
                  <div className="profile-card">
                    <div className="profile-avatar">👤</div>
                    <h3>Nanga def, Amadou</h3>
                    <p className="profile-role">Pêcheur Maritime</p>
                    <div className="profile-stats">
                      <div className="stat">
                        <span>150</span>
                        <p>Voyages</p>
                      </div>
                      <div className="stat">
                        <span>5 ans</span>
                        <p>Expérience</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Navigation */}
            <div className="bottom-nav">
              {mobileAppData.navigationMenu.map((item, idx) => (
                <button
                  key={item.id}
                  className={`nav-item ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="app-description">
          <h2>App Mool-Control Mobile</h2>
          <p>Interface inclusive pour les pêcheurs sénégalais</p>

          <div className="features-list">
            <h3>Fonctionnalités principales</h3>
            <ul>
              <li>📍 GPS en temps réel</li>
              <li>⚠️ Alertes SOS automatiques</li>
              <li>👥 Détection de voisins à proximité</li>
              <li>🌊 Infos météo marines en direct</li>
              <li>📱 100% visuelle et vocale (Wolof, Pulaar, Serer)</li>
              <li>🔋 Moins de ressources (optimisée pour faible débit)</li>
              <li>📡 Mode Mesh Network hors-ligne</li>
            </ul>
          </div>

          <div className="button-group">
            <Button href="/mool-safe" variant="primary" size="lg">
              ← Retour à Mool-Safe
            </Button>
            <Button href="/dashboard" variant="secondary" size="lg">
              Dashboard Marine →
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

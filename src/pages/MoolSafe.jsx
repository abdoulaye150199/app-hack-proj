import { moolSafeData } from '../data/mockData'
import Card from '../components/Card'
import Button from '../components/Button'
import './MoolSafe.css'

export default function MoolSafe() {
  const [sosActive, setSosActive] = useState(false)
  const [meshActive, setMeshActive] = useState(true)
  const [batteryLow, setBatteryLow] = useState(false)

  return (
    <div className="mool-safe">
      {/* Header */}
      <section className="mool-safe-header">
        <div className="header-content">
          <h1>{moolSafeData.name}</h1>
          <p className="subtitle">{moolSafeData.subtitle}</p>
          <p className="description">{moolSafeData.description}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <h2>Caractéristiques Principales</h2>
        <div className="features-grid">
          {moolSafeData.features.map((feature) => (
            <Card key={feature.id} icon={feature.icon} title={feature.label}>
              <p>{feature.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Simulation Section */}
      <section className="simulation-section">
        <h2>Simulation Interactive — Bracelet en Mer</h2>
        
        <div className="sim-container">
          {/* Bracelet Display */}
          <div className="bracelet-display">
            <div className="bracelet-screen">
              <div className="screen-header">
                <span className="time">{moolSafeData.liveData.time}</span>
              </div>
              
              <div className="screen-content">
                <div className="location-info">
                  <span className="gps-icon">📍</span>
                  <small>{moolSafeData.liveData.location}</small>
                </div>

                <div className="metrics">
                  <div className="metric">
                    <span className="label">Vitesse</span>
                    <span className="value">{moolSafeData.liveData.speed}</span>
                  </div>
                  <div className="metric">
                    <span className="label">Cap</span>
                    <span className="value">{moolSafeData.liveData.bearing}</span>
                  </div>
                </div>

                <div className="battery-temp">
                  <div className="metric">
                    <span className="label">Batterie</span>
                    <span className="value">{moolSafeData.liveData.battery}</span>
                  </div>
                  <div className="metric">
                    <span className="label">Temp</span>
                    <span className="value">{moolSafeData.liveData.temperature}</span>
                  </div>
                </div>

                <div className="heart-rate">
                  <span className="label">Fréq. cardiaque</span>
                  <span className="value">{moolSafeData.liveData.heartRate}</span>
                </div>

                <div className="status-bar">
                  <span className="status-badge">NORMAL</span>
                </div>

                <div className="mode-indicator">
                  {meshActive && <span>{moolSafeData.liveData.waterMode}</span>}
                </div>
              </div>

              {/* SOS Button */}
              <button
                className={`sos-button ${sosActive ? 'active' : ''}`}
                onClick={() => setSosActive(!sosActive)}
              >
                SOS
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="controls">
            <div className="control-group">
              <h3>Contrôles de simulation</h3>

              <Button
                onClick={() => setSosActive(!sosActive)}
                variant={sosActive ? 'danger' : 'warning'}
                size="lg"
              >
                {sosActive ? '🚨 SOS Actif' : '📍 Appeler SOS'}
              </Button>

              <Button variant="secondary" size="md">
                ⚓ Simuler noyade auto
              </Button>

              <Button variant="outline" size="md">
                🔋 Batterie faible
              </Button>

              <Button
                onClick={() => setMeshActive(!meshActive)}
                variant={meshActive ? 'primary' : 'outline'}
                size="md"
              >
                {meshActive ? '📡 Mesh ON — désactiver' : '📡 Mesh OFF — activer'}
              </Button>

              <Button variant="outline" size="md">
                🔄 Réinitialiser simulation
              </Button>
            </div>

            {/* Mesh Network */}
            <div className="mesh-network">
              <h3>Réseau Mesh — Voisins de Mer</h3>
              {moolSafeData.meshNetwork.map((node) => (
                <div key={node.id} className="mesh-node">
                  <div className="node-header">
                    <span className="node-name">{node.name}</span>
                    {node.signal && <span className="signal-badge">{node.signal}</span>}
                  </div>
                  {node.distance && (
                    <small>
                      Signal {node.signal} — {node.distance}
                      {node.relays && ` — ${node.relays} relais`}
                    </small>
                  )}
                  {node.status && <small className="offline">{node.status}</small>}
                </div>
              ))}
            </div>

            {/* Event Log */}
            <div className="event-log">
              <h3>Journal d'événements</h3>
              <div className="log-entries">
                {moolSafeData.eventLog.map((log, idx) => (
                  <div key={idx} className="log-entry">
                    <span className="log-time">{log.time}</span>
                    <span className="log-event">{log.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mool-safe-cta">
        <div className="cta-content">
          <h2>Voir aussi</h2>
          <div className="cta-buttons">
            <Button href="/app" variant="primary" size="lg">
              📱 App Mobile
            </Button>
            <Button href="/dashboard" variant="secondary" size="lg">
              📊 Dashboard Marine
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'

import { homeData, pillars } from '../data/mockData'
import Button from '../components/Button'
import Card from '../components/Card'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            SEN-MOOL <span className="protect">PROTECT</span> <span className="version">2.0</span>
          </h1>
          <p className="hero-subtitle">{homeData.subtitle}</p>
          <p className="hero-description">{homeData.description}</p>

          <div className="hero-buttons">
            {homeData.ctaButtons.map((btn, index) => (
              <Button 
                key={btn.id} 
                href={btn.link} 
                variant={index === 0 ? "primary" : "secondary"} 
                size="lg"
              >
                <span>{btn.icon}</span>
                {btn.text}
              </Button>
            ))}
          </div>
        </div>

        <div className="hero-image">
          <img src="/hero.png" alt="Mool-Safe Bracelet" className="watch-image" />
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars-section">
        <div className="section-header">
          <span className="section-label">LES 3 PILIERS</span>
          <h2>Vision du New Deal Technologique</h2>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <Card
              key={pillar.id}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              className="pillar-card"
            />
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <div className="section-header">
          <span className="section-label">DÉMONSTRATION INTERACTIVE</span>
          <h2>Découvrez les 4 composantes en action</h2>
          <p className="section-subtitle">
            Une simulation visuelle des interfaces Mool-Safe, App Mobile, Dashboard et Voisin de Mer — le tout, en temps réel.
          </p>
        </div>

        <div className="demo-video">
          <div className="play-button">▶</div>
          <p className="demo-text">Cliquez pour lire la vidéo</p>
        </div>

        <div className="demo-links">
          <a href="#mool-safe">📱 Mool-Safe — Bracelet</a>
          <a href="#app">📱 App Mobile — Inclusive</a>
          <a href="#dashboard">📊 Mool-Control — Dashboard</a>
          <a href="#voisin">🌊 Voisin de Mer — Mesh</a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à Protéger la Mer ?</h2>
          <p>Explorez nos solutions en action</p>
          <div className="cta-buttons">
            <Button href="/mool-safe" variant="primary" size="lg">
              Découvrir Mool-Safe
            </Button>
            <Button href="/dashboard" variant="secondary" size="lg">
              Voir le Dashboard
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

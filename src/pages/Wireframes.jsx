import { systemComponents } from '../data/mockData'
import Card from '../components/Card'
import Button from '../components/Button'
import './Wireframes.css'

export default function Wireframes() {
  return (
    <div className="wireframes">
      {/* Header */}
      <div className="wireframes-header">
        <h1>Maquettes & Wireframes</h1>
        <p>Les 4 briques d'une vision</p>
      </div>

      {/* Components Overview */}
      <section className="components-section">
        <div className="section-header-centered">
          <span className="section-label">COMPOSANTES DU SYSTÈME</span>
          <h2>Trois briques, une vision</h2>
        </div>

        <div className="components-grid">
          {systemComponents.map((component) => (
            <Card key={component.id} icon={component.icon} className="component-card">
              <h3>{component.name}</h3>
              <p className="component-description">{component.description}</p>
              <ul className="features-list">
                {component.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Wireframes Gallery */}
      <section className="wireframes-gallery">
        <h2>Vues & Interfaces</h2>

        <div className="wireframes-grid">
          {/* Accueil */}
          <div className="wireframe-item">
            <div className="wireframe-mockup">
              <div className="wireframe-preview">
                <div className="wireframe-header">Accueil</div>
                <div className="wireframe-content">
                  <div className="wireframe-hero"></div>
                  <div className="wireframe-text"></div>
                  <div className="wireframe-buttons"></div>
                </div>
              </div>
            </div>
            <h3>SEN-MOOL PROTECT 2.0</h3>
            <p>Page d'accueil — Navigation et appels à l'action</p>
            <Button href="/" variant="outline" size="sm">
              Voir la page
            </Button>
          </div>

          {/* Mool-Safe */}
          <div className="wireframe-item">
            <div className="wireframe-mockup">
              <div className="wireframe-preview">
                <div className="wireframe-header">Mool-Safe</div>
                <div className="wireframe-content">
                  <div className="wireframe-device"></div>
                  <div className="wireframe-info"></div>
                </div>
              </div>
            </div>
            <h3>Bracelet Connecté</h3>
            <p>Simulation interactive du bracelet IoT maritime</p>
            <Button href="/mool-safe" variant="outline" size="sm">
              Voir la page
            </Button>
          </div>

          {/* App Mobile */}
          <div className="wireframe-item">
            <div className="wireframe-mockup mobile">
              <div className="wireframe-preview mobile">
                <div className="wireframe-notch"></div>
                <div className="wireframe-header">App Mobile</div>
                <div className="wireframe-content mobile">
                  <div className="wireframe-card"></div>
                  <div className="wireframe-card"></div>
                </div>
                <div className="wireframe-nav"></div>
              </div>
            </div>
            <h3>App Mool-Control</h3>
            <p>Interface inclusive pour pêcheurs (100% vocale & visuelle)</p>
            <Button href="/app" variant="outline" size="sm">
              Voir la page
            </Button>
          </div>

          {/* Dashboard */}
          <div className="wireframe-item">
            <div className="wireframe-mockup desktop">
              <div className="wireframe-preview desktop">
                <div className="wireframe-header">Dashboard</div>
                <div className="wireframe-content desktop">
                  <div className="wireframe-stats"></div>
                  <div className="wireframe-map"></div>
                  <div className="wireframe-table"></div>
                </div>
              </div>
            </div>
            <h3>Mool-Control Dashboard</h3>
            <p>Commande temps réel pour marines et forces de l'ordre</p>
            <Button href="/dashboard" variant="outline" size="sm">
              Voir la page
            </Button>
          </div>

          {/* Piliers */}
          <div className="wireframe-item">
            <div className="wireframe-mockup">
              <div className="wireframe-preview">
                <div className="wireframe-header">Vision 3 Piliers</div>
                <div className="wireframe-content">
                  <div className="wireframe-pillar"></div>
                  <div className="wireframe-pillar"></div>
                  <div className="wireframe-pillar"></div>
                </div>
              </div>
            </div>
            <h3>New Deal Technologique</h3>
            <p>Souveraineté • Inclusion • Sécurité</p>
            <Button href="/" variant="outline" size="sm">
              Voir la page
            </Button>
          </div>

          {/* Architecture */}
          <div className="wireframe-item">
            <div className="wireframe-mockup">
              <div className="wireframe-preview">
                <div className="wireframe-header">Architecture</div>
                <div className="wireframe-content">
                  <div className="wireframe-box"></div>
                  <div className="wireframe-arrow"></div>
                  <div className="wireframe-box"></div>
                </div>
              </div>
            </div>
            <h3>Système Intégré</h3>
            <p>Bracelet → App → Dashboard → Mesh Network</p>
            <Button href="#" variant="outline" size="sm">
              Détails
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <h2>Stack Technologique</h2>

        <div className="tech-grid">
          <div className="tech-card">
            <h3>Frontend</h3>
            <ul>
              <li>⚛️ React 19</li>
              <li>🛣️ React Router v7</li>
              <li>🎨 CSS3 Gradients</li>
              <li>📱 Responsive Design</li>
              <li>♿ Accessibilité WCAG</li>
            </ul>
          </div>

          <div className="tech-card">
            <h3>Hardware</h3>
            <ul>
              <li>⌚ Bracelet IoT Mool-Safe</li>
              <li>📡 Dual-Signal Maritime</li>
              <li>🛰️ GPS Précision &lt;3m</li>
              <li>🔋 72h Autonomie</li>
              <li>💧 IP68 Waterproof</li>
            </ul>
          </div>

          <div className="tech-card">
            <h3>Backend & Cloud</h3>
            <ul>
              <li>☁️ SENUM SA Cloud National</li>
              <li>📊 Real-Time Data</li>
              <li>🔐 Encryption Nationale</li>
              <li>🌐 API RESTful</li>
              <li>📡 Mesh Network P2P</li>
            </ul>
          </div>

          <div className="tech-card">
            <h3>AI & Vision</h3>
            <ul>
              <li>🤖 YOLO Maritime v3.2</li>
              <li>📹 Real-Time Detection</li>
              <li>🧠 Predictive Analytics</li>
              <li>🚨 Risk Zones IA</li>
              <li>📊 Behavioral Algorithms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="key-features">
        <h2>Caractéristiques Clés</h2>

        <div className="features-showcase">
          <div className="feature-group">
            <h3>🌍 Souveraineté Numérique</h3>
            <ul>
              <li>Données 100% sénégalaises</li>
              <li>Zero transfert international</li>
              <li>Contrôle d'État complet</li>
              <li>Conformité juridique nationale</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>👥 Inclusion Technologique</h3>
            <ul>
              <li>100% visuelle et vocale</li>
              <li>Langues locales (Wolof, Pulaar, Serer)</li>
              <li>Sans alphabétisation requise</li>
              <li>Mode offline complet</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>🛡️ Sécurité Maritime</h3>
            <ul>
              <li>Détection de noyade automatique</li>
              <li>SOS temps réel 24/7</li>
              <li>Réseau Mesh d'urgence</li>
              <li>Commande coordinée marines</li>
            </ul>
          </div>

          <div className="feature-group">
            <h3>⚡ Performance & Autonomie</h3>
            <ul>
              <li>72h batterie bracelet</li>
              <li>Latence &lt; 2 secondes</li>
              <li>Portée 5km mesh network</li>
              <li>Résiste à l'eau salée</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wireframes-cta">
        <div className="cta-content-large">
          <h2>Prêt à explorer le projet ?</h2>
          <p>Découvrez chaque module interactif</p>

          <div className="cta-grid">
            <Button href="/" variant="primary" size="lg">
              🏠 Accueil
            </Button>
            <Button href="/mool-safe" variant="secondary" size="lg">
              ⌚ Mool-Safe
            </Button>
            <Button href="/app" variant="primary" size="lg">
              📱 App Mobile
            </Button>
            <Button href="/dashboard" variant="secondary" size="lg">
              📊 Dashboard
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

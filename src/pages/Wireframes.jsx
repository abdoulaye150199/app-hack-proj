import './Wireframes.css'

export default function Wireframes() {
  return (
    <div className="wireframes-page">
      <div className="page-header">
        <h1>Maquettes & Wireframes</h1>
        <p>Prototypes des interfaces utilisateur du système SEN-MOOL PROTECT</p>
      </div>

      <div className="wireframes-container">
        <section className="wireframe-section">
          <h2>Architecture Générale</h2>
          <div className="wireframe-grid">
            <div className="wireframe-item">
              <div className="wireframe-box">
                <h3>Bracelet Mool-Safe</h3>
                <p>Interface IoT maritime avec détection de noyade et SOS automatique</p>
              </div>
            </div>
            <div className="wireframe-item">
              <div className="wireframe-box">
                <h3>App Mobile Inclusive</h3>
                <p>Interface vocale et visuelle en Wolof, Pulaar et Serer</p>
              </div>
            </div>
            <div className="wireframe-item">
              <div className="wireframe-box">
                <h3>Dashboard Mool-Control</h3>
                <p>Tableau de bord temps réel pour la Marine Nationale et Gendarmerie Maritime</p>
              </div>
            </div>
            <div className="wireframe-item">
              <div className="wireframe-box">
                <h3>Système de Mesh Network</h3>
                <p>Communication décentralisée pour zone sans couverture réseau</p>
              </div>
            </div>
          </div>
        </section>

        <section className="wireframe-section">
          <h2>Prototypes en Développement</h2>
          <div className="prototype-list">
            <div className="prototype-item">
              <h3>📱 Wireframe Bracelet</h3>
              <p>Écran principal, SOS, Paramètres, Mesh Network</p>
              <span className="status">En développement</span>
            </div>
            <div className="prototype-item">
              <h3>📊 Wireframe Dashboard</h3>
              <p>Carte temps réel, Alertes, Logistique, Rapports</p>
              <span className="status">En développement</span>
            </div>
            <div className="prototype-item">
              <h3>🎯 Wireframe App Mobile</h3>
              <p>Accueil, Profil, SOS, Historique, Support</p>
              <span className="status">En développement</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

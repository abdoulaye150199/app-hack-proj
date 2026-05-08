import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import MoolSafe from './pages/MoolSafe'
import MobileApp from './pages/MobileApp'
import Dashboard from './pages/Dashboard'
import Wireframes from './pages/Wireframes'
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mool-safe" element={<MoolSafe />} />
        <Route path="/app" element={<MobileApp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wireframes" element={<Wireframes />} />
      </Routes>
      <Footer />
    </Router>
  )
}

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>&copy; 2026 SEN-MOOL PROTECT. All rights reserved.</p>
        <p>Souveraineté Numérique & Économie Bleue — New Deal Technologique</p>
      </div>
    </footer>
  )
}

export default App


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import HomePage from '../pages/homePage'
import AboutPage from '../pages/aboutPage'
import ContactPage from '../pages/contactPage'
import StoresPage from '../pages/storesPage'
import './app.scss'
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="pagesDisplay">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/stores-information" element={<StoresPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

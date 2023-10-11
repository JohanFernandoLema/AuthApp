import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import HomePage from '../pages/homePage'
import AboutPage from '../pages/aboutPage'
import ContactPage from '../pages/contactPage'
import StoresListPage from '../pages/StoresListPage'
import StorePage from '../pages/StorePage'
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
            <Route path="/stores-list" element={<StoresListPage />} />
            <Route path="/stores-list/:storeId" element={<StorePage />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

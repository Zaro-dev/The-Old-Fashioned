
import { Routes,Route,Link } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CompaniesPage from './pages/CompaniesPage'
import CompanyDetails from './pages/CompanyDetails'
import BottlesPage from './pages/BottlesPage'
import BottleDetails from './pages/BottleDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'

function App() {
  

  return (

    <>
    <Navbar />

    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/companies' element={<CompaniesPage />} />
      <Route path='/companies/:companyId' element={<CompanyDetails />} />
      <Route path='/bottles' element= {<BottlesPage />} />
      <Route path='/bottles/:bottleId' element={<BottleDetails />} />
      <Route path='/error' element={<ErrorPage/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App;

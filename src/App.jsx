import { useState, useEffect } from 'react'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import LoginForm from './components/login/index.jsx'
import Header from './components/header/index.jsx'
import Footer from './components/footer/index.jsx'
import { Outlet } from 'react-router-dom'

function App() {



  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;

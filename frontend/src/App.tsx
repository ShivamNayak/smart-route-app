import { useState } from 'react'
import './App.css'
import SearchSection from './searchButton/JustButton.tsx'
import Map from './mapUtils/Map.tsx'
function App() {

  return (
    <>
      <section id="center">
        <h1 className="header-style">Smart Route App</h1>
        <SearchSection />
        <Map />
      </section>
    </>
  )
}

export default App

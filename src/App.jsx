import './App.css'
import { Header } from './Components/Header'
import "./Components/Header.css"
import { Routes, Route } from "react-router-dom"
import { Articles } from "./Components/Articles"

function App() {


  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={
          <ul>
          <Articles />
          </ul>
          } />
      </Routes>
    </>
  );
}

export default App

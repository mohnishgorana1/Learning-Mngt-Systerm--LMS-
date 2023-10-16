import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <HomeLayout /> */}
    </>
  )
}

export default App

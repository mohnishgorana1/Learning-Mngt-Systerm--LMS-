import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import PageNotFound from "./pages/PageNotFound"



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />


      </Routes>
      {/* <HomeLayout /> */}
    </>
  )
}

export default App

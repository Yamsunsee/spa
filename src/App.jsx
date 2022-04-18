import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Product from "./components/Product"

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  )
}

export default App


import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Product from "./components/Product"

const App = () => {
  return (
    <Routes>
      <Route path="/spa" element={<Home />}></Route>
      <Route path="/spa/product" element={<Product />}></Route>
      <Route path="/spa/about" element={<About />}></Route>
    </Routes>
  )
}

export default App


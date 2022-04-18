import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className="nav">
        <Link to="product">Product</Link>
        <Link to="about">About</Link>
      </div>
      <div>
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odio provident quasi at officia enim eveniet
          facere id. Autem vero ea provident amet nisi accusantium iusto repudiandae repellendus veniam voluptate!
        </p>
      </div>
    </div>
  )
}

export default Home

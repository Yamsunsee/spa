import { Link } from "react-router-dom"

const Product = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/spa">Home</Link>
        <Link to="/spa/about">About</Link>
      </div>
      <div>
        <h1>Product page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odio provident quasi at officia enim eveniet
          facere id. Autem vero ea provident amet nisi accusantium iusto repudiandae repellendus veniam voluptate!
        </p>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          <li>Product 4</li>
          <li>Product 5</li>
        </ul>
      </div>
    </div>
  )
}

export default Product

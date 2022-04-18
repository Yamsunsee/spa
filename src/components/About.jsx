import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
      </div>
      <div>
        <h1>About page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odio provident quasi at officia enim eveniet
          facere id. Autem vero ea provident amet nisi accusantium iusto repudiandae repellendus veniam voluptate!
        </p>
      </div>
    </div>
  )
}

export default About

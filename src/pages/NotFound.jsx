import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>Do you want return to homepage?</p>
      <Link to={`/`}>Go Home</Link>
    </div>
  );
};



export default NotFound;
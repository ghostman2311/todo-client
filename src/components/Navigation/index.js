import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link className="brand-logo" to="/notes">
        <h1>
          <span className="brand-highlight">NØ̈t</span>Lab
        </h1>
      </Link>
    </nav>
  );
};

export { Navigation };

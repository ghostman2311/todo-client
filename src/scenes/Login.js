import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  const loginHandler = (email, password) => {};
  return (
    <div>
      <h1 className="h-centered">Login</h1>
      <LoginForm onSubmit={loginHandler} />
      <Link style={{ display: "block" }} className="h-centered" to="/register">
        Don't have an accoutn yet? Click to register
      </Link>
    </div>
  );
};

export { Login };

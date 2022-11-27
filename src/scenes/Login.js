import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  const loginHandler = (email, password) => {};
  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={loginHandler} />
      <Link to="/register">Don't have an accoutn yet? Click to register</Link>
    </>
  );
};

export { Login };

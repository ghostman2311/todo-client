import { Link } from "react-router-dom";
import { CreateAccountForm } from "../components/CreateAccountForm";

const Register = () => {
  const registerHandler = () => {};
  return (
    <>
      <h1 className="h-centered">Register</h1>
      <CreateAccountForm onSubmit={registerHandler} />
      <Link style={{ display: "block" }} className="h-centered" to="/login">
        Have an account? Click to Login
      </Link>
    </>
  );
};

export { Register };

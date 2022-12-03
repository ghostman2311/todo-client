import { Link } from "react-router-dom";
import { CreateAccountForm } from "../components/CreateAccountForm";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const registerHandler = async (email, password, confirmPassword) => {
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      history.push("/notes");
    }
  };
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

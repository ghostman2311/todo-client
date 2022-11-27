import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const loginHandler = async (email, password) => {
    await signInWithEmailAndPassword(getAuth(), email, password);
    history.push("/notes");
  };
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

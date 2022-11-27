import React from "react";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <input
        className="full-width space-below"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="full-width space-below"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="full-width space-below"
        onClick={() => onSubmit(email, password)}
      >
        Login
      </button>
    </>
  );
};

export { LoginForm };

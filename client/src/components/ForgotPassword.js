import { useState } from "react";

const ForgotPassword = ({ activeForm }) => {
  const [email, setEmail] = useState("");

  return (
    <>
      <form>
        <h1>Recover your password</h1>
        <p>
          Please submit your email, if there's a user attached to it,
          instructions to reset password will be sent.{" "}
        </p>
        <div className="inputsContainer">
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <input type="submit" value="Recover passsword" />
        </div>
        <button
          onClick={(e) => {
            activeForm(e, "login");
          }}
        >
          Back to Login
        </button>
      </form>
    </>
  );
};
export default ForgotPassword;

import Button from "@mui/material/Button";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase-init";
import "./login.css";
type Props = {};

const LoginComponent = (props: Props) => {
  const onLogin = (e: any) => {
    e.preventDefault();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <img src="./globant_logo_main.png" alt="Globant logo" />
        <h1>Sign in to Globant CV Generator</h1>
        <p>www.glob.cv.com</p>
        <Button type="submit" onClick={onLogin}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default LoginComponent;

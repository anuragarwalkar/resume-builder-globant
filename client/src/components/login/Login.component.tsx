import { LinearProgress } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { signInWithPopup } from "firebase/auth";
import { Fragment } from "react";
import { auth, provider } from "../../firebase-init";
import "./login.styles.scss";
type Props = {
  loading: boolean;
};

const LoginComponent = ({ loading }: Props) => {
  const onLogin = (e: any) => {
    e.preventDefault();
    signInWithPopup(auth, provider);
  };

  const Loader = () => {
    return (
      <div className="login-loader-container">
        <Box sx={{ width: "50%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  };

  const LoginScreenContainer = () => {
    return (
      <div className="loginInnerContainer">
        <LoginScreenElements />
      </div>
    );
  };

  const LoginScreenElements = () => {
    return (
      <Fragment>
        <img src="./globant_logo_main.png" alt="Globant logo" />
        <h1>Sign in to Globant CV Generator</h1>
        <p>www.glob.cv.com</p>
        {loading && <Loader />}

        {!loading && (
          <Button type="submit" onClick={onLogin}>
            Sign in with Google
          </Button>
        )}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className="loginContainer">
        <LoginScreenContainer />
      </div>
    </Fragment>
  );
};

export default LoginComponent;

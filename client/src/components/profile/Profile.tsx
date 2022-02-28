import EmailIcon from "@mui/icons-material/Email";
import {
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import {
  addProfileDetailsByName,
  DetailsOptions,
} from "../../slices/profile-slice";
import "./profile.styles.scss";

function Profile({ isMobile }: { isMobile: boolean }) {
  const dispatch = useDispatch();

  const values = useAppSelector((state) => state.profile.details);

  const handleChange = (e: SyntheticEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    let keyName = name as keyof DetailsOptions;
    dispatch(addProfileDetailsByName({ value, name: keyName }));
  };

  const MainContent = () => {
    return (
      <div className="cv-editor-profile">
        <TextField
          margin="dense"
          variant="standard"
          name="name"
          label="Full Name"
          style={{ width: "40%" }}
          required
          value={values.name}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Email"
          variant="standard"
          name="email"
          required
          style={{ width: "40%" }}
          value={values.email}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextareaAutosize
          name="description"
          placeholder="Your short introduction"
          required
          minRows={4}
          style={{ width: "90%" }}
          value={values.description}
          onChange={handleChange}
        />
      </div>
    );
  };

  return !isMobile ? (
    <Paper>
      <Card>
        <CardHeader title="Personal Details" />
      </Card>
      <CardContent>
        <MainContent />
      </CardContent>
    </Paper>
  ) : (
    <MainContent />
  );
}

export default Profile;

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
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { addProfileDetailsByName } from "../../slices/profile-slice";
import "./profile.styles.scss";

function Profile() {
  const dispatch = useDispatch();

  const values = useAppSelector((state) => state.profile.details);

  const handleChange = (data: any) => {
    const { value, name } = data.target;
    dispatch(addProfileDetailsByName({ value, name }));
  };

  return (
    <Paper>
      <Card>
        <CardHeader title="Personal Details" />
      </Card>
      <CardContent>
        <div className="cv-editor-profile">
          <TextField
            margin="dense"
            variant="outlined"
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
            variant="outlined"
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
      </CardContent>
    </Paper>
  );
}

export default Profile;

/* <Button
variant="contained"
color="secondary"
onClick={this.createAndDownloadPDF}
endIcon={<GetAppIcon />}
>
Generate PDF
</Button>  */

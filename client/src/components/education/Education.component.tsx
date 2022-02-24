import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEducation } from "../../slices/education-slice";
import "./education.styles.scss";

const educationInitialState = {
  collegeUniversity: "",
  fromYear: "",
  toYear: "",
  qualification: "",
  location: "",
};

function Profile() {
  // const values = useAppSelector((state) => state.education);
  const [formData, setFormData] = useState(educationInitialState);
  const dispatch = useDispatch();

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData((data: any) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const onAddProject = () => {
    dispatch(addEducation(formData));
    setFormData(educationInitialState);
  };

  return (
    <Paper>
      <Card>
        <CardHeader title="Education Details" />
      </Card>
      <CardContent>
        <div className="cv-editor__education">
          <div className="cv-editor__education__content">
            <TextField
              margin="dense"
              variant="outlined"
              name="collegeUniversity"
              label="College/Unviersity"
              style={{ width: "45%" }}
              required
              value={formData.collegeUniversity}
              onChange={onChangeInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="dense"
              label="Qualification"
              variant="outlined"
              value={formData.qualification}
              style={{ width: "45%" }}
              name="qualification"
              required
              onChange={onChangeInput}
            />

            <TextField
              margin="dense"
              variant="outlined"
              name="fromYear"
              type="date"
              style={{ width: "45%" }}
              required
              value={formData.fromYear}
              onChange={onChangeInput}
            />

            <TextField
              margin="dense"
              variant="outlined"
              name="toYear"
              type="date"
              style={{ width: "45%" }}
              required
              value={formData.toYear}
              onChange={onChangeInput}
            />

            <TextField
              margin="dense"
              label="Location"
              variant="outlined"
              style={{ width: "45%" }}
              name="location"
              required
              value={formData.location}
              onChange={onChangeInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button variant="contained" onClick={onAddProject} color="primary">
            Add Education
          </Button>
        </div>
      </CardContent>
    </Paper>
  );
}

export default Profile;

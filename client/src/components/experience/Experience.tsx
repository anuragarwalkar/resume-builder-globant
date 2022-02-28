import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
import { addAExperience } from "../../slices/experience-slice";
import "./experience.styles.scss";

const initialFormState = {
  organization: "",
  position: "",
  description: "",
  to: "",
  from: "",
  location: "",
};
function Experience({ isMobile }: { isMobile: boolean }) {
  // const [values] = useAppSelector((state) => state.experience.experiences);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialFormState);

  const setValues = (e: any) => {
    const { name, value } = e.target;
    setFormData((data: any) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const onAddProject = () => {
    dispatch(addAExperience(formData));
    setFormData(initialFormState);
  };

  return (
    <Paper>
      <Card>
        <CardHeader title="Experience Details" />
      </Card>
      <CardContent>
        <div className="cv-editor-experience">
          <div className="cv-editor-experience__content">
            <TextField
              margin="dense"
              variant="standard"
              name="organization"
              label="Organisation"
              style={{ width: "45%" }}
              required
              value={formData.organization}
              onChange={setValues}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="dense"
              variant="standard"
              name="position"
              label="Position"
              style={{ width: "45%" }}
              required
              value={formData.position}
              onChange={setValues}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <EventSeatIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="from"
              label="Duration From"
              name="from"
              type="date"
              required
              variant="standard"
              sx={{ width: "45%" }}
              value={formData.from}
              onChange={setValues}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="to"
              label="Duration To"
              name="to"
              type="date"
              required
              variant="standard"
              sx={{ width: "45%" }}
              value={formData.to}
              onChange={setValues}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              margin="dense"
              label="Location"
              variant="standard"
              style={{ width: "45%" }}
              name="location"
              required
              value={formData.location}
              onChange={setValues}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="dense"
              label="Description"
              variant="standard"
              style={{ width: "45%" }}
              name="description"
              required
              value={formData.description}
              onChange={setValues}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button variant="contained" onClick={onAddProject} color="primary">
              Add Experience
            </Button>
          </div>
        </div>
      </CardContent>
    </Paper>
  );
}

export default Experience;

import BusinessIcon from "@mui/icons-material/Business";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import {
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import "./experience.styles.scss";

function Experience() {
  const [values] = useSelector((state: any) => state.experience.experiences);

  return (
    <Paper>
      <Card>
        <CardHeader title="Experience Details" />
      </Card>
      <CardContent>
        <div className="cv-editor-experience">
          <div className="cv-editor-experience__header">
            <CheckCircleIcon />
            <span className="pl-3">Experience 1</span>
          </div>
          <div className="cv-editor-experience__content">
            <TextField
              margin="dense"
              variant="outlined"
              name="institute"
              label="Organisation"
              style={{ width: "45%" }}
              required
              value={values.institute}
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
              variant="outlined"
              name="position"
              label="Position"
              style={{ width: "45%" }}
              required
              value={values.position}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <EventSeatIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="dense"
              variant="outlined"
              name="duration"
              label="Duration"
              style={{ width: "45%" }}
              required
              value={values.duration}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <TimelapseIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="dense"
              label="Description"
              variant="outlined"
              style={{ width: "45%" }}
              name="experienceDescription"
              required
              value={values.experienceDescription}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </CardContent>
    </Paper>
  );
}

export default Experience;

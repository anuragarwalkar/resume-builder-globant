import BusinessIcon from "@mui/icons-material/Business";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles: Function = makeStyles((theme: any) => ({
  margin: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing(),
  },
}));

function Experience() {
  const [values] = useSelector((state: any) => state.experience.experiences);
  const classes = useStyles();

  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Experience Details" />
      </Card>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              lg={4}
              alignItems="flex-end"
              alignContent="flex-end"
            >
              <h5>
                <CheckCircleIcon />
                <span className="pl-3">Experience 1</span>
              </h5>
            </Grid>
            <Grid item xs={0} lg={8} />

            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="institute"
                label="Institue/Organisation"
                style={{ width: "90%" }}
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
            </Grid>
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="position"
                label="Position"
                style={{ width: "90%" }}
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
            </Grid>

            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="duration"
                label="Duration"
                style={{ width: "90%" }}
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
            </Grid>

            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "97%" }}
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
            </Grid>
          </Grid>
          <br />
          <Divider />
        </div>
      </CardContent>
    </Paper>
  );
}

export default Experience;

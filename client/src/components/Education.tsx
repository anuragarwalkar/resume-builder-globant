import DateRangeIcon from "@mui/icons-material/DateRange";
import SchoolIcon from "@mui/icons-material/School";
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
    margin: theme.spacing(1.5),
  },
  padding: {
    padding: theme.spacing(1.5),
  },
}));

function Profile() {
  const classes = useStyles();
  const values = useSelector((state: any) => state.education);

  const onChangeInput = () => {};

  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Education Details" />
      </Card>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center">
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="college"
                label="College/Unviersity"
                style={{ width: "80%" }}
                required
                value={values.college}
                onChange={onChangeInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="fromYear"
                label="From Year"
                type="date"
                style={{ width: "80%" }}
                required
                value={values.fromYear}
                onChange={onChangeInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="toYear"
                type="date"
                label="To Year"
                style={{ width: "80%" }}
                required
                value={values.toYear}
                onChange={onChangeInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                label="Qualification"
                variant="outlined"
                style={{ width: "80%" }}
                name="qualification"
                required
                value={values.qualification}
                onChange={onChangeInput}
              />
            </Grid>

            <Grid item md={8} sm={12} xs={12} lg={8}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "90%" }}
                name="description"
                required
                value={values.description}
                onChange={onChangeInput}
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

export default Profile;

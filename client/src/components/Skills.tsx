import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  InputAdornment,
  Paper,
  Stack,
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

function Skills() {
  const classes = useStyles();
  const createAndDownloadPDF = () => {};
  const skills = useSelector((state: any) => state.extra.skills);
  console.log("values:", skills);

  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Extra Details" />
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
                <span className="pl-3">Skills/Languages</span>
              </h5>
            </Grid>
            <Grid item xs={0} lg={8} />
            <br />
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <Stack direction="row" spacing={1}>
                {skills.map((skill: any) => {
                  return (
                    <Chip key={skill.id} label={skill.name} color="primary" />
                  );
                })}
              </Stack>
              <TextField
                margin="dense"
                variant="outlined"
                name="skill"
                label="Add Skill"
                style={{ width: "90%" }}
                InputProps={{
                  endAdornment: <InputAdornment position="start" />,
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

export default Skills;

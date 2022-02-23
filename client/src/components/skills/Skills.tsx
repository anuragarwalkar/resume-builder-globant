import {
  Card,
  CardContent,
  CardHeader,
  Chip,
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
  const skills = useSelector((state: any) => state.extra.skills);

  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Skills" />
      </Card>
      <CardContent>
        <Stack direction="row" spacing={1}>
          {skills.map((skill: any) => {
            return <Chip key={skill.id} label={skill.name} color="primary" />;
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
      </CardContent>
    </Paper>
  );
}

export default Skills;

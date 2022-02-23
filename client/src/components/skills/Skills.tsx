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
import { useSelector } from "react-redux";
import "./skills.styles.scss";

function Skills() {
  const skills = useSelector((state: any) => state.extra.skills);

  return (
    <Paper>
      <Card>
        <CardHeader title="Skills" />
      </Card>
      <CardContent>
        <div className="cv-editor__skills">
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
            style={{ width: "30%" }}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </div>
      </CardContent>
    </Paper>
  );
}

export default Skills;

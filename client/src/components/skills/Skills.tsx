import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { AppRating } from "../../hoc/ProjectView.utils";
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
            variant="standard"
            name="skill"
            label="Add Skill"
            style={{ width: "30%" }}
          />

          <AppRating name="new" totalRating={5} rating={2} disabled={false} />
        </div>
      </CardContent>
    </Paper>
  );
}

export default Skills;

import DescriptionIcon from "@mui/icons-material/Description";
import LinkIcon from "@mui/icons-material/Link";
import TitleIcon from "@mui/icons-material/Title";
import {
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import "./projects.styles.scss";

function Projects() {
  const [project] = useAppSelector((state) => state.project.projects);

  return (
    <Paper>
      <Card>
        <CardHeader title="Projects Developed" />
      </Card>
      <CardContent>
        <div className="cv-editor-projects">
          <h5>Project 1</h5>

          <TextField
            margin="dense"
            variant="outlined"
            name="title1"
            label="Title"
            style={{ width: "80%" }}
            required
            value={project.title}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="dense"
            variant="outlined"
            name="link1"
            label="Link"
            style={{ width: "80%" }}
            value={project.link}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            margin="dense"
            variant="outlined"
            name="projectDescription"
            label="Description"
            style={{ width: "80%" }}
            required
            value={project.projectDescription}
            onChange={() => {}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </CardContent>
    </Paper>
  );
}

export default Projects;

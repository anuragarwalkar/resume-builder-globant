// import DescriptionIcon from "@mui/icons-material/Description";
import LinkIcon from "@mui/icons-material/Link";
import TitleIcon from "@mui/icons-material/Title";
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
import { useAppSelector } from "../../app/hooks";
import { addAProject } from "../../slices/project-slice";
import RichTextEditor from "../rich-text-editor/RichTextEditor";

function Projects() {
  const [_] = useAppSelector((state) => state.project.projects);
  const [project, setProjectData] = useState({
    title: "",
    link: "",
    description: "",
  });
  const dispatch = useDispatch();

  const setValues = (e: any) => {
    const { value, name } = e.target;
    setProjectData((data: any) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  return (
    <Paper>
      <Card>
        <CardHeader title="Projects Developed" />
      </Card>
      <CardContent>
        <div className="cv-editor-projects">
          <h5>Project</h5>

          <TextField
            margin="dense"
            variant="outlined"
            name="title"
            label="Title"
            style={{ width: "80%" }}
            required
            value={project.title}
            onChange={setValues}
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
            name="link"
            label="Link"
            style={{ width: "80%" }}
            value={project.link}
            onChange={setValues}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
          />
          <RichTextEditor
            onChangeHtml={(value: any) => {
              setProjectData((data: any) => {
                return {
                  ...data,
                  description: value,
                };
              });
            }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(addAProject(project));
            }}
          >
            Add Project
          </Button>
        </div>
      </CardContent>
    </Paper>
  );
}

export default Projects;

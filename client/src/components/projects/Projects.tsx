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
import { addAProject } from "../../slices/project-slice";
import RichTextEditor from "../rich-text-editor/RichTextEditor";
import "./projects.styles.scss";

const initialFormState = {
  title: "",
  link: "",
  description: "",
};

function Projects({ isMobile }: { isMobile: boolean }) {
  // const [_] = useAppSelector((state) => state.project.projects);
  const [project, setProjectData] = useState(initialFormState);

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

  const onAddProject = (description: any) => {
    dispatch(addAProject({ ...project, description }));
    resetInputFields();
  };

  const resetInputFields = () => {
    setProjectData(initialFormState);
  };

  return (
    <Paper>
      <Card>
        <CardHeader title="Projects Developed" />
      </Card>
      <CardContent>
        <div className="cv-editor-projects">
          <div className="cv-editor-projects__content">
            <TextField
              margin="dense"
              variant="standard"
              name="title"
              label="Title"
              style={{ width: "45%" }}
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
              variant="standard"
              name="link"
              label="Link"
              style={{ width: "45%" }}
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
            <div className="cv-editor-projects__rich-text-editor">
              <RichTextEditor onSubmit={onAddProject}>
                <Button variant="contained" color="primary">
                  Add Project
                </Button>
              </RichTextEditor>
            </div>
          </div>
        </div>
      </CardContent>
    </Paper>
  );
}

export default Projects;

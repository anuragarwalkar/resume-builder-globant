import SendIcon from "@mui/icons-material/Send";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRating } from "../../hoc/app-rating.component";
import { addSkills } from "../../slices/extra-slice";
import "./skills.styles.scss";

function Skills() {
  const skills = useSelector((state: any) => state.extra.skills);
  const [skill, setSkill] = useState("");
  const rating = useRef({ rating: 0, totalRating: 5 });
  const ratingRef = useRef<any>();
  const dispatch = useDispatch();

  const changeData = (e: any) => {
    setSkill(e.target.value);
  };

  const onChangeRating = (val: number) => {
    rating.current.rating = val;
  };

  const onSubmit = () => {
    dispatch(addSkills({ name: skill, ...rating.current }));
    reset();
  };

  const reset = () => {
    rating.current.rating = 0;
    setSkill("");
    ratingRef.current.resetItems();
  };

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
          <div className="cv-editor__skills__input">
            <div className="cv-editor__skills__text">
              <TextField
                margin="dense"
                variant="standard"
                name="skill"
                label="Skill"
                value={skill}
                onChange={changeData}
                style={{ width: "100%" }}
              />
            </div>

            <div className="cv-editor__skills__rating">
              <AppRating
                onChangeRating={onChangeRating}
                name="new"
                ref={ratingRef}
                totalRating={5}
                rating={rating.current.rating}
                disabled={false}
              />
            </div>
            <IconButton onClick={onSubmit}>
              <SendIcon color="primary" />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Paper>
  );
}

export default Skills;

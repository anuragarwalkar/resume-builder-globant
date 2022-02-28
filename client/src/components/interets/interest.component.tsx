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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { addIntrests } from "../../slices/extra-slice";
import "./interests.styles.scss";

function Interests({ isMobile }: { isMobile: boolean }) {
  const interests = useAppSelector((state) => state.extra.interests);
  const [interest, setInterest] = useState("");
  const dispatch = useDispatch();

  const changeData = (e: any) => {
    setInterest(e.target.value);
  };

  const onSubmit = () => {
    dispatch(addIntrests({ name: interest }));
    reset();
  };

  const reset = () => {
    setInterest("");
  };

  return (
    <Paper>
      <Card>
        <CardHeader title="Interests" />
      </Card>
      <CardContent>
        <div className="cv-editor__interest">
          <Stack direction="row" spacing={1}>
            {interests.map((interest: any) => {
              return (
                <Chip key={interest.id} label={interest.name} color="primary" />
              );
            })}
          </Stack>
          <div className="cv-editor__interest__input">
            <TextField
              margin="dense"
              variant="standard"
              name="interest"
              label="Interest"
              value={interest}
              onChange={changeData}
              style={{ width: "40%" }}
            />
            <IconButton onClick={onSubmit}>
              <SendIcon color="primary" />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Paper>
  );
}

export default Interests;

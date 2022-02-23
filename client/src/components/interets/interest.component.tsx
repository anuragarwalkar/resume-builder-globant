import { Card, CardContent, CardHeader, Paper } from "@mui/material";
import "./interests.styles.scss";

function Interests() {
  return (
    <Paper>
      <Card>
        <CardHeader title="Interests" />
      </Card>
      <CardContent>
        <div className="cv-editor-interests"></div>
      </CardContent>
    </Paper>
  );
}

export default Interests;

import EmailIcon from "@mui/icons-material/Email";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProfileDetailsByName } from "../../slices/profile-slice";

const useStyles: Function = makeStyles((theme: any) => ({
  margin: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing(),
  },
}));

function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const values = useSelector((state: any) => state.profile.details);

  const handleChange = (data: any) => {
    const { value, name } = data.target;
    dispatch(addProfileDetailsByName({ value, name }));
  };

  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Personal Details" />
      </Card>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center">
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                variant="outlined"
                name="name"
                label="Full Name"
                style={{ width: "80%" }}
                required
                value={values.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Email"
                variant="outlined"
                name="email"
                required
                style={{ alignItems: "left", width: "80%" }}
                value={values.email}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Row
            style={{
              marginTop: "20px",
            }}
          >
            <TextareaAutosize
              name="description"
              placeholder="Your short introduction"
              required
              minRows={4}
              style={{ width: "90%" }}
              value={values.description}
              onChange={handleChange}
            />
          </Row>
          {/* <Button
            variant="contained"
            color="secondary"
            onClick={this.createAndDownloadPDF}
            endIcon={<GetAppIcon />}
          >
            Generate PDF
          </Button> */}
        </div>
      </CardContent>
    </Paper>
  );
}

export default Profile;

import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProfileDetailsByName } from "../slices/profile-slice";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing(),
  },
}));

function Profile({ nextStep }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const continueVal = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  const values = useSelector((state) => state.profile);

  const handleChange = (data) => {
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
                name="firstname"
                label="First Name"
                style={{ width: "80%" }}
                required
                value={values.firstname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Last Name"
                variant="outlined"
                style={{ width: "80%" }}
                name="lastname"
                required
                value={values.lastname}
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
          <Row style={{ marginTop: "20px" }}>
            <TextareaAutosize
              margin="dense"
              label="Title"
              name="description"
              variant="outlined"
              rowsMin={3}
              placeholder="Your short introduction"
              style={{ width: 200 }}
              required
              style={{ alignItems: "left", width: "80%" }}
              value={values.description}
              onChange={handleChange}
            />
          </Row>
          <Container className={classes.margin}>
            <Row>
              <Col lg={3} xs={0} />
              <Col lg={3} xs={5}>
                {/* TODO */}
                {/* <Button
                  variant="contained"
                  color="secondary"
                  onClick={nextStep}
                  disabled
                  startIcon={<NavigateBeforeIcon />}
                >
                  Back
                </Button> */}
              </Col>
              <Col lg={3} xs={5}>
                {/* <Button
                  variant="contained"
                  color="secondary"
                  onClick={continueVal}
                  endIcon={<NavigateNextIcon />}
                >
                  Next
                </Button> */}
              </Col>
              <Col lg={3} xs={1} />
            </Row>
          </Container>
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
      {/* <p className="text-center text-muted">Page 1 </p> */}
    </Paper>
  );
}

export default Profile;

import { Component } from "react";

const styles = (theme: any) => ({
  margin: {
    margin: theme.spacing(1.5),
  },
  padding: {
    padding: theme.spacing(),
  },
});

class Experience extends Component {
  render() {
    return <div></div>;
    // const { values } = this.props;
    // const { classes } = this.props;

    // return (
    //   <Paper className={classes.padding}>
    //     <Card>
    //       <CardHeader title="Experience Details" />
    //     </Card>
    //     <CardContent>
    //       <div className={classes.margin}>
    //         <Grid container spacing={2} alignItems="center">
    //           <Grid
    //             item
    //             xs={12}
    //             lg={4}
    //             alignItems="flex-end"
    //             alignContent="flex-end"
    //           >
    //             <h5>
    //               <CheckCircleIcon />
    //               <span className="pl-3">Experience 1</span>
    //             </h5>
    //           </Grid>
    //           <Grid item xs={0} lg={8} />

    //           <Grid item md={4} sm={12} xs={12} lg={4}>
    //             <TextField
    //               margin="dense"
    //               variant="outlined"
    //               name="institute1"
    //               label="Institue/Organisation"
    //               style={{ width: "90%" }}
    //               required
    //               value={values.institute1}
    //               onChange={this.props.handleChange}
    //               InputProps={{
    //                 endAdornment: (
    //                   <InputAdornment position="start">
    //                     <BusinessIcon />
    //                   </InputAdornment>
    //                 ),
    //               }}
    //             />
    //           </Grid>
    //           <Grid item md={4} sm={6} xs={12} lg={4}>
    //             <TextField
    //               margin="dense"
    //               variant="outlined"
    //               name="position1"
    //               label="Position"
    //               style={{ width: "90%" }}
    //               required
    //               value={values.position1}
    //               onChange={this.props.handleChange}
    //               InputProps={{
    //                 endAdornment: (
    //                   <InputAdornment position="start">
    //                     <EventSeatIcon />
    //                   </InputAdornment>
    //                 ),
    //               }}
    //             />
    //           </Grid>

    //           <Grid item md={4} sm={6} xs={12} lg={4}>
    //             <TextField
    //               margin="dense"
    //               variant="outlined"
    //               name="duration1"
    //               label="Duration"
    //               style={{ width: "90%" }}
    //               required
    //               value={values.duration1}
    //               InputProps={{
    //                 endAdornment: (
    //                   <InputAdornment position="start">
    //                     <TimelapseIcon />
    //                   </InputAdornment>
    //                 ),
    //               }}
    //             />
    //           </Grid>

    //           <Grid item md={12} sm={12} xs={12} lg={12}>
    //             <TextField
    //               margin="dense"
    //               label="Description"
    //               variant="outlined"
    //               style={{ width: "97%" }}
    //               name="experienceDescription1"
    //               required
    //               value={values.experienceDescription1}
    //               InputProps={{
    //                 endAdornment: (
    //                   <InputAdornment position="start">
    //                     <DescriptionIcon />
    //                   </InputAdornment>
    //                 ),
    //               }}
    //             />
    //           </Grid>
    //         </Grid>
    //         <br />
    //         <Divider />
    //       </div>
    //     </CardContent>
    //     <Container className={classes.margin}>
    //       <Row>
    //         <Col xs={4} />
    //         <Col xs={2}>
    //           <Button
    //             variant="contained"
    //             color="secondary"
    //             onClick={this.back}
    //             startIcon={<NavigateBeforeIcon />}
    //           >
    //             Back
    //           </Button>
    //         </Col>
    //         <Col xs={2}>
    //           <Button
    //             variant="contained"
    //             color="secondary"
    //             onClick={this.continue}
    //             endIcon={<NavigateNextIcon />}
    //           >
    //             Next
    //           </Button>
    //         </Col>
    //         <Col xs={4} />
    //       </Row>
    //     </Container>
    //     <p className="text-center text-muted">Page 4</p>
    //   </Paper>
  }
}

export default Experience;

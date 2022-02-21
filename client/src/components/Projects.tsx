import React, { Component } from "react";

const styles = (theme: any) => ({
  margin: {
    margin: theme.spacing(1.5),
  },
  padding: {
    padding: theme.spacing(),
  },
});

class Projects extends Component {
  createAndDownloadPDF = () => {
    // axios
    //   .post("/create-pdf", this.state)
    //   .then(() => {
    //     axios
    //       .get("fetch-pdf", { responseType: "blob" })
    //       .then((res) => {
    //         const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    //         saveAs(pdfBlob, "Resume.pdf");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  render() {
    //   const { values } = this.props;
    //   const { classes } = this.props;
    return <div></div>;
    // return (
    //   <Paper className={classes.padding}>
    //     <Card>
    //       <CardHeader title="Projects Developed" />
    //     </Card>
    //     <CardContent>
    //       <div className={classes.margin}>
    //         <Grid container spacing={2} alignItems="center">
    //           <Grid item xs={12} lg={12}>
    //             <h5>Project 1</h5>
    //           </Grid>
    //           <Grid item md={12} sm={12} xs={12} lg={12}>
    //             <TextField
    //               margin="dense"
    //               variant="outlined"
    //               name="title1"
    //               label="Title"
    //               style={{ width: "80%" }}
    //               required
    //               value={values.title1}
    //               InputProps={{
    //                 endAdornment: (
    //                   <InputAdornment position="start">
    //                     <TitleIcon />
    //                   </InputAdornment>
    //                 ),
    //               }}
    //             />
    //           </Grid>
    //           <Grid item md={4} sm={6} xs={12} lg={12}>
    //             <TextField
    //               margin="dense"
    //               variant="outlined"
    //               name="link1"
    //               label="Link"
    //               style={{ width: "80%" }}
    //               required
    //               value={values.link1}
    //               InputProps={{
    //                 endAdornment: (
    //                   <InputAdornment position="start">
    //                     <LinkIcon />
    //                   </InputAdornment>
    //                 ),
    //               }}
    //             />
    //           </Grid>

    //           <Grid item md={12} sm={12} xs={12} lg={12}>
    //             <TextField
    //               margin="dense"
    //               variant="outlined"
    //               name="projectDescription1"
    //               label="Description"
    //               style={{ width: "80%" }}
    //               required
    //               value={values.projectDescription1}
    //               onChange={() =>{}}
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
    //     <p className="text-center text-muted">Page 3</p>
    //   </Paper>
    // );
  }
}

export default Projects;

const environment = {
  url: "",
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  environment.url = "http://localhost:5500";
} else {
  environment.url = "https://glob-cv-builder.herokuapp.com";
}

export default environment;

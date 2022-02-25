const environment = {
  url: "",
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  environment.url = "http://localhost:5500";
} else {
  environment.url = "http://localhost:5500";
}

export default environment;

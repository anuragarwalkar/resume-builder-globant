import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import pdf from "html-pdf";
import pdfTemplate from "./template/index";

const app = express();

const options: any = {
  formaat: "A4",
  timeout: "6000",
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// POST route for PDF generation....
app.post("/create-pdf", async (req, res) => {
  const { body, styles } = req.body;
  pdf
    .create(pdfTemplate(styles, body), options)
    .toBuffer((err: any, buffer) => {
      if (err) {
        res.status(500).send("Something went wrong 🚦");
      }
      res.status(200).send(buffer);
    });
});

app.get("/", async (req, res) => {
  res.send("Server is running... 🏃🏻‍♂️💨");
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server started on port ${port}`));

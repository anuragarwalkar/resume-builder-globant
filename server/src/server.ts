import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import pdf from "html-pdf";
import path from "path";
import pdfTemplate from "./template/index";

const app = express();

const options: any = {
  height: "42cm",
  width: "23cm",
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
    .toFile("resume.pdf", (err: any) => {
      if (err) {
        return err;
      }

      const file = path.join(__dirname, "../resume.pdf");
      res.download(file);
    });
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server started on port ${port}`));

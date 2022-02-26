import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { generatePDF } from "./controller/generatePdf";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// POST route for PDF generation....
app.post("/create-pdf", async (req, res) => {
  const { body, styles } = req.body;
  const buffer = await generatePDF(styles, body);
  res.status(200).send(buffer);
});

app.get("/", async (req, res) => {
  res.send("Server is running... 🏃🏻‍♂️💨");
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server started on port ${port}`));

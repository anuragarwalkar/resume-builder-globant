import pdf from "html-pdf";
import pdfTemplate from "../template/index";

export const generatePDF = (styles: string, body: string) => {
  return new Promise((resolve, reject) => {
    const options: any = {
      formaat: "A4",
      timeout: "6000",
    };

    pdf
      .create(pdfTemplate(styles, body), options)
      .toBuffer((err: any, buffer) => {
        if (err) {
          return reject("Something went wrong 🚦");
        }
        return resolve(buffer);
      });
  });
};

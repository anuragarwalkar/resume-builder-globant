const template = (styles: string, body: string) => {
  let htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Resume</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,300,700"
        rel="stylesheet"
        type="text/css"
      />
      <style>
      ${styles}
      body {
        padding: 35px;
      }
      </style>
    </head>
    <body>${body}</body>
  </html>
  
	`;
  return htmlTemplate;
};

export default template;

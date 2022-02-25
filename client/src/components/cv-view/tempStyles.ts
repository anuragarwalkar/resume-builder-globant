export const tempStyles = `
body {
  font-family: "Lato";
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
.container {
    background: #fff;
    box-shadow: 1px 1px 2px #dad7d7;
    border-radius: 3px;
    padding: 35px;
  }
  .header {
    margin-bottom: 30px;
  }
  .header .full-name {
    font-size: 1.34rem;
  }
  
  .header .email,
  .header .phone {
    color: #999;
    font-weight: 300;
  }
  .header .separator {
    height: 10px;
    display: inline-block;
    border-left: 2px solid #999;
    margin: 0px 10px;
  }
  .header .position {
    font-weight: bold;
    display: inline-block;
  }
  .details {
    line-height: 20px;
  }
  .details .section {
    margin-bottom: 40px;
  }
  .details .section:last-of-type {
    margin-bottom: 0px;
  }
  .details .section__title {
    letter-spacing: 2px;
    color: #54afe4;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .details .section__list-item {
    margin-bottom: 20px;
  }
  .details .section__list-item:last-of-type {
    margin-bottom: 0;
  }
  .details .left,
  .details .right {
    vertical-align: top;
    display: inline-block;
  }
  .details .left {
    width: 60%;
  }
  .details .right {
    text-align: left;
    width: 39%;
  }
  .details .name {
    font-weight: bold;
  }
  .details a {
    text-decoration: none;
    color: #000;
    font-style: italic;
  }
  .details a:hover {
    text-decoration: underline;
    color: #000;
  }
  .skills__item {
    margin-bottom: 10px;
  }
  .right input {
    display: none;
  }
  .right label {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #c3def3;
    border-radius: 20px;
    margin-right: 3px;
  }
  .right input:checked + label {
    background: #79a9ce;
  }
  
  .main__row {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    justify-content: space-between;
  }
  
  .header__right img {
    width: 150px;
  }
  
  .main__row {
    margin-bottom: 10px;
  }
  
  .about {
    margin-top: 10px;
  }
  
  .education__duration {
    text-align: center;
  }
  
  .section__list-item > .text > p {
    margin: 3px 0;
  }
  
  .section__title:hover {
    cursor: pointer;
  }
  `;

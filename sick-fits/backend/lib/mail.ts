import { createTransport } from "nodemailer";

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeANiceEmail(text: string) {
  return `
    <div style="
      border:1px solid black;
      padding:20px;
      font-family:sans-serif;
      line-height:2;
    ">
      <h2>Hello there!</h2>
      <p>${text}</p>
    </div>
  `;
}

export { transport, makeANiceEmail };

const { resolve } = require("path");
const express = require("express"); //importe la librairie express
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "buirechristophe@gmail.com",
        pass: "keliajtmalafolie13",
    },
});

const app = express(); // Créer l'application express
app.use(express.static(resolve(__dirname, "public")));
app.set("views", __dirname + "/public");
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8000, () => {
    console.log("Server a démarer dans http://localhost:8000");
});

app.post("/contact", async (req, res) => {
    let mailOptions = {
        from: req.body.email,
        to: "buirechristophe@gmail.com",
        subject: `demande de contact de ${req.body.fisrtname}`,
        text: req.body.message,
    };

    await transporter.sendMail(mailOptions);
    res.redirect("/index.html");
});

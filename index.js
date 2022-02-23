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
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8000, () => {
    console.log("Server a démarer dans http://localhost:8000");
});

app.post("/contact", async (req, res) => {
    let message = "";
    let mailOptions = {
        from: req.body.email,
        to: "buirechristophe@gmail.com",
        subject: `demande de contact de ${req.body.fisrtname}`,
        text: req.body.message,
    };

    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            message = "Votre message n'est pas transmis !";
            res.render("contact.html.twig", { message });
        } else {
            message = "Votre message est transmis !";
            res.render("contact.html.twig", { message });
        }
    });
    
});

app.get("/contact", async (req, res) => {
    res.render("contact.html.twig");
});

app.get("/", async (req, res) => {
    res.render("index.html.twig");
});

app.get("/cv", async (req, res) => {
    res.render("cv.html.twig");
});

app.get("/projets", async (req, res) => {
    res.render("projets.html.twig");
});

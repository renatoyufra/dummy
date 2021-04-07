const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3001;

require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const novedadesModel = require("./src/server/novedadesModel");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/novedades", async (req, res) => {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map((novedades) => {
        try {
            if (novedades.img_id) {
                const imagen = cloudinary.url(novedades.img_id, {
                    width: 960,
                    height: 200,
                    crop: "fill",
                });
                return {
                    ...novedades,
                    imagen,
                };
            } else {
                return {
                    ...novedades,
                    imagen: "",
                };
            }
        } catch (error) {
            console.log("error: " + error);
        }
    });

    res.json(novedades);
});

app.post("/api/contacto", async (req, res) => {
    // console.log('recibido POST a /api/contacto');
    //console.log(req.body);

    const mail = {
        to: "renato.esis@gmail.com",
        subject: "Contacto web",
        html: `${req.body.nombre} se contacto a traves de la web y quiere más informacion a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`,
    };

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    }); // cierra transp

    await transport.sendMail(mail);

    res.status(201).json({
        error: false,
        message: "Mensaje enviado",
    });
}); // cierra post/api

app.listen(port, () => {
    console.log(`Server inicia at http://localhost:${port}`);
});

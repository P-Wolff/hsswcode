const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();
const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});
app.post('/send', (req, res) => {
    const { nome, email, telefone, empresa, cargo, mensagem } = req.body;

    const mailOptions = {
        from: email,
        to: 'hsswcode@gmail.com', 
        subject: `New contact from ${nome}`,
        text: `
            Nome: ${nome}
            E-mail: ${email}
            Telefone: ${telefone}
            Empresa: ${empresa}
            Cargo: ${cargo}
            Mensagem: ${mensagem}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

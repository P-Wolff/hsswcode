const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ra50850800846@acaonsfatima.org.br", 
        pass: "Abobra@2024"  
    }
});

app.post('/send-email', (req, res) => {
    const { nome, email, telefone, empresa, cargo, mensagem, comoConheceu } = req.body;

    const mailOptions = {
        from: "HSSW Code <codehssw@gmail.com>",
        to: 'codehssw@gmail.com', 
        subject: 'Novo formulário de contato',
        text:   `Nome: ${nome}\n
                Email: ${email}\n
                Telefone: ${telefone}\n
                Empresa: ${empresa}\n
                Cargo: ${cargo}\n
                Como nos conheceu: ${comoConheceu}\n
                Mensagem: ${mensagem}`
    };
    
    console.log("Sending email with options:", mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        } 
        console.log('Email sent successfully:', info.response);
        res.send('E-mail enviado com sucesso');
    });
});

app.listen(5050, () => {
    console.log('Servidor rodando na porta 5050');
});

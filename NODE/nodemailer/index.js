const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT


const server = express()



const router = express.Router()

router.get("/sendNewMail", (req, res, next) => {
    const email = process.env.EMAIL
    const password = process.env.PASSWORD

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: email,
            pass: password,
        }
    })

    const mailOptions = {
        from: email,
        to: "arthasmola@gmail.com",
        subject: "Confirmación",
        text: "todo ok 💪🏽",
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            return next(error)
        } else {
            return res.status(200).json(`Email send: ${info.response}`)
        }
    })
})

server.use("/", router)



server.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
} )

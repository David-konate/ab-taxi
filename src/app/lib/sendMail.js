// sendEmail.js

const nodemailer = require("nodemailer");

// Créer un transporteur SMTP réutilisable pour Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "a.btaxiservice77@gmail.com", // Remplacez par votre adresse e-mail Gmail
    pass: "Azerty7799", // Remplacez par votre mot de passe Gmail
  },
});

// Fonction pour envoyer un e-mail
const sendEmail = async (to, subject, htmlContent) => {
  const mailOptions = {
    from: "a.btaxiservice77@gmail.com",
    to,
    subject,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé:", info.response);
    return info;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error.toString());
    throw error;
  }
};

module.exports = sendEmail;

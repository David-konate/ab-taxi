import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from "resend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const resend = new Resend("re_22Lh4iFw_wCchsBmECt367Lup9tj8dQg2");

  if (req.method === 'POST') {
    const { emailData } = req.body; // Données de l'email provenant du formulaire
console.log(emailData)
    try {
      await resend.emails.send(emailData);
      res.status(200).json({ message: 'Email envoyé' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur d\'envoi de l\'email' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

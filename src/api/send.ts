import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend('re_Ju6UsAw3_9F2r4yhmSAknXwaMWZPJjbKz');

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { emailData }: { emailData } = req.body;

    try {
      const response = await resend.emails.send(emailData);
      res.status(200).json({ message: 'Email envoyé avec succès!', response });
    } catch (error) {
      res.status(500).json({ message: 'Échec de l\'envoi de l\'email', error });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
};

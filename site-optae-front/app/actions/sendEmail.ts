"use server";

import { Resend } from "resend";

// Initialisation de Resend avec ta clé API
const resend = new Resend(process.env.RESEND_KEY);

export async function sendEmail(formData: FormData) {
  // 1. Récupération des données du formulaire
  const senderName = formData.get("senderName") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const company = formData.get("company") as string;
  const subjectRequest = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Vérification de sécurité de base
  if (!senderEmail || !message) {
    return { error: "L'email et le message sont obligatoires." };
  }

  try {
    // 2. Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Optae <onboarding@resend.dev>", // Expéditeur de test
      to: "kkanagalingam@optae.fr", // Ton email de réception pro
      
      // Objet du mail combinant le sujet et l'entreprise
      subject: `${subjectRequest || "Demande de contact"} - ${company || "Sans entreprise"}`,
      
      replyTo: senderEmail, // Permet de répondre directement au client
      
      html: `
        <div style="font-family: sans-serif; color: #1B2A6B; line-height: 1.6;">
          <h2 style="color: #1B2A6B; border-bottom: 2px solid #1B2A6B; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          <p><strong>De :</strong> ${senderName} (${senderEmail})</p>
          <p><strong>Entreprise :</strong> ${company || "Non renseignée"}</p>
          <p><strong>Sujet :</strong> ${subjectRequest || "Non renseigné"}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
            ${message}
          </p>
          <footer style="margin-top: 20px; font-size: 12px; color: #666;">
            Ce message a été envoyé depuis le formulaire de contact du site Optae.
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return { error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (error: any) {
    console.error("Erreur Serveur:", error);
    return { error: error.message || "Une erreur inattendue est survenue." };
  }
}
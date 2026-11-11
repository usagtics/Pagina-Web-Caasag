"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(prevState: any, formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const asunto = formData.get("asunto") as string;
  const mensaje = formData.get("mensaje") as string;

  if (!nombre || !email || !mensaje) {
    return { success: false, error: "Faltan campos obligatorios." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "CAASAG Contacto <onboarding@resend.dev>",
      to: ["colegiadodealianzas.sanandres@gmail.com"],
      subject: `Nuevo mensaje web: ${asunto}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0f172a;">Nuevo mensaje desde el formulario</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f8fafc; padding: 15px; border-radius: 8px;">${mensaje}</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Error de Resend:", error);
      return { success: false, error: error.message };
    }

    console.log(" Correo enviado con éxito:", data);
    return { success: true, error: null };
  } catch (error) {
    console.error("Error crítico del servidor:", error);
    return { success: false, error: "Hubo un error de red o del servidor." };
  }
}

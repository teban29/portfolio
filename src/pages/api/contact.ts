import type { APIRoute } from "astro";
import { Resend } from "resend";

const apiKey = import.meta.env.RESEND_API_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son obligatorios" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "El correo electrónico no es válido" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Servicio no configurado. Contacta al administrador." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: ["ecardonagonzalez1029@gmail.com"],
      subject: `Nuevo mensaje de ${nombre} — Portafolio`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
          <h2 style="color: #4f46e5; margin-bottom: 16px;">Nuevo mensaje desde el portafolio</h2>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0;"><strong>Nombre:</strong> ${nombre}</p>
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background: #fafafa; padding: 16px; border-radius: 8px; border-left: 3px solid #4f46e5;">
            <p style="margin: 0; white-space: pre-wrap;">${mensaje}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #666;">
            Enviado desde ecardonagonzalez1029@gmail.com
          </p>
        </div>
      `,
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: "Error al enviar el mensaje. Intenta de nuevo." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: "Error del servidor. Intenta de nuevo." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

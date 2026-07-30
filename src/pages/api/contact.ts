import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const apiKey = import.meta.env.RESEND_API_KEY;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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
    if (!emailRegex.test(email) || email.length > 254) {
      return new Response(
        JSON.stringify({ error: "El correo electrónico no es válido" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (nombre.length > 100 || mensaje.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Uno o más campos exceden el límite permitido" }),
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
      from: "Portafolio <no-reply@ecardona.tech>",
      to: ["ecardonagonzalez1029@gmail.com"],
      subject: `Nuevo mensaje de ${nombre} — Portafolio`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #202124; background: #ffffff;">
          <h2 style="color: #5f6368; margin-bottom: 16px;">Nuevo mensaje desde el portafolio</h2>
          <div style="background: #f8f9fa; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0;"><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          </div>
          <div style="background: #f8f9fa; padding: 16px; border-radius: 12px;">
            <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(mensaje)}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #80868b;">
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

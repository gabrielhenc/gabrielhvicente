import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "RESEND_API_KEY não encontrada." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      return Response.json(
        { success: false, error: "CONTACT_EMAIL não encontrado." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const {
      nome,
      empresa,
      dataPrevista,
      email,
      whatsapp,
      evento,
      participantes,
      tema,
      mensagem,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "Gabriel Vicente <noreply@gabrielhvicente.com.br>",
      to: [process.env.CONTACT_EMAIL],
      subject: `Nova solicitação de palestra - ${nome}`,
      replyTo: email,
      html: `
        <h2>Nova solicitação de palestra</h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Data prevista:</strong> ${dataPrevista || "Não informada"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Tipo de evento:</strong> ${evento}</p>
        <p><strong>Participantes:</strong> ${participantes || "Não informado"}</p>
        <p><strong>Tema:</strong> ${tema}</p>

        <hr />

        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    if (error) {
      console.error("Erro retornado pelo Resend:", error);

      return Response.json(
        { success: false, error },
        { status: 500 }
      );
    }

    console.log("E-mail enviado com sucesso:", data);

    return Response.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Erro inesperado ao enviar e-mail:", error);

    return Response.json(
      { success: false, error: "Erro inesperado ao enviar e-mail." },
      { status: 500 }
    );
  }
}
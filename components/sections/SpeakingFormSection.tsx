"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function SpeakingFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nome: formData.get("nome"),
      empresa: formData.get("empresa"),
      dataPrevista: formData.get("dataPrevista"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      evento: formData.get("evento"),
      participantes: formData.get("participantes"),
      tema: formData.get("tema"),
      mensagem: formData.get("mensagem"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200) {
        trackEvent("form_palestra_enviado", {
          origem: "formulario_site",
        });

        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-[#080808] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#0047ff24,transparent_30%),radial-gradient(circle_at_85%_75%,#ff6e0224,transparent_32%)]" />

      <Container>
        <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6E02]">
              Contrate uma palestra
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Vamos levar liderança na prática para o seu evento?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Preencha o formulário com as informações do seu evento e entrarei
              em contato para entender o contexto, o público e a melhor forma de
              construir uma palestra alinhada ao seu objetivo.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Prefere contato direto?
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Fale comigo pelo WhatsApp.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Ideal para eventos com data próxima, convites corporativos ou
                conversas iniciais sobre temas e formatos.
              </p>

              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#FF6E02] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:opacity-90"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6 shadow-2xl backdrop-blur md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-zinc-300">
                  Nome
                </label>
                <input
                  name="nome"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FF6E02]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-300">
                  Empresa
                </label>
                <input
                  name="empresa"
                  type="text"
                  required
                  placeholder="Nome da empresa"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FF6E02]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-300">
                  Data prevista
                </label>
                <input
                  name="dataPrevista"
                  type="text"
                  placeholder="Ex: 15/09/2026 ou ainda indefinida"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FF6E02]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-300">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="seuemail@empresa.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FF6E02]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-300">
                  WhatsApp
                </label>
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="(31) 99999-9999"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FF6E02]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-300">
                  Tipo de evento
                </label>
                <select
                  name="evento"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-zinc-300 outline-none transition focus:border-[#FF6E02]"
                >
                  <option>Evento corporativo</option>
                  <option>Convenção</option>
                  <option>Workshop</option>
                  <option>Treinamento</option>
                  <option>Podcast</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-300">
                  Quantidade de participantes
                </label>
                <input
                  name="participantes"
                  type="text"
                  placeholder="Ex: 50, 100, 500..."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FF6E02]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-300">
                  Tema de interesse
                </label>
                <select
                  name="tema"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-zinc-300 outline-none transition focus:border-[#FF6E02]"
                >
                  <option>Liderança na prática</option>
                  <option>Formação de novos líderes</option>
                  <option>Tecnologia e transformação digital</option>
                  <option>Inteligência Artificial para líderes</option>
                  <option>Da transformação à linha de chegada</option>
                  <option>Ainda não sei</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-zinc-300">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows={5}
                  required
                  placeholder="Conte um pouco sobre o evento, objetivo, local e público esperado."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FF6E02]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6E02] px-6 py-4 font-semibold text-white transition hover:scale-[1.01] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Solicitar proposta"}
              <ArrowUpRight size={20} />
            </button>

            {status === "success" && (
              <p className="mt-4 text-center text-sm font-medium text-green-400">
                Solicitação enviada com sucesso. Em breve entrarei em contato.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-center text-sm font-medium text-red-400">
                Não foi possível enviar sua solicitação. Tente novamente ou me
                chame pelo WhatsApp.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
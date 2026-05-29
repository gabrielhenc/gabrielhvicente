import Container from "@/components/ui/Container";
import { BriefcaseBusiness, CheckCircle2, Cpu, Trophy } from "lucide-react";

const reasons = [
  {
    icon: BriefcaseBusiness,
    title: "Experiência real de liderança",
    description:
      "Mais de 18 anos em tecnologia e 7 anos liderando pessoas, projetos, entregas e transformação digital em ambientes reais.",
  },
  {
    icon: CheckCircle2,
    title: "Conteúdo aplicável no dia seguinte",
    description:
      "Nada de teoria distante da realidade. As palestras são construídas para gerar reflexão, ação prática e mudança de comportamento.",
  },
  {
    icon: Cpu,
    title: "Conexão entre tecnologia, pessoas e resultados",
    description:
      "Uma visão prática de quem viveu a execução técnica, a liderança de times e os desafios estratégicos do mundo corporativo.",
  },
  {
    icon: Trophy,
    title: "História real de transformação",
    description:
      "Da programação à liderança. Dos 127,5kg ao Ironman 70.3. Uma trajetória que conecta carreira, disciplina e alta performance.",
  },
];

export default function WhyInviteSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,#ff6e0220,transparent_30%),radial-gradient(circle_at_85%_80%,#0047ff24,transparent_32%)]" />

      <Container>
        <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6E02]">
              Por que me convidar?
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Uma palestra com experiência real, linguagem prática e conexão com resultados.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Minha proposta não é entregar uma palestra motivacional genérica.
              É conectar liderança, tecnologia, carreira e alta performance com
              histórias reais, aprendizados práticos e provocações aplicáveis ao
              dia a dia de profissionais e empresas.
            </p>

            <a
              href="#contato"
              className="mt-8 inline-flex rounded-xl bg-[#FF6E02] px-6 py-4 font-semibold text-white transition hover:scale-[1.02] hover:opacity-90"
            >
              Solicitar proposta
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF6E02]/50 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0047FF]/15 text-[#4D7CFF] transition group-hover:bg-[#FF6E02]/15 group-hover:text-[#FF6E02]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/ui/Container";
import { Brain, Cpu, Rocket, Target, Users } from "lucide-react";

const topics = [
  {
    icon: Users,
    title: "Liderança na prática",
    description:
      "Como liderar pessoas, decisões e resultados no mundo real, sem romantizar os desafios da liderança.",
  },
  {
    icon: Rocket,
    title: "Formação de novos líderes",
    description:
      "Da primeira promoção ao protagonismo: como desenvolver postura, clareza e segurança para liderar.",
  },
  {
    icon: Cpu,
    title: "Tecnologia e transformação digital",
    description:
      "Como conectar estratégia, inovação e execução em um mercado cada vez mais dinâmico.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial para líderes",
    description:
      "Como usar IA para aumentar produtividade, melhorar decisões e preparar equipes para o futuro.",
  },
  {
    icon: Target,
    title: "Da transformação à linha de chegada",
    description:
      "Como perdi mais de 20kg e completei um Ironman 70.3 em apenas 12 meses através de disciplina, consistência e mudança de mentalidade.",
  },
];

export default function SpeakingTopicsSection() {
  return (
    <section id="palestras" className="relative overflow-hidden bg-[#050505] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#0047ff24,transparent_30%),radial-gradient(circle_at_80%_80%,#ff6e0224,transparent_28%)]" />

      <Container>
        <div className="relative">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6E02]">
              Palestras
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Temas para desenvolver líderes preparados para o mundo real.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Palestras com linguagem prática, conexão com tecnologia e foco em
              liderança aplicável ao dia a dia de empresas, eventos e times em
              transformação.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <div
                  key={topic.title}
                  className="group flex min-h-[280px] flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FF6E02]/50 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0047FF]/15 text-[#4D7CFF] transition group-hover:bg-[#FF6E02]/15 group-hover:text-[#FF6E02]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
                    {topic.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {topic.description}
                  </p>
                </div>
              );
            })}

            <div className="flex min-h-[280px] flex-col rounded-3xl border border-[#FF6E02]/30 bg-[#FF6E02]/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6E02]">
                Evento corporativo?
              </p>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
                Leve uma palestra prática para sua empresa.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                Conteúdos adaptados para semanas de liderança, eventos internos,
                tecnologia, inovação, agilidade e desenvolvimento profissional.
              </p>

              <a
                href="#contato"
                className="mt-auto inline-flex w-fit rounded-xl bg-[#FF6E02] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:opacity-90"
              >
                Solicitar proposta
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
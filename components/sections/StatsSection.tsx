import Container from "@/components/ui/Container";

const stats = [
  {
    value: "18+",
    label: "anos em tecnologia",
    description:
      "Atuação prática em desenvolvimento, liderança e transformação digital.",
  },
  {
    value: "7+",
    label: "anos em liderança",
    description:
      "Gestão de times, projetos, pessoas e entregas em ambientes reais.",
  },
  {
    value: "100+",
    label: "profissionais liderados",
    description:
      "Experiência formando, acompanhando e desenvolvendo pessoas.",
  },
  {
    value: "Curso + Ebook",
    label: "conteúdos práticos",
    description:
      "Materiais para quem quer evoluir em liderança, agilidade e tecnologia.",
  },
];

export default function StatsSection() {
  return (
    <section className="relative border-y border-white/10 bg-[#080808] py-12">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <p className="text-5xl font-bold tracking-tight text-white">
                {stat.value}
              </p>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6E02]">
                {stat.label}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/ui/Container";
import { CheckCircle2, Dumbbell, Flag, Timer } from "lucide-react";

const lessons = [
  "Disciplina não nasce pronta, ela é construída.",
  "Consistência vence intensidade sem direção.",
  "Grandes transformações começam com pequenas decisões repetidas.",
];

export default function PerformanceSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,#ff6e0224,transparent_30%),radial-gradient(circle_at_85%_75%,#0047ff24,transparent_32%)]" />

      <Container>
        <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6E02]">
              Alta performance
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Dos 127,5kg à linha de chegada do Ironman 70.3.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Em 12 meses, transformei minha rotina, perdi mais de 20kg e
              completei uma prova de Ironman 70.3. Mais do que uma conquista
              esportiva, essa jornada se tornou uma escola sobre disciplina,
              consistência, mentalidade e execução.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Hoje, levo esses aprendizados para palestras e conteúdos,
              conectando a jornada do esporte aos desafios da liderança, da
              carreira e da vida real.
            </p>

            <div className="mt-8 space-y-4">
              {lessons.map((lesson) => (
                <div key={lesson} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#FF6E02]" size={22} />
                  <p className="text-zinc-300">{lesson}</p>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="mt-10 inline-flex rounded-xl bg-[#FF6E02] px-6 py-4 font-semibold text-white transition hover:scale-[1.02] hover:opacity-90"
            >
              Contratar palestra motivacional
            </a>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <Dumbbell className="text-[#FF6E02]" size={32} />
              <p className="mt-6 text-4xl font-bold text-white">127,5kg</p>
              <p className="mt-2 text-zinc-400">ponto de partida da jornada</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <Timer className="text-[#0047FF]" size={32} />
              <p className="mt-6 text-4xl font-bold text-white">12 meses</p>
              <p className="mt-2 text-zinc-400">
                de preparação, disciplina e mudança de rotina
              </p>
            </div>

            <div className="rounded-3xl border border-[#FF6E02]/30 bg-[#FF6E02]/10 p-7">
              <Flag className="text-[#FF6E02]" size={32} />
              <p className="mt-6 text-4xl font-bold text-white">70.3</p>
              <p className="mt-2 text-zinc-300">
                Ironman concluído com foco, consistência e execução
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
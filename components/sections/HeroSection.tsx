import Image from "next/image";
import Container from "@/components/ui/Container";

const credibilityItems = [
  "18+ anos em tecnologia",
  "7+ anos liderando equipes",
  "100+ profissionais liderados",
  "1x Ironman 70.3 Finisher",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,#0047ff40,transparent_32%),radial-gradient(circle_at_12%_82%,#ff6e0233,transparent_28%)]" />

      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#050505_92%)]" />

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-2 xl:gap-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              Líder de Tecnologia • Palestrante • Mentor
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
              Liderança na prática
              <br />
              para o mundo real.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Mais de 18 anos liderando equipes, projetos e transformações
              digitais. Compartilho aprendizados reais sobre liderança,
              tecnologia e alta performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#palestras"
                className="rounded-xl bg-[#FF6E02] px-6 py-4 font-semibold text-white transition hover:scale-[1.02] hover:opacity-90"
              >
                Contratar uma palestra
              </a>

              <a
                href="#cursos"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Conhecer cursos
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {credibilityItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,#0047ff55,transparent_38%),radial-gradient(circle_at_80%_70%,#ff6e0255,transparent_40%)] blur-2xl" />

              <div className="relative h-[540px] w-[390px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur md:h-[660px] md:w-[500px]">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-zinc-900">
                  <Image
                    src="/images/gabriel-hero.png"
                    alt="Gabriel Vicente"
                    fill
                    priority
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#111111]/90 p-5 shadow-2xl backdrop-blur">
                <p className="text-3xl font-bold text-white">18+</p>
                <p className="text-sm text-zinc-400">anos em tecnologia</p>
              </div>

              <div className="absolute -right-4 top-10 hidden rounded-2xl border border-white/10 bg-[#111111]/90 p-5 shadow-2xl backdrop-blur md:block">
                <p className="text-3xl font-bold text-white">7+</p>
                <p className="text-sm text-zinc-400">anos liderando equipes</p>
              </div>
            </div>
          </div>
          <div className="h-8" />
        </div>
      </Container>
    </section>
  );
}
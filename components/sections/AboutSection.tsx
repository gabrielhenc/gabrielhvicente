import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#080808] py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,#0047ff33,transparent_45%),radial-gradient(circle_at_bottom_right,#ff6e0233,transparent_40%)] blur-xl" />

            <div className="relative h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-zinc-900">
                <Image
                  src="/images/gabriel-about.png"
                  alt="Gabriel Vicente"
                  fill
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6E02]">
              Quem é Gabriel Vicente
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Da tecnologia à liderança, com experiência real de campo.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-400">
              <p>
                Minha carreira começou escrevendo código. Ao longo dos últimos
                18 anos, evoluí da programação para a liderança de equipes,
                projetos e iniciativas de transformação digital.
              </p>

              <p>
                Atuei por anos como desenvolvedor full stack e, nos últimos 7
                anos, venho liderando pessoas, times e entregas em ambientes
                reais, com pressão, prazos, desafios técnicos e decisões que
                impactam negócios.
              </p>

              <p>
                Hoje compartilho aprendizados práticos sobre liderança,
                tecnologia e alta performance, conectando vivências do mundo
                corporativo com os desafios que profissionais e empresas
                enfrentam diariamente.
              </p>

              <p>
                Além da tecnologia, encontrei no esporte uma poderosa escola de
                disciplina, consistência e superação. Esses valores também
                fazem parte da forma como lidero, ensino e construo resultados.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-bold text-white">18+</p>
                <p className="mt-2 text-sm text-zinc-400">anos em tecnologia</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-bold text-white">7+</p>
                <p className="mt-2 text-sm text-zinc-400">anos em liderança</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-bold text-white">100+</p>
                <p className="mt-2 text-sm text-zinc-400">
                  profissionais liderados
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
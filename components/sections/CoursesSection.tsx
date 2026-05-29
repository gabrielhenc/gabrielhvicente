import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight, BookOpen, GraduationCap, PlayCircle } from "lucide-react";

const products = [
  {
    icon: GraduationCap,
    type: "Curso",
    title: "Gestão Ágil e Inteligente",
    description:
      "Um curso para líderes e profissionais que querem aplicar agilidade, gestão e liderança de forma prática no dia a dia.",
    cta: "Comprar curso",
    href: siteConfig.links.curso,
    featured: true,
  },
  {
    icon: BookOpen,
    type: "Ebook",
    title: "Scrum: Lidere equipes de alta performance",
    description:
      "Um material direto ao ponto para entender e aplicar Scrum com mais clareza, maturidade e foco em entrega de valor.",
    cta: "Comprar ebook",
    href: siteConfig.links.ebook,
    featured: false,
  },
  {
    icon: PlayCircle,
    type: "Conteúdo gratuito",
    title: "Liderança, tecnologia e carreira",
    description:
      "Conteúdos gratuitos no YouTube, Instagram e LinkedIn para quem quer evoluir como profissional e líder.",
    cta: "Acompanhar conteúdos",
    href: "#conteudos",
    featured: false,
  },
];

export default function CoursesSection() {
  return (
    <section id="cursos" className="relative overflow-hidden bg-[#050505] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,#0047ff24,transparent_32%),radial-gradient(circle_at_15%_85%,#ff6e0220,transparent_30%)]" />

      <Container>
        <div className="relative">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6E02]">
              Cursos e materiais
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Aprenda liderança, agilidade e tecnologia com quem vive isso na prática.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Produtos digitais e conteúdos criados para acelerar sua evolução
              profissional com linguagem simples, aplicável e conectada ao mundo real.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <a
                  key={product.title}
                  href={product.href}
                  target={product.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    product.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`group relative overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                    product.featured
                      ? "border-[#FF6E02]/40 bg-[#FF6E02]/10"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  {product.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-[#FF6E02] px-3 py-1 text-xs font-semibold text-white">
                      Destaque
                    </div>
                  )}

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      product.featured
                        ? "bg-[#FF6E02]/20 text-[#FF6E02]"
                        : "bg-[#0047FF]/15 text-[#4D7CFF]"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {product.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                    {product.title}
                  </h3>

                  <p className="mt-4 min-h-24 text-sm leading-relaxed text-zinc-400">
                    {product.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    {product.cta}
                    <ArrowUpRight
                      size={18}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const channels = [
  {
    icon: FaYoutube,
    name: "YouTube",
    tag: "Conteúdo semanal",
    title: "Vídeos sobre liderança, tecnologia e carreira",
    description:
      "Conteúdos mais aprofundados para quem quer evoluir como líder, profissional de tecnologia e criador de resultados.",
    href: siteConfig.links.youtube,
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    tag: "Insights práticos",
    title: "Bastidores e aprendizados do dia a dia",
    description:
      "Reflexões práticas sobre liderança, produtividade, alta performance, carreira e aprendizados do mundo real.",
    href: siteConfig.links.instagram,
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    tag: "Carreira e liderança",
    title: "Conteúdo para profissionais e líderes",
    description:
      "Experiências, aprendizados e provocações sobre liderança, tecnologia, gestão de times e desenvolvimento profissional.",
    href: siteConfig.links.linkedin,
  },
];

export default function ContentSection() {
  return (
    <section id="conteudos" className="relative overflow-hidden bg-[#080808] py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6E02]">
              Conteúdo gratuito
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Onde compartilho conhecimento na prática.
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-zinc-400">
            Acompanhe meus conteúdos gratuitos sobre liderança, tecnologia,
            carreira, produtividade e alta performance. São aprendizados reais,
            construídos no dia a dia da gestão de times, projetos e pessoas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0047FF] to-[#FF6E02] opacity-70" />

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0047FF]/15 text-[#4D7CFF] transition group-hover:bg-[#FF6E02]/15 group-hover:text-[#FF6E02]">
                    <Icon className="text-[24px]" />
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-zinc-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  />
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6E02]">
                  {channel.name}
                </p>

                <span className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">
                  {channel.tag}
                </span>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
                  {channel.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {channel.description}
                </p>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
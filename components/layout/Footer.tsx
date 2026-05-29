import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { label: "YouTube", href: siteConfig.links.youtube, icon: FaYoutube },
  { label: "Instagram", href: siteConfig.links.instagram, icon: FaInstagram },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: FaLinkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Gabriel Vicente
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
              Liderança na prática para o mundo real. Conteúdos, cursos e
              palestras sobre tecnologia, liderança e alta performance.
            </p>

            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6E02] transition hover:text-white"
            >
              Falar com Gabriel
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-[#FF6E02]/50 hover:bg-[#FF6E02]/10 hover:text-[#FF6E02]"
                  >
                    <Icon className="text-[21px]" />
                  </a>
                );
              })}
            </div>

            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Gabriel Vicente. Todos os direitos
              reservados.
            </p>

            <p className="text-sm text-zinc-600">{siteConfig.domain}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
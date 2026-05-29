import Container from "@/components/ui/Container";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Palestras", href: "#palestras" },
  { label: "Cursos", href: "#cursos" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="group">
            <div className="text-lg font-bold tracking-tight text-white">
              Gabriel Vicente
            </div>
            <div className="mt-0.5 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 group-hover:text-[#FF6E02] transition">
              Liderança real
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#palestras"
            className="hidden rounded-full bg-[#FF6E02] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:opacity-90 md:inline-flex"
          >
            Contratar palestra
          </a>
        </div>
      </Container>
    </header>
  );
}
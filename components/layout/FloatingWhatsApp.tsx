import { siteConfig } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Gabriel no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6E02] text-white shadow-2xl shadow-[#FF6E02]/30 transition hover:scale-110 hover:opacity-90"
    >
      <MessageCircle size={26} />
    </a>
  );
}
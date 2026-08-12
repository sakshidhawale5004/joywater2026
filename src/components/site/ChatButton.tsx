import { MessageCircle } from "lucide-react";

export function ChatButton() {
  // WhatsApp link format: https://wa.me/<number>
  // Number from Header: +91 93259 48289
  const whatsappUrl = "https://wa.me/919325948289";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_8px_30px_rgb(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

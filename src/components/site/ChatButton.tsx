import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // In a real app, this would send the message to a backend or support service
    setMessage("");
    setIsOpen(false);
    alert("Thanks for your message! Our team will get back to you shortly.");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-br from-gold to-[#b3922c] text-white shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_8px_30px_rgb(212,175,55,0.4)] transition-all duration-300 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      <div
        className={`fixed bottom-6 right-6 z-50 w-[350px] bg-background border border-border rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.2)] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
              <img src="/FINAL-LOGO.png" alt="Joy Water" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <h3 className="text-white font-serif text-sm">Joy Water Support</h3>
              <p className="text-white/60 text-[10px] flex items-center gap-1 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 flex-1 h-[300px] overflow-y-auto bg-secondary/30 flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-primary-foreground text-[10px] font-serif">JW</div>
            <div className="bg-white border border-border/60 text-sm p-3 rounded-2xl rounded-tl-sm shadow-sm">
              <p>Hello! Welcome to Joy Water. How can we help you today?</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-background border-t border-border">
          <form onSubmit={handleSubmit} className="flex gap-2 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-secondary/50 border border-border rounded-full px-4 py-3 pr-12 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center hover:bg-[#b3922c] transition-colors"
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

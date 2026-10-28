import React, { useState, useRef } from "react";
import { personalData } from "../../data/personal";
import { Send, CheckCircle2, Loader2, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Frontend Web Development",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const submitTimestamps = useRef([]);

  const interestOptions = [
    "Frontend Web Development",
    "UI/UX Design & Prototype",
    "Quality Assurance / API Testing",
    "Full-time / Internship",
    "Kolaborasi Proyek"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectInterest = (option) => {
    setFormData((prev) => ({ ...prev, subject: option }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot anti-bot check — real users won't fill the hidden field
    if (honeypot) return;

    // Client-side rate limiting: max 3 submissions per 5 minutes
    const now = Date.now();
    const fiveMinutesAgo = now - 5 * 60 * 1000;
    submitTimestamps.current = submitTimestamps.current.filter(t => t > fiveMinutesAgo);
    if (submitTimestamps.current.length >= 3) {
      if (onShowToast) onShowToast("Terlalu banyak percobaan pengiriman. Silakan tunggu beberapa menit.");
      return;
    }

    // Input validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      if (onShowToast) onShowToast("Mohon lengkapi nama, email, dan pesan Anda.");
      return;
    }

    if (trimmedName.length > 100 || trimmedMessage.length > 5000) {
      if (onShowToast) onShowToast("Nama atau pesan terlalu panjang. Mohon persingkat.");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      if (onShowToast) onShowToast("Format email tidak valid. Silakan periksa kembali.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: trimmedName,
          email: trimmedEmail,
          subject: `Portfolio Contact: [${formData.subject || "Pesan Baru"}] - dari ${trimmedName}`,
          interest: formData.subject,
          message: trimmedMessage,
          from_name: trimmedName,
          botcheck: ""
        })
      });

      const result = await response.json();

      if (result.success) {
        submitTimestamps.current.push(Date.now());
        setIsSuccess(true);

        // Trigger delight confetti
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.7 },
            colors: ["#38bdf8", "#c084fc", "#4ade80", "#fb7185"]
          });
        } catch (err) {
          // Fallback
        }

        if (onShowToast) {
          onShowToast("Pesan Anda berhasil terkirim langsung ke email saya! Terima kasih.");
        }

        // Reset form after delay
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "Frontend Web Development",
            message: ""
          });
          setIsSuccess(false);
        }, 3000);
      } else {
        if (onShowToast) {
          onShowToast(result.message || "Gagal mengirim pesan. Silakan coba lagi.");
        }
      }
    } catch (err) {
      if (onShowToast) {
        onShowToast("Terjadi kendala koneksi saat mengirim pesan. Silakan periksa koneksi internet Anda.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span>Available for Work &amp; Projects</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Let's Build Something Great.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Punya ide website baru, butuh bantuan implementasi frontend React yang responsif, desain UI/UX di Figma, atau ingin berdiskusi peluang kerja? Kirimkan pesan Anda melalui formulir ini.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2 font-mono text-xs">
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-[#25D366]/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">WhatsApp Langsung</div>
                  <div className="text-white font-bold">{personalData.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-[#38bdf8]/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Email Resmi</div>
                  <div className="text-white font-bold">{personalData.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#111116] border border-white/[0.08]">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Lokasi</div>
                  <div className="text-slate-300 font-medium">Bogor, Jawa Barat, Indonesia</div>
                </div>
              </div>
            </div>

          </div>


          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#111116] border border-white/[0.1] p-6 sm:p-8 shadow-2xl relative overflow-hidden">

              {/* Form Glow Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Kirim Pesan
                  </h3>
                </div>
              </div>

              {/* Success Notification Alert */}
              {isSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-[#4ade80]/10 border border-[#4ade80]/30 text-white font-mono text-xs flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[#4ade80] shrink-0" />
                  <span>Pesan Anda berhasil terkirim! Saya akan segera menghubungi Anda.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Honeypot anti-bot field — hidden from real users */}
                <input
                  type="text"
                  name="botcheck"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Interest / Subject Chips */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 block">
                    Topik / Kebutuhan:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleSelectInterest(opt)}
                        className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${formData.subject === opt
                          ? "bg-[#38bdf8] text-slate-950 font-bold shadow-md shadow-[#38bdf8]/20"
                          : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                          }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-slate-300 block">
                      Nama Lengkap <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-slate-300 block">
                      Alamat Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@gmail.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-300 block">
                    Pesan / Detail Kebutuhan <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan tentang proyek, ide, atau tawaran kerja sama Anda..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all font-sans resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold text-slate-950 bg-[#38bdf8] hover:bg-[#7dd3fc] transition-all shadow-lg shadow-[#38bdf8]/25 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Pesan Sekarang</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] font-mono text-slate-500 text-center sm:text-right">
                    Privasi aman • Tanpa spam
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;

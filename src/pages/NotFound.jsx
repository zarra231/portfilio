import React from "react";
import { Link } from "react-router-dom";
import { Terminal, Home, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0F172A] text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-[#1e1e2e]/90 border border-white/10 shadow-2xl backdrop-blur-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
            <Terminal className="w-8 h-8" />
          </div>

          <div>
            <span className="text-4xl font-extrabold font-mono text-rose-400 block tracking-wider">
              404
            </span>
            <h1 className="text-xl font-bold text-white mt-2">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-xs text-slate-400 mt-2 font-mono leading-relaxed">
              Path URL yang Anda tuju tidak tersedia atau telah dipindahkan.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-mono text-xs font-bold bg-teal-400 text-slate-950 hover:bg-teal-300 transition-colors shadow-lg shadow-teal-500/20"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda Utama</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;

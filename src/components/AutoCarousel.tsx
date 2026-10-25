import { useEffect, useState } from "react";

// ── Drop your image paths here ──────────────────────────────────────
// Place images in /public/carousel/ and reference them as shown below.
// Each slide gets its own image; swap the src strings for your real files.
const SLIDES = [
  {
    text: "Sebuah inisiatif PKD Muallim dalam membantu perokok untuk berhenti merokok.",
    bg: "from-red-50 to-rose-100",
    accent: "text-red-600",
    dot: "bg-red-400",
    image: "/slide-1.png",
  },
  {
    text: "Saringan merokok secara dalam talian di hujung jari anda.",
    bg: "from-orange-50 to-amber-100",
    accent: "text-orange-600",
    dot: "bg-orange-400",
    image: "/slide-2.png",
  },
  {
    text: "Saringan dan penilaian tahap ketagihan nikotin.",
    bg: "from-rose-50 to-red-100",
    accent: "text-rose-600",
    dot: "bg-rose-400",
    image: "/slide-3.png",
  },
  {
    text: "Ketahui tahap ketagihan dan dapatkan rujukan ke klinik kesihatan terdekat",
    bg: "from-emerald-50 to-teal-100",
    accent: "text-emerald-700",
    dot: "bg-emerald-500",
    image: "/slide-4.png",
  },
];

export default function AutoCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % SLIDES.length);
        setFading(false);
      }, 250);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <div className="flex flex-col justify-center items-center gap-2 shrink-0 w-full">
      <div
        className={`w-full bg-linear-to-r ${slide.bg} px-6 py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-5`}
      >
        <div
          className={`flex-1 min-w-0 transition-opacity duration-250 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-sm text-stone-600 leading-snug">{slide.text}</p>
        </div>

        <img
          src={slide.image}
          alt=""
          className="h-20 w-20 sm:order-last object-contain shrink-0  mask-[radial-gradient(circle,black_50%,transparent_75%)]"
        />
      </div>
      {/* dots */}
      <div className="flex items-center gap-2 shrink-0">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slaid ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? `w-5 h-2 ${s.dot}` : "w-2 h-1.2 bg-stone-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

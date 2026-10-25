import { useEffect, useState } from "react";
import { TOBACCO_FACTS } from "../data/tobaccoFacts";

export default function TahukahAndaBanner() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % TOBACCO_FACTS.length);
        setFading(false);
      }, 250);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fact = TOBACCO_FACTS[current];

  return (
    <div className="flex flex-col items-center gap-2 shrink-0 w-full px-7 pt-4">
      <div
        className={`w-full flex items-start gap-3 transition-opacity duration-250 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-2xl leading-none shrink-0">{fact.icon}</span>
        <div>
          <p className="text-xs font-bold text-red-600">Tahukah Anda?</p>
          <p className="text-sm text-stone-700 leading-snug">
            {fact.text}{" "}
            <span className="text-stone-400">({fact.source})</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {TOBACCO_FACTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Fakta ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-4 h-1.5 bg-red-400" : "w-1.5 h-1.5 bg-stone-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

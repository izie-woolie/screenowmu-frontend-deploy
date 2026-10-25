import { useNavigate } from "react-router";
import { Label, RadioGroup } from "@heroui/react";
import StepShell from "../components/StepShell";
import CustomRadio from "../components/CustomRadio";
import { useProfileWizard } from "../context/ProfileContext";

const PRODUCTS: { value: string; label: string }[] = [
  { value: "rokok", label: "Rokok" },
  { value: "vape", label: "Vape" },
  { value: "lain", label: "Lain-lain" },
];

const USAGE_BUCKETS: { value: string; label: string }[] = [
  { value: "<10", label: "Kurang dari 10" },
  { value: "11-20", label: "Antara 11 hingga 20" },
  { value: "21-30", label: "Antara 21 hingga 30" },
  { value: ">31", label: "Lebih dari 31" },
];

export default function SurveyUsage() {
  const navigate = useNavigate();
  const { data, updateField } = useProfileWizard();

  const toggleProduct = (value: string) => {
    const next = data.products.includes(value)
      ? data.products.filter((p) => p !== value)
      : [...data.products, value];
    updateField("products", next);
  };

  const usesCigarettes = data.products.includes("rokok");
  const usesVape = data.products.includes("vape");

  const isValid =
    data.products.length > 0 &&
    (!usesCigarettes || !!data.cigarettes_per_day) &&
    (!usesVape || !!data.vape_per_day);

  return (
    <StepShell
      title="Survei Rokok"
      subtitle="Produk yang digunakan dan kekerapan penggunaan"
      onBack={() => navigate("/survey/origin")}
      onNext={() => navigate("/survey/spend")}
      nextDisabled={!isValid}
      showFacts
    >
      <div className="px-4 space-y-5">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Produk rokok yang digunakan? (Pilihan boleh lebih dari satu)
          </Label>
          <div className="flex flex-wrap gap-3">
            {PRODUCTS.map((p) => {
              const selected = data.products.includes(p.value);
              return (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => toggleProduct(p.value)}
                  className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                    selected
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-gray-200 text-gray-700"
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        {usesCigarettes && (
          <RadioGroup
            value={data.cigarettes_per_day}
            onChange={(val) => updateField("cigarettes_per_day", val.toString())}
            isRequired
          >
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Berapa batang rokok yang dihisap per hari?
            </Label>
            <div className="flex flex-col gap-3">
              {USAGE_BUCKETS.map((b) => (
                <CustomRadio key={b.value} value={b.value} label={b.label} />
              ))}
            </div>
          </RadioGroup>
        )}

        {usesVape && (
          <RadioGroup
            value={data.vape_per_day}
            onChange={(val) => updateField("vape_per_day", val.toString())}
            isRequired
          >
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Berapa kali anda menghisap vape per hari?
            </Label>
            <div className="flex flex-col gap-3">
              {USAGE_BUCKETS.map((b) => (
                <CustomRadio key={b.value} value={b.value} label={b.label} />
              ))}
            </div>
          </RadioGroup>
        )}
      </div>
    </StepShell>
  );
}

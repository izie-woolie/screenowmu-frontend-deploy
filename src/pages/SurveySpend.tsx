import { useNavigate } from "react-router";
import { Label, NumberField } from "@heroui/react";
import StepShell from "../components/StepShell";
import { useProfileWizard } from "../context/ProfileContext";

export default function SurveySpend() {
  const navigate = useNavigate();
  const { data, updateField } = useProfileWizard();

  return (
    <StepShell
      title="Survei Rokok"
      subtitle="Perbelanjaan bulanan bagi produk merokok"
      onBack={() => navigate("/survey/usage")}
      onNext={() => navigate("/dependence/1")}
      nextDisabled={!data.monthly_spend}
      showFacts
    >
      <div className="px-4 space-y-5">
        <NumberField
          minValue={0}
          value={data.monthly_spend ? Number(data.monthly_spend) : undefined}
          onChange={(val) => updateField("monthly_spend", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Berapa banyak perbelanjaan membeli produk merokok dalam sebulan?
          </Label>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">RM</span>
            <NumberField.Group className="flex items-center rounded-xl border border-gray-200 overflow-hidden">
              <NumberField.DecrementButton className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition-colors" />
              <NumberField.Input className="w-24 h-10 text-center text-base font-medium border-x border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" />
              <NumberField.IncrementButton className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition-colors" />
            </NumberField.Group>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Untuk pengiraan anggaran perbelanjaan harian, bulanan dan tahunan.
          </p>
        </NumberField>
      </div>
    </StepShell>
  );
}

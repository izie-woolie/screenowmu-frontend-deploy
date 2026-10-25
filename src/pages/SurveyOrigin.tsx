import { useNavigate } from "react-router";
import { Label, NumberField, RadioGroup } from "@heroui/react";
import StepShell from "../components/StepShell";
import CustomRadio from "../components/CustomRadio";
import { useProfileWizard } from "../context/ProfileContext";

export default function SurveyOrigin() {
  const navigate = useNavigate();
  const { data, updateField } = useProfileWizard();

  const reasons = ["Rakan Sebaya", "Keluarga", "Media Sosial", "Lain-lain"];

  return (
    <StepShell
      title="Survei Rokok"
      subtitle="Asal usul tabiat merokok anda"
      onBack={() => navigate("/smoker/gate")}
      onNext={() => navigate("/survey/usage")}
      nextDisabled={!data.age_first_smoke || !data.first_smoke_reason}
      showFacts
    >
      <div className="px-4 space-y-5">
        <NumberField
          minValue={1}
          maxValue={120}
          value={data.age_first_smoke ? Number(data.age_first_smoke) : undefined}
          onChange={(val) => updateField("age_first_smoke", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Umur pertama kali merokok?
          </Label>
          <div className="flex items-center gap-3">
            <NumberField.Group className="flex items-center rounded-xl border border-gray-200 overflow-hidden">
              <NumberField.DecrementButton className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition-colors" />
              <NumberField.Input className="w-16 h-10 text-center text-base font-medium border-x border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" />
              <NumberField.IncrementButton className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition-colors" />
            </NumberField.Group>
            <span className="text-sm text-gray-500">Tahun</span>
          </div>
        </NumberField>

        <RadioGroup
          value={data.first_smoke_reason}
          onChange={(val) => updateField("first_smoke_reason", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Kenapa anda merokok pertama kali?
          </Label>
          <div className="flex flex-col gap-3">
            {reasons.map((r) => (
              <CustomRadio key={r} value={r} label={r} />
            ))}
          </div>
        </RadioGroup>
      </div>
    </StepShell>
  );
}

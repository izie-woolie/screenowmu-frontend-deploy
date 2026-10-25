import { useNavigate } from "react-router";
import { Label, RadioGroup } from "@heroui/react";
import StepShell from "../components/StepShell";
import CustomRadio from "../components/CustomRadio";
import { useProfileWizard } from "../context/ProfileContext";

const TIME_OPTIONS = [
  { value: "<=5", label: "Dalam 5 minit" },
  { value: "6-30", label: "6-30 minit" },
  { value: "31-60", label: "31-60 minit" },
  { value: ">60", label: "Lebih dari 60 minit" },
];

export default function Dependence1() {
  const navigate = useNavigate();
  const { data, updateField } = useProfileWizard();

  const isValid =
    !!data.time_to_first_smoke &&
    !!data.hard_to_refrain &&
    !!data.hardest_time_early_morning;

  return (
    <StepShell
      title="Kesan Kebergantungan Produk Merokok"
      subtitle="Bahagian 1 daripada 2"
      onBack={() => navigate("/survey/spend")}
      onNext={() => navigate("/dependence/2")}
      nextDisabled={!isValid}
      showFacts
    >
      <div className="px-4 space-y-5">
        <RadioGroup
          value={data.time_to_first_smoke}
          onChange={(val) => updateField("time_to_first_smoke", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Berapa lama selepas bangun tidur anda menghisap rokok atau vape
            yang pertama?
          </Label>
          <div className="flex flex-col gap-3">
            {TIME_OPTIONS.map((o) => (
              <CustomRadio key={o.value} value={o.value} label={o.label} />
            ))}
          </div>
        </RadioGroup>

        <RadioGroup
          value={data.hard_to_refrain}
          onChange={(val) => updateField("hard_to_refrain", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Adakah anda mendapati sukar untuk menahan diri daripada merokok
            atau menggunakan vape di tempat yang tidak dibenarkan?
          </Label>
          <div className="flex gap-3">
            <CustomRadio value="true" label="Ya" />
            <CustomRadio value="false" label="Tidak" />
          </div>
        </RadioGroup>

        <RadioGroup
          value={data.hardest_time_early_morning}
          onChange={(val) =>
            updateField("hardest_time_early_morning", val.toString())
          }
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Bilakah waktu paling sukar bagi anda untuk tidak merokok atau pun
            vaping?
          </Label>
          <div className="flex gap-3">
            <CustomRadio value="true" label="Di awal pagi" />
            <CustomRadio value="false" label="Waktu lain" />
          </div>
        </RadioGroup>
      </div>
    </StepShell>
  );
}

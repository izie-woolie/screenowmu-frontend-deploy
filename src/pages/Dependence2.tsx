import { useNavigate } from "react-router";
import { Label, RadioGroup } from "@heroui/react";
import StepShell from "../components/StepShell";
import CustomRadio from "../components/CustomRadio";
import { useProfileWizard } from "../context/ProfileContext";

export default function Dependence2() {
  const navigate = useNavigate();
  const { data, updateField } = useProfileWizard();

  const isValid = !!data.smoke_more_in_first_hour && !!data.smoke_when_ill;

  return (
    <StepShell
      title="Kesan Kebergantungan Produk Merokok"
      subtitle="Bahagian 2 daripada 2"
      onBack={() => navigate("/dependence/1")}
      onNext={() => navigate("/readiness")}
      nextDisabled={!isValid}
      showFacts
    >
      <div className="px-4 space-y-5">
        <RadioGroup
          value={data.smoke_more_in_first_hour}
          onChange={(val) =>
            updateField("smoke_more_in_first_hour", val.toString())
          }
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Adakah anda sering merokok atau vape pada jam pertama selepas
            bangun tidur berbanding waktu lain?
          </Label>
          <div className="flex gap-3">
            <CustomRadio value="true" label="Ya" />
            <CustomRadio value="false" label="Tidak" />
          </div>
        </RadioGroup>

        <RadioGroup
          value={data.smoke_when_ill}
          onChange={(val) => updateField("smoke_when_ill", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Adakah anda masih merokok/vape jika anda sakit dan perlu berehat
            di katil?
          </Label>
          <div className="flex gap-3">
            <CustomRadio value="true" label="Ya" />
            <CustomRadio value="false" label="Tidak" />
          </div>
        </RadioGroup>
      </div>
    </StepShell>
  );
}

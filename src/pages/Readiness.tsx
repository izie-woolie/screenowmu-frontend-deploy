import { useState } from "react";
import { useNavigate } from "react-router";
import { Label, RadioGroup, toast } from "@heroui/react";
import { getApiErrorMessage } from "../utils/apiError";
import StepShell from "../components/StepShell";
import CustomRadio from "../components/CustomRadio";
import { useProfileWizard } from "../context/ProfileContext";
import { useCreateScreening } from "../hooks/useScreening";
import { toCreateScreeningInput } from "../mapper/profileMapper";

export default function Readiness() {
  const navigate = useNavigate();
  const { data, updateField, reset } = useProfileWizard();
  const createScreening = useCreateScreening();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isValid =
    !!data.tried_quit_12m &&
    !!data.intend_quit_6m &&
    !!data.intend_quit_next_month &&
    !!data.wants_to_quit;

  const handleSubmit = async () => {
    setSubmitError(null);
    try {
      const result = await createScreening.mutateAsync(
        toCreateScreeningInput(data)
      );
      navigate("/result", { state: { result } });
      reset();
    } catch (error) {
      console.error("Failed to submit screening: ", error);
      const message = getApiErrorMessage(error);
      setSubmitError(message);
      toast.danger(message);
    }
  };

  return (
    <StepShell
      title="Tahap Kesediaan untuk Berhenti"
      subtitle="Soalan terakhir sebelum keputusan akhir"
      onBack={() => navigate("/dependence/2")}
      onNext={handleSubmit}
      nextDisabled={!isValid}
      showFacts
      nextLabel="Hantar Saringan →"
      loading={createScreening.isPending}
    >
      <div className="px-4 space-y-5">
        <RadioGroup
          value={data.tried_quit_12m}
          onChange={(val) => updateField("tried_quit_12m", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Adakah anda pernah mencuba untuk berhenti merokok dalam 12 bulan
            lepas?
          </Label>
          <div className="flex gap-3">
            <CustomRadio value="true" label="Ya" />
            <CustomRadio value="false" label="Tidak" />
          </div>
        </RadioGroup>

        <RadioGroup
          value={data.intend_quit_6m}
          onChange={(val) => updateField("intend_quit_6m", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Adakah anda berniat serius untuk berhenti merokok dalam masa 6
            bulan?
          </Label>
          <div className="flex gap-3">
            <CustomRadio value="true" label="Ya" />
            <CustomRadio value="false" label="Tidak" />
          </div>
        </RadioGroup>

        <RadioGroup
          value={data.intend_quit_next_month}
          onChange={(val) =>
            updateField("intend_quit_next_month", val.toString())
          }
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Adakah anda berniat untuk berhenti merokok bulan hadapan?
          </Label>
          <div className="flex gap-3">
            <CustomRadio value="true" label="Ya" />
            <CustomRadio value="false" label="Tidak" />
          </div>
        </RadioGroup>

        <RadioGroup
          value={data.wants_to_quit}
          onChange={(val) => updateField("wants_to_quit", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Adakah anda berniat untuk berhenti merokok dan vape?
          </Label>
          <div className="flex gap-3">
            <CustomRadio value="true" label="Ya" />
            <CustomRadio value="false" label="Tidak" />
          </div>
        </RadioGroup>

        {submitError && (
          <p className="text-sm text-red-500 text-center">{submitError}</p>
        )}
      </div>
    </StepShell>
  );
}

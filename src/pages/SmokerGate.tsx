import { useState } from "react";
import {
  Input,
  Label,
  ListBox,
  RadioGroup,
  Select,
  TextField,
  toast,
} from "@heroui/react";
import { getApiErrorMessage } from "../utils/apiError";
import StepShell from "../components/StepShell";
import { useNavigate } from "react-router";
import { useProfileWizard } from "../context/ProfileContext";
import { useFieldValidation } from "../hooks/useFieldValidation";
import { validators } from "../utils/validators";
import CustomRadio from "../components/CustomRadio";
import { useCreateProfile } from "../hooks/useProfile";
import { toCreateProfileInput } from "../mapper/profileMapper";

export default function SmokerGate() {
  const navigate = useNavigate();

  const { data, updateField, reset } = useProfileWizard();
  const { errors, isValid } = useFieldValidation(data, {
    work_or_study_place: [
      validators.required("Nama tempat bekerja atau belajar diperlukan"),
    ],
  });

  const createProfile = useCreateProfile();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const jobStatusSelection = [
    "Pelajar",
    "Bekerja",
    "Bekerja sendiri",
    "Suri rumah",
    "Pesara",
    "Tidak bekerja",
  ];

  const handleSubmit = async () => {
    if (data.is_smoker === "true") {
      navigate("/survey/origin");
    } else {
      if (createProfile.isPending) return; // guard against double-submit
      setSubmitError(null);
      try {
        const result = await createProfile.mutateAsync(
          toCreateProfileInput(data)
        );
        navigate("/result", { state: { result } });
        reset();
      } catch (error) {
        console.error("Failed to create profile: ", error);
        const message = getApiErrorMessage(error);
        setSubmitError(message);
        toast.danger(message);
      }
    }
  };

  return (
    <StepShell
      title="Profil"
      subtitle="Maklumat peribadi asas untuk tujuan saringan kesihatan anda"
      onBack={() => navigate("/profile/demo")}
      onNext={handleSubmit}
      nextDisabled={
        !isValid ||
        !data.occupation ||
        !data.work_or_study_place ||
        !data.is_smoker
      }
      showFacts
      loading={createProfile.isPending}
      nextLabel={
        data.is_smoker === "false" ? "Hantar →" : "Seterusnya →"
      }
    >
      <div className="px-4 space-y-5">
        {/* Job Status*/}
        <Select
          isRequired
          placeholder="Pilih Status Pekerjaan Yang Sesuai Dengan Keadaan Anda"
          value={data.occupation}
          onChange={(val) =>
            updateField("occupation", val ? val.toString() : "")
          }
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Status Pekerjaan
          </Label>
          <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-gray-200 px-4 h-11 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
            <Select.Value />
            <Select.Indicator className="text-gray-400" />
          </Select.Trigger>
          <Select.Popover className="rounded-xl border border-gray-200 shadow-lg bg-white overflow-hidden">
            <ListBox>
              {jobStatusSelection.map((n) => (
                <ListBox.Item
                  key={n}
                  id={n}
                  textValue={n}
                  className="px-4 py-2.5 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 data-selected:bg-blue-50 data-selected:text-blue-700"
                >
                  {n}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>

        {/* Job Location */}
        <TextField isRequired isInvalid={!!errors.work_or_study_place}>
          <Label className="text-sm font-medium">
            Nama Tempat Bekerja atau Belajar
          </Label>
          <Input
            className="mt-1"
            placeholder="e.g., UPSI, Megah Holding Ltd."
            value={data.work_or_study_place}
            onChange={(e) => updateField("work_or_study_place", e.target.value)}
          />
          {errors.work_or_study_place && (
            <p className="text-xs px-2 pt-1 text-red-500">
              {errors.work_or_study_place}
            </p>
          )}
        </TextField>

        {/* Smoker */}
        <RadioGroup
          value={data.is_smoker}
          onChange={(val) => updateField("is_smoker", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Adakah anda merokok?
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

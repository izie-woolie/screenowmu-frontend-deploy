import { Description, Input, Label, TextField } from "@heroui/react";
import StepShell from "../components/StepShell";
import { useProfileWizard } from "../context/ProfileContext";
import { useNavigate } from "react-router";
import { useFieldValidation } from "../hooks/useFieldValidation";
import { validators } from "../utils/validators";

function BasicProfile() {
  const { data, updateField } = useProfileWizard();
  const navigate = useNavigate();

  const { errors, isValid } = useFieldValidation(data, {
    full_name: [validators.required("Nama diperlukan")],
    ic_or_passport: [validators.required("Nombor IC / Passport diperlukan")],
    email: [
      validators.required("Email diperlukan"),
      validators.email("Format email tidak sah"),
    ],
  });

  return (
    <StepShell
      title="Profil"
      subtitle="Maklumat peribadi asas untuk tujuan saringan kesihatan anda"
      onBack={() => {}}
      onNext={() => navigate("/profile/location")}
      nextDisabled={!isValid}
      showBack={false}
    >
      <div className="px-4 space-y-5">
        {/* NAME */}
        <TextField isRequired isInvalid={!!errors.full_name}>
          <Label className="text-sm font-medium">Nama</Label>
          <Input
            className="mt-1"
            placeholder="e.g., Muhammad bin Abdullah"
            value={data.full_name}
            onChange={(e) => updateField("full_name", e.target.value)}
          />
          <Description className="text-xs">
            {errors.full_name ??
              "Pastikan nama penuh seperti di dalam kad pengenalan untuk tujuan perjalanan kesihatan anda"}
          </Description>
        </TextField>

        {/* IC OR PASSPORT */}
        <TextField isRequired isInvalid={!!errors.ic_or_passport}>
          <Label className="text-sm font-medium">Nombor IC / Passport</Label>
          <Input
            placeholder="e.g., 030226100985"
            value={data.ic_or_passport}
            onChange={(e) => updateField("ic_or_passport", e.target.value)}
          />
          <Description className="mt-1">
            {errors.ic_or_passport ??
              "Pastikan nombor kad pengenalan seperti di dalam kad pengenalan untuk tujuan perjalanan kesihatan anda"}
          </Description>
        </TextField>

        {/* EMAIL */}
        <TextField isRequired>
          <Label className="text-sm font-medium">Email</Label>
          <Input
            placeholder="e.g., emailanda@gmail.com"
            value={data.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          {errors.email && (
            <Description className="text-xs text-red-600">
              {errors.email}
            </Description>
          )}
        </TextField>
      </div>
    </StepShell>
  );
}

export default BasicProfile;

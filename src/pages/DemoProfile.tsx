import { useNavigate } from "react-router";
import { useEffect } from "react";
import {
  Input,
  Label,
  ListBox,
  NumberField,
  RadioGroup,
  Select,
  TextField,
} from "@heroui/react";
import { useProfileWizard } from "../context/ProfileContext";
import CustomRadio from "../components/CustomRadio";
import { useFieldValidation } from "../hooks/useFieldValidation";
import { validators } from "../utils/validators";
import StepShell from "../components/StepShell";

export default function DemoProfile() {
  const { data, updateField } = useProfileWizard();

  // If the age field is still empty when this page loads, seed it with the
  // number shown in the input (20) so the displayed value always matches
  // what actually gets submitted - fixes the bug where "20" was shown on
  // screen but never saved unless the user touched the +/- buttons.
  useEffect(() => {
    if (!data.age) {
      updateField("age", "20");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { errors, isValid } = useFieldValidation(data, {
    ...(data.race === "Lain-lain"
      ? { others_race: [validators.required("Sila isi kaum anda")] }
      : {}),
  });
  const navigate = useNavigate();

  const raceSelection = [
    "Melayu",
    "India",
    "Cina",
    "Sikh",
    "Orang Asli",
    "Bumiputera Sarawak",
    "Bumiputera Sabah",
    "Warganegara Asing",
    "Lain-lain",
  ];
  return (
    <StepShell
      title="Profil"
      subtitle="Maklumat peribadi asas untuk tujuan saringan kesihatan anda"
      onBack={() => navigate("/profile/location")}
      onNext={() => navigate("/smoker/gate")}
      nextDisabled={!isValid || !data.age || !data.gender || !data.race}
      showFacts
    >
      <div className="px-4 space-y-5">
        {/* AGE */}
        <NumberField
          minValue={0}
          maxValue={110}
          value={data.age ? Number(data.age) : 20}
          onChange={(val) => updateField("age", val.toString())}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Umur
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

        {/* GENDER */}
        <RadioGroup
          value={data.gender}
          onChange={(val) => updateField("gender", val)}
          isRequired
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Jantina
          </Label>
          <div className="flex gap-3">
            <CustomRadio value="LELAKI" label="Lelaki" />
            <CustomRadio value="PEREMPUAN" label="Perempuan" />
          </div>
        </RadioGroup>

        {/* RACE */}
        <Select
          isRequired
          placeholder="Pilih Kaum"
          value={data.race}
          onChange={(val) => {
            const next = val ? val.toString() : "";
            updateField("race", next);
            if (next !== "Lain-lain") {
              updateField("others_race", "");
            }
          }}
        >
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Kaum
          </Label>
          <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-gray-200 px-4 h-11 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
            <Select.Value />
            <Select.Indicator className="text-gray-400" />
          </Select.Trigger>
          <Select.Popover className="rounded-xl border border-gray-200 shadow-lg bg-white overflow-hidden">
            <ListBox>
              {raceSelection.map((n) => (
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

        {/* If 'Lain-lain' Selected */}
        {data.race === "Lain-lain" && (
          <TextField isRequired isInvalid={!!errors.others_race}>
            <Input
              className="mt-1"
              placeholder="Isi kaum anda"
              value={data.others_race}
              onChange={(val) =>
                updateField("others_race", val.target.value.trim())
              }
            />
            {errors.others_race && (
              <p className="text-xs px-2 pt-1 text-red-500">
                {errors.others_race}
              </p>
            )}
          </TextField>
        )}
      </div>
    </StepShell>
  );
}

import { useNavigate } from "react-router";
import StepShell from "../components/StepShell";
import { locationData } from "../data/location";
import {
  Description,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { useProfileWizard } from "../context/ProfileContext";
import { useFieldValidation } from "../hooks/useFieldValidation";
import { validators } from "../utils/validators";

export default function LocationProfile() {
  const { data, updateField } = useProfileWizard();

  const { errors, isValid } = useFieldValidation(data, {
    phone: [validators.required("Nombor telefon diperlukan")],
  });
  const navigate = useNavigate();

  const areaOptions = data.state ? Object.keys(locationData[data.state]) : [];
  const cityOptions =
    data.state && data.district ? locationData[data.state][data.district] : [];

  return (
    <StepShell
      title="Profil"
      subtitle="Maklumat peribadi asas untuk tujuan saringan kesihatan anda"
      onBack={() => navigate("/profile/basic")}
      onNext={() => navigate("/profile/demo")}
      nextDisabled={!isValid || !data.state || !data.district || !data.city}
    >
      <div className="px-4 space-y-5">
        {/* PHONE NUMBER */}
        <TextField isRequired isInvalid={!!errors.phone}>
          <Label className="text-sm font-medium">Nombor Telefon</Label>
          <Input
            className="mt-1"
            placeholder="e.g., 0122661740"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={12}
            value={data.phone}
            onChange={(e) =>
              updateField("phone", e.target.value.replace(/[^\d]/g, ""))
            }
          />
          <Description className="text-xs">
            {errors.phone ??
              "Masukkan nombor telefon aktif untuk tujuan perhubungan"}
          </Description>
        </TextField>

        {/* STATE */}
        <Select
          placeholder="Pilih Negeri"
          value={data.state}
          onChange={(val) => {
            updateField("state", val ? val.toString() : "");
            updateField("district", "");
            updateField("city", "");
          }}
          isRequired
        >
          <Label>Negeri</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {Object.keys(locationData).map((n) => (
                <ListBox.Item key={n} id={n} textValue={n}>
                  {n}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>

        {/* DISTRICT */}
        <Select
          placeholder="Pilih Daerah"
          isDisabled={!data.state}
          value={data.district || null}
          onChange={(val) => {
            updateField("district", val ? val.toString() : "");
            updateField("city", "");
          }}
          isRequired
        >
          <Label>Daerah</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {areaOptions.map((d) => (
                <ListBox.Item key={d} id={d} textValue={d}>
                  {d}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>

        {/* CITY */}
        <Select
          placeholder="Pilih Bandar"
          isDisabled={!data.district}
          value={data.city}
          onChange={(val) => {
            updateField("city", val ? val.toString() : "");
          }}
          isRequired
        >
          <Label>Bandar</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {cityOptions.map((b) => (
                <ListBox.Item key={b} id={b} textValue={b}>
                  {b}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </StepShell>
  );
}

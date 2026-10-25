import { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router";
import { Card, Select, ListBox, Label, Spinner } from "@heroui/react";
import StepShell from "../components/StepShell";
import { useGeolocation } from "../hooks/useGeolocation";
import { clinicsApi } from "../api/clinics";
import { manualAreas } from "../data/manualAreas";
import { getApiErrorMessage } from "../utils/apiError";
import type { NearbyClinic } from "../types/clinic";

export default function ClinicFinder() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, coords, request, setCoords, setStatus } = useGeolocation();

  const [manualArea, setManualArea] = useState<string>("");
  const [clinics, setClinics] = useState<NearbyClinic[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const loading = coords !== null && clinics === null && error === null;

  // Minta kebenaran GPS sebaik sahaja halaman ini dibuka.
  useEffect(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Bila koordinat (daripada GPS ATAU pilihan manual) tersedia, cari klinik.
  useEffect(() => {
    if (!coords) return;

    let cancelled = false;

    clinicsApi
      .nearby(coords.lat, coords.lng)
      .then((res) => {
        if (!cancelled) setClinics(res.clinics);
      })
      .catch((err) => {
        if (!cancelled) setError(getApiErrorMessage(err));
      });

    return () => {
      cancelled = true;
    };
  }, [coords]);

  const handleManualAreaChange = (value: string) => {
    setManualArea(value);
    const area = manualAreas.find((a) => a.label === value);
    if (area) {
      // "unlock" pencarian klinik walaupun GPS ditolak, guna koordinat kawasan.
      setStatus("granted");
      setCoords({ lat: area.lat, lng: area.lng });
    }
  };

  return (
    <StepShell
      title="Klinik Berhenti Merokok Berdekat"
      subtitle="Kami akan cadangkan klinik kesihatan yang paling hampir dengan anda"
      onBack={() => navigate("/result", { state: location.state })}
      onNext={() => navigate("/result", { state: location.state })}
      nextLabel="Selesai"
      showFooter={status !== "requesting"}
    >
      <div className="px-4 space-y-5">
        {status === "requesting" && (
          <div className="flex flex-col items-center gap-3 py-10 text-stone-500">
            <Spinner />
            <p className="text-sm text-center">
              Meminta kebenaran lokasi peranti anda...
            </p>
          </div>
        )}

        {(status === "denied" || status === "unsupported") && !coords && (
          <div className="space-y-3">
            <p className="text-sm text-stone-600">
              Lokasi anda tidak dapat dikesan secara automatik. Sila pilih
              kawasan anda secara manual:
            </p>
            <Select
              placeholder="Pilih Kawasan"
              value={manualArea}
              onChange={(val) => handleManualAreaChange(val ? val.toString() : "")}
            >
              <Label>Kawasan</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  {manualAreas.map((a) => (
                    <ListBox.Item key={a.label} id={a.label} textValue={a.label}>
                      {a.label}
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        )}

        {loading && (
          <div className="flex justify-center py-6">
            <Spinner />
          </div>
        )}

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        {clinics && clinics.length === 0 && !loading && (
          <p className="text-sm text-stone-500 text-center">
            Tiada klinik berhenti merokok dijumpai berdekat anda buat masa
            ini.
          </p>
        )}

        {clinics && clinics.length > 0 && (
          <div className="space-y-3">
            {clinics.map((clinic) => (
              <Card key={clinic.id}>
                <Card.Content className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <p className="font-medium text-stone-800">
                      {clinic.name}
                    </p>
                    <span className="text-xs shrink-0 rounded-full bg-red-50 text-red-600 px-2 py-1">
                      {clinic.distance_km} km
                    </span>
                  </div>
                  {clinic.address && (
                    <p className="text-xs text-stone-500">{clinic.address}</p>
                  )}
                  <div className="flex gap-2 pt-1">
                    <a
                      href={clinic.google_maps_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-medium rounded-lg bg-red-50 text-red-600 py-2 hover:bg-red-100"
                    >
                      Google Maps
                    </a>
                    <a
                      href={clinic.waze_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-medium rounded-lg bg-red-50 text-red-600 py-2 hover:bg-red-100"
                    >
                      Waze
                    </a>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        )}
      </div>
    </StepShell>
  );
}

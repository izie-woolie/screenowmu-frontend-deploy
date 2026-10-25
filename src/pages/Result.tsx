import { useLocation, useNavigate } from "react-router";
import { Button, Card } from "@heroui/react";
import type { CreateScreeningResponse } from "../types/survey";
import type { CreateProfileResponse } from "../types/profile";

type ResultState =
  | { result: CreateScreeningResponse }
  | { result: CreateProfileResponse };

function isScreeningResult(
  result: CreateScreeningResponse | CreateProfileResponse
): result is CreateScreeningResponse {
  return "screening" in result;
}

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ResultState | null;

  if (!state?.result) {
    return (
      <div className="min-h-screen bg-stone-50 flex justify-center items-center p-4">
        <Card className="w-full max-w-xl">
          <Card.Content className="text-center py-10">
            <p className="text-stone-600">
              Tiada keputusan saringan untuk dipaparkan.
            </p>
            <Button
              className="mt-4"
              variant="danger-soft"
              onPress={() => navigate("/")}
            >
              Kembali ke Laman Utama
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }

  const { result } = state;
  const isSmoker = isScreeningResult(result);
  const fullName = result.profile.full_name;
  const email = result.profile.email;
  const emailedAt = isScreeningResult(result)
    ? result.screening.certificate_emailed_at
    : result.profile.certificate_emailed_at;
  const certificateUrl = result.certificate_url;

  return (
    <div className="min-h-screen bg-stone-50 flex justify-center items-center p-4">
      <Card className="w-full max-w-xl">
        <div className="flex justify-center w-full">
          <img
            src="/banner.png"
            alt="ScreeNowMU"
            className="mt-4 w-48 object-contain"
          />
        </div>

        <Card.Header className="flex flex-col items-center gap-1 px-7 pt-5 pb-0 text-center">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-red-700">
            ScreeNowMU · Saringan Merokok
          </span>
          <h1 className="text-2xl font-semibold leading-snug text-stone-900">
            {isSmoker ? "Terima Kasih" : "Tahniah"}
          </h1>
          <p className="text-sm text-stone-500">{fullName}</p>
        </Card.Header>

        <Card.Content className="px-7 py-5 space-y-4">
          {isSmoker ? (
            <>
              <p className="text-sm text-stone-600 text-center">
                Kerana telah meluangkan masa menjawab saringan ini.
                Berdasarkan jawapan yang diberi, anda mempunyai:
              </p>

              <div className="rounded-xl border border-rose-200 bg-rose-50 divide-y divide-rose-100">
                <div className="flex justify-between px-4 py-3">
                  <span className="text-sm font-medium text-stone-700">
                    Tahap Kebergantungan Produk Merokok
                  </span>
                  <span className="text-sm font-semibold text-rose-700">
                    {result.screening.dependence_level} (
                    {result.screening.dependence_score}/10)
                  </span>
                </div>
                <div className="flex justify-between px-4 py-3">
                  <span className="text-sm font-medium text-stone-700">
                    Tahap Kesediaan untuk Berhenti
                  </span>
                  <span className="text-sm font-semibold text-rose-700">
                    {result.screening.readiness_stage}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-500 text-center">
                Anda akan mendapatkan email/WhatsApp berkenaan dengan
                temujanji sesi klinik berhenti merokok anda. Jika tiada, anda
                boleh ke klinik kesihatan berdekatan dengan anda.
              </p>
            </>
          ) : (
            <p className="text-sm text-stone-600 text-center">
              Kerana tidak merokok dan teruskan menjalani gaya hidup sihat.
              Sijil penghargaan anda tersedia di bawah.
            </p>
          )}

          {email && emailedAt && (
            <p className="text-xs text-stone-400 text-center">
              Salinan sijil ini juga telah dihantar ke {email}.
            </p>
          )}
          {email && !emailedAt && (
            <p className="text-xs text-stone-400 text-center">
              Salinan sijil tidak dapat dihantar ke email buat masa ini. Sila
              muat turun sijil anda di bawah.
            </p>
          )}
        </Card.Content>

        <Card.Footer className="flex flex-col gap-3 border-t border-stone-200 px-7 py-4">
          {certificateUrl && (
            <Button
              variant="danger-soft"
              onPress={() => window.open(certificateUrl, "_blank")}
            >
              Muat Turun Sijil PDF
            </Button>
          )}
          <Button
            variant="secondary"
            onPress={() => navigate("/clinics", { state })}
          >
            Cari Klinik Berdekat
          </Button>
          <Button variant="secondary" onPress={() => navigate("/")}>
            Selesai
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

import { Button, Checkbox, Modal } from "@heroui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import TermAndCondition from "../components/TermAndCondition";
import PrivacyPolicy from "../components/PrivacyPolicy";

function Consent() {
  const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-8">
      <div className="w-full max-w-3xl text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-red-400">Makluman</h1>

        <p className="mt-2 text-left text-base text-gray-700">
          Sebelum memulakan saringan ini, sila ambil maklum bahawa:
        </p>

        {/* Information list */}
        <ul className="mt-5 space-y-3 text-left text-sm leading-relaxed text-gray-800">
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
            <span>
              ScreenNowMU adalah sebuah aplikasi milik Klinik Kesihatan Slim
              River bertujuan untuk membantu di dalam saringan, rujukan, promosi
              dan edukasi tentang merokok.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
            <span>
              Sebarang maklumat Peribadi atau kesihatan Nama, Nombor Kad
              Pengenalan, Nombor Telefon, Lokasi yang anda kongsi akan disimpan
              secara sulit dan digunakan untuk membantu perjalanan kesihatan
              anda.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
            <span>
              Segala kandungan, keputusan saringan dan bahan edukasi,
              <strong className="text-danger"> TIDAK BOLEH </strong>
              dianggap sebagai diagnosis atau rawatan profesional.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
            <span>
              Anda dinasihatkan untuk sentiasa merujuk doktor atau pakar
              perubatan bertauliah untuk sebarang nasihat dan rawatan.
            </span>
          </li>
        </ul>

        {/* Checkbox agreement */}
        <div className="mt-8 flex-col justify-center">
          <Checkbox isSelected={isAgreed} onChange={setIsAgreed}>
            <Checkbox.Content>
              <Checkbox.Control
                className={`${isAgreed ? "" : "border border-black"}`}
              >
                <Checkbox.Indicator />
              </Checkbox.Control>
              <div>
                Saya telah membaca dan bersetuju dengan{" "}
                <Modal>
                  <Modal.Trigger>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="font-semibold text-danger underline hover:opacity-80"
                    >
                      Terma & Syarat
                    </button>
                  </Modal.Trigger>
                  <Modal.Backdrop>
                    <Modal.Container>
                      <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Body>
                          <TermAndCondition />
                        </Modal.Body>
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>{" "}
                serta{" "}
                <Modal>
                  <Modal.Trigger>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="font-semibold text-danger underline hover:opacity-80"
                    >
                      Dasar Privasi
                    </button>
                  </Modal.Trigger>
                  <Modal.Backdrop>
                    <Modal.Container>
                      <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Body>
                          <PrivacyPolicy />
                        </Modal.Body>
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>
              </div>{" "}
            </Checkbox.Content>
          </Checkbox>
        </div>

        {/* Button */}
        <Button
          variant="danger-soft"
          size="lg"
          className="mt-7 w-full font-semibold"
          isDisabled={!isAgreed}
          onPress={() => navigate("/profile/basic")}
        >
          Saya Bersetuju dan Mulakan
        </Button>
      </div>
    </div>
  );
}
export default Consent;

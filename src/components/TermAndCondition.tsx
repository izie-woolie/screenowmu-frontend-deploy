function TermAndCondition() {
  const APP_NAME = "[Nama Aplikasi]";
  const COMPANY_NAME = "[Nama Syarikat]";
  const EMERGENCY_NUMBER = "999";
  const MINIMUM_AGE = 18;
  const CONTACT_EMAIL = "[Emel Rasmi]";
  const CONTACT_PHONE = "[No. Telefon Rasmi]";

  return (
    <div className="max-h-[70vh] space-y-6 overflow-y-auto px-2 text-sm leading-7 text-default-700">
      {/* Title */}
      <section>
        <h2 className="mb-3 text-xl font-bold text-default-900">
          TERMA DAN SYARAT PENGGUNAAN APLIKASI {APP_NAME}
        </h2>

        <p>
          Selamat datang ke <strong>{APP_NAME}</strong>. Dengan memuat turun,
          mengakses, atau menggunakan aplikasi ini, anda dianggap telah membaca,
          memahami, dan bersetuju untuk terikat dengan Terma dan Syarat ini
          serta Dasar Privasi kami. Jika anda tidak bersetuju dengan mana-mana
          bahagian dalam Terma dan Syarat ini, sila hentikan penggunaan aplikasi
          ini dengan serta-merta.
        </p>
      </section>

      {/* Section 1 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          1. Skop Perkhidmatan Aplikasi
        </h3>

        <p>
          Aplikasi ini menyediakan platform digital untuk pengurusan gaya hidup
          sihat yang merangkumi komponen berikut:
        </p>

        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            <strong>Survei Gaya Hidup:</strong> Pengumpulan data tabiat harian
            untuk pemprofilan kesihatan pengguna.
          </li>

          <li>
            <strong>Saringan Kesihatan Kendiri:</strong> Penilaian risiko
            digital berdasarkan parameter yang dimasukkan oleh pengguna.
          </li>

          <li>
            <strong>Sistem Rujukan:</strong> Kemudahan pautan maklumat atau
            janji temu ke fasiliti kesihatan pihak ketiga sekiranya saringan
            menunjukkan indikasi risiko.
          </li>

          <li>
            <strong>Promosi & Edukasi:</strong> Penyampaian kandungan
            multimedia, artikel, dan tips kesihatan untuk tujuan kesedaran awam.
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          2. Penafian Perubatan (Medical Disclaimer)
        </h3>

        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>Bukan Nasihat Perubatan:</strong> Segala kandungan,
            keputusan saringan, skor risiko, dan bahan edukasi di dalam aplikasi
            ini adalah untuk tujuan maklumat dan kesedaran sahaja. Ia{" "}
            <strong>TIDAK</strong> boleh dianggap sebagai diagnosis, nasihat,
            atau rawatan perubatan profesional.
          </li>

          <li>
            <strong>Tanggungjawab Pengguna:</strong> Anda dinasihatkan untuk
            sentiasa merujuk kepada doktor atau pakar perubatan bertauliah
            sebelum membuat sebarang keputusan berkaitan kesihatan. Jangan
            abaikan atau lambatkan pemeriksaan klinikal disebabkan maklumat
            daripada aplikasi ini.
          </li>

          <li>
            <strong>Kecemasan:</strong> Aplikasi ini bukan platform bantuan
            kecemasan. Sekiranya berlaku kecemasan perubatan, sila hubungi
            talian kecemasan nasional <strong>{EMERGENCY_NUMBER}</strong> atau
            hadir ke hospital terdekat.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          3. Ketepatan Data Saringan & Survei
        </h3>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Anda bertanggungjawab sepenuhnya memastikan semua maklumat yang
            dimasukkan seperti berat badan, tinggi, tekanan darah, atau tabiat
            harian adalah tepat, jujur, dan terkini.
          </li>

          <li>
            {APP_NAME} tidak bertanggungjawab ke atas sebarang ralat saringan
            atau kesilapan rujukan yang berpunca daripada maklumat palsu atau
            salah yang diberikan oleh pengguna.
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          4. Sistem Rujukan Pihak Ketiga
        </h3>

        <ul className="list-disc space-y-3 pl-6">
          <li>
            Fungsi rujukan mungkin memautkan anda kepada klinik, hospital, atau
            pengamal perubatan luar.
          </li>

          <li>
            <strong>Perkongsian Maklumat Rujukan:</strong> Apabila anda memilih
            untuk menggunakan fungsi rujukan seperti membuat janji temu atau
            memohon bantuan susulan, anda memberikan kebenaran kepada {APP_NAME}{" "}
            untuk memindahkan dan berkongsi data peribadi anda, termasuk nama
            penuh dan nombor telefon, kepada pihak ketiga yang berkaitan.
          </li>

          <li>
            <strong>Tujuan Hubungan:</strong> Maklumat tersebut digunakan bagi
            membolehkan penyedia perkhidmatan kesihatan mengenal pasti anda,
            menghubungi anda bagi pengesahan janji temu, atau menyediakan
            khidmat nasihat kesihatan susulan.
          </li>

          <li>
            {APP_NAME} tidak mengendors, mengawal, atau bertanggungjawab
            terhadap kualiti perkhidmatan, kos, atau rawatan yang diberikan oleh
            pihak ketiga.
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          5. Privasi dan Perlindungan Data (PDPA 2010)
        </h3>

        <ul className="list-disc space-y-3 pl-6">
          <li>
            Semua data peribadi dan maklumat kesihatan yang dikumpul melalui
            survei dan saringan dikendalikan tertakluk kepada Akta Perlindungan
            Data Peribadi 2010 (PDPA).
          </li>

          <li>
            <strong>Kebenaran Penggunaan Data:</strong> Dengan melengkapkan
            survei dan saringan yang memerlukan rujukan, anda bersetuju bahawa
            nama penuh dan nombor telefon anda akan disimpan dengan selamat
            dalam sistem kami bagi tujuan pengurusan rujukan kesihatan.
          </li>

          <li>
            Data anda tidak akan dijual atau digunakan untuk pemasaran pihak
            ketiga tanpa kebenaran anda.
          </li>

          <li>
            <strong>Hak Menarik Balik Kebenaran:</strong> Anda boleh menarik
            balik kebenaran perkongsian data dengan menghubungi pihak kami.
            Walau bagaimanapun, tindakan ini mungkin menyebabkan fungsi rujukan
            automatik tidak lagi tersedia.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          6. Kelayakan Pengguna
        </h3>

        <p>
          Aplikasi ini bertujuan untuk digunakan oleh individu berumur{" "}
          <strong>{MINIMUM_AGE} tahun</strong> ke atas. Pengguna di bawah umur{" "}
          {MINIMUM_AGE} tahun memerlukan pemantauan dan kebenaran ibu bapa atau
          penjaga yang sah.
        </p>
      </section>

      {/* Section 7 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          7. Had Liabiliti
        </h3>

        <p>
          Setakat yang dibenarkan oleh undang-undang,{" "}
          <strong>
            {APP_NAME} / {COMPANY_NAME}
          </strong>{" "}
          tidak akan bertanggungjawab terhadap sebarang kerugian, kecederaan,
          atau implikasi kesihatan sama ada secara langsung atau tidak langsung
          yang timbul daripada penggunaan aplikasi ini.
        </p>
      </section>

      {/* Section 8 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          8. Perubahan Terma dan Syarat
        </h3>

        <p>
          Kami berhak untuk mengemas kini atau mengubah Terma dan Syarat ini
          pada bila-bila masa tanpa notis awal. Sebarang perubahan akan berkuat
          kuasa serta-merta selepas versi terkini dikemas kini dalam {APP_NAME}.
        </p>
      </section>

      {/* Section 9 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          9. Maklumat Perhubungan
        </h3>

        <p>
          Sekiranya anda mempunyai sebarang pertanyaan mengenai Terma dan Syarat
          ini atau penggunaan data peribadi anda, sila hubungi:
        </p>

        <div className="mt-2">
          <p>
            <strong>{COMPANY_NAME}</strong>
          </p>
          <p>Emel: {CONTACT_EMAIL}</p>
          <p>Telefon: {CONTACT_PHONE}</p>
        </div>
      </section>
    </div>
  );
}
export default TermAndCondition;

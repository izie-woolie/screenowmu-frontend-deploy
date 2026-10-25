function PrivacyPolicy() {
  const APP_NAME = "[Nama Aplikasi]";
  const COMPANY_NAME = "[Nama Syarikat]";
  const LAST_UPDATED_DATE = "[Tarikh Hari Ini]";

  const SUPPORT_EMAIL = "[Emel Sokongan Syarikat]";
  const SUPPORT_PHONE = "[Nombor Telefon Sokongan]";

  return (
    <div className="max-h-[70vh] space-y-6 overflow-y-auto px-2 text-sm leading-7 text-default-700">
      {/* Title */}
      <section>
        <h2 className="mb-3 text-xl font-bold text-default-900">
          DASAR PRIVASI (PRIVACY POLICY) APLIKASI {APP_NAME}
        </h2>

        <p className="mb-3">
          <strong>Tarikh Kemaskini Terakhir:</strong> {LAST_UPDATED_DATE}
        </p>

        <p>
          <strong>
            {APP_NAME} / {COMPANY_NAME}
          </strong>{" "}
          ("kami") komited untuk melindungi dan menghormati privasi anda. Dasar
          Privasi ini menerangkan cara kami mengumpul, menggunakan, menyimpan,
          dan berkongsi data peribadi anda apabila anda menggunakan aplikasi
          survei gaya hidup kami.
        </p>
      </section>

      {/* Section 1 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          1. Maklumat yang Kami Kumpul
        </h3>

        <p>
          Kami mengumpul maklumat yang anda berikan secara sukarela apabila
          menggunakan aplikasi ini:
        </p>

        <ul className="mt-2 list-disc space-y-3 pl-6">
          <li>
            <strong>Maklumat Identiti Peribadi:</strong> Nama penuh dan nombor
            telefon yang dikumpul khusus untuk tujuan rujukan perubatan.
          </li>

          <li>
            <strong>Data Kesihatan & Gaya Hidup:</strong> Input survei seperti
            tabiat harian, pemakanan, aktiviti fizikal, serta parameter saringan
            seperti berat badan, tinggi, BMI, dan skor kesihatan mental atau
            fizikal.
          </li>

          <li>
            <strong>Data Teknikal Secara Automatik:</strong> Maklumat seperti
            alamat IP, jenis peranti, dan log penggunaan aplikasi melalui kuki
            (cookies) atau teknologi serupa.
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          2. Bagaimana Kami Menggunakan Data Anda
        </h3>

        <p>Kami menggunakan maklumat yang dikumpul untuk tujuan berikut:</p>

        <ul className="mt-2 list-disc space-y-3 pl-6">
          <li>
            <strong>Pemprofilan Gaya Hidup:</strong> Memproses data survei untuk
            memberikan laporan kesihatan kendiri.
          </li>

          <li>
            <strong>Penilaian Risiko:</strong> Menghasilkan skor saringan
            kesihatan berdasarkan maklumat yang diberikan oleh pengguna.
          </li>

          <li>
            <strong>Sistem Rujukan:</strong> Menggunakan nama dan nombor telefon
            anda untuk menghubungkan anda dengan fasiliti kesihatan pihak ketiga
            sekiranya anda memerlukan bantuan profesional.
          </li>

          <li>
            <strong>Edukasi Termaklum:</strong> Menghantar artikel, tips, atau
            notifikasi berkaitan gaya hidup sihat yang relevan.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          3. Perkongsian Data dengan Pihak Ketiga
        </h3>

        <p>
          Kami tidak akan menjual atau menyewakan data peribadi anda kepada
          pihak luar. Data anda hanya dikongsi dalam keadaan berikut:
        </p>

        <ul className="mt-2 list-disc space-y-3 pl-6">
          <li>
            <strong>Penyedia Perkhidmatan Kesihatan (Rujukan):</strong> Nama dan
            nombor telefon anda akan dihantar kepada klinik, hospital, atau
            pengamal perubatan pilihan atau rujukan anda bagi tujuan pengesahan
            identiti dan urusan hubungan semula.
          </li>

          <li>
            <strong>Data Awanama (Anonymized Data):</strong> Data survei dan
            saringan mungkin digunakan secara agregat tanpa nama dan nombor
            telefon bagi tujuan statistik, kajian kesihatan awam, atau
            penambahbaikan aplikasi.
          </li>

          <li>
            <strong>Pematuhan Undang-undang:</strong> Data mungkin dikongsi
            sekiranya diperlukan oleh pihak berkuasa atau undang-undang Malaysia
            seperti Kementerian Kesihatan Malaysia atau Akta Perlindungan Data
            Peribadi 2010 (PDPA).
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          4. Penyimpanan dan Keselamatan Data
        </h3>

        <ul className="list-disc space-y-3 pl-6">
          <li>
            Kami melaksanakan langkah keselamatan teknikal dan organisasi yang
            sesuai untuk melindungi data peribadi serta data kesihatan anda
            daripada akses tanpa izin, kehilangan, atau penyalahgunaan.
          </li>

          <li>
            Data anda akan disimpan sepanjang akaun anda aktif atau selama mana
            diperlukan untuk memenuhi tujuan pengumpulan data tersebut.
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          5. Hak Anda di Bawah PDPA 2010
        </h3>

        <p>Sebagai pengguna di Malaysia, anda mempunyai hak-hak berikut:</p>

        <ul className="mt-2 list-disc space-y-3 pl-6">
          <li>
            <strong>Hak Mengakses & Membetulkan:</strong> Anda boleh melihat dan
            mengemas kini nama, nombor telefon, atau profil kesihatan anda
            melalui tetapan aplikasi.
          </li>

          <li>
            <strong>Hak Menarik Balik Kebenaran:</strong> Anda boleh menarik
            balik kebenaran untuk kami memproses data anda termasuk
            pemberhentian perkongsian data rujukan. Walau bagaimanapun, beberapa
            fungsi aplikasi mungkin tidak lagi dapat digunakan.
          </li>

          <li>
            <strong>Hak Memadam Akaun:</strong> Anda boleh meminta pemadaman
            akaun dan data peribadi anda daripada pangkalan data kami tertakluk
            kepada keperluan undang-undang yang berkaitan.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-default-900">
          6. Hubungi Kami
        </h3>

        <p>
          Jika anda mempunyai sebarang soalan, aduan, atau ingin melaksanakan
          hak data anda, sila hubungi kami:
        </p>

        <div className="mt-3">
          <p>
            <strong>{COMPANY_NAME}</strong>
          </p>

          <p>Emel: {SUPPORT_EMAIL}</p>

          <p>Telefon: {SUPPORT_PHONE}</p>
        </div>
      </section>
    </div>
  );
}
export default PrivacyPolicy;

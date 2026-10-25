export interface ManualArea {
  label: string;
  lat: number;
  lng: number;
}

/**
 * Digunakan sebagai pilihan manual apabila pengguna menolak kebenaran GPS.
 * Koordinat adalah anggaran pusat bandar (bukan lokasi klinik), sekadar
 * untuk anggarkan klinik mana yang paling hampir.
 */
export const manualAreas: ManualArea[] = [
  { label: "Tanjung Malim", lat: 3.6839, lng: 101.5177 },
  { label: "Slim River", lat: 3.9578, lng: 101.4181 },
  { label: "Proton City", lat: 3.7231, lng: 101.4931 },
  { label: "Behrang", lat: 3.8167, lng: 101.4667 },
];

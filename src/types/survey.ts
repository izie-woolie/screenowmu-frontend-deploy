export type UsageBucket = "<10" | "11-20" | "21-30" | ">31";
export type TimeToFirstSmoke = "<=5" | "6-30" | "31-60" | ">60";

export interface CreateScreeningInput {
  // profile
  full_name: string;
  ic_or_passport: string;
  email: string;
  phone: string;
  state: string;
  district: string;
  city: string;
  age: number;
  gender: "LELAKI" | "PEREMPUAN";
  race: string;
  others_race: string;
  occupation: string;
  work_or_study_place: string;

  // asal usul & penggunaan
  age_first_smoke: number | null;
  first_smoke_reason: string | null;
  products: string[];
  cigarettes_per_day: UsageBucket | null;
  vape_per_day: UsageBucket | null;
  monthly_spend: number | null;

  // kebergantungan
  time_to_first_smoke: TimeToFirstSmoke;
  hard_to_refrain: boolean;
  hardest_time_early_morning: boolean;
  smoke_more_in_first_hour: boolean;
  smoke_when_ill: boolean;

  // kesediaan
  tried_quit_12m: boolean;
  intend_quit_6m: boolean;
  intend_quit_next_month: boolean;
  wants_to_quit: boolean | null;
}

export interface Screening {
  id: string;
  profile_id: string;
  dependence_score: number;
  dependence_level: "Rendah" | "Sederhana" | "Tinggi";
  readiness_stage: "Pre-contemplation" | "Contemplation" | "Preparation";
  certificate_path: string | null;
  certificate_emailed_at: string | null;
}

export interface CreateScreeningResponse {
  profile: { id: string; full_name: string; email: string };
  screening: Screening;
  certificate_url: string | null;
}

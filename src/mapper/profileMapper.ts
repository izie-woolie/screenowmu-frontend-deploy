import type { ProfileData } from "../context/ProfileContext";
import type { CreateProfileInput } from "../types/profile";
import type {
  CreateScreeningInput,
  TimeToFirstSmoke,
  UsageBucket,
} from "../types/survey";

const toBool = (v: string): boolean => v === "true";
const toBoolOrNull = (v: string): boolean | null => (v === "" ? null : v === "true");
const toNumOrNull = (v: string): number | null => (v === "" ? null : Number(v));

export function toCreateProfileInput(data: ProfileData): CreateProfileInput {
  return {
    full_name: data.full_name,
    ic_or_passport: data.ic_or_passport,
    email: data.email,
    phone: data.phone,
    state: data.state,
    district: data.district,
    city: data.city,
    age: Number(data.age),
    gender: data.gender as "LELAKI" | "PEREMPUAN",
    race: data.race,
    others_race: data.others_race,
    occupation: data.occupation,
    work_or_study_place: data.work_or_study_place,
    is_smoker: toBool(data.is_smoker),
  };
}

export function toCreateScreeningInput(data: ProfileData): CreateScreeningInput {
  return {
    full_name: data.full_name,
    ic_or_passport: data.ic_or_passport,
    email: data.email,
    phone: data.phone,
    state: data.state,
    district: data.district,
    city: data.city,
    age: Number(data.age),
    gender: data.gender as "LELAKI" | "PEREMPUAN",
    race: data.race,
    others_race: data.others_race,
    occupation: data.occupation,
    work_or_study_place: data.work_or_study_place,

    age_first_smoke: toNumOrNull(data.age_first_smoke),
    first_smoke_reason: data.first_smoke_reason || null,
    products: data.products,
    cigarettes_per_day: (data.cigarettes_per_day || null) as UsageBucket | null,
    vape_per_day: (data.vape_per_day || null) as UsageBucket | null,
    monthly_spend: toNumOrNull(data.monthly_spend),

    time_to_first_smoke: data.time_to_first_smoke as TimeToFirstSmoke,
    hard_to_refrain: toBool(data.hard_to_refrain),
    hardest_time_early_morning: toBool(data.hardest_time_early_morning),
    smoke_more_in_first_hour: toBool(data.smoke_more_in_first_hour),
    smoke_when_ill: toBool(data.smoke_when_ill),

    tried_quit_12m: toBool(data.tried_quit_12m),
    intend_quit_6m: toBool(data.intend_quit_6m),
    intend_quit_next_month: toBool(data.intend_quit_next_month),
    wants_to_quit: toBoolOrNull(data.wants_to_quit),
  };
}

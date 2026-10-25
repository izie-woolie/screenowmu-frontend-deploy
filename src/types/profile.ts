export interface Profile {
  id: string;
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
  is_smoker: boolean;
  certificate_path?: string | null;
  certificate_emailed_at?: string | null;
  created_at: string;
  updated_at: string;
}

// For creating a user, omit server-generated fields
export type CreateProfileInput = Omit<
  Profile,
  "id"
  | "created_at"
  | "updated_at"
  | "certificate_path"
  | "certificate_emailed_at"
>;

// For updating, allow partial fields (excluding id/timestamps)
export type UpdateProfileInput = Partial<CreateProfileInput>;

// Response from POST /profiles - includes the TAHNIAH certificate for
// non-smokers (null for smokers, who get their certificate via /screenings)
export interface CreateProfileResponse {
  profile: Profile;
  certificate_url: string | null;
}

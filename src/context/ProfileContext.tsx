import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface ProfileData {
  full_name: string;
  ic_or_passport: string;
  email: string;
  phone: string;
  state: string;
  district: string;
  city: string;
  // TODO: try type casting
  age: string; // keep as string while typing, convert to number on submit
  gender: string;
  race: string;
  others_race: string;
  occupation: string;
  work_or_study_place: string;
  is_smoker: string;

  // --- Survei Rokok: asal usul & penggunaan ---
  age_first_smoke: string;
  first_smoke_reason: string; // Rakan Sebaya | Keluarga | Media Sosial | Lain-lain
  products: string[]; // rokok | vape | lain
  cigarettes_per_day: string; // <10 | 11-20 | 21-30 | >31
  vape_per_day: string; // <10 | 11-20 | 21-30 | >31
  monthly_spend: string;

  // --- Kebergantungan (Fagerstrom) ---
  time_to_first_smoke: string; // <=5 | 6-30 | 31-60 | >60
  hard_to_refrain: string; // "true" | "false"
  hardest_time_early_morning: string;
  smoke_more_in_first_hour: string;
  smoke_when_ill: string;

  // --- Kesediaan untuk berhenti ---
  tried_quit_12m: string;
  intend_quit_6m: string;
  intend_quit_next_month: string;
  wants_to_quit: string;
}

const initialData: ProfileData = {
  full_name: "",
  ic_or_passport: "",
  email: "",
  phone: "",
  state: "",
  district: "",
  city: "",
  age: "",
  gender: "",
  race: "",
  others_race: "",
  occupation: "",
  work_or_study_place: "",
  is_smoker: "false",

  age_first_smoke: "",
  first_smoke_reason: "",
  products: [],
  cigarettes_per_day: "",
  vape_per_day: "",
  monthly_spend: "",

  time_to_first_smoke: "",
  hard_to_refrain: "",
  hardest_time_early_morning: "",
  smoke_more_in_first_hour: "",
  smoke_when_ill: "",

  tried_quit_12m: "",
  intend_quit_6m: "",
  intend_quit_next_month: "",
  wants_to_quit: "",
};

const LOCAL_STORAGE_KEY = "screenow_profile_data";

interface ProfileContextType {
  data: ProfileData;
  updateField: (field: keyof ProfileData, value: string | string[]) => void;
  reset: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ProfileData>(() => {
    try {
      const saved = sessionStorage.getItem(LOCAL_STORAGE_KEY);
      // Merge with initialData so fields added in newer versions never end up undefined.
      return saved ? { ...initialData, ...JSON.parse(saved) } : initialData;
    } catch {
      return initialData;
    }
  });

  useEffect(() => {
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateField = (field: keyof ProfileData, value: string | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const reset = () => {
    setData(initialData);
    sessionStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <ProfileContext.Provider value={{ data, updateField, reset }}>
      {children}
    </ProfileContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProfileWizard() {
  const ctx = useContext(ProfileContext);
  if (!ctx)
    throw new Error("useProfileWizard must be used within ProfileProvider");
  return ctx;
}

// Hand-authored to match supabase/migrations/*.sql. Once a real Supabase project exists,
// regenerate with: supabase gen types typescript --project-id <id> > src/types/database.types.ts

export type UserRole = "candidate" | "employer" | "admin";
export type GermanLevel = "none" | "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
export type CandidateStatus = "new" | "in_training" | "ready" | "placed" | "inactive";
export type EmployerStatus = "pending" | "validated" | "rejected" | "suspended";
export type StaffingRequestStatus = "open" | "in_progress" | "fulfilled" | "closed";
export type AppointmentStatus = "confirmed" | "cancelled" | "completed";

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          role: UserRole;
          full_name: string | null;
          phone: string | null;
          locale_pref: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["profiles"]["Row"]> & { id: string };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
        Relationships: [];
      };
      shortage_occupations: {
        Row: {
          id: string;
          slug: string;
          category: string;
          title_fr: string;
          title_de: string;
          title_en: string;
          description_fr: string | null;
          description_de: string | null;
          description_en: string | null;
          icon: string | null;
          is_published: boolean;
          display_order: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["shortage_occupations"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["shortage_occupations"]["Row"]>;
        Relationships: [];
      };
      candidates: {
        Row: {
          id: string;
          german_level: GermanLevel;
          target_occupation_id: string | null;
          needs_training: boolean;
          status: CandidateStatus;
          cv_storage_path: string | null;
          bio: string | null;
          years_experience: number | null;
          is_visible_to_employers: boolean;
          admin_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["candidates"]["Row"]> & { id: string };
        Update: Partial<Database["public"]["Tables"]["candidates"]["Row"]>;
        Relationships: [];
      };
      employers: {
        Row: {
          id: string;
          company_name: string;
          company_registration_no: string | null;
          industry: string | null;
          contact_person: string | null;
          website: string | null;
          status: EmployerStatus;
          validated_at: string | null;
          validated_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["employers"]["Row"]> & {
          id: string;
          company_name: string;
        };
        Update: Partial<Database["public"]["Tables"]["employers"]["Row"]>;
        Relationships: [];
      };
      staffing_requests: {
        Row: {
          id: string;
          employer_id: string;
          occupation_id: string | null;
          profession_title: string;
          headcount_needed: number;
          description: string | null;
          german_level_required: GermanLevel | null;
          status: StaffingRequestStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["staffing_requests"]["Row"]> & {
          employer_id: string;
          profession_title: string;
        };
        Update: Partial<Database["public"]["Tables"]["staffing_requests"]["Row"]>;
        Relationships: [];
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          message: string;
          handled: boolean;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["contact_messages"]["Row"]> & {
          name: string;
          email: string;
          message: string;
        };
        Update: Partial<Database["public"]["Tables"]["contact_messages"]["Row"]>;
        Relationships: [];
      };
      appointments: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string | null;
          appointment_date: string;
          appointment_time: string;
          status: AppointmentStatus;
          notes: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["appointments"]["Row"]> & {
          full_name: string;
          email: string;
          appointment_date: string;
          appointment_time: string;
        };
        Update: Partial<Database["public"]["Tables"]["appointments"]["Row"]>;
        Relationships: [];
      };
    };
    Views: {
      candidates_public_view: {
        Row: {
          id: string;
          german_level: GermanLevel;
          target_occupation_id: string | null;
          status: CandidateStatus;
          bio: string | null;
          years_experience: number | null;
          cv_storage_path: string | null;
          is_visible_to_employers: boolean;
          created_at: string;
        };
        Relationships: [];
      };
      appointments_availability_view: {
        Row: {
          appointment_date: string;
          appointment_time: string;
          status: AppointmentStatus;
        };
        Relationships: [];
      };
    };
    Functions: Record<string, never>;
    Enums: {
      user_role: UserRole;
      german_level: GermanLevel;
      candidate_status: CandidateStatus;
      employer_status: EmployerStatus;
      staffing_request_status: StaffingRequestStatus;
      appointment_status: AppointmentStatus;
    };
    CompositeTypes: Record<string, never>;
  };
}

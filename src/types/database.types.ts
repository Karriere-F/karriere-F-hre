// Hand-authored to match supabase/migrations/*.sql. Once a real Supabase project exists,
// regenerate with: supabase gen types typescript --project-id <id> > src/types/database.types.ts

export type UserRole = "candidate" | "employer" | "admin" | "staff";
export type StaffRole = "manager" | "recruiter" | "trainer" | "accountant";
export type GermanLevel = "none" | "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
export type CandidateStatus = "new" | "in_training" | "ready" | "placed" | "inactive";
export type EmployerStatus = "pending" | "validated" | "rejected" | "suspended";
export type StaffingRequestStatus = "open" | "in_progress" | "fulfilled" | "closed";
export type AppointmentStatus = "confirmed" | "cancelled" | "completed";
export type PlacementStage =
  | "training"
  | "recognition"
  | "matching"
  | "interview"
  | "contract"
  | "visa"
  | "travel"
  | "placed"
  | "dropped";
export type DocumentStatus =
  | "missing"
  | "received"
  | "translated"
  | "certified"
  | "submitted"
  | "validated"
  | "expired";
export type TaskStatus = "todo" | "in_progress" | "done";
export type TaskPriority = "low" | "normal" | "high";
export type CourseStatus = "planned" | "running" | "finished" | "cancelled";
export type EnrollmentStatus = "enrolled" | "completed" | "dropped";
export type ExamStatus = "registered" | "passed" | "partial" | "failed" | "absent";
export type InvoiceStatus = "draft" | "sent" | "paid" | "cancelled";
export type PaymentMethod =
  | "cash"
  | "orange_money"
  | "mtn_momo"
  | "bank_transfer"
  | "card"
  | "other";
export type Currency = "XAF" | "EUR";

// ERP tables (0012_erp.sql). Every column optional on insert/update; the database
// enforces the required ones.
type ErpTable<R> = {
  Row: R;
  Insert: Partial<R>;
  Update: Partial<R>;
  Relationships: [];
};

export type PlacementRow = {
  id: string;
  candidate_id: string;
  employer_id: string | null;
  staffing_request_id: string | null;
  job_title: string;
  track: string;
  stage: PlacementStage;
  owner_id: string | null;
  target_start_date: string | null;
  germany_city: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type PlacementEventRow = {
  id: string;
  placement_id: string;
  stage: PlacementStage | null;
  note: string | null;
  created_by: string | null;
  created_at: string;
};

export type CandidateDocumentRow = {
  id: string;
  candidate_id: string;
  doc_type: string;
  status: DocumentStatus;
  storage_path: string | null;
  expires_on: string | null;
  notes: string | null;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
};

export type TaskRow = {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  due_date: string | null;
  assignee_id: string | null;
  candidate_id: string | null;
  placement_id: string | null;
  employer_id: string | null;
  created_by: string | null;
  completed_at: string | null;
  created_at: string;
};

export type CourseRow = {
  id: string;
  name: string;
  level: GermanLevel;
  start_date: string | null;
  end_date: string | null;
  schedule: string | null;
  location: string | null;
  capacity: number | null;
  trainer_id: string | null;
  status: CourseStatus;
  notes: string | null;
  created_at: string;
};

export type EnrollmentRow = {
  id: string;
  course_id: string;
  candidate_id: string;
  status: EnrollmentStatus;
  final_result: string | null;
  created_at: string;
};

export type AttendanceRow = {
  enrollment_id: string;
  session_date: string;
  present: boolean;
};

export type ExamRow = {
  id: string;
  candidate_id: string;
  provider: string;
  level: GermanLevel;
  exam_date: string | null;
  status: ExamStatus;
  score: string | null;
  notes: string | null;
  created_at: string;
};

export type InvoiceRow = {
  id: string;
  number: string;
  candidate_id: string | null;
  employer_id: string | null;
  client_name: string;
  client_address: string | null;
  currency: Currency;
  issue_date: string;
  due_date: string | null;
  status: InvoiceStatus;
  notes: string | null;
  created_by: string | null;
  created_at: string;
};

export type InvoiceLineRow = {
  id: string;
  invoice_id: string;
  description: string;
  quantity: number;
  unit_price: number;
  position: number;
};

export type PaymentRow = {
  id: string;
  invoice_id: string;
  amount: number;
  paid_on: string;
  method: PaymentMethod;
  reference: string | null;
  created_by: string | null;
  created_at: string;
};

export type ExpenseRow = {
  id: string;
  spent_on: string;
  category: string;
  description: string | null;
  vendor: string | null;
  amount: number;
  currency: Currency;
  method: PaymentMethod;
  created_by: string | null;
  created_at: string;
};

export type InvoiceSummaryRow = InvoiceRow & { total: number; paid: number };

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
          staff_role: StaffRole | null;
          staff_active: boolean;
          email: string | null;
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
      profile_evaluations: {
        Row: {
          id: string;
          prenom: string;
          nom: string;
          email: string;
          whatsapp: string;
          pays: string;
          objectif: string | null;
          etudes: string | null;
          domaine: string | null;
          qualification: string | null;
          experience: string | null;
          allemand: string | null;
          certificat: string | null;
          age: string | null;
          orientation: string | null;
          compat: string | null;
          handled: boolean;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["profile_evaluations"]["Row"]> & {
          prenom: string;
          nom: string;
          email: string;
          whatsapp: string;
          pays: string;
        };
        Update: Partial<Database["public"]["Tables"]["profile_evaluations"]["Row"]>;
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
      page_content: {
        Row: {
          id: string;
          page_key: string;
          field_key: string;
          value_fr: string | null;
          value_de: string | null;
          value_en: string | null;
          updated_at: string;
          updated_by: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["page_content"]["Row"]> & {
          page_key: string;
          field_key: string;
        };
        Update: Partial<Database["public"]["Tables"]["page_content"]["Row"]>;
        Relationships: [];
      };
      site_images: {
        Row: {
          slot_key: string;
          storage_path: string | null;
          alt_fr: string | null;
          alt_de: string | null;
          alt_en: string | null;
          updated_at: string;
          updated_by: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["site_images"]["Row"]> & {
          slot_key: string;
        };
        Update: Partial<Database["public"]["Tables"]["site_images"]["Row"]>;
        Relationships: [];
      };
      placements: ErpTable<PlacementRow>;
      placement_events: ErpTable<PlacementEventRow>;
      candidate_documents: ErpTable<CandidateDocumentRow>;
      tasks: ErpTable<TaskRow>;
      courses: ErpTable<CourseRow>;
      enrollments: ErpTable<EnrollmentRow>;
      attendance: ErpTable<AttendanceRow>;
      exams: ErpTable<ExamRow>;
      invoices: ErpTable<InvoiceRow>;
      invoice_lines: ErpTable<InvoiceLineRow>;
      payments: ErpTable<PaymentRow>;
      expenses: ErpTable<ExpenseRow>;
    };
    Views: {
      invoice_summary: {
        Row: InvoiceSummaryRow;
        Relationships: [];
      };
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
      staff_role: StaffRole;
      placement_stage: PlacementStage;
      document_status: DocumentStatus;
      task_status: TaskStatus;
      task_priority: TaskPriority;
      course_status: CourseStatus;
      enrollment_status: EnrollmentStatus;
      exam_status: ExamStatus;
      invoice_status: InvoiceStatus;
      payment_method: PaymentMethod;
    };
    CompositeTypes: Record<string, never>;
  };
}

create table contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  message     text not null,
  handled     boolean not null default false,
  created_at  timestamptz not null default now()
);

create type appointment_status as enum ('confirmed', 'cancelled', 'completed');

create table appointments (
  id                 uuid primary key default gen_random_uuid(),
  full_name          text not null,
  email              text not null,
  phone              text,
  appointment_date   date not null,
  appointment_time   time not null,
  status             appointment_status not null default 'confirmed',
  notes              text,
  created_at         timestamptz not null default now(),
  unique (appointment_date, appointment_time)
);

alter table contact_messages enable row level security;
alter table appointments enable row level security;

-- Public-safe view for computing slot availability on the booking page: exposes only
-- date/time/status, never the visitor's name/email/phone (those stay admin-only on the
-- base table).
create view appointments_availability_view as
  select appointment_date, appointment_time, status
  from appointments
  where status = 'confirmed';

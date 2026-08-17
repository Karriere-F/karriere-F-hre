import { createClient } from "@/lib/supabase/server";
import { IMAGE_SLOTS } from "@/lib/content/content-schema";
import { ImageSlotForm } from "@/components/admin/image-slot-form";

export default async function AdminImagesPage() {
  const supabase = await createClient();

  const { data: images } = await supabase
    .from("site_images")
    .select("slot_key, storage_path");

  const pathBySlot = new Map((images ?? []).map((row) => [row.slot_key, row.storage_path]));

  return (
    <div>
      <h1 className="text-2xl font-serif text-brand-black mb-6">Images</h1>
      <div className="flex flex-col gap-4">
        {Object.entries(IMAGE_SLOTS).map(([slotKey, slot]) => {
          const path = pathBySlot.get(slotKey);
          const url = path
            ? supabase.storage.from("site-images").getPublicUrl(path).data.publicUrl
            : null;
          return (
            <ImageSlotForm
              key={slotKey}
              slotKey={slotKey as keyof typeof IMAGE_SLOTS}
              label={slot.label}
              currentUrl={url}
            />
          );
        })}
      </div>
    </div>
  );
}

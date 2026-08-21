import { EvaluationWizard } from "@/components/evaluation/evaluation-wizard";
import { metadataFromNamespace } from "@/lib/seo";

export const generateMetadata = () => metadataFromNamespace("evaluation", "/evaluation");

export default function EvaluationPage() {
  return (
    <div className="bg-brand-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <EvaluationWizard />
      </div>
    </div>
  );
}

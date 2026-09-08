import { EvaluationWizard } from "@/components/evaluation/evaluation-wizard";
import { metadataFromNamespace } from "@/lib/seo";

export const generateMetadata = () => metadataFromNamespace("evaluation", "/evaluation");

export default function EvaluationPage() {
  return (
    <div className="bg-brand-white">
      <EvaluationWizard />
    </div>
  );
}

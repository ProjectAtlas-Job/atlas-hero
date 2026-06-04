import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { FinalCta } from "@/components/marketing/FinalCta";
import { HeroSection } from "@/components/marketing/HeroSection";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { MetricStrip } from "@/components/marketing/MetricStrip";
import { UseCasePanel } from "@/components/marketing/UseCasePanel";
import { WorkflowTimeline } from "@/components/marketing/WorkflowTimeline";

export function LandingPage() {
  return (
    <MarketingShell>
      <HeroSection />
      <FeatureGrid />
      <MetricStrip />
      <WorkflowTimeline />
      <UseCasePanel />
      <FinalCta />
    </MarketingShell>
  );
}

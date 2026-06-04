import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  ListChecks,
  Network,
  Radar,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";

export const siteUrl = "https://myjobatlas.site";
export const appUrl = "https://app.myjobatlas.site";

export const navItems = [
  { href: "/workflow", label: "Workflow" },
  { href: "/about", label: "About" },
  { href: "/#intelligence", label: "Platform" },
];

export const workflowSteps = [
  {
    icon: Search,
    title: "Collect the right market",
    text: "Atlas keeps a shared job and company index across Indian job boards, startup listings, internships, and manually submitted URLs. Each role is parsed into skills, seniority, location, salary, source, and freshness signals.",
  },
  {
    icon: Radar,
    title: "Score fit honestly",
    text: "Matching is not just resume-to-job similarity. Atlas combines proven skills, seniority fit, company quality, location, compensation, posting freshness, and candidate strength into an explainable match score.",
  },
  {
    icon: FileText,
    title: "Improve the candidate profile",
    text: "Resume parsing, ATS checks, profile completeness, GitHub evidence, and LinkedIn imports show what is strong, what is missing, and what should be improved for the target role.",
  },
  {
    icon: Send,
    title: "Move applications forward",
    text: "Applications, cold mails, portal submissions, inbox-detected replies, interviews, assessments, follow-ups, and manual overrides live in one timeline instead of scattered across tabs.",
  },
  {
    icon: Network,
    title: "Use contacts without losing context",
    text: "Referral posts, contacts, company notes, recruiter emails, and follow-up history stay connected to the companies and roles they can influence.",
  },
];

export const featureCards = [
  {
    icon: SlidersHorizontal,
    title: "Candidate strength",
    text: "A calibrated profile score built from experience depth, proven skills, resume craft, GitHub evidence, and professional completeness.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Company intelligence",
    text: "Company quality uses hiring velocity, open-role history, compensation signals, tech relevance, reputation, and stability indicators.",
  },
  {
    icon: ListChecks,
    title: "Explainable matching",
    text: "Every match can show the drivers: skill coverage, seniority fit, company score, freshness, location fit, and role bar.",
  },
  {
    icon: ShieldCheck,
    title: "Data that can learn",
    text: "Feature snapshots and outcome logs make it possible to improve ranking later without changing the product flow.",
  },
];

export const metricItems = [
  { value: "Fit", label: "Skill coverage, seniority, company quality, compensation, freshness, and location scored together" },
  { value: "Proof", label: "Resume claims are checked against projects, GitHub evidence, profile data, and parsed work history" },
  { value: "Loop", label: "Applications and outcomes are logged so the system can learn which signals actually matter" },
];

export const useCases = [
  {
    icon: UserRound,
    title: "Students and fresh graduates",
    text: "Find internships and first roles, improve resume evidence, track cold emails, and learn which profile gaps matter most.",
  },
  {
    icon: ArrowUpRight,
    title: "Professionals changing roles",
    text: "Prioritise realistic opportunities, compare companies, tailor resumes, and keep interviews, assessments, and follow-ups visible.",
  },
  {
    icon: Network,
    title: "Referral-led searches",
    text: "Connect people, companies, role context, and outreach history without turning the job search into a sales pipeline.",
  },
];

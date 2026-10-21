export type BuildStatus = "problem" | "building" | "solved";

export type BuildRecord = {
  title: string;
  slug: string;
  status: BuildStatus;
  problem: string;
  context: string;
  hypothesis: string;
  questions: string[];
  constraints: string[];
  solutionApproach: string[];
  technologySelected: string[];
  whatWasBuilt: string;
  evidence: string[];
  learning: string;
  nextStep: string;
};

export const builds: BuildRecord[] = [
  {
    title: "AI Virtual Receptionist",
    slug: "ai-virtual-receptionist",
    status: "problem",
    problem:
      "A sexual wellness clinic needs a better way to handle inbound enquiries, answer common questions, qualify potential patients, and route appropriate enquiries without making the experience feel impersonal or difficult to access.",
    context: "To be explored.",
    hypothesis: "To be defined and tested.",
    questions: [
      "What enquiries does the clinic receive most frequently?",
      "Which questions can be answered without staff intervention?",
      "What information does a potential patient need before taking the next step?",
      "Which enquiries require a human?",
      "Where do enquiries currently enter the clinic?",
      "What should happen after an enquiry is qualified?",
    ],
    constraints: [
      "Patient privacy and confidentiality",
      "Medical/clinical boundaries",
      "Human escalation must remain available",
      "To be identified through discovery",
    ],
    solutionApproach: [],
    technologySelected: [],
    whatWasBuilt: "",
    evidence: [],
    learning: "",
    nextStep: "Define the clinic workflow and enquiry journey.",
  },
];

export interface Education {
  degree: string;
  institution: string;
  graduationYear: string;
  coursework: readonly string[];
}

/**
 * Placeholder entry: replace with your real details.
 * Set the array to [] to hide the Education section entirely.
 */
export const education: readonly Education[] = [
  {
    degree: "Your degree",
    institution: "Your institution",
    graduationYear: "Year",
    coursework: ["Add relevant coursework here"],
  },
];

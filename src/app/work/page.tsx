import type { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected interior design and fit-out projects by Shahin Khosravi across Dubai and Iran.",
  openGraph: {
    title: "Work | Shahin Khosravi",
    description:
      "Selected interior design and fit-out projects by Shahin Khosravi across Dubai and Iran.",
  },
};

export default function WorkPage() {
  return <WorkPageClient />;
}

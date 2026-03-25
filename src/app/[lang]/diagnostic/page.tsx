import { getPageMetadata } from "@/config/metadata-per-page";
import DiagnosticClient from "./DiagnosticClient";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return getPageMetadata("diagnostic", lang);
}

export default function DiagnosticPage() {
  return <DiagnosticClient />;
}

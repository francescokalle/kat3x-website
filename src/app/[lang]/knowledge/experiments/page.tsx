import { getPageMetadata } from "@/config/metadata-per-page";
import ExperimentsClient from "./ExperimentsClient";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return getPageMetadata("experiments", lang);
}

export default async function ExperimentsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <ExperimentsClient lang={lang} />;
}

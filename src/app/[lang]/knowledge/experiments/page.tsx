import ReportsPageClient from '../../../components/ReportsClient';

export default async function ExperimentsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <ReportsPageClient lang={lang} />;
}

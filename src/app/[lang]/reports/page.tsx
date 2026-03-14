import ReportsPageClient from '../../components/ReportsClient';

export default async function ReportsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <ReportsPageClient lang={lang} />;
}

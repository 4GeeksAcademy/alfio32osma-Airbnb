import RoomDetailPageClient from "./RoomDetailPageClient";

interface RoomDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { id } = await params;

  return <RoomDetailPageClient roomId={id} />;
}

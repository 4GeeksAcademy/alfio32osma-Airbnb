"use client";

import {
  AirVent,
  Car,
  ChevronLeft,
  ChevronRight,
  Coffee,
  ShieldCheck,
  Star,
  Tv,
  Utensils,
  Waves,
  Wifi
} from "lucide-react";
import TopNavbar from "@/components/layout/TopNavbar";
import Button from "@/components/ui/Button";
import { useRoomDetail } from "@/hooks/useRoomDetail";
import { RoomAmenity, RoomAmenityIcon } from "@/types/room";

interface RoomDetailPageClientProps {
  roomId: string;
}

function AmenityIcon({ icon }: { icon: RoomAmenityIcon }) {
  if (icon === "wifi") {
    return <Wifi className="h-5 w-5 text-zinc-700" aria-hidden="true" />;
  }

  if (icon === "utensils") {
    return <Utensils className="h-5 w-5 text-zinc-700" aria-hidden="true" />;
  }

  if (icon === "air-conditioning") {
    return <AirVent className="h-5 w-5 text-zinc-700" aria-hidden="true" />;
  }

  if (icon === "tv") {
    return <Tv className="h-5 w-5 text-zinc-700" aria-hidden="true" />;
  }

  if (icon === "car") {
    return <Car className="h-5 w-5 text-zinc-700" aria-hidden="true" />;
  }

  if (icon === "waves") {
    return <Waves className="h-5 w-5 text-zinc-700" aria-hidden="true" />;
  }

  if (icon === "shield") {
    return <ShieldCheck className="h-5 w-5 text-zinc-700" aria-hidden="true" />;
  }

  return <Coffee className="h-5 w-5 text-zinc-700" aria-hidden="true" />;
}

function AmenityItem({ amenity }: { amenity: RoomAmenity }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3">
      <AmenityIcon icon={amenity.icon} />
      <span className="text-sm font-medium text-zinc-800">{amenity.label}</span>
    </li>
  );
}

export default function RoomDetailPageClient({ roomId }: RoomDetailPageClientProps) {
  const {
    room,
    isLoading,
    currentPhotoIndex,
    guests,
    checkInDate,
    checkOutDate,
    nights,
    totalPrice,
    goToPreviousPhoto,
    goToNextPhoto,
    increaseGuests,
    decreaseGuests,
    setCheckInDate,
    setCheckOutDate
  } = useRoomDetail(roomId);

  if (isLoading) {
    return (
      <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <TopNavbar />
        <div className="flex min-h-[18rem] items-center justify-center rounded-3xl border border-zinc-200 bg-white">
          <p className="text-base font-medium text-zinc-600">Cargando detalle de la habitacion...</p>
        </div>
      </main>
    );
  }

  if (!room) {
    return (
      <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <TopNavbar />
        <div className="flex min-h-[18rem] items-center justify-center rounded-3xl border border-zinc-200 bg-white">
          <p className="text-base font-semibold text-zinc-700">No se encontro la habitacion solicitada.</p>
        </div>
      </main>
    );
  }

  const currentPhotoUrl = room.photos[currentPhotoIndex];

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <TopNavbar />
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white">
        <img
          src={currentPhotoUrl}
          alt={`${room.title} - foto ${currentPhotoIndex + 1}`}
          className="h-[20rem] w-full object-cover sm:h-[24rem] lg:h-[30rem]"
        />

        <button
          type="button"
          onClick={goToPreviousPhoto}
          className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/70"
          aria-label="Ver foto anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={goToNextPhoto}
          className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/70"
          aria-label="Ver foto siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="space-y-8">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">{room.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-700">
              <p className="inline-flex items-center gap-1 font-semibold text-zinc-900">
                <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                {room.rating.toFixed(2)}
              </p>
              <span aria-hidden="true">·</span>
              <p>{room.reviewsCount} resenas</p>
              <span aria-hidden="true">·</span>
              <p>{room.location}</p>
            </div>
          </header>

          <section className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200 text-lg font-bold text-zinc-700">
                {room.host.name.slice(0, 1).toUpperCase()}
              </div>
              <div>
                <p className="text-base font-semibold text-zinc-900">Anfitrion: {room.host.name}</p>
                <p className="text-sm text-zinc-600">{room.host.yearsHosting} anos como anfitrion</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Servicios</h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {room.amenities.map((amenity) => (
                <AmenityItem key={amenity.id} amenity={amenity} />
              ))}
            </ul>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
          <div className="mb-5 border-b border-zinc-200 pb-4">
            <p className="text-2xl font-bold text-zinc-900">
              {room.pricePerNight} EUR <span className="text-base font-medium text-zinc-600">/ noche</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">
                Check-in
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(event) => setCheckInDate(event.target.value)}
                  className="h-10 rounded-xl border border-zinc-300 px-3 text-zinc-900 outline-none transition focus:border-zinc-500"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">
                Check-out
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(event) => setCheckOutDate(event.target.value)}
                  className="h-10 rounded-xl border border-zinc-300 px-3 text-zinc-900 outline-none transition focus:border-zinc-500"
                />
              </label>
            </div>

            <div className="rounded-xl border border-zinc-200 p-3">
              <p className="text-sm font-medium text-zinc-700">Huespedes</p>
              <div className="mt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={decreaseGuests}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-lg text-zinc-700 transition hover:bg-zinc-100"
                  aria-label="Reducir huespedes"
                >
                  -
                </button>
                <p className="text-base font-semibold text-zinc-900">{guests}</p>
                <button
                  type="button"
                  onClick={increaseGuests}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-lg text-zinc-700 transition hover:bg-zinc-100"
                  aria-label="Aumentar huespedes"
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-xs text-zinc-500">Minimo 1 - Maximo 10 huespedes</p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700">
              <p className="font-medium text-zinc-900">Desglose del precio</p>
              <div className="mt-2 space-y-1">
                <p>
                  {room.pricePerNight} EUR x {nights} noches
                </p>
                <p className="text-xs text-zinc-500">Selecciona fechas validas para calcular el total.</p>
              </div>
              <p className="mt-2 border-t border-zinc-200 pt-2 text-base font-semibold text-zinc-900">
                Total: {totalPrice} EUR
              </p>
            </div>

            <Button type="button" className="h-11 w-full rounded-xl text-base font-semibold">
              Reservar
            </Button>
          </div>
        </aside>
      </section>
    </main>
  );
}

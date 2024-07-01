"use client";

import { Weather } from "@/components/Weather";
import { SimpleLayout } from "@/components/SimpleLayout";

export default function WeatherComponent() {
  return (
    <SimpleLayout> 
      <Weather />
    </SimpleLayout>
  );
}
// no 'use client' here
import React from 'react';
import { notFound } from 'next/navigation';
import physiotherapyData from '../../../../lib/physiotherapy.json';
import ProgrammeDetailClient from '../../../../components/Atheletes/ProgrammeDetailClient';

export function generateStaticParams() {
  return physiotherapyData.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

export default function ProgrammeDetailPage({ params }) {
  const programme = physiotherapyData.find((p) => p.id === params.id);
  if (!programme) return notFound();

  return <ProgrammeDetailClient programme={programme} />;
}

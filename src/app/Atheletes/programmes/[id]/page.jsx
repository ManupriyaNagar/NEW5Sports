

import React from 'react';

import programsData from '../../../../lib/programmes.json';


import ProgramDetailClient from './../../../../components/Atheletes/ProgramDetailClient';



// Generate static parameters
export function generateStaticParams() {
  return programsData.consultations.map((p) => ({ id: p.id }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const program = programsData.consultations.find((p) => p.id === params.id);

  if (!program) {
    return {
      title: 'Program Not Found',
      description: 'The requested program could not be found.',
    };
  }

  return {
    title: `${program.title} - Programmes`,
    description: program.description,
  };
}

export const dynamicParams = false;

export default function ProgramDetailPage({ params }) {
  const program = programsData.consultations.find((p) => p.id === params.id);
  if (!program) return notFound();

  return <ProgramDetailClient program={program} />;
}
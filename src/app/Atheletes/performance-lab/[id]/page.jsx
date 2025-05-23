import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import performanceLabData from './../../../../lib/performance-lab.json';
import PerformanceLabDetailClient from './../../../../components/Atheletes/PerformanceLabDetailClient';

// Define Service interface for type safety
const Service = {
  id: String,
  title: String,
  description: String,
  image: String,
  buttonText: String,
  buttonLink: String,
  consultations: Array,
};

// Generate static parameters
export function generateStaticParams() {
  return performanceLabData.map((p) => ({ id: p.id }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const service = performanceLabData.find((p) => p.id === params.id);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested performance lab service could not be found.',
    };
  }

  return {
    title: `${service.title} - Performance Lab`,
    description: service.description,
  };
}

export const dynamicParams = false;

export default function PerformanceLabDetailPage({ params }) {
  const service = performanceLabData.find((p) => p.id === params.id);
  if (!service) return notFound();

  return <PerformanceLabDetailClient service={service} />;
}
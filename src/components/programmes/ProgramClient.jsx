'use client';

import React from 'react';
import Link from 'next/link';

export default function ProgramClient({ initialData }) {
  const data = initialData || {};

  return (
    <section className="bg-black py-20 px-4 md:px-10 text-gray-100">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Program Section Title */}
        <h2 className="text-green-600 text-sm font-bold uppercase">
          {data.title || 'PROGRAM DETAILS'}
        </h2>

        {/* Program Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            {/* Program Title */}
            <h3 className="text-2xl font-bold">{data.title || 'No Title Available'}</h3>

            {/* Description */}
            {data.description && data.description.length > 0 ? (
              data.description.map((line, idx) => (
                <p key={idx} className="mt-4 text-gray-100">{line}</p>
              ))
            ) : (
              <p className="mt-4 text-gray-700">No description available.</p>
            )}
          </div>

          <div>
            {/* Price Section */}
            {data.price ? (
              <>
                <p className="text-green-600 font-semibold">{data.price.label || 'PRICE'}</p>
                <p className="mb-4 text-gray-700">{data.price.value || 'N/A'}</p>
              </>
            ) : (
              <>
                <p className="text-green-600 font-semibold">PRICE</p>
                <p className="mb-4 text-gray-700">N/A</p>
              </>
            )}

            {/* Details Section */}
            {data.details ? (
              <>
                <p className="text-green-600 font-semibold">{data.details.label || 'DETAILS'}</p>
                {data.details.paragraphs && data.details.paragraphs.length > 0 ? (
                  data.details.paragraphs.map((para, idx) => (
                    <p key={idx} className="text-gray-700 mb-3">{para}</p>
                  ))
                ) : data.details.items && data.details.items.length > 0 ? (
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                    {data.details.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 mb-3">No details available.</p>
                )}
              </>
            ) : (
              <>
                <p className="text-green-600 font-semibold">DETAILS</p>
                <p className="text-gray-700 mb-3">No details available.</p>
              </>
            )}

            {/* Podcast Embed */}
            {data.podcastEmbed && (
              <div className="mt-6">
                <iframe
                  width={data.podcastEmbed.width || '100%'}
                  height={data.podcastEmbed.height || 180}
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={data.podcastEmbed.iframeSrc}
                />
              </div>
            )}

            {/* Ideal For Section */}
            {data.idealFor ? (
              <>
                <p className="mt-6 text-green-600 font-semibold">
                  {data.idealFor.label || 'IDEAL FOR'}
                </p>
                <p className="text-gray-700">{data.idealFor.description || 'N/A'}</p>
              </>
            ) : (
              <>
                <p className="mt-6 text-green-600 font-semibold">IDEAL FOR</p>
                <p className="text-gray-700">N/A</p>
              </>
            )}

            {/* Testimonial Section */}
            {data.testimonial && (
              <div className="mt-6 border-l-4 border-green-600 pl-4">
                <p className="text-green-600 font-semibold">
                  {data.testimonial.label || 'TESTIMONIAL'}
                </p>
                <p className="text-gray-700 italic mt-2">"{data.testimonial.quote}"</p>
                <p className="text-gray-600 mt-2 font-semibold">
                  {data.testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">{data.testimonial.role}</p>
              </div>
            )}
          </div>
        </div>

        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="text-green-600 font-semibold hover:underline inline-block"
            aria-label="Back to programmes"
          >
            ← Back to Programmes
          </Link>
        </div>
      </div>
    </section>
  );
}
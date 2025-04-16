'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';

interface ImageWithTextProps {
  imageUrl: string;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  altText?: string;
  features: string[];
}

const ImageWithText = ({
  imageUrl,
  title,
  description,
  imagePosition = 'left',
  altText = 'Product Image',
  features = [],
}: ImageWithTextProps) => {
  return (
    <section className="min-h-screen w-full relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />{' '}
        {/* Gelişmiş overlay */}
      </div>

      {/* Content */}
      <div className="relative h-screen flex items-center">
        <div
          className={`w-full max-w-7xl mx-auto px-4 md:px-8 ${
            imagePosition === 'left'
              ? 'md:text-left md:ml-auto md:mr-0'
              : 'md:text-right md:mr-auto md:ml-0'
          }`}
        >
          <div className={`max-w-xl ${imagePosition === 'left' ? 'md:ml-auto' : 'md:mr-auto'}`}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 drop-shadow-md">
              {description}
            </p>

            <div
              className={`space-y-3 sm:space-y-4 ${
                imagePosition === 'right' ? 'items-end' : 'items-start'
              }`}
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 sm:gap-3 text-white drop-shadow-md ${
                    imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className="bg-blue-500 rounded-full p-1 sm:p-1.5 flex-shrink-0 shadow-lg">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;

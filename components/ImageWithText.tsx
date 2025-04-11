'use client';

import Image from 'next/image';

interface ImageWithTextProps {
  imageUrl: string;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  altText?: string;
}

const ImageWithText = ({
  imageUrl,
  title,
  description,
  imagePosition = 'left',
  altText = 'Product Image',
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
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{title}</h2>
            <p className="text-lg md:text-xl text-gray-100">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;

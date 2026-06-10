import React from 'react';

const PropertyMap = () => {
  // Placeholder address – replace with dynamic property address later
  const placeholderAddress = '123 Main St London';
  const mapSrc = `https://www.google.com/maps/search/${encodeURIComponent(placeholderAddress)}`;

  return (
    <div className="min-h-screen bg-midnight flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-5xl font-headings text-white mb-8">Property Location</h1>
      <iframe
        src={mapSrc}
        className="w-full max-w-4xl h-[500px] border border-white/10 rounded-lg"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Property Map"
      ></iframe>
    </div>
  );
};

export default PropertyMap;

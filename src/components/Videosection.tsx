import React from 'react'

export default function Videosection() {
  return (
    <>
      <section id="video" className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See Our Work in Action
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl flex gap-5 items-center justify-center py-5">
            {/* <ReactPlayer
                url="https://youtu.be/OWcDevDRaxU?si=TZ0du1ul3huxbowR"
                width="100%"
                height="100%"
                controls
                // light="https://images.unsplash.com/photo-1621905252507-c93c6a510f58"
                playing={false}
              /> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OWcDevDRaxU?si=TZ0du1ul3huxbowR"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OWcDevDRaxU?si=TZ0du1ul3huxbowR"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
            Watch our team of expert electricians in action as they tackle
            complex electrical installations and upgrades.
          </p>
        </div>
      </section>
    </>
  );
}

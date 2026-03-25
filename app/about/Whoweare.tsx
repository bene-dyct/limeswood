import Image from "next/image";

export default function Whoweare() {
  return (
    <section className="p-5 md:p-10 mt-10">
      <div className="max-sm:flex-col-reverse w-full mx-auto lg:px-10 flex gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="w-full sm:w-1/2 h-[300px] sm:h-[500px] rounded-xl overflow-hidden shadow-lg relative bg-red-400">
          <Image
            src="/engineerlady.jpg"
            alt="Industrial engineer lady"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="sm:w-1/2">
          {/* ISO + Company Mini Logos */}
          <div className="flex items-center gap-1 mb-2">
            {/* Blue Wing Logo */}
            <Image
              src="/small-logo.png"
              alt="Company logo"
              width={30}
              height={40}
              className="object-contain"
            />

            {/* ISO Badge */}
            <Image
              src="/iso.png"
              alt="ISO 9001 certification badge"
              width={30}
              height={40}
              className="object-contain"
            />

            <p className="text-sm text-gray-600 font-medium">
              ISO Certified 9001
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#3a5c6a] mb-6">
            <span className="text-[#229bb3]">Who</span> We Are
          </h1>

          {/* Description */}
          <p className="text-gray-600 md:text-lg mb-6 leading-relaxed text-justify">
            Limeswood International Company Ltd, situated in Nigeria, stands as
            a respected entity specializing in Mechanical, Electrical, and
            Instrumentation services. As dedicated partners, we cater to a wide
            array of industries, particularly focusing on oil and gas, power,
            energy, petrochemicals, and manufacturing.
          </p>

          <p className="text-gray-600 md:text-lg mb-5 leading-relaxed text-justify">
            Throughout our evolution, we&apos;ve diligently nurtured a team of
            highly skilled engineers, bolstered by the support of our Original
            Equipment Manufacturer (OEM) associates. These professionals,
            renowned for their innovation and expertise, stand ready around the
            clock to assist our clients, minimizing downtime and enhancing
            process efficiency. Our track record speaks volumes, positioning us
            as the premier procurement and service partner esteemed by numerous
            clients across diverse sectors.
          </p>
        </div>
      </div>
    </section>
  );
}

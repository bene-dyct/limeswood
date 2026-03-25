import Image from "next/image";
import Link from "next/link";

export default function Profilesection() {
  return (
    <>
      <section className="p-5 md:p-10 mt-10">
        <div className="w-full mx-auto lg:px-10 gap-12 items-center">

            <p className="text-gray-600 md:text-lg mb-6 leading-relaxed text-justify">
            <span className="text-2xl md:text-4xl font-bold leading-tight text-[#229bb3]">Limeswood International</span><span className="text-2xl md:text-4xl font-bold leading-tight text-[#3a5c6a]"> Company </span>
           is a multidisciplinary engineering company delivering integrated solutions across mechanical, electrical, automation, and instrumentation engineering. The company supports complex industrial operations through reliable engineering expertise, modern technologies, and structured project execution. Our operations focus on delivering safe, efficient, and high performance systems for industries including oil and gas, power generation, petrochemicals, manufacturing, and infrastructure development. Every project is approached with a commitment to technical excellence, operational reliability, and long term value creation.</p>

           <p className="text-gray-600 md:text-lg mb-6 leading-relaxed text-justify">
            <span className="text-2xl md:text-4xl font-bold leading-tight text-[#229bb3]">Our Engineering</span><span className="text-2xl md:text-4xl font-bold leading-tight text-[#3a5c6a]"> Approach </span>
            requires more than technical capability. They require structured planning, precision execution, and strict adherence to industry standards. Limeswood applies a comprehensive project delivery framework that integrates engineering design, procurement coordination, installation supervision, and commissioning support. This approach ensures every system delivered is reliable, scalable, and aligned with the client’s operational objectives.</p>


            <p className="text-gray-600 md:text-lg mb-6 leading-relaxed text-justify">
            <span className="text-2xl md:text-4xl font-bold leading-tight text-[#229bb3]">Our Company </span><span className="text-2xl md:text-4xl font-bold leading-tight text-[#3a5c6a]"> Commitment </span>
            involves delivering engineering solutions that improve operational performance, enhance safety, and support sustainable industrial development. Through strong technical expertise, responsible project management, and client focused service delivery, Limeswood continues to build lasting partnerships across the industries it serves.</p>


          <div className="flex items-center gap-1 mb-2">
            {/* Blue Wing Logo */}
            <Image
              src="/small-logo.png"
              alt="Company logo"
              width={30}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-[#229bb3] mb-6">
            Explore Our<span className="text-[#3a5c6a]"> Profile</span>
          </h1>

          <div className="max-sm:flex-col w-full mx-auto lg:px-10 flex gap-12 items-center">
            <div className="w-full sm:w-1/2 flex flex-col gap-7">
              <div className="h-[200px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg relative">
                <Link href='/profile/gallery'>
                <Image
                  src="/gallery.jpg"
                  alt="limeswood gallery"
                  fill
                  className="object-cover hover:scale-120 duration-500 transition-all cursor-pointer"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white  font-bold bg-black/50 px-6 py-4 rounded-lg gap-5">
                    <p className='text-base md:text-2xl  lg:text-3xl'>View Our Gallery</p>
                  </span>
                </div>
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col gap-7">
              <div className="h-[200px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg relative">
                <Link href='/profile/team'>
                <Image
                  src="/team.jpg"
                  alt="limeswood team"
                  fill
                  className="object-cover hover:scale-120 duration-500 transition-all cursor-pointer"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white  font-bold bg-black/50 px-6 py-4 rounded-lg gap-5">
                    <p className='text-base md:text-2xl  lg:text-3xl'>Meet Our Team</p>
                  </span>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

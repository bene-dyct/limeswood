export default function MapLocation() {
  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355.0270058670449!2d3.427614274256588!3d6.436187517673115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7ed6bf6a5cd%3A0x98359f7d619fee8e!2sLimeswood%20International%20Company%20Ltd!5e0!3m2!1sen!2sng!4v1774349613280!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  )
}


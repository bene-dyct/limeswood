import Image from "next/image";

export default function Blog() {
    return(
        <>
        <section className="h-screen">
            <Image
            src='/comingsoon.jpg'
            alt="coming soon"
            fill
            style={{backgroundPosition: "40% 50%", backgroundSize: "cover"}}
            />
        </section>
        </>
    )
}
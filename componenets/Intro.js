import Image from "next/image";
import banner from "../public/night.jpeg"

function Intro() {
    return (
        <div className="w-full h-screen relative">
            <Image src={banner}
                layout="fill"
                className="bg-fixed"
            />
            <div className="absolute top-60 w-full text-center">
                <p className="text-6xl text-white font-semibold z-50">I'm Anisha Maharjan</p>
                <p className="text-4xl pt-10 text-white font-light z-60">Web Developer</p>
            </div>
        </div>

    )
}

export default Intro

import Image from "next/image"



export default function Hero() {
    
    return (
        <div
            className="w-full z-10 h-20 text-black font-bold font-sans rounded-2xl sticky top-0 bg-zinc-100 flex justify-between items-center m-2 p-4"
        >
            <div>
                <Image
                    width={50}
                    height={50}
                    src='/logo.webp'
                    alt=""
                />
            </div>

        </div>
    )
}
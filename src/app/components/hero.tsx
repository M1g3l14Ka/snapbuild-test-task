import Image from "next/image"



export default function Hero() {
    
    return (
        <div
            className="w-full z-10 h-21 rounded-2xl sticky top-0 flex justify-between items-center p-4 bg-white"
        >
            <div className="flex justify-center items-center p-2">
                <Image
                    width={35}
                    height={35}
                    src='/snap-logo.webp'
                    alt=""
                />
                <span className="text-2xl font-bold">снэпбилд</span>
            </div>

            <div
                className=""
            >
                <button
                    className="bg-[#050505] text-white p-2.5 px-5 rounded-xl cursor-pointer"
                >
                    Начать сейчас
                </button>
            </div>

        </div>
    )
}
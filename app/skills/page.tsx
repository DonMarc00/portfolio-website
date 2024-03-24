import { BentoGridDemo } from "@/components/main/Bento";
export default function page() {
    return (
        <div className='h-full w-full flex flex-col'>
            <h1 className='text-4xl font-bold text-center text-white mt-20'>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    More than just
                </span>
                {" "} a software engineer</h1>
            <h3 className="text-center text-white mt-4">Explore my diverse areas of expertise beyond software development.</h3>
            <h3 className="text-center text-white ">Being a skilled developer also requires an open mind and a broad understanding of various domains.</h3>
            <div className="my-10 mx-4">
                <BentoGridDemo />
            </div>
        </div>
    )
}
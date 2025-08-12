
const Hero = () => {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden" style={{backgroundImage:"url('../src/assets/slider-1.jpg')"}}>
            <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                <h1 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-16">Best Fitness Center Near You</h1>
                <p className="pt-4 max-w-3xl mx-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <div className="space-x-6 mt-14">
                    <button className="bg-red-600 text-white px-8 py-3 rounded font-semibold">Get Started</button>
                    <button className="border border-white px-8 py-3 rounded font-semibold">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
import { coursesData } from "../assets";

const Courses = () => {
    return (
        <section className='max-w-7xl mx-auto px-6 py-8'>
            <div className="text-center max-w-2xl mx-auto mb-10 pt-12">
                <hr className="w-[18%] mx-auto border-t-4 border-red-600" />
                <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {coursesData.map((course, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
                    >
                        <img src={course.image} alt={course.title} className="w-full rounded" />
                        <div className="">
                            <h3 className="cursor-pointer text-2xl font-bold py-4 hover:text-red-600">{course.title}</h3>
                            <p className="cursor-pointer text-gray-600 ">{course.descreption}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Courses
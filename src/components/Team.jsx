import { team } from "../assets";

const Team = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 py-8'>
            <div className="text-center max-w-2xl mx-auto mb-10 pt-12">
                <hr className="w-[18%] mx-auto border-t-4 border-red-600" />
                <h2 className="text-4xl font-bold mb-4">Our Team</h2>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                </p>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-8">
                {team.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.name} className="w-70"/>
                        <h1 className="text-center font-semibold text-2xl py-2">{item.name}</h1>
                        <h3 className="font-semibold text-gray-600 text-center">{item.post}</h3>
                    </div>
                ))}
            </div>
    </section>
  )
}

export default Team
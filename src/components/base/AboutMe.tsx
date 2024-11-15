/* eslint-disable @typescript-eslint/no-explicit-any */
import { Mail, Phone } from "lucide-react";


const OurTeam = () => {
    // Replace with your own details
    const myDetails = {
        name: "Amit Mishra",
        position: "Founder",
        image: "./gg.jpeg",
        email: "eivorftw234@gmail.com",
        phone: "+91 7978418038",
    };

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900" id="team">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-10">
                    About Me 
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                "I specialize in delivering transformative dropservicing solutions, leveraging Sass and advanced platforms like VirtuoSphere to empower businesses. With a steadfast commitment to excellence and a passion for crafting seamless service experiences, I ensure your enterprise excels with bespoke solutions that redefine industry standards."
                </p>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl max-w-sm mx-auto mt-10">
                    <img
                        className="w-32 h-32 mx-auto rounded-full"
                        src={myDetails.image}
                        alt={myDetails.name}
                    />
                    <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        {myDetails.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                        {myDetails.position}
                    </p>
                    <div className="mt-4 flex flex-col justify-center items-center space-y-2">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Mail className="w-5 h-5 mr-2" />
                            <a href={`mailto:${myDetails.email}`} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                {myDetails.email}
                            </a>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Phone className="w-5 h-5 mr-2" />
                            <a href={`tel:${myDetails.phone}`} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                {myDetails.phone}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;

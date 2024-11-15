import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const Hero = () => {

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    return (
        <>
            <div className="pt-32 container px-5 md:px-7" id="home">
                <div className="flex flex-col w-full justify-center items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="mb-4 text-center text-base bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md shadow-md"
                    >
                        "Sass-powered Dropservicing Excellence: Elevate Your Business with VirtuoSphere"
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="sm:text-5xl md:text-5xl lg:text-6xl text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7474BF] to-[#348AC7] pb-6 w-full leading-tight"
                    >

                        "Dropservicing Redefined: <br /> Elevate Your Business to New Heights"
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="text-base text-center md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl"
                    >
                        "Streamline Your Service Business with Our Sleek,
                        <br />
                        Sass-Powered Platform for Effortless Excellence."

                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={buttonVariants}
                        className="button-group my-8 flex flex-col gap-y-4 md:gap-y-0 md:flex-row w-full justify-center items-center"
                    >


                    </motion.div>

                    <p className="text-xs md:text-sm text-center text-gray-500 dark:text-gray-400">
                        "Discover our sales success firsthand—no credit card needed."
                    </p>

                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 7000,
                            }),
                        ]}
                        opts={{
                            loop: true,
                            align: "center",
                        }}
                        className="mb-10 mt-8 max-w-[1074px] w-full"
                    >
                        <CarouselContent className="m-0">
                            <motion.div initial="hidden" animate="visible" variants={imageVariants} className="w-full max-w-[1074px] h-full">
                                <CarouselItem className="p-0 flex justify-center h-full mx-2">
                                    <img className="rounded-md w-full h-full object-cover" src="/amit.png" alt="Carousel Image 1" />
                                </CarouselItem>
                            </motion.div>
                            <motion.div initial="hidden" animate="visible" variants={imageVariants} className="w-full max-w-[1074px] h-full">
                                <CarouselItem className="p-0 flex justify-center h-full mx-2">
                                    <img className="rounded-md w-full h-full object-cover" src="/third.jpg" alt="Carousel Image 2" />
                                </CarouselItem>
                            </motion.div>
                            <motion.div initial="hidden" animate="visible" variants={imageVariants} className="w-full max-w-[1074px] h-full">
                                <CarouselItem className="p-0 flex justify-center h-full mx-2">
                                    <img className="rounded-md w-full h-full object-cover" src="/second.jpg" alt="Carousel Image 2" />
                                </CarouselItem>
                            </motion.div>
                        </CarouselContent>


                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default Hero;

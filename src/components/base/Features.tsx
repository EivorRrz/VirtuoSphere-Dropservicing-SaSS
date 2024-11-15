import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Features = () => {
    return (
        <div className="container py-10 text-center" id="features">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                "Efficient and High-Performance Dropservicing Solution."
            </h2>
            <p className="mt-5 mb-10 text-lg font-normal">
                Start working with <span className="font-medium text-[#348AC7]">VirtuoSphere</span> to work more efficiently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div>
                    <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
                        <Card className="text-start">
                            <CardHeader>
                                <CardDescription>
                                    <img src="/analytics.png" alt="feature" className="w-20 h-20 rounded-full inline-block" />
                                </CardDescription>
                                <CardTitle>
                                    Virtual Workspaces
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    <li>Create interactive workspaces with clients and freelancers.</li>
                                    <li>Advanced tools for seamless collaboration.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <div>
                    <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
                        <Card className="text-start">
                            <CardHeader>
                                <CardDescription>
                                    <img src="/token.png" alt="feature" className="w-20 h-20 rounded-full inline-block" />
                                </CardDescription>
                                <CardTitle>
                                    Performance Analytics
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    <li>Insights into performance metrics, including completed tasks, earnings, and client feedback.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <div className="md:col-span-2">
                    <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
                        <Card className="text-start">
                            <CardHeader>
                                <CardDescription>
                                    <img src="/codecollab.png" alt="feature" className="w-20 h-20 rounded-full inline-block" />
                                </CardDescription>
                                <CardTitle>
                                    Exclusive Freelance Marketplace Access
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col md:flex-row items-center justify-center">
                                <ul>
                                    <li>Access to a marketplace with exclusive projects not available on other platforms.</li>
                                    <li>Premium listings for top-rated freelancers.</li>
                                    <li>Benefit from premium listings that showcase your skills and attract top-tier clients. Join a thriving community of freelancers dedicated to excellence and growth in their careers.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Features;

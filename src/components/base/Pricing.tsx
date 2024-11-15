import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

interface Plan {
    title: string;
    description: string;
    price: number;
    features: string[];
    highlighted: boolean;
    stripeCheckoutLink: string;
}

const defaultPlans: { monthly: Plan[] } = {
    monthly: [
        { title: 'Starter', description: 'Perfect for individuals', price: 9, features: ['1 user', 'Essential Services', 'Basic features'], highlighted: false, stripeCheckoutLink: 'https://buy.stripe.com/test_bIY8wP5K00jG5nW9AA' },
        { title: 'Pro', description: 'Perfect for small teams', price: 29, features: ['5 users', 'Premium Services', 'Advanced features'], highlighted: true, stripeCheckoutLink: 'https://buy.stripe.com/test_cN228rc8o2rObMkbIL' },
        { title: 'Enterprise', description: 'Perfect for large organizations', price: 99, features: ['Unlimited users', 'Exclusive Services', 'Enterprise features'], highlighted: false, stripeCheckoutLink: 'https://buy.stripe.com/test_4gw3cv0pG4zWg2A002' }
    ]
};

const Pricing = () => {

    const handlePayment = async (plan: Plan) => {
        window.location.href = plan.stripeCheckoutLink;
    };

    return (
        <div id="pricing">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mt-10">
                Pricing
            </h3>
            <p className="text-center mt-5 mb-10 text-lg font-normal">
                Choose a plan that works for you
            </p>
            <Tabs className="w-full max-w-4xl mx-auto my-10 mb-16 px-5" defaultValue="monthly">
                <TabsList className="grid grid-cols-1 max-w-sm mx-auto">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly">
                    <motion.div className="grid md:grid-cols-3 gap-6 mt-10">
                        {defaultPlans.monthly.map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col h-full ${plan.highlighted ? 'border-2 border-red-500' : ''}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{plan.title}</CardTitle>
                                        <CardDescription>{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <motion.div
                                            className="text-4xl font-bold"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            ${plan.price}
                                        </motion.div>
                                        <div className="text-gray-500 dark:text-gray-400">per month</div>
                                        <ul className="space-y-2 text-sm">
                                            {plan.features.map((feature, i) => (
                                                <li key={i}>
                                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full" onClick={() => handlePayment(plan)}>
                                            Get Started
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Pricing;

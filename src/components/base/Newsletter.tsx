import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');

    const sendEmail = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const templateParams = {
                from_name: 'Your Company',
                to_email: email,
                message_html: 'Thank you for subscribing!',
            };

            await emailjs.send(
                'service_vnxoqdp',
                'template_n6654qa',
                templateParams,
                'ZN40fJqjCX2Hqz3t4'
            );

            setSubscribed(true);
            setEmail('');
        } catch (error) {
            setError('Failed to subscribe. Please try again later.');
            console.error('Email send error:', error);
        }
    };

    return (
        <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100">
                        Stay ahead with our latest updates
                    </h2>
                    <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300">
                        Subscribe to our newsletter and be the first to know about new services, advancements, and exclusive offers.
                    </p>
                </div>
                <div className="w-full max-w-md mx-auto">
                    <form onSubmit={sendEmail} className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
                        <Input
                            className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button
                            type="submit"
                            className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                        >
                            Subscribe
                        </Button>
                    </form>
                    {subscribed && (
                        <p className="mt-4 text-green-600 dark:text-green-400">
                            Thank you for subscribing! Please check your email for confirmation.
                        </p>
                    )}
                    {error && (
                        <p className="mt-4 text-red-600 dark:text-red-400">{error}</p>
                    )}
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        We'll never share your email...
                        
                        
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

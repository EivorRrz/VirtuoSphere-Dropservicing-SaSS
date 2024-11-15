import ScrollToTop from '@/hooks/ScrollToTop';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/mdknoygr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();

            if (response.ok) {
                setStatus('Thanks for your submission!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error('Submission error:', responseData.error || 'Unknown error');
                setStatus('There was a problem with your submission.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('Failed to submit the form. Please try again later.');
        }
    };

    return (
        <>
            <ScrollToTop />
            <section className="py-16 pt-24" id="contact">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        We would love to hear from you! Please fill out the form below to get in touch.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-left space-y-4">
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <MapPin className="w-6 h-6 mr-2" />
                                <span>Bhubaneswar, India</span>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <Mail className="w-6 h-6 mr-2" />
                                <span>eivorftw234@gmail.com</span>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <Phone className="w-6 h-6 mr-2" />
                                <span>7978418038</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="firstName" className="text-left text-gray-600 dark:text-gray-400">First Name</label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="lastName" className="text-left text-gray-600 dark:text-gray-400">Last Name</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-left text-gray-600 dark:text-gray-400">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-left text-gray-600 dark:text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Send Message
                            </button>
                            {status && <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{status}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;

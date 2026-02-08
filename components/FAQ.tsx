import React, { useState } from 'react';

const faqData = [
    {
        question: "What services does Echoes Software Technologies provide?",
        answer: "We offer a comprehensive range of custom software development services, including enterprise application development, cloud solutions, AI & machine learning integration, mobile app development, and legacy system modernization."
    },
    {
        question: "How do you ensure the security of your software solutions?",
        answer: "Security is our top priority. We implement military-grade encryption, follow OWASP best practices,conduct regular security audits, and ensure compliance with international standards like ISO 27001 and GDPR."
    },
    {
        question: "Can you help with digital transformation for my business?",
        answer: "Absolutely. We specialize in guiding businesses through their digital transformation journey. From strategy consulting to technical implementation, we help you leverage modern technologies to optimize operations and drive growth."
    },
    {
        question: "What is your development methodology?",
        answer: "We follow an Agile development methodology, ensuring flexibility, transparency, and rapid delivery. This approach allows for continuous feedback and iterative improvements throughout the project lifecycle."
    },
    {
        question: "Do you provide post-launch support and maintenance?",
        answer: "Yes, we offer dedicated post-launch support and maintenance packages. Our team ensures your software remains up-to-date, secure, and performs optimally as your business scales."
    }
];

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`border-b border-gray-100 last:border-0`}>
            <button
                className="w-full text-left py-6 flex items-center justify-between group focus:outline-none"
                onClick={onClick}
            >
                <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-brand-blue-600' : 'text-navy-900 group-hover:text-brand-blue-600'}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-blue-100 rotate-180' : 'bg-gray-50 group-hover:bg-brand-blue-50'}`}>
                    <i data-lucide="chevron-down" className={`w-5 h-5 transition-colors ${isOpen ? 'text-brand-blue-600' : 'text-navy-400 group-hover:text-brand-blue-600'}`}></i>
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="text-navy-600 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-100/40 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-brand-blue-600 font-black tracking-[0.2em] text-sm uppercase">Common Questions</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight">Frequently Asked Questions</h3>
                    <p className="text-xl text-navy-600 max-w-2xl mx-auto font-light">
                        Everything you need to know about our services and how we work.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-navy-600 mb-6">Still have questions?</p>
                    <a
                        href="https://forms.gle/K3LySpfU6YYvQKGj9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center premium-gradient text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

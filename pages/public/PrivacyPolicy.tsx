import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const PrivacyPolicy: React.FC = () => {

    useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white text-navy-900 min-h-screen selection:bg-brand-blue-100 selection:text-brand-blue-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
            <Navbar currentPage="Privacy Policy" />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-brand-blue-600 to-indigo-700 py-20 lg:py-32 relative overflow-hidden">
                    {/* Background Patterns */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-64 h-64 lg:w-96 lg:h-96 bg-white rounded-full blur-[100px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] border border-white/10 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] border border-white/10 rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 lg:w-96 lg:h-96 bg-purple-500 rounded-full blur-[100px]" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-bold uppercase tracking-widest mb-6 lg:mb-8 border border-white/20">
                            <i data-lucide="shield" className="w-4 h-4"></i>
                            <span>Legal & Compliance</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 lg:mb-8 tracking-tight drop-shadow-sm">
                            Privacy Policy
                        </h1>
                        <p className="text-lg lg:text-xl text-blue-50 max-w-2xl mx-auto font-light leading-relaxed px-4">
                            We are committed to protecting your personal data and ensuring transparency in how we handle your information.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-12 lg:py-24 bg-gray-50 relative">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-xl shadow-gray-200/50 p-6 sm:p-10 md:p-16 border border-gray-100">

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-8 mb-8 lg:mb-12 gap-6 sm:gap-0">
                                <div>
                                    <p className="text-sm font-bold text-navy-400 uppercase tracking-widest mb-1">Effective Date</p>
                                    <p className="text-navy-900 font-semibold">December 28, 2025</p>
                                </div>
                                <div className="text-left sm:text-right">
                                    <p className="text-sm font-bold text-navy-400 uppercase tracking-widest mb-1">Version</p>
                                    <p className="text-navy-900 font-semibold">2.0</p>
                                </div>
                            </div>

                            <article className="prose prose-base md:prose-lg prose-headings:text-navy-950 prose-p:text-navy-600 prose-a:text-brand-blue-600 prose-li:text-navy-600 max-w-none">
                                <p className="lead text-lg md:text-xl text-navy-700 font-light mb-8 lg:mb-12">
                                    Echoes Software Technologies ("we", "our", "us") respects your privacy and is committed to protecting the personal information of our users, clients, and visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our websites, applications, products, and services.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 my-8 lg:my-12 not-prose">
                                    <div className="bg-blue-50 p-6 lg:p-8 rounded-3xl border border-blue-100">
                                        <div className="w-12 h-12 bg-brand-blue-100 text-brand-blue-600 rounded-xl flex items-center justify-center mb-6">
                                            <i data-lucide="database" className="w-6 h-6"></i>
                                        </div>
                                        <h4 className="text-xl font-bold text-navy-900 mb-3">Data Collection</h4>
                                        <p className="text-navy-600 text-sm">We collect only essential information required to provide our superior services.</p>
                                    </div>
                                    <div className="bg-green-50 p-6 lg:p-8 rounded-3xl border border-green-100">
                                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                            <i data-lucide="lock" className="w-6 h-6"></i>
                                        </div>
                                        <h4 className="text-xl font-bold text-navy-900 mb-3">Data Security</h4>
                                        <p className="text-navy-600 text-sm">Your data is protected by enterprise-grade encryption and security protocols.</p>
                                    </div>
                                </div>

                                <h3>1. Information We Collect</h3>
                                <p>We may collect the following types of information to provide better services to all our users:</p>

                                <div className="pl-4 border-l-4 border-brand-blue-200 my-6">
                                    <h4 className="text-lg font-bold text-navy-900 mb-2">Personal Information</h4>
                                    <p className="mb-0 text-sm">Identify information such as Name, Email address, Phone number, Company name, and Account login credentials.</p>
                                </div>

                                <div className="pl-4 border-l-4 border-purple-200 my-6">
                                    <h4 className="text-lg font-bold text-navy-900 mb-2">Technical Data</h4>
                                    <p className="mb-0 text-sm">IP address, Browser type, Device information, Operating system, and usage statistics.</p>
                                </div>

                                <h3>2. How We Use Your Information</h3>
                                <ul className="marker:text-brand-blue-500">
                                    <li><strong>Service Delivery:</strong> To provide, operate, and maintain our Services.</li>
                                    <li><strong>Improvement:</strong> To improve, personalize, and expand our website and services.</li>
                                    <li><strong>Communication:</strong> To understand and analyze how you use our website and communicate with you.</li>
                                    <li><strong>Security:</strong> To develop new products, services, features, and functionality and prevent fraud.</li>
                                </ul>

                                <h3>3. Sharing of Information</h3>
                                <p>We do not sell your personal data. We may share information with:</p>
                                <ul>
                                    <li><strong>Trusted Service Providers:</strong> Who assist us in operating our website and conducting our business.</li>
                                    <li><strong>Legal Compliance:</strong> When required to comply with the law or response to valid legal requests.</li>
                                    <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition.</li>
                                </ul>

                                <h3>4. Your Data Rights</h3>
                                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 not-prose grid gap-4">
                                    <div className="flex items-center gap-3">
                                        <i data-lucide="check-circle" className="w-5 h-5 text-green-500 flex-shrink-0"></i>
                                        <span className="text-navy-700 font-medium">The right to access and update your data</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i data-lucide="check-circle" className="w-5 h-5 text-green-500 flex-shrink-0"></i>
                                        <span className="text-navy-700 font-medium">The right to request deletion (Right to be Forgotten)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i data-lucide="check-circle" className="w-5 h-5 text-green-500 flex-shrink-0"></i>
                                        <span className="text-navy-700 font-medium">The right to data portability</span>
                                    </div>
                                </div>

                                <h3 className="mt-12">Contact Us</h3>
                                <p>If you have any questions about this Privacy Policy, please contact us:</p>

                                <div className="bg-navy-900 text-white p-6 sm:p-8 rounded-3xl not-prose shadow-lg mt-8">
                                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <i data-lucide="mail" className="w-6 h-6 text-white"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Privacy Team</h4>
                                            <p className="text-blue-100 mb-4">For any privacy-related inquiries or requests.</p>
                                            <a href="mailto:echoessoftwaretech@gmail.com" className="text-white hover:text-brand-blue-300 font-bold underline decoration-brand-blue-400 underline-offset-4 transition-colors break-all">
                                                echoessoftwaretech@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </article>
                        </div>
                    </div>
                </section>
            </main>

            {/* Comprehensive Footer - Exactly matching Home.tsx */}
            <footer className="bg-gradient-to-br from-navy-950 to-navy-900 text-white relative overflow-hidden py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Company Info */}
                        <div className="space-y-6">
                            <img src="/assets/3.png" alt="Echoes Software Technologies" className="h-10" />
                            <p className="text-navy-300 text-sm leading-relaxed">
                                Precision-built enterprise software solutions driving digital transformation worldwide.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/company/echoes-software-solutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:scale-110">
                                    <i data-lucide="linkedin" className="w-5 h-5"></i>
                                </a>
                                <a href="https://www.instagram.com/echoes_software_technologies?igsh=OW1xOGpmMzZmZ3Bq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:scale-110">
                                    <i data-lucide="instagram" className="w-5 h-5"></i>
                                </a>
                                <a href="https://wa.me/918148549511" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:scale-110">
                                    <i data-lucide="message-circle" className="w-5 h-5"></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {['Home', 'About', 'Services', 'Solutions', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-navy-300 hover:text-white transition-colors text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Services</h4>
                            <ul className="space-y-3">
                                <li><span className="text-navy-300 text-sm">Custom Development</span></li>
                                <li><span className="text-navy-300 text-sm">Cloud Solutions</span></li>
                                <li><span className="text-navy-300 text-sm">AI Integration</span></li>
                                <li><span className="text-navy-300 text-sm">Enterprise Support</span></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Contact</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-navy-300 text-sm">
                                    <i data-lucide="mail" className="w-5 h-5 flex-shrink-0 mt-0.5"></i>
                                    <span>connect@echoess.in</span>
                                </li>
                                <li className="flex items-start gap-3 text-navy-300 text-sm">
                                    <i data-lucide="phone" className="w-5 h-5 flex-shrink-0 mt-0.5"></i>
                                    <span>+91 81485 49511</span>
                                </li>
                                <li className="flex items-start gap-3 text-navy-300 text-sm">
                                    <i data-lucide="map-pin" className="w-5 h-5 flex-shrink-0 mt-0.5"></i>
                                    <span> Karur, Tamilnadu,<br />India - 639001</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-navy-400 text-sm">
                            © 2026 Echoes Software Technologies. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link to="/privacy-policy" className="text-navy-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-of-service" className="text-navy-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;

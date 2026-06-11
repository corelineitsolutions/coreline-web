import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

                {/* Company Info */}
                <div className="flex flex-col gap-3">
                    <Link href="/" className="flex items-center">
                        <div className="bg-white rounded-2xl p-4 shadow-lg">
                            <img
                                src="/Asset 64.png"
                                alt="Coreline IT Solutions - Software Development Company Pune"
                                className="h-12 md:h-16 w-auto object-contain"
                            />
                        </div>
                    </Link>
                    <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
                        Coreline IT Solutions is a <span className="text-white">software development company in Kharadi Pune</span> specializing in scalable applications.
                        Proudly in association with <Link href="https://www.mastermindmedias.com/" target="_blank" className="text-blue-400 hover:underline">Mastermind Medias</Link>.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                            <Linkedin className="h-4 w-4" />
                        </Link>
                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 hover:text-white transition-colors">
                            <Twitter className="h-4 w-4" />
                        </Link>
                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors">
                            <Github className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* Services */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-lg mb-2 text-white">Services</h3>
                    <div className="grid grid-cols-1 gap-2">
                        <Link href="/services/web-development" className="hover:text-blue-400 transition-colors text-sm">Web Development</Link>
                        <Link href="/services/mobile-app-development" className="hover:text-blue-400 transition-colors text-sm">Mobile App Development</Link>
                        <Link href="/services/saas-development" className="hover:text-blue-400 transition-colors text-sm">SaaS Development</Link>
                        <Link href="/services/custom-software" className="hover:text-blue-400 transition-colors text-sm">Custom Software</Link>
                        <Link href="/services/uiux-design" className="hover:text-blue-400 transition-colors text-sm">UI/UX Design</Link>
                        <Link href="/services/cloud-solutions" className="hover:text-blue-400 transition-colors text-sm">Cloud Solutions</Link>
                        <Link href="/services/ecommerce" className="hover:text-blue-400 transition-colors text-sm">E-Commerce</Link>
                        <Link href="/services/ai-integration" className="hover:text-blue-400 transition-colors text-sm">AI Integration</Link>
                        <Link href="/services/api-development" className="hover:text-blue-400 transition-colors text-sm">API Development</Link>
                    </div>
                </div>

                {/* Solutions */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-lg mb-2 text-white">Solutions</h3>
                    <div className="grid grid-cols-1 gap-2">
                        <Link href="/software-development-pune" className="hover:text-blue-400 transition-colors text-sm">Software Dev Pune</Link>
                        <Link href="/web-development-pune" className="hover:text-blue-400 transition-colors text-sm">Web Dev Pune</Link>
                        <Link href="/custom-software-development-pune" className="hover:text-blue-400 transition-colors text-sm">Custom Software Pune</Link>
                        <Link href="/election-software-development" className="hover:text-blue-400 transition-colors text-sm font-semibold text-orange-400">Election Software</Link>
                    </div>
                </div>

                {/* Products */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-lg mb-2 text-white">Products</h3>
                    <Link href="/products" className="hover:text-blue-400 transition-colors text-sm">All Products</Link>
                    <Link href="/products/design-11-23" className="hover:text-blue-400 transition-colors text-sm">Design 11-23</Link>
                    <Link href="/products/election-software" className="hover:text-blue-400 transition-colors text-sm font-semibold text-orange-400">Election Software</Link>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-lg mb-2 text-white">Company</h3>
                    <Link href="/about" className="hover:text-blue-400 transition-colors text-sm">About Us</Link>
                    <Link href="/portfolio" className="hover:text-blue-400 transition-colors text-sm">Portfolio</Link>
                    <Link href="/contact" className="hover:text-blue-400 transition-colors text-sm">Contact</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors text-sm">Careers</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors text-sm">Privacy Policy</Link>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-lg mb-2 text-white">Contact Us</h3>
                    <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-blue-500 shrink-0" />
                        <span>06,B Wing, 4th Floor, City Vista, Ashoka Nagar, Kharadhi, Pune</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-blue-500 shrink-0" />
                        <a href="mailto:contact@corelineitsolutions.com" className="hover:text-blue-400">contact@corelineitsolutions.com</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Coreline IT Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
}

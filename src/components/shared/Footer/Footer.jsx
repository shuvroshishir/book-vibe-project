import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '/logo.png';
import { Link } from "react-router";

const Footer = () => {
    return (
        <section className="footer-section bg-gray-100 mt-16 border-t border-gray-200">
            <div className="container mx-auto px-6 pt-10 pb-5">

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <div className='logo flex items-center gap-1.5'>
                            <img src={logo} alt="" width='25px' />
                            <a className="playfair-font font-bold text-2xl"> Book Vibe</a>
                        </div>
                        <p className="mt-3 text-gray-600 text-sm">
                            Discover, read, and organize your favorite books.
                            Build your perfect digital bookshelf.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li className="hover:text-green-600 cursor-pointer"><Link to='/'>Home </Link></li>
                            <li className="hover:text-green-600 cursor-pointer"><Link to='/books'>Listed Books </Link></li>
                            <li className="hover:text-green-600 cursor-pointer"><Link to='/page-to-read'>Pages to Read </Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Connect
                        </h3>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-2 bg-white rounded-full shadow-sm hover:bg-green-500 hover:text-white transition"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-white rounded-full shadow-sm hover:bg-green-500 hover:text-white transition"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-white rounded-full shadow-sm hover:bg-green-500 hover:text-white transition"
                            >
                                <FaLinkedin />
                            </a>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            © {new Date().getFullYear()} Book Vibe. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                    Made with ❤️ by Shishir
                </div>
            </div>
        </section>
    );
};

export default Footer;
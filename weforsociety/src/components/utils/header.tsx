import { useState, useEffect, useRef } from 'react';
import '../../css/header.css';
import logoImage from '../../assets/images/logo.png';
import { BsPersonLinesFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineVolunteerActivism, MdLocalLibrary } from "react-icons/md";
import { FaBook } from "react-icons/fa";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileWhoAreWeOpen, setIsMobileWhoAreWeOpen] = useState(false);
    const [isMobileCareerOpen, setIsMobileCareerOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const careerDropdownRef = useRef<HTMLDivElement | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
            if (careerDropdownRef.current && !careerDropdownRef.current.contains(event.target as Node)) {
                setIsCareerDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
                setIsMobileWhoAreWeOpen(false);
                setIsMobileCareerOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-black">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-0.5 p-0.5">
                        <img className="h-35 w-20" src={logoImage} alt="Company Logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {/* Desktop Menu Items */}
                    <div className="relative group" ref={dropdownRef}>
                        <button
                            type="button"
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
                            aria-expanded={isDropdownOpen}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Who Are We
                            <svg className="h-5 w-5 flex-none text-gray-400 group-hover:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white border-none">
                                            <BsPersonLinesFill className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">About Us</a>
                                            <p className="mt-1 text-gray-600">Get to know about us</p>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white border-none">
                                            <GrGroup className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">Our Team</a>
                                            <p className="mt-1 text-gray-600">Get to know our pillars and supports</p>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white border-none">
                                            <TbTargetArrow className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">Mission & Vision</a>
                                            <p className="mt-1 text-gray-600">Get a better understanding of our goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <a href="#" className="text-sm font-semibold leading-6 text-white">Our Work</a>
                    <div className="relative group" ref={careerDropdownRef}>
                        <button
                            type="button"
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
                            aria-expanded={isCareerDropdownOpen}
                            onClick={() => setIsCareerDropdownOpen(!isCareerDropdownOpen)}
                        >
                            Career
                            <svg className="h-5 w-5 flex-none text-gray-400 group-hover:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isCareerDropdownOpen && (
                            <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white border-none">
                                            <MdOutlineVolunteerActivism className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">Volunteer</a>
                                            <p className="mt-1 text-gray-600">Join hands willingly to support a cause or organization</p>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white border-none">
                                            <FaBook className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">Counsellor</a>
                                            <p className="mt-1 text-gray-600">Seek guidance and support for dealing with personal, social, or psychological issues</p>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white border-none">
                                            <MdLocalLibrary className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">Trainer</a>
                                            <p className="mt-1 text-gray-600">Educates others in specific skills or knowledge areas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">Contact</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true" ref={mobileMenuRef}>
                <div className="fixed inset-0 z-10 bg-black/50"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img className="h-35 w-20" src={logoImage} alt="Company Logo" />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500">
                            <div className="space-y-2 py-6">
                                <button
                                    type="button"
                                    className="w-full text-left text-base font-semibold leading-6 text-gray-900"
                                    onClick={() => setIsMobileWhoAreWeOpen(!isMobileWhoAreWeOpen)}
                                >
                                    Who Are We
                                    <svg className={`h-5 w-5 float-right ${isMobileWhoAreWeOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isMobileWhoAreWeOpen && (
                                    <div className="mt-4">
                                        <a href="#" className="block py-2 text-gray-900">About Us</a>
                                        <a href="#" className="block py-2 text-gray-900">Our Team</a>
                                        <a href="#" className="block py-2 text-gray-900">Mission & Vision</a>
                                    </div>
                                )}
                                <a href="#" className="block py-2 text-gray-900">Our Work</a>
                                <button
                                    type="button"
                                    className="w-full text-left text-base font-semibold leading-6 text-gray-900"
                                    onClick={() => setIsMobileCareerOpen(!isMobileCareerOpen)}
                                >
                                    Career
                                    <svg className={`h-5 w-5 float-right ${isMobileCareerOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isMobileCareerOpen && (
                                    <div className="mt-4">
                                        <a href="#" className="block py-2 text-gray-900">Volunteer</a>
                                        <a href="#" className="block py-2 text-gray-900">Counsellor</a>
                                        <a href="#" className="block py-2 text-gray-900">Trainer</a>
                                    </div>
                                )}
                                <a href="#" className="block py-2 text-gray-900">Contact</a>
                            </div>
                            <div className="py-6">
                                <a href="#" className="block text-base font-semibold leading-6 text-gray-900">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

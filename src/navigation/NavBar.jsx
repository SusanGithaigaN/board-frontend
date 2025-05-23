import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.svg';
import heroImage from '../assets/hero.jpg';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Jobs', href: '/jobs', current: false },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
    return (
        <Disclosure
            as="nav"
            className="bg-cover bg-center"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* mobile menu btn */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center cursor-pointer">
                            <img alt="Your Company" src={logo} className="h-8 w-auto" />
                            <p className="text-white font-bold pl-2 text-base">Job Portal</p>
                        </div>
                        {/* center this section */}
                        <div className="hidden sm:flex sm:justify-center sm:flex-1">
                            <div className="flex space-x-4 cursor-pointer">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href} 
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'text-white' : 'text-gray-400 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as={Link} 
                            to={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};
import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FAQData } from '../data/Data';

const Faq = () => {
    const [faqs, setFaqs] = useState(FAQData);

    const toggleFAQ = (id) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq) =>
                faq.id === id ? { ...faq, expanded: !faq.expanded } : faq
            )
        );
    };

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10'>
            <p className='font-bold text-2xl md:text-4xl py-4 text-center'>Frequently Asked Questions</p>
            <p className='font-thin text-sm text-center pb-2'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
            <div className="bg-white rounded-lg border-2 border-[#309689]/30 shadow-sm overflow-hidden my-6">

                <ul role="list" className="divide-y divide-gray-200">
                    {faqs.map((faq) => (
                        <li key={faq.id} className="relative">
                            <div
                                className={`group py-4 px-6 flex items-center justify-between text-left cursor-pointer ${faq.expanded ? 'bg-[#309689]/10' : ''
                                    }`}
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <div className="flex items-center">
                                    <span className="font-semibold text-teal-500 mr-4">{faq.id}</span>
                                    <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-[#309689]/90">
                                        {faq.question}
                                    </h3>
                                </div>
                                <span className="ml-6 flex items-center">
                                    {faq.expanded ? (
                                        <XMarkIcon className="h-6 w-6 text-teal-500" aria-hidden="true" />
                                    ) : (
                                        <PlusIcon className="h-6 w-6 text-gray-400 group-hover:text-teal-500" aria-hidden="true" />
                                    )}
                                </span>
                            </div>
                            {faq.expanded && (
                                <div className="px-6 pb-4 text-sm text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Faq;
import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FAQData = [
    {
        id: '01',
        question: 'Can I upload a CV?',
        answer:
            'Nunc sed a nisi purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra odio mauris nunc.',
        expanded: true,
    },
    {
        id: '02',
        question: 'How long will the recruitment process take?',
        answer: 'The recruitment process can vary depending on the role and the number of applicants. We aim to keep you informed throughout the process.',
        expanded: false,
    },
    {
        id: '04',
        question: 'Do you recruit for Graduates, Apprentices and Students?',
        answer: 'Yes, we have various programs designed for Graduates, Apprentices, and Students. Please check our careers page for specific opportunities.',
        expanded: false,
    },
    {
        id: '03',
        question: 'What does the recruitment and selection process involve?',
        answer: 'Our recruitment process typically involves application screening, interviews, and sometimes assessments. The specific steps will be outlined for each role.',
        expanded: false,
    },
    {
        id: '05',
        question: 'Can I receive notifications for any future jobs that may interest me?',
        answer: 'Yes, you can sign up for job alerts on our careers page to receive notifications about new opportunities that match your preferences.',
        expanded: false,
    },
];

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
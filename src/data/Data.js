import place from '../assets/placeholder.jpg';
import jobs from '../assets/jobs.svg';
import candi from '../assets/candi.svg';
import comp from '../assets/comp.svg';
import bauch from '../assets/bauch.svg';
import wiso from '../assets/wiso.svg';
import von from '../assets/von.svg';
import mraz from '../assets/mraz.svg';
import corm from '../assets/corm.svg';
// categories
import seed from '../assets/seed.svg';
import metal from '../assets/metal.svg';
import commerce from '../assets/commerce.svg';
import construct from '../assets/construct.svg';
import hotel from '../assets/hotel.svg';
import edu from '../assets/edu.svg';
import fin from '../assets/fin.svg';
import trans from '../assets/trans.svg';
import miller from '../assets/miller.svg';
// contact
import clock from '../assets/clock.svg';
import mail from '../assets/mail.svg';
import map from '../assets/map-pin.svg';
import phone from '../assets/phone.svg';
// partners
import spotify from '../assets/spotify.svg';
import adobe from '../assets/adobe.svg';
import slack from '../assets/slack.svg';
import asana from '../assets/asana.svg';
import linear from '../assets/linear.svg';
import asan from '../assets/asana-w.svg';
import dribbble from '../assets/dribbble.svg';
import tinder from '../assets/tinder.svg';
import zoom from '../assets/zoom.svg';
// about
import create from '../assets/create.svg';
import cv from '../assets/resume.svg';
import job from '../assets/job-col.svg';
import apply from '../assets/apply.svg';
import insta from '../assets/insta.svg';
import apple from '../assets/apple.svg';
import donald from '../assets/donald.svg';
import tesla from '../assets/tesla.svg';

export const works = [
    {
        icon: create,
        cta: 'Create Account',
        details: 'Join our platform in just a few clicks.',
    },
    {
        icon: cv,
        cta: 'Upload Resume',
        details: 'Showcase your skills and experience.',
    },
    {
        icon: job,
        cta: 'Find Jobs',
        details: 'Explore opportunities tailored to you.',
    },
    {
        icon: apply,
        cta: 'Apply Job',
        details: 'Take the first step toward your dream career.',
    },
]

export const homeCa = [
    {
        name: '',
        count: ''
    }
]

// partners
export const partners = [
    {
        img: spotify,
        alt: 'spotify'
    },
    {
        img: slack,
        alt: 'slack'
    },
    {
        img: adobe,
        alt: 'adobe'
    },
    {
        img: asana,
        alt: 'asana'
    },
    {
        img: linear,
        alt: 'linear'
    }
]

export const partners2 = [
    {
        img: asan,
        alt: 'asana'
    },
    {
        img: dribbble,
        alt: 'dribbble'
    },
    {
        img: tinder,
        alt: 'tinder'
    },
    {
        img: zoom,
        alt: 'zoom'
    }
]

// home section
export const displayData = [
    {
        img: jobs,
        tally: "25860",
        description: "Jobs",
    },
    {
        img: candi,
        tally: "10250",
        description: "candidates",
    },
    {
        img: comp,
        tally: "18400",
        description: "companies",
    }
]

// demo roles

export const jobDetails = [
    {
        icon: bauch,
        time: '10 min ago',
        title: 'Forward Security Director',
        companyName: 'Bauch, Schuppe and Schulist Co',
        jobType: 'Hotels & Tourism',
        structure: 'Full time',
        salary: '$40000-$42000',
        location: 'New York, USA'
    },
    {
        icon: wiso,
        time: '12 min ago',    
        title: 'Regional Creative Facilitator',
        companyName: 'Bauch, Schuppe and Schulist Co',
        jobType: 'Media',
        structure: 'Part time',
        salary: '$28000-$32000',
        location: 'Los- Angeles, USA'
    },
    {
        icon: mraz,
        time: '15 min ago',
        title: 'Internal Integration Planner',
        companyName: 'Mraz, Quigley and Feest Inc.',
        jobType: 'Construction',
        structure: 'Part time',
        salary: '$48000-$50000',
        location: 'Texas, USA'
    },
    {
        icon: von,
        time: '24 min ago',
        title: 'District Intranet Director',
        companyName: 'VonRueden - Weber Co',
        jobType: 'Commerce',
        structure: 'Full time',
        salary: '$42000-$48000',
        location: 'Florida, USA'
    },
    {
        icon: corm,
        time: '26 min ago',
        title: 'Corporate Tactics Facilitator',
        companyName: 'Cormier, Turner and Flatley Inc',
        jobType: 'Commerce',
        structure: 'Full time',
        salary: '$38000-$40000',
        location: 'Boston, USA'
    },
    {
        icon: miller,
        time: '30 min ago',
        title: 'Forward Accounts Consultant',
        companyName: 'Miller Group',
        jobType: 'Financial services',
        structure: 'Full time',
        salary: '$45000-$48000',
        location: 'Boston, USA'
    }
]

// Categories
export const categoryCard = [
    {
        icon: seed,
        title: 'Agriculture',
        jobs: '1254 jobs'
    },
    {
        icon: metal,
        title: 'Metal Production',
        jobs: '816 jobs'
    },
    {
        icon: commerce,
        title: 'Commerce',
        jobs: '2082 jobs'
    },
    {
        icon: construct,
        title: 'Construction',
        jobs: '1520 jobs'
    },
    {
        icon: hotel,
        title: 'Hotels & Tourism',
        jobs: '1022 jobs'
    },
    {
        icon: edu,
        title: 'Education',
        jobs: '1496 jobs'
    },
    {
        icon: fin,
        title: 'Financial Services',
        jobs: '1529 jobs'
    },
    {
        icon: trans,
        title: 'Transport',
        jobs: '1244 jobs'
    },
]

// Top companies
export const topCategory = [
    {
        icon: insta,
        title: 'Instagram',
        desc: 'Join a team that’s redefining social connections and empowering creativity worldwide.',
        jobs: '8 open jobs'
    },
    {
        icon: tesla,
        title: 'Tesla',
        desc: 'Be part of a revolutionary journey shaping the future of sustainable energy and innovation.',
        jobs: '18 open jobs'
    },

    {
        icon: donald,
        title: 'McDonald’s',
        desc: 'Work with a global leader in hospitality, offering opportunities to grow and succeed.',
        jobs: '12 open jobs'
    },
    {
        icon: apple,
        title: 'Apple',
        desc: 'Collaborate with visionaries to create products that transform lives and inspire change.',
        jobs: '9 open jobs'
    },
]

// Category dropdown
export const categories = [
    { name: 'Commerce', count: 10 },
    { name: 'Telecommunications', count: 10 },
    { name: 'Hotels & Tourism', count: 10 },
    { name: 'Education', count: 10 },
    { name: 'Financial Services', count: 10 },
]

export const jobType = [
    { name: 'full time', count: 10 },
    { name: 'part time', count: 10 },
    { name: 'freelance', count: 10 },
    { name: 'seasonal', count: 10 },
    { name: 'fixed price', count: 10 },
]

export const expLevel = [
    { name: 'no experience', count: 10 },
    { name: 'fresher', count: 10 },
    { name: 'intermediate', count: 10 },
    { name: 'expert', count: 10 },
]

export const datePosted = [
    { name: 'all', count: 10 },
    { name: 'last hour', count: 10 },
    { name: 'last 24 hours', count: 10 },
    { name: 'last 7 days', count: 10 },
    { name: 'last 30 days', count: 10 },
]

// Locations
export const continents = [
    {
        locName: "Africa"
    },
    {
        locName: "Antarctica"
    },
    {
        locName: "Asia"
    },
    {
        locName: "Australia"
    },
    {
        locName: "Europe"
    },
    {
        locName: "North America"
    },
    {
        locName: "South America"
    },
];

// Contact details
export const contactInfo = [
    {
        icon: phone,
        cta: 'Call for inquiry',
        details: '+257 388-6895'
    },
    {
        icon: mail,
        cta: 'Send us email',
        details: 'susangithaiga26@gmail.com'
    },
    {
        icon: clock,
        cta: 'Opening hours',
        details: 'Mon - Fri: 10AM - 10PM '
    },
    {
        icon: map,
        cta: 'Office',
        details: 'Cash me ousside'
    }
]

// FAQData
export const FAQData = [
    {
        id: '01',
        question: 'Can I upload a CV?',
        answer: 'Yes, you can easily upload your CV to our platform. This allows employers to review your qualifications and match you with relevant job opportunities.',
        expanded: true,
    },
    {
        id: '02',
        question: 'How long will the recruitment process take?',
        answer: 'The recruitment process varies depending on the employer and the role. Once you apply, you will receive updates as your application progresses.',
        expanded: false,
    },
    {
        id: '04',
        question: 'Do you recruit for Graduates, Apprentices and Students?',
        answer: 'Absolutely! We have opportunities tailored for graduates, apprentices, and students. Browse our categories to find roles that fit your level of experience and career goals.',
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

export const articles = [
    {
        icon: 'news',
        back: place,
        title: 'Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024',
        date: '30 March 2024',
    },
    {
        icon: 'blog',
        back: place,
        title: 'How To Avoid The Top Six Most Common Job Interview Mistakes',
        date: '30 March 2024',
    }
]

export const more = [
        {
            amount: '12k+',
            title: 'Clients worldwide',
            desc: 'Trusted by professionals and businesses across the globe to deliver results.',
        },
        {
            amount: '20k+',
            title: 'Active resume',
            desc: 'Showcasing talents ready to make an impact in the global workforce.',
        },
        {
            amount: '18k+',
            title: 'Companies',
            desc: 'Partnering with leading organizations to create meaningful career opportunities.',
        }
    ]
import React from 'react';
import Hero from '../common/Hero';
import Map from '../components/Map';
import clock from '../assets/clock.svg';
import mail from '../assets/mail.svg';
import map from '../assets/map-pin.svg';
import phone from '../assets/phone.svg';

export const Contact = () => {
  const contactInfo = [
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

  return (
    <>
    {/* hero */}
    <Hero title="contact Us" />
    {/* page content */}
      <div className="items-center md:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* form */}
          <div className="one">

            <p className="text-2xl md:text-4l font-bold text-start py-4">
              You Will Grow, You Will <br />Succeed. We Promise That
            </p>
            <p className='text-sm text-gray-800'>
              Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus
              tincidunt tincidunt ultrices. Diam convallis morbi pellentesque adipiscing
            </p>
            {/* cards */}
            <div className='py-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* one */}
              {contactInfo.map((item, index) => (
                <div className='space-y-2' key={index}>
                  {/* img */}
                  <img className="img-fluid h-6 w-6" alt='icon' src={item.icon} />
                  {/* header */}
                  <p className='font-bold text-base capitalize'>{item.cta}</p>
                  {/* details */}
                  <p className='text-sm text-gray-800'>{item.details}</p>
                </div>
              ))}
            </div>
          </div>
          {/* info */}
          <div className="two">
            <form id="contactForm" className="space-y-8 p-4 md:p-8 bg-[#309689]/10 rounded-xl">
              <div className="header-content space-y-2 pb-2 md:pb-4">
                <p className="text-xl font-bold text-center capitalize">
                  Contact us
                </p>
                <p className='text-sm font-semibold text-gray-600 text-center'>Nibh dis faucibus proin lacus tristique</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" className="block mb-2 text-sm font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow-sm border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="janedoe@gmail.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label for="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="text"
                  className="shadow-sm border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-medium">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="shadow-sm border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="focus:ring-4 focus:outline-none rounded-xl text-md font-semibold px-6 py-2 text-center text-white bg-[#309689] hover:bg-teal-700 sm:w-fit"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        {/* map */}
        <div className="py-6 px-4">
          <Map />
        </div>
      </div>
    </>
  )
}
export default Contact;
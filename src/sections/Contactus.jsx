import React from 'react'
import ShiftingContactForm from '../components/ShiftingContactForm'
import { MailIcon } from 'lucide-react';

const Contactus = () => {
  return (
    <div>
      <h3 className="font-bold text-center text-4xl font-palanquin">
        Contact Us
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        We are always here to help you. Feel free to contact us.
      </p>
      <ShiftingContactForm />
      <div className="mt-8">
        <h1 className="mx-auto text-center text-xl font-semibold">
          For additional queries
        </h1>
        <p className="text-center">Reach us at </p>
        <a
          href="mailto:dreamcompany.in@gmail.com"
          className="mx-auto text-center text-xl px-4 py-2 bg-red-500 rounded-full w-max text-white flex gap-2 hover:bg-red-600 duration-200"
        >
          {" "}
          <MailIcon /> dreamcompany.in@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contactus
"use client";

import { useState } from "react";
import Link from "next/link";

import ContactForm from "../_components/contact-form";
import { showEmailAddress, showPhoneNumber } from "@/app/_actions/actions";
import ImageComponent from "../_components/image-component";

import data from "@/app/_data/general-data.json";

const Contact = () => {
  const {
    contactPage: { phone, email },
  } = data;

  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");

  const handleShowPhoneNumber = async () => {
    const phoneNumber = await showPhoneNumber();
    setShowPhone(phoneNumber);
  };

  const handleShowEmailAddress = async () => {
    const emailAddress = await showEmailAddress();
    setShowEmail(emailAddress);
  };

  return (
    <main className="max-w-[1440px] mx-auto px-5 tablet:px-10 desktopSmall:mt-5 desktop:px-0">
      <div className="pt-15 tablet:py-15 max-w-[1100px] desktopSmall:mx-auto desktopSmall:grid grid-cols-2 gap-10">
        <div className="grid gap-[60px] desktopSmall:grid-rows-[auto_auto_1fr]">
          <h2 className="text-heading">Contact</h2>
          <ul className="grid gap-8 desktopSmall:gap-4 desktopSmall:place-content-start">
            <li className="grid gap-2 place-items-start font-medium phone:grid-cols-[75px_1fr]">
              Email:
              {showEmail === "Show email address" ? (
                <button
                  className="font-light text-link italic font-thin p-2 -m-2 cursor-pointer hover:desktopSmall:text-brown desktopSmall:p-0 desktopSmall:m-0"
                  onClick={handleShowEmailAddress}
                  aria-label="Show email address"
                >
                  {showEmail}
                </button>
              ) : (
                <Link
                  href={`mailto:${email}`}
                  className="text-link font-light p-2 -m-2 font-thin desktopSmall:p-0 desktopSmall:m-0"
                >
                  {showEmail}
                </Link>
              )}
            </li>
            <li className="grid gap-2 place-items-start font-medium phone:grid-cols-[75px_1fr]">
              Phone:
              {showPhone === "Show phone number" ? (
                <button
                  className="font-light text-link italic font-thin p-2 -m-2 cursor-pointer hover:desktopSmall:text-brown desktopSmall:p-0 desktopSmall:m-0"
                  onClick={handleShowPhoneNumber}
                  aria-label="Show phone number"
                >
                  {showPhone}
                </button>
              ) : (
                <Link
                  href={`tel:${phone}`}
                  className="text-link font-light p-2 font-thin -m-2 desktopSmall:p-0 desktopSmall:m-0"
                >
                  {showPhone}
                </Link>
              )}
            </li>
          </ul>
          <div className="hidden desktopSmall:block">
            <ImageComponent
              file="DSC_1484.jpg"
              folder="images"
              phoneWidth={10}
              tabletWidth={10}
              desktopWidth={800}
              cssClasses="h-full w-full object-cover"
            />
          </div>
        </div>
        <hr className="text-black/25 my-10 desktopSmall:hidden" />
        <ContactForm blueBackground />
      </div>
    </main>
  );
};

export default Contact;

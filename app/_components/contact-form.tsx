"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import Button from "./button";
import Recaptcha from "@/app/_lib/Recaptcha";
import { sendEmail } from "@/app/_actions/actions";

interface Props {
  blueBackground?: boolean;
}

const ContactForm = ({ blueBackground }: Props) => {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("email-submitted");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: any) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

  return (
    <div>
      {!showEmailSubmitted && (
        <p className="mb-5 italic tablet:text-left">
          Please fill out the form below and we will be in touch ASAP...
        </p>
      )}
      {showEmailSubmitted ? (
        <>
          <div id="email-submitted"></div>
          <p className="italic text-[20px]">
            Your email has been sent, we will be in touch soon.
          </p>
        </>
      ) : (
        <form
          className={classNames("flex flex-col gap-10", {
            "bg-blue -mx-5 py-10 px-5 tablet:mx-0 tablet:rounded-2xl":
              blueBackground,
          })}
          action={async (formData) => {
            await sendEmail(formData);
            setShowEmailSubmitted(true);
          }}
        >
          <input type="hidden" name="_honey" className="hidden" />
          <label
            htmlFor="emailAddress"
            className={classNames("grid gap-4 text-paragraph", {
              "text-white font-semibold": blueBackground,
              "font-thin": !blueBackground,
            })}
          >
            Email:
            <input
              type="email"
              id="emailAddress"
              name="email"
              className={classNames("h-10 py-4 px-3 rounded font-thin", {
                "bg-white/50 border-2 border-white placeholder:text-black/50 text-black":
                  blueBackground,
                "border border-black/50 bg-white": !blueBackground,
              })}
              placeholder="Email address goes here..."
              autoComplete="email"
              required
            />
          </label>

          <label
            htmlFor="fullName"
            className={classNames("grid gap-4 text-paragraph", {
              "text-white font-semibold": blueBackground,
              "font-thin": !blueBackground,
            })}
          >
            Name:
            <input
              type="text"
              id="fullName"
              name="name"
              className={classNames(
                "border border-black/50 bg-white h-10 py-4 px-3 rounded font-thin",
                {
                  "bg-white/50 border-2 border-white placeholder:text-black/50 text-black":
                    blueBackground,
                  "border border-black/50 bg-white": !blueBackground,
                }
              )}
              placeholder="Name goes here..."
              autoComplete="name"
              required
            />
          </label>
          <label
            htmlFor="message"
            className={classNames("grid gap-4 text-paragraph", {
              "text-white font-semibold": blueBackground,
              "font-thin": !blueBackground,
            })}
          >
            Message:
            <textarea
              id="message"
              name="message"
              className={classNames(
                "border border-black/50 rounded bg-white py-4 px-3 font-thin",
                {
                  "bg-white/50 border-2 border-white placeholder:text-black/50 text-black":
                    blueBackground,
                  "border border-black/50 bg-white": !blueBackground,
                }
              )}
              rows={5}
              placeholder="Message goes here..."
              required
            ></textarea>
          </label>
          {blueBackground ? (
            <Button
              typeSubmit
              backgroundColor="orange"
              arrowColor="white"
              cssClasses={classNames(" desktopSmall:self-start", {
                "opacity-75 desktopSmall:cursor-not-allowed desktopSmall:hover:px-9 desktopSmall:hover:mx-0":
                  !validateRecaptcha,
                "hover:desktopSmall:opacity-90": validateRecaptcha,
              })}
              normalButton
            >
              Submit
            </Button>
          ) : (
            <Button
              typeSubmit
              secondaryColor="lightBlue"
              arrowColor="black"
              cssClasses={classNames(" desktopSmall:self-start", {
                "opacity-50 desktopSmall:cursor-not-allowed desktopSmall:hover:px-9 desktopSmall:hover:mx-0":
                  !validateRecaptcha,
                "hover:desktopSmall:opacity-90": validateRecaptcha,
              })}
              normalButton
              disabled={!validateRecaptcha}
            >
              Submit
            </Button>
          )}
          {!validateRecaptcha && <Recaptcha onChange={handleRecaptchaChange} />}
        </form>
      )}
    </div>
  );
};

export default ContactForm;

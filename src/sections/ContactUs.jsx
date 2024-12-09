import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

import { Button, CircularProgress } from "@mui/material";
import { CheckCircle, Mail, Phone, XCircle } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [submitSuccess, setSubmitSuccess] = useState("");

  const submit = async (data) => {
    try {
      await emailjs.send(
        "service_vmrdut2",
        "contact_template",
        {
          from_name: data.name,
          to_name: "RCCG LP80",
          from_email: data.email,
          subject: data.subject,
          to_email: "rccgchampionlp80@gmail.com",
          message: data.message,
        },
        "CgpLQL9T8USA3Orfl"
      );
      reset();
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess("");
      }, 3000);
    } catch (err) {
      console.log(err);
      setSubmitSuccess(false);
    }
  };

  return (
    <section
      className="w-full lg:flex items-center space-y-5 md:space-y-0 md:space-x-8 bg-gray-100 p-3 sm:p-10"
      id="contact"
    >
      <div className="lg:w-[40%] text-black space-y-7">
        <div>
          <h1 className="contact-header font-semibold text-5xl capitalize">
            join our community
          </h1>
          <h1 className="font-bold text-4xl md:text-7xl tracking-wider mt-1">
            Contact Us
          </h1>
        </div>
        <p className="text-lg sm:text-xl  tracking-wider">
          We’d love to hear from you! Whether you have questions, need prayers,
          or want to connect with us, feel free to reach out using the details
          below:
        </p>
        <div className="space-y-5 relative w-fit mx-auto lg:mx-0">
          <a
            href="mailto:rccgchampionlp80@gmail.com"
            className="group flex w-fit space-x-5 flex-col items-center justify-center sm:items-start sm:justify-start sm:flex-row"
          >
            <div className="bg-amber-500 p-5 rounded-full">
              <Mail
                size={30}
                className="group-hover:scale-110 transition-all duration-300 "
              />
            </div>
            <div className="space-y-1 place-items-center">
              <h1 className="font-semibold text-2xl tracking-wider text-gray-500">
                Send us a mail
              </h1>
              <h1
                href="mailto:rccgchampionlp80@gmail.com"
                className="font-semibold text-xl tracking-wider text-black group-hover:text-amber-600 transition-all duration-300"
              >
                rccgchampionlp80
              </h1>
            </div>
          </a>
          <a
            href="tel:+2348033411584"
            className="group flex flex-col items-center justify-center sm:items-start sm:justify-start sm:flex-row w-fit space-x-5"
          >
            <div className="bg-amber-500 p-5 rounded-full">
              <Phone
                size={30}
                className="group-hover:scale-110 transition-all duration-300 "
              />
            </div>
            <div className="place-items-center space-y-1">
              <h1 className="font-semibold text-2xl tracking-wider text-gray-500">
                Give us a call
              </h1>
              <h1
                href="tel:+2348033411584"
                className="font-semibold text-xl tracking-wider text-black group-hover:text-amber-600 transition-all duration-300"
              >
                +234 803 341 1584
              </h1>
            </div>
          </a>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="rounded-xl p-4 text-black sm:px-10 sm:py-10 space-y-8 lg:w-[55%] bg-white border shadow-lg z-10 relative"
      >
        <div className=" space-y-10">
          <div className="grid sm:grid-cols-auto-input gap-10">
            <div className="space-y-3">
              <h1 className="text-lg tracking-wide">Name:</h1>
              <input
                {...register("name", {
                  required: "Your name is required to continue.",
                })}
                type="text"
                name="name"
                placeholder="John Doe"
                className="py-3 border-b-2 border-gray-200 w-full focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-md tracking-wider">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-3">
              <h1 className="text-lg tracking-wide">Email:</h1>
              <input
                {...register("email", {
                  required: "please enter a valid email",
                })}
                type="Email"
                name="email"
                placeholder="example@email.com"
                className="py-3 border-b-2 border-gray-200 w-full focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-md tracking-wider">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-3">
              <h1 className="text-lg tracking-wide">Phone:</h1>
              <input
                {...register("phone", {
                  required: "We need your phone number to reach you.",
                })}
                type="tel"
                name="phone"
                placeholder="(123) 456 - 789"
                className="py-3 border-b-2 border-gray-200 w-full focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-md tracking-wider">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="space-y-3">
              <h1 className="text-lg tracking-wide">Subject:</h1>
              <input
                {...register("subject", {
                  required: "Subject cannot be left blank.",
                })}
                type="text"
                name="subject"
                placeholder="Minitries"
                className="py-3 border-b-2 border-gray-200 w-full focus:outline-none"
              />
              {errors.subject && (
                <p className="text-red-500 text-md tracking-wider">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-lg tracking-wide">Message:</h1>
            <textarea
              {...register("message", {
                required: "Please type your message before submitting.",
              })}
              name="message"
              placeholder="Leave us a message"
              className="py-3 border-b-2 border-gray-200 w-full h-40 flex items-start justify-start focus:outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-md tracking-wider">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          className={`bg-black text-white hover:bg-orange-500 w-full rounded-lg py-4 font-semibold flex ${
            isSubmitting
              ? "bg-gray-200"
              : "`bg-black text-white hover:bg-orange-500 hover:transiton-all hover:duration-500"
          }`}
        >
          {!isSubmitting ? (
            "send now"
          ) : (
            <>
              <CircularProgress size="18px" />
              <p>sending</p>
            </>
          )}
        </Button>

        {submitSuccess === true && (
          <div className="text-center p-4 bg-green-200 text-green-700 rounded-lg flex items-center justify-center space-x-4">
            <CheckCircle className="text-2xl" />
            <p className="text-lg font-semibold">
              We’re excited to hear from you! Stay tuned for our response.!
            </p>
          </div>
        )}
        {submitSuccess === false && (
          <div className="text-center p-4 bg-red-200 text-red-700 rounded-lg flex items-center justify-center space-x-4">
            <XCircle className="text-2xl" />
            <p className="text-lg font-semibold">
              An error occurred while submitting the form. Please try again
              later.
            </p>
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactUs;

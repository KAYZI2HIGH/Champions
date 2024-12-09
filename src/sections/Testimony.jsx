import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-scroll";

const Testimony = () => {
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
        "template_zkujtb5",
        {
          from_name: `${data.name ? data.name : "an anonymous person"}`,
          to_name: "RCCG LP80",
          from_email: `${data.email ? data.email : "anonymous email"}`,
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
      className="bg-testimony w-full p-3 sm:p-12 sm:pb-2 relative"
      id="testimony"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-0"></div>
      <div className="sm:flex  items-center  w-full  space-y-8 sm:space-y-0 sm:space-x-10 z-10 relative">
        <div className="w-full sm:w-1/2 space-y-7">
          <h1 className="font-bold text-4xl md:text-7xl tracking-wider capitalize under">
            share your testimony
          </h1>
          <h1 className="text-lg sm:text-xl  tracking-wider">
            Have a story to share about God’s goodness in your life? We’d love
            to hear how He has blessed, healed, or transformed you. Your
            testimony can inspire others to trust and believe in His power.
          </h1>
          <Link
            to="contact"
            spy
            smooth
            offset={-120}
          >
            <button className="px-8 py-3 text-black bg-white font-bold capitalize rounded-md hover:bg-orange-400 hover:text-white hover:transiton-all hover:duration-500 mt-5">
              Contact Us Instead?
            </button>
          </Link>
        </div>
        <div className="sm:w-1/2 w-full p-10 bg-white space-y-10">
          <h1 className="font-semibold text-4xl tracking-wide text-black under">
            Fill appropriately
          </h1>
          <form
            onSubmit={handleSubmit(submit)}
            className=" text-black grid gap-4"
          >
            {submitSuccess === true && (
              <div className="text-center p-4 bg-green-200 text-green-700 rounded-lg flex items-center justify-center space-x-4">
                <CheckCircle className="text-2xl" />
                <p className="text-lg font-semibold">
                  Thank you for sharing your testimony!
                </p>
              </div>
            )}
            {submitSuccess === false && (
              <div className="text-center p-4 bg-red-200 text-red-700 rounded-lg flex items-center justify-center space-x-4">
                <XCircle className="text-2xl" />
                <p className="text-lg font-semibold">
                  There was an error submitting your testimony. Please try
                  again!
                </p>
              </div>
            )}
            <label
              htmlFor="name"
              className="space-y-2"
            >
              <h1 className="font-semibold text-xl tracking-wider">
                Name (optional):
              </h1>
              <input
                placeholder="Tell us who you are or stay anonymous"
                type="text"
                {...register("name")}
                className="w-full  border-2 border-gray-300 rounded-md p-2 "
                id="name"
              />
            </label>
            <label
              htmlFor="email"
              className="space-y-2"
            >
              <h1 className="font-semibold text-xl tracking-wider">
                Email (optional):
              </h1>
              <input
                placeholder="We might reach out to celebrate your testimony with you!"
                type="text"
                {...register("email")}
                className="w-full  border-2 border-gray-300 rounded-md p-2 "
                id="email"
              />
            </label>
            <label
              htmlFor="message"
              className="space-y-2"
            >
              <h1 className="font-semibold text-xl tracking-wider">
                Testimony:
              </h1>
              <textarea
                placeholder="Share your story of faith, breakthrough, or gratitude."
                {...register("message", {
                  required:
                    "Don't leave your testimony blank. We want to hear your story!",
                })}
                className="w-full h-40  border-2 border-gray-300 rounded-md p-2 "
                id="message"
              />
              {errors.message && (
                <p className="text-red-500 text-md tracking-wider">
                  {errors.message.message}
                </p>
              )}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-md ${
                isSubmitting
                  ? "bg-gray-200"
                  : "bg-black text-white font-bold capitalize rounded-md hover:bg-orange-400 hover:text-white hover:transiton-all hover:duration-500"
              }`}
            >
              {!isSubmitting ? (
                "share testimony"
              ) : (
                <CircularProgress size="18px" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimony;

import React from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Forgot() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="flex h-max py-8 md:py-20 bg-white ">
        <div className="flex  w-full2">
          <div className="max-w-full xl:max-w-[1800px] mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row w-full space-y-3 md:divide-x-2 px-10 md:space-y-0 max-w-full">
              <div className="flex justify-center flex-col md:flex-row">
                <div class="max-w-full w-full lg:max-w-[432px] lg:w-[432px]">
                  <div>
                    <div>
                      <h2 class="text-lg md:text-4xl text-black font-bold">
                        Reset password
                      </h2>
                    </div>
                    <div class="mt-5 lg:mt-6">
                      <p class="text-body-md lg:text-h5 text-black font-sans leading-5 lg:leading-7">
                        <div>
                          <div>
                            <p class="font-sans">
                              Please enter the email address you used to create
                              your account. If an account with this email
                              address exists we’ll send you an email to reset
                              your password. <br />
                              <br />
                              New to Polaroid? You can create an account{" "}
                              <a
                                target="_blank"
                                rel="noreferrer"
                                class="underline break-all md:break-normal"
                              ></a>
                              .<br />
                            </p>
                            <p class="font-serifRegular">
                              <em class="italic">
                                If you haven’t received an email within 2 min,
                                that means you don’t have an account and can
                                create it{" "}
                              </em>
                              <a
                                href="https://www.polaroid.com/account/login"
                                target="_blank"
                                rel="noreferrer"
                                class="underline break-all md:break-normal"
                              >
                                here
                              </a>
                              <em class="italic">.</em>
                            </p>
                          </div>
                        </div>
                      </p>
                    </div>
                    <div class="pt-5 lg:pt-7">
                      <form>
                        <div class="mt-4 lg:mt-5">
                          <div class="pl-4">
                            <label
                              class="text-h6-mobile text-storm font-sans"
                              for="forgot-password-email"
                            >
                              Email
                            </label>
                          </div>
                          <div class="mt-2">
                            <input
                              id="forgot-password-email"
                              class="rounded-full border-neutral border-2 w-full h-[48px] px-7 text-body-md text-black font-sans leading-4 placeholder:text-dovegray"
                              placeholder="Email"
                              type="email"
                              name="email"
                              value=""
                            />
                          </div>
                        </div>
                        <div class="pt-4 lg:pt-5">
                          <button
                            type="submit"
                            class="text-md font-semibold rounded-full transition-[all] duration-300 ease-out cursor-pointer bg-black text-white border-2 border-black hover:bg-white hover:text-black hover:border-solid py-3 px-7 w-full"
                          >
                            Submit
                          </button>
                        </div>
                        <div class="flex justify-center pt-9">
                          <a
                            href="/account/login"
                            class="text-md text-black font-semibold animated-underline animated-underline-black pb-[2px]"
                          >
                            Back to login
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
import React from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Register() {
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
                <div class="md:pr-[72px] md:max-w-[50%] md:w-[50%] pb-[48px] md:pb-0 ">
                  <div>
                    <div>
                      <h2 class="text-2xl md:text-4xl text-black font-bold">
                        Create your account
                      </h2>
                    </div>
                    <div class="mt-5 lg:mt-6">
                      <p class="text-md lg:text-h5 text-black font-sans leading-5 lg:leading-7">
                        <div>
                          <div>
                            <p class="font-sans">
                              Create your own Polaroid account today. It makes
                              shopping smoother and faster, while also earning
                              you reward points on every purchase.
                            </p>
                          </div>
                        </div>
                      </p>
                    </div>
                    <div class="pt-5 lg:pt-4">
                      <form>
                        <div class="mt-4 lg:mt-5">
                          <div class="pl-4">
                            <label
                              class="text-h6-mobile text-storm font-sans"
                              for="register-first-name"
                            >
                              First name
                            </label>
                          </div>
                          <div class="mt-2">
                            <input
                              id="register-first-name"
                              class="rounded-full border-neutral border-2 w-full h-[48px] px-7 text-body-md text-black font-sans leading-4 placeholder:text-dovegray"
                              placeholder="First name"
                              type="text"
                              name="firstName"
                              value=""
                            />
                          </div>
                        </div>
                        <div class="mt-4 lg:mt-5">
                          <div class="pl-4">
                            <label
                              class="text-h6-mobile text-storm font-sans"
                              for="register-last-name"
                            >
                              Last name
                            </label>
                          </div>
                          <div class="mt-2">
                            <input
                              id="register-last-name"
                              class="rounded-full border-neutral border-2 w-full h-[48px] px-7 text-body-md text-black font-sans leading-4 placeholder:text-dovegray"
                              placeholder="Last name"
                              type="text"
                              name="lastName"
                              value=""
                            />
                          </div>
                        </div>
                        <div class="mt-4 lg:mt-5">
                          <div class="pl-4">
                            <label
                              class="text-h6-mobile text-storm font-sans"
                              for="login-email"
                            >
                              Email
                            </label>
                          </div>
                          <div class="mt-2">
                            <input
                              type="text"
                              id="login-email"
                              class="rounded-full border-neutral border-2 w-full h-[48px] px-7 text-body-md text-black font-sans leading-4 placeholder:text-dovegray"
                              placeholder="Email"
                              name="email"
                              value=""
                            />
                          </div>
                        </div>
                        <div class="mt-4 lg:mt-5">
                          <div class="pl-4">
                            <label
                              class="text-h6-mobile text-storm font-sans"
                              for="login-password"
                            >
                              Password
                            </label>
                          </div>
                          <div class="mt-2">
                            <input
                              type="password"
                              id="login-password"
                              class="rounded-full border-neutral border-2 w-full h-[48px] px-7 text-body-md text-black font-sans leading-4 placeholder:text-dovegray"
                              placeholder="Password"
                              name="password"
                              value=""
                            />
                          </div>
                        </div>
                        <div class="flex items-center pt-7 lg:pt-5">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="false"
                            data-state="unchecked"
                            value="on"
                            class="h-6 w-6 border-2 border-black rounded shrink-0"
                          ></button>
                          <input
                            type="checkbox"
                            aria-hidden="true"
                            name="termsConditions"
                            tabindex="-1"
                            value="on"
                            style={{ transform: 'translateX(-100%)', position: 'absolute', pointerEvents: 'none', opacity: 0, margin: '0px', width: '24px', height: '24px'}}
                          />
                          <p class="text-body-md-mobile text-black font-sans ml-[11px] cursor-pointer leading-[14px]">
                            <div>
                              <div>
                                <p class="font-sans">
                                  I have read and agree to the{" "}
                                  <a href="/privacy-policy" class="underline">
                                    <span>
                                      Privacy Policy
                                    </span>
                                  </a>{" "}
                                  and{" "}
                                  <span>
                                    <a
                                      href="/loyalty-terms-conditions"
                                      class="underline"
                                    >
                                      Loyalty Terms &amp; Conditions
                                    </a>
                                    .
                                  </span>
                                </p>
                              </div>
                            </div>
                          </p>
                        </div>
                        <div class="pt-6">
                          <button
                            type="submit"
                            class="text-md font-bold rounded-full transition-[all] duration-300 ease-out cursor-pointer bg-black text-white border-2 border-black hover:bg-white hover:text-black hover:border-solid py-3 px-7 w-full"
                          >
                            Create Account
                          </button>
                        </div>
                      </form>
                      <div class="flex justify-center pt-9">
                        <a
                          href="/account/reset-password"
                          class="text-body-md text-black font-bold animated-underline animated-underline-black pb-[2px]"
                        >
                          Return to login
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="h-[1px] w-auto md:w-[1px] md:h-auto bg-slate-400/50"></div>

                <div class="md:max-w-[50%] md:w-[50%] md:pl-[72px] pt-[48px] md:pt-0 ">
                  <div>
                    <h2 class="text-2xl md:text-4xl font-bold text-black font-headings">
                    Already have an account?
                    </h2>
                  </div>
                  <div class="mt-5 md:mt-6">
                    <p class="text-md md:text-lg text-black font-semibold leading-5 md:leading-6">
                      <div>
                        <div>
                          <p class="font-sans">
                          Access it now to save time when you shop.
                          </p>
                          <p class="font-sans"></p>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div class="mt-9">
                    <a
                      href="/account/register"
                      class="inline-flex items-center bg-white text-black border-2 border-black border-solid  text-body-md font-sans rounded-full text-center h-[48px] px-7 w-full md:w-auto transition-[all] duration-300 ease-out hover:bg-black hover:text-white"
                    >
                      Login
                    </a>
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

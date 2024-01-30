import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />

      <div className="flex bg-white min-h-screen">
        <div className="mx-auto sm:container md:py-20 md:px-0 relative grid grid-cols-12 gap-6 ">
          <div className="col-span-12 md:col-span-4 bg-brand-light px-6 py-10 lg:p-6">
            <nav className="sticky top-28">
              <ul className="grid gap-y-1">
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/pages/warranty"
                    
                  >
                    Warranty Policy
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/policies/refund-policy"
                  >
                    Refund &amp; Return policy
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/policies/terms-of-service"
                  >
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-800 underline  text-base lg:text-lg hover:text-[#32917b]"
                    href="/policies/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="https://risegardens.com/pages/shipping-policy"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/pages/shipping-protection-terms-conditions"
                  >
                    Shipping protection
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/pages/membership-terms-conditions"
                  >
                    Membership Terms
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/pages/loyalty-terms-and-conditions"
                  >
                    Loyalty Terms
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/pages/email-sign-up-discount-terms-conditions"
                  >
                    Email Sign Up Discount
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/pages/referral-program-terms-condition"
                  >
                    Referral Program
                  </a>
                </li>
                
                
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/pages/accessibility-statement"
                  >
                    Accessibility Statement
                  </a>
                </li>
               
                <li>
                  <a
                    className=" text-gray-800  text-base lg:text-lg hover:text-[#32917b]"
                    href="/pages/ccpa-opt-out"
                  >
                    Do Not Sell My Personal Information
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            id="policy-wrapper"
            className="col-span-12 md:col-span-8 px-6 pb-10 lg:p-0 "
          >
            <article>
              <h1 className="text-center text-gray-800 text-3xl hidden">
                Privacy policy
              </h1>
              <div className="prose prose-h2:mt-0">
                <p className="text-gray-900">
                  <b>Rise Gardens Privacy Policy</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    This Privacy Policy describes how Rise Gardens LLC handles
                    personal data we collect online (e.g., through our websites)
                    and offline (e.g., through customer support channels, our
                    retail locations, and in-person promotional activities)
                    (collectively, the “Services”). This Privacy Policy explains
                    the types of personal data we collect and process, how we
                    may use and share the data, and the choices that are
                    available to you with respect to our handling of your data.
                  </span>
                </p>
                <p className="text-gray-900">
                  <b>&nbsp;</b>
                </p>
                <p className="text-gray-900">
                  <b>Information We Collect</b>
                </p>
                <p className="text-gray-900">
                  <b>Information we collect directly from you</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    We collect the information you provide directly to us, such
                    as when you open an account, place an order, ask to receive
                    emails, or interact with us on social media. The types of
                    personal data we may collect directly from you include:
                  </span>
                </p>
                <ul>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Contact information, such as your name, email address,
                      mailing address, and phone number;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Account information, such as your username and password;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Billing information, such as credit card details and
                      billing address;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Optional information you may choose to provide, such as
                      your date of birth, gender, social handles, gardening
                      preferences; and
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Any other information you choose to provide.
                    </span>
                  </li>
                </ul>
                <p className="text-gray-900">
                  <b>Information about your use of our Services</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    We collect information about your use of the Services, such
                    as the products you buy or express interest in.
                  </span>
                </p>

                <p className="text-gray-900">
                  <b>Information we collect from other sources</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    When you access the Services through a social network, we
                    collect information from the social network in accordance
                    with your settings on the social network. If you interact
                    with us on social media, we will collect information about
                    those interactions. The information we may collect includes
                    your name, picture, and email address. We may also collect
                    information about you from third parties, including mailing
                    list providers and publicly available sources, or friends
                    that refer you to Rise Gardens.
                  </span>
                </p>
                <p className="text-gray-900">
                  <b>Information we collect by automated means</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    When you visit our sites, we collect certain information
                    automatically. To collect this information, we may use
                    cookies, web beacons, and similar technologies. A “cookie”
                    is a text file that websites send to a visitor‘s computer or
                    other internet-connected device to uniquely identify the
                    visitor’s browser or to store information or settings in the
                    browser. A “web beacon,” also known as a pixel tag or clear
                    GIF, is used to transmit information back to a web server.
                    We may also collect information about your online activities
                    over time and across third-party websites. The information
                    we collect automatically may include: URLs that refer
                    visitors to our websites;
                  </span>
                </p>
                <ul>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Search terms used to reach our websites;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Details about the devices that are used to access our
                      websites (such as IP address, browser information, device
                      information, and operating system information);
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Details about your interaction with our websites (such as
                      the date, time, length of stay, and specific pages
                      accessed during your visits to our websites, and which
                      emails you may have opened); and
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Usage information (such as the number and frequency of
                      visitors to our websites).
                    </span>
                  </li>
                </ul>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    We may associate this information with your Rise Gardens
                    account if you have one, the device you use to connect to
                    our Services, or email or social media accounts that you use
                    to engage with Rise Gardens.
                  </span>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}></span>
                  <b>Advertising and Analytics Services Provided by Others</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    We may allow others to provide analytics services and serve
                    advertisements on our behalf across the internet and in
                    mobile applications. These entities may use cookies, web
                    beacons, and other technologies to collect information about
                    your use of the Services and other websites and
                    applications, including your IP address, web browser, mobile
                    network information, pages viewed, time spent on pages or in
                    apps, links clicked, and conversion information. This
                    information may be used by Rise Gardens and others to, among
                    other things, analyze and track data, determine the
                    popularity of certain content, deliver advertising and
                    content targeted to your interests on our Services and other
                    websites, and better understand your online activity. For
                    more information about interest-based ads, or to opt out of
                    having your web browsing information used for interest-based
                    advertising purposes, please visit{" "}
                  </span>
                  <a href="http://www.aboutads.info/choices" target="_blank">
                    <b>www.aboutads.info/choices</b>
                  </a>
                  <span style={{ fontWeight: 400 }}>.</span>
                </p>
                <p className="text-gray-900">
                  <b>How We Use Your Information</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    We may use the information we collect to deliver the
                    products you request, to maintain and customize your account
                    and our interactions with you, and to provide, maintain, and
                    improve our Services. We also use the information we collect
                    to:
                  </span>
                </p>
                <ul>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Communicate with you about our Services, including to tell
                      you about products and services that may be of interest to
                      you;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Respond to your requests, inquiries, comments, and
                      suggestions;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Facilitate your engagement with the Services, including to
                      enable you to post comments and reviews;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Offer contests, sweepstakes, or other promotions;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Conduct or administer surveys and other market research;
                      and
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Protect against, identify, investigate, and respond to
                      fraud or other illegal activity.&nbsp;
                    </span>
                  </li>
                </ul>
                <p className="text-gray-900">&nbsp;</p>
                <p className="text-gray-900">
                  <b>How We Share Your Information</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    We may share the information we collect:
                  </span>
                </p>
                <ul>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      With service providers that perform services on our
                      behalf, such as those that provide shipment and payment
                      services, customer service, and marketing support;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      With select partners as a part of co-sponsored promotions;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      To comply with a legal or regulatory obligation, protect
                      and defend Rise Gardens’ rights or property, protect the
                      safety of our customers and website users or the public,
                      and protect against legal liability;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      In connection with, or during negotiations of, any merger,
                      sale of company assets, financing, or acquisition of all
                      or a portion of our business by another company;
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      Between and among Rise Gardens’ current and future
                      parents, subsidiaries, affiliates, and other companies
                      under common control and ownership; and
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 400 }}></span>
                    <span style={{ fontWeight: 400 }}>
                      With your consent and at your direction.
                    </span>
                  </li>
                </ul>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    When you provide a product review or other user content,
                    that content will be publicly posted. Other users may be
                    able to see your name or other information about you that
                    you post.
                  </span>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    If you are in the United States, we may share information
                    about you with select third parties so that they can
                    communicate with you about products or services that may be
                    of interest to you. If you prefer that we not share your
                    information with such third parties, you may opt out by
                    emailing us at{" "}
                    <a href="mailto:support@risegardens.com" target="_blank">
                      support
                    </a>
                  </span>
                  <a href="mailto:support@risegardens.com" target="_blank">
                    <span style={{ fontWeight: 400 }}>@risegardens.com</span>
                  </a>
                </p>
                <p className="text-gray-900">
                  <b>Your Rights and Choices</b>
                </p>
                <p className="text-gray-900">
                  <b>Managing or deleting your Rise Gardens account</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    You may review, update, or modify your account information,
                    including profile and contact information, at any time by
                    logging into your Rise Gardens account. You may delete your
                    Rise Gardens account by emailing{" "}
                    <a href="mailto:support@risegardens.com" target="_blank">
                      support
                    </a>
                  </span>
                  <a href="mailto:support@risegardens.com" target="_blank">
                    <span style={{ fontWeight: 400 }}>@risegardens.com</span>
                  </a>
                </p>
                <p className="text-gray-900">
                  <b>Opting out of email marketing</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    You may unsubscribe from our promotional emails at any time
                    by following the instructions included in those emails. If
                    you opt out of receiving such communications, note that we
                    may continue to send you non-promotional emails (such as
                    order confirmation emails or emails about changes to our
                    legal terms).
                  </span>
                </p>
                <p className="text-gray-900">
                  <b>Restricting cookies</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    Most web browsers are set to accept cookies by default. You
                    can usually choose to set your browser to remove or reject
                    browser cookies. Please note that if you choose to remove or
                    reject cookies, this could affect the availability and
                    functionality of our websites.
                  </span>
                </p>
                <p className="text-gray-900">
                  <b>Children</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    Our Services are not designed for children and do not
                    knowingly collect personal data from children. If you have
                    reason to believe that a child has provided personal data to
                    us, please contact us{" "}
                    <a href="mailto:support@risegardens.com" target="_blank">
                      support
                    </a>
                  </span>
                  <a href="mailto:support@risegardens.com" target="_blank">
                    <span style={{ fontWeight: 400 }}>@risegardens.com</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    , and we will endeavor to delete that information from our
                    databases.
                  </span>
                </p>
                <p className="text-gray-900">
                  <b>Data Transfers and Privacy Shield</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    Rise Gardens is headquartered in the United States, and we
                    have operations and entities in the United States. As such,
                    we may transfer your personal data to, or store or access it
                    in, jurisdictions that may not provide equivalent levels of
                    data protection as your home jurisdiction. We will take
                    steps to ensure that your personal data receives an adequate
                    level of protection in the jurisdictions in which we process
                    it.
                  </span>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    Under certain conditions, you may be able to invoke binding
                    arbitration to resolve your complaint. Rise Gardens is
                    subject to the investigatory and enforcement powers of the
                    Federal Trade Commission.
                  </span>
                </p>
                <p className="text-gray-900">
                  <b>Links to Other Websites and Third-Party Content</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    We may provide links to third-party websites, services, and
                    applications, such as Facebook, that are not operated or
                    controlled by Rise Gardens. This Privacy Policy does not
                    apply to third-party services, and we cannot take
                    responsibility for the content, privacy policies, or
                    practices of third-party services. We encourage you to
                    review the privacy policies of any third-party service
                    before providing any information to or through them.
                  </span>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    The Services may include an activity feed, social media
                    buttons and widgets, such as the Facebook &quot;Like&quot; button or
                    the &quot;Share This&quot; button. Your interactions with these
                    features are governed by the privacy policy of the
                    third-party service that provides the feature.
                  </span>
                </p>
                <p className="text-gray-900">
                  <b>Data Retention</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    Our retention periods for personal data are based on
                    business needs and legal requirements. We retain personal
                    data for as long as is necessary for the processing
                    purpose(s) for which the data was collected, and any other
                    permissible, related purpose. For example, we may retain
                    certain transaction details and correspondence until the
                    time limit for claims arising from the transaction has
                    expired.
                  </span>
                </p>
                <p className="text-gray-900">
                  <b>Changes to Our Privacy Policy</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    We may change this Privacy Policy from time to time. If we
                    do so, we will post the updated policy on our sites and will
                    indicate when the Privacy Policy was last revised. If we
                    make any material changes, we will provide you with
                    additional notice. You should periodically review our
                    current Privacy Policy to stay informed of our personal data
                    practices.
                  </span>
                </p>
                <p className="text-gray-900">
                  <b>California Privacy Rights</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    California law permits residents of California to request
                    notice of how their information is shared with third parties
                    for direct marketing purposes or to opt out of such sharing.
                    If you are a California resident and would like a copy of
                    this notice or to opt out, please submit a written request
                    to the following address: Rise Gardens LLC, 3732 Oakton
                    Street Skokie, IL 60076, Attn: Legal, or by emailing us
                    at&nbsp;
                  </span>
                  <a href="mailto:support@risegardens.com" target="_blank">
                    <span style={{ fontWeight: 400 }}>
                      <span>support</span>
                      <span>@risegardens.com</span>
                    </span>
                  </a>
                  <span style={{ fontWeight: 400 }}>.</span>
                </p>
                <p className="text-gray-900">
                  <b>Contacting Rise Gardens</b>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>
                    If you have questions or concerns regarding this Privacy
                    Policy, or would like to update your preferences or
                    information we have about you, please contact us at the
                    information provided below. We will take reasonable steps to
                    respond to your request.
                  </span>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>Rise Gardens LLC</span>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>3732 Oakton Street</span>
                </p>
                <p className="text-gray-900">
                  <span style={{ fontWeight: 400 }}>Skokie, IL 60076</span>
                </p>
                <p className="text-gray-900">
                  <a href="mailto:support@risegardens.com" target="_blank">
                    <span style={{ fontWeight: 400 }}>
                      support@risegardens.com
                    </span>
                  </a>
                </p>
                <p className="text-gray-900">&nbsp;</p>
                <p className="text-gray-900">
                  <strong>SMS Marketing</strong>
                </p>
                <p className="text-gray-900">
                  <em>
                    We value your privacy and the information you consent to
                    share in relation to our SMS marketing service. We use this
                    information to send you text notifications (for your order,
                    including abandoned checkout reminders), text marketing
                    offers, and transactional texts, including requests for
                    reviews from us.&nbsp;Opt-in data and consent for text
                    messaging will not be shared with any third parties except
                    for messaging partners,&nbsp;for the purpose of enabling and
                    operating our text messaging program.
                  </em>
                  <br />
                </p>
                <p className="text-gray-900">&nbsp;</p>
                <p dir="ltr">
                  <em>
                    Our website uses cookies to keep track of items you put into
                    your shopping cart, including when you have abandoned your
                    checkout. This information is used to determine when to send
                    cart reminder messages via SMS.
                  </em>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

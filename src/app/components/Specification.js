"use client"

import React, { useState } from "react";
import { Tabs, Tab } from "./Tabs";
import SpecSide from "./SpecSide";

const Specification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mt-12 md:mt-[52px]">
        <div className="relative2">
          <Tabs>
            <Tab label="Description">
              <div>
                <div>
                  <p className="font-sans text-black">
                    The app-connected Polaroid Now+ Generation 2 instant camera
                    gives you creative control through the Polaroid App:
                    Aperture priority, light painting, double exposure,
                    self-timer, manual mode and more—plus 5 lens filters you can
                    attach to the camera. All in a classic design, and now made
                    with 40% recycled materials. Shoot straight from the box
                    with two packs of iconic Polaroid instant film. Compatible
                    with Polaroid i-Type &amp; 600 film in the original Polaroid
                    instant film format.
                  </p>
                  <h6>
                    <em className="italic text-black">
                      Please note: While our new branding is out, you may
                      receive the i-Type Films with our former branding.
                    </em>
                  </h6>
                </div>
              </div>
            </Tab>
            <Tab label="Specifications">
              <div>
                <div>
                  <ul class="list-disc list-outside mb-4 ml-4 text-black">
                    <li class="py-2">Accurate, human-friendly flash system</li>
                    <li class="py-2">Double Exposure</li>
                    <li class="py-2">Self-timer</li>
                    <li class="py-2">
                      Internal rechargeable lithium-ion battery (15 pack battery
                      life)
                    </li>
                    <li class="py-2">
                      Wrist strap and USB-C charging cable included
                    </li>
                    <li class="py-2">
                      Works with Polaroid i-Type and 600 film
                    </li>
                  </ul>
                  <p class="font-sans text-black">View full specifications <span role="button" tabindex="0" class="underline" onClick={() => setIsOpen(!isOpen)}>here</span>.</p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>


      <SpecSide
        isOpen={isOpen}
        handleClose={handleClose}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Specification;

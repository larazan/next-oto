import React from "react";
import Image from "next/image";
import { Tabs, Tab } from "./Tabs";

// import salmon from "@/assets/salmon.png"

const Ingredient = () => {
  return (
    <div className="grid-container col-span-full px-0 text-sm md:col-span-12 md:col-start-0 md:row-start-2 md:row-end-32 md:px-02 lg:col-span-12 lg:col-start-1 lg:text-base ">
      <div className="flex relative z-10 items-center overflow-hidden2 ">
        <div className="flex justify-between w-full py-6 md:py-10">
          <Tabs>
            <Tab label="Overview">
              <div className="flex flex-col md:flex-row w-full py-4">
                <div className="w-full md:w-1/2 space-y-4 leading-snug [&amp;_h1:not(:last-child)]:mb-4 [&amp;_h1:not(:last-child)]:md:mb-6 [&amp;_h1]:border-b [&amp;_h1]:border-black [&amp;_h1]:text-base [&amp;_h1]:md:border-none [&amp;_h1]:md:text-3xl [&amp;_h1]:md:leading-[0.8] [&amp;_h2:not(:last-child)]:mb-4 [&amp;_h2:not(:last-child)]:md:mb-6 [&amp;_h2]:text-base [&amp;_h2]:md:text-3xl [&amp;_h3]:font-sans [&amp;_h3]:text-base [&amp;_h3]:font-bold [&amp;_h4]:font-sans [&amp;_h4]:text-base [&amp;_h4]:font-bold [&amp;_h5]:font-sans [&amp;_h5]:text-base [&amp;_h5]:font-bold [&amp;_h6]:font-sans [&amp;_h6]:text-base [&amp;_h6]:font-bold [&amp;_ol[type='a']]:list-[lower-alpha] [&amp;_ol]:ml-[24px] [&amp;_ol]:list-outside [&amp;_ol]:list-decimal [&amp;_ol]:leading-tight [&amp;_ol_li::marker]:ml-[-24px] [&amp;_p]:leading-tight [&amp;_table]:table-auto [&amp;_table_td]:border [&amp;_table_td]:border-black [&amp;_table_td]:px-4 [&amp;_table_td]:py-2 [&amp;_table_td]:text-sm [&amp;_table_td]:md:text-base [&amp;_table_th]:border [&amp;_table_th]:border-black [&amp;_table_th]:px-4 [&amp;_table_th]:py-2 [&amp;_table_th]:text-sm [&amp;_table_th]:md:text-base [&amp;_ul]:ml-[24px] [&amp;_ul]:list-outside [&amp;_ul]:list-disc [&amp;_ul]:leading-tight [&amp;_ul_li::marker]:ml-[-24px] my-4">
                  <p className="text-gray-900 font-bold">Suitable for</p>
                  <p className=" text-gray-900">All Skin Types</p>
                  <p className="text-gray-900 font-bold">
                    Why we stand behind it
                  </p>
                  <p className=" text-gray-900">
                    The first overnight moisturizer clinically proven to reduce
                    the effects of stress on skin during its nightly repair
                    phase. This ultra-hydrating, plumping cream with
                    algae-derived bio retinol, vegan collagen plus five vital
                    hydrators, firms and smooths the look of lines and wrinkles.
                    Wake up to rested, refreshed, radiant skin.
                  </p>
                  <p className="text-gray-900 font-bold">Key ingredients</p>
                  <p className=" text-gray-900">
                    Bio Retinol: Extract derived from blue-green microalgae,
                    visibly improves lines and wrinkles without irritation.
                    Vegan Collagen: Plant-derived collagen alternative, rich in
                    amino acids. King of Bitters: A super-plant that improves
                    signs of fatigue on tired skin, including wrinkles. Pink
                    Rock-Rose Extract: Improves skin dullness and dehydration
                    for healthier, more youthful-looking skin Wild Lavender:
                    Known for its calming and relaxing effects, this extract
                    increases hydration and improves visible signs of skin
                    fatigue. 5 Vital Hydrators: Revive dry skin leaving it soft,
                    smooth and deeply moisturized.
                  </p>
                </div>
              </div>
            </Tab>
            <Tab label="How To Use">
              <div className="py-4">
                <div className="w-full md:w-1/2">
                  <h3 className="text-lg md:text-2xl capitalize font-semibold">
                    usage
                  </h3>
                  <p className="py-2 text-gray-700 text-md md:text-md">
                    For best anti-aging results, layer over Hyaluronic Sea Serum
                    or Anti-Aging Sea Serum. On nights using Seaglow Overnight
                    Serum, layer over for the perfect exfoliation + hydration
                    night time routine.
                  </p>
                </div>
              </div>
            </Tab>
            <Tab label="Ingredients">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 py-4 w-full">
                <div className="w-1/2">
                  <h3 className="text-md md:text-lg font-bold">
                    Calorie Content
                  </h3>
                  <p>This diet contains 4,203 kcal ME/kg; 2.5 kcal ME/treat.</p>
                </div>
                <div className="w-1/2">
                  <h3 className="text-md md:text-lg font-bold">Fragrance</h3>
                  <p>Calming & relaxing lavender</p>
                </div>
              </div>
            </Tab>
            <Tab label="About the brand">
              <div className="flex py-4 w-full">
                <div className="w-full md:w-1/2">
                  <h3 className="text-lg md:text-2xl uppercase font-semibold">
                    OSEA
                  </h3>
                  <p className="py-2 text-gray-700 text-md md:text-md">
                    Inspired by her grandmother’s lifelong love of the sea,
                    Jenefer Palmer set out to share her passion through a
                    plant-based skin care line infused with elements of the
                    ocean. Distraught by the harmful chemicals she found in
                    other products, Palmer resolved to craft her formulas with
                    safer, nourishing ingredients. While OSEA has now expanded
                    into a world-renowned skin care line, their commitment has
                    stayed the same—producing effective, wholesome products as
                    pure as the ocean itself.
                  </p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;

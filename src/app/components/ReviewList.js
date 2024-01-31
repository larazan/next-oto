import React from "react";

const ReviewList = () => {
  const reviewData = [
    {
      name: "john L.",
      stars: 5,
      title: "Gifted and they loved it",
      comment:
        "Love taking pictures on this camera. Having all the manual controls right on the camera is great. The pictures are so clear. Usually setting exposure dial to -2/3 gets the best results in my experience.",
    },
    {
      name: "cecila m.",
      stars: 5,
      title: "A beautiful product,",
      comment:
        "A beautiful product, with a couple of small improvements such as: the possibility of fixing the fire in the viewfinder could be perfect",
    },
    {
      name: "Raquel C.",
      stars: 4,
      title: "Good but with possibilities to improve",
      comment:
        "It was good. I wish that the viewer was the same thing like the lens. No parallelism. I can't attach any close up lens or so. I prefer too a interchanging batteries, like the digital cameras, because right now there's no way to change a battery.",
    },
    {
      name: "Charles M.",
      stars: 5,
      title: "If you love Polaroid, this is a no-brainer",
      comment:
        "Polaroid and ‘instant film’ has always appealed to me. It seems like now, in the age of the iPhone camera, instant film has a whole new meaning, and an aesthetic they’ve come by organically. Polaroid’s added controls more like you’d find on an SLR camera; yeah, there’s a learning curve. There is with anything worth our time. Every part of taking pictures with this camera is unique, and so dang much fun.",
    },
    {
      name: "Landen W.",
      stars: 1,
      title: "Awful Experience with Polaroid Service",
      comment:
        "I bought this camera directly from Polaroid's website as a Christmas gift the weekend after Thanksgiving. It arrived in the mail and the battery would not charge. It would work as long as it was plugged in, but once unplugged, it was useless. I contacted Polaroid and told them about the issue, they offered a suggestion that I tried multiple times, but still the battery would not work and the camera was effectively a $600 paperweight. I contacted Polaroid again and was told I would have to send the camera back for a new one to be sent out as a replacement. I did as I was told, it has now been over a week since Polaroid has received back the product, per tracking confirmation. I have sent 2 additional emails and have not been contacted back. Again, this was a Christmas gift bought almost a month ago and now it seems the person won't be getting their gift. The I2 is touted by Polaroid as their \"latest, greatest\" and right out of the box, the product was defective. And Polaroid's customer service has been dragging their feet. If this was an older, less expensive product, it wouldn't be so infuriating to have to deal with. Pathetic product and service, Polaroid. I'm open to having my mind changed but since I'm getting no contact back and it's 5 days from Christmas currently, what else can I really say about it. Thanks for nothing.",
    },
    {
      name: "Collin",
      stars: 5,
      title: "Gifted and they loved it",
      comment:
        "This camera is awesome. I have the one step plus and this takes the cake. I'm still learning all the controlls but even on auto mode it takes amazing photos",
    },
    {
      name: "Ai L.",
      stars: 5,
      title: "Yes manual control",
      comment:
        "Honestly I think Polaroid put a lot of heart into the I-2. Everything about the camera feels quite premium. I love the manual control and it is very easy to use. Maybe the auto metering is not too reliable but I bought it for the manual controls. I don't quite understand why people are criticizing the price because any other instant camera that has manual controls all cost way more and have lower build quality. Personally I hope Polaroid will continue working on the film chemistry so it becomes more stable in all weather conditions. I would also love a more modular carrying case for the I-2, maximum protection with removable straps. In conclusion, quite satisfied with the camera and keep up the good work!",
    },
    {
      name: "Auggie",
      stars: 5,
      title: "Gifted and they loved it",
      comment:
        "Sx-70 is cheaper and does the job better, it’s cool and all but like just get an sx-70 and mod it",
    },
    {
      name: "Mar",
      stars: 5,
      title: "Gifted and they loved it",
      comment:
        "Love this camera it’s light enough to just always keep on you. Will never give up my sx70 or goose but perfect new addition to the family",
    },
    {
      name: "Harold",
      stars: 5,
      title: "Gifted and they loved it",
      comment:
        "This is Polaroid photographer dream camera. The images are sharp and beautiful. Love being able to shoot in manual, av, and tv moded",
    },
    {
      name: "Jonte",
      stars: 5,
      title: "Gifted and they loved it",
      comment:
        "I’m in love with this camera! Used it in my backyard and the picture turned out amazing! Polaroid y’all did your big one with the I-2",
    },
  ];
  return (
    <>
      <div className="w-full bg-white ">
        <div id="sectionReviews" className="w-11/12  bg-white mx-auto">
          <div className="mb-9">
            <div className="flex lg:items-center justify-start">
              <h3 className="text-lg md:text-3xl text-black font-semibold text-center">
                Reviews
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="w-full overflow-x-auto overflow-hidden">
              <div className="min-w-full table">
                <div className="flex pb-5 lg:pb-4 lg:mx-0">
                  {reviewData.map((data, index) => 
                     (
                      <div className="z-[1]" key={index}>
                        <div className="flex flex-col min-w-[85%] w-full lg:min-w-[10%] lg:max-w-[384px]">
                          <div
                            itemprop="review"
                            itemscope=""
                            itemtype="https://schema.org/Review"
                          >
                            <meta itemprop="reviewRating" content="5" />
                            <meta
                              itemprop="name"
                              content="Such clear pictures!"
                            />
                            <meta itemprop="author" content="John L." />
                            <meta
                              itemprop="datePublished"
                              content="2024-01-14"
                            />
                            <meta
                              itemprop="reviewBody"
                              content="Love taking pictures on this camera. Having all the manual controls right on the camera is great. The pictures are so clear. Usually setting exposure dial to -2/3 gets the best results in my experience."
                            />
                          </div>
                          <div className="relative lg:pt-[18px] lg:pb-[18px] lg:pr-[18px] z-[10] w-[18.75rem] lg:w-[24rem] lg:h-full">
                            <div>
                              <div>
                                <span className="font-semibold capitalize text-black max-w-[85%]">
                                  {data.name}
                                </span>
                              </div>
                              <div className="mt-[15px] flex">
                                <svg
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.99989 14.844L4.18289 17.902L5.29389 11.425L0.587891 6.838L7.09189 5.893L9.99989 0L12.9079 5.893L19.4119 6.838L14.7059 11.425L15.8169 17.902L9.99989 14.844Z"
                                    fill="black"
                                  ></path>
                                </svg>
                                <svg
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.99989 14.844L4.18289 17.902L5.29389 11.425L0.587891 6.838L7.09189 5.893L9.99989 0L12.9079 5.893L19.4119 6.838L14.7059 11.425L15.8169 17.902L9.99989 14.844Z"
                                    fill="black"
                                  ></path>
                                </svg>
                                <svg
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.99989 14.844L4.18289 17.902L5.29389 11.425L0.587891 6.838L7.09189 5.893L9.99989 0L12.9079 5.893L19.4119 6.838L14.7059 11.425L15.8169 17.902L9.99989 14.844Z"
                                    fill="black"
                                  ></path>
                                </svg>
                                <svg
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.99989 14.844L4.18289 17.902L5.29389 11.425L0.587891 6.838L7.09189 5.893L9.99989 0L12.9079 5.893L19.4119 6.838L14.7059 11.425L15.8169 17.902L9.99989 14.844Z"
                                    fill="black"
                                  ></path>
                                </svg>
                                <svg
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.99989 14.844L4.18289 17.902L5.29389 11.425L0.587891 6.838L7.09189 5.893L9.99989 0L12.9079 5.893L19.4119 6.838L14.7059 11.425L15.8169 17.902L9.99989 14.844Z"
                                    fill="black"
                                  ></path>
                                </svg>
                              </div>
                              <div className="mt-[31px]">
                                <span className="font-semibold text-black">
                                  {data.title}
                                </span>
                              </div>
                              <div className="mt-[12px] max-w-[85%]">
                                <p className="font-sans leading-[24px] max-w-[85%] line-clamp-3 text-gray-800">
                                  {data.comment}
                                </p>
                                <button
                                  type="button"
                                  className="block underline font-semibold mt-[5px] whitespace-pre text-black"
                                >
                                  See more
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewList;

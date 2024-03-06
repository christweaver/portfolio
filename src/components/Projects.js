import Image from "next/image";
import devDevelopers from "../assets/devDevelopers3.png";
import cruiseFleet from "../assets/cruisefleet.png";
import swoleMate from "../assets/swolemate.png";
import Link from "next/link";
export default function Projects() {
  // let swoleGit = "https://github.com/christweaver/Workout-tracker-app";
  const imageMap = {
    cruiseFleet: cruiseFleet,
    swoleMate: swoleMate,
    devDevelopers: devDevelopers,
  };

  const cardData = [
    {
      name: "CarFleet",
      title: {
        one: "A car rental app with dynamic and modern features",
        two: "Explore options by date, time, and vehicle type.",
        three: "Integrated with Google Autocomplete for location inputs.",
        four: "Pricing based on car make and rental duration.",
        five: "Modern UI design for seamless user experience.",
        six: "Browse through the fleet, select specific cars or filter by category.",
      },
      link: {
        href: "https://github.com/christweaver/car-rental",

        text: "GitHub",
      },
      link2: {
        href: "https://car-rental-xi-ivory.vercel.app",

        text: "Live",
      },
      imageName: "cruiseFleet",
    },
    {
      name: "SwoleMate",
      title: {
        one: "Work out tracking app with MongoDB database integration.",
        two: "Contemporary UI for smooth interaction.",
        three:
          "Select difficulty level and target specific body areas for exercises.",
        four: "Choose from curated routines provided.",
        five: " Create and customize your unique workout routines.",
        six: "Authentication feature ensures privacy and personalized tracking.",
      },
      link2: {
        href: "https://github.com/christweaver/Workout-tracker-app",

        text: "GitHub",
      },
      link: {
        href: "https://workout-tracker-app-iota.vercel.app",

        text: "Live",
      },
      imageName: "swoleMate",
    },
    {
      name: "API Playground",
      title: {
        one: "API testing app for non-developers to learn use of APIs.",
        two: "Users test API routes via Postman.",
        three: "Powered by Prisma and PostgreSQL technologies.",
        four: "Protected via API key.",
        five: "User-friendly UI for beginners.",
        six: "Uses express validator for input validation.",
      },
      link2: {
        href: "https://github.com/christweaver/kelson-app",

        text: "GitHub",
      },
      link: {
        href: null,

        text: "Live",
      },
      imageName: "devDevelopers",
    },
  ];

  const cardDataWithImages = cardData.map((card) => ({
    ...card,
    image: imageMap[card.imageName], // Dynamically set the image variable based on the image name
  }));
  return (
    <div className="background">
      <div className="center">
        <h1 className=" transProject">
          <span>Projects</span>
          <span>Projects</span>
          <span>Projects</span>
        </h1>
      </div>

      <div className="mt-10 flex flex-col">
        {cardDataWithImages.map((card, index) => (
          <div className="flex mb-20" key={index}>
            <Image
              src={card.image}
              className="ml-6 rounded-lg w-[57%]"
              alt=""
            />

            <div className="flex flex-col w-1/2 ml-8">
              <h1 className="text-[40px] my-2 text-white pl-2 ">{card.name}</h1>
              <div className="flex">
                <div className="flex flex-col w-1/2 text-[20px] text-white">
                  {/* Add a wrapper div with fixed height */}
                  <div className="title-container h-[100px] px-2 ">
                    <h1 className="pb-8">{card.title.one}</h1>
                  </div>
                  <div className="title-container h-[100px] px-2">
                    <h1 className="pb-8">{card.title.two}</h1>
                  </div>
                  <div className="title-container h-[100px] px-2">
                    <h1 className="mb-8">{card.title.three}</h1>
                  </div>
                  {card.link.href && (
                    <Link
                      href={card.link.href}
                      className="bg-indigo-800 text-[22px] text-white py-3 text-center w-2/3  rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.link.text}
                    </Link>
                  )}
                </div>

                <div className="flex flex-col m w-1/2 text-[20px] text-white">
                  <div className="title-container h-[100px] px-2">
                    <h1 className="pb-8">{card.title.four}</h1>
                  </div>
                  <div className="title-container h-[100px] px-2">
                    <h1 className="pb-8">{card.title.five}</h1>
                  </div>
                  <div className="title-container h-[100px] px-2">
                    <h1 className="mb-8">{card.title.six}</h1>
                  </div>
                  <Link
                    href={card.link2.href}
                    className=" buttonBackground text-[22px] text-white py-3 text-center w-2/3 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.link2.text}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 
        <div className="mt-20 flex flex-col ">
          <div className="flex mb-10 ">
            <Image src={swoleMate} className="ml-6 rounded-lg w-[48%]" />
            <div className="flex flex-col w-1/2 ml-20">
              <h1 className="text-[38px] mt-2 text-white ">SwoleMate</h1>
              <div className="flex">
                <div className="flex flex-col w-1/2 text-[20px] text-white">
                  <h1 className="py-8">
                    MongoDB-powered workout tracker with user-friendly database
                    integration.
                  </h1>
                  <h1 className="pb-8">
                    Choose from curated routines provided.
                  </h1>
                  <h1 className="">
                    Select difficulty level and target specific body areas for
                    exercises.
                  </h1>
                  <Link
                    href={git}
                    className=" bg-indigo-800 text-[20px] text-white py-3 text-center w-2/3 mt-16 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </Link>
                </div>

                <div className="flex flex-col w-1/2 text-[20px] text-white">
                  <h1 className="py-8">
                    Authentication feature ensures privacy and personalized
                    tracking.
                  </h1>
                  <h1 className="pb-8">
                    Create and customize your unique workout routines.
                  </h1>
                  <h1 className="">Write something here could be long</h1>
                  <Link
                    href={git}
                    className=" buttonBackground text-[20px] text-white py-3 text-center w-2/3 mt-16 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div> */

/* </div> */

//  <div className="flex mt-16 mb-6">
// <div className="flex flex-col w-1/2 ml-12 text-white text-[20px] ">
//   <h1 className="text-[38px] mt-2 text-white">SwoleMate</h1>
//   <div className="flex">
//     <div className="flex-col w-1/2 mr-6">
//       <h1 className="py-8">
//         MongoDB-powered workout tracker with user-friendly database
//         integration.
//       </h1>
//       <h1 className="pb-8">Choose from curated routines provided.</h1>
//       <h1 className="">
//         Select difficulty level and target specific body areas for
//         exercises.
//       </h1>
//     </div>
//     <div className="flex-col w-1/2 text-white text-[20px]">
//       <h1 className="py-8">
//         Authentication feature ensures privacy and personalized
//         tracking.
//       </h1>
//       <h1 className="pb-8">
//         Create and customize your unique workout routines.
//       </h1>
//       <h1 className="">Write something here could be long</h1>
//     </div>
//   </div>
//   <div className="flex">
//     <Link
//       href={git}
//       className=" buttonBackground text-[20px] text-white py-3 text-center w-[30%] mt-16 mr-8 rounded-lg"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Source Code
//     </Link>{" "}
//     <Link
//       href={git}
//       className=" bg-indigo-800 text-[20px] text-white py-3 text-center w-[30%] mt-16 ml-28 rounded-lg"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Live
//     </Link>
//   </div>
// </div>

// <Image src={swoleMate} className=" w-[48%] mr-6 rounded-lg " />
// </div>

//      <div className="mt-20 flex flex-col ">

/* <div className="flex mb-10 ">
<Image src={cruiseFleet} className="ml-6 rounded-lg w-[48%]" />
<div className="flex flex-col w-1/2 ml-20">
  <h1 className="text-[38px] mt-2 text-white ">Kelson App</h1>
  <div className="flex">
    <div className="flex flex-col w-1/2 text-[20px] text-white">
      <h1 className="py-8">Write something here could be long</h1>
      <h1 className="pb-8">Write something here could be long</h1>
      <h1 className="">Write something here could be long</h1>
      <Link
        href={git}
        className=" bg-indigo-800 text-[20px] text-white py-3 text-center w-2/3 mt-16 rounded-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </Link>
    </div>

    <div className="flex flex-col w-1/2 text-[20px] text-white">
      <h1 className="py-8">Write something here could be long</h1>
      <h1 className="pb-8">Write something here could be long</h1>
      <h1 className="">Write something here could be long</h1>
      <Link
        href={git}
        className=" buttonBackground text-[20px] text-white py-3 text-center w-2/3 mt-16 rounded-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
      </Link>{" "}
    </div>
  </div>
</div>
</div> */

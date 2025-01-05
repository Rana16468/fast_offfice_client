import React from "react";

const Company = () => {
  return (
    <div classNameName="mt-16">
      <div className="bg-white">
        <section className="bg-gray-100">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-10">
              <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  About Us
                </h2>
                <p className="mt-4 text-gray-600 text-lg text-justify">
                  Fast Office: Anytime, Anywhere. We aim to revolutionize the
                  office industry by making quality office spaces accessible to
                  everyone. Whether you need a fully furnished setup or just a
                  desk for the day, we've got you covered. Our mission is to
                  empower startups, freelancers, and businesses with flexible,
                  affordable, and professional workspaces. Experience seamless
                  productivity with state-of-the-art equipment, modern
                  amenities, and a supportive community..
                </p>
                <div className="mt-8">
                  <a
                    href=""
                    className="text-blue-500 hover:text-blue-600 font-medium">
                    Learn more about us
                    <span className="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Mission And Values</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Our mission is to provide exceptional office services with a focus
            on availability, reliability, and support.
          </p>
          <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">85+</h3>
              <p className="text-gray-700">Specialists</p>
            </div>
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">10+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>
        </section>

        <section className="bg-green-300 text-black py-12 px-4">
          <h2 className="text-2xl font-bold text-center">Our Vision</h2>
          <p className="mt-4 text-justify max-w-2xl mx-auto">
            Fast Office: Anytime, Anywhere. We aim to revolutionize the office
            industry by making quality office spaces accessible to everyone.
            Whether you need a fully furnished setup or just a desk for the day,
            we've got you covered. Our mission is to empower startups,
            freelancers, and businesses with flexible, affordable, and
            professional workspaces. Experience seamless productivity with
            state-of-the-art equipment, modern amenities, and a supportive
            community.
          </p>
        </section>

        <section className="flex flex-col mt-20">
          <p className="font-semibold text-2xl md:text-3xl text-center">
            Our Outstanding Achievements
          </p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
            <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
              <div className="flex flex-row justify-center items-center">
                <svg
                  className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
                    stroke="#FF6D42"
                    stroke-width="3.473"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path
                    d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
                    stroke="#FF6D42"
                    stroke-width="3.473"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </svg>
                <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                  75K+
                </p>
              </div>
              <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                Expert Chat &amp; Call Minutes
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
              <div className="flex flex-row justify-center items-center">
                <svg
                  className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#a)">
                    <path
                      d="m26.91 5.776 4.483 10.683a1.544 1.544 0 0 0 1.287.942l11.474.992a1.544 1.544 0 0 1 .876 2.715L36.325 28.7a1.559 1.559 0 0 0-.49 1.523l2.61 11.296a1.544 1.544 0 0 1-2.295 1.677l-9.86-5.982a1.53 1.53 0 0 0-1.59 0l-9.861 5.982a1.544 1.544 0 0 1-2.295-1.677l2.609-11.296a1.56 1.56 0 0 0-.49-1.523l-8.705-7.593a1.544 1.544 0 0 1 .876-2.715l11.474-.992a1.544 1.544 0 0 0 1.287-.942l4.483-10.683a1.544 1.544 0 0 1 2.833 0Z"
                      stroke="#FF6D42"
                      stroke-width="4.341"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M.8.2h49.4v49.4H.8z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                  4.9
                </p>
              </div>
              <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                Average Expert Rating
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
              <div className="flex flex-row justify-center items-center">
                <svg
                  className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g
                    clip-path="url(#a)"
                    stroke="#FF6D42"
                    stroke-width="3.473"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M10.811 39.091c-1.775-1.775-.598-5.505-1.5-7.69-.939-2.255-4.377-4.089-4.377-6.5 0-2.413 3.438-4.246 4.376-6.502.903-2.182-.274-5.914 1.501-7.69 1.776-1.775 5.508-.598 7.69-1.5 2.266-.939 4.09-4.377 6.501-4.377 2.412 0 4.246 3.438 6.501 4.376 2.185.903 5.915-.274 7.69 1.501 1.776 1.776.598 5.506 1.502 7.69.937 2.266 4.376 4.09 4.376 6.501 0 2.412-3.439 4.246-4.377 6.501-.903 2.185.274 5.915-1.5 7.69-1.776 1.776-5.506.598-7.69 1.501-2.256.938-4.09 4.377-6.502 4.377s-4.245-3.439-6.5-4.377c-2.183-.903-5.915.275-7.69-1.5Z"></path>
                    <path d="m17.281 26.444 4.632 4.631L32.718 20.27"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M.3.2h49.4v49.4H.3z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                  1000+
                </p>
              </div>
              <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                Readymade office
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
              <div className="flex flex-row justify-center items-center">
                <svg
                  className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M45.571 12.006 27.046 30.531l-7.719-7.718L5.434 36.706"
                    stroke="#FF6D42"
                    stroke-width="4.341"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path
                    d="M45.569 24.356v-12.35h-12.35"
                    stroke="#FF6D42"
                    stroke-width="4.341"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </svg>
                <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                  1.5M+
                </p>
              </div>
              <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                Average Revenue
              </p>
            </div>
          </div>
        </section>

        {/* <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Our Healthcare Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Cardiology</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Neurology</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Pediatrics</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Oncology</h3>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-gray-100 py-12 px-4">
          <h2 className="text-2xl font-bold text-center">
            State-Of-The-Art Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Advanced Diagnostics</h3>
              <p className="text-gray-700 mt-2">
                We utilize the latest technology for accurate diagnostics.
              </p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Telemedicine</h3>
              <p className="text-gray-700 mt-2">
                Consult with our specialists from the comfort of your home.
              </p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Robotic Surgery</h3>
              <p className="text-gray-700 mt-2">
                Minimally invasive procedures with precision.
              </p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Electronic Health Records</h3>
              <p className="text-gray-700 mt-2">
                Secure and easy access to your medical records.
              </p>
            </div>
          </div>
        </section> */}

        <section className="bg-green-400 text-white text-center py-12 px-4 mt-10">
          <h2 className="text-2xl font-bold">Experts Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
              <p>
                "At Fast Office, we understand that every business has unique
                needs. Our flexible workspace options allow you to work."
              </p>
              <h3 className="mt-4 font-bold">- Sharowar Mollah</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
              <p>
                "Our fully furnished office spaces come equipped with modern
                amenities like high-speed internet, comfortable furniture, and
                meeting rooms"
              </p>
              <h3 className="mt-4 font-bold">- Mehedi hasan</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
              <p>
                "At Fast Office, you’re not just getting a workspace; you’re
                joining a community of like-minded professionals. "
              </p>
              <h3 className="mt-4 font-bold">- Nayema Rahman</h3>
            </div>
          </div>
        </section>
      </div>

      <section className="text-gray-700 body-font mt-20">
        <p className="font-semibold text-2xl md:text-3xl text-center">
          Why you choose us?
        </p>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Latest Technology
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Expertise in Industry
                </h2>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-green-400 text-white text-center py-8">
          <p>&copy; Copyright . All rights reserved. Made By Binary Boats⛵</p>
        </footer>
      </section>
    </div>
  );
};

export default Company;

import React, { useEffect, useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { ChevronDown, Building2, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [
    "https://www.qcdesignschool.com/blog/wp-content/uploads/2017/08/Design-Blog-In-Post-130x130-2019-09-16T111810.002.jpg",
    "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1461782296610-c552d61b149a?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((index) =>
      index === 0 ? images.length - 1 : index - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((index) => (index + 1) % images.length);
  };

  const products = [
    {
      id: 1,
      image:
        "https://www.content.upliftdesk.com/content/img/pages/bulk-orders/tab-mixed-use-1.jpg",
    },
    {
      id: 2,
      image: "https://assets.officereality.co.uk/uploads/cat-veta-image.jpg",
    },
    {
      id: 3,
      image:
        "https://www.calibre-furniture.co.uk/images/content/2228_1_640x500.jpg?16:23:18&_e=.jpg",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/44/03/26/44032606f4b9dcc70b2cf3d624d4d1e3.jpg",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/45/af/66/45af6641c4ec7a78ac8ea3f983dd00cb.jpg",
    },
    {
      id: 6,
      image:
        "https://www.smmbdstore.com/wp-content/uploads/2023/08/Office-Workstation-1168-3.jpg",
    },
    {
      id: 7,
      image:
        "https://www.genesys-uk.com/wp-content/uploads/Freedom-Lite-Sit-Stand-Desk-4-rectanglular-desks-shown-back-to-back-in-a-cluster-with-central-floor-screen-white-board-finish-and-trim.jpg",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdKPpFju4Cg6BkZlhAgjI5jnQFh5sg1BhMg&s",
    },
    {
      id: 9,
      image:
        "https://s.alicdn.com/@sc04/kf/H3d27d0c9f8cd413eb7867ccc190fd366G.jpg_720x720q50.jpg",
    },
    {
      id: 10,
      image:
        "https://image.made-in-china.com/202f0j00CbkUvezqnjcT/Standard-Specifications-Metal-Leg-People-Office-Desks-and-Workstations-with-Desk-Screen.webp",
    },
    {
      id: 11,
      image:
        "https://www.ofconnection.com/cdn/shop/products/divi-fast-track-shared-workstation_affordable_cubicle_budget_workstation_grande.jpg?v=1553288681",
    },
  ];
  // State to keep track of the active product set index
  const [activeIndex, setActiveIndex] = useState(0);

  // Change the active product set every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 5) % products.length);
    }, 5000); // 15000 milliseconds = 15 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [products.length]);

  // Get the current set of products to display
  const currentProducts = products.slice(activeIndex, activeIndex + 5);

  return (
    <>
     <br /> <br /><br />
    
      <div className="  relative h-screen w-full overflow-hidden bg-gradient-to-b from-white via-gray-200 to-blue-500/30">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661963899181-3adc0a644f7b?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern office space"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Animated Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10">
            <Sparkles className="w-8 h-8 text-yellow-400 opacity-75" />
          </div>
          <div className="absolute top-20 right-20">
            <Star className="w-6 h-6 text-yellow-400 opacity-75" />
          </div>
          <div className="absolute bottom-20 left-20">
            <Star className="w-10 h-10 text-yellow-400 opacity-75" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-white">
          {/* Company Icon */}
          <div className="mb-6">
            <Building2 className="w-16 h-16 text-white" />
          </div>

          {/* Main Text */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-4xl font-bold">
              Welcome To{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white">
                  Fast Office LTD
                </span>
                <span className="absolute inset-x-0 bottom-0 h-3 bg-white/20 transform -skew-x-12"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Transforming Workspaces Across{" "}
              <span className="font-semibold text-white">Bangladesh</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link to={`/fast_office_product`} className="px-8 py-3 bg-white text-black rounded-lg font-semibold transform transition-all hover:scale-105 hover:bg-yellow-300 flex items-center gap-2 group">
                Explore Our Services
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Link>
              <Link to={`/contact`} className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold transform transition-all hover:scale-105 hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-yellow-400/30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-yellow-400/30"></div>
      </div>

      {/* Product Description Section */}
      {/* Product Description Section */}
      <section className="my-10 px-4 w-full max-w-4xl text-center mx-auto text-black">
        <h2 className="text-2xl font-semibold mb-4">
          Our Office infrastructure
        </h2>
        <p className="mb-6">
          Explore our wide range of office infrastructure and technology
          products designed to enhance your lifestyle.
        </p>

        {/* Product Images */}
        <Link to="/fast_office_product">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {currentProducts?.map((product, index) => (
            <img
              src={product.image}
              alt={`product${index + 1}`}
              className="w-40 h-40 object-cover rounded-lg"
            />
          ))}
        </div>
        </Link>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link to={'/fast_office_product'} className="btn btn-outline bg-black  text-white">
            Learn More
          </Link>
          <Link to={`/contact`} className="btn btn-outline bg-black  text-white">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Carousel Section */}
      <div className="relative w-full mx-auto">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="block w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4">
          <button
            onClick={goToPrevious}
            className="btn btn-outline btn-sm bg-blue-100">
            <FcPrevious className="text-xl text-white" />
          </button>
          <button
            onClick={goToNext}
            className="btn btn-outline btn-sm bg-blue-100">
            <FcNext className="text-xl text-white" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-100">
        {/* Services Section */}
        <section className="my-10 px-4 w-full max-w-6xl mx-auto text-gray-800">
  <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Service Card 1 */}
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500">
        📱
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Electronics Repair</h3>
      <p className="text-sm text-gray-600">High-quality electronics repair and maintenance for your gadgets.</p>
    </div>

    {/* Service Card 2 */}
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 text-blue-500">
        🛍️
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Gadget Sales</h3>
      <p className="text-sm text-gray-600">Discover the latest gadgets and cutting-edge technology for your needs.</p>
    </div>

    {/* Service Card 3 */}
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-green-100 text-green-500">
        ⚙️
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
      <p className="text-sm text-gray-600">Tailored electronic solutions designed to meet your unique requirements.</p>
    </div>

    {/* Service Card 4 */}
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-red-100 text-red-500">
        💡
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Consultation</h3>
      <p className="text-sm text-gray-600">Get professional advice and support from our skilled team.</p>
    </div>
  </div>
</section>


        <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
          {/* Themes: blue, purple, and teal */}
          <div data-theme="teal" className="mx-auto max-w-6xl">
            <h2 className="sr-only">Featured case study</h2>
            <section className="font-sans text-black">
              <div className="lg:flex lg:items-center fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right">
                {/* Image Section */}
                <div className="flex-shrink-0 self-stretch sm:basis-2/5 md:basis-1/2 xl:basis-3/5">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full">
                        <img
                          className="h-full object-cover"
                          src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
                          width="733"
                          height="412"
                          alt="CXcon: Experience Transformation"
                        />
                      </div>
                    </article>
                  </div>
                </div>
                {/* Content Section */}
                <div className="p-6 bg-gray-100">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-4xl font-bold">
                      CXcon: Experience Transformation
                    </h2>
                    <p className="mt-4">
                      Our second CXcon in October was dedicated to experience
                      transformation. The free one-day virtual event&nbsp;
                      brought together 230+ heads of digital, thought leaders,
                      and UX practitioners to discuss all aspects of experience
                      design.
                    </p>
                    <p className="mt-4">
                      In a jam-packed day filled with keynote sessions, panels,
                      and virtual networking we explored topics including design
                      leadership, UX ethics, designing for emotion and
                      innovation at scale.
                    </p>
                    <p className="mt-4">
                      <a
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        href="https://inviqa.com/cxcon-experience-transformation">
                        Explore this event
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

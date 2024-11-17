import React, { useEffect, useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Banner = () => {

  const images = [
    "https://www.content.upliftdesk.com/content/img/pages/bulk-orders/tab-mixed-use-1.jpg",
    "https://assets.officereality.co.uk/uploads/cat-veta-image.jpg",
    "https://www.calibre-furniture.co.uk/images/content/2228_1_640x500.jpg?16:23:18&_e=.jpg",
    "https://i.pinimg.com/736x/44/03/26/44032606f4b9dcc70b2cf3d624d4d1e3.jpg",
    "https://i.pinimg.com/736x/45/af/66/45af6641c4ec7a78ac8ea3f983dd00cb.jpg",
    "https://www.smmbdstore.com/wp-content/uploads/2023/08/Office-Workstation-1168-3.jpg",
    "https://www.genesys-uk.com/wp-content/uploads/Freedom-Lite-Sit-Stand-Desk-4-rectanglular-desks-shown-back-to-back-in-a-cluster-with-central-floor-screen-white-board-finish-and-trim.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdKPpFju4Cg6BkZlhAgjI5jnQFh5sg1BhMg&s",
    "https://s.alicdn.com/@sc04/kf/H3d27d0c9f8cd413eb7867ccc190fd366G.jpg_720x720q50.jpg",
     "https://image.made-in-china.com/202f0j00CbkUvezqnjcT/Standard-Specifications-Metal-Leg-People-Office-Desks-and-Workstations-with-Desk-Screen.webp",
     "https://www.ofconnection.com/cdn/shop/products/divi-fast-track-shared-workstation_affordable_cubicle_budget_workstation_grande.jpg?v=1553288681"




  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change image every 3 seconds
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
      image: "https://www.content.upliftdesk.com/content/img/pages/bulk-orders/tab-mixed-use-1.jpg",
    },
    {
      id: 2,
      image: "https://assets.officereality.co.uk/uploads/cat-veta-image.jpg",
    },
    {
      id: 3,
      image: "https://www.calibre-furniture.co.uk/images/content/2228_1_640x500.jpg?16:23:18&_e=.jpg",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/44/03/26/44032606f4b9dcc70b2cf3d624d4d1e3.jpg",
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/45/af/66/45af6641c4ec7a78ac8ea3f983dd00cb.jpg",
    },
    {
      id: 6,
      image: "https://www.smmbdstore.com/wp-content/uploads/2023/08/Office-Workstation-1168-3.jpg",
    },
    {
        id: 7,
        image: "https://www.genesys-uk.com/wp-content/uploads/Freedom-Lite-Sit-Stand-Desk-4-rectanglular-desks-shown-back-to-back-in-a-cluster-with-central-floor-screen-white-board-finish-and-trim.jpg",
      },
      {
        id: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdKPpFju4Cg6BkZlhAgjI5jnQFh5sg1BhMg&s",
      },
      {
        id: 9,
        image: "https://s.alicdn.com/@sc04/kf/H3d27d0c9f8cd413eb7867ccc190fd366G.jpg_720x720q50.jpg",
      },
      {
        id: 10,
        image: "https://image.made-in-china.com/202f0j00CbkUvezqnjcT/Standard-Specifications-Metal-Leg-People-Office-Desks-and-Workstations-with-Desk-Screen.webp",
      },
      {
        id: 11,
        image: "https://www.ofconnection.com/cdn/shop/products/divi-fast-track-shared-workstation_affordable_cubicle_budget_workstation_grande.jpg?v=1553288681",
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
      <div className="flex flex-col items-center bg-gray-100 mt-16">
        {/* Banner Section with Images */}
        <div className="relative w-full h-96">
          <img
            src="https://hhendy.com/wp-content/uploads/2023/01/rethinking-open-offices-design-strategies-for-the-future-open-office-2-0-2560x0-c-default.webp"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className=" absolute font-serif   inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-50">
            <h1 className="text-center">Welcome To Fast Office LTD in Bnagladesh</h1>
          </div>
        </div>

        {/* Product Description Section */}
        {/* Product Description Section */}
        <section className="my-10 px-4 w-full max-w-4xl text-center mx-auto text-black">
          <h2 className="text-2xl font-semibold mb-4">Our Office  infrastructure</h2>
          <p className="mb-6">
            Explore our wide range of  office  infrastructure and technology products
            designed to enhance your lifestyle.
          </p>

          {/* Product Images */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {
                currentProducts?.map((product,index)=><img
                src={product.image}
                alt={`product${index+1}`}
                className="w-40 h-40 object-cover rounded-lg"
              />)
            }
           
            
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="btn btn-outline bg-black  text-white">
              Learn More
            </button>
            <button className="btn btn-outline bg-black  text-white">
              Contact Us
            </button>
          </div>
        </section>
      </div>

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
      className="btn btn-outline btn-sm bg-blue-100"
    >
      <FcPrevious className="text-xl text-white" />
    </button>
    <button
      onClick={goToNext}
      className="btn btn-outline btn-sm bg-blue-100"
    >
      <FcNext className="text-xl text-white" />
    </button>
  </div>
</div>


      <div className="flex flex-col items-center bg-gray-100">
        {/* Services Section */}
        <section className="my-10 px-4 w-full max-w-4xl text-black">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-medium">Service 1</h3>
              <p>High-quality electronics repair and maintenance.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-medium">Service 2</h3>
              <p>Latest gadgets and technology sales.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-medium">Service 3</h3>
              <p>Custom electronic solutions for your needs.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-medium">Service 4</h3>
              <p>Expert consultation and support services.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
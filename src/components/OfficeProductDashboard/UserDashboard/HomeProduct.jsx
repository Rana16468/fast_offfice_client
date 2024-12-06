import React from "react";

const HomeProduct = () => {
  const ourproduct = [
    {
      squareFootage: 1500,
      location: "123 Main Street, Dhaka, Bangladesh",
      currency: "USD",
      amount: 20000,
      mapLocation:
        "https://www.google.com/maps/search/123+Main+Street,+Dhaka,+Bangladesh+location/@23.750952,90.3654215,3372m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      squareFootage: 1800,
      location: "456 Park Avenue, Dhaka, Bangladesh",
      currency: "USD",
      amount: 25000,
      mapLocation:
        "https://www.google.com/maps/search/456+Park+Avenue,+Dhaka,+Bangladesh+location/@23.810331,90.412521",
    },
    {
      squareFootage: 2000,
      location: "789 Lakeside Drive, Chittagong, Bangladesh",
      currency: "USD",
      amount: 30000,
      mapLocation:
        "https://www.google.com/maps/search/789+Lakeside+Drive,+Chittagong,+Bangladesh+location/@22.356851,91.783182",
    },
    {
      squareFootage: 1700,
      location: "12 Green Lane, Sylhet, Bangladesh",
      currency: "USD",
      amount: 22000,
      mapLocation:
        "https://www.google.com/maps/search/12+Green+Lane,+Sylhet,+Bangladesh+location/@24.897319,91.871981",
    },
    {
      squareFootage: 1600,
      location: "34 Hilltop Road, Khulna, Bangladesh",
      currency: "USD",
      amount: 21000,
      mapLocation:
        "https://www.google.com/maps/search/34+Hilltop+Road,+Khulna,+Bangladesh+location/@22.845641,89.540329",
    },
    {
      squareFootage: 1400,
      location: "23 Ocean Avenue, Cox's Bazar, Bangladesh",
      currency: "USD",
      amount: 18000,
      mapLocation:
        "https://www.google.com/maps/search/23+Ocean+Avenue,+Cox's+Bazar,+Bangladesh+location/@21.427228,92.005806",
    },
    {
      squareFootage: 2100,
      location: "67 Jasmine Street, Dhaka, Bangladesh",
      currency: "USD",
      amount: 35000,
      mapLocation:
        "https://www.google.com/maps/search/67+Jasmine+Street,+Dhaka,+Bangladesh+location/@23.750000,90.375000",
    },
    {
      squareFootage: 1900,
      location: "89 Victory Boulevard, Dhaka, Bangladesh",
      currency: "USD",
      amount: 27000,
      mapLocation:
        "https://www.google.com/maps/search/89+Victory+Boulevard,+Dhaka,+Bangladesh+location/@23.810000,90.400000",
    },
    {
      squareFootage: 1500,
      location: "10 Star Avenue, Dhaka, Bangladesh",
      currency: "USD",
      amount: 24000,
      mapLocation:
        "https://www.google.com/maps/search/10+Star+Avenue,+Dhaka,+Bangladesh+location/@23.751000,90.362000",
    },
    {
      squareFootage: 1700,
      location: "45 Pearl Street, Dhaka, Bangladesh",
      currency: "USD",
      amount: 26000,
      mapLocation:
        "https://www.google.com/maps/search/45+Pearl+Street,+Dhaka,+Bangladesh+location/@23.754000,90.367000",
    },
    {
      squareFootage: 2200,
      location: "99 Emerald Drive, Dhaka, Bangladesh",
      currency: "USD",
      amount: 40000,
      mapLocation:
        "https://www.google.com/maps/search/99+Emerald+Drive,+Dhaka,+Bangladesh+location/@23.759000,90.360000",
    },
    {
      squareFootage: 2000,
      location: "78 Forest Hill, Dhaka, Bangladesh",
      currency: "USD",
      amount: 32000,
      mapLocation:
        "https://www.google.com/maps/search/78+Forest+Hill,+Dhaka,+Bangladesh+location/@23.761000,90.358000",
    },
    {
      squareFootage: 1500,
      location: "56 Rosewood Lane, Sylhet, Bangladesh",
      currency: "USD",
      amount: 21000,
      mapLocation:
        "https://www.google.com/maps/search/56+Rosewood+Lane,+Sylhet,+Bangladesh+location/@24.900000,91.870000",
    },
    {
      squareFootage: 1400,
      location: "22 Horizon Street, Barisal, Bangladesh",
      currency: "USD",
      amount: 18000,
      mapLocation:
        "https://www.google.com/maps/search/22+Horizon+Street,+Barisal,+Bangladesh+location/@22.702000,90.353000",
    },
    {
      squareFootage: 1800,
      location: "15 Skyline Boulevard, Dhaka, Bangladesh",
      currency: "USD",
      amount: 29000,
      mapLocation:
        "https://www.google.com/maps/search/15+Skyline+Boulevard,+Dhaka,+Bangladesh+location/@23.752000,90.361000",
    },
    {
      squareFootage: 1700,
      location: "77 Amber Way, Chittagong, Bangladesh",
      currency: "USD",
      amount: 24000,
      mapLocation:
        "https://www.google.com/maps/search/77+Amber+Way,+Chittagong,+Bangladesh+location/@22.350000,91.780000",
    },
    {
      squareFootage: 2000,
      location: "33 Gold Street, Dhaka, Bangladesh",
      currency: "USD",
      amount: 33000,
      mapLocation:
        "https://www.google.com/maps/search/33+Gold+Street,+Dhaka,+Bangladesh+location/@23.755000,90.363000",
    },
    {
      squareFootage: 1500,
      location: "48 Crystal Lane, Khulna, Bangladesh",
      currency: "USD",
      amount: 20000,
      mapLocation:
        "https://www.google.com/maps/search/48+Crystal+Lane,+Khulna,+Bangladesh+location/@22.845000,89.540000",
    },
    {
      squareFootage: 1600,
      location: "20 Sunset Boulevard, Dhaka, Bangladesh",
      currency: "USD",
      amount: 26000,
      mapLocation:
        "https://www.google.com/maps/search/20+Sunset+Boulevard,+Dhaka,+Bangladesh+location/@23.756000,90.364000",
    },
    {
      squareFootage: 1500,
      location: "11 Diamond Road, Dhaka, Bangladesh",
      currency: "USD",
      amount: 20000,
      mapLocation:
        "https://www.google.com/maps/search/11+Diamond+Road,+Dhaka,+Bangladesh+location/@23.750000,90.361000",
    },
  ];

  return (
    <>
      <div className="  py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ourproduct.map((office, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  📍 {office.location}
                </h2>
                <p className="text-gray-600 mb-3">
                  <strong>Square Footage:</strong> {office.squareFootage} sq ft
                </p>
                <p className="text-gray-600 mb-3">
                  <strong>Total Cost:</strong> {office.currency} {office.amount}
                </p>
                <a
                  href={office.mapLocation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline">
                  View on Map
                </a>
              </div>
              <div className="bg-blue-600 text-white text-center py-2">
                <button className="px-4 py-2 font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Office Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeProduct;

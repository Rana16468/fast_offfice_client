import React from 'react';

const partners = [
    { name: "Azure", img: "https://swimburger.net/media/0zcpmk1b/azure.jpg", label: "Silver Partner" },
    { name: "Salesforce", img: "https://logos-download.com/wp-content/uploads/2022/12/OpenIO_Logo.png", label: "Consulting Partner" },
    { name: "WebMerge", img: "https://static-00.iconduck.com/assets.00/digitalocean-icon-1024x1024-6unxb7a4.png", label: "Document Automation" },
    { name: "OpenShift", img: "https://www.cdnlogo.com/logos/o/93/openshift.svg", label: "Partner Network" },
    { name: "Block Spring", img: "https://www.hubspot.com/hs-fs/hubfs/McDonalds_Golden_Arches.svg.png?width=500&height=438&name=McDonalds_Golden_Arches.svg.png", label: "SI Partner" },
    { name: "Dell", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dell_logo.png/900px-Dell_logo.png?20180610152952", label: "Technology Partner" },
    { name: "Cloudera", img: "https://www.aegissofttech.com/cloudera/images/etl-services/cloudera1.webp", label: "Data Partner" },
  ];

const RunningCompany = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 mt-16"> 
      <h1 className="text-6xl font-bold text-gray-800 mb-8">Our Partners</h1>
  
      <div className="space-y-8 w-11/12 lg:w-3/4">
        {/* First Row: 2 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {partners.slice(0, 2).map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md"
            >
              <img
                src={partner.img}
                alt={`${partner.name} Logo`}
                className="w-28 h-28 object-contain mb-2"
              />
              <h2 className="text-xl font-semibold text-gray-700">{partner.name}</h2>
              <p className="text-sm font-medium text-gray-500 mt-2">{partner.label}</p> {/* Partner Level */}
            </div>
          ))}
        </div>
  
        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {partners.slice(2, 5).map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md"
            >
              <img
                src={partner.img}
                alt={`${partner.name} Logo`}
                className="w-24 h-24 object-contain mb-2"
              />
              <h2 className="text-xl font-semibold text-gray-700">{partner.name}</h2>
              <p className="text-sm font-medium text-gray-500 mt-2">{partner.label}</p> {/* Partner Level */}
            </div>
          ))}
        </div>
  
        {/* Third Row: 2 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {partners.slice(5, 7).map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md"
            >
              <img
                src={partner.img}
                alt={`${partner.name} Logo`}
                className="w-24 h-24 object-contain mb-2"
              />
              <h2 className="text-xl font-semibold text-gray-700">{partner.name}</h2>
              <p className="text-sm font-medium text-gray-500 mt-2">{partner.label}</p> {/* Partner Level */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
      
    };

export default RunningCompany;
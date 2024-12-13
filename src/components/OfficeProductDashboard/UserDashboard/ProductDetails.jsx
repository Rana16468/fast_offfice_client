import React from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const dataList = [
    {
        electronicsproduct: {
          name: "Desktop Computer",
          quantity: 10,
          description: "High-performance desktop computer suitable for office work.",
          image: "https://5.imimg.com/data5/SELLER/Default/2023/10/352998249/LA/TU/HJ/34791476/office-desktop-computer.jpg",
          desktopconfigration: {
            name: "TECLAST K24 Air",
            model: "K24 Air",
            processor: "Intel Celeron N5095 (6M Cache, up to 3.40 GHz)",
            ram: "8GB DDR4",
            storage: "512GB SSD",
            display: "24-inch FHD",
            features: "Built-in Speaker, High Definition Audio",
            _id: "675c2506de4c2a707c3e78cf"
          }
        },
        laptopproduct: {
          name: "Business Laptop",
          quantity: 15,
          description: "Slim and lightweight laptop ideal for professionals on the go.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXl3MeAi0GyxjDguJv0Axl_3K4gIUQVRhxA&s",
          laptopconfigration: {
            name: "Dell Latitude 5420",
            processor: "Intel Core i5 (11th Gen)",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            display: "14-inch FHD",
            battery: "Up to 10 hours",
            _id: "675c2506de4c2a707c3e78d0"
          }
        },
        projectorproduct: {
          name: "Projector",
          quantity: 3,
          description: "Portable projector with HD resolution and multiple connectivity options.",
          image: "https://www.startech.com.bd/image/cache/catalog/projector/cheerlux/c8-1800-lumens-wi-fi/cheerlux-c8-wifi-01-500x500.jpg",
          projectorconfigration: {
            name: "Cheerlux C8",
            model: "C8 Wi-Fi",
            brightness: "2200 lumens",
            lamplife: "50000 Hours",
            contrast_ratio: "2000:1",
            _id: "675c2506de4c2a707c3e78d1"
          }
        },
        printerproduct: {
          name: "Office Printer",
          quantity: 8,
          description: "Multi-functional office printer with scanning and copying capabilities.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEMNwZqCk45FMIzGEnz3pBy2ukl4OYoc5sw&s",
          printerconfigration: {
            name: "HP LaserJet Pro MFP",
            features: "Print, Scan, Copy",
            printspeed: "30 ppm",
            connectivity: "Wi-Fi, Ethernet, USB",
            _id: "675c2506de4c2a707c3e78d3"
          }
        },
        acproduct: {
          name: "Split Air Conditioner",
          quantity: 10,
          description: "Energy-efficient split AC with fast cooling and low noise operation.",
          image: "https://acmartbd.com/wp-content/uploads/2016/09/Carrier-Ceiling-Type-3-Ton-36CEL072-Air-Conditioner.jpg",
          acconfigration: {
            brand: "Daikin",
            capacity: "1.5 Ton",
            energy_rating: "5 Star",
            features: "Inverter Technology, Auto Clean, Wi-Fi Control",
            power_consumption: "1450W",
            _id: "675c2506de4c2a707c3e78d5"
          }
        },
        _id: "675c2506de4c2a707c3e78cc",
        officecategorieId: {
          _id: "6754756eea6fa4c7fa12b5be",
          squareFootage: 1500,
          location: "35 Gold Street, Dhaka, Bangladesh",
          currency: "BDT",
          amount: 20000,
          office_categorie: "Minimalist",
          maplocation: "https://www.google.com/maps/search/11+Diamond+Road,+Dhaka,+Bangladesh+location/@23.750000,90.361000",
          isDelete: false,
          createdAt: "2024-12-07T16:18:54.522Z",
          updatedAt: "2024-12-07T16:18:54.522Z",
          __v: 0
        },
        furniture: "Office Furniture",
        furnitureproduct: {
          name: "Ergonomic Chair",
          quantity: 20,
          description: "Comfortable ergonomic chair with adjustable height and lumbar support.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDHmkCgxZoyUlKYqNsKfiADBseAF5ld0IXg&s",
          _id: "675c2506de4c2a707c3e78cd"
        },
        desk: "Standing Desk",
        deskproduct: {
          name: "Standing Desk",
          quantity: 20,
          description: "Electric standing desk with adjustable height and cable management.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrfX8sGRr1IMMD32FyvK-GDCwnnIpeGd0gQ&s",
          _id: "675c2506de4c2a707c3e78ce"
        },
        electronics: "Electronics",
        projector: "Projector",
        officesupplies: "Office Supplies",
        officesuppliesproduct: {
          name: "Whiteboard",
          quantity: 25,
          description: "Magnetic whiteboard with a sturdy frame and marker tray.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2Gy4DlJKdlqilbLREwgwIWFsJUDUANgTQQ&s",
          _id: "675c2506de4c2a707c3e78d2"
        },
        stationery: "Stationery",
        stationeryproduct: {
          name: "Stationery Set",
          quantity: 100,
          description: "Complete stationery set with pens, pencils, and notepads.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUN8Up8Lj5Tx8AwvdAAhfjEppt6D9QFSI_w&s",
          _id: "675c2506de4c2a707c3e78d4"
        },
        ac: "Air Conditioners",
        officeinfastructure: [
          {
            roomname: "HR Room",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQkoCGvzcUyZ_Gmv5V-SXh34M_dKx1M0xFg&s",
            _id: "675c2506de4c2a707c3e78d6"
          },
          {
            roomname: "Office Room 1",
            image: "https://thumbs.dreamstime.com/b/office-work-place-7165793.jpg",
            _id: "675c2506de4c2a707c3e78d7"
          },
          {
            roomname: "Office Room 2",
            image: "https://thumbs.dreamstime.com/b/office-work-place-7165793.jpg",
            _id: "675c2506de4c2a707c3e78d8"
          },
          {
            roomname: "Washroom 1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVrrvymskCztZFN0sqt2LByM90wlVPoXmAA&s",
            _id: "675c2506de4c2a707c3e78d9"
          },
          {
            roomname: "Washroom 2",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVrrvymskCztZFN0sqt2LByM90wlVPoXmAA&s",
            _id: "675c2506de4c2a707c3e78da"
          },
          {
            roomname: "Waiting Room",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HCOZ0hbl6SusUHdoWlBtiXPWeLL8Dw9BVQ&s",
            _id: "675c2506de4c2a707c3e78db"
          },
          {
            roomname: "Office Kitchen",
            image: "https://limobelinwo.com/wp-content/uploads/2022/05/cocinas-en-las-oficinas-domestica.jpg",
            _id: "675c2506de4c2a707c3e78dc"
          }
        ],
        createdAt: "2024-12-13T12:13:58.246Z",
        updatedAt: "2024-12-13T12:13:58.246Z"
      },
      {
        electronicsproduct: {
          name: "Desktop Computer",
          quantity: 10,
          description: "High-performance desktop computer suitable for office work.",
          image: "https://5.imimg.com/data5/SELLER/Default/2023/10/352998249/LA/TU/HJ/34791476/office-desktop-computer.jpg",
          desktopconfigration: {
            name: "TECLAST K24 Air",
            model: "K24 Air",
            processor: "Intel Celeron N5095 (6M Cache, up to 3.40 GHz)",
            ram: "8GB DDR4",
            storage: "512GB SSD",
            display: "24-inch FHD",
            features: "Built-in Speaker, High Definition Audio",
            _id: "675c2506de4c2a707c3e78cf"
          }
        },
        laptopproduct: {
          name: "Business Laptop",
          quantity: 15,
          description: "Slim and lightweight laptop ideal for professionals on the go.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXl3MeAi0GyxjDguJv0Axl_3K4gIUQVRhxA&s",
          laptopconfigration: {
            name: "Dell Latitude 5420",
            processor: "Intel Core i5 (11th Gen)",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            display: "14-inch FHD",
            battery: "Up to 10 hours",
            _id: "675c2506de4c2a707c3e78d0"
          }
        },
        projectorproduct: {
          name: "Projector",
          quantity: 3,
          description: "Portable projector with HD resolution and multiple connectivity options.",
          image: "https://www.startech.com.bd/image/cache/catalog/projector/cheerlux/c8-1800-lumens-wi-fi/cheerlux-c8-wifi-01-500x500.jpg",
          projectorconfigration: {
            name: "Cheerlux C8",
            model: "C8 Wi-Fi",
            brightness: "2200 lumens",
            lamplife: "50000 Hours",
            contrast_ratio: "2000:1",
            _id: "675c2506de4c2a707c3e78d1"
          }
        },
        printerproduct: {
          name: "Office Printer",
          quantity: 8,
          description: "Multi-functional office printer with scanning and copying capabilities.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEMNwZqCk45FMIzGEnz3pBy2ukl4OYoc5sw&s",
          printerconfigration: {
            name: "HP LaserJet Pro MFP",
            features: "Print, Scan, Copy",
            printspeed: "30 ppm",
            connectivity: "Wi-Fi, Ethernet, USB",
            _id: "675c2506de4c2a707c3e78d3"
          }
        },
        acproduct: {
          name: "Split Air Conditioner",
          quantity: 10,
          description: "Energy-efficient split AC with fast cooling and low noise operation.",
          image: "https://acmartbd.com/wp-content/uploads/2016/09/Carrier-Ceiling-Type-3-Ton-36CEL072-Air-Conditioner.jpg",
          acconfigration: {
            brand: "Daikin",
            capacity: "1.5 Ton",
            energy_rating: "5 Star",
            features: "Inverter Technology, Auto Clean, Wi-Fi Control",
            power_consumption: "1450W",
            _id: "675c2506de4c2a707c3e78d5"
          }
        },
        _id: "675c2506de4c2a707c3e78cc",
        officecategorieId: {
          _id: "6754756eea6fa4c7fa12b5be",
          squareFootage: 1500,
          location: "35 Gold Street, Dhaka, Bangladesh",
          currency: "BDT",
          amount: 20000,
          office_categorie: "Minimalist",
          maplocation: "https://www.google.com/maps/search/11+Diamond+Road,+Dhaka,+Bangladesh+location/@23.750000,90.361000",
          isDelete: false,
          createdAt: "2024-12-07T16:18:54.522Z",
          updatedAt: "2024-12-07T16:18:54.522Z",
          __v: 0
        },
        furniture: "Office Furniture",
        furnitureproduct: {
          name: "Ergonomic Chair",
          quantity: 20,
          description: "Comfortable ergonomic chair with adjustable height and lumbar support.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDHmkCgxZoyUlKYqNsKfiADBseAF5ld0IXg&s",
          _id: "675c2506de4c2a707c3e78cd"
        },
        desk: "Standing Desk",
        deskproduct: {
          name: "Standing Desk",
          quantity: 20,
          description: "Electric standing desk with adjustable height and cable management.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrfX8sGRr1IMMD32FyvK-GDCwnnIpeGd0gQ&s",
          _id: "675c2506de4c2a707c3e78ce"
        },
        electronics: "Electronics",
        projector: "Projector",
        officesupplies: "Office Supplies",
        officesuppliesproduct: {
          name: "Whiteboard",
          quantity: 25,
          description: "Magnetic whiteboard with a sturdy frame and marker tray.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2Gy4DlJKdlqilbLREwgwIWFsJUDUANgTQQ&s",
          _id: "675c2506de4c2a707c3e78d2"
        },
        stationery: "Stationery",
        stationeryproduct: {
          name: "Stationery Set",
          quantity: 100,
          description: "Complete stationery set with pens, pencils, and notepads.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUN8Up8Lj5Tx8AwvdAAhfjEppt6D9QFSI_w&s",
          _id: "675c2506de4c2a707c3e78d4"
        },
        ac: "Air Conditioners",
        officeinfastructure: [
          {
            roomname: "HR Room",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQkoCGvzcUyZ_Gmv5V-SXh34M_dKx1M0xFg&s",
            _id: "675c2506de4c2a707c3e78d6"
          },
          {
            roomname: "Office Room 1",
            image: "https://thumbs.dreamstime.com/b/office-work-place-7165793.jpg",
            _id: "675c2506de4c2a707c3e78d7"
          },
          {
            roomname: "Office Room 2",
            image: "https://thumbs.dreamstime.com/b/office-work-place-7165793.jpg",
            _id: "675c2506de4c2a707c3e78d8"
          },
          {
            roomname: "Washroom 1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVrrvymskCztZFN0sqt2LByM90wlVPoXmAA&s",
            _id: "675c2506de4c2a707c3e78d9"
          },
          {
            roomname: "Washroom 2",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVrrvymskCztZFN0sqt2LByM90wlVPoXmAA&s",
            _id: "675c2506de4c2a707c3e78da"
          },
          {
            roomname: "Waiting Room",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HCOZ0hbl6SusUHdoWlBtiXPWeLL8Dw9BVQ&s",
            _id: "675c2506de4c2a707c3e78db"
          },
          {
            roomname: "Office Kitchen",
            image: "https://limobelinwo.com/wp-content/uploads/2022/05/cocinas-en-las-oficinas-domestica.jpg",
            _id: "675c2506de4c2a707c3e78dc"
          }
        ],
        createdAt: "2024-12-13T12:13:58.246Z",
        updatedAt: "2024-12-13T12:13:58.246Z"
      }
    
  ];

  const { categorieId } = useParams();
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Office Products and Infrastructure
        </h1>
        {dataList?.map((data, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Electronics Products */}
            {data.electronicsproduct && (
              <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={data.electronicsproduct.image}
                    alt={data.electronicsproduct.name}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                    {data.electronicsproduct.category || "Category"}
                  </div>
                  <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {data.electronicsproduct.name}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light">
                    {data.electronicsproduct.description}
                  </p>
                  <div className="mb-4">
                    <h3 className="font-semibold">Configuration:</h3>
                    <ul className="list-disc list-inside text-sm text-slate-600">
                      <li>
                        Model:{" "}
                        {data.electronicsproduct.desktopconfigration.model}
                      </li>
                      <li>
                        Processor:{" "}
                        {data.electronicsproduct.desktopconfigration.processor}
                      </li>
                      <li>
                        RAM: {data.electronicsproduct.desktopconfigration.ram}
                      </li>
                      <li>
                        Storage:{" "}
                        {data.electronicsproduct.desktopconfigration.storage}
                      </li>
                      <li>
                        Display:{" "}
                        {data.electronicsproduct.desktopconfigration.display}
                      </li>
                      <li>
                        Features:{" "}
                        {data.electronicsproduct.desktopconfigration.features}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Laptop Products */}
            {data.laptopproduct && (
              <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={data.laptopproduct.image}
                    alt={data.laptopproduct.name}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                    LAPTOP
                  </div>
                  <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {data.laptopproduct.name}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light">
                    {data.laptopproduct.description}
                  </p>
                  <p className="text-sm font-medium mt-2 text-slate-800">
                    Quantity: {data.laptopproduct.quantity}
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold">Configuration:</h3>
                    <ul className="list-disc list-inside text-sm text-slate-600">
                      <li>
                        Processor:{" "}
                        {data.laptopproduct.laptopconfigration.processor}
                      </li>
                      <li>RAM: {data.laptopproduct.laptopconfigration.ram}</li>
                      <li>
                        Storage: {data.laptopproduct.laptopconfigration.storage}
                      </li>
                      <li>
                        Display: {data.laptopproduct.laptopconfigration.display}
                      </li>
                      <li>
                        Battery: {data.laptopproduct.laptopconfigration.battery}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Projector Products */}
            {data.projectorproduct && (
              <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={data.projectorproduct.image}
                    alt={data.projectorproduct.name}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                    PROJECTOR
                  </div>
                  <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {data.projectorproduct.name}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light">
                    {data.projectorproduct.description}
                  </p>
                  <p className="text-sm font-medium mt-2 text-slate-800">
                    Quantity: {data.projectorproduct.quantity}
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold">Configuration:</h3>
                    <ul className="list-disc list-inside text-sm text-slate-600">
                      <li>
                        Model:{" "}
                        {data.projectorproduct.projectorconfigration.model}
                      </li>
                      <li>
                        Brightness:{" "}
                        {data.projectorproduct.projectorconfigration.brightness}
                      </li>
                      <li>
                        Lamp Life:{" "}
                        {data.projectorproduct.projectorconfigration.lamplife}
                      </li>
                      <li>
                        Contrast Ratio:{" "}
                        {
                          data.projectorproduct.projectorconfigration
                            .contrast_ratio
                        }
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Printer Products */}
            {data.printerproduct && (
              <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={data.printerproduct.image}
                    alt={data.printerproduct.name}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                    PRINTER
                  </div>
                  <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {data.printerproduct.name}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light">
                    {data.printerproduct.description}
                  </p>
                  <p className="text-sm font-medium mt-2 text-slate-800">
                    Quantity: {data.printerproduct.quantity}
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold">Configuration:</h3>
                    <ul className="list-disc list-inside text-sm text-slate-600">
                      <li>
                        Features:{" "}
                        {data.printerproduct.printerconfigration.features}
                      </li>
                      <li>
                        Print Speed:{" "}
                        {data.printerproduct.printerconfigration.printspeed}
                      </li>
                      <li>
                        Connectivity:{" "}
                        {data.printerproduct.printerconfigration.connectivity}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* AC Products */}
            {data.acproduct && (
              <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={data.acproduct.image}
                    alt={data.acproduct.name}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                    AC PRODUCT
                  </div>
                  <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {data.acproduct.name}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light">
                    {data.acproduct.description}
                  </p>
                  <p className="text-sm font-medium mt-2 text-slate-800">
                    Quantity: {data.acproduct.quantity}
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold">Configuration:</h3>
                    <ul className="list-disc list-inside text-sm text-slate-600">
                      <li>Brand: {data.acproduct.acconfigration.brand}</li>
                      <li>
                        Capacity: {data.acproduct.acconfigration.capacity}
                      </li>
                      <li>
                        Energy Rating:{" "}
                        {data.acproduct.acconfigration.energy_rating}
                      </li>
                      <li>
                        Features: {data.acproduct.acconfigration.features}
                      </li>
                      <li>
                        Power Consumption:{" "}
                        {data.acproduct.acconfigration.power_consumption}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {/* Furniture */}
            {data.furnitureproduct && (
              <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={data.furnitureproduct.image}
                    alt={data.furnitureproduct.name}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                    FURNITURE
                  </div>
                  <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {data.furnitureproduct.name}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light">
                    {data.furnitureproduct.description}
                  </p>
                  <p className="text-sm font-medium mt-2 text-slate-800">
                    Quantity: {data.furnitureproduct.quantity}
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold">Category:</h3>
                    <p className="text-sm text-slate-600">
                      {data.furniture}{" "}
                      {/* This will display 'Office Furnituresssss' */}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {/* dask */}
            {data.deskproduct && (
              <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={data.deskproduct.image}
                    alt={data.deskproduct.name}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                    FURNITURE
                  </div>
                  <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {data.deskproduct.name}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light">
                    {data.deskproduct.description}
                  </p>
                  <p className="text-sm font-medium mt-2 text-slate-800">
                    Quantity: {data.deskproduct.quantity}
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold">Category:</h3>
                    <p className="text-sm text-slate-600">
                      {data.desk} {/* This will display 'Standing Desk' */}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {/*office supplies product  */}
            {data.officesuppliesproduct && (
              <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={data.officesuppliesproduct.image}
                    alt={data.officesuppliesproduct.name}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-blue-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-28 text-center">
                    {data.officesupplies}
                  </div>
                  <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {data.officesuppliesproduct.name}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light">
                    {data.officesuppliesproduct.description}
                  </p>
                  <p className="text-sm font-medium mt-2 text-slate-800">
                    Quantity: {data.officesuppliesproduct.quantity}
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold">Category:</h3>
                    <p className="text-sm text-slate-600">{data.electronics}</p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {/* stationeryproduct */}
            {data.stationeryproduct && (
              <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={data.stationeryproduct.image}
                    alt={data.stationeryproduct.name}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-full bg-blue-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-28 text-center">
                    {data.stationery}
                  </div>
                  <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {data.stationeryproduct.name}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light">
                    {data.stationeryproduct.description}
                  </p>
                  <p className="text-sm font-medium mt-2 text-slate-800">
                    Quantity: {data.stationeryproduct.quantity}
                  </p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {/* fficeinfastructure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
              {data.officeinfastructure.map((room) => (
                <div
                  key={room._id}
                  className="card w-full bg-base-100 shadow-sm border border-slate-200 rounded-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={room.image}
                      alt={room.roomname}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {room.roomname}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            {/* office categorie */}

            {
                data?.officecategorieId &&  <div
                
                className="card w-full bg-base-100 shadow-xl border-2 border-blue-500 rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src="https://fastoffice.com/wp-content/uploads/2021/04/BG-FAST.jpg" // Placeholder for office category image
                    alt={data?.officecategorieId.office_categorie}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-700 mb-4">
                    {data?.officecategorieId.office_categorie}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Location:</strong> {data?.officecategorieId.location}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Square Footage:</strong> {data?.officecategorieId.squareFootage} sq. ft.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Price:</strong> {data?.officecategorieId.amount} {data?.officecategorieId.currency}
                  </p>
                  <div className="mt-4">
                    <a
                      href={data?.officecategorieId.maplocation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            }
            
  


          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;

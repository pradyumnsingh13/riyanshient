import ProductCarousel from "./product-carousel"

const furnitureProducts = [
  {
    id: "cross-over-bench",
    name: "Cross Over Bench",
    image: "/furniture/crossoverbench.jpg",
    description: "Ergonomic cross over benches for clean room environments.",
  },
  {
    id: "ss-locker",
    name: "SS Locker",
    image: "/furniture/sslocker.jpg",
    description: "Stainless steel lockers designed for pharmaceutical facilities.",
  },
  {
    id: "ms-locker",
    name: "MS Locker",
    image: "/furniture/mslocker.jpg",
    description: "Mild steel lockers with powder coating for durability.",
  },
  {
    id: "apron-locker",
    name: "Apron Locker",
    image: "/furniture/apronlocker.webp",
    description: "Specialized lockers for storing clean room apparel and PPE.",
  },
  {
    id: "book-almirah",
    name: "Book Almirah",
    image: "/furniture/bookalmirah.webp",
    description: "Storage solutions for documentation and reference materials.",
  },
  {
    id: "computer-table",
    name: "Computer Table",
    image: "/furniture/computertable.jpg",
    description: "Ergonomic computer workstations for laboratory environments.",
  },
  {
    id: "powder-sampler",
    name: "Powder Sampler",
    image: "/furniture/powder-sampler.jpg",
    description: "Precision tools for pharmaceutical powder sampling.",
  },
  {
    id: "step-ladder",
    name: "Step Ladder",
    image: "/furniture/stepladder.jpg",
    description: "Safe and stable step ladders for facility access.",
  },
  {
    id: "sink-table",
    name: "Sink Table",
    image: "/furniture/sinktable.webp",
    description: "Stainless steel sink tables for laboratory use.",
  },
  {
    id: "almirah",
    name: "Almirah",
    image: "/furniture/almirah.jpg",
    description: "Storage cabinets for pharmaceutical environments.",
  },
  {
    id: "chair",
    name: "Chair",
    image: "/furniture/chair.jpg",
    description: "Ergonomic seating solutions for laboratories and clean rooms.",
  },
  {
    id: "diepunch-cabinet",
    name: "Diepunch Cabinet",
    image: "/furniture/diepunchcabinet.webp",
    description: "Specialized storage for die punch equipment.",
  },
  {
    id: "dustbin",
    name: "Dustbin",
    image: "/furniture/dustbin.webp",
    description: "Hygienic waste disposal solutions for pharmaceutical facilities.",
  },
  {
    id: "ipc",
    name: "IPC",
    image: "/furniture/IPC.webp",
    description: "In-process control equipment for quality assurance.",
  },
  {
    id: "mug",
    name: "Mug",
    image: "/furniture/mug.webp",
    description: "Stainless steel mugs for laboratory use.",
  },
  {
    id: "pallet",
    name: "Pallet",
    image: "/furniture/pallet.webp",
    description: "Durable pallets for material handling and storage.",
  },
  {
    id: "petri-stand",
    name: "Petri Stand",
    image: "/furniture/petristand.webp",
    description: "Stands for organizing and storing petri dishes.",
  },
  {
    id: "scoop",
    name: "Scoop",
    image: "/furniture/scoop.jpg",
    description: "Precision scoops for pharmaceutical material handling.",
  },
  {
    id: "sop-stand",
    name: "SOP Stand",
    image: "/furniture/sopstand.jpeg",
    description: "Standard Operating Procedure document stands.",
  },
  {
    id: "spatulla",
    name: "Spatulla",
    image: "/furniture/spatula.jpg",
    description: "Precision spatulas for laboratory applications.",
  },
  {
    id: "ss-ms-pallet-truck",
    name: "SS & MS Pallet Truck",
    image: "/furniture/ss&mspallettruck.webp",
    description: "Stainless steel and mild steel pallet trucks for material handling.",
  },
  {
    id: "ss-container",
    name: "SS Container",
    image: "/furniture/sscontainer.webp",
    description: "Stainless steel containers for pharmaceutical storage.",
  },
  {
    id: "stool",
    name: "Stool",
    image: "/furniture/stool.jpg",
    description: "Ergonomic stools for laboratory and production environments.",
  },
  {
    id: "table",
    name: "Table",
    image: "/furniture/table.jpeg",
    description: "Specialized tables for pharmaceutical production and laboratories.",
  },
  {
    id: "toolbox",
    name: "Toolbox",
    image: "/furniture/tool.jpg",
    description: "Organized storage solutions for maintenance tools.",
  },
  {
    id: "tray",
    name: "Tray",
    image: "/furniture/tray.jpg",
    description: "Stainless steel trays for material handling and storage.",
  },
  {
    id: "ampoules-tray",
    name: "Ampoules Tray",
    image: "/furniture/ampoulestray.webp",
    description: "Specialized trays for handling and organizing ampoules.",
  },
  {
    id: "wallguard",
    name: "Wallguard",
    image: "/furniture/wallguard.jpeg",
    description: "Protection systems for facility walls in high-traffic areas.",
  },
  {
    id: "stirir",
    name: "Stirir",
    image: "/furniture/gmpmodelstirir.webp",
    description: "Stirring equipment for pharmaceutical production.",
  },
]

export default function FurnitureSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Furniture Items</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our pharmaceutical furniture is designed to meet the stringent requirements of clean rooms and production
            facilities, combining functionality with durability.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <ProductCarousel products={furnitureProducts} category="furniture" />
      </div>
    </div>
  )
}

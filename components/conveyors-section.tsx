import ProductCarousel from "./product-carousel"


const conveyorProducts = [
  {
    id: "loading-conveyor",
    name: "Loading Conveyor",
    image: "/conveyors/loadingconveyor.webp",
    description: "Efficient loading conveyor systems designed for pharmaceutical manufacturing environments.",
  },
  {
    id: "slat-conveyor",
    name: "Slat Conveyor",
    image: "/conveyors/slat.webp",
    description: "Durable slat conveyors for reliable material handling in pharmaceutical production.",
  },
  {
    id: "bend-conveyor",
    name: "Bend Conveyor",
    image: "/conveyors/bendconveyor.webp",
    description: "Specialized bend conveyors to optimize space and workflow in production facilities.",
  },
  {
    id: "packing-conveyor",
    name: "Packing Conveyor",
    image: "/conveyors/packingconveyor.webp",
    description: "High-performance packing conveyors for streamlined packaging operations.",
  },
  {
    id: "visual-inspection-conveyor",
    name: "Visual Inspection Conveyor",
    image: "/conveyors/visualinspectionconveyor.webp",
    description: "Precision visual inspection conveyors with optimal lighting for quality control.",
  },
  {
    id: "roller-conveyor",
    name: "Roller Conveyor",
    image: "/conveyors/rollerconveyor.jpg",
    description: "Smooth-operating roller conveyors for efficient material transport.",
  },
  {
    id: "elevator-conveyor",
    name: "Elevator Conveyor",
    image: "/conveyors/elevatorconveyor.webp",
    description: "Vertical transport solutions with our reliable elevator conveyor systems.",
  },
  {
    id: "material-transfer-conveyor",
    name: "Material Transfer Conveyor",
    image: "/conveyors/materialtransfer.jpg",
    description: "Specialized material transfer conveyors for seamless production flow.",
  },
]

export default function ConveyorsSection() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Conveyor Systems</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our range of pharmaceutical-grade conveyor systems are designed to optimize your production workflow with
            reliability and efficiency.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <ProductCarousel products={conveyorProducts} category="conveyors" />
      </div>
    </div>
  )
}

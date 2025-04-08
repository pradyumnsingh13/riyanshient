import Image from "next/image"

export default function ClientsSection() {
  // ===== EDIT THIS ARRAY TO ADD YOUR CLIENT IMAGES =====
  // Add your client images here - just update the src paths to your image files
  // You can also customize the width, height, and alt text for each client
  const clientImages = [
    {
      src: "/clients/glenmark.png", // Path to your first client image
      alt: "Client 1 Name", // Alt text for accessibility
      width: 150, // Width of the image
      height: 80, // Height of the image
    },
    {
      src: "/clients/higgs.png", // Path to your second client image
      alt: "Client 2 Name",
      width: 150,
      height: 80,
    },
    {
      src: "/clients/luminous.png", // Path to your third client image
      alt: "Client 3 Name",
      width: 150,
      height: 80,
    },
    {
      src: "/clients/macleods.jpeg", // Path to your fourth client image
      alt: "Client 4 Name",
      width: 150,
      height: 80,
    },
    {
      src: "/clients/manjushree.png", // Path to your fifth client image
      alt: "Client 5 Name",
      width: 150,
      height: 80,
    },
  ]
  // ===== END OF EDITABLE SECTION =====

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to serve leading pharmaceutical companies across the country.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clientImages.map((client, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={client.src || "/placeholder.svg"}
                alt={client.alt}
                width={client.width}
                height={client.height}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Join our growing list of satisfied clients who trust Riyanshi Enterprises for their pharmaceutical equipment
            needs.
          </p>
        </div>
      </div>
    </div>
  )
}

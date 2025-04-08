import Image from "next/image"

export default function AboutSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Riyanshi Enterprises</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/racking/mezzanine.jpg"
              alt="About Riyanshi Enterprises"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4">
            <p className="text-lg">
              Riyanshi Enterprises is a premier manufacturer of pharmaceutical equipment, dedicated to providing
              innovative solutions that meet the highest standards of quality and reliability.
            </p>

            <p>
              With years of experience in the industry, we have established ourselves as a trusted partner for
              pharmaceutical companies across the country. Our commitment to excellence is reflected in every product we
              manufacture.
            </p>

            <p>
              We specialize in a wide range of equipment including conveyor systems, furniture items, racking solutions,
              and trolleys designed specifically for pharmaceutical environments.
            </p>

            <p>
              Our team of skilled engineers and technicians work tirelessly to ensure that our products not only meet
              but exceed industry standards and customer expectations.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-bold text-xl text-primary">100+</h3>
                <p className="text-sm">Satisfied Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-bold text-xl text-primary">500+</h3>
                <p className="text-sm">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-bold text-xl text-primary">10+</h3>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-bold text-xl text-primary">50+</h3>
                <p className="text-sm">Product Types</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

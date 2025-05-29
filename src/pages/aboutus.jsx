

const AboutUs = () => {
    return (
    <div className="min-h-screen w-full px-6 py-12 bg-white text-gray-800">
      <div className="w-full mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent)]">About FlexStore</h1>
        <p className="text-lg mb-8 text-gray-600 leading-relaxed">
          FlexStore is your go-to destination for trendy, high-quality products at unbeatable prices.
          We believe in making shopping a delightful and seamless experience, offering everything from
          fashion to everyday essentials — all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
          <div className="p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-2 text-[var(--color-accent)]">Our Mission</h2>
            <p className="text-gray-700">
              To empower individuals by delivering stylish, affordable products with exceptional service.
              We’re committed to quality, convenience, and sustainability.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-2 text-[var(--color-accent)]">Our Story</h2>
            <p className="text-gray-700">
              Started by a small team of passionate creators, FlexStore has grown into a beloved online
              destination for thousands. What began as a side project turned into a mission-driven brand.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-2 text-[var(--color-accent)]">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Curated, quality products</li>
              <li>Fast, reliable shipping</li>
              <li>Customer-first philosophy</li>
              <li>Transparent pricing</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-2 text-[var(--color-accent)]">Contact Us</h2>
            <p className="text-gray-700">
              Got questions or feedback? Reach out anytime at <a href="mailto:support@flexstore.com" className="text-blue-600 underline">support@flexstore.com</a> — we’d love to hear from you!
            </p>
          </div>
        </div>
      </div>
    </div>

    );
};

export default AboutUs;
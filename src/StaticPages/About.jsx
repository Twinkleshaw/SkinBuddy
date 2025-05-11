
function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-25 pt-40">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">About SkinBuddy</h1>
        <p className="text-xl text-gray-600 italic">Your Personalized Skincare Companion</p>
      </header>

      {/* Mission Section */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At SkinBuddy, we believe that great skincare starts with understanding your unique skin type. 
            We're dedicated to helping you find the perfect products tailored specifically for your skin's needs, 
            whether you have oily, dry, combination, or sensitive skin.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2023, SkinBuddy began as a passion project between two skincare enthusiasts who 
          struggled to find products that truly worked for their specific skin types. Frustrated by the 
          one-size-fits-all approach in the beauty industry, we set out to create a curated selection 
          of high-quality products organized by skin type, making your skincare journey simpler and more effective.
        </p>
      </section>

      {/* Skin Type Approach Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 border-b-2 border-gray-200 pb-2">Our Skin-Type Focused Approach</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Oily Skin Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Oily Skin</h3>
            <p className="text-gray-600">
              Our oily skin collection features lightweight, oil-free formulas that control shine 
              without stripping your skin. We focus on balancing sebum production while keeping your 
              skin hydrated and healthy.
            </p>
          </div>
          
          {/* Dry Skin Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Dry Skin</h3>
            <p className="text-gray-600">
              For dry skin types, we've selected rich, nourishing products packed with hydrating 
              ingredients like hyaluronic acid and ceramides to restore your skin's moisture barrier 
              and prevent flakiness.
            </p>
          </div>
          
          {/* Combination Skin Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Combination Skin</h3>
            <p className="text-gray-600">
              Balancing combination skin can be tricky, which is why our carefully chosen products 
              address both oily and dry areas without overcompensating in either direction.
            </p>
          </div>
          
          {/* Sensitive Skin Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Sensitive Skin</h3>
            <p className="text-gray-600">
              Our sensitive skin selection focuses on gentle, fragrance-free formulas with soothing 
              ingredients to calm irritation while strengthening your skin's natural defenses.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Our Values</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <strong className="text-gray-800">Skin-Type First:</strong> Every product is categorized by skin type to simplify your search.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <strong className="text-gray-800">Quality Over Quantity:</strong> We rigorously test and select only the most effective formulas.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <strong className="text-gray-800">Transparency:</strong> Clear ingredient lists and honest product descriptions.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <strong className="text-gray-800">Education:</strong> Helping you understand your skin better through our guides and resources.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <strong className="text-gray-800">Sustainability:</strong> Prioritizing eco-friendly packaging and ethical brands.
          </li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Meet the Skin Experts</h2>
        <p className="text-gray-700 leading-relaxed">
          Our team includes licensed estheticians and dermatologists who help curate our collections 
          and create educational content to guide your skincare routine decisions.
        </p>
      </section>

      {/* Community Section */}
      <section className="bg-orange-50 p-8 rounded-lg">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-orange-200 pb-2">Join the SkinBuddy Community</h2>
  <p className="text-gray-700 leading-relaxed mb-4">
    We're more than just a store - we're building a community of skincare enthusiasts who share 
    tips, reviews, and experiences. Follow us on social media and join the conversation with 
    #MySkinBuddy.
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <button 
      className="bg-[#f18526] hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium"
      style={{ backgroundColor: '#f18526' }}
    >
      Follow on Instagram
    </button>
    <button 
      className="bg-[#539d68] hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium"
      style={{ backgroundColor: '#539d68' }}
    >
      Join Our Facebook Group
    </button>
  </div>
</section>
    </div>
  )
}

export default About
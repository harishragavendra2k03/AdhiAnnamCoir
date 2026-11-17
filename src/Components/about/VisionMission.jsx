import React from 'react';

const VisionMission = () => {
  return (
    <section className="py-12 bg-[#EDE8DA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#183D2C]">Our Vision, Mission & Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#183D2C]">Our Vision</h3>
            <p className="text-[#183D2C]">
              To be a global leader in developing sustainable, high‑quality coir solutions that improve everyday living, support responsible environmental practices, and empower communities through eco‑friendly products.
            </p>
          </div>
          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#183D2C]">Our Mission</h3>
            <p className="text-[#183D2C]">
              To innovate and deliver advanced coir‑based products that ensure sustainability, promote customer satisfaction, and strengthen communities by supporting responsible production methods, environmental stewardship, and reliable, high‑performance solutions.
            </p>
          </div>
          {/* Values Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#183D2C]">Our Values</h3>
            <ul className="list-disc list-inside space-y-2 text-[#183D2C]">
              <li>Sustainability</li>
              <li>Innovation</li>
              <li>Quality</li>
              <li>Customer Satisfaction</li>
              <li>Integrity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

import React from 'react';
import teamData from '../../pages/about/managementTeam.json';

const Team = () => {
  return (
    <section className="py-12 bg-[#EDE8DA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#183D2C]">Management Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 text-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-[#183D2C]">{member.name}</h3>
              <p className="text-[#183D2C] mb-2">{member.title}</p>
              <p className="text-sm text-[#183D2C]">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import React from 'react';
import { useMembers } from '../context/MemberContext';
import DashboardNavbar from '../components/DashboardNavbar';
import MemberCard from '../components/MemberCard';
import { Star } from 'lucide-react';

export default function Shortlist() {
  const { members, shortlistedIds } = useMembers();
  const shortlistedMembers = members.filter(m => shortlistedIds.includes(m.id));

  return (
    <main className="pb-20 bg-[#f5f6f8] min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      <DashboardNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Star className="w-5 h-5 text-accent" /> Your Shortlisted Profiles
        </h2>
        <div className="space-y-4">
          {shortlistedMembers.length > 0 ? (
            shortlistedMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center flex flex-col items-center">
              <Star className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your Shortlist is Empty</h3>
              <p className="text-gray-500 max-w-md">Keep track of profiles you like by clicking the star icon. They will appear here for easy access later.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

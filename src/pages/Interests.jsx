import React from 'react';
import { useMembers } from '../context/MemberContext';
import DashboardNavbar from '../components/DashboardNavbar';
import MemberCard from '../components/MemberCard';
import { Heart } from 'lucide-react';

export default function Interests() {
  const { members, interestedIds } = useMembers();
  const interestedMembers = members.filter(m => interestedIds.includes(m.id));

  return (
    <main className="pb-20 bg-[#f5f6f8] min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      <DashboardNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" /> Members You're Interested In
        </h2>
        <div className="space-y-4">
          {interestedMembers.length > 0 ? (
            interestedMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center flex flex-col items-center">
              <Heart className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Interests Yet</h3>
              <p className="text-gray-500 max-w-md">You haven't shown interest in any members. Browse the dashboard and click the heart icon on members you like!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

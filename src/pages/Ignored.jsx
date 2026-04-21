import React from 'react';
import { useMembers } from '../context/MemberContext';
import DashboardNavbar from '../components/DashboardNavbar';
import MemberCard from '../components/MemberCard';
import { Ban } from 'lucide-react';

export default function Ignored() {
  const { members, ignoredIds, toggleIgnore } = useMembers();
  const ignoredMembers = members.filter(m => ignoredIds.includes(m.id));

  return (
    <main className="pb-20 bg-[#f5f6f8] min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      <DashboardNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Ban className="w-5 h-5 text-gray-600" /> Ignored Users
        </h2>
        <div className="space-y-4">
          {ignoredMembers.length > 0 ? (
            ignoredMembers.map((member) => (
              <div key={member.id} className="relative">
                <div className="opacity-60 pointer-events-none">
                  <MemberCard member={member} />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg text-center z-10 border border-gray-200">
                  <p className="text-sm text-gray-700 font-medium mb-3">You have ignored this user.</p>
                  <button 
                    onClick={() => toggleIgnore(member.id)}
                    className="text-xs bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full font-medium transition-colors"
                  >
                    Unignore User
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center flex flex-col items-center">
              <Ban className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Ignored Users</h3>
              <p className="text-gray-500 max-w-md">Users you choose to ignore will appear here. They will be hidden from your main searches and recommendations.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'login';
  const [religion, setReligion] = useState('');

  const isRegister = type === 'register';
  const isMembers = type === 'members';

  let title = 'Account Login';
  let subtitle = 'Sign in to access your profile';
  let btnText = 'Sign In';

  if (isRegister) {
    title = 'Create an Account';
    subtitle = 'Start your forever journey';
    btnText = 'Register';
  } else if (isMembers) {
    title = 'Member Access';
    subtitle = 'Sign in to view active members';
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login: just redirect to active members
    navigate('/active-members');
  };

  return (
    <main className="min-h-screen pt-28 pb-20 bg-canvas flex items-center justify-center">
      <div className={`${isRegister ? 'max-w-lg' : 'max-w-md'} w-full px-6 transition-all duration-300`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-primary mb-2">{title}</h1>
            <p className="text-gray-500">{subtitle}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            
            {isRegister && (
              <>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-1">On Behalf</label>
                  <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm bg-white">
                    <option>Self</option>
                    <option>Son</option>
                    <option>Daughter</option>
                    <option>Brother</option>
                    <option>Sister</option>
                    <option>Friend</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-1">First Name</label>
                    <input type="text" placeholder="First Name" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Last Name</label>
                    <input type="text" placeholder="Last Name" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Gender</label>
                    <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm bg-white">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Date Of Birth</label>
                    <input type="text" placeholder="DD/MM/YYYY" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" />
                  </div>
                </div>
              </>
            )}

            <div className={isRegister ? "grid grid-cols-2 gap-3" : "space-y-4"}>
              <div>
                <label className={`block font-semibold text-gray-700 ${isRegister ? 'text-[11px] uppercase tracking-wider mb-1' : 'text-sm mb-1'}`}>Email Address</label>
                <input 
                  type="email" 
                  required
                  className={`w-full ${isRegister ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'} rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white`} 
                  placeholder={isRegister ? "Email address" : "Enter your email"} 
                />
              </div>
              
              {isRegister ? (
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Religion</label>
                  {religion === 'Other' ? (
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Enter Religion" 
                        autoFocus
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm pr-8 bg-white" 
                      />
                      <button 
                        type="button" 
                        onClick={() => setReligion('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <select 
                      value={religion}
                      onChange={(e) => setReligion(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select Religion</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Christian">Christian</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Jain">Jain</option>
                      <option value="Other">Others</option>
                    </select>
                  )}
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                  <input 
                    type="password" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white" 
                    placeholder="Enter your password" 
                  />
                </div>
              )}
            </div>

            {isRegister && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-1 mt-1">Password</label>
                  <input 
                    type="password" 
                    required
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white" 
                    placeholder="••••••••" 
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Minimum 8 characters</p>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-1 mt-1">Confirm password</label>
                  <input 
                    type="password" 
                    required
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white" 
                    placeholder="••••••••" 
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Minimum 8 characters</p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-sm pt-2">
              <label className={`flex items-center gap-2 ${isRegister ? 'text-gray-500 text-xs' : 'text-gray-600'}`}>
                <input type="checkbox" className="rounded text-primary focus:ring-primary" required={isRegister} />
                {isRegister ? (
                  <span>By signing up you agree to our <a href="#" className="text-accent hover:underline">terms and conditions.</a></span>
                ) : (
                  "Remember me"
                )}
              </label>
              {!isRegister && <a href="#" className="text-primary hover:text-primary-hover font-medium">Forgot Password?</a>}
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary-hover text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all mt-4"
            >
              {btnText}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            {isRegister ? (
              <>Already have an account? <Link to="/login?type=login" className="text-accent font-semibold hover:text-accent-dark">Sign In</Link></>
            ) : (
              <>Don't have an account? <Link to="/login?type=register" className="text-accent font-semibold hover:text-accent-dark">Register Free</Link></>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

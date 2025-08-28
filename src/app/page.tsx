'use client';

import Image from 'next/image';
import Link from 'next/link';
import AuthGate from '@/components/AuthGate';

export default function Home() {
  return (
    <AuthGate>
      <div className="bg-gray-950 text-gray-100 antialiased">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-row items-center justify-center min-h-screen">
        <div>
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="max-w-lg mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                Explore our introductory materials that showcase the future of capital markets infrastructure. 
                These interactive demos illustrate the problems with current systems, our innovative solutions, 
                and the strategic approach to rebuilding financial technology from the ground up.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* The Problem Card */}
            <Link href="/problem" className="group block">
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 card-glow">
                <div className="flex items-center justify-center w-16 h-16 bg-violet-500/10 rounded-xl mb-6 mx-auto">
                  <svg className="w-12 h-12 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 gradient-text">
                  The Problem
                </h2>
                <p className="text-gray-400 leading-relaxed text-center mb-8">
                  An in-depth analysis of the fundamental issues plaguing today&apos;s capital markets technology infrastructure.
                </p>
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300 group-hover:from-violet-500 group-hover:to-purple-500 button-glow">
                  Explore the Problem →
                </div>
              </div>
            </Link>

            {/* Strategy Card */}
            <Link href="/strategy" className="group block">
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 card-glow">
                <div className="flex items-center justify-center w-16 h-16 bg-violet-500/10 rounded-xl mb-6 mx-auto">
                  <Image src="/abpurple.svg" alt="AirBooks Logo" width={48} height={48} className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 gradient-text">
                  AirBooks Strategy
                </h2>
                <p className="text-gray-400 leading-relaxed text-center mb-8">
                  Our comprehensive strategy for rebuilding capital markets infrastructure while building best-in-class applications.
                </p>
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300 group-hover:from-violet-500 group-hover:to-purple-500 button-glow">
                  View Strategy →
                </div>
              </div>
            </Link>

            {/* OMEGA Protocol Card */}
            <Link href="/protocol" className="group block">
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 card-glow">
                <div className="flex items-center justify-center w-16 h-16 bg-violet-500/10 rounded-xl mb-6 mx-auto">
                  <Image src="/omegaicon.svg" alt="OMEGA Protocol Icon" width={48} height={48} className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 gradient-text">
                  OMEGA Protocol
                </h2>
                <p className="text-gray-400 leading-relaxed text-center mb-8">
                  Interactive demonstration of the OMEGA Protocol architecture and its three-pillar approach to market infrastructure.
                </p>
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300 group-hover:from-violet-500 group-hover:to-purple-500 button-glow">
                  Discover OMEGA →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </AuthGate>
  );
}

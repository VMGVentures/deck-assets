'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import AuthGate from '@/components/AuthGate';

export default function Strategy() {
  const [activeTab, setActiveTab] = useState('overview');

  const showTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <AuthGate>
      <div className="bg-gray-950 text-gray-100 antialiased relative min-h-screen px-6 py-8">
      <Navigation currentPage="Strategy" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-sky-100 tracking-tight">
            <Image 
              src="/ablogo.svg" 
              alt="AirBooks Logo" 
              width={240} 
              height={60}
              className="inline-block w-60 mr-3"
            />
          </h1>
          <p className="text-sm md:text-sm text-gray-500 font-normal">Rebuilding Capital Markets Infrastructure</p>
        </div>

        <div className="mb-16">
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow">
            <h2 className="text-3xl font-bold mb-6 flex items-center gradient-text">
              {/* <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg> */}
              Our Mission
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              AirBooks&apos; mission is to rebuild the foundational infrastructure of capital markets to be{' '}
              <strong className="text-sky-400">open</strong>,{' '}
              <strong className="text-sky-400">competitive</strong>, and{' '}
              <strong className="text-sky-400">participant-controlled</strong> while simultaneously building{' '}
              <strong className="text-sky-400">best-in-class workflow applications</strong> that operate on it. 
              We achieve this by catalyzing a new, open data exchange standard called OMEGA. Our ultimate success 
              is measured by earning our customers&apos; business through superior products, not by trapping them in a closed ecosystem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-red-400">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
              The Current Problem
            </h3>
            <p className="text-gray-400 mb-6">Capital markets operate on antiquated, monopolistic infrastructure that creates critical pain points:</p>
            <ul className="space-y-3">
              <li className="text-gray-400"><strong className="text-red-400">Vendor Lock-In:</strong> Lack of alternatives leads to stagnant technology and high fees</li>
              <li className="text-gray-400"><strong className="text-red-400">Loss of Data Sovereignty:</strong> Participants don&apos;t own their most valuable asset</li>
              <li className="text-gray-400"><strong className="text-red-400">Failed Internal Solutions:</strong> Consortiums consistently fail due to lack of product expertise</li>
              <li className="text-gray-400"><strong className="text-red-400">Integration Nightmares:</strong> Siloed data makes modern system integration expensive</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-emerald-400">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              The AirBooks Solution
            </h3>
            <p className="text-gray-400 mb-6">We decouple foundational infrastructure from applications to create an open, competitive ecosystem:</p>
            <ul className="space-y-3">
              <li className="text-gray-400"><strong className="text-emerald-400">Open Foundation:</strong> OMEGA protocol creates shared utility for all participants</li>
              <li className="text-gray-400"><strong className="text-emerald-400">Data Ownership:</strong> Firms retain absolute control over their data</li>
              <li className="text-gray-400"><strong className="text-emerald-400">Competitive Applications:</strong> Multiple vendors compete on product quality</li>
              <li className="text-gray-400"><strong className="text-emerald-400">No Lock-In:</strong> Customers always have choice and exit options</li>
              <li className="text-gray-400"><strong className="text-emerald-400">Innovation:</strong> We build best in class applications on top of OMEGA, plugging gaps that have plagued the market for years</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow margin-bottom-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gradient-text">
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Our Two-Part Strategy
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-8 bg-gray-800/30 p-2 rounded-xl">
              <button 
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'overview' 
                    ? 'bg-gradient-to-r from-sky-600 to-sky-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => showTab('overview')}
              >
                Strategy Overview
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'omega' 
                    ? 'bg-gradient-to-r from-sky-600 to-sky-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => showTab('omega')}
              >
                Part A: OMEGA Foundation
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'airbooks' 
                    ? 'bg-gradient-to-r from-sky-600 to-sky-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => showTab('airbooks')}
              >
                Part B: AirBooks Applications
              </button>
            </div>

            {activeTab === 'overview' && (
              <div className="tab-content">
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Our strategy decouples the foundational infrastructure from the applications that run on it, creating a virtuous cycle of innovation and competition.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-sky-400">OMEGA Foundation</h3>
                    <p className="text-gray-400">Open, shared utility for capital markets with participant-owned data and transparent governance</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-sky-400">AirBooks Applications</h3>
                    <p className="text-gray-400">Best-in-class workflow applications that win through superior user experience and innovation</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'omega' && (
              <div className="tab-content">
                <h3 className="text-2xl font-bold mb-4 text-sky-400">OMEGA - The Open Foundation</h3>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  OMEGA is not an application; it is an open, shared utility for capital markets. It is a set of data contracts, APIs, and governance policies that form a common language for the industry.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-emerald-400">Core Principles:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-400">
                    <strong className="text-sky-400">Participant-Owned Data:</strong> Each firm retains absolute ownership and granular control over who can access their data and for what purpose.
                  </li>
                  <li className="text-gray-400">
                    <strong className="text-sky-400">Governed by Participants:</strong> The rules of the exchange are transparent and managed by a consortium of its members.
                  </li>
                  <li className="text-gray-400">
                    <strong className="text-sky-400">Built on Open Standards:</strong> The underlying data model is a robust, normalized synthesis of industry standards like FIBO, ISO 20022, and FIX.
                  </li>
                </ul>

                <div className="bg-emerald-900/20 border border-emerald-800 rounded-xl p-6 text-center">
                  <p className="text-emerald-300 italic">
                    As the creators, AirBooks will be the main operating entity to manage OMEGA on behalf of the Governance Board.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'airbooks' && (
              <div className="tab-content">
                <h3 className="text-2xl font-bold mb-4 text-sky-400">AirBooks - The Premier Application Suite</h3>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  AirBooks will be the first and best &quot;third-party&quot; application provider building on the OMEGA standard.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-emerald-400">Products in Development:</h4>
                <ul className="space-y-3 mb-8 text-gray-400">
                  <li><strong className="text-sky-400">AirBooks Allocations:</strong> Modern solution for bond deal allocation workflow</li>
                  <li><strong className="text-sky-400">AirBooks OMS:</strong> Buy-side order management system</li>
                  <li><strong className="text-sky-400">Future Applications:</strong> Expanding suite of workflow tools</li>
                </ul>

                <div className="text-center mb-8">
                  <img
                    src="/apps.png"
                    alt="AirBooks Applications Overview"
                    // width={800}
                    // height={400}
                    className="max-h-96 max-w-6xl mx-auto my-20 mb-16 rounded-xl shadow-2xl mb-8"
                  />
                </div>

                <h4 className="text-xl font-semibold mb-4 text-emerald-400">Our Competitive Advantage:</h4>
                <div className="bg-emerald-900/20 border border-emerald-800 rounded-xl p-6 text-center">
                  <p className="text-emerald-300 italic">
                    We win by having a superior product, not a captive market. Because OMEGA is open, our customers always have a choice. This forces us to relentlessly focus on user experience and innovation.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow">
            <h2 className="text-3xl font-bold mb-6 flex items-center gradient-text">
              Why This Model Wins
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              The AirBooks strategy creates sustainable competitive advantages for all participants in the ecosystem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/30 rounded-xl p-6 text-left border border-gray-700">
                <h4 className="text-lg font-bold mb-3 flex items-center justify-left text-sky-400">
                  No Lock-In
                </h4>
                <p className="text-gray-400 text-sm">Customers can switch providers, forcing continuous innovation and competitive pricing</p>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-6 text-left border border-gray-700">
                <h4 className="text-lg font-bold mb-3 flex items-center justify-left text-sky-400">
                  Data Ownership
                </h4>
                <p className="text-gray-400 text-sm">Participants retain control of their most valuable asset - their data</p>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-6 text-left border border-gray-700">
                <h4 className="text-lg font-bold mb-3 flex items-center justify-left text-sky-400">
                  Innovation Acceleration
                </h4>
                <p className="text-gray-400 text-sm">Open platform enables rapid development and deployment of new solutions</p>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-6 text-left border border-gray-700">
                <h4 className="text-lg font-bold mb-3 flex items-center justify-left text-sky-400">
                  Cost Reduction
                </h4>
                <p className="text-gray-400 text-sm">Competition drives down costs while improving quality and service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AuthGate>
  );
}

'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import AuthGate from '@/components/AuthGate';

export default function Strategy() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImage, setCurrentImage] = useState(0);

  const showTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const images = [
    { src: '/screenshot1.png', alt: 'AirBooks Allocations Interface' },
    { src: '/screenshot3.png', alt: 'AirBooks OMS Add-On' },
    { src: '/screenshot2.png', alt: 'AirBooks Future Applications' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <AuthGate>
      <div className="bg-gray-950 text-gray-100 antialiased relative min-h-screen px-6 py-8">
      <Navigation currentPage="Strategy" color="blue" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-blue-100 tracking-tight">
            <Image 
              src="/ablogo.svg" 
              alt="AirBooks Logo" 
              width={240} 
              height={60}
              className="inline-block w-60 mr-3"
            />
          </h1>
          <p className="text-md md:text-md text-gray-500 font-normal">Rebuilding Capital Markets Infrastructure</p>
        </div>

          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow item-stretch mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-400">
              {/* <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg> */}
              Our Mission
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              AirBooks&apos; mission is to rebuild the foundational infrastructure of capital markets to be{' '}
              <strong className="text-gray-200">open</strong>,{' '}
              <strong className="text-gray-200">competitive</strong>, and{' '}
              <strong className="text-gray-200">participant-controlled</strong> while simultaneously building{' '}
              <strong className="text-gray-200">best-in-class workflow applications</strong> that operate on it. 
              We achieve this by catalyzing a new, open data exchange standard called OMEGA. Our ultimate success 
              is measured by earning our customers&apos; business through superior products, not by trapping them in a closed ecosystem.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-400">
              {/* <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg> */}
              The AirBooks Story
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              After building solutions inside the biggest capital markets organizations for over a decade, the AirBooks team is finally stepping up to lead the market forward while solving the core underlying problems
            </p>
            <ul className="space-y-3">
              <li className="text-gray-400"><strong className="text-gray-200">Ideal Experience:</strong> The AirBooks Team represents the highest pedigree, drawing from extensive experience in the primary capital markets, technology, design and data architecture</li>
              <li className="text-gray-400"><strong className="text-gray-200">Team Synergies:</strong> This experience culminates in creating solutions that are politically astute, technically elegant and driven by a strong product vision</li>
              <li className="text-gray-400"><strong className="text-gray-200">First with OMEGA:</strong> As the architects of OMEGA, AirBooks is building products that will be the first applications on the protocol of the future</li>
              <li className="text-gray-400"><strong className="text-gray-200">Innovation:</strong> Building on the team&apos;s historical track record of being key innovators in the market, AirBooks is creating solutions that fill massive gaps and solve key pain points in today&apos;s market</li>
              <li className="text-gray-400"><strong className="text-gray-200">Build from Within:</strong> AirBooks maintains core strategic partnerships to ensure the future of the markets are defined in collaboration with key participants</li>
            </ul>
          </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
        </div> */}

        <div className="flex flex-col gap-16">
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow margin-bottom-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center text-blue-400">
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Our Two-Part Strategy
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-8 bg-gray-800/30 p-2 rounded-xl">
              <button 
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'overview' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => showTab('overview')}
              >
                Strategy Overview
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'omega' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => showTab('omega')}
              >
                Part A: OMEGA Foundation
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'airbooks' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-600 text-white'
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
                    <h3 className="text-xl font-bold mb-3 text-gray-200">OMEGA Foundation</h3>
                    <p className="text-gray-400">Open, shared utility for capital markets with participant-owned data and transparent governance</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-gray-200">AirBooks Applications</h3>
                    <p className="text-gray-400">Best-in-class workflow applications that win through superior user experience and innovation</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'omega' && (
              <div className="tab-content">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">OMEGA - The Open Foundation</h3>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  OMEGA is not an application; it is an open, shared utility for capital markets. It is a set of data contracts, APIs, and governance policies that form a common language for the industry.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Core Principles:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-400">
                    <strong className="text-gray-200">Participant-Owned Data:</strong> Each firm retains absolute ownership and granular control over who can access their data and for what purpose.
                  </li>
                  <li className="text-gray-400">
                    <strong className="text-gray-200">Governed by Participants:</strong> The rules of the exchange are transparent and managed by a consortium of its members.
                  </li>
                  <li className="text-gray-400">
                    <strong className="text-gray-200">Built on Open Standards:</strong> The underlying data model is a robust, normalized synthesis of industry standards like FIBO, ISO 20022, and FIX.
                  </li>
                </ul>

                <div className="bg-blue-950/20 border border-blue-900 rounded-xl p-6 text-center">
                  <p className="text-blue-300 italic">
                    As the creators, AirBooks will be the main operating entity to manage OMEGA on behalf of the Governance Board.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'airbooks' && (
              <div className="tab-content">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">AirBooks - The Premier Application Suite</h3>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  AirBooks will be the first and best &quot;third-party&quot; application provider building on the OMEGA standard.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Products in Development:</h4>
                <ul className="space-y-3 mb-8 text-gray-400">
                  <li><strong className="text-gray-200">AirBooks Allocations:</strong> Modern solution for bond deal allocation workflow</li>
                  <li><strong className="text-gray-200">AirBooks OMS Add-On:</strong> Buy-side primary order management system</li>
                  <li><strong className="text-gray-200">Future Applications:</strong> Expanding suite of workflow tools</li>
                </ul>

                <div className="relative mb-8">
                  {/* Carousel Container */}
                  <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-800/30">
                    <div className="relative h-96 md:h-[32rem]">
                      <img
                        src={images[currentImage].src}
                        alt={images[currentImage].alt}
                        className="w-full h-full object-contain rounded-xl"
                      />
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                        aria-label="Previous image"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                        aria-label="Next image"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Dot Indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImage 
                            ? 'bg-blue-400 scale-110' 
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Image Caption */}
                  <div className="text-center mt-4">
                    <p className="text-gray-400 text-sm">{images[currentImage].alt}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      {currentImage + 1} of {images.length}
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-4 text-blue-400">Our Competitive Advantage:</h4>
                <div className="bg-blue-950/20 border border-blue-900 rounded-xl p-6 text-center">
                  <p className="text-blue-300 italic">
                    We win by having a superior product, not by holding the market hostage. Because OMEGA is open, our customers always have a choice. This forces AirBooks to relentlessly focus on user experience and innovation, building best-in-class products.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-blue-400">
              Why This Model Wins
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              The AirBooks strategy creates sustainable competitive advantages for all participants in the ecosystem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/30 rounded-xl p-6 text-left border border-gray-700">
                <h4 className="text-lg font-bold mb-3 flex items-center justify-left text-gray-200">
                  No Lock-In
                </h4>
                <p className="text-gray-400 text-sm">Customers can switch providers, forcing continuous innovation and competitive pricing</p>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-6 text-left border border-gray-700">
                <h4 className="text-lg font-bold mb-3 flex items-center justify-left text-gray-200">
                  Data Ownership
                </h4>
                <p className="text-gray-400 text-sm">Participants retain control of their most valuable asset - their data</p>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-6 text-left border border-gray-700">
                <h4 className="text-lg font-bold mb-3 flex items-center justify-left text-gray-200">
                  Innovation Acceleration
                </h4>
                <p className="text-gray-400 text-sm">Open platform enables rapid development and deployment of new solutions</p>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-6 text-left border border-gray-700">
                <h4 className="text-lg font-bold mb-3 flex items-center justify-left text-gray-200">
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

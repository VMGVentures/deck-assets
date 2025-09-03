'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AuthGate from '@/components/AuthGate';

export default function Problem() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <AuthGate>
      <div className="bg-gray-950 text-gray-100 antialiased relative min-h-screen px-6 py-8">
      <Navigation currentPage="Problem" />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-16 text-violet-100 tracking-tight">
          The Problem
        </h1>
        
        {/* First Card: Accordion with Images */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 mb-8 card-glow">
          <div className="space-y-4">
            <div className="border border-gray-800 rounded-xl overflow-hidden accordion-glow">
              <button
                className={`w-full px-6 py-4 text-white text-left flex items-center justify-between cursor-pointer transition-all duration-300 accordion-header ${
                  activeAccordion === 0 
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600' 
                    : 'bg-gray-800/50 hover:bg-gray-800'
                }`}
                onClick={() => toggleAccordion(0)}
              >
                <h3 className="text-lg font-semibold flex-1 pr-4 leading-tight">
                  Capital markets technology was not built for scale
                </h3>
                <span 
                  className="text-base transition-transform duration-300"
                  style={{
                    transform: activeAccordion === 0 ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  ▼
                </span>
              </button>
              <div 
                className={`accordion-content overflow-hidden transition-all duration-300 ${
                  activeAccordion === 0 ? 'active' : ''
                }`}
                style={{
                  maxHeight: activeAccordion === 0 ? '1000px' : '0'
                }}
              >
                <div className="p-6 bg-gray-900/30">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Image Column */}
                    <div className="text-center">
                      <img
                        src="/image-01.jpeg"
                        alt="Capital markets technology scale diagram"
                        // width={400}
                        // height={300}
                        className="mx-auto rounded-xl shadow-2xl"
                      />
                    </div>
                    
                    {/* Bullet Lists Column */}
                    <div className="space-y-6">
                      {/* Small, uncoordinated blocks */}
                      <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700">
                        <h4 className="text-lg font-semibold text-violet-400 mb-3">Small, uncoordinated blocks</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            <span>Too many disconnected products</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            <span>Solutions chasing problems they cant solve</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            <span>No interoperability: Product &apos;swivel-chairing&apos;</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Sitting on Uncoordinated stacking of Blocks */}
                      <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700">
                        <h4 className="text-lg font-semibold text-violet-400 mb-3">Sitting on Uncoordinated stacking of Blocks</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            <span>No market-wide end-to-end solutions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            <span>No standardization</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            <span>Stifling innovation at scale</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Sitting on Existential Risk */}
                      <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700">
                        <h4 className="text-lg font-semibold text-violet-400 mb-3">Sitting on Existential Risk</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            <span>Ultimate support is too concentrated</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            <span>With High Risk of collapse</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-800 rounded-xl overflow-hidden accordion-glow">
              <button
                className={`w-full px-6 py-4 text-gray-100 text-left flex items-center justify-between cursor-pointer transition-all duration-300 accordion-header ${
                  activeAccordion === 1 
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600' 
                    : 'bg-gray-800/50 hover:bg-gray-800'
                }`}
                onClick={() => toggleAccordion(1)}
              >
                <h3 className="text-lg font-semibold flex-1 pr-4 leading-tight">
                  To engage with a Vendor today is to engage in their full technology stack
                </h3>
                <span 
                  className="text-base transition-transform duration-300"
                  style={{
                    transform: activeAccordion === 1 ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  ▼
                </span>
              </button>
              <div 
                className={`accordion-content overflow-hidden transition-all duration-300 ${
                  activeAccordion === 1 ? 'active' : ''
                }`}
                style={{
                  maxHeight: activeAccordion === 1 ? '1000px' : '0'
                }}
              >
                <div className="p-6 bg-gray-900/30">
                  <div className="text-center">
                    <img
                      src="/image-02.jpeg"
                      alt="Capital markets technology scale diagram"
                    //   width={400}
                    //   height={300}
                      className="max-h-122 mx-auto rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-800 rounded-xl overflow-hidden accordion-glow">
              <button
                className={`w-full px-6 py-4 text-gray-100 text-left flex items-center justify-between cursor-pointer transition-all duration-300 accordion-header ${
                  activeAccordion === 2 
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600' 
                    : 'bg-gray-800/50 hover:bg-gray-800'
                }`}
                onClick={() => toggleAccordion(2)}
              >
                <h3 className="text-lg font-semibold flex-1 pr-4 leading-tight">
                  As the pendulum swings back towards 'build' from 'buy', parallels of the transition to Web3 emerge
                </h3>
                <span 
                  className="text-base transition-transform duration-300"
                  style={{
                    transform: activeAccordion === 2 ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  ▼
                </span>
              </button>
              <div 
                className={`accordion-content overflow-hidden transition-all duration-300 ${
                  activeAccordion === 2 ? 'active' : ''
                }`}
                style={{
                  maxHeight: activeAccordion === 2 ? '1000px' : '0'
                }}
              >
                <div className="p-6 bg-gray-900/30">
                  <div className="text-center mb-8">
                    <img
                      src="/web123.svg"
                      alt="Capital markets technology scale diagram"
                    //   width={600}
                    //   height={400}
                      className="max-h-120 mx-auto rounded-xl shadow-2xl"
                    />
                  </div>
                  
                  {/* Three Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* Column 1 */}
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-violet-400 mr-2">•</span>
                          <span>Analog Data Community</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-violet-400 mr-2">•</span>
                          <span>Read-Only from central nodes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-violet-400 mr-2">•</span>
                          <span>Original &quot;Build&quot; world</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-violet-400 mr-2">•</span>
                          <span>Digital Data Monopoly</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-violet-400 mr-2">•</span>
                          <span>Read & Write from/to central nodes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-violet-400 mr-2">•</span>
                          <span>Current &quot;Buy&quot; world</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Column 3 */}
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-violet-400 mr-2">•</span>
                          <span>Digital Data Community</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-violet-400 mr-2">•</span>
                          <span>Read & Write across all nodes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-violet-400 mr-2">•</span>
                          <span>Mix of Build & Buy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card: The Result */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">The Result</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-800/30 rounded-xl border-l-4 border-violet-500 transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/50">
              <div className="text-xl font-bold text-gray-100 mb-3">Outsized Risk</div>
              <div className="text-gray-400 leading-relaxed">Internal and external exposure to antiquated ecosystems</div>
            </div>
            
            <div className="p-6 bg-gray-800/30 rounded-xl border-l-4 border-violet-500 transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/50">
              <div className="text-xl font-bold text-gray-100 mb-3">Vendor Lock-In</div>
              <div className="text-gray-400 leading-relaxed">Lack of alternatives leads to stagnant technology and high fees</div>
            </div>
            
            <div className="p-6 bg-gray-800/30 rounded-xl border-l-4 border-violet-500 transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/50">
              <div className="text-xl font-bold text-gray-100 mb-3">Loss of Data Sovereignty</div>
              <div className="text-gray-400 leading-relaxed">Participants don&apos;t always have technical ownership their most valuable asset</div>
            </div>
            
            <div className="p-6 bg-gray-800/30 rounded-xl border-l-4 border-violet-500 transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/50">
              <div className="text-xl font-bold text-gray-100 mb-3">Lack of Interoperability</div>
              <div className="text-gray-400 leading-relaxed mb-2">Integration nightmares</div>
              <div className="text-gray-400 leading-relaxed mb-2">Siloed data makes modern system integration expensive</div>
              <div className="text-gray-400 leading-relaxed">Missed opportunity to harness innovation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AuthGate>
  );
}

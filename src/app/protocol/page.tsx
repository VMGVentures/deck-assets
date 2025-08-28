'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

interface Deal {
  name: string;
  bookrunner: string;
  status: string;
  allowList?: string[];
}

interface Organization {
  type: string;
  permissions: string[];
}

interface PolicyResult {
  allowed: boolean;
  reason: string;
  className: string;
}

export default function Protocol() {
  const [selectedOrg, setSelectedOrg] = useState('JPMorganChase');
  const [selectedAction, setSelectedAction] = useState('read');
  const [selectedResource, setSelectedResource] = useState('DEAL_2024_001');
  const [policyResult, setPolicyResult] = useState<PolicyResult | null>(null);
  const [workflowVisible, setWorkflowVisible] = useState(false);
  const [workflowStep, setWorkflowStep] = useState(0);

  const dealData: Record<string, Deal> = useMemo(() => ({
    'DEAL_2024_001': {
      name: 'Tesla Bond Deal (Private)',
      bookrunner: 'JPMorganChase',
      status: 'private',
      allowList: ['BlackRock', 'Vanguard']
    },
    'DEAL_2024_002': {
      name: 'Apple Bond Deal (Public)',
      bookrunner: 'GoldmanSachs',
      status: 'public',
      allowList: undefined
    }
  }), []);

  const organizations: Record<string, Organization> = useMemo(() => ({
    'JPMorganChase': { type: 'bank', permissions: ['create', 'read', 'write'] },
    'BlackRock': { type: 'buyside', permissions: ['read'] },
    'Vanguard': { type: 'buyside', permissions: ['read'] },
    'Fidelity': { type: 'buyside', permissions: ['read'] }
  }), []);

  const evaluatePolicy = useCallback(() => {
    const deal = dealData[selectedResource];
    const orgData = organizations[selectedOrg];
    
    const policyDecision = {
      allowed: false,
      reason: '',
      className: 'error'
    };
    if (selectedAction === 'create' && orgData.type !== 'bank') {
      policyDecision.reason = 'DENIED: Only banks can create deals';
    } else if (deal.bookrunner === selectedOrg) {
      policyDecision.allowed = true;
      policyDecision.reason = 'ALLOWED: Bookrunner has full access';
      policyDecision.className = 'success';
    } else if (deal.status === 'private' && deal.allowList && !deal.allowList.includes(selectedOrg)) {
      policyDecision.reason = 'DENIED: Not in deal allow list';
    } else if (deal.status === 'public' && selectedAction === 'read') {
      policyDecision.allowed = true;
      policyDecision.reason = 'ALLOWED: Public deal, read access';
      policyDecision.className = 'success';
    } else if (selectedAction === 'write' && orgData.type !== 'bank') {
      policyDecision.reason = 'DENIED: Only bookrunner can write allocations';
    } else if (deal.allowList && deal.allowList.includes(selectedOrg) && selectedAction === 'read') {
      policyDecision.allowed = true;
      policyDecision.reason = 'ALLOWED: In custom ACL allow list';
      policyDecision.className = 'success';
    } else {
      policyDecision.reason = 'DENIED: Default policy blocks access';
    }
    
    setPolicyResult(policyDecision);
  }, [selectedOrg, selectedAction, selectedResource, dealData, organizations]);

  const simulateWorkflow = () => {
    setWorkflowVisible(true);
    setWorkflowStep(0);
    
    setTimeout(() => setWorkflowStep(1), 1000);
    setTimeout(() => setWorkflowStep(2), 2000);
    setTimeout(() => {
      alert('Workflow Complete! The application successfully accessed OMEGA data through the three-pillar architecture.');
    }, 2500);
  };

  useEffect(() => {
    evaluatePolicy();
  }, [selectedOrg, selectedAction, selectedResource, evaluatePolicy]);

  const deal = dealData[selectedResource];

  return (
    <div className="bg-gray-950 text-gray-100 antialiased relative min-h-screen px-6 py-8">
      <Navigation currentPage="Protocol" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-0 text-center">
            <Image
              src="/omegalogo.svg"
              alt="Omega"
              width={300}
              height={60}
              className="inline"
            />
          </h1>
          <span className="text-sm text-gray-600">Open Market Exchange, Governance & Access</span>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center text-violet-400">
            <svg className="w-6 h-6 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Three-Pillar Architecture
          </h2>
          <p className="text-gray-400 mb-8">
            OMEGA separates concerns into three distinct pillars, each with specific responsibilities for data sovereignty and access control.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-violet-400">EXCHANGE</h3>
              <p className="text-gray-400 mb-4">Data Plane</p>
              <ul className="text-gray-400 space-y-1">
                <li>Exchange API</li>
                <li>Data Contracts</li>
                <li>Data Storage</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-violet-400">GOVERNANCE</h3>
              <p className="text-gray-400 mb-4">Central Control</p>
              <ul className="text-gray-400 space-y-1">
                <li>Identity Management</li>
                <li>Default Policies</li>
                <li>OPA Engine</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-violet-400">ACCESS</h3>
              <p className="text-gray-400 mb-4">Participant Control</p>
              <ul className="text-gray-400 space-y-1">
                <li>Grant Portal</li>
                <li>Access API</li>
                <li>Custom ACLs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 card-glow">
            <h2 className="text-xl font-bold mb-4 flex items-center text-violet-400">
              <span className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </span>
              Exchange Layer
            </h2>
            <p className="mb-6 text-gray-400">
              The data plane handles all market data through standardized contracts. Every piece of information flows through the Exchange API with strict schema validation.
            </p>
            
            <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm text-gray-300">
              {`// Example Exchange Data Contract
{
  "dealId": "DEAL_2024_001",
  "bookrunner": "JPMorganChase",
  "issuer": "Tesla_Inc",
  "amount": 500000000,
  "status": "active"
}`}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 card-glow">
            <h2 className="text-xl font-bold mb-4 flex items-center text-violet-400">
              <span className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </span>
              Governance Layer
            </h2>
            <p className="mb-6 text-gray-400">
              Centralized identity and policy management using Open Policy Agent (OPA) for consistent rule enforcement across all participants.
            </p>
            
            <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm text-gray-300">
              {`// Example OPA Policy
allow = true {
  input.user == data.deal.bookrunner
}

allow = true {
  data.deal.status == "public"
  input.action == "read"
}`}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 card-glow">
            <h2 className="text-xl font-bold mb-4 flex items-center text-violet-400">
              <span className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
              </span>
              Access Layer
            </h2>
            <p className="mb-6 text-gray-400">
              Participant-controlled granular permissions through custom Access Control Lists (ACLs) and intuitive grant portals.
            </p>
            
            <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm text-gray-300">
              {`// Custom ACL Example
{
  "deal": "DEAL_2024_001",
  "allowList": [
    "BlackRock",
    "Vanguard"
  ],
  "permissions": ["read"]
}`}
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 mb-8 card-glow">
          <h2 className="text-2xl font-bold mb-4 text-violet-400">System Diagram</h2>
          <p className="text-gray-400 mb-6">Visual representation of the OMEGA Protocol architecture and data flows.</p>
          
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 text-center">
            <p className="font-bold text-gray-800">OMEGA Protocol System Architecture</p>
            <div className="mt-4">
              <img
                src="/image-04.png"
                alt="OMEGA Protocol System Architecture"
                // width={800}
                // height={400}
                className="max-h-160 mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 mb-8 card-glow">
          <h2 className="text-2xl font-bold mb-4 text-violet-400">Authorization Workflow</h2>
          <p className="text-gray-400 mb-8">See how a third-party application gets authorized to access OMEGA data through the FDX Consent Grant Flow.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800/40 border border-gray-700 border-l-4 border-l-violet-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <h4 className="font-bold text-gray-100 mb-2">App Initiation</h4>
              <p className="text-gray-400 text-sm">User clicks &quot;Connect to OMEGA&quot; in SyndicatePro</p>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 border-l-4 border-l-violet-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <h4 className="font-bold text-gray-100 mb-2">Redirect</h4>
              <p className="text-gray-400 text-sm">Redirect to OMEGA Access Grant Portal</p>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 border-l-4 border-l-violet-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <h4 className="font-bold text-gray-100 mb-2">Consent</h4>
              <p className="text-gray-400 text-sm">User reviews and grants permissions</p>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 border-l-4 border-l-violet-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <h4 className="font-bold text-gray-100 mb-2">Authorization</h4>
              <p className="text-gray-400 text-sm">App receives access token</p>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 card-glow">
          <h2 className="text-2xl font-bold mb-4 text-violet-400">🔧 Interactive Policy Demo</h2>
          <p className="text-gray-400 mb-8">
            Test how OMEGA&apos;s policy engine evaluates access requests based on different scenarios.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Organization</label>
              <select 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                value={selectedOrg}
                onChange={(e) => setSelectedOrg(e.target.value)}
              >
                <option value="JPMorganChase">JPMorgan Chase (Bookrunner)</option>
                <option value="BlackRock">BlackRock (Buy-side)</option>
                <option value="Vanguard">Vanguard (Buy-side)</option>
                <option value="Fidelity">Fidelity (Unauthorized)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Action</label>
              <select 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
              >
                <option value="read">Read Deal Data</option>
                <option value="write">Write Allocation</option>
                <option value="create">Create New Deal</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Resource</label>
              <select 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                value={selectedResource}
                onChange={(e) => setSelectedResource(e.target.value)}
              >
                <option value="DEAL_2024_001">Tesla Bond Deal (Private)</option>
                <option value="DEAL_2024_002">Apple Bond Deal (Public)</option>
              </select>
            </div>
          </div>
          
          <div className="flex gap-4 mb-8">
            <button 
              onClick={evaluatePolicy}
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors"
            >
              Evaluate Access
            </button>
            <button 
              onClick={simulateWorkflow}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Simulate Workflow
            </button>
          </div>
          
          {policyResult && (
            <div className={`p-6 rounded-lg mb-8 ${
              policyResult.className === 'success' 
                ? 'bg-green-900/50 border border-green-700' 
                : 'bg-red-900/50 border border-red-700'
            }`}>
              <h3 className="text-xl font-bold mb-4">
                {policyResult.allowed ? '✅ ACCESS GRANTED' : '❌ ACCESS DENIED'}
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Organization:</strong> {selectedOrg}</p>
                <p><strong>Action:</strong> {selectedAction}</p>
                <p><strong>Resource:</strong> {deal.name}</p>
                <p><strong>Policy Decision:</strong> {policyResult.reason}</p>
              </div>
              <div className="mt-4 p-4 bg-black/20 rounded-lg">
                <strong className="text-gray-200">Policy Evaluation Path:</strong>
                <div className="mt-2 space-y-1 text-sm text-gray-400">
                  <div>1. Check if user is bookrunner → {deal.bookrunner === selectedOrg ? 'YES' : 'NO'}</div>
                  <div>2. Check deal status → {deal.status.toUpperCase()}</div>
                  <div>3. Check custom ACL → {deal.allowList ? `[${deal.allowList.join(', ')}]` : 'None'}</div>
                  <div>4. Apply default market policy → {policyResult.allowed ? 'ALLOW' : 'DENY'}</div>
                </div>
              </div>
            </div>
          )}
          
          {workflowVisible && (
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4 text-violet-400">Data Flow Visualization</h3>
              <div className="flex items-center justify-between bg-gray-800/50 p-6 rounded-lg">
                <div className="text-center">
                  <strong className="block text-gray-200">Application</strong>
                  <span className="text-gray-400">SyndicatePro</span>
                </div>
                <div className="text-violet-400 text-xl">→</div>
                <div className="text-center">
                  <strong className="block text-gray-200">OPA Engine</strong>
                  <span className={`${workflowStep >= 1 ? 'text-green-400' : 'text-gray-400'}`}>
                    {workflowStep >= 1 ? 'Policy Check OK' : 'Evaluating...'}
                  </span>
                </div>
                <div className="text-violet-400 text-xl">→</div>
                <div className="text-center">
                  <strong className="block text-gray-200">Exchange API</strong>
                  <span className={`${workflowStep >= 2 ? 'text-green-400' : 'text-gray-400'}`}>
                    {workflowStep >= 2 ? 'Data Retrieved' : 'Pending...'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react'

export default function TabBar() {
  const [activeTab, setActiveTab] = useState('Commit')

  return (
    <div className="flex bg-gray-700 rounded-lg p-1 gap-3">
      <button 
        className={`px-4 py-2 rounded-md text-base font-medium transition-all ${
          activeTab === 'Commit' 
            ? 'bg-gray-600 text-white' 
            : 'text-gray-400 hover:text-gray-200'
        }`}
        onClick={() => setActiveTab('Commit')}
      >
        Commit
      </button>
      <button 
        className={`px-4 py-2 rounded-md text-base font-medium transition-all ${
          activeTab === 'Analytics' 
            ? 'bg-gray-600 text-white' 
            : 'text-gray-400 hover:text-gray-200'
        }`}
        onClick={() => setActiveTab('Analytics')}
      >
        Analytics
      </button>
      <button 
        className={`px-4 py-2 rounded-md text-base font-medium transition-all ${
          activeTab === 'Upgrade' 
            ? 'bg-gray-600 text-white' 
            : 'text-gray-400 hover:text-gray-200'
        }`}
        onClick={() => setActiveTab('Upgrade')}
      >
        Upgrade
      </button>
    </div>
  )
}
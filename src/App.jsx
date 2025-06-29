import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">UI Playground</h1>
        <p className="text-gray-300 mb-12">Your animation and component testing ground</p>
        
        {/* Test animation */}
        <motion.div
  style={{
    backgroundColor: '#3B82F6',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    display: 'inline-block',
    cursor: 'pointer'
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Test Button - Hover me!
</motion.div>
      </div>
    </div>
  )
}
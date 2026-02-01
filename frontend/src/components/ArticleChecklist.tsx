'use client'

import { useState } from 'react'

interface NewsSource {
  id: string
  name: string
}

interface NewsSourceProps {
  selectedSource: string | null
  onSelectedSourceChange: (id: string | null) => void
  onSubscribe: () => void
}

// Add new sources here
const newsSources: NewsSource[] = [
  {
    id: 'news.com.au',
    name: 'news.com.au',
  },
  {
    id: 'abc',
    name: 'abc.net.au',
  },
  {
    id: 'smh',
    name: 'smh.com.au',
  },
]

export default function ArticleChecklist({
  selectedSource,
  onSelectedSourceChange,
  onSubscribe
}: NewsSourceProps) {

  const handleSourceChange = (sourceId: string) => {
    // If clicking the same source, deselect it; otherwise select the new one
    onSelectedSourceChange(selectedSource === sourceId ? null : sourceId)
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Select News Source
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {newsSources.map((source) => {
          const isSelected = selectedSource === source.id
          return (
            <label
              key={source.id}
              className={`relative flex items-center p-6 rounded-xl border-2 cursor-pointer transition-all ${
                isSelected
                  ? 'border-primary-500 bg-primary-50 shadow-md'
                  : 'border-slate-200 hover:border-slate-300 bg-white hover:shadow-sm'
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleSourceChange(source.id)}
                className="w-5 h-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded cursor-pointer"
              />
              <div className="ml-3 flex-1">
                <p className={`text-lg font-semibold ${
                  isSelected ? 'text-slate-900' : 'text-slate-700'
                }`}>
                  {source.name}
                </p>
              </div>
              {isSelected && (
                <div className="absolute top-4 right-4">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                  </svg>
                </div>
              )}
            </label>
          )
        })}
      </div>

      {selectedSource && (
        <div className="mt-6 pt-6 border-t border-slate-200">
          <button 
            type='button'
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
            onClick={onSubscribe}
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  )
}


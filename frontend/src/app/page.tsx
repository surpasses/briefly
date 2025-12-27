'use client'

import { useState } from 'react'
import ArticleChecklist from '@/components/ArticleChecklist'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  const [deliveryMethod, setDeliveryMethod] = useState<'email' | 'phone'>('email')

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-slate-900 mb-3 tracking-tight">
            Briefly.
          </h1>
          <p className="text-xl text-slate-600">
            Your daily digest of news articles
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 space-y-8">
          {/* Contact Method Selection */}
          <ContactForm 
            deliveryMethod={deliveryMethod}
            onDeliveryMethodChange={setDeliveryMethod}
          />

          {/* Article Checklist */}
          <ArticleChecklist />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Select your preferred delivery method and news sources to receive daily summaries at 8 am.</p>
        </div>
      </div>
    </main>
  )
}


'use client'

import { useState } from 'react'

interface ContactFormProps {
  deliveryMethod: 'email' | 'phone'
  onDeliveryMethodChange: (method: 'email' | 'phone') => void
}

export default function ContactForm({ deliveryMethod, onDeliveryMethodChange }: ContactFormProps) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How would you like to receive your digest?
        </h2>
        
        {/* Radio Buttons */}
        <div className="flex gap-6 mb-6">
          <label className="flex items-center cursor-pointer group">
            <input
              type="radio"
              name="deliveryMethod"
              value="email"
              checked={deliveryMethod === 'email'}
              onChange={(e) => onDeliveryMethodChange(e.target.value as 'email' | 'phone')}
              className="w-5 h-5 text-primary-600 focus:ring-primary-500 focus:ring-2 border-gray-300"
            />
            <span className="ml-3 text-slate-700 font-medium group-hover:text-slate-900">
              Email
            </span>
          </label>
          
          <label className="flex items-center cursor-pointer group">
            <input
              type="radio"
              name="deliveryMethod"
              value="phone"
              checked={deliveryMethod === 'phone'}
              onChange={(e) => onDeliveryMethodChange(e.target.value as 'email' | 'phone')}
              className="w-5 h-5 text-primary-600 focus:ring-primary-500 focus:ring-2 border-gray-300"
            />
            <span className="ml-3 text-slate-700 font-medium group-hover:text-slate-900">
              Phone (SMS)
            </span>
          </label>
        </div>

        {/* Email Input */}
        {deliveryMethod === 'email' && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-200">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
            />
          </div>
        )}

        {/* Phone Input */}
        {deliveryMethod === 'phone' && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-200">
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+61 4XX XXX XXX"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
            />
          </div>
        )}
      </div>
    </div>
  )
}


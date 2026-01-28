'use client'

import { useState } from 'react'
import ArticleChecklist from '@/components/ArticleChecklist'
import ContactForm from '@/components/ContactForm'
import { normalise } from '@/utils/validation'

type DeliveryMethod = 'email' | 'sms'

export default function Home() {
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('email')
  const [destination, setDestination] = useState('')
  const [selectedSource, setSelectedSource] = useState<string | null>(null)

  // checks if it is possile to subscribe
  const canSubscribe = () => {
  }

  // check if sms/email already exists in db
  const existsDatabase = () => {
  }

  const addUser = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(`${apiUrl}/api/user/add`)
    console.log({ deliveryMethod, destination, selectedSource });

    const res = await fetch(`${apiUrl}/api/user/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deliveryMethod,
        destination,
        selectedSource,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("User not added:", data);
      return;
    }

    console.log("User added:", data);
  }

  const handleSubscribe = async () => {
    const normDest = normalise(destination, deliveryMethod)
  };


  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-slate-900 mb-3 tracking-tight">
            Briefly.
          </h1>
          <p className="text-xl text-slate-600">Your daily digest of news articles</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 space-y-8">
          <ContactForm
            deliveryMethod={deliveryMethod}
            onDeliveryMethodChange={setDeliveryMethod}
            destination={destination}
            onDestinationChange={setDestination}
          />

          <ArticleChecklist
            selectedSource={selectedSource}
            onSelectedSourceChange={setSelectedSource}
            onSubscribe={handleSubscribe}
          />
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Select your preferred delivery method and news sources to receive daily summaries at 8 am.</p>
        </div>
      </div>
    </main>
  )
}

'use client'

import { useState } from 'react'
import ArticleChecklist from '@/components/ArticleChecklist'
import ContactForm from '@/components/ContactForm'
import { isValid, normalise } from '@/utils/validation'
import ResponseDialog from '@/components/ResponseDialog'

type DeliveryMethod = 'email' | 'sms'

export default function Home() {
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('email')
  const [destination, setDestination] = useState('')
  const [selectedSource, setSelectedSource] = useState<string | null>(null)

  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogMessage, setDialogMessage] = useState('')
  const [dialogSuccess, setDialogSuccess] = useState(false)

  // checks if it is possile to subscribe
  const canSubscribe = () => {
  }

  const addUser = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let data: any = null;
    try {

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
      setDialogSuccess(res.ok)
      setDialogMessage(data.status || 'Error')
      setDialogOpen(true)
    }   catch {
      setDialogSuccess(false)
      setDialogMessage(data.status || 'Network error. Please try again.')
      setDialogOpen(true)
    }

  }

  // normalises value whenever there are changes
  function handleDestinationChange(value: string) {
    const normalised = normalise(value, deliveryMethod)
    setDestination(normalised)
  }

  const handleSubscribe = async () => {
    const validBool = isValid(destination, deliveryMethod)

    if (!validBool) {
      if (deliveryMethod === "email") {
        alert("Please enter a valid email address in the highlighted form");
        return;
      } 
      alert("Please enter a valid SMS in the highlighted form");
      return;
    }

    addUser()
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
            onDestinationChange={handleDestinationChange}
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

        <ResponseDialog
        open={dialogOpen}
        success={dialogSuccess}
        message={dialogMessage}
        onClose={() => setDialogOpen(false)}
      />
      </div>
    </main>
  )
}

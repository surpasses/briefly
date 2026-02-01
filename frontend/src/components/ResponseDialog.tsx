'use client'

interface ResponseDialogProps {
  open: boolean
  message: string
  success: boolean
  onClose: () => void
}

export default function ResponseDialog({
  open,
  message,
  success,
  onClose,
}: ResponseDialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={`w-full max-w-md rounded-2xl p-6 shadow-xl
        ${success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
      >
        <h2
          className={`text-lg font-semibold mb-2
          ${success ? 'text-green-700' : 'text-red-700'}`}
        >
          {success ? 'Success' : 'Error'}
        </h2>

        <p
          className={`text-sm mb-6
          ${success ? 'text-green-800' : 'text-red-800'}`}
        >
          {message}
        </p>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-lg text-sm font-medium text-white
            ${success ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

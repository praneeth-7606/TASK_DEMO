// FILE: components/RequestDemoModal.tsx
'use client'

import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, Loader2, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function RequestDemoModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // Listen for custom event to open modal
    useEffect(() => {
        const handleOpen = () => setIsOpen(true)
        window.addEventListener('open-demo-modal', handleOpen)
        return () => window.removeEventListener('open-demo-modal', handleOpen)
    }, [])

    const closeModal = () => {
        setIsOpen(false)
        // Reset state after transition
        setTimeout(() => {
            setIsSuccess(false)
            setIsLoading(false)
        }, 300)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsLoading(false)
        setIsSuccess(true)
        toast.success('Request sent successfully!')
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-card bg-surface border border-white/10 p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex justify-between items-center mb-6">
                                    <Dialog.Title as="h3" className="text-xl font-bold text-white">
                                        {isSuccess ? 'Request Sent' : 'Request a Demo'}
                                    </Dialog.Title>
                                    <button
                                        onClick={closeModal}
                                        className="text-muted hover:text-white transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {isSuccess ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                                            <CheckCircle size={32} />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Thank you!</h4>
                                        <p className="text-muted mb-6">
                                            We've received your request. Our team will be in touch shortly to schedule your demo.
                                        </p>
                                        <button
                                            onClick={closeModal}
                                            className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-btn transition-colors font-medium"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
                                                Work Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-4 py-3 bg-bg border border-white/10 rounded-btn text-white focus:outline-none focus:border-accent transition-colors"
                                                placeholder="name@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full px-4 py-3 bg-bg border border-white/10 rounded-btn text-white focus:outline-none focus:border-accent transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-muted mb-1">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                required
                                                className="w-full px-4 py-3 bg-bg border border-white/10 rounded-btn text-white focus:outline-none focus:border-accent transition-colors"
                                                placeholder="Acme Inc."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-3 bg-accent hover:bg-accent-2 text-bg font-bold rounded-btn transition-colors flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 size={20} className="animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                'Request Demo'
                                            )}
                                        </button>
                                    </form>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

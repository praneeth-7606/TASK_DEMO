"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import clsx from "clsx";

interface RequestDemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RequestDemoModal({ isOpen, onClose }: RequestDemoModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const reset = () => {
        setIsSuccess(false);
        onClose();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-surface border border-white/10 p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex justify-between items-center mb-4">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-white"
                                    >
                                        {isSuccess ? "Request Sent" : "Request a Demo"}
                                    </Dialog.Title>
                                    <button
                                        onClick={onClose}
                                        className="text-muted hover:text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {isSuccess ? (
                                    <div className="text-center py-8">
                                        <div className="flex justify-center mb-4">
                                            <CheckCircle className="text-accent h-16 w-16" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-white mb-2">
                                            We'll be in touch!
                                        </h4>
                                        <p className="text-muted mb-6">
                                            Thanks for your interest in Oodl. Our team will contact you shortly to schedule your demo.
                                        </p>
                                        <button
                                            onClick={reset}
                                            className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full bg-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
                                                Work Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full bg-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                                                placeholder="jane@company.com"
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
                                                className="w-full bg-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                                                placeholder="Acme Inc."
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
                                                Message (Optional)
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={3}
                                                className="w-full bg-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                                                placeholder="Tell us about your use case..."
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={clsx(
                                                    "w-full py-3 px-4 rounded-lg font-bold text-bg transition-all flex items-center justify-center",
                                                    isSubmitting
                                                        ? "bg-accent/70 cursor-not-allowed"
                                                        : "bg-accent hover:bg-accent-2 hover:shadow-[0_0_20px_rgba(0,230,211,0.4)]"
                                                )}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="animate-spin mr-2" size={18} />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    "Request Demo"
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

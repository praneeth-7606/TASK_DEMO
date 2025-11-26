// FILE: components/BuiltForMemoryAccordion.tsx
'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
    {
        title: 'Semantic Continuity',
        content: 'Preserve long multi-step conversations so agents follow complex threads without losing context over time.'
    },
    {
        title: 'Temporal Awareness',
        content: 'Remember recency, deadlines, and follow-ups. Oodl understands "last week" or "next Tuesday" relative to the current moment.'
    },
    {
        title: 'Meta-Intent Detection',
        content: 'Extract reminders, dissatisfaction, goals. Go beyond literal text to understand the underlying intent and emotional state.'
    },
    {
        title: 'Hybrid Retrieval',
        content: 'Mix conversations, docs, files, app events, videos. A unified search and retrieval layer for all your data types.'
    }
]

export default function BuiltForMemoryAccordion() {
    return (
        <section className="py-24 px-4 bg-surface/50">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Built for real <span className="text-accent">conversational memory</span>
                    </h2>
                    <p className="text-muted text-lg">
                        Why Oodl is different from basic vector databases.
                    </p>
                </div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Disclosure>
                                {({ open }) => (
                                    <div className={`border border-white/10 rounded-card overflow-hidden transition-colors ${open ? 'bg-white/5 border-accent/30' : 'bg-bg hover:bg-white/5'}`}>
                                        <Disclosure.Button className="flex w-full justify-between px-6 py-4 text-left text-lg font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-accent focus-visible:ring-opacity-75">
                                            <span>{item.title}</span>
                                            <ChevronDown
                                                className={`${open ? 'rotate-180 text-accent' : 'text-muted'} h-5 w-5 transition-transform duration-200`}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-200 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-100 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Disclosure.Panel className="px-6 pb-4 text-muted leading-relaxed">
                                                {item.content}
                                            </Disclosure.Panel>
                                        </Transition>
                                    </div>
                                )}
                            </Disclosure>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

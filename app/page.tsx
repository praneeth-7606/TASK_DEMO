// FILE: app/page.tsx
'use client'

import NavBar from '@/components/NavBar'
import HeroIntro from '@/components/HeroIntro'
import FeatureGrid from '@/components/FeatureGrid'
import BuiltForMemoryAccordion from '@/components/BuiltForMemoryAccordion'
import ImageTextBlock from '@/components/ImageTextBlock'
import DemoQuickstart from '@/components/DemoQuickstart'
import CTASection from '@/components/CTASection'
import PartnerLogos from '@/components/PartnerLogos'
import RequestDemoModal from '@/components/RequestDemoModal'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <HeroIntro />
                <FeatureGrid />
                <BuiltForMemoryAccordion />
                <ImageTextBlock />
                <DemoQuickstart />
                <CTASection />
                <PartnerLogos />
            </main>
            <Footer />
            <RequestDemoModal />
        </>
    )
}

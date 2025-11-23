import NavBar from "@/components/NavBar";
import HeroIntro from "@/components/HeroIntro";
import FeatureGrid from "@/components/FeatureGrid";
import ImageTextBlock from "@/components/ImageTextBlock";
import CTASection from "@/components/CTASection";
import PartnerLogos from "@/components/PartnerLogos";
import DemoQuickstart from "@/components/DemoQuickstart";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/BlogPostCard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-bg selection:bg-accent selection:text-bg">
            <NavBar />
            <HeroIntro />
            <PartnerLogos />
            <FeatureGrid />
            <ImageTextBlock />
            <DemoQuickstart />

            {/* Blog Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Updates</h2>
                            <p className="text-muted">Insights from the frontier of AI memory.</p>
                        </div>
                        <a href="#" className="hidden md:flex items-center text-accent font-medium hover:underline">
                            View all posts
                        </a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <BlogPostCard
                            title="Oodl V2: Liberating the Potential of Long-term Context"
                            excerpt="Today, we unveil Oodl V2 — an intent-based memory platform that scales with your agents."
                            date="Oct 24, 2023"
                            category="Product"
                            imageColor="bg-blue-900"
                        />
                        <BlogPostCard
                            title="The Architecture of Infinite Context Windows"
                            excerpt="How we solved the retrieval latency problem for million-token context windows."
                            date="Nov 12, 2023"
                            category="Engineering"
                            imageColor="bg-purple-900"
                        />
                        <BlogPostCard
                            title="Building Agents that Don't Forget"
                            excerpt="A deep dive into semantic continuity and how to maintain persona over months."
                            date="Dec 05, 2023"
                            category="Research"
                            imageColor="bg-teal-900"
                        />
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}

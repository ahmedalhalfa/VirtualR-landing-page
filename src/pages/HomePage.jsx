import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Workflow from '../components/Workflow';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <Workflow />
            <Pricing />
            <Testimonials />
            <Footer />
        </>
    );
}

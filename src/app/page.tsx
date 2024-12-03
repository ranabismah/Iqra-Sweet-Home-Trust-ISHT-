
import HeroSection from '../components/HeroSection';
import Overview from '../components/Overview';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import FlipCard from '@/components/FlipCard';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Adding some margin to the FlipCard */}
      <div className="mb-16">
        <FlipCard />
      </div>

      {/* Adding margin to HeroSection */}
      <div className="mb-16">
        <HeroSection />
      </div>

      {/* Adding margin to Overview */}
      <div className="mb-16">
        <Overview />
      </div>

      {/* Adding margin to Testimonials */}
      <div className="mb-16">
        <Testimonials />
      </div>

      {/* Adding margin to CallToAction */}
      <div className="mb-16">
        <CallToAction />
      </div>
    </div>
  );
};

export default HomePage;


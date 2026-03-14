"use client";

import { useState } from "react";
import Hero from "@/components/ui/animated-shader-hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ScrollFrameAnimation } from "@/components/ui/scroll-frame-animation";
import { FlipWords } from "@/components/ui/flip-words";
import MusicArtwork from "@/components/ui/music-artwork";
import EarbudShowcase from "@/components/ui/spatial-product-showcase";
import { ParticleButton } from "@/components/ui/particle-button";
import { ModernPricingPage, type PricingCardProps } from "@/components/ui/animated-glassy-pricing";
import { GlowingFeatures } from "@/components/ui/glowing-features";
import { Headphones, Speaker, Star, Zap } from "lucide-react";

const audioTiers: PricingCardProps[] = [
  {
    planName: "Essential",
    description: "Perfect for daily commuters and casual listening",
    price: "4,999",
    currencySymbol: "₹",
    features: [
      "Active Noise Cancellation",
      "24-hour Battery Life",
      "Water Resistant (IPX4)",
      "1-Year Warranty",
    ],
    buttonText: "Buy Essential",
    buttonVariant: "secondary"
  },
  {
    planName: "Pro Studio",
    description: "For audiophiles and professional creators",
    price: "12,999",
    currencySymbol: "₹",
    features: [
      "Hi-Res Lossless Audio",
      "Spatial Audio Support",
      "Custom EQ Settings",
      "Premium Memory Foam",
      "2-Year Warranty",
    ],
    isPopular: true,
    buttonText: "Buy Pro Studio",
    buttonVariant: "primary"
  },
  {
    planName: "Ultimate",
    description: "The peak of wireless audio technology",
    price: "24,999",
    currencySymbol: "₹",
    features: [
      "Studio-Grade Drivers",
      "Adaptive ANC 3.0",
      "Multi-point Connection",
      "Real-time Translation",
      "Lifetime Support",
    ],
    buttonText: "Buy Ultimate",
    buttonVariant: "primary"
  },
];

export default function Home() {
  const [showPricing, setShowPricing] = useState(false);
  const [showShowcase, setShowShowcase] = useState(false);

  const handlePrimaryClick = () => {
    console.log('See Details clicked!');
    setShowShowcase(true);
  };

  const handleSecondaryClick = () => {
    console.log('Explore Collection clicked!');
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  const flipWords = ["immersive", "crystal-clear", "studio-grade", "breathtaking", "unmatched"];

  if (showPricing) {
    return (
      <main className="min-h-screen bg-black overflow-x-hidden">
        <ModernPricingPage
          title={
            <>
              Find the <span className="text-cyan-400">Perfect Gear</span> for Your Lifestyle
            </>
          }
          subtitle="From essential listening to studio-grade immersion. Step into the future of sound today."
          plans={audioTiers}
          showAnimatedBackground={true}
          onBack={() => setShowPricing(false)}
        />
      </main>
    )
  }

  if (showShowcase) {
    return (
      <EarbudShowcase onBack={() => setShowShowcase(false)} />
    )
  }

  return (
    <main>
      <Hero
        trustBadge={{
          text: "Trusted by audiophiles worldwide.",
          icons: [
            <Headphones key="1" className="w-4 h-4" />,
            <Speaker key="2" className="w-4 h-4" />
          ]
        }}
        headline={{
          line1: "Immerse in",
          line2: "Pure Sound"
        }}
        subtitle="Explore our elite collection of headphones, earbuds, and speakers crafted for audio perfection."
        buttons={{
          primary: {
            text: "See Details",
            onClick: handlePrimaryClick
          },
          secondary: {
            text: "Explore Collection",
            onClick: handleSecondaryClick
          }
        }}
      />

      {/* Product Showcase with Scroll Animation */}
      <div className="bg-black">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl font-semibold text-white">
                Experience the difference with <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Skyline Audio
                </span>
              </h2>
            </>
          }
        >
          <ScrollFrameAnimation
            frameFolder="/scroll%20animation.jpg"
            framePrefix="ezgif-frame-"
            frameCount={240}
            frameExtension="jpg"
          />
        </ContainerScroll>
      </div>

      {/* FlipWords Section */}
      <div className="h-[40rem] flex justify-center items-center px-4 bg-black">
        <div className="text-4xl md:text-5xl lg:text-6xl mx-auto font-normal text-neutral-400 text-center leading-relaxed">
          Skyline delivers
          <FlipWords words={flipWords} className="text-orange-300" /> <br />
          sound for every moment.
        </div>
      </div>

      {/* Product Showcase Cards */}
      <div id="collection" className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
            Our Collection
          </h2>
          <p className="text-neutral-400 text-center text-lg mb-16 max-w-2xl mx-auto">
            Handcrafted audio gear designed for every lifestyle. Hover to explore.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
            <div className="text-center space-y-4">
              <MusicArtwork
                artist="Skyline"
                music="AirPods Pro"
                albumArt="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=512&q=80"
                isSong={true}
                isLoading={false}
              />
              <p className="text-neutral-300 font-semibold text-lg mt-4">Earbuds</p>
              <p className="text-neutral-500 text-sm mb-4">Wireless Freedom</p>
              <ParticleButton className="w-full mt-2" variant="default" onClick={() => {
                 console.log("ParticleButton clicked");
                 setShowPricing(true);
              }}>
                Click to buy
              </ParticleButton>
            </div>
            <div className="text-center space-y-4">
              <MusicArtwork
                artist="Skyline"
                music="Studio Max"
                albumArt="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=512&q=80"
                isSong={false}
                isLoading={false}
              />
              <p className="text-neutral-300 font-semibold text-lg mt-4">Headphones</p>
              <p className="text-neutral-500 text-sm mb-4">Studio-Grade Sound</p>
              <ParticleButton className="w-full mt-2" variant="default" onClick={() => {
                 console.log("ParticleButton clicked");
                 setShowPricing(true);
              }}>
                Click to buy
              </ParticleButton>
            </div>
            <div className="text-center space-y-4">
              <MusicArtwork
                artist="Skyline"
                music="Bass Blast Mini"
                albumArt="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=512&q=80"
                isSong={true}
                isLoading={false}
              />
              <p className="text-neutral-300 font-semibold text-lg mt-4">BT Speaker</p>
              <p className="text-neutral-500 text-sm mb-4">Portable Power</p>
              <ParticleButton className="w-full mt-2" variant="default" onClick={() => {
                 console.log("ParticleButton clicked");
                 setShowPricing(true);
              }}>
                Click to buy
              </ParticleButton>
            </div>
          </div>
        </div>
      </div>

      {/* Glowing Features Section */}
      <div className="bg-neutral-950 py-24 px-4 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-200 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Built for Excellence
            </h2>
            <p className="text-neutral-400 text-lg">
              We've packed every piece of hardware with cutting-edge technology to deliver the ultimate listening experience.
            </p>
          </div>
          <GlowingFeatures />
        </div>
      </div>
    </main>
  );
}


"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JoinShowModal from "./components/JoinShowModal";
import UpcomingShows from "./components/UpcomingShows";
import VideoShowcase from "./components/VideoShowcase";
import OffersSection from "./components/OffersSection";
import ReviewsSection from "./components/ReviewsSection";
import PastShows from "./components/PastShows";
import ReferAndEarn from "./components/ReferAndEarn";
import Footer from "./components/Footer";

export default function V2Page() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onJoinShow={() => setShowModal(true)} />
      <HeroSection />
      <UpcomingShows onJoinShow={() => setShowModal(true)} />
      <VideoShowcase />
      <OffersSection onJoinShow={() => setShowModal(true)} />
      <ReviewsSection />
      <PastShows />
      <ReferAndEarn />
      <Footer />
      <JoinShowModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

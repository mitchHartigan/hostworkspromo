import React, { useState } from "react";
import Hero from "../components/hero/Hero.js";
import { Navbar } from "../components/navbar/Navbar.js";
import { ContentBlocks } from "../components/contentBlocks/index.js";

import { PrintOnDemand } from "../components/printOnDemand/PrintOnDemand.js";
import { GraphicsPackages } from "../components/graphicsPackages/GraphicsPackages.js";
import { Footer } from "../components/footer/Footer";
import Contact from "components/contact/index.js";
import Modal from "components/modal/index.js";

export default function Homepage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("Graphics Package 1");
  const [interest, setInterest] = useState(""); // Graphics package 1, etc

  function openModal(name) {
    setModalContent(name);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <Navbar />
      <Modal
        show={modalOpen}
        content={modalContent}
        setInterest={setInterest}
        closeModal={closeModal}
      />
      <Hero />
      <ContentBlocks />
      <PrintOnDemand />
      <GraphicsPackages openModal={openModal} />
      <Contact interest={interest} />
      <Footer />
    </>
  );
}

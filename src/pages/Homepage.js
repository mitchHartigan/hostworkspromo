import React, { useState, useRef, useEffect } from "react";
import Hero from "../components/hero/Hero.js";
import { Navbar } from "../components/navbar/Navbar.js";
import { ContentBlocks } from "../components/contentBlocks/index.js";

import { PrintOnDemand } from "../components/printOnDemand/PrintOnDemand.js";
import { GraphicsPackages } from "../components/graphicsPackages/GraphicsPackages.js";
import { Footer } from "../components/footer/Footer";
import Contact from "components/contact/index.js";
import Modal from "components/modal/index.js";
import {
  package1,
  package2,
  package3,
} from "components/graphicsPackages/data.js";

export default function Homepage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(package1);
  const scrollTargetRef = useRef(null);
  const [interest, setInterest] = useState(""); // Graphics package 1, etc

  useEffect(() => {
    // hacky! And probably bad. But it works.
    // Doing this to wait for the page content to fully load
    // before scrolling contact into view. Otherwise the scroll
    // position is off.
    setTimeout(() => {
      const hash = document.location.hash;
      if (hash === "#contact") scrollToContact();
    }, 100);
  }, []);

  function getModalContent(name) {
    if (name === "Graphics Package 1") return package1;
    if (name === "Graphics Package 2") return package2;
    if (name === "Graphics Package 3") return package3;
  }

  function openModal(name) {
    setModalContent(getModalContent(name));
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleOrder(name) {
    setInterest(name);
    setModalOpen(false);
    scrollToContact();
  }

  function scrollToContact() {
    scrollTargetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <>
      <Navbar homepage scrollToContact={scrollToContact} />
      <Modal
        show={modalOpen}
        content={modalContent}
        handleOrder={handleOrder}
        closeModal={closeModal}
      />
      <Hero />
      <ContentBlocks />
      <PrintOnDemand />
      <GraphicsPackages openModal={openModal} />
      <Contact interest={interest} refProp={scrollTargetRef} />
      <Footer />
    </>
  );
}

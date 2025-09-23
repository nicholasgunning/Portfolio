import React, { useEffect, useRef } from "react";
import Milestone from "../components/Milestone";
import "../stylesheets/Journey.scss";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Overview from "./Overview";

import Collable from "../components/projects/collableDirectory/Collable";
import InformedGlobe from "../components/projects/myInformedGlobeDirectory/MyInformedGlobe";
import SoftwareProjects from "../components/projects/softwareProjectsDirectory/SoftwareProjects";
//Chemtable Missing

function JourneyHome() {
  const elementRef = useRef();

  useEffect(() => {
    if (elementRef.current) {
      const timeoutId = setTimeout(() => {
        elementRef.current.classList.add("is-journey-mounted");
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
        if (elementRef.current) {
          elementRef.current.classList.remove("is-journey-mounted");
        }
      };
    }
  }, []);

  return (
    <div ref={elementRef} id="my-journey" className="journey">
      <Milestone milestone="Collable" year="2021-202" to="/collable" />
      <Milestone
        milestone="My Informed Globe"
        year="2021-202"
        to="/informed-globe"
      />
      <Milestone
        milestone="Software Projects"
        year="2021-202"
        to="/software-projects"
      />
      <Milestone milestone="DASH" year="2021-202" to="/dash" />
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="page-container"
    >
      {children}
    </motion.div>
  );
}

export default function Journey() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Overview />
              <JourneyHome />
            </PageWrapper>
          }
        />
        <Route
          path="/collable"
          element={
            <PageWrapper>
              <Collable />
            </PageWrapper>
          }
        />
        <Route
          path="/informed-globe"
          element={
            <PageWrapper>
              <InformedGlobe />
            </PageWrapper>
          }
        />
        <Route
          path="/software-projects"
          element={
            <PageWrapper>
              <SoftwareProjects />
            </PageWrapper>
          }
        />
        {/* <Route path="/dash" element={<PageWrapper><DashPage /></PageWrapper>} /> */}
      </Routes>
    </AnimatePresence>
  );
}

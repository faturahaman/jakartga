// src/App.jsx
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import HeroSection from './components/HeroSection';
import AnnouncementSection from './components/AnnouncementSection';
import ServicesSection from './components/ServicesSection';
import DataInfoTabSection from './components/DataInfoTabSection';
import NewsSection from './components/NewsSection';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';
import './App.css'; 
import MapsSection from './components/mapsSection';

export default function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Tambahkan style dinamis
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .nav-container {
        width: 100%;
        background: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .top-level-nav {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #e5e7eb;
      }
      .top-level-button {
        padding: 1rem 1.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;
      }
      .top-level-button:hover {
        color: rgb(30 58 138);
        border-bottom-color: #e5e7eb;
      }
      .top-level-button.active {
        color: rgb(30 58 138);
        border-bottom-color: rgb(30 58 138);
        background: rgba(30, 58, 138, 0.05);
      }
      .top-level-button span {
        display: inline-block;
        transition: transform 0.3s ease;
      }
      .nav-columns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        min-height: 400px;
        background: rgb(30 58 138);
        color: white;
      }
      .nav-column {
        padding: 1.5rem;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }
      .nav-column:last-child {
        border-right: none;
      }
      .nav-button {
        width: 100%;
        text-align: left;
        padding: 0.5rem 0.75rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
        transition: all 0.2s;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 0.25rem;
      }
      .nav-button:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
      }
      .nav-button.active {
        background: white;
        color: rgb(30 58 138);
        font-weight: 500;
        padding: 0.375rem 0.75rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }
      .hero-bg {
        position: relative;
      }
      .hero-bg::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }
      .custom-scroll {
        scrollbar-width: thin;
        scrollbar-color: #60a5fa #e5e7eb;
      }
      .custom-scroll::-webkit-scrollbar {
        width: 6px;
      }
      .custom-scroll::-webkit-scrollbar-track {
        background: #e5e7eb;
        border-radius: 10px;
      }
      .custom-scroll::-webkit-scr ollbar-thumb {
        background-color: #60a5fa;
        border-radius: 10px;
        border: 1px solid #e5e7eb;
      }
      @media (max-width: 1023px) {
        .nav-container {
          position: relative;
        }
        .top-level-nav {
          flex-direction: column;
          background: white;
        }
        .top-level-button {
          width: 100%;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #e5e7eb;
        }
        .top-level-button span {
          margin-left: auto;
        }
        .nav-columns {
          grid-template-columns: 1fr;
          position: absolute;
          width: 100%;
          z-index: 50;
          border-top: 1px solid #e5e7eb;
        }
        .nav-column {
          border-right: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          background: rgb(30 58 138);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="bg-gray-50">
      <Header onMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <TabNavigation isMobileMenuOpen={isMobileMenuOpen} />
      <main>
        <HeroSection />
        <AnnouncementSection />
        <ServicesSection />
        <DataInfoTabSection />
        <EventsSection />
        <NewsSection />
        <MapsSection />

      </main>
      <Footer />
    </div>
  );
}
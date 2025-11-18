import React, { useState } from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaWordpress, FaBolt, FaServer, FaTools, FaBootstrap } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiTailwindcss } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import Modal from './Modal';

const Features = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    content: null
  });

  const openModal = (title, content) => {
    setModal({
      isOpen: true,
      title,
      content
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      title: '',
      content: null
    });
  };

  const handleFrontendClick = () => {
    // Rediriger vers la section projets
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black relative"
    >
      <Title title="Skills" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <div onClick={handleFrontendClick} className="cursor-pointer">
          <Card
            title="No-Code Frontend"
            des="Bubble.io, Webflow, WordPress"
            icon={<FaWordpress className="text-4xl text-[#0073aa]" />}
          />
        </div>
        
        <div 
          onClick={() => openModal(
            'No-Code Backend - Xano',
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <FaServer className="text-4xl text-[#00b1da]" />
                <h4 className="text-xl font-semibold">Xano</h4>
              </div>
              <p className="text-gray-700">
                Xano is a No-Code Backend platform that allows you to create powerful APIs, databases, and complex business logic without writing code.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Creation of secure RESTful APIs</li>
                <li>Scalable database with complex relationships</li>
                <li>User authentication and authorization</li>
                <li>Backend workflow automation</li>
                <li>Integration with third-party services</li>
              </ul>
            </div>
          )}
          className="cursor-pointer"
        >
          <Card
            title="No-Code Backend"
            des="Xano"
            icon={<FaServer className="text-4xl text-[#00b1da]" />}
          />
        </div>

        <div 
          onClick={() => openModal(
            'Automation Tools',
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <FaTools className="text-4xl text-[#1a1f24]" />
                <FaBolt className="text-4xl text-[#ff4a00]" />
              </div>
              <p className="text-gray-700">
                Powerful tools to automate your business processes and connect your favorite applications.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800">Make (ex-Integromat)</h5>
                  <p className="text-gray-600 text-sm">
                    Visual automation platform that connects applications and automates complex workflows without writing code.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Zapier</h5>
                  <p className="text-gray-600 text-sm">
                    Automation tool that connects your favorite apps and automates repetitive tasks between them.
                  </p>
                </div>
              </div>
            </div>
          )}
          className="cursor-pointer"
        >
          <Card
            title="Automation Tools"
            des="Make, Zapier"
            icon={<FaTools className="text-4xl text-[#1a1f24]" />}
          />
        </div>

        <div 
          onClick={() => openModal(
            'UI/UX Design',
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <FaBootstrap className="text-4xl text-[#7952b3]" />
                <SiTailwindcss className="text-4xl text-[#06b6d4]" />
              </div>
              <p className="text-gray-700">
                Creation of modern, responsive, and accessible user interfaces using the most popular CSS frameworks.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800">Bootstrap</h5>
                  <p className="text-gray-600 text-sm">
                    Popular CSS framework for developing responsive and mobile-first web interfaces with predefined components.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Tailwind CSS</h5>
                  <p className="text-gray-600 text-sm">
                    Utility-first CSS framework that allows you to design custom interfaces directly in your HTML, offering great flexibility.
                  </p>
                </div>
              </div>
            </div>
          )}
          className="cursor-pointer"
        >
          <Card
            title="UI/UX Design"
            des="Bootstrap, Tailwind CSS"
            icon={<SiTailwindcss className="text-4xl text-[#06b6d4]" />}
          />
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={modal.isOpen} 
        onClose={closeModal} 
        title={modal.title}
      >
        {modal.content}
      </Modal>
    </section>
  );
}

export default Features
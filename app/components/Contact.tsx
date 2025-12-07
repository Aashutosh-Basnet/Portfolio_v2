import React from 'react';
import { Github, Linkedin, Mails, PhoneCall } from 'lucide-react';
import RevealWrapper from './ui/RevealWrapper';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <RevealWrapper className="max-w-6xl mx-auto bg-[#0A0A0A] rounded-3xl overflow-hidden" direction="up">
          <div className="relative py-5 overflow-hidden">
            {/* Background gradient and light effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/90 to-green-800/90"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-64 h-64 bg-black/20 blur-3xl rounded-full"></div>

            <div className="container mx-auto px-6 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-xl md:text-xl lg:text-3xl font-semibold text-white mb-6 leading-tight tracking-wide">
                    <span className="block transform hover:scale-105 transition-transform duration-300">Bringing your ideas to life.</span>
                    <span className="block mt-2 transform hover:scale-105 transition-transform duration-300">Let&apos;s turn your vision into reality</span>
                  </h2>
                  <p className="fancy-text text-white/80 text-lg md:text-xl mb-8 italic tracking-wide">
                    Have a project in mind or just want to chat? Let&apos;s connect!
                  </p>
                </div>

                <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-500/20">
                  <h3 className="text-2xl font-bold text-white">
                    Connect With Me
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://github.com/Aashutosh-Basnet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-800/5 hover:bg-white/10 rounded-lg transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-gray-800/10 rounded-full group-hover:bg-gray-800/20 transition-colors duration-300">
                        <Github size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">GitHub</h4>
                        <p className="text-white/70">Follow my work</p>
                      </div>
                    </a>

                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-800/5 hover:bg-white/10 rounded-lg transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-gray-800/10 rounded-full group-hover:bg-gray-800/20 transition-colors duration-300">
                        <Linkedin size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">LinkedIn</h4>
                        <p className="text-white/70">Connect with me!</p>
                      </div>
                    </a>

                    <div
                      className="flex items-start gap-4 p-4 bg-gray-800/5 hover:bg-white/10 rounded-lg transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-gray-800/10 rounded-full group-hover:bg-white/10 transition-colors duration-300">
                        <Mails size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">Gmail</h4>
                        <p className="text-white/70 break-all">aashutoshbasnet3344@gmail.com</p>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-4 p-4 bg-gray-800/5 hover:bg-white/10 rounded-lg transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-gray-800/10 rounded-full group-hover:bg-white/10 transition-colors duration-300">
                        <PhoneCall size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <p className="text-white/70">9769350687</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default Contact;
import React from "react";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Contact from "@/_components/Contact";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Contect from "@/_components/Contect";
import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="font-['DM_Serif_Display'] text-base md:text-lg bg-[#F7F7F1] text-[#1C1C1C]">
      <Head>
        <title>AI Mock Interview</title>
        <meta
          name="description"
          content="Ace your next interview with AI-powered mock interviews"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header Section */}
      <header className="w-full py-2 bg-[#20503B] shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <img
            src="/ilab2.jpg"
            alt="AI Mock Interview Logo"
            className="h-24 w-auto"
          />

          <nav className="flex items-center space-x-6 text-2xl text-white">
            <a
              href="#contact"
              className="hover:text-[#A2C5AC] transition-colors"
            >
              Contact
            </a>
            <a
              href="#profile"
              className="hover:text-[#A2C5AC] transition-colors"
            >
              Profile
            </a>
            <UserButton />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-[#E8F1EB] px-6">
        <h2 className="text-6xl font-semibold text-[#20503B] tracking-tight">
          Ace Your Interview
        </h2>
        <h3 className="text-2xl font-semibold text-[#20503B] tracking-tight mt-4">
          With your own AI powered interview lab
        </h3>
      </section>

      {/* Button Grid Section */}
      <section className="py-16 flex justify-center">
        <div className="grid grid-cols-2 gap-6">
          <a href="/dashboard">
            <div className="w-80 h-40 bg-[#D9EAD3] flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-[#C4D9C1] transition-colors">
              <p className="text-2xl font-medium">Dashboard</p>
            </div>
          </a>
          <a href="/dashboard/howit">
            <div className="w-80 h-40 bg-[#D9EAD3] flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-[#C4D9C1] transition-colors">
              <p className="text-2xl font-medium">Get Started</p>
            </div>
          </a>
          <a href="#features">
            <div className="w-80 h-40 bg-[#D9EAD3] flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-[#C4D9C1] transition-colors">
              <p className="text-2xl font-medium">Features</p>
            </div>
          </a>
          <a href="/dashboard/question">
            <div className="w-80 h-40 bg-[#D9EAD3] flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-[#C4D9C1] transition-colors">
              <p className="text-2xl font-medium">Questions</p>
            </div>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-[40px] bg-[#F7F7F1] px-6 md:px-0">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-[#20503B]">Features</h2>
          <p className="mt-4 text-xl text-[#5D8A66]">
            Our AI Mock Interview platform offers a range of powerful features:
          </p>
          <div className="flex flex-wrap justify-center mt-8 gap-8">
            {/* Top Left Box */}
            <div className="w-full md:w-1/4 mt-48">
              <div className="bg-[#E4F0E0] rounded-lg p-6 shadow-md h-[170px] flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#20503B]">
                  AI Mock Interviews
                </h3>
                <p className="mt-2 text-lg text-[#5D8A66]">
                  Experience realistic interview scenarios with our advanced AI.
                </p>
              </div>
            </div>
            {/* Top Center Box */}
            <div className="w-full md:w-1/4 mt-0">
              <div className="bg-[#E4F0E0] rounded-lg p-6 shadow-md h-[170px] flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#20503B]">
                  Instant Feedback
                </h3>
                <p className="mt-2 text-lg text-[#5D8A66]">
                  Get instant, personalized feedback to improve your
                  performance.
                </p>
              </div>
            </div>
            {/* Top Right Box */}
            <div className="w-full md:w-1/4 mt-48">
              <div className="bg-[#E4F0E0] rounded-lg p-6 shadow-md h-[170px] flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#20503B]">
                  Comprehensive Reports
                </h3>
                <p className="mt-2 text-lg text-[#5D8A66]">
                  Receive detailed reports highlighting your strengths and
                  weaknesses.
                </p>
              </div>
            </div>
            {/* Bottom Center Box */}
            <div className="w-full md:w-1/4 mt-10 md:mt-[-20px] flex justify-center">
              <div className="bg-[#E4F0E0] rounded-lg p-6 shadow-md h-[170px] flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#20503B]">
                  Personalized Insights
                </h3>
                <p className="mt-2 text-lg text-[#5D8A66]">
                  Tailored recommendations to help you improve faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#F7F7F1] px-6 md:px-0">
        <Contect />
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#20503B] text-white text-center">
        <p className="text-base">
          © 2024 AI Mock Interview. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default page;

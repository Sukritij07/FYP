import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/interviewlist";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Welcome Back
            </h2>
            <span className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Create, manage, and track your AI-powered mock interviews with ease.
          </p>
        </div>

        {/* Add New Interview Section */}
        <div className="bg-card rounded-lg shadow-sm p-6 mb-8 border border-border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-foreground">
              Start a New Interview
            </h3>
            <button className="text-sm text-primary hover:text-primary-foreground font-medium transition-colors">
              View Guide →
            </button>
          </div>
          <AddNewInterview />
        </div>

        {/* Interview List Section */}
        <div className="bg-card rounded-lg shadow-sm p-6 border border-border">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-foreground">
              Your Interviews
            </h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                Filter
              </button>
              <button className="px-3 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                Sort
              </button>
            </div>
          </div>
          <InterviewList />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="flex justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
          © {new Date().getFullYear()} I Lab. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

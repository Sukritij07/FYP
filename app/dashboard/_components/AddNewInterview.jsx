"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/button";
import { Input, TextareaAutosize } from "@mui/material";
import { sendMessage } from "../../../utils/GeminiAIModal";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import db from "../../../utils/db"; // Import the database connection
import { MockInterview } from "../../../utils/schema"; // Import your schema
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { select } from "@/components/ui/select";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobExperience, setJobExperience] = useState("0");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  // // Manually define the user object for testing purposes
  // const user = {
  //     primaryEmailAddress: {
  //         emailAddress: 'example@example.com'
  //     }
  // };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!jobPosition || !jobDescription || !jobExperience) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    setError("");
    const questionsCount =
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTIONS_COUNT || 5; // Default to 5 questions if not set
    const InputPrompt = `Job Role: ${jobPosition}, Job Description: ${jobDescription}, Years of experience with the tools mentioned in job description: ${jobExperience}, based on the details give me ${questionsCount} interview questions and answers in JSON format. As the user answers will be verbally recorded mind this while generating the questions and answers both`;

    try {
      console.log("Sending message:", InputPrompt);
      const result = await sendMessage(InputPrompt);
      console.log("API Result:", result);

      if (typeof result === "string") {
        let cleanedResponse = result.trim();
        console.log("Cleaned Response (Before Replacing):", cleanedResponse);

        cleanedResponse = cleanedResponse
          .replace(/```json/g, "")
          .replace(/```/g, "");
        console.log("Cleaned Response (After Replacing):", cleanedResponse);

        try {
          // Log the cleaned response before parsing
          console.log("Cleaned Response for Parsing:", cleanedResponse);

          // Replace control characters that might cause issues
          const safeResponse = cleanedResponse.replace(
            /[\u0000-\u001F\u007F-\u009F]/g,
            ""
          );
          console.log("Safe Response:", safeResponse);

          let parsedResponse;
          try {
            parsedResponse = JSON.parse(safeResponse);
          } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
            throw new Error("Failed to parse the JSON response.");
          }

          console.log(
            "Generated Interview Questions and Answers:",
            parsedResponse
          );

          // Check if parsedResponse is an array
          if (!Array.isArray(parsedResponse)) {
            console.error("Parsed response is not an array:", parsedResponse);
            throw new Error("Parsed response is not an array");
          }

          // Add job-specific information to each question
          parsedResponse = parsedResponse.map((question) => ({
            ...question,
            jobPosition,
            jobDesc: jobDescription,
            jobExperience,
          }));

          console.log("Parsed Response with Metadata:", parsedResponse);

          try {
            const mockId = uuidv4();

            await db.insert(MockInterview).values({
              mockId: mockId,
              jsonMockResp: JSON.stringify(parsedResponse),
              jobPosition: jobPosition,
              jobDesc: jobDescription,
              jobExperience: jobExperience,
              createdBy: user?.primaryEmailAddress?.emailAddress,
              createdAt: moment().format("YYYY-MM-DD"),
            });

            console.log("Record inserted successfully: ", {
              mockId: mockId,
              jsonMockResp: JSON.stringify(parsedResponse),
              jobPosition: jobPosition,
              jobDesc: jobDescription,
              jobExperience: jobExperience,
              createdBy: user?.primaryEmailAddress?.emailAddress,
              createdAt: moment().format("DD-MM-YYYY"),
            });

            setOpenDialog(false);
            router.push(`/dashboard/interview/${mockId}`);
          } catch (dbError) {
            console.error(
              "Database insertion error:",
              dbError.message || dbError
            );
            setError(
              "Failed to insert record into the database. Please try again."
            );
          }
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          setError("Failed to parse the response. Please try again.");
        }
      } else {
        console.log("Error: Result is empty");
        setError("Failed to get a response from the AI. Please try again.");
      }
    } catch (error) {
      console.error("Error generating interview questions and answers:", error);
      setError(
        "An error occurred while generating interview questions. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const jobRolesToTechStacks = {
    "Full Stack Developer": [
      "Angular, React, Node.js, MySQL",
      "React, Node.js, Express, MongoDB",
    ],
    "Front End Developer": [
      "React, HTML, CSS, JavaScript",
      "Vue.js, HTML, CSS",
    ],
    "Back End Developer": [
      "Node.js, Express, MongoDB",
      "Java, Spring Boot, PostgreSQL",
    ],
    "Software Engineer": [
      "Java, Spring Boot, PostgreSQL",
      "Python, Django, PostgreSQL",
    ],
    "Data Scientist": [
      "Python, Pandas, NumPy, Scikit-learn",
      "R, SQL, TensorFlow",
    ],
    "Marketing Manager": [
      "Google Analytics, SEO tools, Email marketing platforms",
      "Social media management tools, Adobe Creative Suite",
    ],
    "Product Manager": [
      "Jira, Trello, Confluence, Aha!",
      "SQL, Excel, Google Analytics",
    ],
    "Sales Executive": [
      "CRM software like Salesforce, HubSpot",
      "Excel, PowerPoint, Google Sheets",
    ],
    "Graphic Designer": [
      "Adobe Illustrator, Photoshop, InDesign",
      "CorelDRAW, Sketch, Figma",
    ],
    "Human Resources Manager": [
      "HR software like Workday, BambooHR",
      "Microsoft Office, Excel, Google Workspace",
    ],
    "Project Manager": [
      "Microsoft Project, Asana, Slack",
      "Trello, Monday.com, Jira",
    ],
    "Financial Analyst": [
      "Excel, SQL, Power BI",
      "Tableau, SAP, Oracle Financial Services",
    ],
    "Customer Support Specialist": [
      "Zendesk, Freshdesk, ServiceNow",
      "Excel, Google Sheets, Salesforce",
    ],
    "Operations Manager": [
      "ERP systems, SAP, Oracle",
      "Microsoft Office, Google Workspace",
    ],
  };
  const jobRoles = Object.keys(jobRolesToTechStacks);

  const handleJobPositionChange = (event) => {
    setJobPosition(event.target.value);
    setJobDescription(""); // Reset the job description when job role changes
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4 font-['DM_Serif_Display'] text-[#1C1C1C]">
        <div
          className="p-10 rounded-lg border bg-[#D9EAD3] hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
          onClick={() => setOpenDialog(true)}
        >
          <h2 className="text-xl text-center">+ Add New</h2>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="max-w-2xl bg-[#F7F7F1]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">
                Tell us more about your job interview
              </DialogTitle>
              <DialogDescription asChild>
                <div className="space-y-4">
                  <div className="my-3">
                    <label className="block mb-2 text-lg font-medium">
                      Job Role/Job Position
                    </label>
                    <select
                      value={jobPosition}
                      onChange={handleJobPositionChange}
                      required
                      className="w-full p-2 border rounded"
                    >
                      <option value="">Select Job Role</option>
                      {jobRoles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="my-3">
                    <label className="block mb-2 text-lg font-medium">
                      Job Description/Tech Stack (In Short)
                    </label>
                    {jobPosition && (
                      <select
                        value={jobDescription}
                        onChange={(event) =>
                          setJobDescription(event.target.value)
                        }
                        required
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Tech Stack</option>
                        {jobRolesToTechStacks[jobPosition]?.map(
                          (techStack, index) => (
                            <option key={index} value={techStack}>
                              {techStack}
                            </option>
                          )
                        )}
                      </select>
                    )}
                    {!jobPosition && (
                      <p className="text-sm text-gray-500">
                        Select a job role to view tech stacks
                      </p>
                    )}
                  </div>
                  <div className="my-3">
                    <label className="block mb-2 text-lg font-medium">
                      Years of experience
                    </label>
                    <Input
                      className="w-full mt-1 text-base"
                      placeholder="Ex. 5"
                      type="number"
                      required
                      value={jobExperience}
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                  {error && <div className="text-red-500">{error}</div>}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-5 justify-end mt-6">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setOpenDialog(false)}
                className="text-[#20503B] hover:text-[#1C1C1C]"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#20503B] hover:bg-[#1F4B37] text-white"
                onClick={onSubmit}
              >
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin mr-2" />
                    Generating...
                  </>
                ) : (
                  "Start Interview"
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </form>
  );
}

export default AddNewInterview;

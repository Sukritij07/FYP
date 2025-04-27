"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { db } from "@/utils/db";
import { Question } from "@/utils/schema";
import { eq } from "drizzle-orm";

const Page = ({ params }) => {
  const [questionData, setQuestionData] = useState([]);
  const pyqId = React.use(params); // Use `React.use` to unwrap `params`

  useEffect(() => {
    if (pyqId) {
      console.log("Fetching question data for:", pyqId);
      getQuestionDetails(pyqId);  // Pass `pyqId` to the async function
    }
  }, [pyqId]);  // Run the effect when `pyqId` changes

  const getQuestionDetails = async (pyqId) => {
    try {
      const result = await db
        .select()
        .from(Question)
        .where(eq(Question.mockId, pyqId));

      if (result.length > 0) {
        const questionData = JSON.parse(result[0].MockQuestionJsonResp);
        setQuestionData(questionData);
      }
    } catch (error) {
      console.error("Failed to fetch question data:", error);
    }
  };

  return (
    <div className="p-10 my-5">
      {questionData.length > 0 ? (
        <Accordion type="single" collapsible>
          {questionData.map((item, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="mb-5"
            >
              <AccordionTrigger>{item?.Question}?</AccordionTrigger>
              <AccordionContent>{item?.Answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Page;

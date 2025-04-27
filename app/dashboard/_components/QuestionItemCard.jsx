import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CalendarIcon } from 'lucide-react';

const QuestionItemCard = ({ question }) => {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/pyq/" + question?.mockId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
  <div className="p-5">
    <div className="flex justify-between items-start mb-3">
      {/* Left section with job position and experience */}
      <div>
        <h3 className="font-bold text-lg text-[#20503B] mb-1">
          {question?.jobPosition}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          {question?.jobExperience} Years of experience
        </p>
      </div>

      {/* Right section with calendar icon and date */}
      <div className="flex items-center text-gray-500 text-xs mb-4">
        <CalendarIcon className="w-3 h-3 mr-1" />
        <span>{formatDate(question.createdAt)}</span>
      </div>
    </div>

    {/* Start Button Section */}
    <div className="flex justify-between gap-3 mt-4">
      <Button
        onClick={onStart}
        size="sm"
        className="w-full bg-[#20503B] hover:bg-[#20503B] font-medium"
      >
        Start
      </Button>
    </div>
  </div>
</div>

  );
};

export default QuestionItemCard;

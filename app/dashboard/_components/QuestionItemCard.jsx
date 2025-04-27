import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const QuestionItemCard = ({ question }) => {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/pyq/" + question?.mockId);
  };

  return (
    <div className="border border-gray-700 shadow-md rounded-2xl p-5 bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] text-white font-['Poppins']">
      <h2 className="text-xl font-bold text-[#b8c0ff] mb-1">
        {question?.jobPosition}
      </h2>
      <p className="text-sm text-gray-300 mb-1">
        {question?.jobExperience} Years of experience
      </p>
      <p className="text-xs text-gray-400 mb-4">
        Created At: {question.createdAt}
      </p>

      <Button
        onClick={onStart}
        size="sm"
        className="w-full bg-[#b8c0ff] hover:bg-[#a0a8ff] text-[#0d1b2a] font-semibold rounded-xl transition-all"
      >
        Start
      </Button>
    </div>
  );
};

export default QuestionItemCard;

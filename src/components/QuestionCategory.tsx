import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuestionCategory as QuestionCategoryType } from "@/data/questions";
import { QuestionItem } from "./QuestionItem";
import { cookieStorage } from "@/lib/cookieStorage";

interface QuestionCategoryProps {
  category: QuestionCategoryType;
}

export const QuestionCategory = ({ category }: QuestionCategoryProps) => {
  const [solvedCount, setSolvedCount] = useState(0);

  useEffect(() => {
    const count = category.questions.filter(
      (q) => cookieStorage.getQuestion(q.id).solved
    ).length;
    setSolvedCount(count);
  }, [category.questions]);

  // Re-check solved count on component updates
  useEffect(() => {
    const interval = setInterval(() => {
      const count = category.questions.filter(
        (q) => cookieStorage.getQuestion(q.id).solved
      ).length;
      setSolvedCount(count);
    }, 100);

    return () => clearInterval(interval);
  }, [category.questions]);

  return (
    <Accordion type="single" collapsible defaultValue={category.id}>
      <AccordionItem value={category.id} className="border border-border rounded-lg overflow-hidden">
        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
          <div className="flex items-center justify-between w-full pr-4">
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <span className="text-sm text-muted-foreground">
              {solvedCount} / {category.questions.length}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-2 mt-2">
            {category.questions.map((question) => (
              <QuestionItem key={question.id} question={question} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink } from "lucide-react";
import { Question } from "@/data/questions";
import { DifficultyBadge } from "./DifficultyBadge";
import { NotesDialog } from "./NotesDialog";
import { cookieStorage } from "@/lib/cookieStorage";

interface QuestionItemProps {
  question: Question;
}

export const QuestionItem = ({ question }: QuestionItemProps) => {
  const [solved, setSolved] = useState(() => cookieStorage.getQuestion(question.id).solved);

  const handleCheckboxChange = (checked: boolean) => {
    setSolved(checked);
    cookieStorage.toggleSolved(question.id);
  };

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors group">
      <Checkbox
        checked={solved}
        onCheckedChange={handleCheckboxChange}
        className="mt-0.5"
      />
      
      <div className="flex-1 min-w-0">
        <a
          href={question.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-primary transition-colors group/link"
        >
          <span className={solved ? "line-through opacity-60" : ""}>
            {question.title}
          </span>
          <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>

      <div className="flex items-center gap-2">
        <DifficultyBadge difficulty={question.difficulty} />
        <NotesDialog questionId={question.id} questionTitle={question.title} complexity={question.complexity} />
      </div>
    </div>
  );
};

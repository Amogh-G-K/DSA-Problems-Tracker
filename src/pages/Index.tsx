import { useState, useEffect } from "react";
import { QuestionCategory } from "@/components/QuestionCategory";
import { questionCategories } from "@/data/questions";
import { cookieStorage } from "@/lib/cookieStorage";
import { ClearProgressDialog } from "@/components/ClearProgressDialog";
import { Code2 } from "lucide-react";

const Index = () => {
  const [totalSolved, setTotalSolved] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const total = questionCategories.reduce((sum, cat) => sum + cat.questions.length, 0);
    setTotalQuestions(total);

    const updateProgress = () => {
      let solved = 0;
      questionCategories.forEach((category) => {
        category.questions.forEach((question) => {
          if (cookieStorage.getQuestion(question.id).solved) {
            solved++;
          }
        });
      });
      setTotalSolved(solved);
    };

    updateProgress();
    const interval = setInterval(updateProgress, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Code2 className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              DSA Problems Tracker
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            To help practice and organize solutions for Data Structures and Algorithms
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border">
              <span className="text-sm">
                Progress: <span className="font-semibold text-primary">{totalSolved}</span> / {totalQuestions}
              </span>
              <span className="text-sm text-muted-foreground">
                ({totalQuestions > 0 ? Math.round((totalSolved / totalQuestions) * 100) : 0}%)
              </span>
            </div>
            <ClearProgressDialog />
          </div>
        </header>

        {/* Question Categories */}
        <div className="space-y-4">
          {questionCategories.map((category) => (
            <QuestionCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

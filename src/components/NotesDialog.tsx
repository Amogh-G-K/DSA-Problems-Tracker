import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Info } from "lucide-react";
import { cookieStorage } from "@/lib/cookieStorage";
import { toast } from "sonner";
import { Complexity } from "@/data/questions";

interface NotesDialogProps {
  questionId: string;
  questionTitle: string;
  complexity: Complexity;
}

export const NotesDialog = ({ questionId, questionTitle, complexity }: NotesDialogProps) => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState(() => cookieStorage.getQuestion(questionId).notes);
  const [showComplexity, setShowComplexity] = useState(false);

  const handleSave = () => {
    cookieStorage.updateNotes(questionId, notes);
    toast.success("Notes saved successfully!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => setNotes(cookieStorage.getQuestion(questionId).notes)}
        >
          <MessageSquare className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{questionTitle}</DialogTitle>
          <DialogDescription>
            Add your notes, solutions, or comments for this problem.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowComplexity(!showComplexity)}
              className="mb-3"
            >
              <Info className="h-4 w-4 mr-2" />
              {showComplexity ? 'Hide' : 'Show'} Complexity
            </Button>
            {showComplexity && (
              <div className="p-4 bg-muted/50 rounded-md space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-foreground">Brute Force Time: </span>
                  <span className="text-muted-foreground">{complexity.bruteForceTime}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Optimal Time: </span>
                  <span className="text-muted-foreground">{complexity.optimalTime}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Optimal Space: </span>
                  <span className="text-muted-foreground">{complexity.optimalSpace}</span>
                </div>
              </div>
            )}
          </div>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your solution approach, key insights, or any notes here..."
            className="min-h-[250px] resize-none"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Notes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

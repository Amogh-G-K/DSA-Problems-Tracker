import { Badge } from "@/components/ui/badge";
import { Difficulty } from "@/data/questions";
import { cn } from "@/lib/utils";

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

export const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  const getVariant = () => {
    switch (difficulty) {
      case 'Easy':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'Hard':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <Badge
      variant={getVariant() as any}
      className={cn(
        "font-medium px-2 py-0.5 text-xs",
        difficulty === 'Easy' && "bg-success text-success-foreground",
        difficulty === 'Medium' && "bg-warning text-warning-foreground",
        difficulty === 'Hard' && "bg-destructive text-destructive-foreground"
      )}
    >
      {difficulty}
    </Badge>
  );
};

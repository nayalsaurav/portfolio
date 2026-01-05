import { Card } from '@/components/ui/card';

export const LeetCodeStats = () => {
  const acceptance = 61.05;
  const radius = 46;
  const circumference = 2 * Math.PI * radius;

  return (
    <Card className="w-full max-w-md p-4">
      <h2 className="text-muted-foreground mb-4 text-sm font-medium">
        nayalsaurav LeetCode Stats
      </h2>

      <div className="flex items-center justify-between gap-4">
        {/* LEFT STATS */}
        <div className="space-y-1.5 text-xs">
          <Stat label="Contest Rating" value="1709" accent="text-violet-500" />
          <Stat label="Contest Ranking" value="98,418" />
          <Stat label="Solved" value="451 / 3801" />
          <Stat label="Easy" value="136 / 921" accent="text-green-500" />
          <Stat label="Medium" value="285 / 1982" accent="text-yellow-500" />
          <Stat label="Hard" value="30 / 898" accent="text-red-500" />
        </div>
      </div>
    </Card>
  );
};

const Stat = ({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) => (
  <div className="flex gap-1.5">
    <span className="text-muted-foreground">{label}:</span>
    <span className={`font-medium ${accent ?? ''}`}>{value}</span>
  </div>
);

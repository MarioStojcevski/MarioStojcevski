import { Card, CardContent } from "./card";
import { borderBlack } from "@/lib/styles";

interface StatsCardProps {
  value: string | number;
  label: string;
  bgColor: string;
  animationDelay: string;
}

export const StatsCard = ({ value, label, bgColor, animationDelay }: StatsCardProps) => {
  return (
    <Card 
      className={`${bgColor} ${borderBlack} text-center animate-[shake-slow_3s_ease-in-out_infinite]`}
      style={{ animationDelay }}
    >
      <CardContent className="pt-6 pb-6">
        <div className="text-5xl font-bold mb-2">{value}</div>
        <div className="text-base font-semibold">{label}</div>
      </CardContent>
    </Card>
  );
};

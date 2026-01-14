interface CoTrainerInfoProps {
  coTrainer: string;
  coTrainerUrl?: string;
}

export const CoTrainerInfo = ({ coTrainer, coTrainerUrl }: CoTrainerInfoProps) => (
  <p className="mt-2 text-sm text-gray-600">
    Co-trainer:{" "}
    {coTrainerUrl ? (
      <a
        href={coTrainerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-600 hover:underline"
      >
        {coTrainer}
      </a>
    ) : (
      <span className="font-semibold">{coTrainer}</span>
    )}
  </p>
);

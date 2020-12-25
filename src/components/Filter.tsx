type FilterType = Readonly<{
  text: string;
  active: boolean;
  onClick: () => void;
}>;

export default function Filter({ text, active, onClick }: FilterType) {
  return (
    <div
      className={`filter ${active ? 'text-dark' : 'text-gray'} select-none`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

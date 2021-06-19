type FilterType = Readonly<{
  text: string;
  active: boolean;
  onClick: () => void;
}>;

export default function Filter({ text, active, onClick }: FilterType) {
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div
      className={`filter ${active ? 'text-dark' : 'text-gray'} select-none`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {text}
    </div>
  );
}

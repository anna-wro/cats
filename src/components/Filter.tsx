type FilterPropsType = {
  text: string;
  active: boolean;
  onClick: () => void;
};

export default function Filter({ text, active, onClick }: FilterPropsType) {
  return (
    <div
      className={`filter ${active ? 'text-dark' : 'text-gray'} select-none`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

type FilterPropsType = {
  text: string;
  active: boolean;
  onClick: () => void;
};

export default function Filter({ text, active, onClick }: FilterPropsType) {
  return (
    <div
      className={`filter ${active ? 'text-gray' : 'text-gray-light'}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

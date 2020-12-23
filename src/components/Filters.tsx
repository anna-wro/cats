type FiltersPropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Search({ value, onChange }: FiltersPropsType) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e)}
      className="border border-gray rounded-lg p-1"
    >
      <option value="+">Po nazwie rosnąco</option>
      <option value="-">Po nazwie malejąco</option>
    </select>
  );
}

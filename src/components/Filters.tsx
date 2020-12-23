type FiltersPropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Search({ value, onChange }: FiltersPropsType) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e)}
      className="filters appearance-none border border-gray rounded-lg py-px pl-2 pr-5 text-xs text-dark font-bold"
    >
      <option value="+">Po nazwie rosnąco</option>
      <option value="-">Po nazwie malejąco</option>
    </select>
  );
}

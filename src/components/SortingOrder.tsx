type SortingOrderType = Readonly<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}>;

export default function SortingOrder({ value, onChange }: SortingOrderType) {
  return (
    <div className="w-40">
      <select
        value={value}
        onBlur={e => onChange(e)}
        className="sorting-order appearance-none border border-gray rounded-lg py-px pl-2 pr-5 
      text-xs text-dark font-bold focus:border-blue focus:outline-none"
      >
        <option value="+">Po nazwie rosnąco</option>
        <option value="-">Po nazwie malejąco</option>
      </select>
    </div>
  );
}

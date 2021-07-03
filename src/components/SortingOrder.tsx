import { copy } from 'consts/copy';

type SortingOrderType = Readonly<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}>;

export default function SortingOrder({ value, onChange }: SortingOrderType) {
  return (
    <div className="w-40">
      <select
        defaultValue={value}
        onBlur={e => onChange(e)}
        aria-label={copy.sortLabel}
        className="sorting-order appearance-none border border-gray rounded-lg py-px pl-2 pr-5 
      text-xs text-dark font-bold focus:border-blue focus:outline-none"
      >
        <option value="+">{copy.sortAscending}</option>
        <option value="-">{copy.sortDescending}</option>
      </select>
    </div>
  );
}

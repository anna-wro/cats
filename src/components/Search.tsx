type SearchPropsType = {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ query, onChange }: SearchPropsType) {
  return (
    <input
      type="search"
      placeholder="Fiołek"
      value={query}
      className="text-lg block mt-20 h-20 w-full p-6 shadow-lg rounded-lg border border-gray-light 
        focus:ring-4 focus:ring-blue focus:ring-opacity-30 focus:border-blue focus:outline-none"
      onChange={(e) => onChange(e)}
    />
  );
}

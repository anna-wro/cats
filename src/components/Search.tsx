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
      className="text-lg block mt-20 mx-auto h-16 w-full max-w-screen-sm p-6 shadow-lg rounded-lg border border-transparent 
        focus:ring-4 focus:ring-blue focus:ring-opacity-30 focus:border-blue focus:outline-none"
      onChange={(e) => onChange(e)}
    />
  );
}

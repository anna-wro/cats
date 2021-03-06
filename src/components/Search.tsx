type SearchType = Readonly<{
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

export default function Search({ query, onChange }: SearchType) {
  return (
    <div className="search relative" role="search">
      <input
        type="search"
        placeholder="Fiołek"
        value={query}
        className="text-lg block mt-10 md:mt-20 h-16 w-full p-6 pl-14 shadow-lg rounded-lg border border-transparent 
        focus:ring-4 focus:ring-blue focus:ring-opacity-30 focus:border-blue focus:outline-none"
        onChange={e => onChange(e)}
      />
    </div>
  );
}

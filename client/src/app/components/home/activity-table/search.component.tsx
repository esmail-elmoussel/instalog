import debounce from "lodash.debounce";

export function Search({ onChange }: { onChange: (text: string) => void }) {
  const debouncedOnChange = debounce(onChange, 500);

  return (
    <input
      type="search"
      className="m-4 p-4 text-sm border rounded-lg bg-instalog-primary focus:bg-white placeholder-kaka-baba"
      placeholder="Search name, email or action..."
      onChange={(e) => debouncedOnChange(e.target.value)}
    />
  );
}

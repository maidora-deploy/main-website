const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Singapore", "United Arab Emirates",
  "Japan", "China", "Sri Lanka", "Nepal", "Bangladesh",
  "Pakistan", "South Africa"
];

export default function CountrySelect({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Select Country</option>
      {countries.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

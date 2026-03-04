import { useState } from "react";

// Lightweight helper: paste newline-separated logo filenames or CSV and it formats JSON entries
// It does not upload files. Intended to help maintainers prepare entries for src/config.ts or data files.
export default function SponsorsAdmin() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const generate = () => {
    const lines = input
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    const items = lines.map((l) => {
      // try CSV: name,logo,website,tier
      const parts = l.split(/,\s*/).map((s) => s.trim());
      const obj = {
        name: parts[0] || "Unnamed",
        logo: parts[1] || `/partners/${parts[0]}.png`,
        website: parts[2] || "#",
      };
      if (parts[3]) obj.tier = parts[3];
      return obj;
    });
    setOutput(JSON.stringify(items, null, 2));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold mb-2">Sponsors Admin (helper)</h3>
      <p className="text-sm text-gray-600 mb-4">
        Paste one sponsor per line as: <code>name,logo,website,tier</code> or just a filename per line.
      </p>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full p-2 border rounded mb-3" rows={6} />
      <div className="flex gap-2">
        <button onClick={generate} className="px-4 py-2 bg-green-600 text-white rounded">
          Generate JSON
        </button>
        <button
          onClick={() => {
            setInput("");
            setOutput("");
          }}
          className="px-4 py-2 border rounded"
        >
          Clear
        </button>
      </div>

      <label className="block mt-4 font-medium">Output (copy into config or data file)</label>
      <textarea value={output} readOnly rows={8} className="w-full p-2 border rounded mt-1 font-mono text-sm" />
    </div>
  );
}

export function Button({ label, primary = false, onClick }: { label: string; primary?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: "8px 16px", border: "none", borderRadius: 6, color: "white", background: primary ? "#4f46e5" : "#64748b" }}
    >
      {label}
    </button>
  );
}

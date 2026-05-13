import { useRef } from "react";

// This component flashes red every time it re-renders
// so you can visually SEE unnecessary re-renders happening

const RenderTracker = ({ label }) => {
  const countRef = useRef(0);
  countRef.current += 1;

  return (
    <div style={styles.tracker}>
      <span style={styles.label}>{label}</span>
      <span style={styles.count}>
        Re-renders: <strong>{countRef.current}</strong>
      </span>
    </div>
  );
};

const styles = {
  tracker: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 12px",
    marginBottom: "6px",
    borderRadius: "6px",
    backgroundColor: "#fff3cd",
    border: "1px solid #ffc107",
    fontSize: "13px",
    animation: "flash 0.4s ease",
  },
  label: { color: "#555", fontWeight: 500 },
  count: { color: "#c0392b" },
};

export default RenderTracker;

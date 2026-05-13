import React from "react";
import { useAppContext } from "../context/AppContext";
import RenderTracker from "../components/RenderTracker";

// Each of these components consumes the shared context
// Watch what happens when you type in the filter box —
// ALL components re-render even if they don't use filter

const ThemePanel = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <div style={cardStyle}>
      <RenderTracker label="ThemePanel" />
      <p style={labelStyle}>Current Theme: <strong>{theme}</strong></p>
      <button
        style={btnStyle("#6c63ff")}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
      <p style={noteStyle}>⚠️ This component only cares about theme — but re-renders when filter/page changes too!</p>
    </div>
  );
};

const UserPanel = () => {
  const { user } = useAppContext();
  return (
    <div style={cardStyle}>
      <RenderTracker label="UserPanel" />
      <p style={labelStyle}>👤 User: <strong>{user.name}</strong> — {user.role}</p>
      <p style={noteStyle}>⚠️ User never changes — but still re-renders on every state update!</p>
    </div>
  );
};

const FilterPanel = () => {
  const { filter, setFilter } = useAppContext();
  return (
    <div style={cardStyle}>
      <RenderTracker label="FilterPanel" />
      <p style={labelStyle}>🔍 Filter</p>
      <input
        style={inputStyle}
        type="text"
        placeholder="Type to filter products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <p style={{ fontSize: "12px", color: "#888", marginTop: "6px" }}>
        Current filter: <strong>{filter || "(none)"}</strong>
      </p>
    </div>
  );
};

const PaginationPanel = () => {
  const { page, setPage } = useAppContext();
  return (
    <div style={cardStyle}>
      <RenderTracker label="PaginationPanel" />
      <p style={labelStyle}>📄 Page: <strong>{page}</strong></p>
      <div style={{ display: "flex", gap: "8px" }}>
        <button style={btnStyle("#27ae60")} onClick={() => setPage(Math.max(1, page - 1))}>← Prev</button>
        <button style={btnStyle("#27ae60")} onClick={() => setPage(page + 1)}>Next →</button>
      </div>
      <p style={noteStyle}>⚠️ Changing page re-renders ThemePanel and UserPanel too!</p>
    </div>
  );
};

const ContextDemo = () => {
  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>❌ Context API — The Re-render Problem</h2>
        <p style={{ margin: "8px 0 0", color: "#888", fontSize: "14px" }}>
          Type in the filter box or change the page. Watch ALL components re-render — even ones that don't care about that change.
        </p>
      </div>
      <div style={gridStyle}>
        <ThemePanel />
        <UserPanel />
        <FilterPanel />
        <PaginationPanel />
      </div>
      <div style={infoBox}>
        <strong>What's happening?</strong> Every component consumes the same AppContext. When <em>any</em> value in the context changes, React re-renders <em>every</em> consumer — regardless of whether it uses that value.
      </div>
    </div>
  );
};

// Styles
const pageStyle = { padding: "24px", fontFamily: "sans-serif" };
const headerStyle = {
  background: "#fff5f5", border: "1px solid #ffcccc",
  borderRadius: "10px", padding: "16px 20px", marginBottom: "20px"
};
const gridStyle = {
  display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px"
};
const cardStyle = {
  background: "#fff", border: "1px solid #e0e0e0",
  borderRadius: "10px", padding: "16px", boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
};
const labelStyle = { margin: "0 0 10px", fontSize: "14px", color: "#333" };
const noteStyle = { fontSize: "12px", color: "#e67e22", marginTop: "10px", fontStyle: "italic" };
const btnStyle = (bg) => ({
  padding: "8px 16px", backgroundColor: bg, color: "#fff",
  border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "13px"
});
const inputStyle = {
  width: "100%", padding: "8px 12px", borderRadius: "6px",
  border: "1px solid #ccc", fontSize: "14px", boxSizing: "border-box"
};
const infoBox = {
  marginTop: "20px", background: "#fff8e1", border: "1px solid #ffe082",
  borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555"
};

export default ContextDemo;

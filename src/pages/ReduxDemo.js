import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setFilter, setPage } from "../store/store";
import RenderTracker from "../components/RenderTracker";

// Each component subscribes ONLY to the slice it needs
// Watch what happens when you type in the filter box —
// ONLY FilterPanel re-renders. ThemePanel and UserPanel stay still.

const ThemePanel = React.memo(() => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div style={cardStyle}>
      <RenderTracker label="ThemePanel" />
      <p style={labelStyle}>Current Theme: <strong>{theme}</strong></p>
      <button
        style={btnStyle("#6c63ff")}
        onClick={() => dispatch(toggleTheme())}
      >
        Toggle Theme
      </button>
      <p style={successNote}>✅ Only re-renders when theme changes!</p>
    </div>
  );
});

const UserPanel = React.memo(() => {
  // Doesn't even connect to the store — static data
  const user = { name: "Roshini", role: "Engineer" };
  return (
    <div style={cardStyle}>
      <RenderTracker label="UserPanel" />
      <p style={labelStyle}>👤 User: <strong>{user.name}</strong> — {user.role}</p>
      <p style={successNote}>✅ Never re-renders — user data doesn't change!</p>
    </div>
  );
});

const FilterPanel = React.memo(() => {
  const filter = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();
  return (
    <div style={cardStyle}>
      <RenderTracker label="FilterPanel" />
      <p style={labelStyle}>🔍 Filter</p>
      <input
        style={inputStyle}
        type="text"
        placeholder="Type to filter products..."
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
      <p style={{ fontSize: "12px", color: "#888", marginTop: "6px" }}>
        Current filter: <strong>{filter || "(none)"}</strong>
      </p>
      <p style={successNote}>✅ Only FilterPanel re-renders when you type!</p>
    </div>
  );
});

const PaginationPanel = React.memo(() => {
  const page = useSelector((state) => state.page.value);
  const dispatch = useDispatch();
  return (
    <div style={cardStyle}>
      <RenderTracker label="PaginationPanel" />
      <p style={labelStyle}>📄 Page: <strong>{page}</strong></p>
      <div style={{ display: "flex", gap: "8px" }}>
        <button style={btnStyle("#27ae60")} onClick={() => dispatch(setPage(Math.max(1, page - 1)))}>← Prev</button>
        <button style={btnStyle("#27ae60")} onClick={() => dispatch(setPage(page + 1))}>Next →</button>
      </div>
      <p style={successNote}>✅ Only PaginationPanel re-renders on page change!</p>
    </div>
  );
});

const ReduxDemo = () => {
  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>✅ Redux — Selective Re-renders</h2>
        <p style={{ margin: "8px 0 0", color: "#888", fontSize: "14px" }}>
          Type in the filter box or change the page. Watch ONLY the relevant component re-render. Everything else stays still.
        </p>
      </div>
      <div style={gridStyle}>
        <ThemePanel />
        <UserPanel />
        <FilterPanel />
        <PaginationPanel />
      </div>
      <div style={infoBox}>
        <strong>What's happening?</strong> Each component subscribes only to the slice it needs via <code>useSelector</code>. Redux's equality check ensures a component re-renders <em>only</em> when its specific slice of state changes.
      </div>
    </div>
  );
};

// Styles
const pageStyle = { padding: "24px", fontFamily: "sans-serif" };
const headerStyle = {
  background: "#f0fff4", border: "1px solid #b2f0cb",
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
const successNote = { fontSize: "12px", color: "#27ae60", marginTop: "10px", fontStyle: "italic" };
const btnStyle = (bg) => ({
  padding: "8px 16px", backgroundColor: bg, color: "#fff",
  border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "13px"
});
const inputStyle = {
  width: "100%", padding: "8px 12px", borderRadius: "6px",
  border: "1px solid #ccc", fontSize: "14px", boxSizing: "border-box"
};
const infoBox = {
  marginTop: "20px", background: "#f0fff4", border: "1px solid #b2f0cb",
  borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555"
};

export default ReduxDemo;

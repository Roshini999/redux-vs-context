import React, { useState } from "react";
import { Provider } from "react-redux";
import { AppProvider } from "./context/AppContext";
import store from "./store/store";
import ContextDemo from "./pages/ContextDemo";
import ReduxDemo from "./pages/ReduxDemo";

const App = () => {
  const [activeTab, setActiveTab] = useState("context");

  return (
    <div style={appStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Context API vs Redux</h1>
        <p style={subtitleStyle}>
          Switch between tabs and interact with the controls. Watch the
          Re-render counters — they tell the whole story.
        </p>

        {/* Tabs */}
        <div style={tabsStyle}>
          <button
            style={tabBtn(activeTab === "context", "#e74c3c")}
            onClick={() => setActiveTab("context")}
          >
            ❌ Context API (Problem)
          </button>
          <button
            style={tabBtn(activeTab === "redux", "#27ae60")}
            onClick={() => setActiveTab("redux")}
          >
            ✅ Redux (Solution)
          </button>
        </div>
      </div>

      {/* Legend */}
      <div style={legendStyle}>
        <span>📊 <strong>Re-render counter</strong> — each yellow box tracks how many times that component has re-rendered since the page loaded.</span>
      </div>

      {/* Content */}
      {activeTab === "context" ? (
        <AppProvider>
          <ContextDemo />
        </AppProvider>
      ) : (
        <Provider store={store}>
          <ReduxDemo />
        </Provider>
      )}

      {/* Footer */}
      <div style={footerStyle}>
        <p>
          💡 <strong>Key takeaway:</strong> Context API re-renders all consumers on any change.
          Redux re-renders only the components subscribed to the changed slice.
        </p>
        <p style={{ marginTop: "6px", color: "#999", fontSize: "12px" }}>
          GitHub: github.com/your-username/redux-vs-context
        </p>
      </div>
    </div>
  );
};

// Styles
const appStyle = {
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
  fontFamily: "'Segoe UI', sans-serif",
};
const headerStyle = {
  background: "#fff",
  borderBottom: "1px solid #e0e0e0",
  padding: "24px 32px 0",
};
const titleStyle = {
  margin: "0 0 6px",
  fontSize: "24px",
  fontWeight: 700,
  color: "#1a1a2e",
};
const subtitleStyle = {
  margin: "0 0 20px",
  color: "#666",
  fontSize: "14px",
  maxWidth: "560px",
};
const tabsStyle = { display: "flex", gap: "0", borderBottom: "none" };
const tabBtn = (active, color) => ({
  padding: "10px 24px",
  border: "none",
  borderBottom: active ? `3px solid ${color}` : "3px solid transparent",
  background: active ? `${color}11` : "transparent",
  color: active ? color : "#888",
  fontWeight: active ? 600 : 400,
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.2s",
});
const legendStyle = {
  padding: "10px 32px",
  background: "#fffde7",
  borderBottom: "1px solid #ffe082",
  fontSize: "13px",
  color: "#555",
};
const footerStyle = {
  margin: "24px 32px",
  padding: "16px 20px",
  background: "#fff",
  border: "1px solid #e0e0e0",
  borderRadius: "10px",
  fontSize: "14px",
  color: "#444",
};

export default App;

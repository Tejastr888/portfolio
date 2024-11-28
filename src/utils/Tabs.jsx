import React from "react";

const Tabs = ({ activeTab, onTabChange }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
            <button
                style={{
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    backgroundColor: activeTab === "work" ? "#007BFF" : "#f1f1f1",
                    color: activeTab === "work" ? "#fff" : "#000",
                    border: "none",
                    borderRadius: "5px",
                }}
                onClick={() => onTabChange("work")}
            >
                Work
            </button>
            <button
                style={{
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    backgroundColor: activeTab === "education" ? "#007BFF" : "#f1f1f1",
                    color: activeTab === "education" ? "#fff" : "#000",
                    border: "none",
                    borderRadius: "5px",
                }}
                onClick={() => onTabChange("education")}
            >
                Education
            </button>
        </div>
    );
};

export default Tabs;

import React, { useState } from "react";
import data from "../data/data.js";
import Tabs from "../utils/Tabs.jsx";
import Templatewe from "../utils/Templatewe.jsx";

const Experience = () => {
    const [activeTab, setActiveTab] = useState("work");

    return (
        <div className="experience" style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            <Templatewe data={data[activeTab]} activeTab={activeTab} />
        </div>
    );
};

export default Experience;
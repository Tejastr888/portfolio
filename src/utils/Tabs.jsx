
// eslint-disable-next-line react/prop-types
const Tabs = ({ activeTab, onTabChange }) => (
  <div className="flex justify-center space-x-8">
    {["work", "education"].map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`px-4 py-2 text-sm tracking-wide border-b-2 ${
          activeTab === tab
            ? "border-current opacity-100"
            : "border-transparent opacity-60 hover:opacity-80"
        } transition-all duration-300`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
);

export default Tabs;
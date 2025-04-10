import { useTheme } from "./ThemeContext";
import PropTypes from 'prop-types';

const Templatewe = ({ data, activeTab, isInView }) => {
    const { darkMode } = useTheme();
    
    return (
        <div className="space-y-8">
            {data.map((item, index) => (
                <div 
                    key={item.id}
                    className={`p-6 rounded-lg ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'
                    } shadow-lg transition-all duration-500 transform ${
                        isInView 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h3 className="text-xl font-bold mb-2 md:mb-0">
                            {activeTab === "work" ? item.company : item.institution}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                            darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-800'
                        }`}>
                            {item.duration}
                        </span>
                    </div>
                    
                    <p className={`text-lg font-semibold mb-4 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        {item.role || item.degree}
                    </p>
                    
                    <ul className="space-y-2">
                        {item.description.map((desc, descIndex) => (
                            <li 
                                key={descIndex}
                                className={`flex items-start ${
                                    darkMode ? 'text-gray-300' : 'text-gray-600'
                                } opacity-0 animate-fadeIn`}
                                style={{ 
                                    animationDelay: `${(index * 200) + (descIndex * 100)}ms`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <span className="mr-2 mt-1.5 text-blue-500">•</span>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

Templatewe.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        company: PropTypes.string,
        institution: PropTypes.string,
        role: PropTypes.string,
        degree: PropTypes.string,
        duration: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    activeTab: PropTypes.oneOf(['work', 'education']).isRequired,
    isInView: PropTypes.bool
};

export default Templatewe;


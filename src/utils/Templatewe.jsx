

const Templatewe = ({data,activeTab}) => {
    return (<>
        {data.map((item) => (
            <div key={item.id}>
                <h3>{activeTab === "work" ? item.company : item.institution}</h3>
                <p><strong>{item.role || item.degree}</strong></p>
                <p><i>{item.duration}</i></p>
                <ul>
                    {item.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        ))}
    </>);
};


export default Templatewe;


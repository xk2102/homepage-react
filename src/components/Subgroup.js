import Link from "./Links";

const Subgroup = (props) => {
  const { subgroup, color } = props;
  return (
    <div className="subgroup" style={{ border: `2px solid ${color}` }}>
      <div className="label">
        <h3>{subgroup.label}</h3>
      </div>
      <div className="links">
        <ul>
          {subgroup.links.map((link, index) => (
            <Link link={link} key={index}></Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Subgroup;

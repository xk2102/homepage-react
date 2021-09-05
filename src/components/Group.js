import Subgroup from "./Subgroup";

const Group = (props) => {
  const { group } = props;
  return (
    <div className="group" style={{ color: group.color }}>
      <div className="label">
        <h2>{group.label}</h2>
      </div>
      <div className="subgroups">
        {group.subgroups.map((subgroup, index) => (
          <Subgroup subgroup={subgroup} color={group.color} key={index}></Subgroup>
        ))}
      </div>
    </div>
  );
};
export default Group;

const Link = (props) => {
  const { link } = props;
  const fontColor = link.fontColor;
  return (
    <li>
      <a href={link.url} style={{ color: fontColor }} target="_blank">
        {link.label}
      </a>
    </li>
  );
};
export default Link;

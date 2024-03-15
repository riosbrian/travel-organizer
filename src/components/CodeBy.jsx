export function CodeBy({ devName, url }) {
  return (
    <div className="codeBy">
      <a href={url} target="_blank">{`Code by ${devName}`}</a>
    </div>
  );
}

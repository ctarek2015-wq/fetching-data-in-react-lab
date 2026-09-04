export default function List({ data }) {
  return (
    <ul>
      {data.map((item) => {
        <li>{item.title}</li>;
      })}
    </ul>
  );
}

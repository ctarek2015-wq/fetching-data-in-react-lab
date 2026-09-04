export default function Button({ fetchData, name }) {
  return (
    <button onClick={fetchData} name={name}>
      All {name}
    </button>
  );
}

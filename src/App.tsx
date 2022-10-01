import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Image search</h2>
      <div className="Search-Bar">
        <input name="query" />
        <button className="Search-Bar-Submit">Search</button>
      </div>
      <div className="Images"></div>
    </div>
  );
}

import Header from "./components/Header";
import Controls from "./components/Controls/Controls";

function App() {
  return (
    <>
      <Header></Header>
      <main className="px-4 py-8">
        <Controls></Controls>
      </main>
    </>
  );
}

export default App;

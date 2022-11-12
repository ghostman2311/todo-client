import { Main } from "./components/Main";
import { NotesProviders } from "./providers/NotesProviders";

function App() {
  return (
    <div className="App">
      <NotesProviders>
        <Main />
      </NotesProviders>
    </div>
  );
}

export default App;

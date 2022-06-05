import './App.css';

function App() {
  const forum = global.forumData || {}

  return (
    <div className="App">
      <header className="App-header">
        <p>{forum.siteName}</p>
      </header>
    </div>
  );
}

export default App;

import NoteList
 from "./components/NoteList"
const App = () => {
  return (
    <div className="container">
      <h2 className="main-head"> <span>Simple & Quick</span> React Web App</h2>
      <NoteList />

      <small className="main-footer">&copy; Stephen Asiedu Maranatha ( <a target="_blank" rel="noopener noreferrer" href="https://steveelites.github.io">See Portfolio</a> ), December 2022</small>
    </div>
  )
}

export default App

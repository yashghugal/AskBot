import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="min-h-[100vh] flex">
        <Sidebar/>
        <Main/>
      </div>
    </>
  )
}

export default App

import Todo from "./components/Todo"
import { TodoProvider } from "./context"

function App() {

  return (
    <TodoProvider>
      <h1 style={{
        textAlign: "center",
        padding: "10px"
      }}>TODO APP</h1>
      <Todo />
    </TodoProvider>
  )
}

export default App

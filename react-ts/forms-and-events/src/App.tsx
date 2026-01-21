import Form from "./components/Forms/Form"
import "./App.css"
import Hello from "./components/Forms/Hello"
const App = () => {
  return (
    <div>
      <Hello name="Alice" />
      <br />
      <Form />
    </div>
  )
}

export default App
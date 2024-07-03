import Card from "./Components/Card";
import './App.css'
function App() {
  let newArr = [1,2,3]
  return (
    <>
      <Card username = "Utkarsh" btnText="Click Me"/>
      <Card username="Hitesh" />
    </>
  );
}

export default App;

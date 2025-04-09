import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "SF", "London", "Paris", "DC"];
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVisibile, setAlertVisibility]= useState(false)
  return (
    <div>
      {alertVisibile && <Alert onClose={() => setAlertVisibility(false)}> You clicked?? </Alert>}
      <Button color="warning" onClick={()=>setAlertVisibility(true)}> Im a Button </Button>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
// hmr hot monitor replacement

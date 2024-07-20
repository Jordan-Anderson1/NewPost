import { useState } from "react";
import NewPost from "./NewPost";
import Confirmation from "./Confirmation";

function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="bg-emerald-900 w-screen h-screen flex items-center justify-center">
      {!submitted && <NewPost setSubmitted={setSubmitted} />}
      {submitted && <Confirmation />}
    </div>
  );
}

export default App;

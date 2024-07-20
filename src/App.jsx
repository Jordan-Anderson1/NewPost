import { useState } from "react";
import NewPost from "./NewPost";

function App() {
  const [submitted, setSubmitted] = useState(true);
  return (
    <div className="bg-emerald-900 w-screen h-screen flex items-center justify-center">
      {!submitted && <NewPost />}
      {submitted && <>}
    </div>
  );
}

export default App;

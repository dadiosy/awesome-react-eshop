import MemoDemo from "./components/memo_demo/Index";
import UseMemoDemo from "./components/useMemo_demo";
import UseCallbackDemo from "./components/usecallback_demo";

import "./App.css";
import UseRefDemo from "./components/useref_demo";

function App() {
  return (
    <div>
      <MemoDemo />
      <UseMemoDemo />
      <UseCallbackDemo />
      <UseRefDemo />
      <h1>scss style</h1>
    </div>
  );
}

export default App;

import MemoDemo from "./components/memo_demo/Index";
import UseMemoDemo from "./components/useMemo_demo";
import UseCallbackDemo from "./components/usecallback_demo";

import "./App.css";

function App() {
  return (
    <div>
      <MemoDemo />
      <UseMemoDemo />
      <UseCallbackDemo />
    </div>
  );
}

export default App;

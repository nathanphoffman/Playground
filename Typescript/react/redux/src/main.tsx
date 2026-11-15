import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";

const counter = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: { increment: (state) => { state.value += 1; } },
});

const store = configureStore({ reducer: { counter: counter.reducer } });
type RootState = ReturnType<typeof store.getState>;

function Counter() {
  const value = useSelector((s: RootState) => s.counter.value);
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(counter.actions.increment())}>Redux count: {value}</button>;
}

createRoot(document.getElementById("root")!).render(
  <Provider store={store}><h1>Hello, Redux</h1><Counter /></Provider>,
);

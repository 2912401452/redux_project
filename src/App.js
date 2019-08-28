import React from 'react';
import './App.css';
// import WelcomeDialog from './components/WelcomeDialog'
// import Child from './components/Child'
// import FilterableProductTable from './components/FilterableProductTable'
// import ContextTest from './components/Context_test'
// import FragmentTest from './components/Fragment_test'
// import Todolist from './co/components/Todolist'
import { Provider } from  'react-redux'
import { store } from "./store/index"
import Todolist from './components/todolist/Todolist'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Todolist></Todolist>
      {/* <FragmentTest></FragmentTest> */}
      {/* <ContextTest></ContextTest> */}
      {/* <FilterableProductTable></FilterableProductTable> */}
        {/* <WelcomeDialog /> */}
        {/* <Child>
          123
        </Child> */}
    </div>
    </Provider>
  );
}

export default App;

import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import Maincontainer from './components/Maincontainer';
import { Watchpage } from './components/Watchpage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },],
  }])
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <RouterProvider router = {appRouter}/>
    </div>
    </Provider>   
  );
}

export default App;

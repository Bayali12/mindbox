import { Header } from './components/Header';
import { Todos } from './pages/Todos';
import { Provider } from 'react-redux';
import store from './store';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Todos />
      </Provider>
    </>
  );
}

export default App;

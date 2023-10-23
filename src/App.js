import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <div className='App'>
      <CounterProvider>
        <Header />
        <Counter />
      </CounterProvider>

    </div>
  );
}

export default App;

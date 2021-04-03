import logo from './logo.svg';
import './App.css';
import Quote from './Quote';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Quote of the day</h2>
          <div className='underline'></div>
        </div>
        <Quote />
      </section>
    </main>
  );
}

export default App;

import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function App() {
  return (
    <div>
      <div className='rect'>RECTANGLE</div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

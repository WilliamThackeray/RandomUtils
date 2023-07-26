import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Random Utilities
      </header>
      <div className='title'>
        Calculator
      </div>
      <div>
        <div className='input-box'></div>
        <div className='calculator'>
          <div className='buttons'>
            <div className='row'>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>+</div>
            </div>
            <div className='row'>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>-</div>
            </div>
            <div className='row'>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>x</div>
            </div>
            <div className='row'>
              <div className='zero'>0</div>
              <div>.</div>
              <div>÷</div>
            </div>
            <div className='row'>
              <div className='allclear'>AC</div>
              <div className='equals'>=</div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

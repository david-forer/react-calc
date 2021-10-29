import Button from "./components/Button";
import "./App.css";
import Input from "./components/Input";
import {useState} from 'react';
import * as math from "mathjs";

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const calculateResult = () => {
    const input = text.join(""); // Remove commas

    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="calculator">
            {/* calculator input */}
            <div className="calculator-input">
              <div id="display" type="number">
                <Input text={text} result={result}/>
              </div>
            </div>
            {/* calculator buttons */}
            <div className="calculator-buttons">
              <div className="row">
                <Button symbol="7" handleClick={addToText} />
                <Button symbol="8" handleClick={addToText}  />
                <Button symbol="9" handleClick={addToText}  />
                <Button symbol="/" handleClick={addToText}/>
              </div>
              <div className="row">
                <Button symbol="4" handleClick={addToText} />
                <Button symbol="5" handleClick={addToText}  />
                <Button symbol="6" handleClick={addToText}  />
                <Button symbol="*" handleClick={addToText}/>
              </div>
              <div className="row">
                <Button symbol="1" handleClick={addToText}  />
                <Button symbol="2" handleClick={addToText}  />
                <Button symbol="3" handleClick={addToText}  />
                <Button symbol="+" handleClick={addToText}/>
              </div>
              <div className="row">
                <Button symbol="0" handleClick={addToText}  />
                <Button symbol="." handleClick={addToText} />
                <Button symbol="=" handleClick={calculateResult}/>
                <Button symbol="-" bgcolor="" handleClick={addToText} />
              </div>
              <div className="is-clear">
                <Button symbol="CLEAR" bgcolor="blue" color="white" handleClick={resetInput}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

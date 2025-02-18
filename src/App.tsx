import { useState } from "react";
import "./App.css";
import { Cake } from "./components/cake/Cake";

function App() {
  const [counter, setCounter] = useState(0);
  const [isCakeClicked, setIsCakeClicked] = useState(false);

  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  const messages = [
    "Wow, 50 years young! You're basically a vintage classic now.",
    "Don’t worry about turning 50. You’re like a fine wine – only better with age!",
    "Congrats on reaching Level 50! Your superpower? Wisdom (and maybe naps).",
    "Officially 50! You’ve earned your badge for being awesome for five decades.",
    "Let’s face it: 50 is just a number. But it’s also a really big number!",
    "50 and still rocking! Your spirit animal is probably a wise owl or a disco ball.",
    "50? More like 30 with 20 years of experience!",
    "You’re not getting older, you’re just becoming a classic.",
    "50 years of life, and still no expiration date in sight!",
    "You’re now officially a senior citizen. Time to start using those senior discounts!",
    "50? That’s just the beginning of the fun!",
    "Age is just a number. And in your case, it’s a very impressive one!",
    "Welcome to the 50s club – where the only thing faster than your age is the speed at which you nap.",
    "You’ve now reached ‘I don’t care what people think’ age. Enjoy the freedom!",
    "You’re 50? Pfft, you’re just one giant life hack now.",
    "Officially 50, but still too cool to act your age.",
    "50 looks so good on you, I might just ask for your skincare routine!",
    "Now that you’re 50, does that mean you get to have cake for breakfast? Asking for a friend.",
  ];

  return (
    <div className="App">
      {!isCakeClicked ? (
        <header className="App-header">
          <h1>🎉 50 & Fabulous! 🎉</h1>
          <p>Welcome to the ultimate 50th birthday celebration!</p>

          <div className="message-box">
            <h2>Here's your birthday message:</h2>
            <p>{messages[counter % messages.length]}</p>
          </div>

          <button onClick={handleButtonClick} className="birthday-button">
            Get Another Birthday Message 🎈
          </button>

          <footer className="footer">
            <p onClick={() => setIsCakeClicked(true)}>
              Don’t forget to have your birthday cake! 🎂
            </p>
          </footer>
        </header>
      ) : (
        <Cake />
      )}
    </div>
  );
}

export default App;

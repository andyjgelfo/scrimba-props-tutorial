import logo from './logo.svg';
import './App.css';
import Joke from "./Joke.js";

export default function App() {
  return(
    <div>
      <Joke
        setup="I got my daughter a fridge for her birthday." 
        punchline="I can't wait to see her face light up when she opens it." 
      />

      <Joke
        setup="How did the hacker escape the police?" 
        punchline="He just ransomware!" 
      />

      <Joke
        setup="Why don't pirates travel on mountain roads?" 
        punchline="Scurvy." 
      />

      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
      />
    
    </div>
    
  )
}
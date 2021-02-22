import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChallengeCard } from "./components/ChallengeCard";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="layout">
        <h1>Welcome Agent Stoneman</h1>
    
        <p>
         If you are reading this you have been able to receive our coded message. We know of your talents dealing with world crises. Now we must prepare you for another mission.
          Below are a series of challenges that will train your mind to do stuff. I need some help with the copy here :)
        </p>

     

        <h2>Key #1</h2>
        <ChallengeCard name="Example Challenge" text="This is the text of the challenge, the answer is 'a'" answer="a" code="coded directions 1"/>
  
        <h2>Key #2</h2>
        <ChallengeCard name="Example Challenge" text="This is the text of the challenge,the answer is 'b'" answer="b" code=" coded directions 2"/>
  
        <h2>Key #3</h2>
        <ChallengeCard name="Example Challenge" text="This is the text of the challenge, the answer is 'c'" answer="c" code="coded directions 3"/>
  
        <h2>Key #4</h2>
        <ChallengeCard name="Example Challenge" text="This is the text of the challenge,the answer is 'd'" answer="d" code="coded directions 4"/>
  
        <h2>Key #5</h2>
        <ChallengeCard name="Example Challenge" text="This is the text of the challenge, the answer is 'e'" answer="e" code="coded directions 5"/>
  
        
        
      </main>

      <Footer />
    </div>
  );
}

export default App;

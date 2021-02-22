import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChallengeCard } from "./components/ChallengeCard";
import { FeedingTimeCard } from "./components/FeedingTimeCard";

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

     

        <h2>Mission #1</h2>
        <ChallengeCard name="Colourful Listening Bugs" text="Five listening bugs are placed into an opaque sack. Two of the bugs are red, one is blue, one is gold, one is green. If you were to select two at random what is the PERCENTAGE probability that the other bug is red?" answer="a" code="coded directions 1"/>
  
        <h2>Mission #2</h2>
        <FeedingTimeCard name="Spies and Wine" answer="yes" code=" coded directions 2"/>
  
        <h2>Mission #3</h2>
        <ChallengeCard name="Escaping the enemy" text="While escaping an enemy base, you have three doors to choose from, one leads to safety whereas the others lead to certain death. They are labelled A B C with signs above each one. The sign above the safe door is definitely true, while at least one of the other two signs are false. The sign on door A says 'Door B leads to death'. The sign on door B says 'This door leads to death' The sign on door C says 'Door A leads to death'. Choose the correct door." answer="c" code="coded directions 3"/>
  
        <h2>Mission #4</h2>
        <ChallengeCard name="Bioweapon Production" text="We have heard reports of a bioweapon being developed in secret in our labs, You have gathered the suspects together for questioning. The Medic said 'I am innocent, the Researcher is the guilty one. I have known the Dispatcher for years now'. The Generalist said 'It was certainly not me. i have done nothing wrong. The Troubleshooter did it' The Researcher Said 'I didn't do it. I know the Dispatcher is innocent too, The Medic hates me'. The Dispatcher said, 'It was nothing to do with me, I have never seen the Medic before in my life. The Generalist is correct, The Troubleshooter is the guilty one!' The Troubleshooter said 'I am not guilty. The generalist lied about me. The Medic is the guilty party'. Who is actually producing the bioweapon?" answer="a" code="coded directions 4"/>
  
        <h2>Mission #5</h2>
        <ChallengeCard name="Challenge 5" text="" answer="e" code="coded directions 5"/>
  
        
        
      </main>

      <Footer />
    </div>
  );
}

export default App;

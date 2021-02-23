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
        <ChallengeCard name="Colourful Listening Bugs" text="Five listening bugs are placed into an opaque sack. Two of the bugs are red, one is blue, one is gold, one is green. If you were to select two at random the odds of the other bug being red is 1 in....?" answer="7" code="coded directions 1"/>
  
        <h2>Mission #2</h2>
        <FeedingTimeCard name="Spies and Wine" answer="yes" code="coded directions 2"/>
  
        <h2>Mission #3</h2>
        <ChallengeCard name="Escaping the enemy" text="While escaping an enemy base, you have three doors to choose from, one leads to safety whereas the others lead to certain death. They are labelled A B C with signs above each one. The sign above the safe door is definitely true, while at least one of the other two signs are false. The sign on door A says 'Door B leads to death'. The sign on door B says 'This door leads to death' The sign on door C says 'Door A leads to death'. Choose the correct door." answer="a" code="coded directions 3"/>
  
        <h2>Mission #4</h2>
        <ChallengeCard name="Bioweapon Production" text="We have heard reports of a bioweapon being developed in secret in our labs, You have gathered the suspects together for questioning. The Medic said 'I am innocent, the Researcher is the guilty one. I have known the Dispatcher for years now'. The Generalist said 'It was certainly not me. i have done nothing wrong. The Troubleshooter did it' The Researcher Said 'I didn't do it. I know the Dispatcher is innocent too, The Medic hates me'. The Dispatcher said, 'It was nothing to do with me, I have never seen the Medic before in my life. The Generalist is correct, The Troubleshooter is the guilty one!' The Troubleshooter said 'I am not guilty. The generalist lied about me. The Medic is the guilty party'. Who is actually producing the bioweapon?" answer="researchernn" code="coded directions 4"/>
  
        <h2>Mission #5</h2>
        <ChallengeCard text="There are 100 passengers boarding a plane we are tracking. They have each been assigned one of the 100 seats, and are queued to board in seat order, first to last. However, the first person in line is irrational, and decides to pick a seat at random to sit in. Each following passenger is rational, and will sit in their correct seat if available, or a random if it is not available. What is the percentage chance the last passenger is able to take their proper last seat?" name="Loading Passengers" answer="50" code="coded directions 5"/>
  
        <h2>Mission #6</h2>
        <ChallengeCard name="Spy Hunt" text="We are tracking the rogue agent. The agent is hiding in one of five spots, which are arranged in a straight line. Each spot is connected to those adjacent by safe passages. Our tracker is able to check one possible hiding spot at a time, after which the rogue agent quickly moves to another spot. Call this exchange one 'turn'. Assuming the rogue agent must move each turn, that there is no quick connection from first spot to last and our tracker is acting rationally, in how many turns can our tracker be certain of catching the rogue agent?" answer="6" code="coded directions 6"/>
  
        
        
      </main>

      <Footer />
    </div>
  );
}

export default App;

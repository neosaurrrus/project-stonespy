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
          If you are reading this you have been able to receive our coded
          message. We know of your talents dealing with world crises. Now we
          must prepare you for another mission. Below is a first mission that
          will prove you are ready.
        </p>

        <p>
          <strong>
            Should you complete the initial mission, You must wait to receive
            further authorization to proceed.
          </strong>
        </p>

        <h2>Mission #1</h2>
        <FeedingTimeCard
          name="Spies and Wine"
          answer="yes"
          code="-... .-. .. -. --. / .. -.. --..-- / .- -. -.. / .- / .-. . --. ..- .-.. .- .-. / ... .... --- .--. .--. .. -. --. / -... .- --. / -... . ..-. --- .-. . / -.-- --- ..- / ... . - / --- ..- - .-.-.- / ..-. .-. --- -- / -.-- --- ..- .-. / .... --- -- . --..-- / .... . .- -.. / . .- ... - / -.. --- .-- -. / - .... . / ... .-- .- -- .--. -.-- / .--. .- - .... /"
        />
        <h2>Mission #2</h2>
        <ChallengeCard
          name="Colourful Listening Bugs"
          text="At the party we want you to deploy some listening bugs. Five listening bugs are placed into an opaque sack. Two of the bugs are red, one is blue, one is gold, one is green. If you were to select two at random the odds of the other bug being red is 1 in....?"
          answer="7"
          code="Tore Urban Rudolf Niklas (mellanslag) Rudolf Ivar Gustav Helge Tore (mellanslag) Adam Tore (mellanslag) Tore Helge Erik (mellanslag) Helge Adam Rudolf Bertil Olof Urban Rudolf (mellanslag) Wilhelm Helge Erik Rudolf Erik (mellanslag) Caesar Ivar Tore Rudolf Urban Sigurd (mellanslag) Caesar Adam Niklas (mellanslag) Bertil Erik (mellanslag) Filip Olof Urban Niklas David"
        />

        <h2>Mission #3</h2>
        <ChallengeCard
          name="Bioweapon Production"
          text="The bugs have uncovered that a bioweapon being developed in secret in our labs! You have gathered the suspects together for questioning. The Medic said 'I am innocent, the Researcher is the guilty one. I have known the Dispatcher for years now'. The Generalist said 'It was certainly not me. i have done nothing wrong. The Troubleshooter did it' The Researcher Said 'I didn't do it. I know the Dispatcher is innocent too, The Medic hates me'. The Dispatcher said, 'It was nothing to do with me, I have never seen the Medic before in my life. The Generalist is correct, The Troubleshooter is the guilty one!' The Troubleshooter said 'I am not guilty. The generalist lied about me. The Medic is the guilty party'. Who is actually producing the bioweapon?"
          answer="researcher"
          code="Jkhd hywxj ruvehu jxu ijqjyed ev jxu qdwho xqhrekh qdt vebbem q iuqiedydw fqjx eluh q iecumxqj isejjyix rhytwu"
        />

        <h2>Mission #4</h2>
        <ChallengeCard
          name="How did this happen?"
          text="Before we could arrest them, the rogue agent in mission #2 escaped! In their escape, they had three doors to choose from, one leads to safety whereas the others led to certain death. They were labelled A B C with signs above each one. The sign above the safe door is definitely true, while at least one of the other two signs are false. The sign on door A says 'Door B leads to death'. The sign on door B says 'This door leads to death' The sign on door C says 'Door A leads to death'. Since the rogue agent escaped, which door did they take?"
          answer="a"
          code="103 157 156 164 151 156 165 145 40 164 151 154 154 40 171 157 165 40 146 151 156 144 40 141 40 162 157 141 144 40 171 157 165 40 143 141 156 40 163 164 145 145 162 40 167 151 164 150 40 141 40 142 157 141 164 56 40 146 157 154 154 157 167 40 151 164 40 164 157 40 164 150 145 40 145 156 144 56"
        />

        <h2>Mission #5</h2>
        <ChallengeCard
          text="There are 100 passengers boarding a plane we are tracking containing the rogue agent. They have each been assigned one of the 100 seats, and are queued to board in seat order, first to last. However, the first person in line is irrational, and decides to pick a seat at random to sit in. Each following passenger is rational, and will sit in their correct seat if available, or a random if it is not available. What is the PERCENTAGE chance the rogue agent, the last passenger to arrive, is able to take their proper last seat?"
          name="Flight Risk"
          answer="50"
          code="gniklaw fi setunim neves tuoba rof acirema morf seirref dnif yam uoy erehw daor eht nwod daeh dna dne eht ta thgir nruT"
        />

        <h2>Mission #6</h2>
        <ChallengeCard
          name="Nearly got them!"
          text="We are closing in on the rogue agent. The agent is hiding in one of five spots, which are arranged in a straight line. Each spot is connected to those adjacent by safe passages. Our tracker is able to check one possible hiding spot at a time, after which the rogue agent quickly moves to another spot. Call this exchange one 'turn'. Assuming the rogue agent must move each turn, that there is no quick connection from first spot to last and our tracker is acting rationally, in how many turns can our tracker be certain of catching the rogue agent?"
          answer="6"
          code="65 116 32 111 110 101 32 104 117 110 100 114 101 100 32 97 110 100 32 115 101 118 101 110 116 121 32 115 105 120 46 32 82 111 115 101 32 70 111 111 100 32 97 110 100 32 87 105 110 101 32 105 115 32 119 104 101 114 101 32 121 111 117 114 32 110 101 120 116 32 109 105 115 115 105 111 110 32 112 97 99 107 32 97 119 97 105 116 115 46"
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;

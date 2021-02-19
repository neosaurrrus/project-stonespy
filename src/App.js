import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { ChallengeCard } from "./components/ChallengeCard";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="layout">
        <h1>Welcome Agent</h1>
    
        <p>
         If you are reading this you have been able to receive our coded message. We know of your talents dealing with world crises. Now we must prepare you for another mission.
        </p>
      

        <h2>What To Do</h2>

        <p>
          Below are a series of challenges that will train your mind to do stuff.
        </p>

     
       
        <hr />
        <h2>Key #1</h2>
        <ChallengeCard name="Something" text="eef okp wko pofeop koe wfpoek wop" answer="something" code="code"/>
        <hr />
        
        
      </main>

      <Footer />
    </div>
  );
}

export default App;

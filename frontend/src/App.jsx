import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Quiz from './components/quiz/Quiz';
import { useNavigate } from "react-router-dom";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import SpotifyPlayerWithExpandableCards from "@/components/expandable-card-demo-standard"
function QuizSection() {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      <BackgroundBeams className="absolute top-0 left-0 z-0 w-full h-full" />
      
      <div className="z-10 text-center px-6 max-w-3xl">
        <h1 className="font-extrabold text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-6 tracking-tight">
          Think you can keep up with Gen Z lingo?
        </h1>
        
        <p className="text-white/80 text-xl md:text-2xl mb-10">
          Test your knowledge of the latest slang and see if you&apos;re bussin&apos; or just basic!
        </p>
        
        <Button 
          onClick={() => navigate("/quiz")} 
          className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-lg py-6 px-10 rounded-full shadow-lg transform transition-all hover:scale-105"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Let&apos;s Go!
        </Button>
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <div>
      <QuizSection />
      <SpotifyPlayerWithExpandableCards/>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;

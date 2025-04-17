import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CheckCircle, XCircle, RefreshCw, Home } from "lucide-react";

const questions = [
    {
        question: "What does 'no cap' mean?",
        answers: [
            { text: "I'm not wearing a hat", type: "beginner" },
            { text: "No lie or exaggeration", type: "expert" },
            { text: "I don't have a bottle cap", type: "beginner" },
            { text: "I'm not interested", type: "intermediate" },
        ]
    },
    {
        question: "Someone says you're 'giving main character energy'. This means:",
        answers: [
            { text: "You're being annoying", type: "beginner" },
            { text: "You're the center of attention", type: "expert" },
            { text: "You should star in a movie", type: "intermediate" },
            { text: "You need to calm down", type: "beginner" },
        ]
    },
    {
        question: "If something is 'bussin', it is:",
        answers: [
            { text: "Really bad", type: "beginner" },
            { text: "Moving quickly", type: "intermediate" },
            { text: "Really good or delicious", type: "expert" },
            { text: "Breaking down", type: "beginner" },
        ]
    },
    {
        question: "What does it mean when someone says 'iykyk'?",
        answers: [
            { text: "I'm just kidding", type: "beginner" },
            { text: "If you know, you know", type: "expert" },
            { text: "I yield to your knowledge", type: "intermediate" },
            { text: "It's your kind of year", type: "beginner" },
        ]
    },
];

const determineSlangLevel = (userAnswers) => {
    const typeCount = {
        beginner: 0,
        intermediate: 0,
        expert: 0
    };

    userAnswers.forEach(answer => {
        if (answer) {
            typeCount[answer.type]++;
        }
    });

    // Calculate total points (weighted scoring)
    const totalPoints = typeCount.beginner * 1 + typeCount.intermediate * 2 + typeCount.expert * 3;
    const maxPoints = userAnswers.length * 3; // Maximum possible points if all answers are "expert"
    const percentage = (totalPoints / maxPoints) * 100;

    if (percentage >= 75) {
        return "You're absolutely slaying the Gen Z slang game!<br><br>Your vibe check: ✓ PASSED<br>You're fluent in Gen Z and could probably teach a masterclass. No cap, you're giving main character energy with your slang knowledge. Very based of you!";
    } else if (percentage >= 50) {
        return "You're pretty mid at Gen Z slang, but in a good way!<br><br>Your vibe check: ✓ MOSTLY PASSED<br>You can hold your own in a conversation with the youths, but might get lost sometimes. Keep practicing and you'll be bussin in no time!";
    } else {
        return "You're a bit of a boomer when it comes to Gen Z slang!<br><br>Your vibe check: ✗ NOT PASSED<br>But it's okay! We can't all be chronically online. Maybe spend some more time on TikTok? (Actually, maybe that's for the best...)";
    }
};

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const handleAnswerClick = (answer) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = answer;
        setUserAnswers(newAnswers);
    };

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleRestartClick = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setShowResults(false);
    };

    if (showResults) {
        return (
            <div className="min-h-screen flex flex-col items-center  relative overflow-hidden">
                {/* <BackgroundBeams className="absolute top-0 left-0 z-0 w-full h-full" /> */}
                
                <div className="z-10 bg-black/70 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                    <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                        Your Gen Z Slang Results:
                    </h1>
                    
                    <div className="text-white text-lg mb-8 leading-relaxed">
                        <p dangerouslySetInnerHTML={{ __html: determineSlangLevel(userAnswers) }}></p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                        <Button 
                            onClick={handleRestartClick}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-lg"
                        >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Try Again
                        </Button>
                        
                        <Button 
                            onClick={() => navigate("/")}
                            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-full shadow-lg"
                        >
                            <Home className="mr-2 h-4 w-4" />
                            Home
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const hasSelectedAnswer = userAnswers[currentQuestionIndex] !== undefined;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black px-4">
            <BackgroundBeams className="absolute top-0 left-0 z-0 w-full h-full" />
            
            <div className="z-10 bg-black/70 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <div className="mb-2 text-fuchsia-400 font-medium">Question {currentQuestionIndex + 1} of {questions.length}</div>
                
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                    {currentQuestion.question}
                </h1>
                
                <div className="grid grid-cols-1 gap-3 mb-6">
                    {currentQuestion.answers.map((answer, index) => (
                        <Button
                            key={index}
                            onClick={() => handleAnswerClick(answer)}
                            className={`
                                text-left justify-start p-4 h-auto 
                                ${userAnswers[currentQuestionIndex] === answer 
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-purple-400"
                                    : "bg-gray-900 hover:bg-gray-800 border-gray-700"
                                }
                                border text-white text-lg font-medium rounded-xl transition-all transform hover:scale-[1.01]
                            `}
                        >
                            {answer.text}
                        </Button>
                    ))}
                </div>
                
                <Button 
                    onClick={handleNextClick}
                    disabled={!hasSelectedAnswer}
                    className={`
                        w-full bg-gradient-to-r from-violet-600 to-indigo-600 
                        ${hasSelectedAnswer 
                            ? "hover:from-violet-700 hover:to-indigo-700 opacity-100" 
                            : "opacity-60 cursor-not-allowed"
                        }
                        text-white font-bold py-3 px-6 rounded-full shadow-lg text-lg
                    `}
                >
                    {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
                </Button>
            </div>
        </div>
    );
}

export default Quiz;
import { useState } from "react";
import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

const translations = {
    English: {
        title: "Which language do you want to practice?",
        buttons: {
            English: "English",
            Persian: "Persian",
            German: "German"
        }
    },
    Persian: {
        title: "کدام زبان را می‌خواهید تمرین کنید؟",
        buttons: {
            English: "انگلیسی",
            Persian: "فارسی",
            German: "آلمانی"
        }
    },
    German: {
        title: "Welche Sprache möchten Sie üben?",
        buttons: {
            English: "Englisch",
            Persian: "persisch",
            German: "Deutsch"
        }
    }
};

function App() {
    const [userLanguage, setUserLanguage] = useState(null);
    const [practiceLanguage, setPracticeLanguage] = useState(null);
    const languageText = translations[userLanguage];

    if (!userLanguage) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-green-500">
                <h2 className="text-2xl font-bold mb-6 text-white">Select Your Language</h2>
                <div className="space-y-4">
                    <button 
                        className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300" 
                        onClick={() => setUserLanguage("English")}>
                        English
                    </button>
                    <button 
                        className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300" 
                        onClick={() => setUserLanguage("Persian")}>
                        Persian
                    </button>
                    <button 
                        className="px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300" 
                        onClick={() => setUserLanguage("German")}>
                        German
                    </button>
                </div>
            </div>
        );
    }

    if (!practiceLanguage) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-400 to-orange-500">
                <h2 className="text-2xl font-bold mb-6 text-white">{languageText.title}</h2>
                <div className="space-y-4">
                    {userLanguage !== "English" && (
                        <button 
                            className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300" 
                            onClick={() => setPracticeLanguage("English")}>
                            {languageText.buttons.English}
                        </button>
                    )}
                    {userLanguage !== "Persian" && (
                        <button 
                            className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300" 
                            onClick={() => setPracticeLanguage("Persian")}>
                            {languageText.buttons.Persian}
                        </button>
                    )}
                    {userLanguage !== "German" && (
                        <button 
                            className="px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300" 
                            onClick={() => setPracticeLanguage("German")}>
                            {languageText.buttons.German}
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return(    
    <>
        <Header />
        <main>
            {userLanguage&& practiceLanguage && (
                <Quiz 
                    userLanguage={userLanguage} 
                    practiceLanguage={practiceLanguage}
                />
            )}            
        </main>
    </>
    );
}

export default App;

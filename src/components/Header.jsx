import logoImg from '../assets/quiz-logo.png';
export default function Header(){
    return <header>
        <img src={logoImg} alt="Quiz logo" />
        <h1>LanguageQuiz</h1>
    </header>
}
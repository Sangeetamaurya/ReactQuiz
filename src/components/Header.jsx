import Image from "../assets/quiz-logo.png";
export default function Header(){
    return <header>
        <img src={Image} alt="quizImage" />
        <h1>React Quiz</h1>
    </header>
}
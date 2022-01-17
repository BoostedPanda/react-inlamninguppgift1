import React from 'react'
import ReactPost from './ReactPost'

const questions = [
    {
        question: "Vad är tre fördelar med att använda React?",
        answer: "Återanvändbarhet är en fördel för när React lanserades så var det ett bibliotek för IOS-appar men nu kan det även användas för mobila och datorer. React använder sig av språket Javascript vilket är bland det populäraste programmeringsspråket, detta väger en stor del av varför React är så populärt idag. React är även open-source, så alla verktyg som behövs för utveckling är gratis och lätt tillgängliga",
    },
    {
        question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
        answer: "Single Page Application så laddas sidan om EN gång, när du klickar till en ny sida så är det så minimal trafik som möjligt och endast data som är relevant skickas som JSON. React, Vue eller Angular används för att rendera om delar av sidan. Webbplatsen kommer kännas som en App. Fördelarna med SPA är att man får snabbare svarstid och sparar processorkraft på servern och att man skriver om sidan dynamiskt! ",
    },
    {
        question: "Nämn tre skillnader mellan React och Angular.",
        answer: "Vue använder sig av HTML templates och JSX medans React använder sig bara av JSX. React är ett bibliotek(library) och Vue är ett ramverk(framework), react förlitar sig på tredje parts bibliotek som är byggt av communityt medans Vue core team stödjer och bygger egna bibliotek. Vue är lättare och lära sig och passar bättre för simpla applikationer medans React kräver att du har en god förståelse för JS och passar bättre för mer komplexa applikationer.",
    },
]


function BulletingBoard() {
    return (
        <div>
            <h1>BulletingBoard</h1>
            <ReactPost questions={questions} />
        </div>
    )
}

export default BulletingBoard

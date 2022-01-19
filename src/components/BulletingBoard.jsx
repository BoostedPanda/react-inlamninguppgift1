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
        answer: "React är ett library(bibliotek) och Angular är ett Framework(ramverk). React använder sig av virtual DOM och en vägs binding medans Angular använder sig av den riktiga DOM:en och två vägs bindning. Angular skrivs i Typescript och har en brant inlärningskurva medans React skrivs i Javascript och är lättare att lära sig",
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

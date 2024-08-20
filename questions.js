const questions = [
    { question: "Held hands with another man", points: 1 },
    { question: "Patted a man’s rear end", points: 1 },
    { question: "Blowed kisses at a man", points: 2 },
    { question: "Complimented a man on his attractiveness", points: 1 },
    { question: "Expressed a desire to engage in sexual activities with another man", points: 2 },
    { question: "Engaged in public displays of flirtation with men", points: 2 },
    { question: "Played a game of gay chicken with another man", points: 3 },
    { question: "Made a move for a kiss with a man without actually kissing", points: 3 },
    { question: "Kissed a man on the cheek", points: 1 },
    { question: "Kissed a man on the lips", points: 3 },
    { question: "Touched another man’s genital area", points: 3 },
    { question: "Performed oral sex on a man", points: 100 },
    { question: "Had sexual intercourse with another man", points: 100 },
    { question: "Sent an explicit photo of one’s own genitalia to a man", points: 3 },
    { question: "Received and saved a sexually explicit photo of a man’s genitalia", points: 2 },
    { question: "Moaned a man’s name", points: 2 },
    { question: "Made suggestive or flirtatious remarks to a man", points: 1 },
    { question: "Held hands with a man in public", points: 3 },
    { question: "Touched a man’s lower back in a flirtatious way", points: 2 },
    { question: "Gave a man a compliment on his appearance in a flirtatious manner", points: 1 },
    { question: "Engaged in suggestive conversation with another man", points: 1 },
    { question: "Sent flirtatious or provocative messages to a man", points: 1 },
    { question: "Gave a man a lingering hug", points: 2 },
    { question: "Playfully nudged a man or touched his shoulder in a flirtatious manner", points: 1 },
    { question: "Expressed admiration for a man’s physique", points: 1 },
    { question: "Sent a suggestive or intimate voice message to a man", points: 2 },
    { question: "Shared a personal or intimate detail with a man in a private setting", points: 3 },
    { question: "Complimented a man’s style or outfit in a flirtatious manner", points: 1 },
    { question: "Engaged in prolonged eye contact with a man", points: 2 },
    { question: "Invited a man to your bedroom", points: 2 },
    { question: "Shower with a dude", points: 2 }
];

function loadQuestions() {
    const form = document.getElementById('quizForm');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `
            <span class="question-number">${index + 1}.</span>
            <input type="checkbox" name="question${index}" value="${q.points}">
            <span class="question-text">${q.question}</span>
        `;
        form.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((_, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    });
    // Redirect to the results page with the score as a query parameter
    window.location.href = `results.html?score=${score}`;
}


window.onload = loadQuestions;

/* =========================================================
   CAREERPATH AI
   STEP 7 - AI INTERVIEW SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("CareerPath AI Interview JS loaded.");

    /* =====================================================
       GET HTML ELEMENTS
       ===================================================== */

    const interviewContainer =
        document.getElementById("interview-container");

    const interviewCareer =
        document.getElementById("interview-career");

    const startButton =
        document.getElementById("start-interview");

    const speakButton =
        document.getElementById("speak-answer");

    const finishAnswerButton =
        document.getElementById("finish-answer");

    const nextButton =
        document.getElementById("next-question");

    const questionElement =
        document.getElementById("interview-question");

    const questionCount =
        document.getElementById("question-count");

    const answerBox =
        document.getElementById("user-answer");

    const speechStatus =
        document.getElementById("speech-status");

    const feedbackBox =
        document.getElementById("interview-feedback");

    const feedbackText =
        document.getElementById("feedback-text");

    const answerScore =
        document.getElementById("answer-score");


    /* =====================================================
       CHECK PAGE
       ===================================================== */

    if (!interviewContainer) {

        console.log(
            "Interview page not detected. Interview JS stopped."
        );

        return;
    }


    /* =====================================================
       GET SELECTED CAREER
       ===================================================== */

    let savedCareer =
        localStorage.getItem("selectedCareer");


    /*
       If selectedCareer is missing, try to recover it
       from other possible keys used by the project.
    */

    if (!savedCareer) {

        savedCareer =
            localStorage.getItem("career");

    }

    if (!savedCareer) {

        savedCareer =
            localStorage.getItem("selectedCareerName");

    }


    /* =====================================================
       SHOW CAREER
       ===================================================== */

    if (interviewCareer) {

        if (savedCareer && savedCareer.trim() !== "") {

            interviewCareer.textContent =
                savedCareer;

        } else {

            interviewCareer.textContent =
                "Career Not Selected";

        }

    }


    /* =====================================================
       INTERVIEW QUESTIONS
       ===================================================== */

    const interviewQuestions = {

        "Web Developer": [

            "Tell me about yourself and your interest in web development.",

            "What is the difference between HTML, CSS and JavaScript?",

            "How would you make a website responsive?",

            "What is the DOM in JavaScript?",

            "Tell me about a web project you have built."

        ],


        "AI/ML Engineer": [

            "Tell me about yourself and your interest in AI and machine learning.",

            "What is machine learning?",

            "What is the difference between supervised and unsupervised learning?",

            "What is overfitting in machine learning?",

            "Tell me about an AI or machine learning project you have worked on."

        ],


        "Data Analyst": [

            "Tell me about yourself and your interest in data analysis.",

            "What is data analysis?",

            "Why is data cleaning important?",

            "What is the difference between SQL and Excel?",

            "Tell me about a data analysis project you have worked on."

        ],


        "Data Scientist": [

            "Tell me about yourself and your interest in data science.",

            "What is the difference between data science and data analysis?",

            "What is a machine learning model?",

            "How do you handle missing data?",

            "Tell me about a data science project you have worked on."

        ],


        "Software Developer": [

            "Tell me about yourself and your interest in software development.",

            "What is object-oriented programming?",

            "What is the difference between a class and an object?",

            "Why are data structures important in software development?",

            "Tell me about a software project you have built."

        ],


        "Cybersecurity Analyst": [

            "Tell me about yourself and your interest in cybersecurity.",

            "What is cybersecurity?",

            "What is phishing?",

            "What is the difference between authentication and authorization?",

            "Tell me about a cybersecurity project you have worked on."

        ]

    };


    /* =====================================================
       GET QUESTIONS FOR CAREER
       ===================================================== */

    let questions =
        interviewQuestions[savedCareer];


    /*
       If the career doesn't exactly match one of the keys,
       use Web Developer questions rather than crashing.
    */

    if (!questions) {

        questions =
            interviewQuestions["Web Developer"];

    }


    /* =====================================================
       VARIABLES
       ===================================================== */

    let currentQuestion = 0;

    let interviewScores = [];

    let recognition = null;

    let finalTranscript = "";

    let isListening = false;

    let recognitionRunning = false;


    /* =====================================================
       INITIAL STATE
       ===================================================== */

    if (speakButton) {

        speakButton.style.display =
            "none";

    }

    if (finishAnswerButton) {

        finishAnswerButton.style.display =
            "none";

    }

    if (nextButton) {

        nextButton.style.display =
            "none";

    }

    if (feedbackBox) {

        feedbackBox.style.display =
            "none";

    }


    /* =====================================================
       SHOW QUESTION
       ===================================================== */

    function showQuestion() {

        if (!questionElement) {

            return;
        }


        questionElement.textContent =
            questions[currentQuestion];


        if (questionCount) {

            questionCount.textContent =
                "Question " +
                (currentQuestion + 1) +
                " / " +
                questions.length;

        }


        if (answerBox) {

            answerBox.value = "";

        }


        if (feedbackBox) {

            feedbackBox.style.display =
                "none";

        }


        if (nextButton) {

            nextButton.style.display =
                "none";

        }


        if (speakButton) {

            speakButton.style.display =
                "inline-block";

            speakButton.disabled =
                false;

        }


        if (finishAnswerButton) {

            finishAnswerButton.style.display =
                "none";

        }


        if (speechStatus) {

            speechStatus.textContent =
                "🎙️ Click Start Speaking and answer the question.";

        }

    }


    /* =====================================================
       START INTERVIEW
       ===================================================== */

    if (startButton) {

        startButton.addEventListener(
            "click",
            function () {

                console.log(
                    "Start Interview clicked."
                );


                currentQuestion = 0;

                interviewScores = [];

                finalTranscript = "";

                isListening = false;


                startButton.style.display =
                    "none";


                showQuestion();

            }
        );

    } else {

        console.error(
            "ERROR: Start Interview button not found."
        );

    }


    /* =====================================================
       SPEECH RECOGNITION
       ===================================================== */

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        console.warn(
            "Speech Recognition is not supported."
        );


        if (speechStatus) {

            speechStatus.textContent =
                "⚠️ Speech recognition is not supported in this browser. Please use Google Chrome.";

        }


        if (speakButton) {

            speakButton.disabled =
                true;

        }

    } else {

        recognition =
            new SpeechRecognition();


        recognition.lang =
            "en-IN";


        recognition.continuous =
            true;


        recognition.interimResults =
            true;


        recognition.maxAlternatives =
            1;


        /* =================================================
           START SPEAKING
           ================================================= */

        if (speakButton) {

            speakButton.addEventListener(
                "click",
                function () {

                    console.log(
                        "Start Speaking clicked."
                    );


                    finalTranscript = "";


                    if (answerBox) {

                        answerBox.value =
                            "";

                    }


                    isListening = true;


                    speakButton.style.display =
                        "none";


                    if (finishAnswerButton) {

                        finishAnswerButton.style.display =
                            "inline-block";

                    }


                    if (speechStatus) {

                        speechStatus.textContent =
                            "🎙️ Listening... You can speak now.";

                    }


                    try {

                        recognition.start();

                        recognitionRunning =
                            true;

                    } catch (error) {

                        console.log(
                            "Recognition already running:",
                            error
                        );

                    }

                }
            );

        }


        /* =================================================
           RECEIVE SPEECH
           ================================================= */

        recognition.onresult =
            function (event) {

                let interimTranscript =
                    "";


                for (
                    let i = event.resultIndex;
                    i < event.results.length;
                    i++
                ) {

                    const transcript =
                        event.results[i][0].transcript;


                    if (
                        event.results[i].isFinal
                    ) {

                        finalTranscript +=
                            transcript + " ";

                    } else {

                        interimTranscript +=
                            transcript;

                    }

                }


                if (answerBox) {

                    answerBox.value =
                        (
                            finalTranscript +
                            interimTranscript
                        ).trim();

                }

            };


        /* =================================================
           SPEECH END
           ================================================= */

        recognition.onend =
            function () {

                recognitionRunning =
                    false;


                if (!isListening) {

                    return;

                }


                if (speechStatus) {

                    speechStatus.textContent =
                        "🎙️ Listening ended. You can continue speaking or finish your answer.";

                }

            };


        /* =================================================
           FINISH ANSWER
           ================================================= */

        if (finishAnswerButton) {

            finishAnswerButton.addEventListener(
                "click",
                function () {

                    console.log(
                        "Finish Answer clicked."
                    );


                    isListening =
                        false;


                    if (recognition) {

                        try {

                            recognition.stop();

                        } catch (error) {

                            console.log(
                                "Recognition stop:",
                                error
                            );

                        }

                    }


                    let answer =
                        finalTranscript.trim();


                    if (!answer && answerBox) {

                        answer =
                            answerBox.value.trim();

                    }


                    if (!answer) {

                        if (speechStatus) {

                            speechStatus.textContent =
                                "❌ No answer detected. Please click Start Speaking and try again.";

                        }


                        if (speakButton) {

                            speakButton.style.display =
                                "inline-block";

                        }


                        finishAnswerButton.style.display =
                            "none";


                        return;

                    }


                    if (answerBox) {

                        answerBox.value =
                            answer;

                    }


                    if (speechStatus) {

                        speechStatus.textContent =
                            "✅ Answer recorded successfully.";

                    }


                    if (speakButton) {

                        speakButton.style.display =
                            "none";

                    }


                    finishAnswerButton.style.display =
                        "none";


                    evaluateAnswer(answer);

                }
            );

        }


        /* =================================================
           SPEECH ERROR
           ================================================= */

        recognition.onerror =
            function (event) {

                console.log(
                    "Speech recognition error:",
                    event.error
                );


                recognitionRunning =
                    false;


                if (event.error === "not-allowed") {

                    isListening =
                        false;


                    if (speechStatus) {

                        speechStatus.textContent =
                            "🎤 Microphone permission denied. Please allow microphone access.";

                    }

                }

                else if (
                    event.error === "audio-capture"
                ) {

                    isListening =
                        false;


                    if (speechStatus) {

                        speechStatus.textContent =
                            "🎤 Microphone not found. Check your microphone.";

                    }

                }

                else if (
                    event.error === "no-speech"
                ) {

                    if (speechStatus) {

                        speechStatus.textContent =
                            "🎙️ No speech detected. Please continue speaking or try again.";

                    }

                }

                else if (
                    event.error === "aborted"
                ) {

                    console.log(
                        "Speech recognition aborted."
                    );

                }

                else {

                    if (speechStatus) {

                        speechStatus.textContent =
                            "⚠️ Speech recognition problem. Please try again.";

                    }

                }

            };

    }


    /* =====================================================
       EVALUATE ANSWER
       ===================================================== */

    function evaluateAnswer(answer) {

        if (!answer || !answer.trim()) {

            return;

        }


        const words =
            answer.trim().split(/\s+/);


        const wordCount =
            words.length;


        let score;


        if (wordCount < 5) {

            score = 3;

        }

        else if (wordCount < 15) {

            score = 5;

        }

        else if (wordCount < 30) {

            score = 7;

        }

        else {

            score = 9;

        }


        interviewScores.push(score);


        if (answerScore) {

            answerScore.textContent =
                "Score: " +
                score +
                "/10";

        }


        if (feedbackText) {

            if (score >= 8) {

                feedbackText.textContent =
                    "Excellent answer. Your response was detailed and well explained.";

            }

            else if (score >= 6) {

                feedbackText.textContent =
                    "Good answer. Try to provide more relevant details and examples.";

            }

            else {

                feedbackText.textContent =
                    "Your answer needs more detail. Try to explain your ideas clearly.";

            }

        }


        if (feedbackBox) {

            feedbackBox.style.display =
                "block";

        }


        if (nextButton) {

            nextButton.style.display =
                "inline-block";

        }

    }


    /* =====================================================
       NEXT QUESTION
       ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                currentQuestion++;


                if (
                    currentQuestion <
                    questions.length
                ) {

                    finalTranscript = "";

                    showQuestion();

                }

                else {

                    finishInterview();

                }

            }
        );

    }


    /* =====================================================
   FINISH INTERVIEW
   STEP 8 - CAREER DASHBOARD
   ===================================================== */

function finishInterview() {

    let total = 0;

    for (let i = 0; i < interviewScores.length; i++) {

        total += interviewScores[i];

    }


    let average = 0;

    if (interviewScores.length > 0) {

        average = Math.round(
            total / interviewScores.length
        );

    }


    /* =================================================
       SAVE INTERVIEW RESULT
       ================================================= */

    localStorage.setItem(
        "interviewScore",
        String(average)
    );

    localStorage.setItem(
        "interviewCompleted",
        "true"
    );


    /* =================================================
       SHOW COMPLETION MESSAGE
       ================================================= */

    if (questionElement) {

        questionElement.textContent =
            "🎉 Interview Completed!";

    }


    if (questionCount) {

        questionCount.textContent =
            "Completed";

    }


    if (answerBox) {

        answerBox.value = "";

    }


    if (speechStatus) {

        speechStatus.textContent =
            "✅ Interview completed successfully!";

    }


    if (feedbackText) {

        feedbackText.textContent =
            "Your overall interview score is " +
            average +
            "/10.";

    }


    if (answerScore) {

        answerScore.textContent =
            "Overall Score: " +
            average +
            "/10";

    }


    if (feedbackBox) {

        feedbackBox.style.display =
            "block";

    }


    /* =================================================
       HIDE INTERVIEW BUTTONS
       ================================================= */

    if (speakButton) {

        speakButton.style.display =
            "none";

    }


    if (finishAnswerButton) {

        finishAnswerButton.style.display =
            "none";

    }


    if (nextButton) {

        nextButton.style.display =
            "none";

    }

    /* =================================================
   CREATE DASHBOARD BUTTON
   ================================================= */

let dashboardButton =
    document.getElementById(
        "go-dashboard"
    );


if (!dashboardButton) {

    dashboardButton =
        document.createElement("button");

    dashboardButton.id =
        "go-dashboard";

    dashboardButton.className =
        "continue-btn";

    dashboardButton.textContent =
        "🎯 Go to Career Dashboard →";


    dashboardButton.style.marginTop =
        "20px";


    const interviewBox =
        document.querySelector(
            ".ai-interview-box"
        );


    if (interviewBox) {

        interviewBox.appendChild(
            dashboardButton
        );

    }

}


/* =================================================
   DASHBOARD BUTTON CLICK
   ================================================= */

dashboardButton.onclick =
    function () {

        window.location.href =
            "dashboard.html";

    };

    

}

});
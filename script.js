// ========================================
// CAREER SELECTION
// ========================================

const careerCards = document.querySelectorAll(".career-card");
const continueButton = document.querySelector(".continue-btn");

let selectedCareer = "";


// Check if career cards exist on the current page

if (careerCards.length > 0) {

    careerCards.forEach(function(card) {

        card.addEventListener("click", function() {

            // Remove selection from all cards
            careerCards.forEach(function(otherCard) {
                otherCard.classList.remove("selected");
            });

            // Select clicked card
            card.classList.add("selected");

            // Get career name
            selectedCareer = card.dataset.career;

            console.log("Selected Career:", selectedCareer);

        });

    });


    // Continue button

    if (continueButton) {

        continueButton.addEventListener("click", function() {

            if (selectedCareer === "") {

                alert("Please select a career first.");

                return;
            }

            // Save selected career
            localStorage.setItem(
                "selectedCareer",
                selectedCareer
            );

            // Go to assessment page
            window.location.href = "assessment.html";

        });

    }

}


// ========================================
// CAREER SKILLS
// ========================================

const careerSkills = {

    "AI/ML Engineer": [
        "Python",
        "Mathematics",
        "Statistics",
        "Machine Learning",
        "SQL",
        "Data Structures",
        "Algorithms",
        "Data Preprocessing",
        "Feature Engineering",
        "Deep Learning",
        "Model Evaluation",
        "AI Project Development"
    ],

    "Data Analyst": [
        "Excel",
        "SQL",
        "Statistics",
        "Python",
        "Data Visualization",
        "Data Cleaning",
        "Pivot Tables",
        "Data Analysis",
        "Charts & Dashboards",
        "Database Knowledge",
        "Problem Solving",
        "Analytical Thinking"
    ],

    "Data Scientist": [
        "Python",
        "Statistics",
        "Mathematics",
        "Machine Learning",
        "Data Analysis",
        "SQL",
        "Data Cleaning",
        "Data Visualization",
        "Feature Engineering",
        "Deep Learning",
        "Model Evaluation",
        "Data Science Projects"
    ],

    "Software Developer": [
        "Programming",
        "Data Structures",
        "Algorithms",
        "Git & GitHub",
        "Object-Oriented Programming",
        "Problem Solving",
        "Database Management",
        "Software Design",
        "Debugging",
        "Version Control",
        "Testing",
        "Software Project Development"
    ],

    "Web Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Web APIs",
        "DOM Manipulation",
        "Git & GitHub",
        "Frontend Development",
        "Backend Basics",
        "Database Basics",
        "Web Security",
        "Web Project Development"
    ],

    "Cybersecurity Analyst": [
        "Computer Networks",
        "Operating Systems",
        "Cybersecurity",
        "Linux",
        "Cyber Threats",
        "Network Security",
        "Cryptography",
        "Ethical Hacking",
        "Security Tools",
        "Incident Response",
        "Vulnerability Assessment",
        "Security Monitoring"
    ]

};


// ========================================
// SKILL ASSESSMENT
// ========================================

const selectedCareerElement =
    document.getElementById("selected-career");

const questionsContainer =
    document.getElementById("questions-container");


// Check if we are on assessment page

if (selectedCareerElement && questionsContainer) {

    // Get saved career

    const savedCareer =
        localStorage.getItem("selectedCareer");

        const projectCareer =
    document.getElementById("project-career");

if (projectCareer) {
    projectCareer.textContent =
        savedCareer || "Unknown Career";
}


    // Display selected career

    if (savedCareer) {

        selectedCareerElement.textContent =
            savedCareer;

    } else {

        selectedCareerElement.textContent =
            "No career selected";

    }


    // ========================================
    // QUESTIONS FOR EACH CAREER
    // ========================================

    const questions = {

    "AI/ML Engineer": [

        "How comfortable are you with Python programming?",
        "How well do you understand Python functions and data structures?",
        "How comfortable are you with mathematics used in Machine Learning?",
        "How familiar are you with probability and statistics?",
        "How familiar are you with NumPy and Pandas?",
        "How comfortable are you with data preprocessing?",
        "How familiar are you with Machine Learning algorithms?",
        "How well do you understand supervised and unsupervised learning?",
        "How familiar are you with model training and testing?",
        "How comfortable are you with evaluating ML models?",
        "How familiar are you with SQL and databases?",
        "How confident are you in building a basic Machine Learning project?"

    ],


    "Data Analyst": [

        "How comfortable are you with Microsoft Excel?",
        "How familiar are you with Excel formulas and functions?",
        "How comfortable are you with SQL queries?",
        "How familiar are you with filtering and sorting datasets?",
        "How comfortable are you with statistics?",
        "How familiar are you with data cleaning?",
        "How comfortable are you with Python for data analysis?",
        "How familiar are you with Pandas?",
        "How comfortable are you creating charts and visualizations?",
        "How familiar are you with Power BI or similar tools?",
        "How comfortable are you finding patterns in datasets?",
        "How confident are you in creating a complete data analysis project?"

    ],


    "Data Scientist": [

        "How comfortable are you with Python programming?",
        "How familiar are you with NumPy and Pandas?",
        "How comfortable are you with mathematics?",
        "How familiar are you with probability and statistics?",
        "How comfortable are you with data preprocessing?",
        "How familiar are you with exploratory data analysis?",
        "How comfortable are you with Machine Learning?",
        "How familiar are you with supervised learning?",
        "How familiar are you with unsupervised learning?",
        "How comfortable are you with evaluating ML models?",
        "How familiar are you with SQL and databases?",
        "How confident are you in building a Data Science project?"

    ],


    "Software Developer": [

        "How comfortable are you with programming fundamentals?",
        "How comfortable are you with variables, loops and functions?",
        "How familiar are you with Object-Oriented Programming?",
        "How comfortable are you with Data Structures?",
        "How familiar are you with Algorithms?",
        "How comfortable are you with problem solving?",
        "How familiar are you with databases and SQL?",
        "How comfortable are you with debugging programs?",
        "How familiar are you with Git and GitHub?",
        "How comfortable are you working with APIs?",
        "How familiar are you with software development practices?",
        "How confident are you in building a complete software project?"

    ],


    "Web Developer": [

        "How comfortable are you with HTML?",
        "How comfortable are you with CSS?",
        "How familiar are you with Flexbox and Grid?",
        "How comfortable are you with JavaScript?",
        "How familiar are you with DOM manipulation?",
        "How comfortable are you creating responsive websites?",
        "How familiar are you with JavaScript events?",
        "How comfortable are you working with APIs?",
        "How familiar are you with Git and GitHub?",
        "How comfortable are you debugging website errors?",
        "How familiar are you with basic web security?",
        "How confident are you in building a complete responsive website?"

    ],


    "Cybersecurity Analyst": [

        "How familiar are you with computer networks?",
        "How comfortable are you with networking concepts such as TCP/IP?",
        "How familiar are you with operating systems?",
        "How comfortable are you using Linux?",
        "How familiar are you with cybersecurity fundamentals?",
        "How familiar are you with common cyber attacks?",
        "How comfortable are you with network security concepts?",
        "How familiar are you with authentication and access control?",
        "How familiar are you with firewalls and security tools?",
        "How comfortable are you analyzing security threats?",
        "How familiar are you with basic ethical hacking concepts?",
        "How confident are you in handling a basic cybersecurity incident?"

    ]

};

    // Get questions for selected career

    const careerQuestions =
        questions[savedCareer] || [];


    // ========================================
    // CREATE QUESTIONS
    // ========================================

    careerQuestions.forEach(function(question, index) {

        const questionCard =
            document.createElement("div");

        questionCard.classList.add("question-card");


        questionCard.innerHTML = `

            <h3>
                ${index + 1}. ${question}
            </h3>


            <label class="option">

                <input
                    type="radio"
                    name="question${index}"
                    value="1"
                >

                Beginner

            </label>


            <label class="option">

                <input
                    type="radio"
                    name="question${index}"
                    value="2"
                >

                Basic

            </label>


            <label class="option">

                <input
                    type="radio"
                    name="question${index}"
                    value="3"
                >

                Intermediate

            </label>


            <label class="option">

                <input
                    type="radio"
                    name="question${index}"
                    value="4"
                >

                Advanced

            </label>

        `;


        questionsContainer.appendChild(questionCard);

    });

}


// ========================================
// ASSESSMENT SCORING
// ========================================

const submitAssessment =
    document.getElementById("submit-assessment");


if (submitAssessment) {

    submitAssessment.addEventListener("click", function() {

        const savedCareer =
            localStorage.getItem("selectedCareer");


        const totalQuestions =
            document.querySelectorAll(".question-card").length;


        let totalScore = 0;

        let allAnswered = true;


        const answers = [];


        // ========================================
        // CHECK EVERY QUESTION
        // ========================================

        for (let i = 0; i < totalQuestions; i++) {

            const selectedAnswer =
                document.querySelector(
                    `input[name="question${i}"]:checked`
                );


            if (!selectedAnswer) {

                allAnswered = false;

                break;

            }


            const score =
                Number(selectedAnswer.value);


            totalScore += score;

            answers.push(score);

        }


        // ========================================
        // STOP IF NOT ALL QUESTIONS ANSWERED
        // ========================================

        if (!allAnswered) {

            alert(
                "Please answer all questions before continuing."
            );

            return;

        }


        // ========================================
        // OVERALL SCORE
        // ========================================

        const maximumScore =
            totalQuestions * 4;


        const percentage =
            Math.round(
                (totalScore / maximumScore) * 100
            );


        // ========================================
        // SKILL GROUPS
        // ========================================

        const skillGroups = {

    "AI/ML Engineer": [

        ["Python", [0, 1]],

        ["Mathematics", [2, 3]],

        ["Statistics", [4, 5]],

        ["Machine Learning", [6, 7]],

        ["Deep Learning", [8, 9]],

        ["SQL & Data Handling", [10, 11]]

    ],


    "Data Analyst": [

        ["Excel", [0, 1]],

        ["SQL", [2, 3]],

        ["Statistics", [4, 5]],

        ["Python", [6, 7]],

        ["Data Visualization", [8, 9]],

        ["Data Analysis", [10, 11]]

    ],


    "Data Scientist": [

        ["Python", [0, 1]],

        ["Statistics", [2, 3]],

        ["Mathematics", [4, 5]],

        ["Data Analysis", [6, 7]],

        ["Machine Learning", [8, 9]],

        ["Data Science", [10, 11]]

    ],


    "Software Developer": [

        ["Programming", [0, 1]],

        ["Object-Oriented Programming", [2, 3]],

        ["Data Structures", [4, 5]],

        ["Algorithms", [6, 7]],

        ["Git & GitHub", [8, 9]],

        ["Software Development", [10, 11]]

    ],


    "Web Developer": [

        ["HTML", [0, 1]],

        ["CSS & Responsive Design", [2, 3]],

        ["JavaScript", [4, 5]],

        ["Web APIs", [6, 7]],

        ["Frontend Development", [8, 9]],

        ["Web Development", [10, 11]]

    ],


    "Cybersecurity Analyst": [

        ["Computer Networks", [0, 1]],

        ["Operating Systems", [2, 3]],

        ["Cybersecurity Fundamentals", [4, 5]],

        ["Linux & Security", [6, 7]],

        ["Threat Analysis", [8, 9]],

        ["Security Monitoring", [10, 11]]

    ]

};


        // ========================================
        // CALCULATE SKILL RESULTS
        // ========================================

        const skillResults = [];


        const groups =
            skillGroups[savedCareer] || [];


        groups.forEach(function(group) {

            const skillName = group[0];

            const questionIndexes = group[1];


            let skillTotal = 0;


            questionIndexes.forEach(function(index) {

                skillTotal += answers[index];

            });


            const skillMaximum =
                questionIndexes.length * 4;


            const skillPercentage =
                Math.round(
                    (skillTotal / skillMaximum) * 100
                );


            skillResults.push({

                skill: skillName,

                score: skillTotal,

                percentage: skillPercentage

            });

        });


        // ========================================
        // SAVE RESULTS
        // ========================================

        localStorage.setItem(
            "assessmentScore",
            percentage
        );


        localStorage.setItem(
            "skillResults",
            JSON.stringify(skillResults)
        );


        // ========================================
        // CONSOLE
        // ========================================

        console.log(
            "Career:",
            savedCareer
        );


        console.log(
            "Overall Score:",
            percentage + "%"
        );


        console.log(
            "Skill Results:",
            skillResults
        );


        // ========================================
        // GO TO RESULTS
        // ========================================

        window.location.href =
            "results.html";

    });

}


// ========================================
// DISPLAY RESULTS
// ========================================

const resultCareer =
    document.getElementById("result-career");

const overallScore =
    document.getElementById("overall-score");

const skillLevel =
    document.getElementById("skill-level");


if (
    resultCareer &&
    overallScore &&
    skillLevel
) {

    // Get saved data

    const savedCareer =
        localStorage.getItem("selectedCareer");


    const savedScore =
        localStorage.getItem("assessmentScore");


    const savedSkills =
        JSON.parse(
            localStorage.getItem("skillResults")
        ) || [];


    // Display career

    resultCareer.textContent =
        savedCareer || "Unknown Career";


    // Display overall score

    overallScore.textContent =
        (savedScore || 0) + "%";


    // ========================================
    // DETERMINE SKILL LEVEL
    // ========================================

    const score =
        Number(savedScore);


    if (score < 40) {

        skillLevel.textContent =
            "Beginner";

    }

    else if (score < 60) {

        skillLevel.textContent =
            "Basic";

    }

    else if (score < 80) {

        skillLevel.textContent =
            "Intermediate";

    }

    else {

        skillLevel.textContent =
            "Advanced";

    }


    // ========================================
    // DISPLAY INDIVIDUAL SKILLS
    // ========================================

    const skillContainer =
        document.getElementById("skill-results");


    if (skillContainer) {

        skillContainer.innerHTML = "";


        savedSkills.forEach(function(skill) {

            const skillItem =
                document.createElement("div");


            skillItem.classList.add(
                "skill-result-item"
            );


            // Determine skill status

            let status = "";

            let statusClass = "";


            if (skill.percentage >= 80) {

                status = "Strong";

                statusClass = "strong";

            }

            else if (skill.percentage >= 60) {

                status = "Moderate";

                statusClass = "moderate";

            }

            else if (skill.percentage >= 40) {

                status = "Needs Improvement";

                statusClass = "improvement";

            }

            else {

                status = "High Priority";

                statusClass = "priority";

            }


            skillItem.innerHTML = `

                <div class="skill-info">

                    <strong>
                        ${skill.skill}
                    </strong>

                    <span class="${statusClass}">
                        ${skill.percentage}%
                        -
                        ${status}
                    </span>

                </div>


                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width: ${skill.percentage}%"
                    ></div>

                </div>

            `;


            skillContainer.appendChild(
                skillItem
            );

        });

    }

}

// ========================================
// ROADMAP BUTTON
// ========================================

const roadmapButton =
    document.getElementById("roadmap-button");


if (roadmapButton) {

    roadmapButton.addEventListener("click", function() {

        window.location.href = "roadmap.html";

    });

}

// ========================================
// ROADMAP PAGE
// ========================================

const roadmapCareer =
    document.getElementById("roadmap-career");

if (roadmapCareer) {

    const savedCareer =
        localStorage.getItem("selectedCareer");

    roadmapCareer.textContent =
        savedCareer || "Unknown Career";

}

// ========================================
// PERSONALIZED ROADMAP
// ========================================
 // ========================================
// PERSONALIZED ROADMAP
// ========================================

const roadmapContent =
    document.getElementById("roadmap-content");

if (roadmapContent) {

    const savedCareer =
        localStorage.getItem("selectedCareer");

    const savedSkills =
        JSON.parse(
            localStorage.getItem("skillResults")
        ) || [];


    // ========================================
    // ROADMAP TOPICS FOR EACH CAREER
    // ========================================

    const roadmapTopics = {

        "AI/ML Engineer": {

            "Python": "Python Programming",

            "Mathematics": "Mathematics for AI",

            "Statistics": "Statistics",

            "Machine Learning": "Machine Learning",

            "Deep Learning": "Deep Learning",

            "SQL & Data Handling": "SQL & Data Handling"

        },


        "Data Analyst": {

            "Excel": "Advanced Excel",

            "SQL": "SQL & Databases",

            "Statistics": "Statistics",

            "Python": "Python for Data Analysis",

            "Data Visualization": "Data Visualization",

            "Data Analysis": "Data Analysis Projects"

        },


        "Data Scientist": {

            "Python": "Python Programming",

            "Statistics": "Statistics",

            "Mathematics": "Mathematics for Data Science",

            "Data Analysis": "Data Analysis",

            "Machine Learning": "Machine Learning",

            "Data Science": "Data Science Projects"

        },


        "Software Developer": {

            "Programming": "Programming Fundamentals",

            "Object-Oriented Programming":
                "Object-Oriented Programming",

            "Data Structures":
                "Data Structures",

            "Algorithms":
                "Algorithms",

            "Git & GitHub":
                "Git & GitHub",

            "Software Development":
                "Software Development Projects"

        },


        "Web Developer": {

            "HTML": "HTML Fundamentals",

            "CSS & Responsive Design":
                "CSS & Responsive Web Design",

            "JavaScript":
                "JavaScript Programming",

            "Web APIs":
                "Web APIs",

            "Frontend Development":
                "Frontend Development",

            "Web Development":
                "Web Development Projects"

        },


        "Cybersecurity Analyst": {

            "Computer Networks":
                "Computer Networks",

            "Operating Systems":
                "Operating Systems",

            "Cybersecurity Fundamentals":
                "Cybersecurity Fundamentals",

            "Linux & Security":
                "Linux & Security",

            "Threat Analysis":
                "Threat Analysis",

            "Security Monitoring":
                "Security Monitoring"

        }

    };


    // ========================================
    // GET ROADMAP FOR SELECTED CAREER
    // ========================================

    const careerTopics =
        roadmapTopics[savedCareer] || {};


    // ========================================
    // SORT SKILLS
    // LOWEST SCORE FIRST
    // ========================================

    const personalizedSkills =
        [...savedSkills].sort(function(a, b) {

            return a.percentage - b.percentage;

        });


    // ========================================
    // CLEAR OLD ROADMAP
    // ========================================

    roadmapContent.innerHTML = "";


    // ========================================
    // CREATE PERSONALIZED PHASES
    // ========================================

    personalizedSkills.forEach(
        function(skill, index) {

            const card =
                document.createElement("div");


            card.classList.add(
                "roadmap-step"
            );


            const roadmapTopic =
                careerTopics[skill.skill]
                || skill.skill;


            let priority = "";
            let priorityClass = "";


            // ========================================
            // DETERMINE PRIORITY
            // ========================================

            if (skill.percentage < 40) {

                priority =
                    "🔴 High Priority";

                priorityClass =
                    "priority";

            }

            else if (skill.percentage < 60) {

                priority =
                    "🟠 Needs Improvement";

                priorityClass =
                    "improvement";

            }

            else if (skill.percentage < 80) {

                priority =
                    "🟡 Moderate";

                priorityClass =
                    "moderate";

            }

            else {

                priority =
                    "🟢 Strong";

                priorityClass =
                    "strong";

            }


            // ========================================
            // CREATE ROADMAP CARD
            // ========================================

            card.innerHTML = `

                <div class="roadmap-phase">

                    Phase ${index + 1}

                </div>


                <h3>

                    ${roadmapTopic}

                </h3>


                <div class="roadmap-score ${priorityClass}">

                    Current Skill:
                    ${skill.percentage}%

                    <span>
                        ${priority}
                    </span>

                </div>


                <p>

                    Focus on ${roadmapTopic}
                    to improve your
                    ${skill.skill}
                    skills for your
                    ${savedCareer}
                    career path.

                </p>


                <div class="roadmap-progress">

                    <div
                        class="roadmap-progress-fill"
                        style="width: ${skill.percentage}%">
                    </div>

                </div>

            `;


            roadmapContent.appendChild(
                card
            );

        }
    );

    // Mark Roadmap as completed
localStorage.setItem("roadmapCompleted", "true");


    // ========================================
    // FINAL PROJECT PHASE
    // ========================================

    const projectCard =
        document.createElement("div");


    projectCard.classList.add(
        "roadmap-step"
    );


    projectCard.innerHTML = `

        <div class="roadmap-phase">

            Final Phase

        </div>


        <h3>

            🚀 Build a Career Project

        </h3>


        <p>

            Combine the skills you developed
            and build a practical project
            related to your
            ${savedCareer}
            career path.

        </p>

    `;


    roadmapContent.appendChild(
        projectCard
    );

}



// ========================================
// SKILL GAP FOR ROADMAP
// ========================================

const skillGap =
    document.getElementById("skill-gap");

if (skillGap) {

    const savedSkills =
        JSON.parse(
            localStorage.getItem("skillResults")
        ) || [];

    skillGap.innerHTML = `
        <h2>🎯 Your Skill Analysis</h2>
    `;

    savedSkills.forEach(function(skill) {

        let status = "";

        if (skill.percentage >= 80) {
            status = "Strong ✅";
        }
        else if (skill.percentage >= 60) {
            status = "Good 👍";
        }
        else if (skill.percentage >= 40) {
            status = "Needs Improvement ⚠️";
        }
        else {
            status = "High Priority 🔴";
        }

        const skillCard =
            document.createElement("div");

        skillCard.classList.add("skill-gap-card");

        skillCard.innerHTML = `
            <strong>${skill.skill}</strong>
            <span>${skill.percentage}% - ${status}</span>
        `;

        skillGap.appendChild(skillCard);

    });

}

// ========================================
// STUDY PLANNER WITH PROGRESS TRACKING
// ========================================

const plannerCareer =
    document.getElementById("planner-career");

const plannerContent =
    document.getElementById("planner-content");

if (plannerCareer && plannerContent) {

    const savedCareer =
        localStorage.getItem("selectedCareer");
        
        

        

    plannerCareer.textContent =
        savedCareer || "Unknown Career";


    // ========================================
    // STUDY PLANS
    // ========================================

    const studyPlans = {

    // ========================================
    // WEB DEVELOPER - 12 WEEKS
    // ========================================

    "Web Developer": [

        {
            topic: "HTML Fundamentals",
            learn: "HTML structure, tags, headings, links, images and forms",
            task: "Create a personal profile webpage"
        },

        {
            topic: "CSS Fundamentals",
            learn: "Selectors, colors, typography, spacing and box model",
            task: "Style your personal profile webpage"
        },

        {
            topic: "Flexbox & Grid",
            learn: "Flexbox, CSS Grid and modern page layouts",
            task: "Create a responsive landing page"
        },

        {
            topic: "Responsive Web Design",
            learn: "Media queries, mobile layouts and responsive components",
            task: "Make your website mobile responsive"
        },

        {
            topic: "JavaScript Fundamentals",
            learn: "Variables, data types, operators, conditions and loops",
            task: "Build an interactive calculator"
        },

        {
            topic: "JavaScript Functions & Arrays",
            learn: "Functions, arrays, objects and modern JavaScript",
            task: "Build a small quiz application"
        },

        {
            topic: "DOM Manipulation",
            learn: "DOM elements, events, forms and dynamic webpage updates",
            task: "Create an interactive to-do application"
        },

        {
            topic: "Web APIs",
            learn: "Fetch API, JSON, asynchronous JavaScript and API requests",
            task: "Build a webpage that displays API data"
        },

        {
            topic: "Git & GitHub",
            learn: "Repositories, commits, branches and project management",
            task: "Upload your project to GitHub"
        },

        {
            topic: "Frontend Project",
            learn: "Combine HTML, CSS and JavaScript into a complete application",
            task: "Build a complete frontend project"
        },

        {
            topic: "Deployment",
            learn: "Website deployment, debugging and basic hosting concepts",
            task: "Deploy your project online"
        },

        {
            topic: "Portfolio Development",
            learn: "Portfolio design, project presentation and GitHub integration",
            task: "Create and publish your developer portfolio"
        }

    ],


    // ========================================
    // AI/ML ENGINEER - 12 WEEKS
    // ========================================

    "AI/ML Engineer": [

        {
            topic: "Python Fundamentals",
            learn: "Variables, data types, conditions, loops and functions",
            task: "Build a basic Python application"
        },

        {
            topic: "Python Data Structures",
            learn: "Lists, tuples, dictionaries, sets and file handling",
            task: "Create a Python data management program"
        },

        {
            topic: "Object-Oriented Python",
            learn: "Classes, objects, inheritance and reusable code",
            task: "Build a small OOP-based Python application"
        },

        {
            topic: "NumPy",
            learn: "Arrays, mathematical operations and numerical computing",
            task: "Perform numerical analysis using NumPy"
        },

        {
            topic: "Pandas",
            learn: "DataFrames, data loading, filtering and grouping",
            task: "Analyze a CSV dataset using Pandas"
        },

        {
            topic: "Mathematics for AI",
            learn: "Linear algebra, vectors, matrices and basic calculus",
            task: "Practice mathematical problems used in ML"
        },

        {
            topic: "Statistics & Probability",
            learn: "Probability, distributions, mean, variance and correlation",
            task: "Analyze a dataset using statistics"
        },

        {
            topic: "Machine Learning Fundamentals",
            learn: "Supervised learning, regression and classification",
            task: "Build your first machine learning model"
        },

        {
            topic: "Machine Learning Algorithms",
            learn: "Decision trees, clustering and model evaluation",
            task: "Compare multiple ML algorithms"
        },

        {
            topic: "Deep Learning",
            learn: "Neural networks, training and deep learning concepts",
            task: "Build a basic neural network"
        },

        {
            topic: "AI Project",
            learn: "Data preparation, model development and evaluation",
            task: "Build an end-to-end AI project"
        },

        {
            topic: "AI Portfolio & Deployment",
            learn: "Model deployment, documentation and GitHub presentation",
            task: "Deploy and publish your AI project"
        }

    ],


    // ========================================
    // DATA ANALYST - 12 WEEKS
    // ========================================

    "Data Analyst": [

        {
            topic: "Excel Fundamentals",
            learn: "Formulas, cell references, formatting and basic functions",
            task: "Create a student marks spreadsheet"
        },

        {
            topic: "Advanced Excel",
            learn: "Pivot Tables, XLOOKUP, IF functions and data cleaning",
            task: "Create a sales analysis dashboard"
        },

        {
            topic: "SQL Fundamentals",
            learn: "SELECT, WHERE, ORDER BY and filtering",
            task: "Write basic SQL queries"
        },

        {
            topic: "Advanced SQL",
            learn: "JOIN, GROUP BY, HAVING, subqueries and aggregate functions",
            task: "Solve real-world SQL analysis problems"
        },

        {
            topic: "Statistics",
            learn: "Mean, median, variance, probability and distributions",
            task: "Perform statistical analysis on a dataset"
        },

        {
            topic: "Python Fundamentals",
            learn: "Variables, functions, lists, dictionaries and file handling",
            task: "Build a Python data analysis program"
        },

        {
            topic: "Pandas & NumPy",
            learn: "DataFrames, Series, filtering, grouping and numerical operations",
            task: "Analyze a CSV dataset using Pandas"
        },

        {
            topic: "Data Cleaning",
            learn: "Missing values, duplicates and data preprocessing",
            task: "Clean a real-world dataset"
        },

        {
            topic: "Exploratory Data Analysis",
            learn: "Patterns, trends, relationships and insights",
            task: "Perform EDA on a real dataset"
        },

        {
            topic: "Data Visualization",
            learn: "Charts, graphs and visual storytelling",
            task: "Create a professional data dashboard"
        },

        {
            topic: "End-to-End Data Project",
            learn: "Combine Excel, SQL, Python and visualization",
            task: "Complete a full data analysis project"
        },

        {
            topic: "Portfolio & GitHub",
            learn: "Project documentation and professional presentation",
            task: "Publish your data project on GitHub"
        }

    ],


    // ========================================
    // DATA SCIENTIST - 12 WEEKS
    // ========================================

    "Data Scientist": [

        {
            topic: "Python Programming",
            learn: "Python syntax, functions, loops and data structures",
            task: "Build a Python data analysis program"
        },

        {
            topic: "NumPy & Pandas",
            learn: "Numerical computing and DataFrame operations",
            task: "Analyze a real-world dataset"
        },

        {
            topic: "Statistics Fundamentals",
            learn: "Mean, median, variance, probability and distributions",
            task: "Perform statistical analysis"
        },

        {
            topic: "Advanced Statistics",
            learn: "Correlation, hypothesis testing and statistical inference",
            task: "Test relationships in a dataset"
        },

        {
            topic: "Mathematics for Data Science",
            learn: "Linear algebra, calculus and optimization",
            task: "Practice mathematical concepts used in ML"
        },

        {
            topic: "Data Cleaning",
            learn: "Missing values, outliers and data preprocessing",
            task: "Clean a messy dataset"
        },

        {
            topic: "Exploratory Data Analysis",
            learn: "Patterns, trends and relationships in datasets",
            task: "Perform complete EDA"
        },

        {
            topic: "Machine Learning Fundamentals",
            learn: "Regression, classification and model evaluation",
            task: "Build a prediction model"
        },

        {
            topic: "Advanced Machine Learning",
            learn: "Clustering, ensemble methods and feature engineering",
            task: "Compare different ML models"
        },

        {
            topic: "Model Evaluation",
            learn: "Accuracy, precision, recall, F1-score and validation",
            task: "Evaluate multiple machine learning models"
        },

        {
            topic: "Data Science Project",
            learn: "Complete data science workflow from data to model",
            task: "Build an end-to-end data science project"
        },

        {
            topic: "Portfolio & Deployment",
            learn: "Project documentation, GitHub and model deployment",
            task: "Publish your data science project"
        }

    ],


    // ========================================
    // SOFTWARE DEVELOPER - 12 WEEKS
    // ========================================

    "Software Developer": [

        {
            topic: "Programming Fundamentals",
            learn: "Variables, conditions, loops and functions",
            task: "Solve 20 basic programming problems"
        },

        {
            topic: "Problem Solving",
            learn: "Logical thinking, patterns and programming techniques",
            task: "Solve 20 logical coding problems"
        },

        {
            topic: "Object-Oriented Programming",
            learn: "Classes, objects, inheritance and polymorphism",
            task: "Build an OOP-based application"
        },

        {
            topic: "Arrays & Strings",
            learn: "Array operations, strings and common algorithms",
            task: "Solve array and string problems"
        },

        {
            topic: "Linked Lists",
            learn: "Singly linked lists, doubly linked lists and operations",
            task: "Implement a linked list"
        },

        {
            topic: "Stacks & Queues",
            learn: "Stack, queue and their real-world applications",
            task: "Implement stack and queue programs"
        },

        {
            topic: "Trees & Graphs",
            learn: "Trees, graphs and traversal techniques",
            task: "Implement basic tree and graph algorithms"
        },

        {
            topic: "Algorithms",
            learn: "Searching, sorting and algorithm complexity",
            task: "Solve algorithm-based coding problems"
        },

        {
            topic: "Git & GitHub",
            learn: "Repositories, commits, branches and collaboration",
            task: "Upload a software project to GitHub"
        },

        {
            topic: "Software Design",
            learn: "System design basics, architecture and project planning",
            task: "Design a software application"
        },

        {
            topic: "Software Project",
            learn: "Planning, coding, testing and debugging",
            task: "Build a complete software application"
        },

        {
            topic: "Portfolio & Interview Preparation",
            learn: "Project presentation, GitHub and coding interview preparation",
            task: "Prepare your developer portfolio"
        }

    ],


    // ========================================
    // CYBERSECURITY ANALYST - 12 WEEKS
    // ========================================

    "Cybersecurity Analyst": [

        {
            topic: "Computer Networks",
            learn: "TCP/IP, IP addresses, DNS, HTTP and network fundamentals",
            task: "Study basic network communication"
        },

        {
            topic: "Networking Security",
            learn: "Firewalls, ports, protocols and secure networking",
            task: "Analyze basic network traffic"
        },

        {
            topic: "Operating Systems",
            learn: "Processes, memory, permissions and system security",
            task: "Explore OS security settings"
        },

        {
            topic: "Linux Fundamentals",
            learn: "Linux commands, files, permissions and processes",
            task: "Complete Linux command-line exercises"
        },

        {
            topic: "Cybersecurity Fundamentals",
            learn: "CIA triad, authentication, authorization and security principles",
            task: "Create a cybersecurity checklist"
        },

        {
            topic: "Cryptography",
            learn: "Encryption, hashing and digital security concepts",
            task: "Explore basic encryption techniques"
        },

        {
            topic: "Web Security",
            learn: "Common web vulnerabilities and secure development concepts",
            task: "Study common web security scenarios"
        },

        {
            topic: "Threat Analysis",
            learn: "Common attacks, vulnerabilities and threat identification",
            task: "Analyze a sample security incident"
        },

        {
            topic: "Security Monitoring",
            learn: "Logs, alerts and basic security monitoring concepts",
            task: "Analyze sample security logs"
        },

        {
            topic: "Incident Response",
            learn: "Detection, investigation, containment and recovery",
            task: "Create an incident response plan"
        },

        {
            topic: "Cybersecurity Project",
            learn: "Security monitoring, analysis and documentation",
            task: "Build a basic security monitoring project"
        },

        {
            topic: "Security Portfolio",
            learn: "Documentation, project presentation and GitHub",
            task: "Create your cybersecurity portfolio"
        }

    ]

};


// ========================================
// STEP 6 - ADVANCED STUDY PLANNER
// 12 WEEKS + 7 DAYS PER WEEK
// ========================================

const plan =
    studyPlans[savedCareer] || [];


// ========================================
// PROGRESS STORAGE
// ========================================

const progressKey =
    "dailyProgress_" + savedCareer;

let dailyProgress =
    JSON.parse(
        localStorage.getItem(progressKey)
    ) || {};


// ========================================
// MAIN PLANNER CONTAINER
// ========================================

const plannerContent =
    document.getElementById("planner-content");


// ========================================
// CREATE PROGRESS SECTION
// ========================================

if (plannerContent) {

    const progressBox =
        document.createElement("div");

    progressBox.classList.add(
        "study-progress"
    );

    progressBox.innerHTML = `

        <div class="progress-header">

            <div>

                <h2>📚 Your Learning Progress</h2>

                <p id="progress-text">
                    0 / 84 days completed
                </p>

            </div>

            <strong id="progress-percent">
                0%
            </strong>

        </div>

        <div class="planner-progress-bar">

            <div
                id="planner-progress-fill"
                class="planner-progress-fill">
            </div>

        </div>

    `;

    plannerContent.appendChild(
        progressBox
    );


    // ========================================
    // WEEK LIST CONTAINER
    // ========================================

    const weeksContainer =
        document.createElement("div");

    weeksContainer.classList.add(
        "weeks-container"
    );

    plannerContent.appendChild(
        weeksContainer
    );


    // ========================================
    // WEEK DETAIL CONTAINER
    // ========================================

    const weekDetail =
        document.createElement("div");

    weekDetail.id =
        "week-detail";

    weekDetail.classList.add(
        "week-detail"
    );

    weekDetail.style.display =
        "none";

    plannerContent.appendChild(
        weekDetail
    );


    // ========================================
    // CREATE DAILY PLAN
    // ========================================

    function createDailyPlan(week) {

        return [

            {
                title: "Understand the Basics",
                description:
                    `Study the basic concepts of ${week.topic}. Understand what it is, why it is used, and where it is applied.`,
                task:
                    `Write down the important concepts you learned about ${week.topic}.`
            },

            {
                title: "Learn the Core Concepts",
                description:
                    `Study the core concepts mentioned in this week's learning area: ${week.learn}.`,
                task:
                    `Create short notes covering the main concepts of ${week.topic}.`
            },

            {
                title: "Study Examples",
                description:
                    `Study practical examples related to ${week.topic}. Observe how the concepts are used in real applications.`,
                task:
                    `Find or create at least 3 examples related to ${week.topic}.`
            },

            {
                title: "Practice",
                description:
                    `Start practicing ${week.topic}. Apply the concepts instead of only reading them.`,
                task:
                    `Complete 3 practice exercises related to ${week.topic}.`
            },

            {
                title: "Build Something",
                description:
                    `Use the concepts you learned to create a small practical implementation.`,
                task:
                    `Build a small practice project using ${week.topic}.`
            },

            {
                title: "Complete the Weekly Task",
                description:
                    `Work on the main practice task planned for this week.`,
                task:
                    week.task
            },

            {
                title: "Revision & Self Test",
                description:
                    `Revise everything learned during this week and test your understanding.`,
                task:
                    `Revise ${week.topic} and complete a small self-test without looking at your notes.`
            }

        ];

    }


    // ========================================
    // UPDATE OVERALL PROGRESS
    // ========================================

    function updateProgress() {

        const totalDays =
            plan.length * 7;

        let completedDays = 0;

        Object.keys(dailyProgress)
            .forEach(function(key) {

                if (dailyProgress[key] === true) {

                    completedDays++;

                }

            });


        const percentage =
            totalDays === 0
                ? 0
                : Math.round(
                    (completedDays / totalDays) * 100
                );


        const progressText =
            document.getElementById(
                "progress-text"
            );

        const progressPercent =
            document.getElementById(
                "progress-percent"
            );

        const progressFill =
            document.getElementById(
                "planner-progress-fill"
            );


        if (progressText) {

            progressText.textContent =
                `${completedDays} / ${totalDays} days completed`;

        }


        if (progressPercent) {

            progressPercent.textContent =
                `${percentage}%`;

        }


        if (progressFill) {

            progressFill.style.width =
                `${percentage}%`;

        }


        // ====================================
        // PLANNER COMPLETION
        // ====================================

        if (percentage === 100) {

            localStorage.setItem(
                "plannerCompleted",
                "true"
            );

        } else {

            localStorage.setItem(
                "plannerCompleted",
                "false"
            );

        }


        // Refresh week status

        updateWeekStatuses();

    }


    // ========================================
    // CHECK WEEK COMPLETION
    // ========================================

    function isWeekCompleted(
        weekIndex
    ) {

        for (
            let day = 0;
            day < 7;
            day++
        ) {

            const key =
                `${weekIndex}-${day}`;

            if (
                dailyProgress[key] !== true
            ) {

                return false;

            }

        }

        return true;

    }


    // ========================================
    // UPDATE WEEK CARD STATUS
    // ========================================

    function updateWeekStatuses() {

        const cards =
            document.querySelectorAll(
                ".study-week-card"
            );


        cards.forEach(
            function(card) {

                const index =
                    Number(
                        card.dataset.week
                    );


                const status =
                    card.querySelector(
                        ".week-status"
                    );


                if (
                    isWeekCompleted(index)
                ) {

                    card.classList.add(
                        "completed"
                    );

                    if (status) {

                        status.textContent =
                            "✓ Completed";

                    }

                } else {

                    card.classList.remove(
                        "completed"
                    );

                    if (status) {

                        status.textContent =
                            "Start Week →";

                    }

                }

            }
        );

    }


    // ========================================
    // OPEN WEEK DETAIL
    // ========================================

    function openWeek(
        weekIndex
    ) {

        const week =
            plan[weekIndex];


        if (!week) {
            return;
        }


        const days =
            createDailyPlan(week);


        weeksContainer.style.display =
            "none";

        weekDetail.style.display =
            "block";


        weekDetail.innerHTML = `

            <button
                class="back-to-weeks"
                id="back-to-weeks">

                ← Back to All Weeks

            </button>


            <div class="week-detail-header">

                <span class="detail-week-number">
                    WEEK ${weekIndex + 1}
                </span>

                <h2>
                    ${week.topic}
                </h2>

                <p>
                    ${week.learn}
                </p>

            </div>


            <div class="daily-plan">

                ${days.map(
                    function(day, dayIndex) {

                        const key =
                            `${weekIndex}-${dayIndex}`;

                        const completed =
                            dailyProgress[key] === true;


                        return `

                            <div
                                class="day-card ${
                                    completed
                                        ? "day-completed"
                                        : ""
                                }"
                                data-day="${dayIndex}">

                                <div class="day-number">
                                    DAY ${dayIndex + 1}
                                </div>

                                <div class="day-content">

                                    <h3>
                                        ${day.title}
                                    </h3>

                                    <p>
                                        <strong>
                                            📚 Study:
                                        </strong>

                                        ${day.description}
                                    </p>

                                    <p>
                                        <strong>
                                            🎯 Task:
                                        </strong>

                                        ${day.task}
                                    </p>

                                </div>


                                <label
                                    class="day-check">

                                    <input
                                        type="checkbox"
                                        class="day-checkbox"
                                        data-week="${weekIndex}"
                                        data-day="${dayIndex}"
                                        ${
                                            completed
                                                ? "checked"
                                                : ""
                                        }>

                                    <span>
                                        ${
                                            completed
                                                ? "Completed"
                                                : "Mark Complete"
                                        }
                                    </span>

                                </label>

                            </div>

                        `;

                    }
                ).join("")}

            </div>

        `;


        // ====================================
        // BACK BUTTON
        // ====================================

        const backButton =
            document.getElementById(
                "back-to-weeks"
            );


        if (backButton) {

            backButton.addEventListener(
                "click",
                function() {

                    weekDetail.style.display =
                        "none";

                    weeksContainer.style.display =
                        "block";

                    updateWeekStatuses();

                }
            );

        }


        // ====================================
        // DAY CHECKBOXES
        // ====================================

        const checkboxes =
            document.querySelectorAll(
                ".day-checkbox"
            );


        checkboxes.forEach(
            function(checkbox) {

                checkbox.addEventListener(
                    "change",
                    function() {

                        const week =
                            this.dataset.week;

                        const day =
                            this.dataset.day;

                        const key =
                            `${week}-${day}`;


                        dailyProgress[key] =
                            this.checked;


                        localStorage.setItem(
                            progressKey,
                            JSON.stringify(
                                dailyProgress
                            )
                        );


                        const card =
                            this.closest(
                                ".day-card"
                            );


                        const label =
                            card.querySelector(
                                "span"
                            );


                        if (this.checked) {

                            card.classList.add(
                                "day-completed"
                            );

                            label.textContent =
                                "Completed";

                        } else {

                            card.classList.remove(
                                "day-completed"
                            );

                            label.textContent =
                                "Mark Complete";

                        }


                        updateProgress();

                    }
                );

            }
        );

    }


    // ========================================
    // CREATE ALL 12 WEEK CARDS
    // ========================================

    plan.forEach(
        function(week, index) {

            const weekCard =
                document.createElement("div");


            weekCard.classList.add(
                "study-week-card"
            );


            weekCard.dataset.week =
                index;


            weekCard.innerHTML = `

                <div class="week-card-left">

                    <span class="week-number">
                        WEEK ${index + 1}
                    </span>

                    <h3>
                        ${week.topic}
                    </h3>

                    <p>
                        ${week.learn}
                    </p>

                </div>


                <div class="week-card-right">

                    <span class="week-status">
                        Start Week →
                    </span>

                </div>

            `;


            // ====================================
            // CLICK WEEK
            // ====================================

            weekCard.addEventListener(
                "click",
                function() {

                    openWeek(index);

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );


            weeksContainer.appendChild(
                weekCard
            );

        }
    );


    // ========================================
    // INITIAL PROGRESS
    // ========================================

    updateProgress();

}

 




// ========================================
// COMPLETE WEEK BUTTON
// ========================================

document
    .querySelectorAll(".complete-week")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const weekIndex =
                    Number(
                        this.dataset.week
                    );


                // ========================================
                // UNCOMPLETE WEEK
                // ========================================

                if (
                    completedWeeks.includes(
                        weekIndex
                    )
                ) {

                    completedWeeks =
                        completedWeeks.filter(
                            function(index) {

                                return index !==
                                    weekIndex;

                            }
                        );


                    this.textContent =
                        "Mark as Completed";


                    this.parentElement.classList.remove(
                        "completed"
                    );

                }


                // ========================================
                // COMPLETE WEEK
                // ========================================

                else {

                    completedWeeks.push(
                        weekIndex
                    );


                    this.textContent =
                        "✓ Completed";


                    this.parentElement.classList.add(
                        "completed"
                    );

                }


                // ========================================
                // SAVE PROGRESS
                // ========================================

                localStorage.setItem(
                    progressKey,
                    JSON.stringify(
                        completedWeeks
                    )
                );


                // ========================================
                // UPDATE PROGRESS
                // ========================================

                updateProgress();

            }

        );

    });


// ========================================
// INITIAL PROGRESS
// ========================================

updateProgress();

}


// ========================================
// START STUDY PLANNER
// ========================================

const startRoadmap =
    document.getElementById("start-roadmap");

if (startRoadmap) {

    startRoadmap.addEventListener("click", function() {

        window.location.href = "planner.html";

    });

}

// ========================================
// STEP 7 - 5 PROJECT SYSTEM
// ========================================

const projectsContent =
    document.getElementById("projects-content");

if (projectsContent) {

    const savedCareer =
        localStorage.getItem("selectedCareer");


    // ========================================
    // PROJECT DATA
    // ========================================

    const projects = {

        // ========================================
        // WEB DEVELOPER
        // ========================================

        "Web Developer": [

            {
                title: "Personal Portfolio Website",
                description: "Create a professional portfolio website to showcase your skills, projects and achievements.",
                skills: "HTML, CSS, JavaScript",
                objective: "Build and publish your own responsive portfolio."
            },

            {
                title: "Task Management Web App",
                description: "Build a web application where users can create, update and delete tasks.",
                skills: "JavaScript, DOM, LocalStorage",
                objective: "Learn how to build interactive web applications."
            },

            {
                title: "E-Commerce Website",
                description: "Create an online shopping website with products, categories and a shopping cart.",
                skills: "HTML, CSS, JavaScript",
                objective: "Understand how modern e-commerce interfaces work."
            },

            {
                title: "Weather Dashboard",
                description: "Build a weather application that retrieves live weather information using an API.",
                skills: "JavaScript, Fetch API, JSON",
                objective: "Learn how to work with external APIs."
            },

            {
                title: "Full Stack Web Application",
                description: "Develop a complete web application with frontend, backend and database integration.",
                skills: "HTML, CSS, JavaScript, Backend, Database",
                objective: "Combine your web development skills into one complete project."
            }

        ],


        // ========================================
        // AI / ML ENGINEER
        // ========================================

        "AI/ML Engineer": [

            {
                title: "House Price Prediction",
                description: "Build a machine learning model that predicts house prices from different features.",
                skills: "Python, Pandas, Scikit-learn",
                objective: "Understand regression and machine learning prediction."
            },

            {
                title: "Image Classification System",
                description: "Create a model that identifies and classifies different images.",
                skills: "Python, CNN, TensorFlow",
                objective: "Learn the fundamentals of computer vision."
            },

            {
                title: "AI Chatbot",
                description: "Develop an intelligent chatbot that can understand user questions and provide responses.",
                skills: "Python, NLP, AI",
                objective: "Understand natural language processing and conversational AI."
            },

            {
                title: "Recommendation System",
                description: "Build a recommendation system that suggests items based on user preferences.",
                skills: "Python, Machine Learning, Data Processing",
                objective: "Learn recommendation system concepts."
            },

            {
                title: "AI Career Assistant",
                description: "Create an AI system that recommends careers and learning paths based on user inputs.",
                skills: "Python, Machine Learning, NLP",
                objective: "Combine AI techniques to solve a real-world career guidance problem."
            }

        ],


        // ========================================
        // DATA ANALYST
        // ========================================

        "Data Analyst": [

            {
                title: "Sales Data Dashboard",
                description: "Analyze sales data and create a dashboard showing important business insights.",
                skills: "Excel, SQL, Power BI",
                objective: "Learn how to convert raw data into useful insights."
            },

            {
                title: "Customer Analysis",
                description: "Analyze customer information to understand customer behavior and preferences.",
                skills: "Python, Pandas, Data Visualization",
                objective: "Learn customer data analysis techniques."
            },

            {
                title: "Student Performance Analysis",
                description: "Analyze student marks, attendance and performance data.",
                skills: "Python, Excel, Visualization",
                objective: "Identify patterns and factors affecting student performance."
            },

            {
                title: "Business Performance Dashboard",
                description: "Create an interactive dashboard to monitor important business metrics.",
                skills: "Power BI, SQL, Data Visualization",
                objective: "Learn professional dashboard development."
            },

            {
                title: "E-Commerce Data Analysis",
                description: "Analyze e-commerce transactions to discover sales and customer trends.",
                skills: "SQL, Python, Power BI",
                objective: "Apply data analysis to a real-world business dataset."
            }

        ],


        // ========================================
        // DATA SCIENTIST
        // ========================================

        "Data Scientist": [

            {
                title: "Customer Churn Prediction",
                description: "Build a machine learning model that predicts whether customers may leave a service.",
                skills: "Python, Pandas, Scikit-learn",
                objective: "Understand classification and predictive analytics."
            },

            {
                title: "Stock Price Analysis",
                description: "Analyze historical stock data and identify trends and patterns.",
                skills: "Python, Pandas, Matplotlib",
                objective: "Learn time-series data analysis."
            },

            {
                title: "Recommendation System",
                description: "Develop a system that recommends products or content based on user behavior.",
                skills: "Python, Machine Learning",
                objective: "Understand recommendation algorithms."
            },

            {
                title: "Sentiment Analysis",
                description: "Build a model that determines whether text is positive, negative or neutral.",
                skills: "Python, NLP, Machine Learning",
                objective: "Learn natural language processing."
            },

            {
                title: "Predictive Analytics System",
                description: "Create a complete machine learning project to predict future outcomes from historical data.",
                skills: "Python, ML, Data Visualization",
                objective: "Combine the complete data science workflow."
            }

        ],


        // ========================================
        // SOFTWARE DEVELOPER
        // ========================================

        "Software Developer": [

            {
                title: "Library Management System",
                description: "Create software to manage books, users, borrowing and returning operations.",
                skills: "Java / Python / C++, Database",
                objective: "Learn application development and database operations."
            },

            {
                title: "Online Quiz Application",
                description: "Build an application where users can answer questions and receive scores.",
                skills: "Programming, OOP, Database",
                objective: "Practice application logic and user interaction."
            },

            {
                title: "Student Management System",
                description: "Develop software for managing student information and academic records.",
                skills: "Java / Python, Database",
                objective: "Understand CRUD operations and database integration."
            },

            {
                title: "Expense Tracker",
                description: "Create an application for recording and analyzing personal expenses.",
                skills: "Programming, Database, UI",
                objective: "Build a practical data management application."
            },

            {
                title: "Online Booking System",
                description: "Develop a system where users can view availability and make bookings.",
                skills: "OOP, Database, Backend",
                objective: "Understand real-world software system development."
            }

        ],


        // ========================================
        // CYBERSECURITY ANALYST
        // ========================================

        "Cybersecurity Analyst": [

            {
                title: "Network Security Scanner",
                description: "Build a tool that checks a network for common security issues.",
                skills: "Python, Networking, Cybersecurity",
                objective: "Understand basic network security concepts."
            },

            {
                title: "Password Security Analyzer",
                description: "Create a tool that evaluates password strength and security.",
                skills: "Python, Security Concepts",
                objective: "Learn password security and authentication concepts."
            },

            {
                title: "Cyber Threat Detection System",
                description: "Develop a system that identifies suspicious network or system activity.",
                skills: "Python, Cybersecurity, Data Analysis",
                objective: "Understand basic threat detection techniques."
            },

            {
                title: "Phishing Detection System",
                description: "Create a system that analyzes links or messages for possible phishing indicators.",
                skills: "Python, Machine Learning, Cybersecurity",
                objective: "Learn how phishing attacks can be identified."
            },

            {
                title: "Security Monitoring Dashboard",
                description: "Build a dashboard that displays security events and suspicious activities.",
                skills: "Python, Data Visualization, Cybersecurity",
                objective: "Understand security monitoring and incident analysis."
            }

        ]

    };


    // ========================================
    // GET CAREER PROJECTS
    // ========================================

    const careerProjects =
        projects[savedCareer] || [];


    // ========================================
    // PROJECT PROGRESS STORAGE
    // ========================================

    const projectProgressKey =
        "projectProgress_" + savedCareer;

    let completedProjects =
        JSON.parse(
            localStorage.getItem(projectProgressKey)
        ) || [];


   


    // ========================================
    // UPDATE PROJECT PROGRESS
    // ========================================

    function updateProjectProgress() {

        const completed =
            completedProjects.length;

        const total =
            careerProjects.length;

        const percentage =
            total === 0
                ? 0
                : Math.round(
                    (completed / total) * 100
                );


        document.getElementById(
            "project-progress-text"
        ).textContent =
            `${completed} / ${total} Projects Completed`;


        document.getElementById(
            "project-progress-percent"
        ).textContent =
            `${percentage}%`;


        document.getElementById(
            "project-progress-fill"
        ).style.width =
            `${percentage}%`;


        // ========================================
        // MARK PROJECT SECTION COMPLETE
        // ========================================

        if (
            total > 0 &&
            percentage === 100
        ) {

            localStorage.setItem(
                "projectsCompleted",
                "true"
            );

        } else {

            localStorage.setItem(
                "projectsCompleted",
                "false"
            );

        }

    }


    // ========================================
    // CREATE PROJECT CARDS
    // ========================================

    careerProjects.forEach(
        function(project, index) {

            const projectCard =
                document.createElement("div");

            projectCard.classList.add(
                "project-card"
            );


            const isCompleted =
                completedProjects.includes(index);


            projectCard.innerHTML = `

                <div class="project-number">
                    PROJECT ${index + 1}
                </div>

                <h2>
                    ${project.title}
                </h2>

                <p>
                    ${project.description}
                </p>

                <p>
                    🛠️ <strong>Skills:</strong>
                    ${project.skills}
                </p>

                <p>
                    🎯 <strong>Objective:</strong>
                    ${project.objective}
                </p>

                <button
                    class="complete-project"
                    data-project="${index}">

                    ${
                        isCompleted
                            ? "✓ Completed"
                            : "Mark as Completed"
                    }

                </button>

            `;


            if (isCompleted) {

                projectCard.classList.add(
                    "completed"
                );

            }


            projectsContent.appendChild(
                projectCard
            );

        }
    );


    // ========================================
    // COMPLETE / UNDO PROJECT
    // ========================================

    document
        .querySelectorAll(".complete-project")
        .forEach(
            function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        const projectIndex =
                            Number(
                                this.dataset.project
                            );


                        // ================================
                        // UNDO
                        // ================================

                        if (
                            completedProjects.includes(
                                projectIndex
                            )
                        ) {

                            completedProjects =
                                completedProjects.filter(
                                    function(index) {

                                        return (
                                            index !==
                                            projectIndex
                                        );

                                    }
                                );


                            this.textContent =
                                "Mark as Completed";


                            this.parentElement.classList.remove(
                                "completed"
                            );

                        }


                        // ================================
                        // COMPLETE
                        // ================================

                        else {

                            completedProjects.push(
                                projectIndex
                            );


                            this.textContent =
                                "✓ Completed";


                            this.parentElement.classList.add(
                                "completed"
                            );

                        }


                        // ================================
                        // SAVE
                        // ================================

                        localStorage.setItem(
                            projectProgressKey,
                            JSON.stringify(
                                completedProjects
                            )
                        );


                        // ================================
                        // UPDATE
                        // ================================

                        updateProjectProgress();

                    }
                );

            }
        );


    // ========================================
    // INITIAL PROGRESS
    // ========================================

    updateProjectProgress();

}

// ========================================
// RESTART PLANNER
// ========================================

const restartPlanner =
    document.getElementById("restart-planner");

if (restartPlanner) {

    restartPlanner.addEventListener("click", function() {

        window.location.href = "career.html";

    });

}

// =========================================
// CAREER ORBIT PROGRESS
// =========================================

const orbitProgress =
    document.getElementById("orbit-progress");


if (orbitProgress) {

    let completedSections = 0;

    const totalSections = 6;


    // =========================================
    // CHECK COMPLETION
    // =========================================

    const selectedCareer =
        localStorage.getItem("selectedCareer");

    const assessmentScore =
        localStorage.getItem("assessmentScore");

    const skillResults =
        JSON.parse(
            localStorage.getItem("skillResults")
        ) || [];

    const roadmapCompleted =
        localStorage.getItem("roadmapCompleted")
        === "true";

    const plannerCompleted =
        localStorage.getItem("plannerCompleted")
        === "true";

    const projectsCompleted =
        localStorage.getItem("projectsCompleted")
        === "true";


    // =========================================
    // COMPLETION STATUS
    // =========================================

    const careerDone =
        !!selectedCareer;

    const assessmentDone =
        assessmentScore !== null;

    const skillsDone =
        skillResults.length > 0;

    const roadmapDone =
        roadmapCompleted;

    const plannerDone =
        plannerCompleted;

    const projectsDone =
        projectsCompleted;


    // =========================================
    // COUNT COMPLETED SECTIONS
    // =========================================

    if (careerDone) {
        completedSections++;
    }

    if (assessmentDone) {
        completedSections++;
    }

    if (skillsDone) {
        completedSections++;
    }

    if (roadmapDone) {
        completedSections++;
    }

    if (plannerDone) {
        completedSections++;
    }

    if (projectsDone) {
        completedSections++;
    }


    // =========================================
    // CALCULATE PROGRESS
    // =========================================

    const progress =
        Math.round(
            (completedSections / totalSections) * 100
        );


    // =========================================
    // DISPLAY OVERALL PROGRESS
    // =========================================

    orbitProgress.textContent =
        progress + "%";


    // =========================================
    // UPDATE ORBIT NODE
    // =========================================

    function updateOrbitNode(
        id,
        completed,
        completedText
    ) {

        const node =
            document.getElementById(id);

        if (!node) {
            return;
        }

        const icon =
            node.querySelector("span");

        const status =
            node.querySelector("small");


        if (completed) {

            icon.textContent = "✓";

            status.textContent =
                completedText;

            node.classList.add("completed");

        }

        else {

            icon.textContent = "○";

            status.textContent =
                "Pending";

            node.classList.remove("completed");

        }

    }


    // =========================================
    // UPDATE ALL ORBIT NODES
    // =========================================

    updateOrbitNode(
        "orbit-career",
        careerDone,
        "Completed"
    );


    updateOrbitNode(
        "orbit-assessment",
        assessmentDone,
        "Completed"
    );


    updateOrbitNode(
        "orbit-skills",
        skillsDone,
        "Completed"
    );


    updateOrbitNode(
        "orbit-roadmap",
        roadmapDone,
        "Completed"
    );


    updateOrbitNode(
        "orbit-planner",
        plannerDone,
        "Completed"
    );


    updateOrbitNode(
        "orbit-projects",
        projectsDone,
        "Completed"
    );


    // =========================================
    // CONSOLE
    // =========================================

    console.log(
        "Career Orbit Progress:",
        progress + "%"
    );

}

// =========================================
// STUDENT COMMUNITY MAP
// STEP 7
// =========================================

const studentMapElement =
    document.getElementById("student-map");


if (studentMapElement) {

    // =====================================
    // CREATE MAP
    // =====================================

    let studentMap =
        L.map("student-map")
        .setView(
            [22.5937, 78.9629],
            5
        );


    // =====================================
    // MAP TILES
    // =====================================

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(studentMap);



    // =====================================
    // STUDENT DATA
    // =====================================

    const careers = [

        "AI/ML",
        "Data Science",
        "Web Development",
        "Cybersecurity",
        "Software Development"

    ];


    const indianCities = [

        ["Chennai", 13.0827, 80.2707],
        ["Bengaluru", 12.9716, 77.5946],
        ["Hyderabad", 17.3850, 78.4867],
        ["Mumbai", 19.0760, 72.8777],
        ["Delhi", 28.6139, 77.2090],
        ["Pune", 18.5204, 73.8567],
        ["Kolkata", 22.5726, 88.3639],
        ["Coimbatore", 11.0168, 76.9558],
        ["Madurai", 9.9252, 78.1198],
        ["Kochi", 9.9312, 76.2673],
        ["Ahmedabad", 23.0225, 72.5714],
        ["Jaipur", 26.9124, 75.7873],
        ["Lucknow", 26.8467, 80.9462],
        ["Bhopal", 23.2599, 77.4126],
        ["Bhubaneswar", 20.2961, 85.8245],
        ["Visakhapatnam", 17.6868, 83.2185],
        ["Chandigarh", 30.7333, 76.7794],
        ["Patna", 25.5941, 85.1376],
        ["Mysuru", 12.2958, 76.6394],
        ["Tiruchirappalli", 10.7905, 78.7047]

    ];


    // =====================================
    // STUDENT NAMES
    // =====================================

    const names = [

        "Aarav",
        "Aditya",
        "Arjun",
        "Ananya",
        "Diya",
        "Ishaan",
        "Karthik",
        "Meera",
        "Rahul",
        "Riya",
        "Sanjay",
        "Shreya",
        "Vikram",
        "Varun",
        "Priya",
        "Nikhil",
        "Aditi",
        "Rohan",
        "Sanjana",
        "Harsh"

    ];


    // =====================================
    // INDIA STUDENTS
    // 1000 DEMO STUDENTS
    // =====================================

    const indiaStudents = [];


    for (
        let i = 0;
        i < 1000;
        i++
    ) {

        const city =
            indianCities[
                Math.floor(
                    Math.random() *
                    indianCities.length
                )
            ];


        const career =
            careers[
                Math.floor(
                    Math.random() *
                    careers.length
                )
            ];


        const name =
            names[
                Math.floor(
                    Math.random() *
                    names.length
                )
            ];


        indiaStudents.push({

            name:
                name,

            career:
                career,

            city:
                city[0],

            lat:
                city[1] +
                (Math.random() - 0.5) * 0.8,

            lng:
                city[2] +
                (Math.random() - 0.5) * 0.8

        });

    }



    // =====================================
    // WORLD STUDENTS
    // 100 DEMO STUDENTS
    // =====================================

    const worldCities = [

        ["London", 51.5074, -0.1278],
        ["New York", 40.7128, -74.0060],
        ["Toronto", 43.6532, -79.3832],
        ["Dubai", 25.2048, 55.2708],
        ["Singapore", 1.3521, 103.8198],
        ["Sydney", -33.8688, 151.2093],
        ["Melbourne", -37.8136, 144.9631],
        ["Berlin", 52.5200, 13.4050],
        ["Paris", 48.8566, 2.3522],
        ["Tokyo", 35.6762, 139.6503],
        ["Seoul", 37.5665, 126.9780],
        ["Toronto", 43.6532, -79.3832]

    ];


    const worldStudents = [];


    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const city =
            worldCities[
                Math.floor(
                    Math.random() *
                    worldCities.length
                )
            ];


        const career =
            careers[
                Math.floor(
                    Math.random() *
                    careers.length
                )
            ];


        const name =
            names[
                Math.floor(
                    Math.random() *
                    names.length
                )
            ];


        worldStudents.push({

            name:
                name,

            career:
                career,

            city:
                city[0],

            lat:
                city[1] +
                (Math.random() - 0.5) * 0.5,

            lng:
                city[2] +
                (Math.random() - 0.5) * 0.5

        });

    }



    // =====================================
    // MARKER LAYER
    // =====================================

    const markerLayer =
        L.layerGroup()
        .addTo(studentMap);



    // =====================================
    // CREATE MARKERS
    // =====================================

    function displayStudents(
        students
    ) {

        markerLayer.clearLayers();


        students.forEach(
            function(student) {

                const marker =
                    L.circleMarker(

                        [
                            student.lat,
                            student.lng
                        ],

                        {

                            radius: 6,

                            fillColor:
                                "#ffd45a",

                            color:
                                "#ffffff",

                            weight: 1,

                            fillOpacity:
                                0.9

                        }

                    );


                marker.bindPopup(`

                    <div class="student-popup">

                        <h3>
                            ${student.name}
                        </h3>

                        <p>
                            🎓 ${student.career}
                        </p>

                        <p>
                            📍 ${student.city}
                        </p>

                        <p>
                            Student on CareerPath AI
                        </p>

                    </div>

                `);


                markerLayer.addLayer(
                    marker
                );

            }
        );

    }



    // =====================================
    // SHOW ALL INDIA STUDENTS
    // =====================================

    displayStudents(
        indiaStudents
    );



    // =====================================
    // FIND USER LOCATION
    // =====================================

    function locateUser() {

        if (
            !navigator.geolocation
        ) {

            alert(
                "Location is not supported by your browser."
            );

            return;

        }


        navigator.geolocation.getCurrentPosition(

            function(position) {

                const lat =
                    position.coords.latitude;

                const lng =
                    position.coords.longitude;


                // Move map to user

                studentMap.setView(
                    [lat, lng],
                    10
                );


                // User marker

                L.circleMarker(

                    [lat, lng],

                    {

                        radius: 10,

                        fillColor:
                            "#6c63ff",

                        color:
                            "#ffffff",

                        weight: 3,

                        fillOpacity:
                            1

                    }

                )

                .addTo(studentMap)

                .bindPopup(
                    "<strong>📍 You are here</strong>"
                )

                .openPopup();


                // Find nearby demo students

                let nearbyCount =
                    Math.floor(
                        Math.random() * 20
                    ) + 80;


                document.getElementById(
                    "nearby-count"
                ).textContent =
                    nearbyCount + "+";


            },

            function() {

                document.getElementById(
                    "nearby-count"
                ).textContent =
                    "100+";

            }

        );

    }



    // =====================================
    // LOCATION BUTTON
    // =====================================

    const locateButton =
        document.getElementById(
            "locate-btn"
        );


    if (locateButton) {

        locateButton.addEventListener(
            "click",
            locateUser
        );

    }



 // =====================================
// SEARCH + CAREER FILTER
// =====================================

const searchInput =
    document.getElementById("student-search");

const careerFilter =
    document.getElementById("career-filter");


function filterStudents() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();

    const selectedCareer =
        careerFilter.value;


    const filteredStudents =
        indiaStudents.filter(function(student) {

            // Search in name
            const matchesName =
                student.name
                    .toLowerCase()
                    .includes(search);


            // Search in city
            const matchesCity =
                student.city
                    .toLowerCase()
                    .includes(search);


            // Search in career
            const matchesCareerSearch =
                student.career
                    .toLowerCase()
                    .includes(search);


            // Career dropdown
            const matchesCareerFilter =
                selectedCareer === "all" ||
                student.career
                    .toLowerCase()
                    .includes(
                        selectedCareer.toLowerCase()
                    );


            return (
                (matchesName ||
                 matchesCity ||
                 matchesCareerSearch)
                &&
                matchesCareerFilter
            );

        });


    // Display filtered students
    displayStudents(
        filteredStudents
    );


    // Update nearby/result count
    const nearbyCount =
        document.getElementById(
            "nearby-count"
        );


    if (nearbyCount) {

        nearbyCount.textContent =
            filteredStudents.length;

    }

}


// =====================================
// SEARCH EVENT
// =====================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterStudents
    );

}


// =====================================
// CAREER FILTER EVENT
// =====================================

if (careerFilter) {

    careerFilter.addEventListener(
        "change",
        filterStudents
    );

}

// ========================================
// STEP 7 - AI INTERVIEW SYSTEM
// ========================================

const interviewContainer =
    document.getElementById("interview-container");

if (interviewContainer) {

    // ========================================
    // GET SELECTED CAREER
    // ========================================

    const savedCareer =
        localStorage.getItem("selectedCareer");

    const interviewCareer =
        document.getElementById("interview-career");

    if (interviewCareer) {

        interviewCareer.textContent =
            savedCareer || "Unknown Career";

    }


    // ========================================
    // INTERVIEW QUESTIONS
    // ========================================

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


    // ========================================
    // GET QUESTIONS
    // ========================================

    const questions =
        interviewQuestions[savedCareer] ||
        interviewQuestions["Web Developer"];


    // ========================================
    // VARIABLES
    // ========================================

    let currentQuestion = 0;

    let interviewScores = [];

    let recognition = null;

    let finalTranscript = "";

    let isListening = false;

    let restartTimer = null;


    // ========================================
    // GET HTML ELEMENTS
    // ========================================

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


    // ========================================
    // SHOW QUESTION
    // ========================================

    function showQuestion() {

        if (!questionElement) return;

        questionElement.textContent =
            questions[currentQuestion];

        if (questionCount) {

            questionCount.textContent =
                `Question ${currentQuestion + 1} / ${questions.length}`;

        }

        if (answerBox) {

            answerBox.value = "";

        }

        if (feedbackBox) {

            feedbackBox.style.display = "none";

        }

        if (nextButton) {

            nextButton.style.display = "none";

        }

        if (speakButton) {

            speakButton.style.display = "inline-block";

        }

        if (finishAnswerButton) {

            finishAnswerButton.style.display = "none";

        }

        if (speechStatus) {

            speechStatus.textContent =
                "🎙️ Click Start Speaking and answer the question.";

        }

    }


    // ========================================
    // START INTERVIEW
    // ========================================

    if (startButton) {

        startButton.addEventListener(
            "click",
            function () {

                currentQuestion = 0;

                interviewScores = [];

                startButton.style.display = "none";

                showQuestion();

            }
        );

    }


    // ========================================
    // SPEECH RECOGNITION
    // ========================================

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        if (speechStatus) {

            speechStatus.textContent =
                "❌ Speech recognition is not supported. Please use Google Chrome.";

        }

        if (speakButton) {

            speakButton.disabled = true;

        }

    } else {

        recognition =
            new SpeechRecognition();

        recognition.lang = "en-IN";

        recognition.continuous = true;

        recognition.interimResults = true;

        recognition.maxAlternatives = 1;


        // ========================================
        // START SPEAKING
        // ========================================

        if (speakButton) {

            speakButton.addEventListener(
                "click",
                function () {

                    finalTranscript = "";

                    if (answerBox) {

                        answerBox.value = "";

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

                    } catch (error) {

                        console.log(
                            "Recognition start:",
                            error
                        );

                    }

                }
            );

        }


        // ========================================
        // RECEIVE SPEECH
        // ========================================

        recognition.onresult =
            function (event) {

                let interimTranscript = "";

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
                        finalTranscript +
                        interimTranscript;

                }

            };


        // ========================================
        // SPEECH END
        // ========================================

        recognition.onend =
            function () {

                if (!isListening) {

                    return;

                }

                if (speechStatus) {

                    speechStatus.textContent =
                        "🎙️ You can continue speaking...";

                }

                clearTimeout(
                    restartTimer
                );

                restartTimer =
                    setTimeout(
                        function () {

                            if (isListening) {

                                try {

                                    recognition.start();

                                } catch (error) {

                                    console.log(
                                        "Recognition restart:",
                                        error
                                    );

                                }

                            }

                        },
                        1000
                    );

            };


        // ========================================
        // FINISH ANSWER
        // ========================================

        if (finishAnswerButton) {

            finishAnswerButton.addEventListener(
                "click",
                function () {

                    isListening = false;

                    clearTimeout(
                        restartTimer
                    );

                    try {

                        recognition.stop();

                    } catch (error) {

                        console.log(error);

                    }


                    let answer = "";

                    if (finalTranscript.trim()) {

                        answer =
                            finalTranscript.trim();

                    } else if (answerBox) {

                        answer =
                            answerBox.value.trim();

                    }


                    if (!answer) {

                        if (speechStatus) {

                            speechStatus.textContent =
                                "❌ No answer detected. Please try speaking again.";

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

                    speakButton.style.display =
                        "none";

                    finishAnswerButton.style.display =
                        "none";


                    evaluateAnswer(answer);

                }
            );

        }


        // ========================================
        // SPEECH ERROR
        // ========================================

        recognition.onerror =
            function (event) {

                console.log(
                    "Speech recognition error:",
                    event.error
                );

                if (event.error === "not-allowed") {

                    isListening = false;

                    if (speechStatus) {

                        speechStatus.textContent =
                            "🎤 Microphone permission denied.";

                    }

                } else if (
                    event.error === "audio-capture"
                ) {

                    isListening = false;

                    if (speechStatus) {

                        speechStatus.textContent =
                            "🎤 Microphone not found.";

                    }

                } else if (
                    event.error === "no-speech"
                ) {

                    if (speechStatus) {

                        speechStatus.textContent =
                            "🎙️ No speech detected. You can continue speaking.";

                    }

                } else {

                    if (speechStatus) {

                        speechStatus.textContent =
                            "⚠️ Speech recognition issue. Please try again.";

                    }

                }

            };

    }


    // ========================================
    // EVALUATE ANSWER
    // ========================================

    function evaluateAnswer(answer) {

        const words =
            answer.trim().split(/\s+/);

        const wordCount =
            words.length;

        let score;


        if (wordCount < 5) {

            score = 3;

        } else if (wordCount < 15) {

            score = 5;

        } else if (wordCount < 30) {

            score = 7;

        } else {

            score = 9;

        }


        interviewScores.push(score);


        if (answerScore) {

            answerScore.textContent =
                `Score: ${score}/10`;

        }


        if (feedbackText) {

            if (score >= 8) {

                feedbackText.textContent =
                    "Excellent answer. Your response was detailed and well explained.";

            } else if (score >= 6) {

                feedbackText.textContent =
                    "Good answer. Try to provide more relevant details and examples.";

            } else {

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


    // ========================================
    // NEXT QUESTION
    // ========================================

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                currentQuestion++;

                if (
                    currentQuestion <
                    questions.length
                ) {

                    showQuestion();

                } else {

                    finishInterview();

                }

            }
        );

    }


    // ========================================
    // FINISH INTERVIEW
    // ========================================

    function finishInterview() {

        const total =
            interviewScores.reduce(
                function (sum, score) {

                    return sum + score;

                },
                0
            );


        const average =
            interviewScores.length > 0
                ? Math.round(
                    total /
                    interviewScores.length
                )
                : 0;


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
                "Your interview has been completed.";

        }


        if (feedbackText) {

            feedbackText.textContent =
                `Your overall interview score is ${average}/10.`;

        }


        if (answerScore) {

            answerScore.textContent =
                `Overall Score: ${average}/10`;

        }


        if (feedbackBox) {

            feedbackBox.style.display =
                "block";

        }


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


        // ========================================
        // SAVE SCORE
        // ========================================

        localStorage.setItem(
            "interviewScore",
            average
        );

        localStorage.setItem(
            "interviewCompleted",
            "true"
        );

    }

}
// ========================================
// STEP 8 - CAREER READINESS DASHBOARD
// ========================================

const dashboardPage =
    document.querySelector(".dashboard-page");

if (dashboardPage) {

    // ========================================
    // CAREER
    // ========================================

    const dashboardCareer =
        document.getElementById("dashboard-career");

    const selectedCareer =
        localStorage.getItem("selectedCareer");

    if (dashboardCareer) {

        dashboardCareer.textContent =
            selectedCareer || "Not Selected";

    }


    // ========================================
    // GET SCORES
    // ========================================

    let assessmentScore = 0;

    const savedAssessment =
        localStorage.getItem("assessmentScore");

    if (savedAssessment) {

        assessmentScore =
            Number(savedAssessment);

    }


    let interviewScore = 0;

    const savedInterview =
        localStorage.getItem("interviewScore");

    if (savedInterview) {

        interviewScore =
            Number(savedInterview);

    }


    // ========================================
    // ROADMAP PROGRESS
    // ========================================

    let roadmapScore = 0;

    if (
        localStorage.getItem("roadmapCompleted")
        === "true"
    ) {

        roadmapScore = 100;

    }


    // ========================================
    // STUDY PLANNER PROGRESS
    // ========================================

    let plannerScore = 0;

    if (
        localStorage.getItem("plannerCompleted")
        === "true"
    ) {

        plannerScore = 100;

    }


    // ========================================
    // PROJECT PROGRESS
    // ========================================

    let projectScore = 0;

    const projectKey =
        "projectProgress_" + selectedCareer;

    const savedProjects =
        localStorage.getItem(projectKey);

    if (savedProjects) {

        try {

            const completedProjects =
                JSON.parse(savedProjects);

            if (Array.isArray(completedProjects)) {

                projectScore =
                    Math.round(
                        (completedProjects.length / 5) * 100
                    );

            }

        } catch (error) {

            projectScore = 0;

        }

    }


    // Prevent values above 100

    if (projectScore > 100) {

        projectScore = 100;

    }


    // ========================================
    // UPDATE BAR
    // ========================================

    function setDashboardBar(
        barId,
        valueId,
        score
    ) {

        const bar =
            document.getElementById(barId);

        const value =
            document.getElementById(valueId);


        if (bar) {

            bar.style.width =
                score + "%";

        }


        if (value) {

            value.textContent =
                score + "%";

        }

    }


    // ========================================
    // SET ALL BARS
    // ========================================

    setDashboardBar(
        "assessment-bar",
        "assessment-value",
        assessmentScore
    );


    setDashboardBar(
        "roadmap-bar",
        "roadmap-value",
        roadmapScore
    );


    setDashboardBar(
        "planner-bar",
        "planner-value",
        plannerScore
    );


    setDashboardBar(
        "projects-bar",
        "projects-value",
        projectScore
    );


    setDashboardBar(
        "interview-bar",
        "interview-value",
        interviewScore
    );


    // ========================================
    // OVERALL SCORE
    // ========================================

    const overallScore =
        Math.round(
            (
                assessmentScore +
                roadmapScore +
                plannerScore +
                projectScore +
                interviewScore
            ) / 5
        );


    const overallElement =
        document.getElementById(
            "overall-score"
        );


    if (overallElement) {

        overallElement.textContent =
            overallScore + "%";

    }


    // ========================================
    // READINESS MESSAGE
    // ========================================

    const readinessMessage =
        document.getElementById(
            "readiness-message"
        );


    const readinessStatus =
        document.getElementById(
            "readiness-status"
        );


    const readinessDescription =
        document.getElementById(
            "readiness-description"
        );


    if (overallScore >= 80) {

        if (readinessStatus) {

            readinessStatus.textContent =
                "🏆 Career Ready";

        }

        if (readinessDescription) {

            readinessDescription.textContent =
                "Excellent progress! You are well prepared for your chosen career.";

        }

        if (readinessMessage) {

            readinessMessage.textContent =
                "You are strongly prepared for your career journey.";

        }

    }

    else if (overallScore >= 60) {

        if (readinessStatus) {

            readinessStatus.textContent =
                "🚀 Almost Career Ready";

        }

        if (readinessDescription) {

            readinessDescription.textContent =
                "Great progress! Complete the remaining sections to become fully career ready.";

        }

        if (readinessMessage) {

            readinessMessage.textContent =
                "You are making strong progress.";

        }

    }

    else if (overallScore >= 30) {

        if (readinessStatus) {

            readinessStatus.textContent =
                "📈 Developing";

        }

        if (readinessDescription) {

            readinessDescription.textContent =
                "Keep completing your roadmap, planner, projects and interview preparation.";

        }

        if (readinessMessage) {

            readinessMessage.textContent =
                "Your career preparation is developing.";

        }

    }

    else {

        if (readinessStatus) {

            readinessStatus.textContent =
                "🌱 Getting Started";

        }

        if (readinessDescription) {

            readinessDescription.textContent =
                "Begin completing the CareerPath AI sections to build your career readiness.";

        }

        if (readinessMessage) {

            readinessMessage.textContent =
                "Start your career preparation journey.";

        }

    }

}

}
/* =========================================================
   CAREERPATH AI
   STEP 8 - CAREER READINESS DASHBOARD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Career Dashboard JS loaded.");

    /* =====================================================
       GET SELECTED CAREER
       ===================================================== */

    const selectedCareer =
        localStorage.getItem("selectedCareer");


    /* =====================================================
       DISPLAY CAREER
       ===================================================== */

    const dashboardCareer =
        document.getElementById("dashboard-career");


    if (dashboardCareer) {

        dashboardCareer.textContent =
            selectedCareer || "Career Not Selected";

    }


    /* =====================================================
       GET ASSESSMENT SCORE
       ===================================================== */

    let assessmentScore = 0;

    const savedAssessment =
        localStorage.getItem("assessmentScore");


    if (savedAssessment !== null) {

        assessmentScore =
            Number(savedAssessment);

    }


    /* =====================================================
       GET INTERVIEW SCORE
       ===================================================== */

    let interviewScore = 0;

    const savedInterview =
        localStorage.getItem("interviewScore");


    if (savedInterview !== null) {

        interviewScore =
            Number(savedInterview);

    }


    /* =====================================================
       ROADMAP PROGRESS
       ===================================================== */

    let roadmapScore = 0;


    if (
        localStorage.getItem("roadmapCompleted")
        === "true"
    ) {

        roadmapScore = 100;

    }


    /* =====================================================
       STUDY PLANNER PROGRESS
       ===================================================== */

    let plannerScore = 0;


    if (
        localStorage.getItem("plannerCompleted")
        === "true"
    ) {

        plannerScore = 100;

    }


    /* =====================================================
       PROJECT PROGRESS
       ===================================================== */

    let projectScore = 0;


    if (selectedCareer) {

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

            }

            catch (error) {

                console.log(
                    "Project progress error:",
                    error
                );

                projectScore = 0;

            }

        }

    }


    /* =====================================================
       LIMIT PROJECT SCORE
       ===================================================== */

    if (projectScore > 100) {

        projectScore = 100;

    }


    /* =====================================================
       UPDATE PROGRESS BAR
       ===================================================== */

    function updateBar(
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


    /* =====================================================
       UPDATE ALL PROGRESS SECTIONS
       ===================================================== */

    updateBar(
        "assessment-bar",
        "assessment-value",
        assessmentScore
    );


    updateBar(
        "roadmap-bar",
        "roadmap-value",
        roadmapScore
    );


    updateBar(
        "planner-bar",
        "planner-value",
        plannerScore
    );


    updateBar(
        "projects-bar",
        "projects-value",
        projectScore
    );


    updateBar(
        "interview-bar",
        "interview-value",
        interviewScore
    );


    /* =====================================================
       OVERALL CAREER READINESS
       ===================================================== */

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


    /* =====================================================
       READINESS MESSAGE
       ===================================================== */

    const readinessStatus =
        document.getElementById(
            "readiness-status"
        );


    const readinessDescription =
        document.getElementById(
            "readiness-description"
        );


    const readinessMessage =
        document.getElementById(
            "readiness-message"
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


    /* =====================================================
       DEBUG INFORMATION
       ===================================================== */

    console.log(
        "Selected Career:",
        selectedCareer
    );

    console.log(
        "Assessment Score:",
        assessmentScore
    );

    console.log(
        "Roadmap Score:",
        roadmapScore
    );

    console.log(
        "Planner Score:",
        plannerScore
    );

    console.log(
        "Project Score:",
        projectScore
    );

    console.log(
        "Interview Score:",
        interviewScore
    );

    console.log(
        "Overall Score:",
        overallScore
    );

});
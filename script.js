const startingMinutes = 60; // Set the timer duration in minutes
        let time = startingMinutes * 60;
        let timer; // Declare the timer variable

        const countdownEl = document.getElementById('countdown');
        setInterval(updateCountdown, 1000);

        function updateCountdown() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;

            countdownEl.innerHTML = `${minutes}:${seconds}`;
            time--;

            if (time < 0) {
                // If time is up, stop the timer and show the score
                clearInterval(timer);
                showScore();
            }
        }

        const questions = [
            {
                question: "Watch the following video and answer the questions that follow:",
                video: "apparatusvideo.mp4",
                mainQuestion: "Which of the following apparatus is wrongly MATCHED with its function?",
                answers: [
                    { text: "Evaporating dish - Holds liquids or solutions that are being heated to evaporation", correct: false, checked: false },
                    { text: "Conical flask - Used to hold liquids and solutions during chemial test", correct: false, checked: false },
                    { text: "Test tube - Holds small amount of substances during chemical test", correct: false, checked: false },
                    { text: "Test tube holder - Used to hold test tubes and boiling tubes during experiments and storage", correct: true, checked: true },
                ]
                
            },
            {
                question: "Which part of the microscope is used for fine-tuning the focus to bring the specimen into sharp detail?",
                answers: [
                    { text: "Coarse adjustment knob", correct: false, checked: false },
                    { text: "Diaphragm", correct: false, checked: false },
                    { text: "Stage clips", correct: false, checked: false },
                    { text: "Fine adjustment knob", correct: true, checked: true  },
                ]
               
            },
            {
                question: "What part of the microscope is responsible for regulating the amount of light that passes through the specimen?",
                answers: [
                    { text: "Objective lenses", correct: false, checked: false },
                    { text: "Diaphragm", correct: true, checked: true },
                    { text: "Eyepiece", correct: false, checked: false },
                    { text: "Stage", correct: false, checked: false },
                ]
                
            },
            {
                question: "Watch the following video on the International system of units and answer the questions that follows;",
                video: "si.mp4",
                mainQuestion: "Which of the following is NOT a basic quantity?",
                answers: [
                    { text: "Area", correct: true, checked: true },
                    { text: "Temperature", correct: false, checked: false },
                    { text: "Length", correct: false, checked: false },
                    { text: "Mass", correct: false, checked: false },
                ]
                
            },
            {
                question: "Convert 21° C to the SI Unit.",
                answers: [
                    { text: "273K", correct: false, checked: false  },
                    { text: "289K", correct: false, checked: false },
                    { text: "294K", correct: true, checked: true },
                    { text: "301K", correct: false, checked: false },
                ]
               
            },
            {
                question: "Which of the following is NOT a derived quantity?",
                answers: [
                    { text: "Area", correct: false, checked: false  },
                    { text: "Density", correct: false, checked: false },
                    { text: "Mass", correct: true, checked: true },
                    { text: "Volume", correct: false, checked: false },
                ]
               
            },
            {
                question: "Watch the following video and answer the questions that follow:",
                video: "scie.mp4",
                mainQuestion: "Which of the following is NOT a scientific skill?",
                answers: [
                    { text: "Observation", correct: false, checked: false },
                    { text: "Classification", correct: false, checked: false },
                    { text: "Manipulation", correct: false, checked: false },
                    { text: "Writing a report", correct: true, checked: true },
                ]
                
            },
            {
                question: "Which of the following scientific skills is NOT correctly matched with its meaning?",
                answers: [
                    { text: "Conclusion - Final decision after making an observation", correct: false, checked: false  },
                    { text: "Communication - Skill used in exchanging and reporting information", correct: false, checked: false },
                    { text: "Prediction - Giving sensible suggestion about what will happen in future", correct: false, checked: false },
                    { text: "Measuring - Handling something in a skilful manner", correct: true, checked: true },
                ]
               
            },
           
            {
        
                question: "The following are components of integrated science.",
                video: "video5.mp4",
                mainQuestion:"Which one is odd one out?",
                answers: [
                    {text: "Biology", correct: false, checked: false},
                    {text: "History", correct: true, checked: true},
                    {text: "Chemistry", correct: false, checked: false},
                    {text: "Physics", correct: false, checked: false},
                    
                ]
            },
            {
                
                question: "Watch the following video and answer the questions that follow:",
                video: "video3.mp4",
                mainQuestion:"Magnification is the process of making small objects or organisms appear larger.True or False?",
                answers: [
                    {text: "False", correct: false, checked: false},
                    {text: "True", correct: true, checked: true},
                    
                    
                ]
            },
        
            {
                
                question: "Which part of the microscope is used for fine-tuning the focus to bring the specimen into sharp detail?",
                //image: "image1.jpg",
                //mainQuestion:"Which one is odd one out?",
                answers: [
                    {text: "Coarse adjustment knob", correct: false, checked: false},
                    {text: " Diaphragm", correct: false, checked: false},
                    {text: " Stage clips", correct: false, checked: false},
                    {text: " Fine adjustment knob", correct: true, checked: true},
                    
                ]
            },
        
           
        
            {
                
                question: "What is the function of the objective lenses in a microscope?",
                //image: "image1.jpg",
                //mainQuestion:"Which one is odd one out?",
                answers: [
                    {text: "To control the amount of light entering the microscope", correct: false, checked: false},
                    {text: "To provide a comfortable grip for the user", correct: false, checked: false},
                    {text: "To magnify the specimen", correct: true, checked: true},
                    {text: "To adjust the focus of the microscope", correct: false, checked: false},
                    
                ]
            },
        
            {
                
                question: "Which of the following parts of a microscope is wrongly Matched?",
                //image: "image1.jpg",
                //mainQuestion:"Which one is odd one out?",
                answers: [
                    {text: "Clip - Holds the slide containing the specimen in position", correct: false, checked: false},
                    {text: "Condenser - Concentrates light onto the stage", correct: false, checked: false},
                    {text: "Arm - Supports the body tube and the stage", correct: false, checked: false},
                    {text: "Eyepiece - Provides a firm support which makes the microscope stable on the bench", correct: true, checked: true},
                    
                ]
            },
        
            
            {
                question: "Learners were taken through an educational tour in an instituition. During the tour they came across the symbol shown below.",
                image: "image.jpg", 
                mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
                answers: [
                    {text: "Flammable", correct: true, checked: true},
                    {text: "Carcinogenic", correct: false, checked: false},
                    {text: "Toxic", correct: false, checked: false},
                    {text: "Oxidising", correct: false, checked: false},
                    
                ]
            },
             {
                question: "Learners were involved in grouping plants into flowering and non-flowering plants as shown below.",
                video: "video2.mp4",
                mainQuestion:"Which component of integrated science was this lesson drawn from?(KNEC 2023 No.1)", 
                answers: [
                    {text: "Biology", correct: true, checked: true},
                    {text: "History", correct: false, checked: false},
                    {text: "Chemistry", correct: false, checked: false},
                    {text: "Physics", correct: false, checked: false},
                   
                ]
            },
            {
                
                question: "The picture below shows an injury caused by a certain substance during science lesson.",
                image: "image2.jpg",
                mainQuestion:"Identify the likely substance that caused the injury (KNEC 2023 No.3)",
                answers: [
                    {text: "Open flames or hot objects", correct: false, checked: false},
                    {text: "A spill of hot or corrosive liquid", correct: true, checked: true},
                    {text: "Inhaling poisonous fumes", correct: false, checked: false},
                    {text: "Open electrical sockets", correct: false, checked: false},
                    
                ]
            },
            {
                question: "Watch the video below and then answer the questions that follow:",
                video: "video4.mp4", 
                mainQuestion:"Which of the following apparatus is NOT used for measuring volume?",
                answers: [
                    {text: "Volumetric flask", correct: false, checked: false},
                    {text: "Burette", correct: false, checked: false},
                    {text: "Filter funnel", correct: true, checked: true},
                    {text: "Pipette", correct: false, checked: false},
                    
                ]
            },
            
            {
                question: "Which of the apparatus is used for measuring fixed volumes?",
                //image: "flame.jpg", 
                //mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
                answers: [
                    {text: "Graduated beaker", correct: false, checked: false},
                    {text: "Pipette", correct: true, checked: true},
                    {text: "Burette", correct: false, checked: false},
                    {text: "Syringe", correct: false, checked: false},
                    
                ]
            },
           
            {
                
                question: "Watch the video below",
                video: "video6.mp4",
                mainQuestion:"Which liquid is commonly used in laboratory thermometers due to its broad temperature range and stable thermal properties?(KNEC 2023 No.5a)",
                answers: [
                    {text: "Water", correct: false, checked: false},
                    {text: " Mercury", correct: true, checked:true},
                    {text: "Cooking oil", correct: false, checked: false},
                    {text: " Ethanol", correct: false, checked: false},
                    
                ]
            }, 
            {
                
                question: "Grade 7 learners carried out an experiment using the instrument in the video above.",
                //image: "image3.jpg",
                mainQuestion:"What is the purpose of the bulb at the end of a laboratory thermometer? (KNEC 2023 No.5b)",
                answers: [
                    {text: "To make the thermometer look more aesthetically pleasing", correct: false, checked: false},
                    {text: "To provide a comfortable grip for the user", correct: false, checked: false},
                    {text: "To measure atmospheric pressure", correct: false, checked: false},
                    {text: "To contain the temperature-sensitive liquid", correct: true, checked: true},
                    
                ]
            }, 
            {
                question: "Watch the video below and answer the following questions;",
                video: "video8.mp4",  
                mainQuestion:"What is the main characteristic that distinguishes a luminous flame from a non-luminous flame in a burner? (KNEC 2023 No.2)",
                answers: [
                    {text: "Temperature", correct: false, checked: false},
                    {text: " Color", correct: true, checked: true},
                    {text: "Odor", correct: false, checked: false},
                    {text: "Stability", correct: false, checked: false},
                    
                ]
            },
        
            {
                question: "Which type of flame is more suitable for heating purposes in a laboratory setting due to its higher temperature and cleaner combustion?",
                //video: "video1.mp4",  
                //mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
                answers: [
                    {text: "Luminous flame", correct: false, checked: false},
                    {text: "Yellow flame", correct: false, checked: false},
                    {text: " Blue flame", correct: true, checked: true},
                    {text: "Red flame", correct: false, checked: false},
                    
                ]
            },
            {
                question: "What is the primary reason that a non-luminous flame is preferred for certain chemical reactions in the laboratory?",
                //video: "video1.mp4",  
                //mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
                answers: [
                    {text: "It is cooler than a luminous flame.", correct: false, checked: false},
                    {text: "  It provides a more visible light.", correct: false, checked: false},
                    {text: " It is easier to control the shape and size.", correct: false, checked: false},
                    {text: " It produces less smoke and soot.", correct: true, checked: true},
                    
                ]
            },
            {
                question: "Watch the video and answer the questions that follow",
                video: "video7.mp4",  
                mainQuestion:"Which part of the Bunsen burner controls the amount of air entering the burner, affecting the type of flame produced? (KNEC 2023 No.2)",
                answers: [
                    {text: "Barrel", correct: false, checked: false},
                    {text: " Collar", correct: true, checked: true},
                    {text: " Air vent", correct: false, checked: false},
                    {text: "Gas tap", correct: false, checked: false},
                    
                ]
            },
            {
                question: "What is the purpose of the barrel on a Bunsen burner?",
                //video: "video1.mp4",  
                //mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
                answers: [
                    {text: "To control the flow of gas to the burner", correct: true, checked: true},
                    {text: "  To adjust the height of the flame", correct: false, checked: false},
                    {text: " To provide a stable base for the burner", correct: false, checked: false},
                    {text: " To protect the user from heat", correct: false, checked: false},
                    
                ]
            }
        ];

        let introSection; // Declare introSection variable outside of the if block
        const quizContainer = document.getElementById('quiz-container');
        const startButton = document.getElementById('start-btn');
        const questionElement = document.getElementById("question");
        const answerButtons = document.getElementById("answer-buttons");
        let nextButton = document.getElementById("next-btn");
        //let submitButton = document.getElementById("submit-btn");
        let submitButton = document.createElement("button");
               submitButton.innerHTML = "Submit";
               submitButton.id = "submit-btn"; // Give an id to the submit button
        const videoContainer = document.getElementById("video-container");
        let videoElement = document.createElement("video");

        document.addEventListener('DOMContentLoaded', function () {
            // Check if the necessary elements exist
            introSection = document.querySelector('.intro'); // Assign introSection outside the if block
            if (introSection && quizContainer && startButton) {
                startButton.addEventListener('click', startQuiz);
            }

            let currentQuestionIndex = 0;
            let score = 0;
            // Other code for event listeners, functions, etc.
        });

        function startQuiz() {
            console.log('startQuiz function is triggered');
            introSection.style.display = 'none'; // Hide the introduction section
            quizContainer.style.display = 'block'; // Display the quiz section
            loadQuestion();
           
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML = "Next";
            showQuestion();
            loadVideo();


            resetTimer();
            timer = setInterval(updateCountdown, 1000);
            time = startingMinutes * 60;
            clearInterval(timer);
            //timer = setInterval(updateCountdown, 1000);
        }

        function resetTimer() {
            time = startingMinutes * 60;
            // timer = setInterval(updateCountdown, 1000);
        }

        function loadQuestion() {
            // Display the "Next" button
            nextButton.style.display = 'block';
        }

        function showQuestion() {
            resetState();
            let currentQuestion = questions[currentQuestionIndex];
            let questionNo = currentQuestionIndex + 1;

            // Display both question and mainQuestion (if available)
            let fullQuestion = `${questionNo}. ${currentQuestion.question}`;
            if (currentQuestion.mainQuestion) {
                fullQuestion += `<br>${currentQuestion.mainQuestion}`;
            }

            questionElement.innerHTML = fullQuestion;

            if (currentQuestion.explanation) {
                // Display explanation if available
                const explanationElement = document.createElement("div");
                explanationElement.classList.add("explanation");
                explanationElement.innerHTML = currentQuestion.explanation;
                answerButtons.appendChild(explanationElement);
            }


            if (currentQuestion.video) {
                const videoElement = document.createElement("video");
                videoElement.src = currentQuestion.video;
                videoElement.width = 640; // Set the width as needed
                videoElement.height = 360; // Set the height as needed
                videoElement.controls = true;
                videoElement.classList.add("question-video");
                answerButtons.appendChild(videoElement);

                videoElement.addEventListener("loadeddata", function () {
                    displayQuestion();
                });
            } else {
                // If there's no video, display the question directly
                displayQuestion();
            }

            function displayQuestion() {
                // Display both question and mainQuestion (if available)
                let fullQuestion = `${questionNo}.<span class="regular-question">${currentQuestion.question}</span>`;
                if (currentQuestion.mainQuestion) {
                    fullQuestion += `<br><span class="main-question">${currentQuestion.mainQuestion}</span>`;
                }
                questionElement.innerHTML = fullQuestion;
            }

            if (currentQuestion.image) {
                const imageElement = document.createElement("img");
                imageElement.src = currentQuestion.image;
                imageElement.alt = "Question Image";
                imageElement.classList.add("question-image", "img-fluid");
                answerButtons.appendChild(imageElement);
            }

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                answerButtons.appendChild(button);
                //nextButton.style.display = "none";
                button.addEventListener("click", () => selectAnswer(button, answer));
                if (answer.correct) {
                button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectAnswer);
            });
        }

        function resetState() {
            nextButton.style.display = "none";
            while (answerButtons.firstChild) {
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }

        function selectAnswer(selectedBtn, answer) {
            answer.checked = true;

            const isCorrect = answer.correct;
            if (isCorrect) {
                selectedBtn.classList.add("correct");
                score++;
            } else {
                selectedBtn.classList.add("incorrect");
            }

            Array.from(answerButtons.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });

            showCheckMark(selectedBtn, isCorrect);
           // showExplanation(answer);
            nextButton.style.display = "block";
        }

       
        

        function showCheckMark(selectedBtn, isCorrect) {
            const checkMark = document.createElement("span");
            checkMark.classList.add("check-mark");
            checkMark.innerHTML = isCorrect ? "✔" : "✘";
            selectedBtn.appendChild(checkMark);
        }

        
        videoElement.play();


        function showScore() {
            clearInterval(timer); // Clear the timer interval
            resetState();
            // nextButton.style.display = "none";
            //document.getElementById('submit-btn').style.display = "block";
            // Display different messages based on the score
            if (score === questions.length) {
                alert(`Impressive work! Nailed every question. You're truly a star student! 🌟 Keep up the outstanding performance. Mr. Mwangi is beaming with pride over your flawless score!`);
            } else {
                alert(`Fantastic effort! You achieved a score of ${score} out of ${questions.length}. Each correct answer is a step forward on your journey to mastery. Keep practicing, and success is sure to come your way. Mr. Mwangi has full confidence in your abilities!`);
            }
            startQuiz();

            // Reset the Next button and pause the video
            nextButton.style.display = "none";
            document.getElementById('submit-btn').style.display = "block";


            videoElement.pause(); // Use videoElement instead of video
        }
       // Remove the event listener from the last button
        nextButton.removeEventListener("click", handleNextButton);

        document.getElementById('submit-btn').addEventListener("click", showScore);

        function handleNextButton() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showScore();
            }
        }

        nextButton.addEventListener("click", () => {
            if (currentQuestionIndex < questions.length) {
                handleNextButton();
            } else {
                startQuiz();
            }
        });
     
        startQuiz();


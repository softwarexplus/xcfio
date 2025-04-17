const css = ``

export const moderator_application = ({ email, id, username }: { email: string; id: string; username: string }) => `
<!DOCTYPE html>
<html lang="en" data-theme="dark">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Discord Server Application</title>
        <style>
            :root {
                --primary-color: #4e5d94;
                --secondary-color: #36393f;
                --bg-primary: #36393f;
                --bg-secondary: #2f3136;
                --text-primary: #dcddde;
                --text-secondary: #b9bbbe;
                --accent-primary: #7289da;
                --accent-secondary: #5c6fb1;
                --error: #ed4245;
                --success: #43b581;
                --input-bg: #40444b;
                --input-border: #202225;
                --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                --gradient-start: #5865f2;
                --gradient-end: #7289da;
                --button-hover-bg: #5c6fb1;
            }

            [data-theme="light"] {
                --primary-color: #6c7ae0;
                --secondary-color: #e4e6eb;
                --bg-primary: #f6f6f7;
                --bg-secondary: #ffffff;
                --text-primary: #2e3338;
                --text-secondary: #747f8d;
                --accent-primary: #5865f2;
                --accent-secondary: #4752c4;
                --error: #d83c3e;
                --success: #3ba55c;
                --input-bg: #e3e5e8;
                --input-border: #c7ccd1;
                --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                --gradient-start: #5865f2;
                --gradient-end: #8ea1e1;
                --button-hover-bg: #4752c4;
            }

            [data-theme="system"] {
                /* System theme will use prefers-color-scheme under the hood */
            }

            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                font-family: "Whitney", "Helvetica Neue", Helvetica, Arial, sans-serif;
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            }

            body {
                background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
                color: var(--text-primary);
                line-height: 1.5;
                display: flex;
                flex-direction: column;
                min-height: 100vh;
            }

            header {
                background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
                padding: 2rem 1rem;
                text-align: center;
                box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
                position: relative;
            }

            header h1 {
                color: white;
                font-size: 2rem;
                margin-bottom: 0.5rem;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            header p {
                color: rgba(255, 255, 255, 0.9);
                font-size: 1.1rem;
                max-width: 600px;
                margin: 0 auto;
            }

            main {
                max-width: 800px;
                width: 100%;
                margin: 2rem auto;
                padding: 0 1rem;
            }

            .form-container {
                background-color: var(--bg-secondary);
                border-radius: 8px;
                padding: 2rem;
                margin-bottom: 2rem;
                box-shadow: var(--card-shadow);
                position: relative;
                overflow: hidden;
            }

            .form-container::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
            }

            .form-group {
                margin-bottom: 1.5rem;
            }

            label {
                display: block;
                font-weight: 600;
                margin-bottom: 0.5rem;
                color: var(--text-primary);
            }

            input,
            textarea,
            select {
                width: 100%;
                padding: 0.75rem;
                background-color: var(--input-bg);
                border: 1px solid var(--input-border);
                border-radius: 4px;
                color: var(--text-primary);
                font-size: 1rem;
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
            }

            textarea {
                min-height: 120px;
                resize: vertical;
            }

            input:hover,
            textarea:hover,
            select:hover {
                border-color: var(--accent-primary);
            }

            input:focus,
            textarea:focus,
            select:focus {
                outline: none;
                border-color: var(--accent-primary);
                box-shadow: 0 0 0 2px rgba(114, 137, 218, 0.3);
            }

            button {
                background-color: var(--accent-primary);
                color: white;
                border: none;
                border-radius: 4px;
                padding: 0.75rem 1.5rem;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.2s ease, transform 0.1s ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            button:hover {
                background-color: var(--button-hover-bg);
                transform: translateY(-1px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }

            button:active {
                transform: translateY(0);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .success-message,
            .error-message {
                padding: 1rem;
                border-radius: 4px;
                margin-top: 1rem;
                display: none;
                animation: fadeIn 0.3s ease;
            }

            .success-message {
                background-color: rgba(67, 181, 129, 0.2);
                border: 1px solid var(--success);
                color: var(--success);
            }

            .error-message {
                background-color: rgba(237, 66, 69, 0.2);
                border: 1px solid var(--error);
                color: var(--error);
            }

            /* Theme selector pills */
            .theme-options {
                position: absolute;
                top: 1rem;
                right: 1rem;
                display: flex;
                background-color: rgba(0, 0, 0, 0.25);
                border-radius: 30px;
                padding: 4px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            }

            .theme-option {
                border: none;
                background: transparent;
                color: rgba(255, 255, 255, 0.7);
                font-size: 0.85rem;
                padding: 6px 12px;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                outline: none;
            }

            .theme-option.active {
                background-color: rgba(255, 255, 255, 0.9);
                color: #2e3338;
                font-weight: 600;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }

            .theme-option:hover:not(.active) {
                background-color: rgba(255, 255, 255, 0.1);
            }

            .theme-icon {
                margin-right: 4px;
                font-size: 0.9rem;
            }

            .form-section-title {
                margin-bottom: 1.5rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid var(--input-border);
                font-size: 1.25rem;
                color: var(--text-primary);
            }

            .required-field::after {
                content: " *";
                color: var(--error);
            }

            .form-field-hint {
                margin-top: 0.25rem;
                font-size: 0.85rem;
                color: var(--text-secondary);
            }

            .form-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }

            @media (max-width: 640px) {
                .form-grid {
                    grid-template-columns: 1fr;
                }

                .theme-options {
                    position: relative;
                    top: 0;
                    right: 0;
                    margin: 0 auto 1rem auto;
                    width: fit-content;
                }
            }

            footer {
                text-align: center;
                padding: 1.5rem;
                margin-top: auto;
                font-size: 0.9rem;
                color: var(--text-secondary);
                background-color: var(--bg-secondary);
                box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes pulse {
                0% {
                    box-shadow: 0 0 0 0 rgba(114, 137, 218, 0.4);
                }
                70% {
                    box-shadow: 0 0 0 10px rgba(114, 137, 218, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(114, 137, 218, 0);
                }
            }

            .input-animate:focus {
                animation: pulse 1.5s infinite;
            }

            .submit-btn {
                background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
                width: 100%;
                padding: 1rem;
                margin-top: 1rem;
                transition: all 0.3s ease;
            }

            .submit-btn:hover {
                background: linear-gradient(90deg, var(--gradient-end), var(--gradient-start));
                transform: translateY(-2px);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            }
        </style>
    </head>
    <body>
        <header>
            <div class="theme-options">
                <button class="theme-option" data-theme="light">
                    <span class="theme-icon">☀️</span>
                    <span>Light</span>
                </button>
                <button class="theme-option" data-theme="dark">
                    <span class="theme-icon">🌙</span>
                    <span>Dark</span>
                </button>
            </div>
            <h1>Discord Server Application</h1>
            <p>Please fill out this application to join our community</p>
        </header>

        <main>
            <div class="form-container">
                <h2 class="form-section-title">Personal Information</h2>
                <form id="applicationForm">
                    <div class="form-group">
                        <label for="id" class="required-field">id</label>
                        <input type="text" id="id" name="id" class="input-animate" value="${id}" readonly />
                        <p class="form-field-hint">Your Discord ID</p>
                    </div>

                    <div class="form-group">
                        <label for="username" class="required-field">Username</label>
                        <input type="text" id="username" name="username" class="input-animate" value="${username}" readonly />
                        <p class="form-field-hint">Your Discord username</p>
                    </div>
                    
                    <div class="form-group">
                        <label for="email" class="required-field">Email</label>
                        <input type="text" id="email" name="email" class="input-animate" value="${email}" readonly />
                        <p class="form-field-hint">Your Discord email</p>
                    </div>

                    <div class="form-group">
                        <label for="age" class="required-field">Age</label>
                        <input type="number" id="age" name="age" min="13" class="input-animate" required />
                        <p class="form-field-hint">You must be at least 13 years old to join</p>
                    </div>

                    <h2 class="form-section-title">Get to Know You</h2>

                    <div class="form-group">
                        <label for="aboutMe" class="required-field">Tell us about yourself</label>
                        <textarea id="aboutMe" name="aboutMe" class="input-animate" required></textarea>
                        <p class="form-field-hint">Share a bit about who you are and what you enjoy</p>
                    </div>

                    <div class="form-group">
                        <label for="whyJoin" class="required-field">Why do you want to join our server?</label>
                        <textarea id="whyJoin" name="whyJoin" class="input-animate" required></textarea>
                        <p class="form-field-hint">What attracted you to our community?</p>
                    </div>

                    <h2 class="form-section-title">Additional Information</h2>

                    <div class="form-group">
                        <label for="interests">What are your hobbies and interests?</label>
                        <textarea id="interests" name="interests" class="input-animate"></textarea>
                        <p class="form-field-hint">Gaming, art, music, coding, etc.</p>
                    </div>

                    <div class="form-group">
                        <label for="experience">Previous Discord server experience?</label>
                        <textarea id="experience" name="experience" class="input-animate"></textarea>
                        <p class="form-field-hint">Have you been active in other Discord communities?</p>
                    </div>

                    <button type="submit" class="submit-btn">Submit Application</button>
                </form>

                <div class="success-message" id="successMessage">
                    Your application has been submitted successfully! We'll review it and get back to you soon.
                </div>

                <div class="error-message" id="errorMessage">
                    There was an error submitting your application. Please try again.
                </div>
            </div>
        </main>

        <footer>&copy; 2025 Discord Server Application Form | Designed with ❤️</footer>

        <script>
            // Theme options functionality
            const themeOptions = document.querySelectorAll(".theme-option")
            const htmlElement = document.documentElement

            // Initialize active theme
            function initTheme() {
                // Check for saved theme preference
                const savedTheme = localStorage.getItem("theme")

                // If saved theme is 'system' or not set, check system preference
                if (savedTheme === "system" || !savedTheme) {
                    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
                    htmlElement.setAttribute("data-theme", prefersDark ? "dark" : "light")
                } else {
                    htmlElement.setAttribute("data-theme", savedTheme)
                }

                // Set active class on the selected theme button
                themeOptions.forEach((option) => {
                    if (option.getAttribute("data-theme") === (savedTheme || "dark")) {
                        option.classList.add("active")
                    } else {
                        option.classList.remove("active")
                    }
                })
            }

            // Add click event listeners to theme options
            themeOptions.forEach((option) => {
                option.addEventListener("click", () => {
                    // Set the theme
                    const selectedTheme = option.getAttribute("data-theme")
                    localStorage.setItem("theme", selectedTheme)

                    // If system theme, apply based on system preference
                    if (selectedTheme === "system") {
                        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
                        htmlElement.setAttribute("data-theme", prefersDark ? "dark" : "light")
                    } else {
                        htmlElement.setAttribute("data-theme", selectedTheme)
                    }

                    // Update active class
                    themeOptions.forEach((btn) => btn.classList.remove("active"))
                    option.classList.add("active")
                })
            })

            // Listen for system theme changes if using system theme
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
                if (localStorage.getItem("theme") === "system") {
                    htmlElement.setAttribute("data-theme", e.matches ? "dark" : "light")
                }
            })

            // Initialize theme on page load
            initTheme()

            // Form submission
            document.getElementById("applicationForm").addEventListener("submit", async (e) => {
                e.preventDefault()

                const formData = new FormData(e.target)
                const formObject = Object.fromEntries(formData.entries())

                try {
                    const response = await fetch("/submit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formObject)
                    })

                    const result = await response.json()

                    if (result.success) {
                        document.getElementById("successMessage").style.display = "block"
                        document.getElementById("errorMessage").style.display = "none"
                        document.getElementById("applicationForm").reset()

                        // Scroll to success message
                        document.getElementById("successMessage").scrollIntoView({ behavior: "smooth" })
                    } else {
                        document.getElementById("errorMessage").textContent = result.message
                        document.getElementById("errorMessage").style.display = "block"
                        document.getElementById("successMessage").style.display = "none"

                        // Scroll to error message
                        document.getElementById("errorMessage").scrollIntoView({ behavior: "smooth" })
                    }
                } catch (error) {
                    document.getElementById("errorMessage").textContent = "Network error. Please try again."
                    document.getElementById("errorMessage").style.display = "block"
                    document.getElementById("successMessage").style.display = "none"

                    // Scroll to error message
                    document.getElementById("errorMessage").scrollIntoView({ behavior: "smooth" })
                }
            })

            // Add visual feedback for form inputs
            const formInputs = document.querySelectorAll('input[type="text"], input[type="number"], textarea')
            formInputs.forEach((input) => {
                input.addEventListener("focus", () => {
                    input.parentElement.style.transform = "translateX(5px)"
                    setTimeout(() => {
                        input.parentElement.style.transform = "translateX(0)"
                    }, 200)
                })
            })
        </script>
    </body>
</html>
`

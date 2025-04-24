export const base = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xcfio - Discord Bot Developer</title>
    <style>
        :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --primary-color: #5865F2;
            --secondary-color: #7289DA;
            --accent-color: #2C2F33;
            --card-bg: #f5f7fa;
            --shadow-color: rgba(0,0,0,0.1);
            --header-bg: #111111;
            --header-text: #ffffff;
            --search-bg: #2d2d2d;
            --theme-toggle-bg: #6c72cb;
            --footer-bg: #2C2F33;
        }

        [data-theme="dark"] {
            --bg-color: #23272A;
            --text-color: #ffffff;
            --primary-color: #5865F2;
            --secondary-color: #7289DA;
            --accent-color: #99AAB5;
            --card-bg: #2C2F33;
            --shadow-color: rgba(0,0,0,0.3);
            --header-bg: #111111;
            --header-text: #ffffff;
            --search-bg: #2d2d2d;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: background-color 0.3s, color 0.3s;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        .title-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 1.5rem;
            background-color: var(--header-bg);
            color: var(--header-text);
            height: 60px;
        }

        .logo {
            font-size: 1.2rem;
            font-weight: 600;
            letter-spacing: 0.5px;
        }

        .nav-controls {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .nav-link {
            color: var(--header-text);
            opacity: 0.85;
            text-decoration: none;
            font-size: 0.9rem;
            transition: opacity 0.2s;
            display: flex;
            align-items: center;
        }
        
        .nav-link:hover {
            opacity: 1;
        }
        
        .login-btn {
            padding: 0.5rem 1.2rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .login-btn:hover {
            background-color: #4752c4;
        }

        .theme-toggle {
            background-color: var(--theme-toggle-bg);
            border-radius: 50px;
            padding: 0.3rem;
            display: flex;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            margin: 0 auto;
            width: fit-content;
        }

        .theme-option {
            border: none;
            border-radius: 50px;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            background: transparent;
            color: rgba(255, 255, 255, 0.7);
            transition: all 0.2s;
        }

        .theme-option.active {
            background-color: white;
            color: #333;
        }

        .theme-icon {
            font-size: 1rem;
        }

        /* Main content */
        .hero {
            padding: 5rem 2rem;
            text-align: center;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 800;
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 2rem;
            opacity: 0.9;
        }

        .cta-button {
            padding: 0.8rem 2rem;
            background-color: white;
            color: var(--primary-color);
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .features {
            padding: 4rem 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .feature-card {
            background-color: var(--card-bg);
            border-radius: 8px;
            padding: 2rem;
            box-shadow: 0 4px 10px var(--shadow-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
        }

        .feature-card h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        footer {
            background-color: var(--footer-bg);
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 2rem;
        }

        .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .copyright {
            margin-top: 1.5rem;
            font-size: 0.9rem;
            opacity: 0.7;
        }

        @media (max-width: 768px) {
            .title-bar {
                padding: 0.75rem 1rem;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1rem;
            }
            
            .nav-controls {
                gap: 1rem;
            }
        }
    </style>
</head>
<body>
    <header class="title-bar">
        <div class="logo">xcfio</div>
        <div class="nav-controls">
            <a href="https://discord.gg/FaCCaFM74Q" class="nav-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style="margin-right: 6px;">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord
            </a>
            <a href="https://github.com/xcfio" class="nav-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style="margin-right: 6px;">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
            </a>
            <a href="/login"><button class="login-btn">Login</button></a>
        </div>
    </header>

    <section class="hero">
        <h1>Powerful Discord Bots for Your Community</h1>
        <p>Custom bot development to enhance your Discord server with moderation, games, music, and more.</p>
        <button class="cta-button">Get Started</button>
    </section>

    <section class="features">
        <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Moderation Tools</h3>
            <p>Keep your server safe with advanced moderation capabilities including auto-mod, custom commands, and role management.</p>
        </div>
        <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>Custom Games</h3>
            <p>Engage your community with interactive games and activities built directly into your Discord server.</p>
        </div>
        <div class="feature-card">
            <div class="feature-icon">🎵</div>
            <h3>Music Integration</h3>
            <p>High-quality music playback from various sources with queue management and user controls.</p>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="theme-toggle">
                <button class="theme-option light active" data-theme="light">
                    <span class="theme-icon">☀️</span>
                    <span>Light</span>
                </button>
                <button class="theme-option dark" data-theme="dark">
                    <span class="theme-icon">🌙</span>
                    <span>Dark</span>
                </button>
            </div>
            <p class="copyright">&copy; 2025 xcfio - Discord Bot Development</p>
        </div>
    </footer>

    <script>
        // Theme switcher functionality
        const themeOptions = document.querySelectorAll('.theme-option');
        
        // Check for saved theme preference or use device preference
        const savedTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Apply the theme on page load
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Update active theme button
        const updateActiveTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            themeOptions.forEach(option => {
                if(option.getAttribute('data-theme') === currentTheme) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
        };
        
        updateActiveTheme();
        
        // Theme option selection
        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.getAttribute('data-theme');
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
                updateActiveTheme();
            });
        });
    </script>
</body>
</html>
`

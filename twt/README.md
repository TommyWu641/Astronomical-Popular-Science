# 🔭 Observatory Website
link:
    https://tommywu641.github.io/Astronomical-Popular-Science/twt/index.html
A modern, responsive observatory website built with HTML5, CSS3, and JavaScript, featuring interactive astronomy quiz, theme switching, and bilingual support.

> **🌟 This is my first AI-assisted web development project!**

## ✨ Features

### 🎨 Design & UX
- **Dark/Light Theme Toggle** - Switch between dark and light modes with preference saved
- **Bilingual Support** - Full English/Traditional Chinese language switching (i18n)
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Fade-in scroll effects, hover effects, and transitions
- **Back to Top Button** - Appears when scrolling down for easy navigation

### 📚 Content Sections
- **Hero Section** - Animated star background with call-to-action
- **About** - Three service cards with hover effects
- **Observations** - Dynamic observation data (sunset, moonrise, moon phase, visible planets)
- **Gallery** - 6 real astronomy images from Unsplash with modal viewer
- **Quiz** - Interactive 15-question astronomy knowledge test
- **Contact** - Working email form that opens default email client

### 🎮 Interactive Quiz
- **15 Astronomy Questions** - With detailed explanations for each answer
- **One Question at a Time** - Answer before proceeding to next
- **Live Score Tracking** - Real-time score display
- **Progress Bar** - Visual progress indicator
- **Show Answer Option** - Reveal answer without scoring
- **Bilingual Questions** - Full English and Chinese translations
- **Result Summary** - Final score with correct/wrong breakdown

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic markup and structure |
| CSS3 | Styling, animations, CSS variables for theming |
| JavaScript | Interactivity, quiz logic, theme/language switching |
| LocalStorage | Saving user preferences (theme, language) |
| Unsplash API | High-quality astronomy images |

## 📁 Project Structure

```
天文臺網站/
├── index.html      # Main HTML file with all sections
├── style.css       # Complete styling with dark/light themes
├── script.js       # JavaScript for all interactive features
└── README.md       # This file
```

## 🚀 Getting Started

### Option 1: Direct Open
Simply double-click `index.html` to open in your browser. No server required!

### Option 2: Live Server (Recommended for Development)
1. Install VS Code Live Server extension
2. Right-click `index.html` → "Open with Live Server"
3. Edit files and see changes instantly

## 📖 How to Use

### Theme Switching
Click the **🌙/☀️** button in the navigation bar to toggle between dark and light themes.

### Language Switching
Click the **中文/English** button to switch the entire website language.

### Taking the Quiz
1. Scroll to the Quiz section or click "Start Quiz"
2. Click "🚀 Start Quiz" to begin
3. Select an answer or click "💡 Show Answer" to reveal
4. Click "Next Question" to proceed
5. View final results after completing all 15 questions

### Contact Form
Fill in the form and click "📧 Send via Email" to open your default email client with pre-filled message.

## 🎯 Key Technical Highlights

### For Resume/Portfolio

```
First AI-Assisted Web Development Project

• Built a fully responsive observatory website using HTML5, CSS3, and JavaScript
• Implemented theme switching system with CSS custom properties and localStorage
• Developed bilingual support (i18n) for English and Traditional Chinese
• Created interactive quiz application with dynamic question rendering
• Integrated real-time data simulation for astronomical observations
• Designed responsive layout supporting mobile, tablet, and desktop
• Added smooth scroll animations, modal viewer, and form validation
• Utilized Unsplash API for high-quality astronomy imagery
```

## 🌈 Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --highlight: #e94560;      /* Main accent color */
    --accent-color: #0f3460;   /* Secondary color */
}
```

### Add More Quiz Questions
Edit `quizData` array in `script.js`:
```javascript
{
    question: { en: "Your question?", zh: "你的問題？" },
    options: { 
        en: ["Option 1", "Option 2", "Option 3", "Option 4"], 
        zh: ["選項1", "選項2", "選項3", "選項4"] 
    },
    correct: 0,  // Index of correct answer (0-3)
    answer: { en: "English explanation", zh: "中文解釋" }
}
```

### Update Contact Info
Edit the contact information in `index.html` and `script.js` (for email form).

## 📱 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎓 Learning Resources

This project demonstrates:
- Modern CSS (variables, flexbox, grid, animations)
- Vanilla JavaScript (DOM manipulation, event handling, localStorage)
- Responsive design principles
- Internationalization (i18n) best practices
- Accessibility considerations

## 📝 License

This project was created for educational and portfolio purposes.

## 🙏 Acknowledgments

- **AI Assistant** - Built with help from AI technology
- **Unsplash** - Free high-quality astronomy images
- **Inspiration** - Real observatory websites and astronomy education

---

**🔭 Explore the infinite universe, one star at a time!**

*Last updated: 2026*

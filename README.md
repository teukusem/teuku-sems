# Personal Website - Teuku Sem

A modern, responsive personal portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, clean design, and showcases projects and skills.

## 🚀 Features

- **Responsive Design** - Optimized for all devices
- **Smooth Animations** - Powered by Framer Motion
- **Clean Architecture** - Follows Uncle Bob's Clean Code principles
- **TypeScript** - Type-safe development
- **Modern UI** - Sleek dark theme with red accents
- **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── SplashProfile.tsx
│   ├── HeroText.tsx
│   ├── CircularText.tsx
│   ├── AboutMeHighlight.tsx
│   ├── TechnologyTicker.tsx
│   └── ProjectCard.tsx
├── constants/           # Application constants
│   ├── animations.ts    # Framer Motion variants
│   └── ui.ts           # UI constants and breakpoints
├── data/               # Static data
│   ├── projects.ts     # Project information
│   └── skills.ts       # Skills and technologies
├── hooks/              # Custom React hooks
│   ├── useTime.ts      # Time management
│   ├── useScroll.ts    # Scroll position tracking
│   ├── useResponsive.ts # Screen size detection
│   └── useInView.ts    # Intersection observer
├── utils/              # Utility functions
│   └── time.ts         # Time formatting utilities
├── App.tsx             # Main application component
├── AppRouter.tsx       # Application routing
├── About.tsx           # About page component
├── PageTransition.tsx  # Page transition effects
└── main.tsx           # Application entry point
```

## 🎨 Design Features

### Hero Section
- Animated splash screen with profile photo
- Dynamic hero text with scroll-based parallax effects
- Rotating circular text animation
- Responsive design for mobile and desktop

### About Section
- Progressive text highlighting animation
- Scrolling technology ticker bands
- Intersection observer-based animations

### Projects Section
- Grid layout showcasing recent work
- Hover effects and smooth transitions
- External link integration

### Interactive Elements
- Smooth page transitions
- Responsive navigation menu
- Real-time clock display
- Scroll-triggered animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Architecture

This project follows **Clean Code principles** with:

### Single Responsibility Principle
- Each component has a single, focused responsibility
- Clear separation of concerns between UI, logic, and data

### Custom Hooks
- Reusable logic extracted into custom hooks
- Centralized state management for common functionality

### Constants & Configuration
- Animation variants centralized in constants
- UI constants for consistent spacing and timing
- Magic numbers eliminated

### Data Separation
- Project data extracted from components
- Skills and technologies maintained separately
- Easy to update and maintain

## 🎬 Animation System

Built with Framer Motion featuring:
- **Staggered animations** for text and elements
- **Scroll-triggered animations** using intersection observer
- **Smooth page transitions** with custom transition components
- **Responsive animations** that adapt to screen size

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint-based responsive utilities
- Touch-friendly navigation
- Optimized animations for different screen sizes

## 🔧 Customization

### Adding New Projects
Update `src/data/projects.ts`:
```typescript
{
  image: "/assets/project-image.png",
  title: "Project Name",
  desc: "Project description...",
  link: "https://project-url.com"
}
```

### Adding New Skills
Update `src/data/skills.ts`:
```typescript
export const skills = [
  "React", "TypeScript", "New Skill"
];
```

### Customizing Animations
Modify `src/constants/animations.ts` and `src/constants/ui.ts` for timing and duration adjustments.

## 🌟 Key Features Implementation

### Smooth Scroll Animations
- Intersection Observer API for performance
- Custom `useInView` hook for reusability
- Staggered text animations

### Responsive Profile Animation
- Adaptive sizing based on screen size
- Smooth transitions between states
- Custom animation sequences

### Technology Ticker
- Infinite scrolling animation
- Directional control (left/right)
- Customizable styling and content

## 🔍 Performance Optimizations

- Lazy loading for images
- Optimized re-renders with custom hooks
- Efficient animation patterns
- Minimal bundle size with tree shaking

## 🎯 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section integration
- [ ] Contact form functionality
- [ ] Additional page transitions
- [ ] Performance metrics dashboard

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Teuku Sem**
- Email: semteuku02@gmail.com
- Portfolio: [Live Site](https://your-domain.com)

---

Built with ❤️ using React, TypeScript, and Framer Motion
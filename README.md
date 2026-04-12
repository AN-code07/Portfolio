# Allah Nawaz - Portfolio Website

A modern, responsive portfolio website built with React 19, Vite, and Tailwind CSS, showcasing full-stack development skills and projects.

## 🚀 Features

- **Modern Architecture**: Built with React 19 and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Navigation**: React Router DOM with layout-based routing
- **Interactive Elements**: Typing animations, smooth transitions, and hover effects
- **Project Showcase**: Dynamic project filtering and detailed presentations
- **Client Testimonials**: Swiper.js carousel for client reviews
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS 4.x
- **Routing**: React Router DOM 7.x
- **Icons**: React Icons, Lucide React
- **Animations**: Swiper.js for carousels
- **Build Tool**: Vite with SWC
- **Linting**: ESLint with React hooks plugin

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, Footer, Layout)
│   └── ui/              # Reusable UI components
├── pages/               # Route components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions and constants
├── assets/              # Static assets (images, etc.)
└── styles/              # Global styles
```

## 🏗️ Architecture Decisions

### Layout-Based Routing
- Implemented proper routing instead of rendering all components simultaneously
- Shared layout component for consistent navigation and footer
- Lazy loading for better performance

### Component Composition
- Avoided prop drilling with proper component structure
- Reusable UI components for consistency
- Custom hooks for shared logic

### Performance Optimizations
- Code splitting at route level
- Optimized images and assets
- Minimal bundle size with tree shaking

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/allawnawaz/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📱 Pages

- **Home**: Hero section with typing animation and introduction
- **About**: Skills, experience, and personal information
- **Projects**: Portfolio showcase with filtering capabilities
- **Services**: Service offerings and client testimonials
- **Contact**: Contact form and social media links

## 🎨 Design System

### Colors
- Primary: `#CBACF9` (Purple)
- Secondary: `#8A6CF4` (Light Purple)
- Background: `#04071D` (Dark Blue)
- Surface: `#0C0E23` (Dark Surface)
- Text: White/Gray variants

### Typography
- Font Family: System fonts for performance
- Responsive sizing with Tailwind utilities
- Proper contrast ratios for accessibility

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- ESLint configuration for React
- Consistent naming conventions
- Component-based architecture
- Functional components with hooks

## 📈 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🚀 Deployment

The project is optimized for deployment on:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Allah Nawaz - [contact@allawnawaz.com](mailto:contact@allawnawaz.com)

Project Link: [https://github.com/allawnawaz/portfolio](https://github.com/allawnawaz/portfolio)
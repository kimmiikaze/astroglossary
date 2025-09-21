# AstroGlossary 🌟

A comprehensive Astro + TypeScript application for astrology learners, featuring an interactive glossary, natal chart generation, and responsive design.

## Features

### 📚 Comprehensive Glossary
- **Categorized Terms**: Organized by Planets, Zodiac Signs, Houses, Aspects, and Techniques
- **Search Functionality**: Real-time search with relevance scoring
- **Cross-References**: Interactive links between related terms
- **Rich Content**: Etymology, examples, and detailed definitions
- **Deep Linking**: Direct links to specific glossary entries

### 🌟 Natal Chart Calculator
- **Birth Data Input**: Name, date, time, location, and timezone
- **Planetary Positions**: Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto
- **House System**: 12 astrological houses with cusps
- **Aspect Analysis**: Major aspects with orb calculations
- **Timezone Support**: Accurate timezone handling for global locations

### 🎨 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Accessible**: WCAG compliant with semantic HTML
- **Modern UI**: Clean, intuitive interface with Tailwind CSS
- **Dark/Light Themes**: Elegant color schemes

### ⚡ Performance & Development
- **Astro Framework**: Static site generation with islands architecture
- **TypeScript**: Strong typing throughout the application
- **Modular Components**: Reusable, maintainable code structure
- **Build Optimization**: Fast loading with lazy loading support

## Technology Stack

- **Framework**: Astro 4.x
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript rules
- **Testing**: Vitest (configured but tests to be added)

## Project Structure

```
src/
├── components/          # Reusable UI components
├── data/               # Glossary data and static content
├── layouts/            # Page layouts
├── pages/              # Route pages (index, glossary, charts)
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and helpers

public/                 # Static assets
├── favicon.svg         # Site icon
└── ...

config files:
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration  
├── tsconfig.json       # TypeScript configuration
├── .eslintrc.js        # ESLint configuration
└── package.json        # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kimmiikaze/astroglossary.git
cd astroglossary

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests (when implemented)
npm run test:coverage # Run tests with coverage
```

## Usage

### Glossary
1. Navigate to `/glossary`
2. Browse by category or use the search bar
3. Click on terms to view detailed definitions
4. Follow cross-reference links to explore related concepts

### Natal Charts  
1. Navigate to `/charts`
2. Fill in birth information:
   - Full name
   - Birth date
   - Birth time (24-hour format)
   - Birth location (City, State/Province, Country)
   - Timezone
3. Click "Generate Chart" to see:
   - Planetary positions by sign and house
   - House cusps
   - Major aspects with orb calculations

## Deployment

The application is configured for GitHub Pages deployment:

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

Configuration in `astro.config.mjs`:
- Site: `https://kimmiikaze.github.io`
- Base: `/astroglossary`

## Data Sources

### Glossary Content
Currently includes sample entries for:
- **Planets**: Sun, Moon
- **Signs**: Aries  
- **Houses**: First House
- **Aspects**: Conjunction
- **Techniques**: Natal Chart

The glossary is designed to be easily expandable with additional entries in `src/data/glossary.ts`.

### Chart Calculations
The current implementation uses sample data for demonstration. For production use, integrate with:
- Swiss Ephemeris library
- Astronomy calculation APIs
- Professional astrological software libraries

## Future Enhancements

### Planned Features
- [ ] Real astronomical calculations via Swiss Ephemeris
- [ ] Transit chart functionality
- [ ] Chart comparison tools
- [ ] Expanded glossary (500+ terms)
- [ ] User accounts and saved charts
- [ ] Chart interpretation AI
- [ ] Offline functionality with Service Workers
- [ ] Advanced search filters
- [ ] Export functionality (PDF, image)
- [ ] Multiple house systems support

### Technical Improvements
- [ ] Comprehensive test suite
- [ ] E2E testing with Playwright
- [ ] Performance monitoring
- [ ] SEO optimization
- [ ] Progressive Web App features
- [ ] Internationalization (i18n)
- [ ] Chart visualization with SVG/Canvas

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Astro team for the excellent framework
- Tailwind CSS for the utility-first styling approach
- The astrology community for domain knowledge and inspiration
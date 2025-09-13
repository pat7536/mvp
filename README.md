# Plan Book — 5-Day Cycle

A comprehensive lesson planning app designed for 5-day cycle schools, featuring local-first data storage and AI-powered lesson assistance.

## Features

### Core Planning
- **5-Day cycle lesson planner** with calendar views (day/week/month)
- **Subject management** with color coding and duration settings
- **Lesson creation** with full details (objectives, materials, differentiation, etc.)
- **Real-time autosave** - Never lose lesson drafts
- **Templates** - Save and reuse recurring lesson structures

### AI Integration
- **ChatGPT lesson drafting** - Full lesson generation with SCDSB curriculum alignment
- **AI shortcuts** for differentiation, learning centers, and assessment ideas
- **SCDSB Math Focus** - Automatically includes "First 20 Days of Math" priorities for Grade 1-2
- Contextual prompts using lesson subject, title, and objectives
- Ontario curriculum expectations and hands-on learning emphasis

### Data Management
- **Export/Import JSON** - Backup and restore all data
- **ICS calendar export** - Import lessons into calendar apps
- **localStorage persistence** - Works offline, data stays on device
- **Subject filtering** - Focus on specific subjects

### Professional Features
- **Print-optimized layouts** - Clean lesson plan printing
- **PWA capabilities** - Install as desktop/mobile app
- **Offline functionality** - Core features work without internet

## Local Development

```bash
# Using Vercel CLI (recommended)
vercel dev

# Or serve static file (AI features won't work)
python -m http.server 3000
```

Navigate to `http://localhost:3000` - API available at `/api/chat`

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Set environment variable: `OPENAI_API_KEY=your_key_here`
3. Deploy - the app automatically configures itself

### Other Platforms
- **Netlify**: Rename `api/chat.js` to `netlify/functions/chat.js`
- **Cloudflare**: Adapt function to Workers format
- Frontend always calls `/api/chat` regardless of platform

## File Structure
```
├── index.html          # Complete single-page application  
├── api/
│   └── chat.js         # OpenAI API proxy (keeps key secure)
├── README.md
└── .gitignore
```

## SCDSB Curriculum Integration

The AI features automatically incorporate **Simcoe County District School Board** "First 20 Days of Math" resources:

### Grade 1 Math Priorities
- Number sense to 20, counting patterns
- Simple addition/subtraction within 10  
- Comparing quantities, sorting/patterning
- Basic geometry (2D shapes)
- Measurement concepts (longer/shorter)

### Grade 2 Math Priorities  
- Number sense to 100, counting by 2s/5s/10s
- Addition/subtraction to 20, place value (tens/ones)
- Money concepts, 2D/3D shapes
- Measurement tools, simple data collection

When creating Math lessons, the AI automatically emphasizes:
- Hands-on learning with concrete manipulatives
- Visual representations and models
- Building conceptual understanding before procedural fluency
- Gradual progression from concrete to abstract thinking

## Technical Details
- **Single-file app** - All CSS/JS embedded in `index.html`
- **No build process** - Direct deployment of static files
- **Serverless API** - Secure OpenAI integration without exposing keys
- **Local storage** - All lesson data persists in browser
- **Mobile responsive** - Works on phones, tablets, desktops

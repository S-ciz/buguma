# BUGUMA NGO Website

A modern, responsive, and animated website for BUGUMA South Africa - an organization supporting refugees through empowerment, education, and community integration.

## 🌍 Features

✅ **Modern Stack**
- Next.js 14 with App Router
- TailwindCSS for styling
- Smooth animations and transitions
- Mobile-first responsive design

✅ **Key Pages**
- **Home** - Hero slider with animated sections, about, values, objectives, and impact stories
- **About** - Organization story, vision, mission, values, and team
- **Programs** - Detailed program cards with outcomes and activities
- **Donate** - Donation options with banking details and impact breakdown
- **Contact** - Contact form, information, and FAQ

✅ **Design Features**
- Full-screen hero background slider (auto-rotating)
- Smooth scroll animations and fade-in effects
- Parallax elements and transitions
- Responsive grid layouts
- Accessible color schemes
- Clean, modern typography
- Card hover effects

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the website

## 🏗️ Project Structure

```
buguma/
├── app/
│   ├── components/           # Reusable components
│   │   ├── Navbar.jsx       # Navigation
│   │   ├── Footer.jsx       # Footer
│   │   ├── HeroSlider.jsx   # Hero section with slider
│   │   └── ScrollObserver.jsx # Scroll animations
│   ├── about/               # About page
│   ├── programs/            # Programs page
│   ├── donate/              # Donate page
│   ├── contact/             # Contact page
│   ├── globals.css          # Global styles
│   └── layout.jsx           # Root layout
├── public/                  # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 🎨 Design System

### Colors
- **Primary**: Sky Blue (#0ea5e9)
- **Secondary**: Orange (#f59e0b)
- **Accent**: Warm tones
- **Background**: White & Light Gray

### Typography
- **Headings**: Bold, 2.5rem to 3.75rem
- **Body**: Regular, 1rem
- **Font**: System fonts (Apple, Google, etc.)

### Animations
- Fade-in on scroll
- Slide-up transitions
- Button hover effects
- Smooth color transitions

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Environment Variables
Create `.env.local` if needed for future integrations:
```
NEXT_PUBLIC_API_URL=your_api_url
```

### Images
Remote images are configured for:
- Pexels (images.pexels.com)
- Unsplash (images.unsplash.com)

## 🚀 Building for Production

```bash
npm run build
npm run start
```

## 📄 Pages Overview

### Home Page
- Auto-rotating hero slider with 4 images
- About section with vision/mission
- Core values grid (5 values)
- Core objectives grid (8 objectives)
- Impact stories carousel
- Call-to-action section

### About Page
- Detailed organizational story
- Vision and mission statements
- Our approach (3 core principles)
- Team composition
- Impact statistics
- Values deep dive
- Call-to-action

### Programs Page
- 6 detailed program cards
- Program highlights and outcomes
- Features section
- Participation steps
- Call-to-action

### Donate Page
- 4 donation level options
- Impact areas breakdown
- Banking details
- Monthly giving section
- FAQ

### Contact Page
- Contact information
- Social media links
- Functional contact form
- Response time info
- FAQ section

## 🎯 Key Components

### Navbar
- Fixed navigation with logo
- Mobile responsive menu
- Sticky effect on scroll

### Footer
- Company information
- Quick links
- Contact details
- Social icons

### Hero Slider
- Auto-rotating background images
- Text animations
- Call-to-action buttons
- Scroll indicator

### Scroll Animations
- Fade-in effects on scroll
- Intersection observer API
- Customizable delays

## 🌐 Banking Information (Hardcoded)

```
Account Name: BUGUMA SOUTH AFRICA
Bank: NEDBANK
Account Number: 1131209745
Account Type: CURRENT
Branch Code: 198765
SWIFT Code: NEDSZAJJ
```

## 📞 Contact Information (Hardcoded)

```
Email: bugumasouthafrica1@gmail.com
Phone: +27 81 375 6297
Address: 4 Wyndcliff Road, Lorentzville,
         Johannesburg 2094, South Africa
```

## 🔐 Security

- No sensitive data in code
- Contact form uses client-side validation
- No backend API calls (ready for future integration)

## 🎬 Customization

### Colors
Modify `tailwind.config.js` to change theme colors

### Content
Edit page files in `app/*/page.jsx`

### Images
Replace image URLs with your own Pexels/Unsplash links

### Copy
Update text content directly in component files

## 📈 Performance

- Optimized images from CDN
- CSS minification via TailwindCSS
- Fast page transitions
- Lazy loading ready

## ♿ Accessibility

- Semantic HTML
- ARIA labels on buttons
- Keyboard navigation support
- Sufficient color contrast
- Alt text on images

## 📝 License

© 2024 BUGUMA South Africa. All rights reserved.

---

Built with ❤️ for refugees and their futures.

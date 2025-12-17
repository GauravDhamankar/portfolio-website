# Portfolio Website

A modern, professional, and responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Performance Optimized**: Built with React best practices and optimization techniques
- **SEO Friendly**: Semantic HTML and proper structure

## 🛠️ Tech Stack

- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vite** - Build tool and development server

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd doctorapp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
doctorapp/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, role, and summary
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Modify experience description
   - Update statistics

3. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Update social media links

4. **Experience Section** (`src/components/Experience.jsx`):
   - Add or modify work experience entries

5. **Projects Section** (`src/components/Projects.jsx`):
   - Add or modify project details
   - Update project links

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js` under the `primary` color palette
- **Fonts**: Update font family in `tailwind.config.js` and `index.html`
- **Animations**: Adjust animation timings and effects in component files using Framer Motion

### Resume Download

To enable the resume download functionality:

1. Place your resume PDF in the `public` folder
2. Update the resume path in `src/components/Hero.jsx` (line with `/resume.pdf`)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Professional summary and statistics
3. **Skills**: Technical skills and technologies
4. **Experience**: Work history and achievements
5. **Projects**: Featured projects with details
6. **Contact**: Contact form and information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Notes

- The contact form currently shows an alert on submission. To integrate with a backend service, update the `handleSubmit` function in `src/components/Contact.jsx`
- Project demo and code links are placeholders - update them with actual URLs
- GitHub link is a placeholder - update with your actual GitHub profile

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Gaurav Dhamankar**
- Email: gauravdhamankar23@gmail.com
- LinkedIn: [Gaurav Dhamankar](https://www.linkedin.com/in/gaurav-dhamankar-swe/)
- Phone: +91-7558489634

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion


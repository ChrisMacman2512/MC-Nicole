# Deployment Guide - Nicole Adams Portfolio Website

## GitHub Repository Setup

Your repository is now ready at: **https://github.com/ChrisMacman2512/MC-Nicole.git**

## Manual GitHub Upload Steps

Since I cannot directly push to your GitHub repository, here are the steps to upload your code:

### Method 1: Using GitHub Web Interface

1. **Download Project Files**
   - In Replit, go to the file explorer
   - Select all project files and folders
   - Download as ZIP file

2. **Upload to GitHub**
   - Go to your repository: https://github.com/ChrisMacman2512/MC-Nicole
   - Click "uploading an existing file" 
   - Drag and drop the extracted project files
   - Commit the changes with message: "Initial commit - Nicole Adams portfolio website"

### Method 2: Using Git Commands (if you have git locally)

```bash
# Clone the empty repository
git clone https://github.com/ChrisMacman2512/MC-Nicole.git
cd MC-Nicole

# Copy all project files from Replit to this folder
# (You'll need to download and extract the Replit project)

# Add all files
git add .

# Commit
git commit -m "Initial commit - Nicole Adams professional portfolio"

# Push to GitHub
git push origin main
```

### Method 3: Using Replit Git Integration

1. In Replit, open the Shell (Console)
2. Run these commands:

```bash
# Initialize git if not already done
git init

# Add your repository as origin
git remote add origin https://github.com/ChrisMacman2512/MC-Nicole.git

# Add all files
git add .

# Commit
git commit -m "Initial commit - Nicole Adams professional portfolio"

# Push to GitHub (you'll need to authenticate)
git push -u origin main
```

## Environment Variables

Before deploying, make sure to set up these environment variables:

```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

## Deployment Options

### 1. Replit Deployments (Recommended)

Once your code is on GitHub:
1. In Replit, go to the Deploy tab
2. Connect your GitHub repository
3. Deploy directly from GitHub
4. Your app will be available at a `.replit.app` domain

### 2. Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to connect your GitHub repo
```

### 3. Railway Deployment

1. Go to Railway.app
2. Connect your GitHub account
3. Import the MC-Nicole repository
4. Railway will auto-deploy your app

### 4. Render Deployment  

1. Go to Render.com
2. Connect GitHub repository
3. Create a new Web Service
4. Configure build and start commands:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

## Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Development server
npm run dev
```

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All YouTube videos embed properly
- [ ] Contact form submits successfully  
- [ ] Gallery filtering works
- [ ] Mobile responsiveness verified
- [ ] All social media links work
- [ ] Performance optimized (images, loading speed)

## Custom Domain Setup

After deployment, you can configure a custom domain:

1. **Purchase domain** (e.g., nicoleadams.in, mcnicoleadams.com)
2. **Configure DNS** to point to your deployment platform
3. **Update deployment settings** to use custom domain
4. **Enable HTTPS** (usually automatic)

## Monitoring and Analytics

Consider adding:
- **Google Analytics** for visitor tracking
- **Google Search Console** for SEO monitoring
- **Contact form analytics** to track inquiries

## Maintenance

Regular updates needed:
- **Video content**: Add new YouTube videos to the portfolio
- **Client testimonials**: Update with new feedback
- **Gallery photos**: Add recent event photography
- **Contact information**: Keep all details current

---

Your Nicole Adams professional portfolio website is now ready for GitHub and deployment! The comprehensive README.md provides all the technical details for future developers or collaborators.
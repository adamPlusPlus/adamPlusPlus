# Deployment Instructions

## Adding to adamPlusPlus Repository

1. **Copy the resume-website folder contents** to your `adamPlusPlus/adamPlusPlus` repository
2. **Or create a new branch/folder** in the repository for the resume website

## Option 1: Deploy as Subdirectory in adamPlusPlus Repo

If you want the resume at `github.com/adamPlusPlus/adamPlusPlus/resume`:

1. Copy all files from `resume-website/` to a `resume/` folder in your repo
2. Update `vite.config.js` base path if needed:
```js
export default defineConfig({
  base: '/resume/',
  plugins: [react()],
})
```

## Option 2: Deploy as Separate Repository

Create a new repository `adamPlusPlus/resume` and deploy separately.

## Vercel Deployment

1. **Connect your GitHub account** to Vercel
2. **Import the repository** (adamPlusPlus/adamPlusPlus or new repo)
3. **Configure build settings:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy**

The site will be available at:
- `your-repo-name.vercel.app` (auto-generated)
- Or configure a custom domain

## Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Add your custom domain (e.g., `resume.adambacchus.com`)
3. Follow DNS configuration instructions

## Updating the Resume

Simply edit the content in `src/components/Resume.jsx` and push to GitHub. Vercel will automatically redeploy.


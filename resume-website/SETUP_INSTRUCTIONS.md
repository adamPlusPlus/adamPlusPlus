# Resume Website Setup Instructions

Since browser automation for multiple files is complex, here's the fastest way to deploy:

## Option 1: Use Git Locally (Recommended - 2 minutes)

1. **Clone your repository:**
```bash
git clone https://github.com/adamPlusPlus/adamPlusPlus.git
cd adamPlusPlus
```

2. **Copy the resume-website folder:**
```bash
# Copy the entire resume-website folder into the repo
cp -r /path/to/resume-website ./
# Or on Windows:
xcopy /E /I resume-website .
```

3. **Commit and push:**
```bash
git add resume-website/
git commit -m "Add resume website with PDF download"
git push origin main
```

4. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Import the adamPlusPlus/adamPlusPlus repository
   - Set root directory to `resume-website`
   - Deploy

## Option 2: Use GitHub Desktop or VS Code

1. Clone the repo in GitHub Desktop or VS Code
2. Copy the `resume-website` folder into the repo
3. Commit and push

## Option 3: Manual File Upload (Slower)

If you prefer to use the browser, you'll need to create each file individually through GitHub's web interface. This would take 15-20 minutes for all files.

## After Deployment

Once deployed to Vercel, your resume will be available at:
- `adamPlusPlus-adamPlusPlus.vercel.app` (or your custom domain)

Update your GitHub profile README to link to the resume website!


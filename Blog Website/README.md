# MyBlog - A Modern Blog Website

## Project Structure
```
Blog/
├── index.html              # Home page with featured articles
├── css/
│   └── style.css          # All styling
└── pages/
    ├── article-1.html     # "Getting Started with Web Development"
    ├── article-2.html     # "CSS Tips and Tricks"
    ├── article-3.html     # "Understanding Responsive Design"
    ├── about.html         # About page
    └── contact.html       # Contact page
```

## How to Use with Live Server

### Method 1: Right-Click on index.html
1. In VS Code, right-click on `index.html` in the file explorer
2. Select **"Open with Live Server"**
3. Your browser should open to `http://127.0.0.1:5500`

### Method 2: Using the Status Bar
1. Open the Blog folder in VS Code as your workspace
2. Click on **"Go Live"** button in the bottom-right corner
3. Your browser should open automatically

### Method 3: Using Command Palette
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Open with Live Server"
3. Press Enter

## If Live Server Still Shows Directory Listing

**This means Live Server is served from the wrong folder.** Try these steps:

1. **Close VS Code completely**
2. **Delete the `.vscode` folder** (if it exists)
3. **Open the Blog folder** via **File → Open Folder** and select `/home/lowkeyfar/CodeFiles/Blog`
4. **Wait for VS Code to reload** (you'll see a notification)
5. **Right-click on index.html** and select **"Open with Live Server"**

## Alternative: Use Python HTTP Server

If Live Server continues to have issues, you can use Python instead:

```bash
cd /home/lowkeyfar/CodeFiles/Blog
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

## Features

✅ Dark theme with blue accents  
✅ Fully responsive design  
✅ Smooth animations and hover effects  
✅ 3 sample blog articles  
✅ Contact form  
✅ About page  
✅ Beautiful typography and spacing  

## Navigation

- **Home** - Main blog listing
- **Blog** - Scroll to articles section
- **About** - Learn about the author
- **Contact** - Get in touch

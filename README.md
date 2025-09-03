# Lumi's Ab Launcher

Lumi's Ab Launcher is a stylish and simple web page designed to help you launch URLs and quickly access your favorite sites. It's built with a clean, modern aesthetic and is perfect for personal use or for navigating around network filters.

## ✨ Features

* **URL Launching:** Simply enter a URL and click "Launch Site" to open the page.
* **Quick Links Grid:** The page includes a grid of pre-configured buttons for instant, one-click access to a variety of sites.
* **Stealth Mode:** The launcher uses an `about:blank` iframe method. This technique can help bypass some network filters by masking the destination URL from the browser's history and network logs.
* **Modern Design:** The user interface features a clean, dark-themed design inspired by the Bikuist Hub aesthetic.

---

## 🚀 How to Use

The entire launcher is contained in a single HTML file, making it easy to use and deploy.

### **Method 1: Local Use**

1.  Save the code as a file named `index.html`.
2.  Open the `index.html` file in any web browser.

### **Method 2: Deployment (For School Networks)**

To make the launcher accessible on a restricted network, you'll need to host it on a service that isn't blocked. We recommend using a free hosting service like **Vercel** or **Netlify**.

1.  **Go to Netlify:** Visit the Netlify website and create a free account.
2.  **Drag and Drop:** On your Netlify dashboard, simply drag and drop your `index.html` file into the designated area.
3.  **Get Your URL:** Netlify will automatically deploy your site and provide a unique URL (e.g., `random-name.netlify.app`), which is often unblocked by school filters.

---

## ⚙️ Customization

You can easily personalize the launcher by editing the `index.html` file.

* **Change Quick Links:** To add, remove, or modify the quick links, simply edit the `<button>` tags within the `<div class="quick-links-grid">` section. Update the button text and the URL inside the `onclick` attribute.

    ```html
    <button class="quick-link-button" onclick="launchURL('[https://newsite.com/](https://newsite.com/)')">New Site Name</button>
    ```

* **Change Title:** The main title is "Lumi's ab launcher". You can change this by editing the `<h1>` tag.
* **Adjust Styling:** The visual design is controlled by **CSS variables** at the top of the `<style>` block. You can easily change colors to match your taste.

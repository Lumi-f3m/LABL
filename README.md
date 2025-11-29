# LABL

LABL is a stylish and simple web page designed to help you launch URLs and quickly access your favorite sites :D

## ✨ Features

* **URL Launching:** Simply enter a URL and click "Launch Site" to open the page. *NOT WORKING RN*
* **Quick Links Grid:** The page includes a grid of pre-configured buttons for instant, one-click access to a variety of sites.
* **Cloaked:** The launcher uses an `about:blank` iframe method. This helps the website be private from teachers snooping around looking at your screen through a blocker or something else...
* **new themes!!!** Coffee brown is still the original but will now be changed so you can customize between a couple of premade themes, choose one you may like!

---

## 🚀 How to Use

The entire launcher is contained in a single HTML file, making it easy to use and deploy.

### **Method 1: Local Use**

1.  Save the file named `main.html` or copy the code.
2.  Open the `main.html` file, or if you copy the code, paste it in a html preview site.

### **Method 2: Deployment (For School Networks)**

To make the launcher accessible on a restricted network, you'll need to host it on a service that isn't blocked. We recommend using a free hosting service like **Vercel** or **Netlify**.

1.  **Go to Netlify:** Visit the Netlify website and create a free account.
2.  **Drag and Drop:** On your Netlify dashboard, simply drag and drop your `main.html` file into the designated area.
3.  **Get Your URL:** Netlify will automatically deploy your site and provide a unique URL (e.g., `random-name.netlify.app`), which is often unblocked by school filters.

---

## ⚙️ Customization

You can easily personalize the launcher by editing the `main.html` file.

* **Change Quick Links:** To add, remove, or modify the quick links, simply edit the `<button>` tags within the `<div class="quick-links-grid">` section. Update the button text and the URL inside the `onclick` attribute.

    ```html
    <button class="quick-link-button" onclick="launchURL('[https://newsite.com/](https://newsite.com/)')">New Site Name</button>
    ```

* **Change Title:** The main title is "Lumi's ab launcher". You can change this by editing the `<h1>` tag.
* **Adjust Styling:** The visual design is controlled by **CSS variables** at the top of the `<style>` block. You can easily change colors to match your taste.

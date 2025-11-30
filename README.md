# LABL

LABL is a website that can be used to bypass your school's blocker (Now Bypassing Bypassi)
**BYOD COMING SOON 👀**

## ✨ Features

* **JavaScript Executor:**  A Simple JavaScript executor if you would like to control
* **Ab Launcher** The launcher uses an `about:blank` iframe method. This helps the website be private from teachers snooping around, looking at your screen through a blocker or something else..
* **new themes!!!** Dark mode is now the original. Now we will have many colors to choose from, choose one you may like!

---

## 🚀 Open Unblocked

The entire launcher is contained in a single HTML file, making it easy to use and deploy.

### **Method 1: Local Use**

1.  Download the whole file and put it in a folder (named anything)
2.  Open the index.html (and click the clever badge) or open the main.html file

### **Method 2: Deployment (For a website version)**

If Method one is blocked for you, you can use either **Vercel** or **Netlify**.

### Netlify
1.  **Go to Netlify:** Visit the Netlify website and create a free account.
2.  **Drag and Drop:** On your Netlify dashboard, simply drag and drop your files into the designated area.
3.  **Get Your URL:** Netlify will automatically deploy your site and provide a unique URL (e.g., `random-name.netlify.app`), which is often unblocked by school filters.

### Vercel
1. **Fork this Repository** Go to this GitHub repo and fork it to your account.
2. **Deploy** Sign In/Up and add a new GitHub repo and deploy.
3. **Get your URL** Get your url (e.g., `labl.vercel.app`)
---

## ⚙️ Customization

You can easily personalize the launcher by editing the `main.html` file.

* **Change Quick Links:** To add, remove, or modify the quick links, simply edit the `<button>` tags within the `<div class="quick-links-grid">` section. Update the button text and the URL inside the `onclick` attribute.

    ```html
    <button class="quick-link-button" onclick="launchURL('[https://newsite.com/](https://newsite.com/)')">New Site Name</button>
    ```

* **Change Title:** The main title is "Lumi's ab launcher". You can change this by editing the `<h1>` tag.
* **Adjust Styling:** The visual design is controlled by **CSS variables** at the top of the `<style>` block. You can easily change colors to match your taste.

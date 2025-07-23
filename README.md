# 404Thoughts - Just a Random Blog Web App

**404Thoughts** is a minimal, full-stack web blog platform built using **Node.js**, **Express**, and **EJS**. It focuses on a clean interface and straightforward blog publishing, similar to a personal developer journala lightweight, minimal UI.

---

## Features

- Compose and publish blogs through a simple interface
- Read all posts via clean routing with dynamic rendering
- Lightweight, server-side rendering using EJS templates
- Basic routing for static pages like home, about, and contact
- Clean, mobile-friendly design for ease of use

---

## Technologies Used

| Layer        | Technology         |
|--------------|--------------------|
| Backend      | Node.js, Express.js |
| Templating   | EJS (Embedded JS)  |
| Frontend     | HTML, CSS          |
| Runtime      | Node.js (v18+)     |

---

## File Structure

## File Structure

| File/Folder                  | Purpose                                                  |
|-----------------------------|----------------------------------------------------------|
| `index.js`                  | Entry point of the Node.js Express application           |
| `public/`                   | Static assets folder                                     |
| `public/main.css`           | Main stylesheet for styling                              |
| `public/poem.html`          | A sample static HTML page                                |
| `public/img_res.png`        | Image resource used in the app                           |
| `views/`                    | EJS templates folder                                     |
| `views/index.ejs`           | Template for displaying blog posts or homepage           |
| `views/create.ejs`          | Template for creating a new blog post                    |
| `views/partials/`           | Reusable EJS components                                  |
| `views/partials/header.ejs` | Header section partial                                   |
| `views/partials/footer.ejs` | Footer section partial                                   |
| `views/partials/edit.ejs`   | Template for editing an existing blog post               |


---

##  Setup Instructions

### 1. Clone the Repository
```
1.  git clone https://github.com/huntsky-12/404Thoughts.git
    cd 404Thoughts
2.  Install Dependencies
    npm install
3.  Run the Server
    Use `nodemon` (recommended for development):
    nodemon app.js
    Or run with plain Node:
    node app.js
```

---

##  Available Routes

| Route             | Purpose                  |
|------------------|--------------------------|
| `/`              | View all blog posts      |
| `/create`       | Add a new blog post      |
| `/posts/:id`     | View a single blog post  |
| `/delete`         | Delete a blog             |
| `/update`       | Update a blog           |

---

##  Possible Future Improvements

- Integrate a persistent database (MongoDB or PostgreSQL)
- Implement user authentication and session handling
- Add rich text editor for composing posts
- Enable tags/categories for filtering posts
- Enable commenting system under posts
- Deploy on a cloud platform (Render, Vercel, etc.)

---
##  License

This project is open-source under the [MIT License](LICENSE).

## Author

**HuntSky**  
📧 Email: [huntdev12@gmail.com](mailto:huntdev12@gmail.com)  

---


# Ramdev Vimal — Express Portfolio

This personal portfolio was developed for Assignment 2 of
INFR3120 Web and Scripting Programming.

The website uses Node.js, Express, and EJS. It reuses personal
content, media, and styling from Assignment 1, following the
instructor's clarification.

## Repository

https://github.com/ramdevvimal777/Portfolio-Assignment2

## Live Website

Not deployed yet. This section will be updated with the Render URL
after deployment.

## Technologies Used

- Node.js
- Express
- EJS
- Bootstrap
- Font Awesome
- CSS

## Website Pages

| Page | Route | Description |
| --- | --- | --- |
| Home | `/` | Welcome message and portfolio introduction |
| About Me | `/about` | Personal background, profile photo, and introduction video |
| Projects | `/projects` | Descriptions of my programming and database projects |
| Contact | `/contact` | Contact information and an email-client form |

## Running the Project Locally

Install Node.js and npm before running the project.

Open a terminal in the project folder and install the dependencies:

```bash
npm ci
```

Start the application:

```bash
npm start
```

Open the following address in a browser:

http://localhost:4206

The application uses the PORT environment variable when provided.
Otherwise, it uses port 4206.

Press Ctrl+C in the terminal to stop the server. When using
npm start, restart the server after changing server-side JavaScript.

I have also used nodemon as per the lecture for quickly updating the site with changes made during the development. 

## Project Structure

```text
Portfolio-Assignment-2/
├── app.js
├── bin/
│   └── www
├── routes/
│   └── index.js
├── views/
│   ├── header.ejs
│   ├── main_nav.ejs
│   ├── footer.ejs
│   ├── index.ejs
│   ├── about.ejs
│   ├── projects.ejs
│   ├── contact.ejs
│   └── error.ejs
├── public/
│   ├── stylesheets/
│   │   └── style.css
│   ├── images/
│   │   ├── photo.JPG
│   │   └── intro-poster.jpg
│   └── videos/
│       ├── Intro-video.mp4
│       └── Intro-video_1.ogv
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## How the Application Works

The app.js file configures Express, EJS, static assets,
and error handling.

The bin/www file creates the HTTP server and selects its port.

The routes/index.js file defines a route for each portfolio page.
Each route uses res.render() to render the corresponding EJS view
and provide its page title.

For example, the /about route renders about.ejs with the title
"About Me".

## Shared Templates

Each page uses EJS includes to reuse these files:

- header.ejs: document opening, page title, and stylesheet links.
- main_nav.ejs: Bootstrap navigation with active-page styling.
- footer.ejs: GitHub and LinkedIn links, Bootstrap JavaScript,
  and closing document tags.

This keeps the page structure consistent without repeating
the navigation and footer in every page.

## Styling and Assets

The website uses one custom stylesheet:
public/stylesheets/style.css.

The stylesheet controls colors, typography, content panels,
images, video, forms, and the footer.

Bootstrap provides navigation styling and collapsible-menu behavior.
Font Awesome provides navigation icons.

Both packages are installed through npm and served through
dedicated static routes in app.js.

Files inside public are available without including "public"
in the browser URL. For example, public/images/photo.JPG
is requested using /images/photo.JPG.

## Contact Form

The contact form uses a mailto action directed to:

ramdev.vimal@ontariotechu.net

It asks the browser or operating system to open the visitor's
configured email application.

Important limitations:

- It does not automatically open Gmail.
- An email application or webmail handler must be configured.
- The browser may ask the visitor to choose an application.
- Transferring form values into an email draft depends on the
  browser and email handler.
- The visitor must send the message from the email application.
- Express does not send emails or store form submissions.

If the form does not open a usable email draft, visitors can
compose an email manually using the displayed address.

The form uses browser-side validation for required fields
and email addresses. The telephone field does not enforce
a ten-digit number.

## Error Handling

Unmatched routes are forwarded to the error handler.

The error page uses the same shared templates as the other pages.
Technical stack details are displayed only outside production mode.

## Deployment

Deployment target: Render Web Service.

Configuration:

- Branch: main
- Runtime: Node
- Root directory: repository root
- Build command: npm ci
- Start command: npm start
- Environment variable: NODE_ENV=production

The server uses Render's supplied PORT environment variable.
No database is required for the current implementation.

## Testing Checklist

Complete these checks locally and after deployment:

- Open and refresh all four page routes.
- Check navigation links and active-page highlighting.
- Check the collapsed navigation menu.
- Check the profile photo, video poster, and video playback.
- Check Bootstrap styles and Font Awesome icons.
- Check GitHub and LinkedIn links.
- Check required form fields, email validation, and reset behavior.
- Check the contact form with a configured email handler.
- Visit an unknown URL and check the error page.

## Sources and Acknowledgments

- Course Web Project lecture example supplied by the instructor:
  reference for Express configuration, routing, EJS includes,
  Bootstrap navigation, and Font Awesome setup.

- My Assignment 1 portfolio:
  personal content, project descriptions, media, and styling
  reused according to the instructor's clarification.

- Express:
  https://expressjs.com/

- EJS:
  https://ejs.co/

- Bootstrap:
  https://getbootstrap.com/

- Font Awesome:
  https://fontawesome.com/

- Render:
  https://render.com/docs/deploy-node-express-app

## Author

Ramdev Vimal

Networking and IT Security

Ontario Tech University

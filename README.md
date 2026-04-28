# Morty Sorty: REST API Integration

A lightweight Node.js web application that interfaces with the public Rick and Morty API. This project was built to demonstrate proficiency in consuming external RESTful APIs, handling asynchronous server requests, and implementing server-side rendering (SSR) for dynamic user interfaces.

<img width="1854" height="480" alt="37a17ff5-7f50-49a5-9f01-5c27fbd82bb9" src="https://github.com/user-attachments/assets/412bfab8-f3cf-4b81-a60c-962984be3087" />

## Tech Stack
* **Backend:** Node.js, Express.js
* **Data Fetching:** Axios (HTTP client)
* **View Engine:** EJS (Embedded JavaScript templating)
* **Styling:** Vanilla CSS 

## Core Features
* **External API Integration:** Connects to `https://rickandmortyapi.com` to fetch live character data.
* **Asynchronous Routing:** Utilizes `async/await` and `try/catch` blocks in Express routes to handle external API latency and prevent server crashes on bad requests.
* **Dynamic Querying:** Users can filter the database via URL parameters by selecting specific character status (Alive/Dead/Unknown) and gender, or by performing a direct string search for character names.
* **Server-Side Logic:** The backend parses the JSON payload, calculates the total pool of matching characters, and randomly serves a single character profile to the frontend.

## How to Run Locally

1. Clone the repository and navigate into the project directory.
2. Install the required Node dependencies:
   ```bash
   npm install

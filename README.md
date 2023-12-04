# Article application - Flask and ReactJS

This is a simple CRUD (Create, Read, Update, Delete) application built using Flask for the backend and ReactJS for the frontend. The application allows users to manage articles, including adding new articles, updating existing ones, and deleting articles.

## Backend - Flask

### Prerequisites
- Python
- Flask
- Flask-SQLAlchemy
- Flask-Marshmallow
- Flask-CORS

### Installation
1. Clone the repository.
2. Install the required Python packages using the following command:


       pip install Flask Flask-SQLAlchemy Flask-Marshmallow Flask-CORS


3. Update the database URI in `app.py` to match your MySQL database configuration.
4. Run the Flask application:

       python app.py

### API Endpoints
- **GET /get:** Retrieve all articles.
- **GET /get/{id}/:** Retrieve details of a specific article.
- **POST /add:** Add a new article.
- **PUT /update/{id}/:** Update an existing article.
- **DELETE /delete/{id}/:** Delete an article.

## Frontend - ReactJS

### Prerequisites
- Node.js
- React

### Installation
1. Navigate to the frontend directory.
2. Install the required Node modules using the following command:
    
       npm install

3. Start the React development server:

       npm start


# Wii-Code

Wii-Code is a real-time collaborative platform designed for bootcamp students to work together on coding projects efficiently. The platform allows students to collaborate during classroom activities, share resources while enabling an enhanced learning experience through group collaboration.

Visit the live platform here: [Wii-Code Platform](https://wii-code.netlify.app/)


## Table of Contents
1. [User Story](#user-story)
2. [Key Features](#key-features)
   - [Real-Time Collaborative Code Editor](#1-real-time-collaborative-code-editor)
3. [How to Use](#how-to-use)
4. [Deployed Application](#deployed-application)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [Authors](#authors)
8. [License](#license)


## User Story

User Story
As a bootcamp student
I WANT to be able to collaborate on activities in real-time
SO THAT I can more easily work with my group members

## Key Features

### 1. Real-Time Collaborative Code Editor
- **Description**: A code editor that allows multiple students to write and edit code simultaneously. It includes syntax highlighting, real-time cursor tracking, and commenting features to facilitate communication.
- **Benefit**: Enables students to collaborate directly on code in real time, simulating pair programming or group coding sessions, enhancing teamwork and coding productivity.

### 2. Real-Time File Directory Structure and Rendering
- **Description**: A feature that displays a real-time file directory structure for each project, where students can view, create, or edit files collaboratively. The platform renders the changes instantly in the browser, allowing students to see updates and live previews of their projects as they work.
- **Benefit**: Students can navigate through project files easily and view live updates of their work in the browser, enhancing the real-time coding experience.

## How to Use Wii-Code

1. **Check out the project**: Visit the [Wii-Code Platform](https://wii-code.netlify.app/) to start collaborating on coding projects.

2. **Create an Account**:
   - Enter your **email address** and **password** on the sign-up page.
   - Click the **Sign Up** button to create your account.
   - You will be redirected to your **Profile Page** after successful account creation or logging in.

3. **Profile and Adding a Project**:
   - After logging in, you'll be taken to your **Profile Page**.
   - From here, you can **add a project** by entering a **project title**.
   - Once a project is created, you'll see the **project name**, a **code editor**, and a **file directory** for your project.

4. **Working on Your Project**:
   - There are buttons to **add a new file** or **upload a file** to your project.
   - In the editor, you can also see the **In-Room Users** list, which shows who is currently in the editor room collaborating with you.

5. **Additional Features**:
   - **Render Code**: Click this button to preview your code live in a browser.
   - **Copy URL**: Use this button to **copy the URL** to your clipboard, so you can easily share the project link with others.
   - **Log Out**: When you're done, you can click the **Log Out** button to end your session.

## Deployed Application
Visit the live platform here: [Wii-Code Platform](https://wii-code.netlify.app/)

## Technologies Used
- **Front-End**: HTML, CSS, JavaScript, React, FontAwesome, React-Bootstrap, yjs, y-codemirror, randomcolor, axios, Vite
- **Back-End**: Node.js, Express
- **Database**: Postgres 
- **Version Control**: Git, GitHub
- **Real-Time Collaboration**: y-webrtc, y-websocket

- **client/**: Contains all the front-end React components, pages, and styles.
- **server/**: Includes back-end logic, such as controllers, models, and routes for handling API requests and database interaction.
- **config/**: Holds configuration files, including environment variables and database connection details.

## Contributing
Contributions are welcome! Please create a pull request with a detailed explanation of the changes you propose.

## Authors
This project was created by the following developers:
- Anamaris Ortiz
- Po Shin Huang
- Joey Mankovich
- Daniel Demoney

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

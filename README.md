# Guides step for compiling project

## Introduction

This repository contains code for a sample application that interacts with an API to fetch github user data. The application is written in TypeScript and following libraries:

- @mui/material: This is the Material-UI library for React, which provides a set of customizable and responsive UI components to build modern and beautiful user interfaces.

- axios: This is a popular JavaScript library used for making HTTP requests from the browser or Node.js.

# Prerequisites

This README.md file will provide you with step-by-step and detailed instructions to compile and run the code successfully. <br>
- Please make sure you have <b>Node.js (>= 12.x)</b> and <b>npm</b> (Node Package Manager) installed on your machine before proceeding.<br>
- If you don't have, you can download and install them from the official Node.js website (https://nodejs.org). <br>

## Step 1: Clone the Repository

To get started, you need to clone our code repository to your local machine. Open the terminal (Linux) or Command Prompt (Windows) and run the following command:

```bash
git clone <your_repository_url>
```

## Step 2: Navigate to project directory 

Change your working directory to the project folder by running the following command: 

```bash
cd <your_repository_url>
```

Replace <your_repository_url> with the name of the folder where you cloned the repository.

## Step 3: Creating a .env File

The .env file is used to store environment variables for your application. These variables can include sensitive information such as API keys It allows you to manage different configurations easily without modifying your code.

Follow these steps to create a .env file:

1. Navigate to project directory 
Open your terminal or command prompt and navigate to the root directory of your project where you want to create the .env file.
2. Create the .env File
you can use the following command:

On Linux or macOS:

```bash
touch .env
```

On Windows (using Command Prompt):

```bash
echo > .env
```

3. Add Environment Variables

Open the .env file with your text editor. Each line in the file should define a separate environment variable in the following format:

```bash
REACT_APP_API_HOST=https://api.github.com
```

Copy and Save the changes to the .env file after adding all the necessary environment 
variables.

## Step 4: Install dependency

Before running the code, you need install dependencies, execute the following command: 

```bash
npm install
```

This command will read the 'package.json' file and install all the required dependencies.

## Step 5: Build the application

To compile reactJs code into a bundle, use the following command:

```bash
npm run build 
```

This command will create a `build` folder that content compiled files.

## Step 6: Serve the application 

You can serve the application using a local development server . Run the following command:

```bash
npm start  
```

This will start development server and you should see an output in the running locally.

## Step 7: Access the application 

You can access the application in your web browser by navigation to: 

```bash
http://localhost:3000/
```

## DONE!

Follow steps above You have successfully compiled your reactJs application on your Linux or Windows machine.








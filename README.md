# Invoice Generator Frontend

Welcome to the Invoice Generator frontend repository! This directory contains the code for the React-based frontend of our MERN stack Invoice Generator application.

## Project Overview

The Invoice Generator is a web application designed to simplify the process of creating and managing invoices. It leverages the power of the MERN stack (MongoDB, Express.js, React, Node.js) to provide users with a seamless and user-friendly experience.

## Features

- **User Authentication:**

  - Secure user registration and login using JWT tokens.

- **Product Management:**

  - Add and manage product details, including name, quantity, rate, total, and GST.
  - Support for adding multiple products.

- **PDF Generation:**
  - Generate professional PDF invoices that adhere to a predefined format.
  - Invoices include user details, product information, and the date.

## Project Structure

- **src/:** Contains the source code for the React application.
- **public/:** Static assets and HTML template.

## Getting Started

To run the frontend locally, follow these steps:

```bash
git clone https://github.com/swarajsaxena/levitation-assignment
cd frontend-directory
npm install
npm run dev
```

## Backend Integration

The frontend communicates with the backend for various functionalities such as user authentication, product management, and PDF generation. Ensure that the backend server is up and running. You can find the backend repository and setup instructions here.

Backend Link: [Backend](https://github.com/swarajsaxena/levitation-backend)

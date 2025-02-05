# PHRealState - Real State Platform

The **PHRealState - Real Estate Platform** is an online marketplace built using the MERN stack, designed to connect buyers and sellers of real estate properties. It provides a seamless and user-friendly experience for property browsing, listing, and management.

# Purpose

The platform aims to simplify real estate transactions by offering tailored features for three distinct user roles:

- Users: Browse, wishlist, review, and purchase properties effortlessly.
- Agents: Add and manage property listings, track sold and requested properties.
- Admins: Oversee platform operations by managing properties, users, and reviews to ensure a secure and efficient environment.
  By combining intuitive features with robust management tools, the platform ensures a streamlined and transparent real estate process for all stakeholders.

# Features

### General Features

- **Responsive Design**: A user-friendly interface optimized for both desktop and mobile devices.
- **Secure Authentication**: User login and registration with role-based access control (User, Agent, Admin).
- **Property Search**: Advanced filters to search properties by location, price range, property type, and more.

### User Features

- **Property Wishlist**: Save favorite properties for easy access later.
- **Property Purchase**: Seamlessly purchase properties with secure payment integration.
- **Reviews and Ratings**: Provide feedback and ratings for properties.
- **Personal Dashboard**: Manage wishlists, purchases, and reviews.

### Agent Features

- **Add Property Listings**: Upload new properties with details, images, and pricing.
- **Track Properties**: View and manage requested and sold properties.
- **Performance Insights**: Access data on sales and customer interactions.

### Admin Features

- **User Management**: Add, remove, or update user accounts and roles.
- **Property Management**: Approve, update, or remove property listings.
- **Review Moderation**: Monitor and manage user reviews and ratings.
- **Platform Analytics**: Gain insights into platform performance and user activity.

# Technology Stack

- **Frontend**: React (with DaisyUI and Tailwind CSS for styling).
- **Backend**: NodeJs (for managing data and APIs).
- **Database**: MongoDB (for storing user queries, recommendations, and comments).
- **Deployment**: Vite (for a fast development environment and production build).
- **State Management**: Context API (for managing application state).

### Future Enhancements (Extra Features Idea)

- **Real-Time Chat**: Enable direct communication between users and agents.
- **Push Notifications**: Notify users about new listings and updates.
- **Machine Learning Recommendations**: Provide personalized property recommendations based on user behavior.

# npm Packages

### dependencies

- "@stripe/react-stripe-js": "^3.1.1",
- "@stripe/stripe-js": "^5.5.0",
- "@tanstack/react-query": "^5.64.1",
- "axios": "^1.7.9",
- "firebase": "^11.1.0",
- "localforage": "^1.10.0",
- "match-sorter": "^8.0.0",
- "react": "^18.3.1",
- "react-dom": "^18.3.1",
- "react-helmet-async": "^2.0.5",
- "react-hook-form": "^7.54.2",
- "react-icons": "^5.4.0",
- "react-router-dom": "^7.1.1",
- "react-simple-captcha": "^9.3.1",
- "react-tabs": "^6.1.0",
- "react-toastify": "^11.0.3",
- "sort-by": "^1.2.0",
- "sweetalert2": "^11.15.10",
- "swiper": "^11.2.1"

### devDependencies

- "@eslint/js": "^9.17.0",
- "@types/react": "^18.3.18",
- "@types/react-dom": "^18.3.5",
- "@vitejs/plugin-react": "^4.3.4",
- "autoprefixer": "^10.4.20",
- "daisyui": "^4.12.23",
- "eslint": "^9.17.0",
- "eslint-plugin-react": "^7.37.2",
- "eslint-plugin-react-hooks": "^5.0.0",
- "eslint-plugin-react-refresh": "^0.4.16",
- "globals": "^15.14.0",
- "postcss": "^8.5.1",
- "tailwindcss": "^3.4.17",
- "vite": "^6.0.5"-

## Instructions for Running the Project Locally

### Frontend

1. **Install the dependencies:**

- `npm install`

2. **Create/Replace .env.local (Rename .env.example to .env.local ):**

- Add your Credentials Here !

3. **Start the development server:**

- `npm run dev`

4. **Server Side :**

- Here is the server-side repository along with setup instructions for local deployment: https://github.com/shahriarabiddut/Real-State-Buy-Sell-Platform-Server

5. **Access the application:**

- Open your browser and navigate to `http://localhost:5173`.

# Credentials To Test

- Admin email: admin@gmail.com
- Admin password: admin@gmail.comA1
- Agent email: agentph@gmail.com
- Agent password: agentph@gmail.comA1
- Live Site Link: https://phrealstate.web.app

-`If the credentials do not work properly, please contact me via email or WhatsApp so I can address the issue.`

# Support

For any issues or questions, please contact the development team or open an issue on the repository.

# ScreenShot

![Application Screenshot](/screenshot.png)

# One Tower

## Demos

- Live Client Site Link: [https://one1-tower.web.app](https://one1-tower.web.app)

- Live Server Site Link: [https://one-tower.vercel.app](https://one-tower.vercel.app)

- Run the project on your Local machine

  - Clone: `git clone https://github.com/maasajal/one-tower-client.git`
  - Change Directory: `cd one-tower-client`
  - Install packages: `npm i` or `npm install`
  - create a .env.local file and add firebase config code. <checked at end>
  - Run: `npm run dev`

### [One Tower Server side Repo Link](https://github.com/maasajal/one-tower-server)

## About the project

The One Tower project is a comprehensive Building Management System (BMS) designed to streamline the management and operations of a single building. This dynamic web application caters to both residents and administrators, providing essential functionalities such as apartment details, rent payments, maintenance requests, and resident profiles.

### Key Features:

- User Authentication: Secure login and profile management for residents and administrators.
- Apartment Listings: Detailed information about available apartments, including images, floor plans, and rent prices.
- Rent Payment System: Integrated payment gateway for seamless rent transactions, with coupon code discounts.
- Admin Dashboard: Robust admin panel for managing apartment listings, viewing payment history, and handling maintenance requests.
- Notifications: Real-time notifications for important updates and reminders.

### Technical Highlights:

- Responsive Design: Optimized for both desktop and mobile devices.
- Modern Technologies: Built with React, and a Node.js backend.
- Secure Payments: Integrated with Stripe for secure and efficient payment processing.
- Data Management: Efficient handling of user data and apartment information with a robust database.

One Tower aims to enhance the living experience for residents while providing building administrators with powerful tools to manage their operations effectively.

### Other Features and Packages used in this project

- Swiper Slider
- Sweet Alert Toaster
- React Hook Form
- User register using Firebase auth
- User login using email and password
- Login with Google
- Login with GitHub
- Mongodb database
- Node.js server
- Methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
- Rent request for login user
- Payment option for member user
- JsonWebToken (jwt)
- Stripe payment
- Tanstack query
- React hook form

## Admin role

- User Name: `one@tower.com`
- Password: `one$1Tower`

### Color code

- `#3d5cab`
- `#e87726`
- `#d58c59`
- `#c3a18c`
- `#b1b6c0`

```
  VITE_APIKEY=
  VITE_AUTHDOMAIN=
  VITE_PROJECTID=
  VITE_STORAGEBUCKET=
  VITE_MESSAGINGSENDERID=
  VITE_APPID=

  VITE_LOCAL_SERVER=http://localhost:7000 or
  VITE_SERVER=https://one-tower.vercel.app
  VITE_PAYMENT_PK=
```

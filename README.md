# Shopping-web

## Purpose

My purpose is to study from this the basic concept of building a full functional website that can work with users and to think what tools to choose when building (avoid refractoring later). It's a foundation for my learning and future [big project](https://www.behance.net/gallery/134056463/EventGo-Web-Service)

## Features

- Log-in, out using Google Auth (used Firebase)
- Buy item and payments (used Stripe)
- Have pleasant fall back of a broken watch
- Used lazy load for performance
- Flexible for phone user as well (but not optimal yet)
- Use Firestore to have information of the items in shop
- Have basic token management by user authentication (but when user sign out and sign in again, it refresh)
- Used Redux for scalability.
- Deployed on Heroku.

## How to use

- Clone the project using `git clone https://github.com/An-Nguyen-02/Shopping-web.git`
- Then remove the origin by `git remote remove origin`
- Then set a `.env` file in the root directory and add in the **STRIPE_SECRET_KEY** which link to your stripe account.
- Then run `npm install` to have all the packages
- Then run `npm start`. Enjoy :smiley: .

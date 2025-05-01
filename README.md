# Comms Dashboard Frontend

A Next.js 13 app that displays a welcome page with a title, message and price for the user's next delivery, a free gift badge (if applicable), an image of one of my cats (Luna), and 2 inactive buttons.

Styled with Tailwind CSS and tested with Jest and React Testing Library.

## Getting Started

git clone https://github.com/hollyskinner97/HS-frontend-test
cd comms-dashboard-frontend
npm install
npm run dev

If the backend is running at localhost:3000, the frontend will likely run at lcoalhost:3001
The welcome page can be found at "http://localhost:3001/welcome/:userId"

## API / Backend connection

This front end app connects to the backend which can be found at: https://github.com/hollyskinner97/HS-backend-test
The API url is referenced in the services/api.tsx file as: "http://localhost:3000/comms/your-next-delivery"

## Testing

npm test
npm run test:watch

## Thank you for taking the time to review my work!

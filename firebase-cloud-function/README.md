# Firebase Cloud Function - Random Snow White Character

This project is a Firebase Cloud Function that acts as an HTTP server, returning dynamically generated content. Each response contains the name of a Snow White character, chosen at random.

## Project Structure

```
firebase-cloud-function
├── functions
│   ├── src
│   │   ├── index.ts          # Entry point for the Firebase cloud function
│   │   └── utils
│   │       └── randomCharacter.ts # Utility to get a random character
│   ├── package.json          # NPM configuration file
│   ├── tsconfig.json         # TypeScript configuration file
│   └── .eslintrc.json        # ESLint configuration file
├── firebase.json             # Firebase configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd firebase-cloud-function
   ```

2. **Install dependencies:**
   Navigate to the `functions` directory and run:
   ```
   npm install
   ```

3. **Deploy the function:**
   Make sure you have the Firebase CLI installed and initialized. Then deploy the function using:
   ```
   firebase deploy --only functions
   ```

## Usage

Once deployed, you can access the function via the provided URL. Each request to the endpoint will return the name of a randomly selected Snow White character.

## License

This project is licensed under the MIT License.
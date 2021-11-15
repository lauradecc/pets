# Petsbook

### Description

**Petsbook** is a single page application (SPA) to gather all the information of your pet (history, vaccines, treatments...) and in urgent cases to be able to ask questions about symptoms and obtain recommendations from professionals.

### Server Install

```sh
npm install
```

### Server Usage

```sh
npm run dev
```

### Server .env variables needed

- PORT=5005
- ORIGIN=http://localhost:3000
- DB_REMOTE
- SESS_SECRET

### Client Install

```sh
npm install
```

### Client Usage

```sh
npm run start
```

### Client .env variables needed

- REACT_APP_API_URL=http://localhost:5005/api
- REACT_APP_PHONE_NUMBER_WHATSAPP (Prefix + Number - e.g. for Spain: 34XXXXXXXXX)

### Technologies

- React
- Express
- MongoDB
- Node
- Javascript (ES6)
- HTML & CSS

### Additional info

This project has been created by Elvira Romero (UX/UI designer), Alberto Massa and Laura de Cos (web developers) for a social entrepreneurship Hackathon focused on the field of human and animal health organised by Boehringer Ingelheim. Given a problem to solve, there were 48 hours available to design and prototype a digital solution. 

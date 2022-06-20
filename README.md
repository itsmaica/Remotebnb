# Remotebnb

Remotebnb is a soft clone of Airbnb. With recent events, many people have found themselves working remotely. Remotebnb wants to provide service where remote workers can find cool new places to work. 

Check out [Remotebnb](https://remotebnb.herokuapp.com/)

## Index

[MVP Feature List](https://github.com/itsmaica/Remotebnb/wiki/Feature-List) |
[Database Scheme](https://github.com/itsmaica/Remotebnb/wiki/Database-Schema) |
[User Stories](https://github.com/itsmaica/Remotebnb/wiki/User-Stories) |
[Wire Frames](https://github.com/itsmaica/Remotebnb/wiki/Wire-Frames) |

## Technologies Used

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /><img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />

## Splash Page
![splash](https://user-images.githubusercontent.com/66566925/174560214-c0601b18-8cbe-4ce4-895c-8bf8b196eeb5.gif)

## Getting started
1. Clone this repository:

   `
   https://github.com/itsmaica/Remotebnb.git
   `
2. Install denpendencies into the Backed and the Frontend by making a terminal for each one and then run the following:

   * `npm install`

3. Create a **.env** file using the **.envexample** provided 

4. Set up your database with information from your .env and then run the following to create your database, migrate, and seed: 
 
   * `npx dotenv sequelize db:create`
   * `npx dotenv sequelize db:migrate` 
   * `npx dotenv sequelize db:seed:all`

5. Start the app for both backend and frontend using:

   * `npm start`

6. Now you can use the Demo User or Create an account

## Amazon Web Services S3
* For setting up your AWS refer to this [guide](https://github.com/jdrichardsappacad/aws-s3-pern-demo)

***

# Features 

## Spots
* Users can create a Spot
* Users can read/view other Spot
* Users can update their Spot
* Users can delete their Spot

## Reviews
* Users can create Reviews on Spots
* users can read/view all of the Reviews on a Spot
* Users can delete their Review(s) on a Spot

## Future Features
### Bookings
Logged-in Users can
* Create a booking at a spot
* Update their booking at a spot
* Read all of their bookings
* Delete/Cancel their booking

# Deploy to Heroku 

1. Create a new application in your Heroku account 

2. Inside *Resources* add on "Heroku Postgres"

3. Install Heroku CLI

4. Log into Heroku on your terminal

6 Add Heroku as a remote to your project's git repository with the following command and replace with the name of the application you created in the Heroku dashboard.

   * `heroku git:remote -a <name-of-Heroku-app>`

7. Update the "Reveal Config Vars" section

8. Push to Heroku with: 

   `git push heroku main`
   
9. Set up prodction database 

   * `heroku run npm run sequelize db:migrate` 
   * `heroku run npm run sequelize db:seed:all`




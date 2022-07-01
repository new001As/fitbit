# FitBit

## Setup
```ruby
frontend
cd client
npm i 
npm start
This will run your react app at localhost:3000


backend
cd server
npm i
node index.js
for dev mode you can use
nodemon index.js
this will run your server at locahost:5000
```

## Deploying frontend

```ruby
npm run build
this will create an optimised build folder
Add _redirects to public folder
point to index.html
npm install netlify-cli -g
netlify deploy
select the build folder to deploy
netlify deploy --prod
```
Detailed information can be viewed [here](https://create-react-app.dev/docs/deployment/)


## deploying backend 

create an app on heroku and follow the given instructions


```
cd server
git add .
git commit -m "Adding Heroku."
heroku login
heroku create
git push heroku main
now create a procfile in server as
web: node index.js

```

## :camera_flash: ScreenShots   
| 1 | 2|
|------|-------|
|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image1.png" width="400"/>|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image2.png" width="400"/>|


| 3 | 4|
|------|-------|
|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image3.png" width="400"/>|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image4.png" width="400"/>|

| 5 | 6 |
|------|-------|
|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image5.png" width="400"/>|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image6.png" width="400"/>|

| 7 | 8 |
|------|-------|
|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image9.png" width="400"/>|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image8.png" width="400"/>|

| 9 | 10 |
|------|-------|
|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image7.png" width="400"/>|<img src="https://raw.githubusercontent.com/vibhubhatia007/FitBit/main/readme-assets/image10.png" width="400"/>|

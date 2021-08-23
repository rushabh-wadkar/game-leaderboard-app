# Games Leaderboard Application

This application was developed using React, React-Redux, Node with MongoDB as backend in 6 hours.

Deployed on [Heroku](https://games-leaderboard-test.herokuapp.com/)

## Features
- Realtime leaderboard
- **No custom libraries for table sort/filter/fetching** were used in developing this project or its components.
- Rest API based backend architecture (Endpoints at /api/leaderboard)
- Dumping/Importing [provided json](https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopSellingGamesbb1c49e.json) into mongo directly by hitting endpoint `/api/leaderboard/import` (this imports the json from aws and dumps into mongo collection)
- Editable cells (User can click on any cells to edit, on clicking outside would result in value persistence to db)
- Sorting - Each Column can be sorted by ascending/descending (Click on the header column)
- Pagination - (User can click through next & previous to go back and forth)
- Deployment of build on Free-tier hosting provider ([Heroku](https://games-leaderboard-test.herokuapp.com/))

## Installation

Use the node package manager [npm](https://nodejs.org/en/) to install and run.

```bash
cd build
npm install
```

Make sure to include a `.env` file inside build folder with following parameters -
```
PORT=4000
MONGO_USERNAME=username
MONGO_PASSWORD=password
MONGO_DB=db_name
MONGO_CLUSTER_URL=cluster.98gcc.mongodb.net
```

- Above mongo credentials can be found on mongo atlas

Now, once db and build is ready, run the application and proceed to http://localhost:4000/api/leaderboard/import. This step is necessary if you want to dump [this json present on aws](https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopSellingGamesbb1c49e.json) to your mongo db collection named `leaderboard`

## Run

```bash
cd build
npm run start
```
Application would run at http://localhost:4000 (port may vary depending on your configuration)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contact
[Linkedin](https://www.linkedin.com/in/rushabh-wadkar/)

## License
[MIT](https://choosealicense.com/licenses/mit/)

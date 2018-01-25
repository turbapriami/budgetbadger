# budgeteer

Setup:

1. npm install
2. If db not created
  - psql postgres
  - Create database bbadger
  - \c bbadger
  - \du (see db user and set as DB_USER in .env)
3. If .env not in root folder
  - rename .sample-env and fill in variable names
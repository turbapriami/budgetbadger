# budgeteer

Setup:

1. npm install
2. If db not created
  - psql postgres
  - create database bbadger
  - \c bbadger
3. If .env not in root folder
  - rename .sample-env and fill in variable names




Querying GraphQL: 
  1. Open localhost:1337/graphiql
  2. Create user: 
    - Paste the below into the ui:
    mutation {
      createUser(email:"xyz@email.com", password: "xyz")
    }
  3. Authenticate user:
    - Paste the below into the ui:
    mutation {
      loginUser(email:"xyz@email.com", password: "xyz")
    }
  4. Get user information (requires JWT): 
    - Paste the below into the ui:
    query {
      getUser(email:"xyz@email.com")
    }
  5. Get user by transaction:
    -Paste the below into ui:
    {
      getTransactions(userid:1) {
        amount,
        category,
          user {
          id
          }
      }
    }
  6. Get transactions by user:
    - Paste the below into the ui:
    {
      getUser(email:"gustaf.brostedt@gmail.com", id: 1) {
        id,
        email,
        transactions {
          id,
          category,
          amount
        }
      }
    }

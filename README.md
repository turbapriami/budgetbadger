# Budget Badger

> Budgeting, loan management, and bill tracking for graduates with student loans.

## Team

  - __Product Owner__: [Gustaf](https://github.com/GustafB)
  - __Scrum Master__: [Andrew](https://github.com/andrewblgithub)
  - __Development Team Members__: [Logan](https://github.com/loganmcbride), [Jimmy](https://github.com/jkang1220), [Alex](https://github.com/afriedman1991)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Roadmap](#roadmap)
    1. [GraphQL Queries](#graphql-queries)
1. [Team](#team)
1. [Contributing](#contributing)
1. [Style Guide](#style-guide)

## Usage

> Some usage instructions

## Requirements

- Node 9.4.x
- Postgresql 10.1.x

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

If database not created:

```sh
psql postgres
Create database bbadger
\c bbadger
\du
```

If .env file not created:

```sh
mv .sample-env .env
```
*Fill in environmental variables*

### Roadmap

View the project roadmap [here](https://github.com/turbapriami/budgetbadger/issues) or [here](https://waffle.io/turbapriami/budgetbadger)

### GraphQL Queries

```sh
npm start
```
Go to [localhost:1337/graphiql](http://localhost:1337/graphiql)

Create user:
```sh
mutation {
  createUser(email:"xyz@email.com", password: "xyz")
}
```

Authenticate user:
```sh
mutation {
  loginUser(email:"xyz@email.com", password: "xyz")
}
```

Get user information (requires JWT):
```sh
query {
  getUser(email:"xyz@email.com")
}
```

Get user by transaction:
```sh
{
  getTransactions(userid:1) {
    amount,
    category,
      user {
      id
      }
  }
}
```

Get transactions by user:
```sh
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
```

Example for Data Prep Queries:
```sh

Adding Categories:
  mutation {
    createCategory(name: "food") {
      id
    }
  }

Adding Transactions: 
  mutation {
    createTransaction(user_id: 1, amount: 91, category_id: "1", name: "Zuckers", street: "60145 Chesterfied Rd", zip_code: "24060", state: "Virginia", account_id: "12345") 
    {
      id
    }
  }

Adding Bill Category:
  mutation {
    createBillCategory(name: "Entertainment") {
      id
    }
  }

Deleting Bill Category:
  mutation {
    deleteBillCategory(id:1)
  }

Creating a Bill:
  mutation {
    createBill(user_id: 1, bill_category_id: 1,description: "NBA LEAGUE PASS", amount: 108.9, due_date: "02/04/2018", paid: true, paid_date:"01/27/2018", alert: false) {
      id
    }
  }

Get a Users Bills with Bill category Description
  query {
    getBills(user_id: 1) {
      id
      user_id
      bill_category_id
      description
      amount
      due_date
      paid
      paid_date
      alert
    }
  }

Get a Users Bill Categories
  query {
    getBillCategories(user_id: 1) {
      name
    }
  }
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Style Guide

See [STYLE-GUIDE.md](STYLE-GUIDE.md) for the style guide.
# Customer Filter

![CircleCI](https://img.shields.io/circleci/project/github/sheldonled/customer-filter.svg)
![DUB](https://img.shields.io/dub/l/vibe-d.svg)
[![CircleCI](https://circleci.com/gh/sheldonled/customer-filter.svg?style=svg)](https://circleci.com/gh/sheldonled/customer-filter)

The idea of this application is to use [Great-circle distance or orthodromic distance](https://en.wikipedia.org/wiki/Great-circle_distance) algorithm to filter, in a list of customers, all customers within a given distance, from a reference point.

The data consists in a [text file](api/data/customers.txt), formatted with one customer per line, in a JSON structure, like this:

```json
  {"latitude": "53.0033946", "user_id": 39, "name": "Lisa Ahearn", "longitude": "-6.3877505"}
```

## Live Demo

- Go to: [https://customer-filter.herokuapp.com/](https://customer-filter.herokuapp.com/)

## How to build and Run this test

### With Docker

- build the image from the Dockerfile: `docker build -t sheldonled/customer-filter .`
- run the image: `docker run --name customer_filter -d -p 3000:3000 sheldonled/customer-filter`
- Go To: [localhost:3000/](localhost:3000/)

### With npm

- run: `npm install`
- run: `npm run build`
- run: `npm start`
- Go To: [localhost:3000/](localhost:3000/)
# Customer Filter

The idea of this application is to use [Great-circle distance or orthodromic distance](https://en.wikipedia.org/wiki/Great-circle_distance) algorithm to filter, in a list of customers, all customers within a given distance, from a reference point.

The data consists in a [text file](api/data/customers.txt), formatted with one customer per line, in a JSON structure, like this:

```json
  {"latitude": "53.0033946", "user_id": 39, "name": "Lisa Ahearn", "longitude": "-6.3877505"}
```
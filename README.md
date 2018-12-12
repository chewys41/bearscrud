What to do what to do - Pooh Bear
Are we trying to make another table
Update
-Grab data
--Similar to Get
-Change it
--Find the id of one we are changing
--Modify that one
--Return the new list
-Slap it back
--Send new list back

What we need to do next

we have some data in our bears
put some data in our moves table
link the data from moves to bears via either hasOne or belongsTwo
look at adonis example under hasOne and belongsTwo for reference


commands

adonis migration:run (this is the initial create)
adonis migration:refresh (this is to update the database)
adonis seed  (this creates the database)

npm install sqlite3 --save (should install and make it install on npm install)

npm install (if not running)



# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

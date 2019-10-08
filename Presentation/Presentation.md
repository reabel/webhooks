title: Webhooks Presentation
author:
    name: Ryan Reabel
    twitter: reabel
    url: http://reabelx.com
output: presentation.html
controls: true
theme: sudodoki/reveal-cleaver-theme
--

<!-- WIP, based off MySql presentation -->

# Comparing MySQL to Postgres
## A quick rundown of things to watch out for.

<!-- test comment-->

--

### Brushing up, what’s new to MySQL

* Version 8.0
    * JSON Improvements (Started in 5.7)
    * latin1 no longer default encoding, utf8mb4 now recommended
    * Document-store functionality
    * Window functions and recursive SQL syntax
* Some other notable recent changes
    * sql_mode set by default
* Note on versioning: 6.0 nixed, 7.0 reserved for clustering version of MySQL

* Why version matters
--

### MySQL vs Postgres

* Postgres is open source
* MySQL is open source. However, licenses must be purchased for commercial use
* Depending on version, MySQL may not be ACID (Atomicity, Consistency, Isolation, Durability) Compliant
* Inserts
* JSON Usage

--

### Live comparison

--

###  Using MySQL in I-Sight

* Support Started in 2.x
* 5.x support
* Migration Scripts
* Yellowfin config
* KNEX

--

### Test App (Demo)

--
# Not a DBA
### These are things I came across because I wanted to learn more about how we work with DBs on a daily basis
--
### Resources

* [Postgres vs. MySql blog post](https://people.apache.org/~jim/NewArchitect/webtech/2001/09/jepson/index.html)
* [Is Mysql ACID Compliant?](https://dba.stackexchange.com/questions/177569/is-mysql-acid-compliant)
* [Understanding MySQL Isolation Levels](https://blog.pythian.com/understanding-mysql-isolation-levels-repeatable-read/)

* presentation created in [cleaver](https://www.npmjs.com/package/cleaver)
--

# nodejs-mongo

Basic Node JS practice and use of mongoose mongo driver

## Code Practice

[Basic set up](node_basics/basic_index.js)
<br/>
How to run node server on a port and print a simple callback response

[Sync HTML](node_basics/read_sync.js)
<br/>
Read a HTML file using fs module as a blocking call. Understand sync/async options

[node-express](node-express/index.js)
<br/>
Set up Express framework, basic api query and print json response

[mongoose-save](mongoose-basics/mongo-save.js)
<br/>
Demonstrate a simple mongo collection, and mongoose model for a Post object collection for save/create operations

[mongoose-find](mongoose-basics/mongo-find.js)
<br/>
Query Post collection for find operations


[mongoose-update](mongoose-basics/mongo-update.js)
<br/>
Query Post collection for update operations

[mongoose-delete](mongoose-basics/mongo-delete.js)
<br/>
Query Post collection for delete operations


## Mini project

[Basic Blog](express-static/index.js)
<br/>
Example blog framework using Node js, express, and demonstrate usage of express-edge templating with layouts

[Blog with Mongo Integration](nodejs-blog/index.js)
<br/>
<p> Demonstrates the following : </p>
<ul>
 <li> Index, About, Contact, Create new blog post HTML pages with express-edge integration </li>
 <li> Save, Retrieve and find data with mongo using node mongoose driver </li>
 <li> Display dynamic content </li>
</ul>

### Install mongo - brew

- Install Robo Mongo 3T Community edition

```
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community
```

### Install mongoose

```
npm install --save mongoose
```
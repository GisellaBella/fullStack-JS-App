# fullStack-JS-App

## Learning Objectives

This lab is a chance to solidify what we learned earlier in the course about back-end Javascript and connect it to our fancy new front-end framework, Angular.  To do this, we will:

* **Build** the following pieces around our front-end
    * A node server to serve up our front-end files
    * `$http` to connect to an API endpoint
    * An API endpoint that uses
      * Mongo and Mongoose to save our data
      * Express to route our resources

At the end of this lab, we will have a full CRUD app using Javascript through the full stack.

## Setup

1. Open up your Cards Against Assembly app (aka `angular-directives-lab`)
2. Verify that the cards in `questionsList` in `cardsController.js` are rendering properly on the page.
3. It should look similar to this:

<img width="965" alt="Custom Card" src="https://cloud.githubusercontent.com/assets/25366/9668827/a352dbf8-5238-11e5-8d00-80ccf02ca95c.png">

> Note: We will give suggestions of specific projects/labs you have completed that will be useful for reference on specific steps.  For general reference, any of your labs from the Node week would be helpful, but the [Personal API Lab](https://github.com/den-wdi-2/express-personal-api) and [Tunely Lab](https://github.com/den-wdi-2/tunely) may have the most complete code.

### Step 1: Server Setup

1. Create a directory for your node server.
2. Initialize an npm project.
2. Create a JS file that will act as your server file.
4. Serve up your front-end files from this server, preferably in a `public` directory.

For reference, you can examine the [Express Lesson](https://github.com/den-wdi-2/express).

### Step 2: $http / AJAX Connection to Back-End

1. Use the following Heroku endpoint to replace your hard-coded Cards: `https://shielded-forest-41789.herokuapp.com/api/flashcards`
2. In `cardsController.js`, use `$http` to GET the flashcards.  This should replace your questionsList array.
3. Use `$http` to GET one flashcard by ID.  Save this as `vm.singleQuestion`.

Don't forget to `$inject` `$http` before you try to use it in the controller.

By the end of this step, you should not need any hardcoded data on your front-end.

For reference, you can examine your work in the [Criminals Lab](https://github.com/den-wdi-2/http-lab).

### Step 3: Create Express Routes

>Note: This is a short lab, so don't worry too much about file organization: put everything on your backend into one giant `server.js` file unless otherwise noted.

Now you should build out your own API to replace the Heroku one.  First, take the hardcoded `questionsList` array from your Cards Controller, and put it towards the top of your `server.js` file.

At this point, we still haven't built out our database, so hardcoding the data for your cards is expected.  However, you should be able to:

1. Create a `.get()` (`#index`) route in Express that returns all of your hardcoded cards.
2. Create a `.get()` (`#show`) route in Express that returns one of your hardcoded cards based on ID.
3. Create a `.post()` (`#create`) route in Express that adds a hardcoded card to your array of hardcoded cards.

By the end of this step, you should not need any hardcoded data on your front-end, nor any 3rd party APIs.  We're getting there.

For reference, you can examine your work in the [Express Routing Lab](https://github.com/den-wdi-2/express-routing-lab) or the [Express Personal API Lab](https://github.com/den-wdi-2/express-personal-api)

### Step 4: Integrate Mongo/Mongoose

Now, we're going to set up our database.  Match up your Express routes with Mongoose methods so you can:

1. `.find()` all your cards.
2. `.find()` a single card based on ID.
3. `.create()` or `.save()` a single card in your database.

Once this is finished:

1. Create a `seed.js` file which connects to the same Mongo DB as your `server.js` file.
2. Add all of the questions in your hardcoded array into the DB inside this `seed.js` file.

And finally:

1. Go back to your Cards Controller on your front end, and replace the Heroku address in your `$http` calls with the address of your local server.

By the end of this step, our `questionsList` on the front-end should be grabbed from our very own database.

For reference, you can examine your work on the [Mongoose Books App](https://github.com/den-wdi-2/mongoose-books-app) 

### Step 5: CRUD All the Things!

OK, now we can GET and POST, but that's not very helpful for a user that is looking to *create* a *new* card, *update* a card, or *delete* one.  Let's build out that functionality:

1. Build an HTML form that will allow us to submit a new card through our new POST route.  Since this is Angular, you will probably want to use `ng-submit`.
2. Add a button on each card that allows you to DELETE a card.  Connect this to a DELETE route on your back end. (Hint: this one is a little tricky.  You will need to pass the delete method from your controller into your cardDirective template.  You should look at the [Custom Directives Lab](https://github.com/den-wdi-2/angular-directives-lab) for details on how to do this.)
3. Use a form that lets you edit and UPDATE a card.  For now, just display it under each card.  Try to borrow as much as you can from your work with the form from #1.

For reference, you can examine your work on the [Criminals Lab](https://github.com/den-wdi-2/http-lab).

### Step 6: Looking Good

First, step back and appreciate the work you've just done.  You just built out a back-end for your app without any starter code!

Pretty cool, right?!

![](http://i.imgur.com/M1nEp7h.gif)

Now, how can we make this app better?

### Step 7: Refactoring and Improvement (Bonus)

Here are some things we can improve on this app...

* Refactor your app to fit Angular and Node best practices.  Remember the following:
   * Keep code DRY
   * [Principle of Single Responsibility](https://en.wikipedia.org/wiki/Single_responsibility_principle)
   * [Angular Style Guide](https://github.com/den-wdi-2/angular-style-guide)
* Use $resource instead of $http
* Clean up the UI and CSS so you are proud of the appearance
* Update our cards in place with [angular-xeditable](https://vitalets.github.io/angular-xeditable/)
* Use front-end routing with `ngRoute` where you don't want to refresh the page
* Use factories or services where possible
* Split your back-end route, controller, and model code into separate files if you haven't already

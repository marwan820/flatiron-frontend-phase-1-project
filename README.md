# flatiron-frontend-phase-1-project
My Flatiron Frontend Phase1 Project

README
Project Requirements
- App must be an HTML/CSS/JS frontend that accesses data from a public API or from your own API built using json-server and a db.json file. 
- API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. 
-All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. 
If you do want to use a public API, you can check out this list of public APIsLinks to an external site.. Try to use one that has HTTPs but doesn’t require Auth or CORs. You should see that information listed alongside the API.
Try to avoid using an API that requires a key. APIs that require no authorization will be easiest to use.
Do not use APIs that require a credit card to sign up.
What Happens When Your Secret API Key is Stolen and Used By OthersLinks to an external site. 
A Very Expensive AWS MistakeLinks to an external site. (note: the fix mentioned is in Ruby - a backend language that we will not be learning. You cannot fully hide API keys in a Front End project. For these projects, the fix is to not use a paid API.)
Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.
Use at least 2 distinct event listenersLinks to an external site. (2 events of different types) that enable interactivity. 
What this means is that, if you had 2 click events, that would only count as 1 distinct event and you would need to add at least 1 more - a keydown or mouseenter event, for example.  The DOMContentLoaded event does not count toward the total.
Here’s a list of available eventsLinks to an external site., for inspiration. 
Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. 
Events embedded into HTML elements and CSS will not count toward the total. The events must be in your JavaScript file (such as index.js).
Please post a question on Piazza or book a lab help session if you have questions regarding this requirement.
Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Interacting with your API data in some way should present an opportunity to use array iteration.
Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.
Here are some resources we recommend reviewing regarding best practices: Front End GuidelinesLinks to an external site. and Clean Code JavaScriptLinks to an external site.. 
Stretch Goals
Use json-serverLinks to an external site. in your project to persist your app's interactivity.
Use 3 or more event listeners.
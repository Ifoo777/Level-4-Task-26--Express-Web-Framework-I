# Level 4 Task 26 -Express Web Framework I

## Task

● Create an application project folder called ‘my_first_express_app’.

● Create another subdirectory called ‘public’ that contains two static html files called terms_of_service.html and privacy_policy.html. Feel free to
reuse any html files you have created before.

● Create a file called organisations.json that describes at least 5 organisations. E.g. format: {“name”: “New World Consulting”, “email”:“hello@newworld.org”, “pty_ltd”: true}

● Create a server that will do the following:

○ Display “Organisation listing” and a list of organisations, and their properties in a table, loaded from the file organisations.json at URL http://localhost:3000/.

○ Display the static HTML page, terms_of_service.html at URL http://localhost:3000/terms_of_service.html

○ Display the static HTML page, privacy_policy.html at URL http://localhost:3000/privacy_policy.html

○ Displays the message “Sorry! Can’t find that resource. Please check your URL” if the user enters an unknown path. Help here.

● Enable the server to restart on file changes.

● You should be able to start the server using npm start.

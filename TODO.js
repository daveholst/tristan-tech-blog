/*GIVEN a CMS-style blog site
TODO:
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; 
navigation links for the homepage and the dashboard; and the option to log in
NOTE: route to homepage; have seeded blog posts; route to dashboard; route to login (try modal); be able to log in 
todo: have routes to homepage, dashboard and logged_in
todo: create seed data for users commenting 

TODO:
WHEN I click on the homepage option
THEN I am taken to the homepage
todo: create homepage button 
todo: onClick route to homepage 
todo: homepage includes user posts and comments 
TODO:
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
todo: create login button 
todo: create sign up button 
todo: decide either modal or page load
todo: if not signed in and try go to the dash board propmt to sign in or sign up 
todo:  sign in and sign up functions

TODO:
WHEN I choose to sign up
THEN I am prompted to create a username and password
todo: username and password buttons with inputs

TODO:
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
todo: sign-up button
todo: username and password saved to data base 
todo: log in as that user from db 
NOTE: if time display username when logged in

TODO:
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
todo: when signed in change login to logout button 
todo: can navigate to all pages as user
 
TODO:
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
todo: when on homepage get saved posts from all users from db 
todo: homepage button routes to the home page
todo: display date of each post and when posted 
todo: latest date post goes on top of the stack

TODO:
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
todo: posts are clickable and can be viewed 
todo: route to post 
todo: on post page display title, contents, post creator username, and date posted
todo: back button 
todo: route back button to homepage 

TODO:
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
todo: comment button
todo: submit button 
todo: save comment to db 
todo: display comment on the post with the comment creators username displayed and the date created from

TODO:
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
todo: dashboard button
todo: route to dashboard button
todo: display posts created by user and date posted from db
todo: new post button in a  easy to see location 
todo: can create new blog post that is saved to db 
todo: created post can then be displayed on homepage 

TODO:
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
todo: add new blog post button
todo: inputs for title and contents for post 
todo: title, contents and date posted added to db for post 
todo: new post is displayed on dashboard at top of stack from db
todo: auto refresh for new post created
todo: homepage then displays new post 

TODO:
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
todo: if click on own post show delete or update post 
todo: delete button 
todo: update button 
todo: onClick delete button deletes post from db and refreshes homepage/dashboard
todo: prompt are you sure you want to delete? 
todo: onClick update button allow to write in contents and title inputs
NOTE: make you can just update when clicking a post and have a save button instead 
       todo: save button would then update the object in db

TODO:
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
todo: logout button 
todo: only display when logged in
todo: onClick logout user 
todo: if user is logged out cannot use dashboard, or click on posts

TODO:
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments 
todo: logout user after a set time if left idle

TODO::DONE: create models and seeded data for user comment and post 
:DONE: user model/seed
:DONE: post model/seed
:DONE: comment model/seed

*/

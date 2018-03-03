# DashVotes
DashVotes is a voting SPA with React, Firebase, ChartsJS and ReactStrap. 
## MVP
- main page 
- vote page
- user login
- firebase post to db
- results page from db 
- local storage session 

## Nice to have 
- firebase login
- charts.js
- admin page 
- ability to toggle show results page if admin
- admin can always see results 
- admin can create polls
  - poll title
  - add option 
- Brand custom CSS import 

## TODOS 
- Subnav back button
- login
- post to db with login info 
- get data 
- chart test
## Notes
- Main page gets data from db
  - maps out polls
  - dynamic route '/polls/:pollId'
  - dynamic route '/results/:pollId'
- User sessions from FB

## Data structure 
has multiple polls
```
APP
└─polls 
  └─pollId 
    ├─usersVoted: [array of userIds] 
    └─userVoted.count()
  users
  └─userId
    ├─userName
    └─userEmail
```
if user has voted (userId in array), poll is greyed and cannot vote anymore 


## Screens 
```
~/App
  ├─Navbar (Register, Logout button)
  ├─Register to '/' (!isLoggedIn)
  └─Home page  to '/' (isLoggedIn)
    └─Poll 1 to '/polls/poll1'
    └─Polls to '/polls/:pollId' (eventually dynamic)
    └─Admin to '/admin' (live results, current state, user count)
    └─Results to '/results/:pollId', render Results (pass props for poll)
```

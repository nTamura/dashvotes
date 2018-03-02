# React voting app 

## MVP
- main page 
- vote 1 page
- vote 2 page
- anonymous login (no QC)
- firebase post to db
- results page from db 

## Nice to have 
- firebase login
- charts.js
- admin page 
- ability to toggle show results page if admin
- admin can always see results 
- admin can create polls
  - poll title
  - add option 

# TODOS 
- font awesome
- Bootstrap 
- color palete 
- nav back button
- login


## Notes
- Main page gets data from db
  - maps out polls
  - dynamic route '/:pollId'

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
  ├─Navbar (login, username)
  └─Signin (if signed in... then )
    └─Main page 
      └─Poll 1 to '/poll1'
      └─Poll 2 to '/poll2'
      └─Admin to '/admin' (live results, current state, user count)
      └─Results to '/results' (final result)
```
`This is a currently in progress rework of the old version.`

# DashVotes

DashVotes is a mobile PWA which allows users to create and vote on existing polls. The votes will be collected and shown in a visual representation of the results. A live demo is available, but since it is a work in progress, there may be some bugs.

![screen](https://raw.githubusercontent.com/nTamura/dashvotes/master/public/img/screen1.png)

<!-- screenshot default iphoneX screens, reduce 35% scale -->

Dashvotes is created with React, Firebase/Firestore, Recharts and ReactStrap.

## Todo

- voter can only vote once
- voter can change vote (overwrite)
- creator cannot vote on own polls
- admin functionality
- admin can see all results
- delete/edit poll if admin/owner
- edit profile
- profile scores

#### Notes

- Main page gets data from db
- error handling if no data from db
- handle 'cant vote on own poll'
- handle 'already voted, change vote'
- dynamic route '/polls/:pollId'
- dynamic route '/results/:pollId'
- Recharts
- What do with old polls (expires after x)

## Data structure

```
APP
  └─polls
    └─pollId
      ├─pollData
      └─results: [array of userVotes]
  └─users
    └─userId
      ├─userName
      └─userEmail
```

Data is posted to Cloud Firestore

![screen](https://raw.githubusercontent.com/nTamura/dashvotes/master/public/img/screen2.png)

## Issues

#### Log in does not do anything:

Cause: Third-party cookies and data blocked in browser
When enabled, this privacy feature deactivates all cookies and storage within the iframe, which is required by Google to securely authenticate the user.

While I search for a more permanent fix, some temporary solutions:

- create an exception for https://accounts.google.com by adding accounts.google.com to the allowed domains
- [Chrome] settings, content settings, cookies, disable allow third-party cookies in browser

Notes: changed signinWithPopup to signinWithRedirect for now

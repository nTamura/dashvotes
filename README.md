`Original version has been scrapped and is being completely redone.`
`Deployed app may be unstable or broken at this time.`

# DashVotes

DashVotes is a mobile PWA which allows users to create and vote on polls. The votes will be collected and shown in a visual representation. You can share your (or other's) polls and get instant feedback from the results.

<!-- ![screen](https://raw.githubusercontent.com/nTamura/dashvotes/master/public/img/screen1.png) -->

<!-- screenshot default iphoneX screens, reduce 35% scale -->

Dashvotes is created with React, Firebase/Firestore, Redux, Recharts and JSS.

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

Data is posted to Cloud Firestore, synced with Firebase auth service.

<!-- ![screen](https://raw.githubusercontent.com/nTamura/dashvotes/master/public/img/screen2.png) -->

## Todo

- voter can only vote once
- voter can change vote (overwrite)
- creator cannot vote on own polls
- admin functionality
- admin can see all results
- delete/edit poll if admin/owner
- edit profile
- profile scores

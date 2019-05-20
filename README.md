`Original version has been scrapped and is being completely redone with hooks, Redux, and JSS. Deployed app may be unstable or broken at this time.`

# DashVotes

Dashvotes is a mobile PWA which allows users to create and vote on polls. You can share your (or other's) polls and get instant feedback from the results.

<!-- ![screen](https://raw.githubusercontent.com/nTamura/dashvotes/master/public/img/screen1.png) -->

<!-- screenshot default iphoneX screens, reduce 35% scale -->

Dashvotes is created with React, Firebase/Firestore, Redux, Recharts and JSS.

## Data structure

```
firestore
 ├─polls
 │  └─pollId
 │     ├─pid
 │     ├─createdBy: { displayName, uid}
 │     ├─createdAt: timestamp
 │     ├─title: str
 │     ├─description: str
 │     ├─expireAt: timestamp
 │     ├─isPublic: bool
 │     ├─options: [array]
 │     └─results: [array of options]
 │        └─option
 │           └─vote: { userName, uid }
 └─users
    └─userId
      ├─displayName: str
      ├─fName: str
      ├─lName: str
      ├─email: str
      ├─pollsCreated: [array of pid]
      ├─pollsVoted: [array of pid]
      └─score
```

Data is posted to Cloud Firestore, synced with Firebase auth service.

<!-- ![screen](https://raw.githubusercontent.com/nTamura/dashvotes/master/public/img/screen2.png) -->

## Todo

- private polls viewable to only user with invite
- poll expiration date
- extend client side form validation
- voter can only vote once
- voter can change vote (overwrite)
- creator cannot vote on own polls
- admin functionality
- admin can see all results
- delete/edit poll if admin/owner
- edit profile
- profile scores

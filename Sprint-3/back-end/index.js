const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const videos = require('./videos');
const mainObj = require('./mainObject');
const uuid = require('uuid/v1')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

const PORT = 8080;

//using '/videos' to get the video list array
//this will be called on DidMount
app.get('/videos', (req, res)=>{
    res.json(videos);
});


//using '/videos/:videoId' to get the big video object
//this will be called on DidMount and WillUpdate
app.get('/videos/:videoId', (req, res)=>{
    const targetVidId = (req.params.videoId);
    let match = mainObj.find((video)=>{
        return targetVidId === video.id
    })
    res.json(match)
});

// app.put('/videos/:videoId', (req, res)=>{
//     const targetVidId = (req.params.videoId);
//     let match = mainObj.find((video)=>{
//         return targetVidId === video.id
//     })
//     let newComment = match.commen
//     })
//     res.json(newcomment)


//this is used for POST reqs of new uploads
app.post('/upload', (req, res)=>{
    console.log(req.body);
    const newVid = 
    {"id": uuid(),
     "title": (req.body.title),
     "channel": "Pribz",
     "image": "https://images.pexels.com/photos/4602/jumping-cute-playing-animals.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }

    const newObj = {
        "id": newVid.id,
        "title": (req.body.title),
        "channel": "Pribz",
        "image": "https://images.pexels.com/photos/4602/jumping-cute-playing-animals.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "description": (req.body.description),
        "views": '1,000,000',
        "likes": '100,000',
        "duration": '4:01',
        "video": 'https://project-2-api.herokuapp.com/stream',
        "timestamp": Date.now(),
        "comments": [
            {
                "name": "Katsunoi",
                "comment": "This guys videos are always KILLER!! Mmhm, mmhm, mmhm - Pribz just gets me!",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Watersboi",
                "comment": "Awwwh mate! This drongo's content is a BONANZAAAAAAAAAA. Always got me going for a Toohey's and a ride in the old Ute!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "JJ-Janet",
                "comment": "It's sooooo goood! LIVING for Pribz and his insane vids, keep it up man!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            },
            {
                "name": "Ed, Edd and Libra",
                "comment": "To be honest, I'm not sure what I would do without these vids in my life, man! They make things so much easier",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f9",
                "likes": 0,
                "timestamp": 1542262984046
            }
        ] 
    }
    videos.push(newVid);
    mainObj.push(newObj);
    res.json(newVid);
})

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
})
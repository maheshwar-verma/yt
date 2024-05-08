import profile from "../assets/profile.svg"
const commentsData=[
    {
        name:"Maheshwar Verma",
        text:"vemry good video nice video keep going like share subscribe for more content",
        replies:[
            {
                name:"Maheshwar Verma",
                text:"vemry good video nice video keep going like share subscribe for more content vemry good video nice video keep going like share subscribe for more content",
                replies:[
                    {
                        name:"Maheshwar Verma",
                        text:"vemry good video nice video keep going like share subscribe for more content",
                        replies:[
                            {
                                name:"Maheshwar Verma",
                                text:"vemry good video nice video keep going like share subscribe for more content",
                                replies:[
                                     
                                ]
                            },
                            {
                                name:"Maheshwar Verma",
                                text:"vemry good video nice video keep going like share subscribe for more content",
                                replies:[
                                     
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"Maheshwar Verma",
        text:"vemry good video nice video keep going like share subscribe for more content",
        replies:[

        ]
    },
    {
        name:"Maheshwar Verma",
        text:"vemry good video nice video keep going like share subscribe for more content",
        replies:[

        ]
    },
    {
        name:"Maheshwar Verma",
        text:"vemry good video nice video keep going like share subscribe for more content",
        replies:[
            {
                name:"Maheshwar Verma",
                text:"vemry good video nice video keep going like share subscribe for more content",
                replies:[
                    {
                        name:"Maheshwar Verma",
                        text:"vemry good video nice video keep going like share subscribe for more content",
                        replies:[
                             
                        ]
                    },
                    {
                        name:"Maheshwar Verma",
                        text:"vemry good video nice video keep going like share subscribe for more content",
                        replies:[
                            {
                                name:"Maheshwar Verma",
                                text:"vemry good video nice video keep going like share subscribe for more content",
                                replies:[
                                     
                                ]
                            },
                        ]
                    },
                    {
                        name:"Maheshwar Verma",
                        text:"vemry good video nice video keep going like share subscribe for more content",
                        replies:[
                             
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"Maheshwar Verma",
        text:"vemry good video nice video keep going like share subscribe for more content",
        replies:[

        ]
    },
    {
        name:"Maheshwar Verma",
        text:"vemry good video nice video keep going like share subscribe for more content",
        replies:[

        ]
    },
    {
        name:"Maheshwar Verma",
        text:"vemry good video nice video keep going like share subscribe for more content",
        replies:[

        ]
    },
    {
        name:"Maheshwar Verma",
        text:"vemry good video nice video keep going like share subscribe for more content",
        replies:[

        ]
    },
];

const Comment=({data})=>{
    return <div className="flex my-2 shadow-sm w-9/12 bg-gray-100">
        <img className="w-[2.5rem]" alt="user" src={profile}/>
        <div className="px-2">
            <p className="font-semibold">{data.name}</p>
            <p>{data.text}</p>
        </div>
    </div>
}

const CommentsList=({comments})=>{
    return (comments.map((comment,index)=>
    <div>
    <Comment key={index} data={comment}/>
    <div className="pl-5 ml-5 border-l-2">
    {/* <Comment key={index} data={comment}/>
    <Comment key={index} data={comment}/>
    <Comment key={index} data={comment}/> */}
    <CommentsList comments={comment.replies}/>
    </div>
    </div>
    ))
}

const CommentsContainer = () => {
    return (
        <div className="p-5 my-2">
            <h1 className="font-semibold text-lg">Comments:</h1>
            <CommentsList comments={commentsData}/>
        </div>
    )
} 
export default CommentsContainer;
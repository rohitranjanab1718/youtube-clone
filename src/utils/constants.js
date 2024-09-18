const YOUTUBE_API_KEY = "AIzaSyDZCQXycRFTff9uXqomGAnIjF7FzBBgauw"
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const LIVE_CHAT_COUNT = 15;
export const commentsData = [
    {
        "comment_id": "1",
        "user_name": "Rohit Ranjan",
        "comment_text": "This video is very informative! Thanks for sharing.",
        "timestamp": "2024-08-23T10:00:00Z",
        "likes": 15,
        "replies": [
            {
                "reply_id": "1-1",
                "user_name": "John Doe",
                "reply_text": "Absolutely agree with you!",
                "timestamp": "2024-08-23T11:00:00Z",
                "likes": 5
            }
        ]
    },
    {
        "comment_id": "2",
        "user_name": "Alice Smith",
        "comment_text": "I learned a lot from this video.",
        "timestamp": "2024-08-22T09:00:00Z",
        "likes": 10,
        "replies": [
            {
                "reply_id": "2-1",
                "user_name": "Rohit Ranjan",
                "reply_text": "Same here! The explanations were very clear.",
                "timestamp": "2024-08-22T10:00:00Z",
                "likes": 8
            }
        ]
    },
    {
        "comment_id": "3",
        "user_name": "Rohit Ranjan",
        "comment_text": "Can someone explain the concept at 3:45?",
        "timestamp": "2024-08-21T08:00:00Z",
        "likes": 12,
        "replies": []
    }
]
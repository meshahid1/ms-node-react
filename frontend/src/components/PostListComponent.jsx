import axios from "axios";
import { useState, useEffect, useRef } from "react";

const PostListComponent = ({postTitle}) => {
    const [posts, setPosts] = useState({});
    const [comment, setcomment] = useState({});

    const fetchPosts = async () => {
        const resp = await axios.get('http://localhost:8080/post');
        setPosts(resp.data)
    }

    const handleChange = (e, index) => {
        setcomment((prevState) => {
            return {
                [index]: e.target.value
            }
        })
    }
    const addComment = async (index, postId) =>{
        await axios.post(`http://localhost:8081/post/${postId}/comments`, {
            content: comment[index]
        }).then(resp => {
            fetchPosts();
        });
    }

    useEffect(() => {
        fetchPosts(); 
    }, [postTitle])

    const renderedPosts = Object.values(posts).map((post, index) => {
        return (
            <div key={post.id}>
                <div className="grid-item">
                    <p>{post.title}</p>
                    <br />
                    list of comments here
                    <br />
                    <p>Add a comment</p>
                    <input type="text" value={comment[index]} onChange={(e) => handleChange(e, index)} placeholder="Write a comment" /> 
                    <button onClick={()=> addComment(index, post.id)}>Submit Comment</button><hr/>
                </div>
            </div>
        )
    })

    return <div className="grid-container">{renderedPosts}</div>
}
export default PostListComponent
import axios from "axios";
import { useState, useRef } from "react";

function PostComponent (props) {
    // const [post, setPost] = useState();
    const post = useRef();

    const addPost = async (e) => {
        e.preventDefault();
        const payload = post.current.value;
        await axios.post('http://localhost:8080/post', {
            title: payload
        }).then(resp => {
            props.passChildData(payload)
        })
    }

    return (
        <div>
            <form>
                <div>
                    <label>Post</label>
                    <input type="text" ref={post} placeholder="Write a post" />
                </div>
                <button onClick={addPost}>Insert</button>
            </form>
        </div>
    )
}
export default PostComponent
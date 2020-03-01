import React from 'react';


const MyPost =(props)=> {
 let postElements = props.state.map(m=><Post message = {m.message}/>)
}
export default MyPost;

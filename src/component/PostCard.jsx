import React from 'react'

const PostCard = (props) => {
  return (
    <div className=' p-8 box-border'>
    <h3 className=' font-bold bg-slate-950 text-yellow-50 p-3'>{props.title}</h3>
    <p className=' bg-slate-400 p-3'>{props.body}</p>
</div>
  )
}

export default PostCard
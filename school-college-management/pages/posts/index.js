import Link from "next/link"
function PostList({posts}) {
    return(
<>
{
    posts.map((post)=> { return(
        
        <div key ={post.id}>
            <Link  href={`/posts/${post.id}`} >
            <h1>{post.title}</h1>
            </Link>
        </div>
  
    )})
}
</>
    )
}
export default PostList
export async function getStaticProps() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await result.json()
    return {
        props:{
            posts:data.slice(0,3)
        }
    }
}


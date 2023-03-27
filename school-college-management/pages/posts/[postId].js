import {useRouter} from 'next/router'
function PostItems ({post}) {
    const router = useRouter()
    if(router.isFallback){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
<>
<h1>{post.title}</h1>
<p>{post.body}</p>
</>
    )
}

export default PostItems

export async function getStaticPaths(){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await result.json();

// const paths = data.map(el=>{return{
//     params:{postId:`${el.id}`},
// }}) 


return{
//   paths,
//   fallback:false,
paths:[
        {
           params:{postId: '1'},
         
        },
        {
            params:{postId:'2'},
          
         },
         {
            params:{postId:'3'},
          
         },
         
    ],
    fallback:true,

}}

export async function getStaticProps(context){
    const {params} = context;     
    console.log(params)

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await result.json();
    if(!data.id){
        return{
            notFound:true,
        }
    }
    return{
        props:{
post:data
        }
    }
}


import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
// import { getPosts } from '@/lib/data'

const getPosts = async () => {
  const resp = await fetch('http://localhost:3000/api/blog',{next:{revalidate: 3600}})
  if(!resp.ok) {
    throw new Error('Something went wrong');
  }
  return resp.json();
}

const BlogPage = async () => {

    
  // const posts = await getData()
  const posts = await getPosts()

  return (
    <div className={styles.container}>
        {posts.map(post=>(
          <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
          </div>
        ))}
     
      
     
    </div>
  )
}

{/* <div className={styles.post}>
      <PostCard/>
      </div>
      <div className={styles.post}>
      <PostCard/>
      </div>
      <div className={styles.post}>
      <PostCard/>
      </div>
      <div className={styles.post}>
      <PostCard/>
      </div> */}
export default BlogPage

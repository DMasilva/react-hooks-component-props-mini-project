
import Article from "../components/Article"
import blogData from "../data/blog"



function ArticleList(){

   // console.log(blogData.posts);

    const articleLists = blogData.posts.map(article=>{
        return <Article key ={article.title} minutes={article.minutes} title = {article.title} date ={article.date} preview={article.preview}/>
    })
    
 
    return(
        <main>
            {articleLists}
        </main>
    )
};

export default ArticleList;
import createDataContext from './createDataContext';


const blogReducer =(state,action)=>{
    switch (action.type) {
        case 'get_blogpost':
            return action.payload
        case 'edit_blogpost':
            return state.map((blogpost)=>{
                return blogpost.id === action.payload.id ? action.payload: blogpost
            })
        case 'delete_blogpost':
            return state.filter((blogpost)=>blogpost.id !== action.payload)
        case 'add_blogpost':
            return [...state,{
                id:Math.floor(Math.random()*99999) ,
                title: action.payload.title,
                content: action.payload.content,
            }]
    
        default:
            return state;
    }
}

    const getBlogPost =(dispatch)=>{
        try {
            return async ()=>{
                const response = await jsonserver.get('/blogposts');
                dispatch({type: 'get_blogpost',payload: response.data})
    
            }
        } catch (error) {
            console.log(error)
        }
    }
    const addBlogPost =(dispatch)=>{

        return async (title,content,callback)=>{
            await jsonserver.post('/blogposts',{title,content})
        //     dispatch({type: 'add_blogpost',payload:{title,content}})
            callback();
        }
    }

    const editBlogPost =(dispatch)=>{
        return async (id,title,content,callback)=>{
            await jsonserver.update(`/blogposts/${id}`,{title,content})
            callback();
        }
    }

    const deleteBlogPost =(dispatch)=>{
        return async (id)=>{
            await jsonserver.delete(`/blogposts/${id}`)
            dispatch({type: 'delete_blogpost',payload:id})
        }
    }

export const {Context,Provider}= createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost,getBlogPost},
    []
    );
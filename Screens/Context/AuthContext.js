import createDataContext from './createDataContext';
import jsonApi from '../Api/jsonserver';
import { AsyncStorage } from 'react-native';

const authReducer =(state,action)=>{
    switch (action.type) {
        case 'add_error':
            return {...state , error_msg:action.payload }
        case 'login':
            return {error_msg:null, e_user:action.payload}
        case 'signup':
            return {error_msg:null, e_user:action.payload}
        case 'signout':
            return {error_msg:null, e_user:action.payload}
        case 'addorg':
            return {error_msg:null, org:action.payload}
        default:
            return state;
    }
}

   
    const signup =(dispatch)=> async ({username,email,password})=>{
            const config = {
                headers: {
                    'Content-Type': "application/json"
                     }
                 };
        
                    const formData = {
                    username,
                    email,
                    password
                    };
            try {
                const response = await jsonApi.post('/user/signup', formData, config);
                dispatch({type:'signup',payload:response.data})
            } catch (error) {
                console.log(error);
            }
        }
    
    const login =(dispatch)=> async ({email,password})=>{
            const config = {
                headers: {
                    'Content-Type': "application/json"
                     }
                 };
                    const formData = { 
                    email,
                    password
                    };
            try {
                const response = await jsonApi.post('/user/login', formData, config);
                console.log(response.data)
                dispatch({type:'login',payload:response.data})
            } catch (error) {
                dispatch({type:'add_error', payload:"Something Went Wrong"})
            }
        }

        const signout =(dispatch)=>{
            return dispatch({type:'logout',payload:''})
        }
        

        const addorg =(dispatch)=> async ({oname,
            opost, 
            oaddress,
            odescription, 
            ovotetime,
        user_name})=>{
            const config = {
                headers: {
                    'Content-Type': "application/json"
                     }
                 };
                    const formData = { 
                        oname,
                        opost, 
                        oaddress,
                        odescription, 
                        ovotetime,
                        user_name
                    };
            try {
                const response = await jsonApi.post('/orgnization/add', formData, config);
                console.log(response.data)
                dispatch({type:'addorg',payload:response.data})
            } catch (error) {
                dispatch({type:'add_error', payload:"Something Went Wrong"})
            }
        }


    

export const {Context,Provider}= createDataContext(
    authReducer,
    {login,signup,addorg},
    {error_msg:'',token:null,e_user:{}, org:{}}
    );
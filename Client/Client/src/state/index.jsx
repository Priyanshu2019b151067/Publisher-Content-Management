import {createSlice} from '@reduxjs/toolkit'
// initial state of all the states managed  globally
const initialState = {
    user : '',
    token : '',
    posts : ''
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setLogin : (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout : (state,action) =>{
            state.user = null;
            state.token = null;
        },
        setPosts : (state,action) =>{
            state.posts = action.payload.posts
        }
    }
});

export const {setLogin,setLogout,setPosts} = authSlice.actions;
export default authSlice.reducer;
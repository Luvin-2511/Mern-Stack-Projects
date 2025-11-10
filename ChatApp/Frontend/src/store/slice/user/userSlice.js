import { createSlice } from '@reduxjs/toolkit'
import { getOtherUsersThunk, getUserProfileThunk, loginUserThunk, logoutUserThunk, registerUserThunk } from './userThunk'


const initialState = {
    isAuthenticated: false,
    screenLoading: true,
    userProfile: null,
    selectedUser: JSON.parse(localStorage.getItem("selectedUser")),
    otherUsers: [],
    buttonLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            localStorage.setItem("selectedUser", JSON.stringify(action.payload))
            state.selectedUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Login
        builder.addCase(loginUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload?.responseData?.user
            state.isAuthenticated = true
            state.buttonLoading = false
        })
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            console.log("Rejected")
            state.buttonLoading = false
        })
        // Register
        builder.addCase(registerUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload?.responseData?.user
            state.isAuthenticated = true
            state.buttonLoading = false
        })
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            console.log("Rejected")
            state.buttonLoading = false
        })
        // Logout
        builder.addCase(logoutUserThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
            state.userProfile = null
            state.selectedUser = null
            state.otherUsers = null
            state.isAuthenticated = false
            state.buttonLoading = false
            localStorage.clear()

        })
        builder.addCase(logoutUserThunk.rejected, (state, action) => {
            console.log("Rejected")
            state.buttonLoading = false
        })
        // userProfile
        builder.addCase(getUserProfileThunk.pending, (state, action) => {
            state.screenLoading = true
        })
        builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.buttonLoading = false
            state.userProfile = action.payload?.responseData
        })
        builder.addCase(getUserProfileThunk.rejected, (state, action) => {
            console.log("Rejected")
            state.buttonLoading = false
        })
        // otherUsers
        builder.addCase(getOtherUsersThunk.pending, (state, action) => {
            state.screenLoading = true
        })
        builder.addCase(getOtherUsersThunk.fulfilled, (state, action) => {
            state.otherUsers = action.payload.responseData; // ✅ correct field
            state.buttonLoading = false;
        });
        builder.addCase(getOtherUsersThunk.rejected, (state, action) => {
            console.log("Rejected")
            state.buttonLoading = false
        })
    }
})

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
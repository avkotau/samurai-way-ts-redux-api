import { AppStateType } from "store/redux-store";
import { createSelector } from "reselect";

const getUsers = (state: AppStateType) => {
    return state.usersPage.users
};
// This example how to work reselect ( getUsers - this dependence
// if anyone has changed then the selector is called. getUsersSelector set in mapStateToProps
export const getUsersSelector = createSelector(
    getUsers,
    (users) => {
        //fake filter
        return users.filter(() => true)
    });
export const getPageSizeSelector = (state: AppStateType) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCountSelector = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
};
export const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.currentPage
};
export const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
};
export const getToggleFollowSelector = (state: AppStateType) => {
    return state.usersPage.toggleFollow
};


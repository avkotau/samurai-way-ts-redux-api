import { addPostAC, deletePostAC, profileReducer, ProfileResponseType } from "store/profileReducer";
import { PostDataType } from "types/commonTypes";

const initialState = {
    postsData: [
        {id: '1', message: 'Hello bro', like: 12},
        {id: '2', message: 'Hey all', like: 0},
        {id: '3', message: `It's you?`, like: 5},
    ] as Array<PostDataType>,
    profile: null as ProfileResponseType | null,
    status: ''
}
it('length of post should be incremented ', function () {
    // test data
    let action = addPostAC('new post')
    // action
    let newState = profileReducer(initialState, action)
    //expectation
    expect(newState.postsData.length).toBe(4)
});
it('message of new post should be correct', function () {
    let action = addPostAC('new post')
    let newState = profileReducer(initialState, action)
    expect(newState.postsData[0].message).toBe('new post')
});
it('length postsData after deleting should be decrement', function () {
    let action = deletePostAC('1')
    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(2)
});
it(`length postsData after deleting shouldn't be decrement is id is incorrect`, function () {
    let action = deletePostAC('6')
    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(newState.postsData.length)
});

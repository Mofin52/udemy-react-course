import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () => async dispatch => {
    const posts = await jsonplaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: posts.data });
}

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
    const user = await jsonplaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: user.data });
});
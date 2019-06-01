import { toggleLikes, editPrivacy, addNewComment } from '../lib/view-controllers/posts-actions.js';
import { deletePosts, editPosts } from '../lib/view-controllers/posts.js';
import { getRealTimeComment } from '../lib/controller-firebase/posts-actions.js'
import { currentUser } from '../lib/controller-firebase/auth.js';
import { listComments } from './posts-comments.js'


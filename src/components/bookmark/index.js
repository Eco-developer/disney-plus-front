import axios from 'axios';
import DISNEY_API from '../../const/disneyApi.js';
import { Container } from './style.js';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { useState } from 'react';
import { 
	useSelector,
	useDispatch,
} from "react-redux";
import { 
	selectUser,
	updateUserWatchlist
} from '../../features/user/userSlice.js';
import jwtDecode from 'jwt-decode';

const Bookmark = ({movie}) => {
	const user = useSelector(selectUser);
	const marked = user.watchlist_items.map(item => item.id).includes(movie.id);
	const [bookmarked, setBookmarked] = useState(marked);
	const [processing, setProcessing] = useState(false);
	const dispatch = useDispatch();

	const handleRequest = async () => {
		if (processing) {return}
		setProcessing(true);
		setBookmarked(prevState => !prevState);
		try {
			const response = await axios.put(
				`${DISNEY_API}update/user/${user._id}`,
				{ watchlist_item: {...movie} }, 
			)
			if (response.data) {
				const userData = jwtDecode(response.data);
				sessionStorage.setItem("token", response.data);
				dispatch(updateUserWatchlist(userData.watchlist_items));
			}
			setProcessing(false);
		} catch (error) {
			setProcessing(false);
		}
	};

	return (
		<Container 
			onClick={handleRequest} 
			active={bookmarked}
		>
			<BsFillBookmarkStarFill/>
		</Container>
	)
}

export default Bookmark;
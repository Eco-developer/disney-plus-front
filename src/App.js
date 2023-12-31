import Navigation from './domain/Navigation/index.js'
import Loading from './components/Loading/index.js';
import NotFound from './components/not-found/index.js';
import TMDBInstace from './services/axios.js';
import TMDBRequests from './services/request.js';
import { setUserLoginDetails } from './features/user/userSlice.js';
import { setMovieGenres } from './features/movie/movieSlice.js';
import { setSeriesGenres } from './features/series/seriesSlice.js';
import {
	setError,
	selectError
} from './features/error/errorSlice.js';
import { 
	useSelector,
	useDispatch
} from 'react-redux';
import { 
	useEffect,
	useState
} from 'react';
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import jwtDecode from 'jwt-decode';

function App() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const error = useSelector(selectError);

	useEffect(() => {
		const fetchInitialData = async () => {
			try {
				const movieResponse = await TMDBInstace.get(TMDBRequests.movie.genres);
				const seriesResponse = await TMDBInstace.get(TMDBRequests.series.genres);

				const { 
					data : {
						genres : movieGenres
					} 
				} = movieResponse;
				const {
					data : {
						genres : seriesGenres
					}
				} = seriesResponse;

				dispatch(setMovieGenres(movieGenres));
				dispatch(setSeriesGenres(seriesGenres));
				const token = sessionStorage.getItem("token")
				if (token) {
					const userData = jwtDecode(token);
					dispatch(setUserLoginDetails(userData));
				}
				setLoading(false);
			} catch (err) {
				dispatch(setError());
			}
		};
		fetchInitialData();
	}, [])
  	return (
    	<div className="App">
    	 	{!error ?
    	 		( loading ? 
    	 			<Loading/> : 
    	 			<Navigation/> )
    	 	: <NotFound/>}
    	</div>
  	);
}

export default App;

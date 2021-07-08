<div className="saved-movies">
{isLoading && <Preloader />}

{moviesSearchResponse
    ? movies.length === 0 && (
        <p className="saved-movie__response">
            {moviesSearchResponse}
        </p>
    )
    : movies.length === 0 && (
        <p className="saved-movie__response">
            Нет сохраненных фильмов
        </p>
    )}
import axios from 'axios';

class MoviesProvider {

    private apiUrl: string = 'http://api.themoviedb.org/3/';
    private apiKey: string = "api_key=c883eb88d25627db76c4b6d00a39889a";
    private language: string = "language=pt-BR";

    public searchMovies(searchQuery: string, page: number = 1) {
        const realPage = Math.ceil(page/4);
        const resquestUrl: string = this.apiUrl + 'search/movie?' + this.apiKey + '&' + this.language + '&query=' + encodeURI(searchQuery) + '&page=' + realPage;

        return axios.get(resquestUrl).then((response: any) => {
            // I have to do this cut because the page itens of api is locked on 20
            const startRange = (( (page-1)>0 ) ? ((page-1)*5) : 0);
            const endRange = (page*5);
            const wantedResults = Object.keys(response.data.results).slice(startRange, endRange).map(key => response.data.results[key]);
            response.data.results = wantedResults;
            response.data.total_pages = Math.ceil(response.data.total_results/5);
            response.data.page = page;
            return response.data;
        });
    }

    public getMovie(id: number) {
        const resquestUrl: string = this.apiUrl + 'movie/' + id + '?' + this.apiKey + '&' + this.language;

        return axios.get(resquestUrl).then((response: any) => {
            return response.data;
        });
    }
}

export default MoviesProvider;
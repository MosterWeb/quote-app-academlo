import '../components-css/CardQuotes.css';
const CardQuotes = ({ quotes }) => {

    return (
        <div >
            {/* Declaración de los props */}
            <h2>{quotes.id}</h2>
            <h2>{quotes.autor}</h2>
            <blockquote className="card-quotes__blockquote">{quotes.cita}</blockquote>
            <a href="https://twitter.com/intent/tweet?text=Te%20comparto%20mi%20Quote%20app&url=http%3A%2F%2quote-app-academlo.web.app%2Fblog&via=parzibyte&hashtags=programación,react" target="_blank" className="card-quotes__ico-twiter"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg></a>
        </div>
    )


}

export default CardQuotes;
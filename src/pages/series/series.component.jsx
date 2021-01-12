const Series = (props) => {
    const series = props.media
    console.log(JSON.stringify(series))
        return (

        <h1>Search Series
            {JSON.stringify(series)}
        </h1>
     );
}
 
export default Series;
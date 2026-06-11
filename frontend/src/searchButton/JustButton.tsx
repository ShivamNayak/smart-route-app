const SearchSection = () => {
    return (
       <div style={{ display: 'flex', gap: '10px' }}>
            <div ><input className="search-input" type="text" placeholder="Search..." /></div>
            <div><button className="search-button">Search</button></div>
       </div>
    )
}
export default SearchSection;
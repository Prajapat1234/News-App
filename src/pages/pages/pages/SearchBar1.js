// // import React, { useState } from 'react';

// // function Searchbar(onSearch) {
// //   const [query, setQuery] = useState('');

// //   const handleSearch = () => {
// //     onSearch(query);
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Search..."
// //         value={query}
// //         onChange={(e) => setQuery(e.target.value)}
// //       />
// //       <button onClick={handleSearch}>Search</button>
// //     </div>
// //   );
// // }

// // export default Searchbar;   

// // SearchBar.js
// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div>
//       <input type="text" value={query} onChange={handleInputChange} />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;



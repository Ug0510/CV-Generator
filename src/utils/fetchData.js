

const fetchData = async () => {
    try {
        // Fetch data from the JSON file
        const response = await fetch('/data.json');
        
        // Parse the JSON data
        const data = await response.json();

        // Store the parsed data in localStorage
        localStorage.setItem('CVData', JSON.stringify(data));
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}
export default fetchData;
/* import config from '../../config.js'; // Import configuration
 *//* const config = require('../../config.js'); // Import configuration

export const getData = async () => {
    try {
      const url = config.PLATZI_API;
      showLoad();
      const response = await fetch(url);
      const data = await response.json();
      hideLoad();
      return data; // Return the fetched data
    } catch (error) {
      console.error('Error getting data:', error);
      hideLoad();
      return []; // Or handle the error differently (e.g., throw an error)
    }
  };
  
function showLoad() {
    const loadingElement = document.getElementById('loading-indicator');
    loadingElement.style.display = 'block'; // Make the element visible
}
function hideLoad() {
    const loadingElement = document.getElementById('loading-indicator');
    loadingElement.style.display = 'none'; // Hide the element
} */
const SERVER_URL = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API endpoint

// Function to fetch quotes from the server
async function fetchQuotesFromServer() {
  try {
    const response = await fetch(SERVER_URL);
    if (!response.ok) throw new Error('Failed to fetch data from server');
    const serverQuotes = await response.json();
    return serverQuotes; // Adjust based on your API response format
  } catch (error) {
    console.error('Error fetching from server:', error);
    return [];
  }
}

// Function to post quotes to the server
async function postQuotesToServer(quotes) {
  try {
    const response = await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quotes)
    });
    if (!response.ok) throw new Error('Failed to post data to server');
    console.log('Data successfully posted to server');
  } catch (error) {
    console.error('Error posting to server:', error);
  }
}

// Sync quotes with the server periodically
function startSync() {
  setInterval(async () => {
    const serverQuotes = await fetchQuotesFromServer();
    if (serverQuotes.length > 0) {
      // Simple conflict resolution: prioritize server data
      quotes = serverQuotes;
      saveQuotes();
      populateCategories();
      alert('Data updated from server.');
    }
  }, 60000); // Sync every 60 seconds
}

// Function to manually sync data
async function manualSync() {
  const serverQuotes = await fetchQuotesFromServer();
  if (serverQuotes.length > 0) {
    // Simple conflict resolution: prioritize server data
    quotes = serverQuotes;
    saveQuotes();
    populateCategories();
    alert('Data updated from server.');
  }
}

// Function to resolve conflicts manually (basic example)
function resolveConflict() {
  // Example of a simple conflict resolution UI
  const conflictNotification = document.createElement('div');
  conflictNotification.textContent = 'Data conflict detected. Please review the changes.';
  document.body.appendChild(conflictNotification);
}

// Initialize sync process and add event listener for manual sync
document.addEventListener('DOMContentLoaded', () => {
  loadQuotes();
  populateCategories();
  createAddQuoteForm();
  startSync(); // Start periodic sync
});

// Example of manual sync trigger
document.getElementById('manualSyncButton').addEventListener('click', manualSync);

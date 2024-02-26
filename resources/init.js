let storedData = null != localStorage['PlayerData'] ? JSON.parse(localStorage.PlayerData) : false;
if (false !== storedData) {
    Player = storedData;
}


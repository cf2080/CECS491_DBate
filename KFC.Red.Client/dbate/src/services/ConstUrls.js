const apiURL = 'http://localhost:5000/api/'
//const apiURL = 'https://thedbateproject.azurewebsites.net/backend/api/'
//const KFCURL = 'https://kfc-sso.com'
const KFCURL = 'http://localhost:61348'

const URL = {
    randQuestURL: apiURL + 'question/randomquestion',
    sendMsgURL: apiURL + 'chat/postmessage',
    displayTelLogsURL: apiURL + 'log/displaytelemetrylogs',
    displayErrorLogsURL: apiURL + 'log/displayerrorlogs',
    deleteErrorLogsURL: apiURL + 'log/deletelog',
    publishAppURL: KFCURL + '/api/applications/publish',
    getQuestsURL: apiURL + 'question/getquestions',
    deleteQuestURL: apiURL + 'question/delete',
    addQuestURL: apiURL + 'question/add',
    getUserURL: apiURL + 'user/getuser',
    createChatURL: apiURL + 'chat/createchat',
    joinRandomChatURL: apiURL + 'chat/joinrandomchat',
    deleteGameSessionURL: apiURL + 'chat/deletegame',
    createTelemetryLogURL: apiURL + 'log/createtelemetrylogs',
    logoutURL: apiURL + 'sso/logout',
    postIPURL: apiURL + ''
}

export {
    URL,
    KFCURL
}
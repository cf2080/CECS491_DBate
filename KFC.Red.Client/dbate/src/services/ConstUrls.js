const apiURL = 'http://localhost:5000/api/'
//const apiURL = 'https://thedbateproject.azurewebsites.net/backend/api/'
const KFCURL = 'https://kfc-sso.com'

const URL = {
    randQuestURL: apiURL + 'question/randomquestion',
    sendMsgURL: apiURL + 'chat/postmessage',
    displayTelLogsURL: apiURL + 'telemetrylog/displaylogs',
    displayErrorLogsURL: apiURL + 'errorlog/displaylogs',
    deleteErrorLogsURL: apiURL + 'errorlog/deletelog',
    publishAppURL: KFCURL + '/api/applications/publish',
    getQuestsURL: apiURL + 'question/getquestions',
    deleteQuestURL: apiURL + 'question/delete',
    addQuestURL: apiURL + 'question/add',
    getUserURL: apiURL + 'user/getuser',
    createChatURL: apiURL + 'chat/createchat',
    joinRandomCharURL: apiURL + 'chat/joinrandomchat',
    deleteGameSessionURL: apiURL + 'chat/deletegame'
}

export {
    URL,
    KFCURL
}
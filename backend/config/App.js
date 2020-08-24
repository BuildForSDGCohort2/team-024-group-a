const appConfig = {
    APP_NAME: "swiftHealth"
};

/**
 * freezing the object so no data can be added
 * acting as enum
 * */
Object.freeze(appConfig);


//Exposing the object to other .js files
module.exports =  appConfig;
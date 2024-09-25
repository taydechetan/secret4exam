
const APPConfig = {
    API_URL: "https://www.secrets4exams.com/node",
    API_URLS: "https://www.secrets4exams.com/api",

};

const ApiEndPoints = {
    Login: `${APPConfig.API_URL}/login`,
    Register: `${APPConfig.API_URL}/register`,
    Faqq: `${APPConfig.API_URL}/faq`,
    ForgetPassword: `${APPConfig.API_URL}/forgetPassword`,
    CateList: `${APPConfig.API_URLS}/categories-list`,
    Home: `${APPConfig.API_URLS}/categories-list`,
    Popularq: `${APPConfig.API_URLS}/categories-list`,

};


export default ApiEndPoints;


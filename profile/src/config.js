const dev = {
    baseURL: 'http://localhost:4500',
    endPoint: {
        profile: '/src/assets/json-stub/profile.json'
    }
}

const prod = {
    baseURL: 'http://fe-blog-lazypanda-profile.s3.ap-south-1.amazonaws.com',
    endPoint: {
        profile: '/json-stub/profile.json'
    }
}

// const config = process.env.REACT_ENVIRONMENT === 'prod' ? prod : prod;
const config = dev;

export default {
    ...config
}
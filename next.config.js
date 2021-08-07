module.exports = {
    images: {
        domains: ['i.hizliresim.com', "s3.eu-central-1.amazonaws.com"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
    async redirects() {
        return [
            {
                source: '/magaza',
                destination: '/magaza/organik-gida',
                permanent: true,
            },
        ]
    },
    env: {
        REACT_APP_CLIENT_API_URL: 'http://ec2-3-121-160-112.eu-central-1.compute.amazonaws.com:7981/api'
    },
}
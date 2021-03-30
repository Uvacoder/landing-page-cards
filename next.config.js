module.exports = {
    async redirects() {
        return [
            {
                source: '/discord',
                destination: process.env.INVITE,
                permanent: true,
            },
            {
                source: "/streamticker",
                destination: "https://discord.com/api/oauth2/authorize?client_id=822117936251928586&permissions=3088&scope=bot",
                permanent: true
            }
        ]
    },
    target: "serverless"
}
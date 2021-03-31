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
                destination: "https://discord.com/api/oauth2/authorize?client_id=822117936251928586&permissions=3120&scope=bot",
                permanent: true
            },
            {
                source: "/streamticker/support",
                destination: "https://discord.gg/uPqm65TeTD",
                permanent: true
            },
        ]
    },
    target: "serverless"
}

const config = {
  port: 4000,
  jwt_secret_key: 'nguyengialuat',
  jwt_expire_access_token: 5, // 10 second
  jwt_expire_refresh_token: 5, // 1 hour
  initialDatabase: {
    access_tokens: [],
    refresh_tokens: [],
    users: [
      {
        username: 'admin',
        password: 'admin'
      }
    ],
    products: [
      {
        id: 1,
        name: 'Iphone'
      },
      {
        id: 2,
        name: 'Samsung'
      }
    ]
  }
}
export default config

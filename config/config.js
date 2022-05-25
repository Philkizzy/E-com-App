const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST ||
      'mongodb://' + (process.env.IP || 'localhost') + ':' +
      (process.env.MONGO_PORT || '27017') +
      '/mernproject',
    stripe_connect_test_client_id: '',
    stripe_test_secret_key: 'sk_test_51L3NdAAITjYHlqtOwkXHbXWTJ21NMMuiSfmvibcIPVQcid19uMjoFvZzyjS3qdJugWFHTy9M3rVNMQ3Pm2iubASd00DpAPv7zH',
    stripe_test_api_key: 'pk_live_51L3NdAAITjYHlqtO0mTmr6o9mouc5NVLLtXVKlt9jpEtVa1fYKHIKD80VNnzqLhTk0Srldx4AOciEXCH9tc5zoHx00SGyTlfWi'
  }
  
  export default config
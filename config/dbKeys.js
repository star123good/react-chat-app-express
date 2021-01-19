if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: 'mongodb://localhost:27017/whales-room-development' }; // Add your remote db connection string here
} else {
    module.exports = { mongoURI: 'mongodb://localhost:27017/whales-room-development' }; // Add your local db connection string here
}
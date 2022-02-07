import SocketIoClient from 'socket.io-client';
const server = process.env.NODE_ENV === 'development' ? 'http://localhost:7000' : 'https://ary-chat-app.herokuapp.com/';
const SocketIo = SocketIoClient(server);

console.log('this is server: ', process.env.NODE_ENV)
export default SocketIo;
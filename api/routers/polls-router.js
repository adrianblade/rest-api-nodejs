/**
 * Created by Adrian on 15/10/2017.
 */
const pollRouter = require( 'express' ).Router();

const polls = [{
    id: 1,
    question: "who is your Favorite?"
}];

pollRouter.get('/', (request,response) => {
    response.json(polls);
});

pollRouter.post('/', (request,response) => {
    const poll = request.body;
    console.log("Poll recieved, poll");
    polls.push(poll);
    response.json(poll);
});

module.exports = pollRouter;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import { showModal } from 'store/actions/Modal';
import InfoModal from './modal/InfoModal';
import Button from './Button';
// actions

const lorem = `
Automatically, all of these beautiful, beautiful things will happen. If you don't think every day is a good day - try missing a few. You'll see. Isn't it great to do something you can't fail at?
You need to have a very firm paint to do this. Little trees and bushes grow however makes them happy. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen.
There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Don't hurry. Take your time and enjoy. You have to make almighty decisions when you're the creator. It looks so good, I might as well not stop.
Don't be bashful drop me a line. Think about a cloud. Just float around and be there. In your imagination you can go anywhere you want. Imagination is the key to painting. Don't kill all your dark areas - you need them to show the light. Working it up and down, back and forth.
We'll play with clouds today. All you have to learn here is how to have fun. Poor old tree. If there's two big trees invariably sooner or later there's gonna be a little tree. We'll take a little bit of Van Dyke Brown.
Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. This is your world, whatever makes you happy you can put in it. Go crazy. Just a little indication. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. Do an almighty painting with us.
`;

function Modal() {
    // example redux usage
    const dispatch = useDispatch();
    const { show, title, content } = useSelector(state => state.Modal);

    const triggerModal = () => {
        dispatch(showModal(true, 'Testing out the modal', lorem));
    };
    const resetModal = () => {
        dispatch(showModal(false, '', ''));
    };

    return (
        <div>
            <Button onClick={triggerModal} variant="primary">
                Show InfoModal
            </Button>
            <InfoModal isOpen={show} onClose={resetModal} title={title} content={content} buttonText="Got it!" />
        </div>
    );
}

export default Modal;

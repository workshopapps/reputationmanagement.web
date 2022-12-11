import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import useAppContext from '../../hooks/useAppContext';

const ChatModal = () => {
  const chatboxEl = useRef();
  const { setChatModalActive } = useAppContext();
  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  const email = localStorage.getItem('auth') || 'user@mail.com';

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: 2,
        name: `Customer`,
        photoUrl: "https://i1.wp.com/www.neoparent.be/wp-content/uploads/2018/04/cropped-default_avatar-1.png?ssl=1",
        email: email,
        role: 'default',
      });

      const otherUser = new Talk.User({
        id: '1',
        name: 'Idaresit',
        email: 'idaresit@gmail.com',
        welcomeMessage: 'Welcome to Repute! How can I help you',
        photoUrl: "https://talkjs.com/images/avatar-2.jpg",
        role: 'admin',
      });

      const session = new Talk.Session({
        appId: 'tpjbDjwE',
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return (
    <StyledChatModal>
      <p onClick={() => setChatModalActive(false)} style={{ cursor: 'pointer'}}>close</p>
      <div ref={chatboxEl}></div>
    </StyledChatModal>
  )
}
const StyledChatModal = styled.div`
  bottom: 20px;
  right: 20px;
  position: fixed;
  width: 400px;
  height: 600px;
  border-radius: 10px;
  z-index: 4;
  box-shadow: -20px -20px 50px 10px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.2);
  p{
    align-self: flex-end;
    font-size: 18px;
    font-weight: 300;
    padding: 5px 10px;
  }
  div{
    height: 600px;
  }
`;
export default ChatModal;
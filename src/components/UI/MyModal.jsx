import React from 'react';
import cl from '../styles/App.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;

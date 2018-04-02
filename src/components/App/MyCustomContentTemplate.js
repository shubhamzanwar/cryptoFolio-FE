import React from 'react';
import Alert from 'react-s-alert';

const MyCustomContentTemplate = ({
  id,
  classNames,
  styles,
  message,
  customFields,
  handleClose,
}) => {
  const handleConfirm = () => {
    customFields.onClick();
    Alert.close(id);
  };
  return (
    <div className={classNames} id={id} style={{ ...styles, zIndex: 100 }}>
      <div className="s-alert-box-inner">
        {message}
      </div>
      <button className="customButton" style={customFields.button ? {} : { display: 'none' }} onClick={handleConfirm.bind(this)}>Login</button>
      <span className="s-alert-close" onClick={handleClose} />
    </div>
  );
};

export default MyCustomContentTemplate;

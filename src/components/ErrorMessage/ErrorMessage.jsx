

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={styles['error-message']}>
      <p>Sorry, something go wrong, please try again</p>
    </div>
  );
}

export default ErrorMessage;

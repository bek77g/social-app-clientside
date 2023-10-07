import { CSSTransition } from 'react-transition-group';
import './UniversalTransition.css';

const UniversalTransition = ({
  in: inProp,
  timeout,
  transitionType,
  className,
  children,
}) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={timeout}
      classNames={transitionType}
      unmountOnExit>
      <div className={`animated-component ${className}`}>{children}</div>
    </CSSTransition>
  );
};

export default UniversalTransition;

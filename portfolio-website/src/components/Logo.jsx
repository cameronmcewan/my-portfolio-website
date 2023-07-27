// import React from 'react';
import '../styles/components/logo.css';

// export default function LogoAnimation() {
//     return (
//         <div class="logo">
//             <div class="letter m">CAMM.DEV</div>
//             <div class="letter c">C</div>
//         </div>
//     )

// };


import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styles from '../styles/components/logo.css'; // import styles

const IntroText = () => {
  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0, transform: 'translate3d(-40px,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    delay: 200,
  });

  useEffect(() => {
    set(true);
  }, []);

  return transitions((props, item) =>
    item ? (
      <animated.div style={props} className={styles.introText}>
        Hi, I'm Cameron McEwan and I do front-end development
      </animated.div>
    ) : null
  );
};

const Logo = () => {
  const [items, setItems] = useState(['CAM', 'M', 'DEV']);
  const [displayText, setDisplayText] = useState(false);

  const transitions = useTransition(items, {
    from: { opacity: 0, transform: 'translate3d(-40px,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(-40px,-40px,0)' },
    delay: 200,
    onRest: () => setDisplayText(true),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems([]);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.items}>
      {transitions((props, item) => (
        <animated.div style={props} className={styles.item}>
          {item}
        </animated.div>
      ))}
      {displayText && <IntroText />}
    </div>
  );
};

export default Logo;

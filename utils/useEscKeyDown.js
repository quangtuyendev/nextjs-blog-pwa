import { useCallback, useEffect } from 'react';

function useEscKeyDown(callback) {
  const escFunction = useCallback(
    ({ keyCode }) => {
      if (keyCode === 27) {
        // Press Enter
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    window.addEventListener('keydown', escFunction);
    return () => {
      window.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);
}

export default useEscKeyDown;

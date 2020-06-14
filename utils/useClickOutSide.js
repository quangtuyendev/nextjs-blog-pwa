import { useCallback, useEffect } from 'react';

function useClickOutSide(refMain, refSub, callback) {
    const handleClickOutSide = useCallback(
        ({ target }) => {
            if (refMain.current && !refSub.current.contains(target)) {
                callback();
            }
        }, [callback, refMain, refSub]
    );
    useEffect(() => {
        window.addEventListener('click', handleClickOutSide);
        return () => {
            window.removeEventListener('click', handleClickOutSide);
        }
    }, [handleClickOutSide])
}

export default useClickOutSide;
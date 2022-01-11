import { useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';

const modalRot = document.getElementById('modal');

const Modal = ({ children }) => {
    const elRef = useRef(null);
    if(!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        modalRot.appendChild(elRef.current);
        return () => modalRot.removeChild(elRef.current);
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;
import { useEffect } from 'react';

const TitleChange = () => {
    useEffect(() => {
        const handleVisibilityChange = () => {
            document.hidden 
            ? document.title = "Lorem | You coming back? 🎉" 
            :  document.title = "Lorem | Multimedia Designer!";
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
};

export default TitleChange;
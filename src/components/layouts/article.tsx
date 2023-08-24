import React, { useEffect, useState } from 'react';

interface Props {
    children?: React.ReactNode | React.ReactNode[];
    title?: string;
}

const Main: React.FC<Props> = ({ children, title }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Fade-in effect when component mounts
        setOpacity(1);

        // Fade-out effect before component unmounts
        return () => {
            setOpacity(0);
        };
    }, []);

    return (
        <section 
            className='md:w-[550px] w-[375px] bg-vs-bg' 
            style={{ transition: 'opacity 500ms', opacity: opacity }}
        >
            {children}
        </section>
    );
}

export default Main;

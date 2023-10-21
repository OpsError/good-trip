import React, { FC } from 'react';
import { IPlaces } from '../../types/types';

interface InfoProps {
    city: IPlaces
}
const Info: FC<InfoProps> = (city) => {
    return(
        <section className='info'>
            <h2>HelloWorld!</h2>
        </section>
    );
}

export default Info;
import { useState } from 'react';

const TopBanner = () => {
    const [TB, setTB] = useState('');
    return (
        <div className={'TopBanner ' + TB}>
            <div div className='inner' >
                <h2>dddddd<span>dd</span></h2>
                <p>zzzzzz</p>
                <i className='xi-close' onClick={() => setTB('on')}></i>
            </div >
        </div >
    )

}


export default TopBanner;
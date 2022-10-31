import { useState } from 'react';

const TopBanner = () => {
    const [TB, setTB] = useState('');
    return (
        <div className={'TopBanner ' + TB}>
            <div div className='inner' >
                <h2>우리 경찰은<span>  ' 실력 있고 당당한 경찰, 국민이 신뢰하는 안심 공동체 '  </span>를 지향점으로 , 국민 누구나 걱정과 불안 없이 안심하고 생활할 수 있는 사회를 만들어 갈 것을 약속합니다.</h2>
                <i className='xi-close' onClick={() => setTB('on')}></i>
            </div >
        </div >
    )

}


export default TopBanner;
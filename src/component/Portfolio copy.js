import React, { useRef, useState } from 'react';

const Portfolio = () => {
    const [idxn, setIdxn] = useState();
    const MS = useRef(null);
    const MAINSLIDRE = [
        { id: 1, tit: "아파트입주청소", con: "신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다." },
        { id: 2, tit: "이사/상가청소", con: "오랫동안 누적된 공간의 묵은 때, 찌든 때, ", des: "신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다. 입추청소를 맡기시면 유해성분 제거하고 청결한 환경을 만드실 수 있습니다." },
        { id: 3, tit: "사무실청소", con: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다." }
    ];


    return (
        <section className='Portfolio'>
            <ul>
                <li className='left'>
                    {/* <strong><a href="010-939-4845">010-939-4845</a></strong> */}
                    <h2 className='inner'>
                        국민과 소통하는 <br />따뜻하고 믿음직한 경찰로<br />국민과 함께 하겠습니다.
                    </h2>

                </li>
                <li className='right'>

                    {/* <strong><a href="010-939-4845">010-939-4845</a></strong> */}
                    <h2 className=''>
                        국민과 소통하는 <br />따뜻하고 믿음직한 경찰로<br />국민과 함께 하겠습니다.
                    </h2>


                </li>
                <li className='right'>

                    {/* <strong><a href="010-939-4845">010-939-4845</a></strong> */}
                    <h2 className=''>
                        국민과 소통하는 <br />따뜻하고 믿음직한 경찰로<br />국민과 함께 하겠습니다.
                    </h2>


                </li>
                <li className='right'>

                    {/* <strong><a href="010-939-4845">010-939-4845</a></strong> */}
                    <h2 className=''>
                        국민과 소통하는 <br />따뜻하고 믿음직한 경찰로<br />국민과 함께 하겠습니다.
                    </h2>


                </li>
            </ul>
        </section >
    )
}



export default Portfolio
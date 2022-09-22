import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const PTF = [
    { id: 1, title: "경찰민원포털" },
    { id: 2, title: "교통민원24" },
    { id: 3, title: "아동,여성,청소년\n지원" },
    { id: 4, title: "범죄경력회보서\n발급" },
    { id: 5, title: "승진및채용" },
    { id: 6, title: "내사건검색" },
    { id: 7, title: "의무경찰\n홈페이지" },
    { id: 8, title: "경찰박물관" },
    { id: 9, title: "총포 화약\n 안전관리" },
]

// 배열 메소드를 공부하기... 검색하기... 스프레드 연산자...
const NPTF = [...PTF, PTF[0]].splice(1, PTF.length);

const MainContent = () => {
    const LS = useRef();
    const RS = useRef();

    const [LSS, setLSS] = useState();
    const [RSS, setRSS] = useState();

    useEffect(() => {
        setLSS(LS.current);
        setRSS(RS.current);
    }, [])

    return (
        <section className="MainContent csc">
            <div className="container">
                {/* <div className="left">
                    <div className="slide">
                        <Slider
                            fade={true}
                            ref={LS}
                            asNavFor={RSS}
                            arrows={false}
                        >
                            {
                                PTF.map(content => {
                                    return (
                                        <figure key={content.id}>
                                            <div className="box">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/main_m0" + content.id + ".jpg"} alt="" />
                                            </div>
                                            <div className='des'>{content.title}</div>
                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div> */}
                <div className="right">
                    <h2>대민서비스</h2>
                    <p></p>


                    <div className="slide inner">
                        <Slider slidesToShow={6} className="right_slide"
                            ref={LS}
                            asNavFor={LSS}
                            arrows={false}
                        >
                            {
                                NPTF.map(content => {
                                    return (
                                        <figure key={content.id}>
                                            <div className="box">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/section1_" + content.id + ".png"} alt="" />
                                            </div>
                                            <div className='des'>{content.title}</div>
                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                        {/* <div className="arrows">
                            <i className='xi-angle-left' onClick={() => LS.current.slickPrev()}></i>
                            <i className='xi-angle-right' onClick={() => LS.current.slickNext()}></i>
                        </div> */}
                        <div className="slideArrows">
                            <button onClick={() => LS.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                            <button onClick={() => LS.current.slickNext()}><i className='xi-arrow-right'></i></button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default MainContent;
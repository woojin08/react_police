import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const SLIDE = [
    { id: 1, content: "실력 있고 당당한 경찰\n국민이 신뢰하는 안심 공동체", desc: "KOREAN NATIONAL POLICE AGENCY" },
    { id: 2, content: "국민의 신뢰,인권보호,공정한 수사를 위해\n경찰개혁도 함께 합니다.", desc: "Competent and Confident Police, a Safe Community with Public Trust", link: "/", title: "New path created" },
    { id: 3, content: "가장 안전한 나라\n존경과 사랑받는 경찰", desc: "", link: "/", title: "In my new world" },
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        //dots: true,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
    }
    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <p className='tit'>{slide.content}</p>
                                    <div className='desc'>{slide.desc}</div>
                                    {/* <a href={slide.link} target="_blank" className='cbtn'>
                                        VIEW MORE
                                        <i className='xi-angle-right'></i>
                                    </a> */}
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className="slideNum">
                0{IDX + 1}<span> / 0{SLIDE.length}</span>
            </div>
            {/* <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-angle-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-angle-right'></i></button>
            </div> */}
            <ul className="slideDot">
                {
                    SLIDE.map((dot, idx) => <li key={dot.id}
                        onClick={() =>
                            mainSlide.current.slickGoTo(idx)
                        }
                        className={idx == IDX ? 'on' : ''}
                    >
                        {dot.id}</li>)
                }
            </ul>
        </section>
    )
}

export default MainVisual;
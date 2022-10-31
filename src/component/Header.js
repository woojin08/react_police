import { useEffect, useRef, useState } from "react";
import TopBanner from './TopBanner';
import Nav from './Nav';

const Header = () => {
    const [TG, setTG] = useState(false);
    const [TGS, setTGS] = useState(false);
    const HL = useRef();
    const [value, setValue] = useState('')
    const input = useRef(null)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let sct = window.scrollY;
            sct > 0
                ? HL.current.classList.add('on')
                : HL.current.classList.remove('on')

        })
    }, [])

    return (
        <header className="Header" ref={HL}>
            <TopBanner />


            <div className="hd_wrap">
                <h1>
                    <a href="/">
                        경찰청
                    </a>
                </h1>
                <h2>
                    <a href="/">
                    </a>
                </h2>
                <p className="tt">국기 상징 </p>
                <p className="bt">알아보기</p>
                <Nav />

                <div className="top_service">
                    <ul className="project">
                        <li><a href="#!">경찰전자우편</a></li>
                        <li><a href="#!">사이트맵</a></li>
                    </ul>
                    <div className={'lang ' + (TG ? 'on' : '')}>
                        <strong onClick={() => setTG(!TG)}><i className="xi-globus"></i> KOR <i className="xi-angle-down arrow"></i></strong>
                        <ul className="lang_box">
                            <li><a href="#!">KOR</a></li>
                            <li><a href="#!">ENG</a></li>
                            <li><a href="#!">CHN</a></li>
                        </ul>
                    </div>
                    <div className={`top_search ${TGS ? 'on' : ''}`}>
                        <strong onClick={() => setTGS(!TGS)}><i className="xi-search"></i></strong>
                        <div className="search_box">

                            <form action="#!">

                                <input type="text" placeholder="검색어를 입력하세요" onChange={(e) => {
                                    setValue(e.target.value)
                                }} value={value} ref={input} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
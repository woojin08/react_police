import { useEffect, useRef, useState } from "react";
import TopBanner from './TopBanner';
import Nav from './Nav';

const Header = () => {
    const [TG, setTG] = useState(false);
    const [TGS, setTGS] = useState(false);
    const HL = useRef();
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
            {/* <TopBanner /> */}


            <div className="hd_wrap">
                <h1>
                    <a href="/">
                        경찰청
                    </a>
                </h1>
                <Nav />
                {/* <nav className="Gnb inner">
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={it.link}>{it.menu}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav> */}
                <div className="top_service">
                    <ul className="project">
                        <li><a href="#!">주요프로젝트</a></li>
                        <li><a href="#!">IR</a></li>
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
                                <input type="text" placeholder="검색어를 입력하세요" required />
                                <button>
                                    <i className="xi-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
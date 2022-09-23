import { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const UURL = [
    {
        id: 1, url: "0I4PdwvGwPI", title: "🚨말 없는 112 신고 캠페인 똑똑🚨", des: "숫자 버튼을 눌러 말하기 곤란한 상황임을 알려주세요."
    },
    { id: 2, url: "ChYcYxWrYYY", title: "시민들이 만들어 준 기적 ✨", des: "#모세의기적 #경찰청" },
]

const Promotion = () => {
    const MOVIE = useRef();

    const [url, setUrl] = useState('0I4PdwvGwPI');
    const [tit, setTit] = useState(0);
    const [auto, setAuto] = useState(0);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: auto,
            loop: 1,
            controls: 1,
            showinfo: 0,
            rel: 0,
            // autohide: 1,
            playsinline: 1,
            mute: 1,
            //playlist: 'raw3Nu0_mBQ',
            //paused: 1,
        },

    };



    return (
        <section className="Promotion mcm" ref={MOVIE}>
            <h2>경찰청 SNS</h2>
            <figure>
                <img src={process.env.PUBLIC_URL + "/assets/images/ico_sns.png"} alt="" /></figure>
            <p></p>
            <div className="container">
                <div className='movie' id='player' >
                    <YouTube videoId={url} opts={opts} className='u' />
                    <div className="movie_title">
                        {
                            UURL[tit].title
                        }
                    </div>
                </div>
                <ul className="des">
                    {
                        UURL.map((you, idx) => {
                            return (
                                <li key={you.id} onClick={() => {
                                    setUrl(you.url);
                                    setTit(idx);
                                    setAuto(1);
                                }} className={tit === idx ? "on" : ""}
                                >

                                    <div className='tit'>{you.title}</div>
                                    <p>{you.des}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section >
    )
}
export default Promotion;
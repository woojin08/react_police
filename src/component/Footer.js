import React from 'react'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="ft_top">
                <div className="inner">
                    <ul className="left">
                        <li><a href="#!">개인정보처리방침</a></li>
                        <li><a href="#!">저작권정책</a></li>
                        <li><a href="#!">공공데이터 이용정책</a></li>
                    </ul>
                    <div className="right">

                    </div>
                </div>
            </div>
            <div className="ft_bottom">
                <div className="inner">
                    <div className="left">
                        <li><address>(우)03739 서울특별시 서대문구 통일로 97</address></li>

                        <span>COPYRIGHT &copy;2018 NATIONAL POLICE AGENCY1</span>
                        <p>본 홈페이지에 게시판 이메일 주소가 자동 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 처벌됨을 유념하시기 바랍니다.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
const PTF = [
    { id: 1, title: "대한민국 안전大전환", dec: "2022년 8월 17일~10월14일", link: "/a" },
    { id: 2, title: "제2회 올바른 112신고 공모전", dec: "'올바른 112신고 공보전'\n누리집으로 이동합니다.", link: "/a" },
    { id: 3, title: "숨겨진 불법무기류, 지금신고하세요", dec: "이미지를 클릭하시면 자세한 내용을\n확인", link: "/a" },
    { id: 4, title: "부패·공익신고", dec: "부패·공익신고 제도 및 신고자 보호\n제도", link: "/a" },
]


const Portfolio = () => {

    return (
        <section className="Portfolio pfp" >
            <h2>국민소통</h2>

            <div className="inner">
                {
                    PTF.map(content => {
                        return (
                            <figure key={content.id}>
                                <div className="box">
                                    <figure>
                                        <img src={process.env.PUBLIC_URL + "/assets/images/port1_" + content.id + ".gif"} alt="" />
                                    </figure>

                                    <div className="tit">{content.title}</div>
                                    <div className="dec">{content.dec}</div>
                                    <a href={content.link} className="cbtn">자세히보기</a>
                                </div>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;
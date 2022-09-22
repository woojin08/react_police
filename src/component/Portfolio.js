const PTF = [
    { id: 1, title: "TWIGGY KNIT CARDIGAN (LIGHT PINK)", dec: "159,000원", link: "/a" },
    { id: 2, title: "TWIGGY KNIT CARDIGAN (LIGHT BLUE)", dec: "159,000원", link: "/a" },
    { id: 3, title: "BERRY POST SWEAT SHIRT (CREAM)", dec: "77,000원", link: "/a" },
    { id: 4, title: "BERRY POST SWEAT SHIRT (CREAM)", dec: "77,000원", link: "/a" },
]


const Portfolio = () => {

    return (
        <section className="Portfolio pfp" >
            <h2>BEST</h2>

            <div className="inner">
                {
                    PTF.map(content => {
                        return (
                            <figure key={content.id}>
                                <div className="box">

                                    <img src={process.env.PUBLIC_URL + "/assets/images/port1_" + content.id + ".gif"} alt="" />

                                </div>
                                <div className="tit">{content.title}</div>
                                <div className="dec">{content.dec}</div>
                                <a href={content.link} className="cbtn">자세히보기</a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;
const DB = [
    {
        id: 1,
        content: "알림/소식",
        link: "/s1",
        submenu: [
            { content: "알림", link: "/1" },
            { content: "소식", link: "/2" },
            { content: "정책홍보실", link: "/3" },
            { content: "경찰청 인권위원회", link: "/4" },
        ]
    },
    {
        id: 2,
        content: "소통/공감",
        link: "/s1",
        submenu: [
            { content: "생활정보", link: "/1" },
            { content: "적극행정", link: "/2" },
            { content: "소통게시판", link: "/3" },
            { content: "추모관", link: "/4" },

        ]
    },
    {
        id: 3,
        content: "신고/지원",
        link: "/s1",
        submenu: [
            { content: "범죄신고/상담", link: "/1" },
            { content: "사이버안전지킴이", link: "/2" },
            { content: "안심서비스", link: "/3" },
            { content: "치안정보/지원", link: "/4" },

        ]
    },
    {
        id: 4,
        content: "정보공개",
        link: "/s1",
        submenu: [
            { content: "정보공개제도", link: "/1" },
            { content: "재정현황", link: "/2" },
            { content: "사전정보공표", link: "/3" },
            { content: "공공데이터", link: "/4" },

        ]
    },
    {
        id: 4,
        content: "법령/정책",
        link: "/s1",
        submenu: [
            { content: "법령정보", link: "/1" },
            { content: "국회정보공개", link: "/2" },
            { content: "규제개혁", link: "/3" },

        ]
    },
    {
        id: 5,
        content: "기관소개",
        link: "/s1",
        submenu: [
            { content: "열린청장실", link: "/1" },
            { content: "조직안내", link: "/2" },
            { content: "경찰의이해", link: "/3" },
            { content: "경찰역사", link: "/4" },

        ]
    },
]


const Nav = () => {
    return (
        <nav className="Gnb w1200">
            <ul>
                {
                    DB.map((it, idx) => <li key={idx}>
                        <a href={it.link}>{it.content}</a>
                        <ul className='smenu'>
                            {
                                it.submenu.map((smenu, idx) => <li key={idx}>
                                    <a href={smenu.link}>{smenu.content}</a>
                                </li>)
                            }
                        </ul>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default Nav;
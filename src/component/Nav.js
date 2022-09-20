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
            { content: "smenu031", link: "/1" },
            { content: "smenu032", link: "/2" },
            { content: "smenu033", link: "/3" },

        ]
    },
    {
        id: 4,
        content: "정보공개",
        link: "/s1",
        submenu: [
            { content: "smenu031", link: "/1" },
            { content: "smenu032", link: "/2" },
            { content: "smenu033", link: "/3" },

        ]
    },
    {
        id: 4,
        content: "법령/정책",
        link: "/s1",
        submenu: [
            { content: "smenu031", link: "/1" },
            { content: "smenu032", link: "/2" },
            { content: "smenu033", link: "/3" },

        ]
    },
    {
        id: 5,
        content: "기관소개",
        link: "/s1",
        submenu: [
            { content: "smenu031", link: "/1" },
            { content: "smenu032", link: "/2" },
            { content: "smenu033", link: "/3" },

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
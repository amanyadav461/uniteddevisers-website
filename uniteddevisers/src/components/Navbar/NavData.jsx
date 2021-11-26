import firstSubListImg from "../../img/NavSubListImage.jpg"
const NavData = [
    {
        title: "Title 1",
        url: "/",
        dropdown:{
            listImage: firstSubListImg,
            listImageTitle: "this is title 1",
            subList: [
                [
                    {
                        sl_title: "Title Hai",
                        sl_data: [
                            {
                                sldTitle: 'Subtitle 1',
                                url: '',
                            },
                            {
                                sldTitle: 'Subtitle 2',
                                url: '',
                            },
                            {
                                sldTitle: 'Subtitle 3',
                                url: '',
                            }
                        ]
                    }
                ],
                [
                    {
                        sl_title: "Yeh Title",
                        sl_data: [
                            {
                                sldTitle: 'Subtitle 1',
                                url: '',
                            },
                            {
                                sldTitle: 'Subtitle 2',
                                url: '',
                            },
                            {
                                sldTitle: 'Subtitle 3',
                                url: '',
                            }
                        ]
                    }
                ]
            ]
        },
    },
    {
        title: "Title 2",
    },
    {
        title: "Title 3",
    },
    {
        title: "Title 4",
    },
    {
        title: "Title 5",
    },
];

export default NavData;
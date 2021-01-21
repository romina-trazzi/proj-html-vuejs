let app = new Vue ({
    el: "#app",
    data: {    
        top_nav: {
            hours: "Open Hours: Mon - Sat - 9:00 - 18.00",
            phone: "+1(305) 1234-5678",
            email: "hello@example.com"
        },

        bottom_nav: [
            "HOME", 
            "ABOUT", 
            "SERVICES", 
            "PRICING", 
            "BLOG",
        ],

        central_message: {
            first_row: "Successful strategies require data analysis, creativity and customer focus, taking",
            second_row: "advantage of the latest technologies to offer excellent services."
        },

        cards: [
            {
                first_card: {
                    card_icon: "Da fare",
                    card_title: "Human Capital",
                    card_message: "Human business Harness the power of technology to improve the way people work"
                },

            },
            {
                second_card: {
                    card_icon: "Da fare",
                    card_title: "Core Business",
                    card_message: "It takes innovative approaches to transform, modernize, and run existing platforms"
                },
            },
            {
                third_card: {
                    card_icon: "Da fare",
                    card_title: "Perfomance",
                    card_message: "Achieving maximum impact and value from investments in finance and supply chain"
                }
            }
        ]

        
    },
    
})
    
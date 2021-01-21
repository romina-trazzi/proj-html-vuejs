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
        }

        },
    
})
    
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
                    card_title: "Human Capital",
                    card_message: "Humanizing business: Harness the power of technology to improve the way people work."
                },

            },
            {
                second_card: {
                    card_title: "Core Business",
                    card_message: "It takes innovative approaches to transform, modernize, and run existing platforms."
                },
            },
            {
                third_card: {
                    card_title: "Perfomance",
                    card_message: "Achieving maximum impact and value from investments in finance and supply chain."
                }
            }
        ],

        tasks: [
            {
                first_task: {
                    task_title: "Tradition",
                    task_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
            },
            {
                second_task: {
                    task_title: "Security",
                    task_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
            },
            {
                third_task: {
                    task_title: "Certificate",
                    task_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
            },
            {
                fourth_task: {
                    task_title: "Expertise",
                    task_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
            }
            
        ],

        services: [
            {
                first_service: {
                    service_title: "Audit & Assurance",
                    service_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
            },
            {
                second_service: {
                    service_title: "Financial Advisory",
                    service_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
            },
            {
                third_service: {
                    service_title: "Analytics and M&A",
                    service_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
            },
            {
                fourth_service: {
                    service_title: "Middle Marketing",
                    service_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
            },

            {
                fifth_service: {
                    service_title: "Legal Consulting",
                    service_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
            },

            {
                fourth_service: {
                    service_title: "Regulatory Risk",
                    service_message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
            }
            

        ],



        
    },
    
})
    
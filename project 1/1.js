var user = [
    {
        username: "kailas@gmail.com",
        services: [
            "Vehicle Monitoring",
            "Online Booking",
            "Safety Inspection"
        ]
    },
    {
        username: "academia@gmIl.com",
        services: [
            "Safety Infection",
            "Vehicle Monitoring",
            "Online Booking",
        ]
    }
]


<script>
var user = [
    {
        username: "kailas@gmail.com",
        services: [
            "Vehicle Monitoring",
            "Online Booking",
            "Safety Inspection"
        ]
    },
    {
        username: "academia@gmIl.com",
        services: [
            "Safety Infection",
            "Vehicle Monitoring",
            "Online Booking",
        ]
    }
]
    var uname = localStorage.getItem("textvalue")
    document.getElementById("hehe").innerHTML = uname;
    i = 0 ;
    if (uname == user.username[i])
        console.log(user.services);
    i =+ 1 ;
</script>
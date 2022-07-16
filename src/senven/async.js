function drink() {
    setTimeout(() => {
        nice()
        setTimeout(() => {
            nice()
            setTimeout(() => {
                nice()
                setTimeout(() => {
                    nice()
                    setTimeout(() => {
                        nice()
                        setTimeout(() => {
                            nice()
                        }, 3000)
                    }, 3000)
                }, 3000)
            }, 3000)
        }, 3000)
    }, 3000)
}

const nice = () => {
    console.log("真好喝")
}

drink()


// $.ajax({
//     success: function (res) {
//         $.ajax({
//             success: function(res) {
//                 $.ajax({
//                     success: function(res) {
                        
//                     }
//                 })
//             }
//         })
//     }
// });




var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


$(document).ready(function() {

    $(".submitButton").on("click", function(e) {
        e.preventDefault()
        if($("#todoField").val().length > 0){
            $("#lista").append('<input type="checkbox" class="item">')
                    .append('<label class="todoItem">'+$("#todoField").val()+'</label> <br>')
        }
        $("#todoField").val("Next Todo")
    })

    $(".clearButton").on("click", function(e) {
        e.preventDefault()
        $(".item").each(function(){
            $(this).prop('checked', false)
        }
        )
    })

    $(".markAllButton").on("click", function(e) {
        e.preventDefault()
        $(".item").each(function(){
            $(this).prop('checked', true)
        }
        )
        

        console.log("Marked")
    })

    $(".deleteButton").on("click", function(e) {
        e.preventDefault()
        $("#lista").remove()
        console.log("EGGFSDGFSD")
    })
})

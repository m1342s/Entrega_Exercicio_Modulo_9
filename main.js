$(document).ready(function () {
    $(".btn").click(function(){
        $("form").on("submit",function(e){
            e.preventDefault()
            const nomeTarefa=$("#tarefa").val()
            const novaTarefa=$("<li></li>")
        $(`<input class="desc" value=${nomeTarefa}>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo("ul")
        $(".desc").click(function() {
            $(".desc").css("text-decoration","line-through")
        })
        })
    })
})
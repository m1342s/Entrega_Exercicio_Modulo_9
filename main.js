console.log("oi")
$(document).ready(function () {
    $(".btn").click(function(){
        $("form").on("submit",function(e){
            e.preventDefault()
            const nomeTarefa=$("#tarefa").val()
            console.log(nomeTarefa)
            const novaTarefa=$("<li></li>")
        $(`<input value=${nomeTarefa}>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo("ul")
        })
    })
})
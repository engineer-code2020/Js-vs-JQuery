
// document.getElementById("demo").innerHTML =
// "Screen Width: " + screen.width;
// document.getElementById("demo2").innerHTML =
// "Screen Width: " + screen.height;
// document.getElementById("demo3").innerHTML =
// "Screen Width: " + screen.availWidth;

let url_json=""
if (navigator.onLine==true){url_json="https://api.jsonbin.io/b/5de28d9ee6a7ea19e61db290/4"}else{url_json="../dat.json"}
$(function(){
    $(window).on("load",function(){
        $(".lds-roller").fadeOut(1000)
    })
    $(window).scroll(function(){
        
        if($(this).scrollTop() == 0){
            $("#to_up").hide()

        }else{$("#to_up").show()
    }

$(".nav-item").click(function(el){
    let actv_arr=$(".nav-item")

    for(let it of actv_arr){
        $(it).removeClass("active")
    }
    $(el.target).parent().addClass("active")

})
    })
    $("#to_up").click(function(){
        $("html,body").animate(
            {scrollTop:0},800
        )
    })
    



    $(window).load(url_json, function(responseTxt, statusTxt, xhr){
        
        if(statusTxt == "success"){
        let cont_txt=""
        let data_arr=JSON.parse(responseTxt)
        console.log(data_arr)
        for(let item of data_arr[0].data_obj){
            cont_txt +=`<section id="${item.id}">
            <div class="container">
                <h2 class="page-header col-8 col-md-4">${item.title}</h2>
                <div class="row">
                  <div class="js-code col-md-5">
                      <div class="form-group">
                          <label for="exampleFormControlTextarea1">Javascript</label>
                          <textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jscode}</textarea>
                      </div>
                  </div>
                  <div class="jq-code col-md-5">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Jquery</label>
                        <textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jqcode}</textarea>
                      </div>
                  </div>
                </div>
            </div>
        </section>`
        $("#main_content").html(cont_txt)}
        for(let item of data_arr[0].data_obj){
        if(item.type =="3"){
            $("#class .js-code  label").after('<br><h6>Add Class</h6>')
            $("#class .jq-code  label").after('<br><h6>Add Class</h6>')
            let class_js=`<h6>Remove Class</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jscode2}</textarea>`
            let class_jq=`<h6>Remove Class</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jqcode2}</textarea>`
            $("#class .js-code  textarea").after(class_js)
            $("#class .jq-code  textarea").after(class_jq)

        }}
        for(let item of data_arr[0].data_obj){
            if(item.type =="4"){
                $("#attr .js-code  label").after('<br><h6>Set Attr</h6>')
                $("#attr .jq-code  label").after('<br><h6>Set Attr</h6>')
                let class_js=`<h6>Get Attr</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jscode4}</textarea>`
                let class_jq=`<h6>Get Attr</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jqcode4}</textarea>`
                $("#attr .js-code  textarea").after(class_js)
                $("#attr .jq-code  textarea").after(class_jq)
    
            }}
            for(let item of data_arr[0].data_obj){
                if(item.type =="5"){
                    $("#style .js-code  label").after('<br><h6>Set Style</h6>')
                    $("#style .jq-code  label").after('<br><h6>Set Style</h6>')
                    let class_js=`<h6>Get Style</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jscode5}</textarea>`
                    let class_jq=`<h6>Get Style</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jqcode5}</textarea>`
                    $("#style .js-code  textarea").after(class_js)
                    $("#style .jq-code  textarea").after(class_jq)
        
                }}
                for(let item of data_arr[0].data_obj){
                    if(item.type =="6"){
                        $("#event .js-code  label").after('<br><h6>First Method</h6>')
                        $("#event .jq-code  label").after('<br><h6>First Method</h6>')
                        let class_js=`<h6>other Method</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jscode6}</textarea>`
                        let class_jq=`<h6>other Method</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jqcode6}</textarea>`
                        $("#event .js-code  textarea").after(class_js)
                        $("#event .jq-code  textarea").after(class_jq)
            
                    }}
                for(let item of data_arr[0].data_obj){
                    if(item.type =="1"){
                        $("#ajax .js-code  label").after('<br><h6>Get Data</h6>')
                        $("#ajax .jq-code  label").after('<br><h6>Get Data</h6>')
                        let class_js=`<h6>Post Data</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jscode1}</textarea>`
                        let class_jq=`<h6>Post Data</h6><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3">${item.jqcode1}</textarea>`
                        $("#ajax .js-code  textarea").after(class_js)
                        $("#ajax .jq-code  textarea").after(class_jq)
            
                    }}
                let method_cont=""
                for(let method of  data_arr[1].data_method){
                    method_cont += `<div class="row">
                    <div class="col-8 col-md-2" id="obj_name">
                        <h6>Object Name</h6>
                       <h4 id="itm" class="text-center">${method.obj_m}</h4>
                      </div>
                   <div class="col-8 col-md-3" id="lift">
                    <h6>Javascript</h6>
                    <h5 id="itm2">${method.js_m}</h5>
                   </div>
                   <div class="col-8 col-md-3" id="right">
                      <h6>JQuery</h6>
                      <h5 id="itm">${method.jq_m}</h5>
                   </div>
                   <div class="col-8 col-md-4" id="describe">
                      <h6>Describe</h6>
                     <h5 id="itm2">${method.desc_m}</h5>
                    </div>
                 </div><hr>`
                    $("#method_item").html(method_cont)}
                
        if(statusTxt == "error"){
          alert("Error: " + xhr.status + ": " + xhr.statusText)};
    }})


    $(".navbar .nav-link").on("click",function(){
        let target=$(this).attr("href")
        $("body , html").animate({
            scrollTop:$(target).offset().top
        },800)
    })
 
})


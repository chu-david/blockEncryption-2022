function ReadFile(filePath){
    
    var data;
    
    console.log(filePath);
    $.ajax({
        
        url: filePath, dataType:"text", async: false, 
        success: function(result){
            
            console.log("successful import");

            data = result;
        }

    });

    return data
}
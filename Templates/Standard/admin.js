$( document ).ready(function() {
    // Add here commands to run on page loaded
    fieldCounter = document.getElementById("items").children.length;
});

$( "#moreFields" ).click(function() {
    fieldCounter++;
    var newField = document.getElementById('template_div').cloneNode(true);
    newField.id = "";
    newField.style.display = 'flex'; // As specified in style.css
    ((newField.childNodes)[1].childNodes)[4].name = "name" + String(fieldCounter);
    ((newField.childNodes)[3].childNodes)[4].name = "link" + String(fieldCounter);
    ((newField.childNodes)[1].childNodes)[4].id = "name" + String(fieldCounter);
    ((newField.childNodes)[3].childNodes)[4].id = "link" + String(fieldCounter);
    ((newField.childNodes)[1].childNodes)[1].htmlFor = "name" + String(fieldCounter);
    ((newField.childNodes)[3].childNodes)[1].htmlFor = "link" + String(fieldCounter);
    document.getElementById('items').appendChild(newField);
});

function moveItemUp(thisItem){
    var item = $( thisItem )[0].closest('.item');
    if(item == item.parentNode.firstElementChild){
        document.getElementById('items').appendChild(item);
    }
    else{
        document.getElementById('items').insertBefore(item, item.previousElementSibling);
    }
}

function moveItemDown(thisItem){
    var item = $( thisItem )[0].closest('.item');
    if(item == item.parentNode.lastElementChild){
        document.getElementById('items').insertBefore(item, document.getElementById('items').firstChild);
    }
    else if(item == item.parentNode.lastElementChild.previousElementSibling){
        document.getElementById('items').appendChild(item);
    }
    else{
        document.getElementById('items').insertBefore(item, item.nextElementSibling.nextElementSibling);
    }
}

function deleteItem(thisItem){
    var confirmation = confirm('Are you sure you want to delete this link?');
    if(confirmation){
        return $( thisItem )[0].closest('#items').removeChild($( thisItem )[0].closest('.item'));
    }
}
const box = document.getElementById('box');
/* find the draggable box and stores in a variable */

const dropZone = document.getElementById('dropZone');
//* find the drop zone and stores in a variable */

box.addEventListener('dragstart', function (event) {
    //function runs when dragging begins
    event.dataTransfer.setData('text', event.target.id);
    /* set the data to be dragged, in this case, the id of the dragged element */
    //'text is the data type label
    //event.target.id is the id of the dragged element
});

dropZone.addEventListener('dragover', function (event) {
    //function runs when a dragged element is over the drop zone
    //runs continuously as the element is dragged over the drop zone
    event.preventDefault();
    /* prevent the default behavior to allow dropping */
});


dropZone.addEventListener('dragenter', function (event) {
    //function runs when a dragged element is dropped on the drop zone
    event.preventDefault();
    /* prevent the default behavior */
    dropZone.classList.add('hovered');
    //add a css class so the drop zone changes color
});


dropZone.addEventListener('drop', function (event) {
    //function runs when a dragged element is dropped on the drop zone
    event.preventDefault();
    const id= event.dataTransfer.getData('text');
    /* get the data being dragged, in this case, the id of the dragged element */
    const draggedElement = document.getElementById(id);
    /* find the dragged element using the id */
    dropZone.textContent = ''
    //* clear the drop zone text */
    dropZone.classList.remove('hovered');
    /* remove the hovered class to reset the drop zone color */
    draggedElement.style.margin='0'
    //* remove margin from the dragged element to fit better in the drop zone */
    dropZone.appendChild(draggedElement);
    /* move the dragged element into the drop zone */
}
);

dropZone.addEventListener('dragleave', function (event) {
    //function runs when a dragged element leaves the drop zone
    dropZone.classList.remove('hovered');
    /* remove the hovered class to reset the drop zone color */
});


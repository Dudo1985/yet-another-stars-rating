/**
 * Handle the "Add new Criteria" button
 *
 * @param newElementButton
 */
export const addMultisetCriteria = (newElementButton) => {
    newElementButton.onclick = (event) => {
        event.preventDefault();

        //array with all div values
        let rows = returnArrayValues('removable-criteria');

        let nCriteria = returnFirstIdToInsert(rows);

        //Row number must be >= 3 and < 9
        if(nCriteria < 3 || nCriteria > 9 ) {
            return;
        }

        //Create the div
        const newCriteria = document.createElement('div');

        newCriteria.id        = `criteria-row-container-${nCriteria}`;
        newCriteria.className = `criteria-row removable-criteria`;

        //newCriteria.value     = nCriteria;     This doesn't work here, must use setAttribute
        newCriteria.setAttribute("value", nCriteria);

        newCriteria.innerHTML = `
                <label for="multi-set-name-element-${nCriteria}">
                </label>
                <input type="text"
                    name="multi-set-name-element-${nCriteria}"
                    id="multi-set-name-element-${nCriteria}"
                    class="input-text-multi-set"
                    placeholder="New Criteria"
                />
                <span 
                    class="dashicons dashicons-remove yasr-multiset-info-delete criteria-delete" 
                    id="remove-criteria-${nCriteria}"
                    data-id-criteria="${newCriteria.id}"
                    >            
                </span>`;

        document.getElementById('new-set-criteria-container').appendChild(newCriteria);

        //add new event onClick on new button delete
        removeMultisetCriteria(nCriteria);
    }
}

/**
 * Manage the click on buttonDelete
 *
 * @param startFor | 3 At page load, first button delete start on row 3
 */
export const removeMultisetCriteria = (startFor = 3) => {
    const newElementButton = document.getElementById('new-criteria-button');

    //Number of existing rows
    //@todo remove this and use returnArrayValues
    const nOfCriteria = parseInt(newElementButton.value) - 1;

    //add an onclick event for every delete button
    for (let i = startFor; i <= nOfCriteria; i++) {
        const buttonDelete = document.getElementById(`remove-criteria-${i}`);

        buttonDelete.onclick = (event) => {
            let idDivToRemove = buttonDelete.dataset.idCriteria;
            document.getElementById(idDivToRemove).remove();

            //update the value of the button
            //newElementButton.value = newElementButton.value - 1;
        }

    }//End for

    //call this again or "Add new criteria will not work after "
    addMultisetCriteria(newElementButton);
}

/**
 * Return an array of int with all the "value" attribute of an element.
 *
 * This function can't be used if the element doesn't have the "value" attribute!!
 *
 * @param className
 * @returns {number[]}
 */
const returnArrayValues = (className) => {
    let rows = [...document.getElementsByClassName(className)]
        .map(el => parseInt(el.attributes.value.value));

    //be sure array is sorted
    rows.sort();

    return rows;
}

/**
 * Return the first number missing in an array, and if none is found, just array.length +1
 *
 * @param array
 * @returns {boolean}
 */
const returnFirstIdToInsert = (array) => {
    let missingNumber = false

    //find the first missing number in array
    for (let i = 1; i <= array.length; i++) {
        if (array.indexOf(i) === -1) {
            missingNumber = i;
        }
    }

    let nCriteria;

    //the first element to insert must be a missingNumber, otherwiste array.lenght+1
    if(missingNumber !== false) {
        nCriteria   = missingNumber;
    } else {
        nCriteria   = array.length + 1;
    }

    return nCriteria;
}
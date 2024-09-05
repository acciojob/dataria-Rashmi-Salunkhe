// Merge two sorted arrays of completion dates into one sorted array
function mergeCraftDates(emilyDates, oliverDates) {
    let mergedDates = [];
    let i = 0, j = 0;

    // Traverse both arrays and merge them in sorted order
    while (i < emilyDates.length && j < oliverDates.length) {
        if (emilyDates[i] < oliverDates[j]) {
            mergedDates.push(emilyDates[i]);
            i++;
        } else {
            mergedDates.push(oliverDates[j]);
            j++;
        }
    }

    // If there are remaining elements in Emily's dates, add them
    while (i < emilyDates.length) {
        mergedDates.push(emilyDates[i]);
        i++;
    }

    // If there are remaining elements in Oliver's dates, add them
    while (j < oliverDates.length) {
        mergedDates.push(oliverDates[j]);
        j++;
    }

    return mergedDates;
}

// Make the function accessible globally for Cypress or the browser
window.mergeCraftDates = mergeCraftDates;

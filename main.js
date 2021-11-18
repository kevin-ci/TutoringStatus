let GOOGLE_API = 'https://script.google.com/macros/s/AKfycbwxAlGLGICY_8pbyoLdoQ1_uEOAXA_pFsruagHSn6eRrdidtL_cYofDqoL1hx4kPBJv0w/exec';

let RESPONSES = {
    "Very busy": ['Tutoring is unusually busy at the moment.', 'darkred', 'There may be very long wait times.'],
    "Not busy": ['Tutoring is relatively quiet at the moment.', 'green', 'There should be limited wait times.'],
    "A little busy": ['Tutoring is a little busy at the moment.', 'amber', 'There may be short to medium wait times.'],
    "Quite busy": ['Tutoring is busy at the moment.', 'red', 'There may be long wait times.']
};
let FA_ICON = `<i class="fas fa-circle"></i>`;

async function fetchAndSetStatus() {
    let response = await fetch(GOOGLE_API);

    if (response.status === 200) {
        let data = await response.text();
        let iconElement = document.getElementById('status-icon');
        iconElement.innerHTML = FA_ICON;
        iconElement.classList.add(RESPONSES[data][1]);
        document.getElementById('status-text').innerText = RESPONSES[data][0];
        document.getElementById('wait-info').innerText = RESPONSES[data][2];
    }
    else {
        document.getElementById('status-text').innerText = "An error occurred.";
    }
}

fetchAndSetStatus();
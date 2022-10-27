let toggles = document.querySelectorAll(".toggle");
let good = document.querySelector("#good");
let cheap = document.querySelector("#cheap");
let fast = document.querySelector("#fast");

toggles.forEach((toggle) => {
    toggle.addEventListener('change', (e) => {
        doTheTrick(e.target)
    })
});

function doTheTrick (theCLickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theCLickedOne) {
            fast.checked = false
        }

        if (cheap === theCLickedOne) {
            good.checked = false
        }

        if (fast === theCLickedOne) {
            cheap.checked = false
        }
    }
}

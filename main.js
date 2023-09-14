function clickUncheckedPubspecLockCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"].js-reviewed-checkbox[id*="pubspec.lock"]:not(:checked)');

    checkboxes.forEach(function (checkbox) {
        checkbox.click();
    });
}

function clickUncheckedPubspecYamlCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"].js-reviewed-checkbox[id*="pubspec.yaml"]:not(:checked)');

    checkboxes.forEach(function (checkbox) {
        checkbox.click();
    });
}

clickUncheckedPubspecLockCheckboxes();
clickUncheckedPubspecYamlCheckboxes();

setTimeout(function () {
    clickUncheckedPubspecLockCheckboxes();
    clickUncheckedPubspecYamlCheckboxes();
}, 3000);

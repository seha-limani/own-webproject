function showInfo(tabId) {
    const contents = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('.tab-button');

    contents.forEach((content) => content.classList.remove('active'));
    buttons.forEach((button) => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[onclick="showInfo('${tabId}')"]`).classList.add('active');
}

const tab_head = document.querySelectorAll('.haq-tab .tab-top ul a');
const tab_pane = document.querySelectorAll('.haq-tab .tab-pane');

tab_head.forEach(item => {
item.addEventListener('click', function (e) {
    e.preventDefault();

    tab_head.forEach(item =>{
        item.classList.remove('active');
    })
    item.classList.add('active');

    const pane = document.querySelector(this.getAttribute('href'));
    tab_pane.forEach(item =>{
        item.classList.remove('active');
    });
    pane.classList.add('active');

});

});
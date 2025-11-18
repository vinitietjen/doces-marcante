document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.querySelector('#nosso-espaco');
    if (!tabsContainer) return;

    const tabButtons = tabsContainer.querySelectorAll('.tabs-nav button');
    const tabPanes = tabsContainer.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPaneId = button.getAttribute('data-tab');
            
            // Deactivate all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Activate the clicked button and the target pane
            button.classList.add('active');
            document.getElementById(targetPaneId).classList.add('active');
        });
    });
});
window.addEventListener('DOMContentLoaded',() => {
    const tabs = document.querySelectorAll('.tabheader_item'),
        tabParent = document.querySelector('.tabheader_items'),
        tabContent = document.querySelectorAll('.tabcontent');

        function hideTabContent(){
            tabContent.forEach(item =>{
                item.classList.add('hide');
                item.classList.remove('show');
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader_item_active');
            });
        }

        function showTabContent(i=0){
            tabContent[i].classList.add('show');
            tabContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader_item_active');
        }

        hideTabContent()
        showTabContent()

        tabParent.addEventListener('click',(event) => {
            const target = event.target.closest('.tabheader_item');
            if(target){
                tabs.forEach((item,i) => {
                    if(target == item){
                        hideTabContent();
                        showTabContent(i) 
                    }
                });
            }
        });


});
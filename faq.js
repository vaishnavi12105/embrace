document.addEventListener('DOMContentLoaded', () => {
            const accordionHeaders = document.querySelectorAll('.accordion-header');

            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const accordionItem = header.closest('.accordion-item');
                    const accordionContent = accordionItem.querySelector('.accordion-content');
                    const accordionIcon = accordionItem.querySelector('.accordion-icon');

                    // Check if this item is already active
                    const isActive = accordionItem.classList.contains('active');

                    // Close all other open accordions first
                    accordionHeaders.forEach(otherHeader => {
                        const otherItem = otherHeader.closest('.accordion-item');
                        if (otherItem !== accordionItem && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                            otherItem.querySelector('.accordion-content').style.paddingBottom = '0';
                            otherItem.querySelector('.accordion-content').style.opacity = '0';
                            otherItem.querySelector('.accordion-icon').classList.remove('fa-minus');
                            otherItem.querySelector('.accordion-icon').classList.add('fa-plus');
                        }
                    });

                    if (!isActive) {
                        accordionItem.classList.add('active');
                        accordionContent.style.maxHeight = (accordionContent.scrollHeight + 20) + 'px';
                        accordionContent.style.paddingBottom = '15px'; 
                        accordionContent.style.opacity = '1';
                        accordionIcon.classList.remove('fa-plus');
                        accordionIcon.classList.add('fa-minus'); 
                    } else {
                        accordionItem.classList.remove('active');
                        accordionContent.style.maxHeight = '0';
                        accordionContent.style.paddingBottom = '0';
                        accordionContent.style.opacity = '0';
                        accordionIcon.classList.remove('fa-minus');
                        accordionIcon.classList.add('fa-plus');
                    }
                });
            });
        });
        
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(acc => {
      acc.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        const icon = this.querySelector(".icon");
        const isOpen = panel.classList.contains("open");

        if (isOpen) {
          panel.style.maxHeight = null;
          panel.classList.remove("open");
          icon.textContent = "+";
          icon.classList.remove("rotate");
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.classList.add("open");
          icon.textContent = "−";
          icon.classList.add("rotate");
        }
      });
    });
        // Fetching and displaying translations from JSON
        fetch('https://raw.githubusercontent.com/andycymru/PocedCymraeg/master/assets/data.json')
            .then(response => response.json())
            .then(data => {
                const accordionContainer = document.getElementById('accordionContainer');

                for (const subject in data) {
                    if (data.hasOwnProperty(subject)) {
                        const translations = data[subject];
                        const accordion = document.createElement('button');
                        accordion.classList.add('accordion');
                        accordion.textContent = subject;
                        accordionContainer.appendChild(accordion);

                        const panel = document.createElement('div');
                        panel.classList.add('panel');

                        const list = document.createElement('ul');
                        for (const word in translations) {
                            if (translations.hasOwnProperty(word)) {
                                const listItem = document.createElement('li');
                                listItem.innerHTML = `<div class="cymraeg">${translations[word]}</div>` + `<div class="saesneg">${word}</div>`;
                                list.appendChild(listItem);
                            }
                        }

                        panel.appendChild(list);
                        accordionContainer.appendChild(panel);

                        accordion.addEventListener('click', function() {
                            this.classList.toggle('active');
                            const content = this.nextElementSibling;
                            if (content.style.display === 'block') {
                                content.style.display = 'none';
                            } else {
                                content.style.display = 'block';
                            }
                        });
                    }
                }
            })
            .catch(error => console.error('Error fetching translations:', error));
function loadCss(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.type = 'text/css';
    document.head.appendChild(link);
}

loadCss('static/scripts/faq/faq.component.css');


export class FaqItem extends HTMLElement {
    constructor() {
        super();

        // Criar a estrutura do componente
        const shadow = this.attachShadow({ mode: 'open' });

        // Criar o template dentro do JavaScript
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                * {
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                }

                .faq__content {
                    display:flex;
                    flex-direction:row-reverse;
                    gap:1rem;
                }

                div.button {
                    padding: 0 20px 0 12px ;
                    position: relative;
                    margin: 0 auto;
                    margin-top:3px;
                    cursor: pointer;
                    
       
                  }
                  
                  div.button div.line {
                    width: 3px;
                    height: 15px;
                    background-color: var(--bullet-color) ;
                    border-radius: 3px;
                    display: block;
                    position: absolute;
                    top: 0;
                    transition: all 0.2s cubic-bezier(.87, .39, .74, 1.31);
                  }
                  
                  div.button div.line.left {
                    -webkit-transform: rotateZ(-45deg);
                    transform: rotateZ(-45deg);
                    left: 15px;
                  }
                  
                  div.button div.line.right {
                    -webkit-transform: rotateZ(45deg);
                    transform: rotateZ(45deg);
                    left: 15px;
                  }
                  
                  div.button.open div.line.left {
                    left: 10px;
                  }
                  
                  div.button.open div.line.right {
                    left: 19px;
                    
                  }

            </style>

            <div class="faq__content">
                <div class="button open">
                    <div class="line left"></div>
                    <div class="line right"></div>
                </div>

                <div>
                    <slot></slot>
                </div>
            </div>            
        `;

        // Copiar o conteúdo do template para o shadow DOM
        const content = template.content.cloneNode(true);
        shadow.appendChild(content);

        const button = shadow.querySelector('.button');

        this.addEventListener('click', () => {
            button.classList.toggle('open');
        });
    }
}

export class FaqComponent extends HTMLElement {
    constructor() {
        super();

        // Criar a estrutura do componente
        const shadow = this.attachShadow({ mode: 'open' });

        // Criar o template dentro do JavaScript
        const template = document.createElement('template');
        template.innerHTML = `
            <div>
                <slot></slot>
            </div>            
        `;

        // Copiar o conteúdo do template para o shadow DOM
        const content = template.content.cloneNode(true);
        shadow.appendChild(content);

        // Adicionar a lógica de abrir e fechar ao clicar no FAQ-ITEM
        shadow.addEventListener('click', (event) => {
            const target = event.target;
            const faqItem = target.tagName === 'FAQ-ITEM' ? target : target.closest('faq-item');
            if (faqItem) {
                const answer = faqItem.querySelector('p');
                answer.classList.toggle('show');
        
                const height = answer.classList.contains('show') ? answer.scrollHeight : 0;
                answer.style.maxHeight = height + 'px';
            }
        });
        
    }
}




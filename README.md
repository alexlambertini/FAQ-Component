# F.A.Q-Component

O componente F.A.Q é uma ferramenta útil para criar seções de perguntas frequentes em seu site. 

Ele permite uma fácil importação e configuração, garantindo uma experiência de usuário consistente e informativa. Certifique-se de seguir as instruções fornecidas para garantir uma integração suave e eficaz.

# Configurações

Você deve importar o arquivo lib.js no cabeçalho HTML como modulo, atributo ```type="module"``` para garantir o funcionamento adequado do componente.
Não se esqueça de usar ```defer``` para garantir que seu código seja carregado após o componente:

```
<script type="module" src="path/lib.js" defer></script>
```

Por padrão, os arquivos do componente estão localizados em:

```
static
└── scripts
    └── faq
```

Se o local dos arquivos for diferente, você precisará ajustar o caminho do CSS dentro do arquivo faq-component.js:
O caminho deve ser absoluto, ele deve indicar o local do seu HTML:

`
loadCss('static/scripts/faq/faq.component.css');
`

Além disso, certifique-se de atualizar as importações no arquivo lib.js:

`
import { FaqComponent, FaqItem } from "path/faq/faq-component.js";
`


# Agora é simples!

Para garantir uma boa semântica em seu HTML, é recomendável usar títulos seguidos por parágrafos dentro de elementos ```<faq-component>``` e ```<faq-item>```. Esses elementos podem ser estilizados usando CSS, que está localizado dentro da pasta do componente.

# CSS

O **CSS** de fácil customização:

```
/* Configuration */
--bullet-color: #e0e1f0;
--border-color: #2b2e52;
--background-item: #1C1E37;

/* font title configuration */
--min-size:1.2rem;
--max-size:1.4rem;
--color: white;
--weight:400;
--title-case: normal;

/* font questions configuration */
--color-questions:#e0e1f0;
--line-height: 1.6rem;

```

**Obs:**
```--min-size``` e ```--max-size```: Essas são variáveis CSS personalizadas que definem o tamanho mínimo e máximo da fonte, respectivamente. 
Elas podem ser ajustadas conforme necessário para atender aos requisitos de design.



# HTML

A estrutura básica do componente segue esta ordem:

Um título, que pode ser representado por ```<h1>```, ```<h2>```, ```<h3>```, etc.
Para a resposta, utilizamos um parágrafo ```<p>```. No entanto, outras estruturas podem ser utilizadas conforme necessário.

Exemplo de estrutura do componente:


**Exemplo:**


```
<faq-component>

    <faq-item>
        <h2>Como usar este componente?</h2>
        <p>Para usar este componente, basta incluí-lo em seu HTML e estilizá-lo conforme necessário.</p>
    </faq-item>

    ... mais perguntas

</faq-component>

```

Você também pode implementer uma grade usando a classe faq por fora.


**Exemplo:**


```
<div class="faq">

    <faq-component>
        <faq-item>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Consectetur adipisicing elit. Laboriosam unde, esse repellat assumenda deserunt molestias laudantium. Dolor cum nulla</p>
        </faq-item>

        <faq-item>
            <h3>Cupiditate cum libero consequuntur exercitationem?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur dicta facere in enim ut sint veritatis reprehenderit quas eligendi repellat maxime consequuntur quae, aliquam perspiciatis natus hic. Nulla, necessitatibus.</p>
        </faq-item>

        <faq-item>
            <h3>Incidunt eaque molestias tempore praesentium illum veniam iusto?</h3>
            <p>É uma plataforma de aprendizagem digital, voltada para empresas treinarem os colaboradores em uma variedade de cursos prontos em diversas áreas do conhecimento.</p>
        </faq-item>

        <faq-item>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex distinctio consectetur ratione repellat beatae similique fugiat blanditiis maiores ipsam eaque, eius nulla magnam ea harum minima, fuga est iste! Qui!</p>
        </faq-item>
    </faq-component>


    <faq-component>
        <faq-item>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Consectetur adipisicing elit. Laboriosam unde, esse repellat assumenda deserunt molestias laudantium. Dolor cum nulla</p>
        </faq-item>
        
        <faq-item>
            <h3>Cupiditate cum libero vero consequuntur quidem dolore dolorem exercitationem?</h3>
            <p>É uma plataforma de aprendizagem digital, voltada para empresas treinarem os colaboradores em uma variedade de cursos prontos em diversas áreas do conhecimento.</p>
        </faq-item>
        
        <faq-item>
            <h3>Cupiditate cum libero consequuntur exercitationem?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur dicta facere in enim ut sint veritatis reprehenderit quas eligendi repellat maxime consequuntur quae, aliquam perspiciatis natus hic. Nulla, necessitatibus.</p>
        </faq-item>

        <faq-item>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex distinctio consectetur ratione repellat beatae similique fugiat blanditiis maiores ipsam eaque, eius nulla magnam ea harum minima, fuga est iste! Qui!</p>
        </faq-item>
    </faq-component>
</div>
```

**OBS:**
Para vê-lo em ação você vai precisar estar em um live-server.
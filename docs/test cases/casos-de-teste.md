# Documento de Casos de Teste - Sistema McBugs

**Sistema:** McBugs - Totem de Autoatendimento  
**Data de Criação:** 2025-01-27  
**Versão:** 1.0

---

## Índice

1. [Casos de Teste - Navegação e Página Inicial](#casos-de-teste---navegação-e-página-inicial)
2. [Casos de Teste - Menu e Produtos](#casos-de-teste---menu-e-produtos)
3. [Casos de Teste - Detalhes do Produto](#casos-de-teste---detalhes-do-produto)
4. [Casos de Teste - Carrinho de Compras](#casos-de-teste---carrinho-de-compras)
5. [Casos de Teste - Finalização de Pedido](#casos-de-teste---finalização-de-pedido)
6. [Casos de Teste - Pagamento](#casos-de-teste---pagamento)
7. [Casos de Teste - Confirmação de Pagamento](#casos-de-teste---confirmação-de-pagamento)
8. [Casos de Teste - Persistência de Dados](#casos-de-teste---persistência-de-dados)
9. [Casos de Teste - Tratamento de Erros](#casos-de-teste---tratamento-de-erros)

---

## Casos de Teste - Navegação e Página Inicial

### **CT001 - Acessar a Página Inicial do Sistema**

#### **Objetivo**

Validar que a página inicial do sistema McBugs é carregada corretamente e exibe as opções de tipo de pedido (Para comer aqui / Para levar).

#### **Pré-Condições**

- O sistema McBugs deve estar online e acessível.
- O navegador deve estar configurado corretamente para acessar o sistema.
- A conexão com a internet deve estar ativa.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a URL raiz do sistema (/) | A página inicial deve ser carregada corretamente. |
| 2      | Verificar a exibição do logo       | O logo do McBugs deve ser exibido na tela. |
| 3      | Verificar a mensagem de boas-vindas | A mensagem "Seja bem-vindo!" deve ser exibida. |
| 4      | Verificar as opções de pedido      | Duas opções devem ser exibidas: "Para comer aqui" e "Para levar". |

#### **Resultados Esperados**

- A página inicial deve ser carregada sem erros.
- O logo do sistema deve ser exibido corretamente.
- As duas opções de tipo de pedido devem estar visíveis e clicáveis.
- A interface deve estar responsiva e bem formatada.

#### **Critérios de Aceitação**

- A página inicial é carregada em menos de 3 segundos.
- Todos os elementos visuais são exibidos corretamente.
- Não há erros no console do navegador.

---

### **CT002 - Selecionar Tipo de Pedido "Para Comer Aqui"**

#### **Objetivo**

Validar que ao selecionar a opção "Para comer aqui", o sistema define o tipo de pedido como "dine-in" e redireciona para a página do menu.

#### **Pré-Condições**

- O sistema deve estar acessível.
- O usuário deve estar na página inicial (/).

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página inicial           | A página inicial deve ser exibida. |
| 2      | Clicar no botão "Para comer aqui"  | O sistema deve definir o tipo de pedido como "dine-in". |
| 3      | Verificar o redirecionamento       | O usuário deve ser redirecionado para a página /menu. |
| 4      | Verificar a persistência do tipo   | O tipo de pedido "dine-in" deve ser salvo no localStorage. |

#### **Resultados Esperados**

- O tipo de pedido "dine-in" é definido corretamente.
- O redirecionamento para /menu ocorre imediatamente após o clique.
- O tipo de pedido é persistido no localStorage.

#### **Critérios de Aceitação**

- O redirecionamento ocorre sem erros.
- O tipo de pedido é salvo corretamente no localStorage com a chave "mcbugs-order-type".
- A página do menu é carregada corretamente.

---

### **CT003 - Selecionar Tipo de Pedido "Para Levar"**

#### **Objetivo**

Validar que ao selecionar a opção "Para levar", o sistema define o tipo de pedido como "takeaway" e redireciona para a página do menu.

#### **Pré-Condições**

- O sistema deve estar acessível.
- O usuário deve estar na página inicial (/).

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página inicial           | A página inicial deve ser exibida. |
| 2      | Clicar no botão "Para levar"       | O sistema deve definir o tipo de pedido como "takeaway". |
| 3      | Verificar o redirecionamento       | O usuário deve ser redirecionado para a página /menu. |
| 4      | Verificar a persistência do tipo   | O tipo de pedido "takeaway" deve ser salvo no localStorage. |

#### **Resultados Esperados**

- O tipo de pedido "takeaway" é definido corretamente.
- O redirecionamento para /menu ocorre imediatamente após o clique.
- O tipo de pedido é persistido no localStorage.

#### **Critérios de Aceitação**

- O redirecionamento ocorre sem erros.
- O tipo de pedido é salvo corretamente no localStorage com a chave "mcbugs-order-type".
- A página do menu é carregada corretamente.

---

## Casos de Teste - Menu e Produtos

### **CT004 - Visualizar Menu com Categorias**

#### **Objetivo**

Validar que a página do menu exibe corretamente todas as categorias de produtos (Lanches, Fritas, Bebidas, Sobremesas) e permite a navegação entre elas.

#### **Pré-Condições**

- O sistema deve estar acessível.
- O usuário deve ter selecionado um tipo de pedido (dine-in ou takeaway).
- O usuário deve estar na página /menu.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página do menu            | A página do menu deve ser carregada. |
| 2      | Verificar a exibição das categorias | As abas de categorias (Lanches, Fritas, Bebidas, Sobremesas) devem ser exibidas. |
| 3      | Verificar a categoria ativa         | A categoria "Lanches" deve estar selecionada por padrão. |
| 4      | Verificar os produtos exibidos     | Os produtos da categoria "Lanches" devem ser exibidos em formato de grid. |

#### **Resultados Esperados**

- Todas as categorias são exibidas corretamente.
- A categoria padrão (Lanches) está selecionada.
- Os produtos da categoria selecionada são exibidos em formato de cards.

#### **Critérios de Aceitação**

- As categorias são clicáveis e funcionais.
- Os produtos são exibidos com imagem, nome e preço.
- A interface está responsiva e bem formatada.

---

### **CT005 - Filtrar Produtos por Categoria "Fritas"**

#### **Objetivo**

Validar que ao clicar na categoria "Fritas", apenas os produtos dessa categoria são exibidos.

#### **Pré-Condições**

- O usuário deve estar na página /menu.
- O menu deve estar carregado com produtos.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página do menu            | A página do menu deve ser exibida. |
| 2      | Clicar na aba "Fritas"              | A categoria "Fritas" deve ser selecionada. |
| 3      | Verificar os produtos exibidos      | Apenas produtos da categoria "Fritas" devem ser exibidos. |
| 4      | Verificar a quantidade de produtos  | Deve haver 3 produtos de fritas (Batatas Full Stack, Batatas Refatoradas, Batatas Minificadas). |

#### **Resultados Esperados**

- A categoria "Fritas" é selecionada corretamente.
- Apenas produtos da categoria "Fritas" são exibidos.
- Os produtos são exibidos corretamente com suas informações.

#### **Critérios de Aceitação**

- A filtragem ocorre instantaneamente.
- Não há produtos de outras categorias sendo exibidos.
- Todos os produtos da categoria "Fritas" são exibidos.

---

### **CT006 - Filtrar Produtos por Categoria "Bebidas"**

#### **Objetivo**

Validar que ao clicar na categoria "Bebidas", apenas os produtos dessa categoria são exibidos.

#### **Pré-Condições**

- O usuário deve estar na página /menu.
- O menu deve estar carregado com produtos.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página do menu            | A página do menu deve ser exibida. |
| 2      | Clicar na aba "Bebidas"             | A categoria "Bebidas" deve ser selecionada. |
| 3      | Verificar os produtos exibidos     | Apenas produtos da categoria "Bebidas" devem ser exibidos. |
| 4      | Verificar a quantidade de produtos  | Deve haver 3 produtos de bebidas (Coca-Crash, Fanta Warning, Água Localhost). |

#### **Resultados Esperados**

- A categoria "Bebidas" é selecionada corretamente.
- Apenas produtos da categoria "Bebidas" são exibidos.
- Os produtos são exibidos corretamente com suas informações.

#### **Critérios de Aceitação**

- A filtragem ocorre instantaneamente.
- Não há produtos de outras categorias sendo exibidos.
- Todos os produtos da categoria "Bebidas" são exibidos.

---

### **CT007 - Filtrar Produtos por Categoria "Sobremesas"**

#### **Objetivo**

Validar que ao clicar na categoria "Sobremesas", apenas os produtos dessa categoria são exibidos.

#### **Pré-Condições**

- O usuário deve estar na página /menu.
- O menu deve estar carregado com produtos.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página do menu            | A página do menu deve ser exibida. |
| 2      | Clicar na aba "Sobremesas"          | A categoria "Sobremesas" deve ser selecionada. |
| 3      | Verificar os produtos exibidos      | Apenas produtos da categoria "Sobremesas" devem ser exibidos. |
| 4      | Verificar a quantidade de produtos  | Deve haver 3 produtos de sobremesas (Casquinha Vanilla JS, Casquinha Dark Mode, Casquinha Pull Request). |

#### **Resultados Esperados**

- A categoria "Sobremesas" é selecionada corretamente.
- Apenas produtos da categoria "Sobremesas" são exibidos.
- Os produtos são exibidos corretamente com suas informações.

#### **Critérios de Aceitação**

- A filtragem ocorre instantaneamente.
- Não há produtos de outras categorias sendo exibidos.
- Todos os produtos da categoria "Sobremesas" são exibidos.

---

### **CT008 - Navegar de Volta para a Página Inicial a Partir do Menu**

#### **Objetivo**

Validar que o botão de voltar na página do menu redireciona corretamente para a página inicial.

#### **Pré-Condições**

- O usuário deve estar na página /menu.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página do menu            | A página do menu deve ser exibida. |
| 2      | Localizar o botão de voltar (seta)  | O botão de voltar deve estar visível no canto superior esquerdo. |
| 3      | Clicar no botão de voltar           | O usuário deve ser redirecionado para a página inicial (/). |

#### **Resultados Esperados**

- O botão de voltar está visível e funcional.
- O redirecionamento para a página inicial ocorre corretamente.
- A página inicial é carregada sem erros.

#### **Critérios de Aceitação**

- O redirecionamento ocorre imediatamente após o clique.
- Não há erros durante a navegação.
- A página inicial é exibida corretamente.

---

## Casos de Teste - Detalhes do Produto

### **CT009 - Visualizar Detalhes de um Produto**

#### **Objetivo**

Validar que ao clicar em um produto no menu, a página de detalhes do produto é exibida com todas as informações corretas.

#### **Pré-Condições**

- O usuário deve estar na página /menu.
- Deve haver produtos disponíveis no menu.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página do menu            | A página do menu deve ser exibida. |
| 2      | Clicar em um produto (ex: Big Mock) | O usuário deve ser redirecionado para /product/big-mock. |
| 3      | Verificar a imagem do produto       | A imagem do produto deve ser exibida corretamente. |
| 4      | Verificar o nome do produto         | O nome do produto deve ser exibido. |
| 5      | Verificar o preço                   | O preço do produto deve ser exibido formatado. |
| 6      | Verificar a descrição               | A descrição do produto deve ser exibida. |
| 7      | Verificar os ingredientes           | A lista de ingredientes deve ser exibida (se disponível). |

#### **Resultados Esperados**

- A página de detalhes do produto é carregada corretamente.
- Todas as informações do produto são exibidas.
- A imagem do produto é carregada sem erros.
- Os ingredientes são listados corretamente.

#### **Critérios de Aceitação**

- A página é carregada em menos de 2 segundos.
- Todas as informações são exibidas corretamente.
- Não há erros no console do navegador.

---

### **CT010 - Aumentar Quantidade de um Produto**

#### **Objetivo**

Validar que o controle de quantidade permite aumentar a quantidade do produto antes de adicionar ao carrinho.

#### **Pré-Condições**

- O usuário deve estar na página de detalhes de um produto.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página de detalhes de um produto | A página de detalhes deve ser exibida. |
| 2      | Verificar a quantidade inicial      | A quantidade inicial deve ser 1. |
| 3      | Clicar no botão de aumentar (+)    | A quantidade deve ser incrementada para 2. |
| 4      | Clicar novamente no botão de aumentar | A quantidade deve ser incrementada para 3. |
| 5      | Verificar o preço total            | O preço total exibido no botão deve ser atualizado (preço × quantidade). |

#### **Resultados Esperados**

- A quantidade é incrementada corretamente.
- O preço total é atualizado dinamicamente.
- Não há limite máximo de quantidade (ou o limite é respeitado se existir).

#### **Critérios de Aceitação**

- A quantidade pode ser aumentada múltiplas vezes.
- O preço total é calculado corretamente.
- A interface responde imediatamente às ações do usuário.

---

### **CT011 - Diminuir Quantidade de um Produto**

#### **Objetivo**

Validar que o controle de quantidade permite diminuir a quantidade do produto, mas não permite valores menores que 1.

#### **Pré-Condições**

- O usuário deve estar na página de detalhes de um produto.
- A quantidade deve ser maior que 1.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página de detalhes de um produto | A página de detalhes deve ser exibida. |
| 2      | Aumentar a quantidade para 3        | A quantidade deve ser 3. |
| 3      | Clicar no botão de diminuir (-)    | A quantidade deve ser decrementada para 2. |
| 4      | Clicar novamente no botão de diminuir | A quantidade deve ser decrementada para 1. |
| 5      | Tentar diminuir quando a quantidade é 1 | A quantidade deve permanecer em 1 (não pode ser menor que 1). |
| 6      | Verificar o preço total            | O preço total deve ser atualizado corretamente. |

#### **Resultados Esperados**

- A quantidade é decrementada corretamente.
- A quantidade não pode ser menor que 1.
- O preço total é atualizado dinamicamente.

#### **Critérios de Aceitação**

- A quantidade mínima é respeitada (valor 1).
- O preço total é calculado corretamente.
- A interface responde imediatamente às ações do usuário.

---

### **CT012 - Adicionar Produto ao Carrinho a Partir da Página de Detalhes**

#### **Objetivo**

Validar que ao clicar no botão "Quero" na página de detalhes, o produto é adicionado ao carrinho e o usuário é redirecionado para o menu.

#### **Pré-Condições**

- O usuário deve estar na página de detalhes de um produto.
- O carrinho pode estar vazio ou conter outros produtos.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página de detalhes de um produto | A página de detalhes deve ser exibida. |
| 2      | Definir a quantidade desejada (ex: 2) | A quantidade deve ser definida. |
| 3      | Clicar no botão "Quero • [preço]"  | O produto deve ser adicionado ao carrinho com a quantidade especificada. |
| 4      | Verificar o redirecionamento       | O usuário deve ser redirecionado para /menu. |
| 5      | Verificar o carrinho               | O produto deve estar no carrinho com a quantidade correta. |

#### **Resultados Esperados**

- O produto é adicionado ao carrinho com sucesso.
- A quantidade especificada é respeitada.
- O redirecionamento para o menu ocorre corretamente.
- O carrinho é atualizado e exibido na barra inferior.

#### **Critérios de Aceitação**

- O produto é adicionado ao carrinho imediatamente.
- Se o produto já existir no carrinho, a quantidade é somada.
- O carrinho é persistido no localStorage.

---

### **CT013 - Acessar Carrinho a Partir da Página de Detalhes**

#### **Objetivo**

Validar que o ícone do carrinho na página de detalhes permite navegar para a página do carrinho.

#### **Pré-Condições**

- O usuário deve estar na página de detalhes de um produto.
- O carrinho deve conter pelo menos um item.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Adicionar um produto ao carrinho   | O produto deve ser adicionado ao carrinho. |
| 2      | Acessar a página de detalhes de outro produto | A página de detalhes deve ser exibida. |
| 3      | Verificar o ícone do carrinho       | O ícone do carrinho deve estar visível no canto superior direito. |
| 4      | Verificar o contador de itens       | O contador deve exibir a quantidade de itens no carrinho. |
| 5      | Clicar no ícone do carrinho         | O usuário deve ser redirecionado para /cart. |

#### **Resultados Esperados**

- O ícone do carrinho está visível quando há itens no carrinho.
- O contador exibe a quantidade correta de itens.
- O redirecionamento para o carrinho ocorre corretamente.

#### **Critérios de Aceitação**

- O ícone do carrinho só aparece quando há itens no carrinho.
- O contador é atualizado em tempo real.
- O redirecionamento ocorre sem erros.

---

### **CT014 - Acessar Página de Produto Inexistente**

#### **Objetivo**

Validar que ao acessar uma URL de produto que não existe, o sistema exibe uma mensagem apropriada.

#### **Pré-Condições**

- O sistema deve estar acessível.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar uma URL de produto inexistente (ex: /product/produto-inexistente) | A página deve ser carregada. |
| 2      | Verificar a mensagem exibida       | Uma mensagem "Produto não encontrado" deve ser exibida. |

#### **Resultados Esperados**

- O sistema não apresenta erros críticos.
- Uma mensagem apropriada é exibida ao usuário.
- O sistema permanece funcional.

#### **Critérios de Aceitação**

- Não há erros no console do navegador.
- A mensagem é clara e informativa.
- O usuário pode navegar para outras páginas normalmente.

---

## Casos de Teste - Carrinho de Compras

### **CT015 - Visualizar Carrinho Vazio**

#### **Objetivo**

Validar que quando o carrinho está vazio, a página do carrinho exibe uma mensagem apropriada e um botão para voltar ao menu.

#### **Pré-Condições**

- O carrinho deve estar vazio.
- O usuário deve acessar a página /cart.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /cart com o carrinho vazio | A página do carrinho deve ser carregada. |
| 2      | Verificar a mensagem exibida       | A mensagem "Nada Encontrado Aqui" deve ser exibida. |
| 3      | Verificar a descrição              | A descrição "Seu carrinho está vazio. Adicione alguns itens deliciosos!" deve ser exibida. |
| 4      | Verificar o botão "Ver cardápio"   | O botão deve estar visível e funcional. |
| 5      | Clicar no botão "Ver cardápio"     | O usuário deve ser redirecionado para /menu. |

#### **Resultados Esperados**

- A mensagem de carrinho vazio é exibida corretamente.
- O botão para voltar ao menu está funcional.
- A interface está bem formatada e clara.

#### **Critérios de Aceitação**

- A mensagem é clara e informativa.
- O botão de navegação funciona corretamente.
- Não há erros na página.

---

### **CT016 - Visualizar Itens no Carrinho**

#### **Objetivo**

Validar que a página do carrinho exibe corretamente todos os itens adicionados, com suas informações e quantidades.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto.
- O usuário deve acessar a página /cart.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Adicionar produtos ao carrinho     | Os produtos devem ser adicionados ao carrinho. |
| 2      | Acessar a página /cart             | A página do carrinho deve ser carregada. |
| 3      | Verificar a listagem de itens      | Todos os produtos adicionados devem ser exibidos. |
| 4      | Verificar as informações de cada item | Cada item deve exibir: nome, preço unitário, quantidade e subtotal. |
| 5      | Verificar o total do pedido        | O total do pedido deve ser exibido e calculado corretamente. |

#### **Resultados Esperados**

- Todos os itens do carrinho são exibidos corretamente.
- As informações de cada item estão completas e corretas.
- O total do pedido é calculado e exibido corretamente.

#### **Critérios de Aceitação**

- A listagem de itens está bem formatada.
- O cálculo do total está correto.
- Não há itens duplicados incorretamente.

---

### **CT017 - Aumentar Quantidade de Item no Carrinho**

#### **Objetivo**

Validar que é possível aumentar a quantidade de um item diretamente no carrinho.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto.
- O usuário deve estar na página /cart.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /cart             | A página do carrinho deve ser exibida. |
| 2      | Localizar um item no carrinho      | O item deve estar visível na listagem. |
| 3      | Verificar a quantidade atual       | A quantidade atual deve ser exibida. |
| 4      | Clicar no botão de aumentar (+)    | A quantidade deve ser incrementada. |
| 5      | Verificar o subtotal do item       | O subtotal do item deve ser atualizado (preço × nova quantidade). |
| 6      | Verificar o total do pedido        | O total do pedido deve ser atualizado. |

#### **Resultados Esperados**

- A quantidade do item é incrementada corretamente.
- O subtotal do item é recalculado.
- O total do pedido é atualizado.

#### **Critérios de Aceitação**

- A atualização ocorre imediatamente.
- Os cálculos estão corretos.
- As alterações são persistidas no localStorage.

---

### **CT018 - Diminuir Quantidade de Item no Carrinho**

#### **Objetivo**

Validar que é possível diminuir a quantidade de um item no carrinho, e que ao chegar a zero, o item é removido.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto com quantidade maior que 1.
- O usuário deve estar na página /cart.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /cart             | A página do carrinho deve ser exibida. |
| 2      | Localizar um item com quantidade > 1 | O item deve estar visível na listagem. |
| 3      | Verificar a quantidade atual       | A quantidade atual deve ser exibida. |
| 4      | Clicar no botão de diminuir (-)    | A quantidade deve ser decrementada. |
| 5      | Verificar o subtotal do item       | O subtotal do item deve ser atualizado. |
| 6      | Diminuir até quantidade 1          | A quantidade deve ser 1. |
| 7      | Diminuir novamente                 | O item deve ser removido do carrinho. |
| 8      | Verificar o total do pedido        | O total do pedido deve ser atualizado. |

#### **Resultados Esperados**

- A quantidade do item é decrementada corretamente.
- Quando a quantidade chega a zero, o item é removido.
- O total do pedido é atualizado corretamente.

#### **Critérios de Aceitação**

- A remoção ocorre quando a quantidade chega a zero.
- Os cálculos estão corretos.
- As alterações são persistidas no localStorage.

---

### **CT019 - Remover Item do Carrinho**

#### **Objetivo**

Validar que é possível remover um item do carrinho usando o botão de remoção.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto.
- O usuário deve estar na página /cart.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /cart             | A página do carrinho deve ser exibida. |
| 2      | Localizar um item no carrinho      | O item deve estar visível na listagem. |
| 3      | Verificar o botão de remoção       | O botão de remover (ícone X ou lixeira) deve estar visível. |
| 4      | Clicar no botão de remoção         | O item deve ser removido do carrinho. |
| 5      | Verificar a listagem atualizada    | O item removido não deve mais aparecer na listagem. |
| 6      | Verificar o total do pedido        | O total do pedido deve ser atualizado (sem incluir o item removido). |

#### **Resultados Esperados**

- O item é removido imediatamente do carrinho.
- A listagem é atualizada sem o item removido.
- O total do pedido é recalculado corretamente.

#### **Critérios de Aceitação**

- A remoção ocorre instantaneamente.
- O total é recalculado corretamente.
- As alterações são persistidas no localStorage.

---

### **CT020 - Continuar Comprando a Partir do Carrinho**

#### **Objetivo**

Validar que o botão "Continuar comprando" redireciona o usuário de volta para o menu.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto.
- O usuário deve estar na página /cart.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /cart             | A página do carrinho deve ser exibida. |
| 2      | Localizar o botão "Continuar comprando" | O botão deve estar visível na parte inferior da página. |
| 3      | Clicar no botão "Continuar comprando" | O usuário deve ser redirecionado para /menu. |
| 4      | Verificar que o carrinho foi mantido | Os itens do carrinho devem permanecer no carrinho. |

#### **Resultados Esperados**

- O redirecionamento para o menu ocorre corretamente.
- Os itens do carrinho são mantidos.
- O usuário pode continuar adicionando produtos.

#### **Critérios de Aceitação**

- O redirecionamento ocorre sem erros.
- O carrinho é preservado.
- A página do menu é carregada corretamente.

---

### **CT021 - Verificar Barra de Carrinho na Página do Menu**

#### **Objetivo**

Validar que quando há itens no carrinho, uma barra inferior é exibida na página do menu com o total e um botão para ver o pedido.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto.
- O usuário deve estar na página /menu.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Adicionar produtos ao carrinho     | Os produtos devem ser adicionados ao carrinho. |
| 2      | Acessar a página /menu             | A página do menu deve ser carregada. |
| 3      | Verificar a barra de carrinho      | Uma barra fixa na parte inferior deve ser exibida. |
| 4      | Verificar o total exibido           | O total do pedido deve ser exibido na barra. |
| 5      | Verificar a quantidade de itens    | A quantidade de itens deve ser exibida. |
| 6      | Verificar o botão "Ver pedido"     | O botão deve estar visível e funcional. |
| 7      | Clicar no botão "Ver pedido"        | O usuário deve ser redirecionado para /cart. |

#### **Resultados Esperados**

- A barra de carrinho é exibida quando há itens no carrinho.
- O total e a quantidade de itens são exibidos corretamente.
- O botão de navegação funciona corretamente.

#### **Critérios de Aceitação**

- A barra só aparece quando há itens no carrinho.
- Os valores exibidos estão corretos.
- O botão de navegação funciona sem erros.

---

## Casos de Teste - Finalização de Pedido

### **CT022 - Finalizar Pedido com Nome Válido**

#### **Objetivo**

Validar que é possível finalizar um pedido fornecendo um nome válido e que o pedido é criado no banco de dados.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto.
- O usuário deve estar na página /cart.
- O sistema deve estar conectado ao Supabase.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /cart             | A página do carrinho deve ser exibida. |
| 2      | Clicar no botão "Finalizar pedido" | Um drawer deve ser aberto solicitando o nome do cliente. |
| 3      | Verificar o campo de nome          | O campo de nome deve estar visível e editável. |
| 4      | Inserir um nome válido (ex: "João Silva") | O nome deve ser inserido no campo. |
| 5      | Clicar no botão "Finalizar"        | O sistema deve criar o pedido no banco de dados. |
| 6      | Verificar o estado de carregamento | Uma mensagem "enviando a cozinha...." deve ser exibida. |
| 7      | Verificar o redirecionamento       | O usuário deve ser redirecionado para /payment. |
| 8      | Verificar que o carrinho foi limpo | O carrinho deve estar vazio após a criação do pedido. |

#### **Resultados Esperados**

- O pedido é criado no banco de dados com sucesso.
- O pedido recebe um ID único.
- O carrinho é limpo após a criação do pedido.
- O redirecionamento para a página de pagamento ocorre corretamente.

#### **Critérios de Aceitação**

- O pedido é salvo no banco de dados com status "pending".
- Todos os dados do pedido são salvos corretamente (itens, total, tipo de pedido, nome do cliente).
- O carrinho é limpo do localStorage.

---

### **CT023 - Tentar Finalizar Pedido sem Inserir Nome**

#### **Objetivo**

Validar que o sistema não permite finalizar um pedido sem inserir um nome.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto.
- O usuário deve estar na página /cart.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /cart             | A página do carrinho deve ser exibida. |
| 2      | Clicar no botão "Finalizar pedido" | Um drawer deve ser aberto solicitando o nome do cliente. |
| 3      | Verificar que o campo está vazio   | O campo de nome deve estar vazio ou com valor padrão. |
| 4      | Limpar o campo de nome (se houver valor padrão) | O campo deve estar vazio. |
| 5      | Tentar clicar no botão "Finalizar" | O botão deve estar desabilitado ou o formulário deve impedir o envio. |
| 6      | Verificar a validação              | O sistema deve exigir que o nome seja preenchido (validação HTML5 ou customizada). |

#### **Resultados Esperados**

- O sistema não permite finalizar o pedido sem nome.
- Uma validação é exibida (mensagem de erro ou campo destacado).
- O drawer permanece aberto.

#### **Critérios de Aceitação**

- A validação funciona corretamente.
- O usuário recebe feedback claro sobre o erro.
- O pedido não é criado sem nome.

---

### **CT024 - Cancelar Finalização de Pedido**

#### **Objetivo**

Validar que é possível cancelar a finalização do pedido e fechar o drawer sem criar o pedido.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto.
- O usuário deve estar na página /cart.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /cart             | A página do carrinho deve ser exibida. |
| 2      | Clicar no botão "Finalizar pedido" | Um drawer deve ser aberto solicitando o nome do cliente. |
| 3      | Clicar no botão "Cancelar"         | O drawer deve ser fechado. |
| 4      | Verificar que o pedido não foi criado | Nenhum pedido deve ser criado no banco de dados. |
| 5      | Verificar que o carrinho foi mantido | Os itens do carrinho devem permanecer intactos. |

#### **Resultados Esperados**

- O drawer é fechado corretamente.
- Nenhum pedido é criado.
- O carrinho permanece com os itens.

#### **Critérios de Aceitação**

- O cancelamento funciona sem erros.
- O estado do carrinho é preservado.
- O usuário pode tentar novamente posteriormente.

---

## Casos de Teste - Pagamento

### **CT025 - Visualizar Página de Pagamento**

#### **Objetivo**

Validar que a página de pagamento exibe corretamente as informações do pedido e as opções de pagamento disponíveis.

#### **Pré-Condições**

- Deve existir um pedido criado (currentOrder).
- O usuário deve ser redirecionado para /payment após criar o pedido.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Criar um pedido                    | Um pedido deve ser criado com sucesso. |
| 2      | Ser redirecionado para /payment    | A página de pagamento deve ser carregada. |
| 3      | Verificar as informações do pedido | O número do pedido e o total devem ser exibidos. |
| 4      | Verificar as opções de pagamento   | Três opções devem ser exibidas: PIX, Cartão de Débito, Cartão de Crédito. |
| 5      | Verificar a descrição de cada método | Cada método deve exibir uma descrição. |
| 6      | Verificar o botão de cancelar      | O botão "Cancelar Pedido" deve estar visível. |

#### **Resultados Esperados**

- As informações do pedido são exibidas corretamente.
- Todas as opções de pagamento estão disponíveis.
- A interface está bem formatada e clara.

#### **Critérios de Aceitação**

- A página é carregada sem erros.
- Todas as informações estão corretas.
- As opções de pagamento são clicáveis.

---

### **CT026 - Acessar Página de Pagamento sem Pedido**

#### **Objetivo**

Validar que ao acessar a página de pagamento sem ter um pedido criado, o sistema redireciona para a página inicial.

#### **Pré-Condições**

- Não deve existir um pedido ativo (currentOrder = null).
- O usuário tenta acessar /payment diretamente.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Limpar o localStorage (remover pedido) | O localStorage deve estar sem pedido ativo. |
| 2      | Acessar diretamente /payment        | O sistema deve detectar que não há pedido. |
| 3      | Verificar o redirecionamento       | O usuário deve ser redirecionado para a página inicial (/). |

#### **Resultados Esperados**

- O sistema detecta a ausência de pedido.
- O redirecionamento para a página inicial ocorre automaticamente.
- Não há erros no console.

#### **Critérios de Aceitação**

- O redirecionamento ocorre imediatamente.
- Não há erros críticos.
- A página inicial é carregada corretamente.

---

### **CT027 - Selecionar Método de Pagamento PIX**

#### **Objetivo**

Validar que ao selecionar o método de pagamento PIX, o sistema atualiza o pedido e redireciona para a página de confirmação.

#### **Pré-Condições**

- Deve existir um pedido criado.
- O usuário deve estar na página /payment.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /payment          | A página de pagamento deve ser exibida. |
| 2      | Clicar na opção "PIX"              | O método de pagamento deve ser selecionado. |
| 3      | Verificar a atualização no banco   | O método de pagamento do pedido deve ser atualizado para "pix" no banco de dados. |
| 4      | Verificar o redirecionamento       | O usuário deve ser redirecionado para /payment/pix/confirm. |

#### **Resultados Esperados**

- O método de pagamento é atualizado no banco de dados.
- O redirecionamento para a página de confirmação ocorre corretamente.
- O pedido mantém todas as outras informações.

#### **Critérios de Aceitação**

- A atualização no banco de dados é bem-sucedida.
- O redirecionamento ocorre sem erros.
- O método de pagamento é salvo corretamente.

---

### **CT028 - Selecionar Método de Pagamento Cartão de Débito**

#### **Objetivo**

Validar que ao selecionar o método de pagamento Cartão de Débito, o sistema atualiza o pedido e redireciona para a página de confirmação.

#### **Pré-Condições**

- Deve existir um pedido criado.
- O usuário deve estar na página /payment.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /payment          | A página de pagamento deve ser exibida. |
| 2      | Clicar na opção "Cartão de Débito" | O método de pagamento deve ser selecionado. |
| 3      | Verificar a atualização no banco   | O método de pagamento do pedido deve ser atualizado para "debit" no banco de dados. |
| 4      | Verificar o redirecionamento       | O usuário deve ser redirecionado para /payment/debit/confirm. |

#### **Resultados Esperados**

- O método de pagamento é atualizado no banco de dados.
- O redirecionamento para a página de confirmação ocorre corretamente.
- O pedido mantém todas as outras informações.

#### **Critérios de Aceitação**

- A atualização no banco de dados é bem-sucedida.
- O redirecionamento ocorre sem erros.
- O método de pagamento é salvo corretamente.

---

### **CT029 - Selecionar Método de Pagamento Cartão de Crédito**

#### **Objetivo**

Validar que ao selecionar o método de pagamento Cartão de Crédito, o sistema atualiza o pedido e redireciona para a página de confirmação.

#### **Pré-Condições**

- Deve existir um pedido criado.
- O usuário deve estar na página /payment.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /payment          | A página de pagamento deve ser exibida. |
| 2      | Clicar na opção "Cartão de Crédito" | O método de pagamento deve ser selecionado. |
| 3      | Verificar a atualização no banco   | O método de pagamento do pedido deve ser atualizado para "credit" no banco de dados. |
| 4      | Verificar o redirecionamento       | O usuário deve ser redirecionado para /payment/credit/confirm. |

#### **Resultados Esperados**

- O método de pagamento é atualizado no banco de dados.
- O redirecionamento para a página de confirmação ocorre corretamente.
- O pedido mantém todas as outras informações.

#### **Critérios de Aceitação**

- A atualização no banco de dados é bem-sucedida.
- O redirecionamento ocorre sem erros.
- O método de pagamento é salvo corretamente.

---

### **CT030 - Cancelar Pedido na Página de Pagamento**

#### **Objetivo**

Validar que é possível cancelar um pedido na página de pagamento e que o pedido é atualizado no banco de dados com status "cancelled".

#### **Pré-Condições**

- Deve existir um pedido criado.
- O usuário deve estar na página /payment.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /payment          | A página de pagamento deve ser exibida. |
| 2      | Localizar o botão "Cancelar Pedido" | O botão deve estar visível na parte inferior da página. |
| 3      | Clicar no botão "Cancelar Pedido"  | O pedido deve ser atualizado no banco de dados com status "cancelled". |
| 4      | Verificar o redirecionamento       | O usuário deve ser redirecionado para a página inicial (/). |
| 5      | Verificar a limpeza do estado      | O carrinho e o pedido atual devem ser limpos do localStorage. |

#### **Resultados Esperados**

- O pedido é atualizado no banco de dados com status "cancelled".
- O estado do sistema é limpo (carrinho e pedido atual).
- O redirecionamento para a página inicial ocorre corretamente.

#### **Critérios de Aceitação**

- A atualização no banco de dados é bem-sucedida.
- O localStorage é limpo corretamente.
- O usuário pode iniciar um novo pedido.

---

## Casos de Teste - Confirmação de Pagamento

### **CT031 - Visualizar Página de Confirmação de Pagamento PIX**

#### **Objetivo**

Validar que a página de confirmação de pagamento PIX exibe corretamente todas as informações do pedido e as instruções de pagamento.

#### **Pré-Condições**

- Deve existir um pedido criado com método de pagamento PIX.
- O usuário deve ser redirecionado para /payment/pix/confirm.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Selecionar método de pagamento PIX | O usuário deve ser redirecionado para /payment/pix/confirm. |
| 2      | Verificar o cabeçalho             | O ícone e nome "PIX" devem ser exibidos. |
| 3      | Verificar as informações do pedido  | O número do pedido e o total devem ser exibidos. |
| 4      | Verificar as instruções de pagamento | As instruções "Pagamento no Balcão" devem ser exibidas. |
| 5      | Verificar os detalhes do pedido    | Cliente, tipo, forma de pagamento e data devem ser exibidos. |
| 6      | Verificar a listagem de itens      | Todos os itens do pedido devem ser listados com quantidade e preço. |
| 7      | Verificar mensagem para dine-in    | Se o tipo for "dine-in", uma mensagem sobre aguardar ser chamado deve ser exibida. |

#### **Resultados Esperados**

- Todas as informações do pedido são exibidas corretamente.
- As instruções de pagamento são claras.
- A interface está bem formatada.

#### **Critérios de Aceitação**

- A página é carregada sem erros.
- Todas as informações estão corretas e atualizadas.
- A interface está responsiva e clara.

---

### **CT032 - Visualizar Página de Confirmação de Pagamento Cartão**

#### **Objetivo**

Validar que a página de confirmação de pagamento para cartão (débito ou crédito) exibe corretamente todas as informações do pedido.

#### **Pré-Condições**

- Deve existir um pedido criado com método de pagamento cartão (débito ou crédito).
- O usuário deve ser redirecionado para /payment/debit/confirm ou /payment/credit/confirm.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Selecionar método de pagamento cartão | O usuário deve ser redirecionado para a página de confirmação correspondente. |
| 2      | Verificar o cabeçalho             | O ícone e nome do método (Cartão de Débito ou Cartão de Crédito) devem ser exibidos. |
| 3      | Verificar as informações do pedido  | O número do pedido e o total devem ser exibidos. |
| 4      | Verificar as instruções de pagamento | As instruções "Pagamento no Balcão" devem ser exibidas. |
| 5      | Verificar os detalhes do pedido    | Cliente, tipo, forma de pagamento e data devem ser exibidos. |
| 6      | Verificar a listagem de itens      | Todos os itens do pedido devem ser listados. |

#### **Resultados Esperados**

- Todas as informações do pedido são exibidas corretamente.
- O método de pagamento correto é exibido.
- As instruções são claras.

#### **Critérios de Aceitação**

- A página é carregada sem erros.
- Todas as informações estão corretas.
- O método de pagamento é exibido corretamente.

---

### **CT033 - Acessar Página de Confirmação sem Pedido**

#### **Objetivo**

Validar que ao acessar a página de confirmação sem ter um pedido criado, o sistema redireciona para a página de pagamento.

#### **Pré-Condições**

- Não deve existir um pedido ativo (currentOrder = null).
- O usuário tenta acessar /payment/pix/confirm diretamente.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Limpar o localStorage (remover pedido) | O localStorage deve estar sem pedido ativo. |
| 2      | Acessar diretamente /payment/pix/confirm | O sistema deve detectar que não há pedido. |
| 3      | Verificar o redirecionamento       | O usuário deve ser redirecionado para /payment. |

#### **Resultados Esperados**

- O sistema detecta a ausência de pedido.
- O redirecionamento para a página de pagamento ocorre automaticamente.
- Não há erros no console.

#### **Critérios de Aceitação**

- O redirecionamento ocorre imediatamente.
- Não há erros críticos.
- A página de pagamento é carregada corretamente.

---

### **CT034 - Fazer Novo Pedido Após Confirmação**

#### **Objetivo**

Validar que ao clicar no botão "Fazer Novo Pedido" na página de confirmação, o sistema limpa o estado e redireciona para a página inicial.

#### **Pré-Condições**

- O usuário deve estar na página de confirmação de pagamento.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página de confirmação    | A página de confirmação deve ser exibida. |
| 2      | Localizar o botão "Fazer Novo Pedido" | O botão deve estar visível na parte inferior da página. |
| 3      | Clicar no botão "Fazer Novo Pedido" | O estado do sistema deve ser limpo (carrinho e pedido atual). |
| 4      | Verificar o redirecionamento       | O usuário deve ser redirecionado para a página inicial (/). |
| 5      | Verificar a limpeza do localStorage | O localStorage deve estar limpo (sem carrinho e sem pedido). |

#### **Resultados Esperados**

- O estado do sistema é limpo corretamente.
- O redirecionamento para a página inicial ocorre.
- O usuário pode iniciar um novo pedido do zero.

#### **Critérios de Aceitação**

- O localStorage é limpo corretamente.
- O redirecionamento ocorre sem erros.
- A página inicial é carregada corretamente.

---

### **CT035 - Voltar para Página de Pagamento a Partir da Confirmação**

#### **Objetivo**

Validar que o botão de voltar na página de confirmação redireciona de volta para a página de pagamento.

#### **Pré-Condições**

- O usuário deve estar na página de confirmação de pagamento.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página de confirmação    | A página de confirmação deve ser exibida. |
| 2      | Localizar o botão de voltar (seta) | O botão de voltar deve estar visível no canto superior esquerdo. |
| 3      | Clicar no botão de voltar           | O usuário deve ser redirecionado para /payment. |
| 4      | Verificar que o pedido foi mantido | O pedido atual deve permanecer no estado do sistema. |

#### **Resultados Esperados**

- O redirecionamento para a página de pagamento ocorre corretamente.
- O pedido atual é mantido.
- O usuário pode selecionar outro método de pagamento.

#### **Critérios de Aceitação**

- O redirecionamento ocorre sem erros.
- O pedido é preservado.
- A página de pagamento é carregada corretamente.

---

## Casos de Teste - Persistência de Dados

### **CT036 - Persistência do Carrinho no localStorage**

#### **Objetivo**

Validar que os itens do carrinho são persistidos no localStorage e mantidos após recarregar a página.

#### **Pré-Condições**

- O sistema deve estar acessível.
- O navegador deve suportar localStorage.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Adicionar produtos ao carrinho     | Os produtos devem ser adicionados ao carrinho. |
| 2      | Verificar o localStorage           | Os itens devem ser salvos no localStorage com a chave "mcbugs-cart-items". |
| 3      | Recarregar a página (F5)           | A página deve ser recarregada. |
| 4      | Verificar o carrinho após recarregar | Os itens do carrinho devem ser restaurados do localStorage. |
| 5      | Verificar a quantidade de itens    | A quantidade de itens deve ser a mesma antes e depois do recarregamento. |
| 6      | Verificar o total do pedido        | O total do pedido deve ser o mesmo antes e depois do recarregamento. |

#### **Resultados Esperados**

- Os itens do carrinho são salvos no localStorage.
- Os itens são restaurados corretamente após recarregar a página.
- As quantidades e totais são mantidos corretamente.

#### **Critérios de Aceitação**

- O localStorage é atualizado imediatamente após adicionar itens.
- A restauração ocorre automaticamente ao carregar a página.
- Não há perda de dados durante o recarregamento.

---

### **CT037 - Persistência do Tipo de Pedido no localStorage**

#### **Objetivo**

Validar que o tipo de pedido (dine-in ou takeaway) é persistido no localStorage e mantido após recarregar a página.

#### **Pré-Condições**

- O sistema deve estar acessível.
- O navegador deve suportar localStorage.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Selecionar tipo de pedido "Para comer aqui" | O tipo "dine-in" deve ser definido. |
| 2      | Verificar o localStorage           | O tipo deve ser salvo no localStorage com a chave "mcbugs-order-type". |
| 3      | Recarregar a página (F5)           | A página deve ser recarregada. |
| 4      | Verificar o tipo após recarregar   | O tipo de pedido "dine-in" deve ser restaurado do localStorage. |
| 5      | Selecionar tipo "Para levar"      | O tipo "takeaway" deve ser definido. |
| 6      | Recarregar a página novamente      | O tipo "takeaway" deve ser restaurado. |

#### **Resultados Esperados**

- O tipo de pedido é salvo no localStorage.
- O tipo é restaurado corretamente após recarregar a página.
- O tipo é mantido durante toda a sessão.

#### **Critérios de Aceitação**

- O localStorage é atualizado imediatamente após selecionar o tipo.
- A restauração ocorre automaticamente ao carregar a página.
- O tipo é usado corretamente ao criar o pedido.

---

### **CT038 - Persistência do Pedido Atual no localStorage**

#### **Objetivo**

Validar que o pedido atual (currentOrder) é persistido no localStorage e mantido após recarregar a página.

#### **Pré-Condições**

- Deve existir um pedido criado.
- O navegador deve suportar localStorage.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Criar um pedido                    | Um pedido deve ser criado com sucesso. |
| 2      | Verificar o localStorage           | O pedido deve ser salvo no localStorage com a chave "mcbugs-current-order". |
| 3      | Recarregar a página (F5)           | A página deve ser recarregada. |
| 4      | Verificar o pedido após recarregar | O pedido atual deve ser restaurado do localStorage. |
| 5      | Verificar as informações do pedido  | Todas as informações do pedido (ID, itens, total, etc.) devem estar corretas. |

#### **Resultados Esperados**

- O pedido atual é salvo no localStorage.
- O pedido é restaurado corretamente após recarregar a página.
- Todas as informações do pedido são preservadas.

#### **Critérios de Aceitação**

- O localStorage é atualizado imediatamente após criar o pedido.
- A restauração ocorre automaticamente ao carregar a página.
- O pedido pode ser acessado nas páginas de pagamento e confirmação.

---

## Casos de Teste - Tratamento de Erros

### **CT039 - Tratamento de Erro ao Criar Pedido sem Conexão**

#### **Objetivo**

Validar que o sistema trata adequadamente erros de conexão ao tentar criar um pedido quando não há conexão com o Supabase.

#### **Pré-Condições**

- O carrinho deve conter pelo menos um produto.
- A conexão com o Supabase deve estar indisponível (simular desconexão).

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Desconectar a internet ou desabilitar o Supabase | A conexão com o banco de dados deve estar indisponível. |
| 2      | Acessar a página /cart             | A página do carrinho deve ser exibida. |
| 3      | Clicar no botão "Finalizar pedido" | O drawer deve ser aberto. |
| 4      | Inserir um nome válido             | O nome deve ser inserido. |
| 5      | Clicar no botão "Finalizar"        | O sistema deve tentar criar o pedido. |
| 6      | Verificar o tratamento de erro    | Uma mensagem de erro deve ser exibida ao usuário. |
| 7      | Verificar que o carrinho foi mantido | Os itens do carrinho devem permanecer intactos. |
| 8      | Verificar que o drawer permanece aberto | O drawer deve permanecer aberto para nova tentativa. |

#### **Resultados Esperados**

- O sistema detecta o erro de conexão.
- Uma mensagem de erro apropriada é exibida ao usuário.
- O carrinho é preservado.
- O usuário pode tentar novamente após restaurar a conexão.

#### **Critérios de Aceitação**

- O erro é tratado sem quebrar a aplicação.
- A mensagem de erro é clara e informativa.
- O estado do sistema é preservado.

---

### **CT040 - Tratamento de Erro ao Atualizar Método de Pagamento**

#### **Objetivo**

Validar que o sistema trata adequadamente erros ao tentar atualizar o método de pagamento quando não há conexão com o Supabase.

#### **Pré-Condições**

- Deve existir um pedido criado.
- O usuário deve estar na página /payment.
- A conexão com o Supabase deve estar indisponível (simular desconexão).

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Desconectar a internet ou desabilitar o Supabase | A conexão com o banco de dados deve estar indisponível. |
| 2      | Acessar a página /payment          | A página de pagamento deve ser exibida. |
| 3      | Clicar em um método de pagamento   | O sistema deve tentar atualizar o método de pagamento. |
| 4      | Verificar o tratamento de erro    | O erro deve ser tratado e registrado no console. |
| 5      | Verificar que o usuário permanece na página | O usuário deve permanecer na página de pagamento. |

#### **Resultados Esperados**

- O erro é detectado e tratado.
- O erro é registrado no console para debug.
- O usuário permanece na página de pagamento.
- O usuário pode tentar novamente após restaurar a conexão.

#### **Critérios de Aceitação**

- O erro não quebra a aplicação.
- O erro é registrado para análise.
- A experiência do usuário não é comprometida gravemente.

---

### **CT041 - Tratamento de Erro ao Carregar Imagem de Produto**

#### **Objetivo**

Validar que quando uma imagem de produto não pode ser carregada, o sistema exibe uma imagem placeholder ou trata o erro adequadamente.

#### **Pré-Condições**

- O sistema deve estar acessível.
- Uma imagem de produto deve estar indisponível ou com URL inválida.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a página /menu             | A página do menu deve ser carregada. |
| 2      | Verificar o carregamento de imagens | As imagens dos produtos devem ser carregadas. |
| 3      | Simular erro em uma imagem (URL inválida) | Uma imagem deve falhar ao carregar. |
| 4      | Verificar o tratamento de erro    | O sistema deve exibir uma imagem placeholder ou tratar o erro sem quebrar a página. |
| 5      | Verificar que a página continua funcional | A página deve continuar funcionando normalmente. |

#### **Resultados Esperados**

- O erro de carregamento de imagem é tratado.
- Uma imagem placeholder é exibida ou o erro é tratado silenciosamente.
- A funcionalidade da página não é comprometida.

#### **Critérios de Aceitação**

- Não há erros visíveis na interface.
- A página continua funcional.
- O usuário pode interagir com os produtos normalmente.

---

### **CT042 - Acessar Rota Inexistente (404)**

#### **Objetivo**

Validar que ao acessar uma rota que não existe, o sistema exibe uma página 404 apropriada.

#### **Pré-Condições**

- O sistema deve estar acessível.

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar uma rota inexistente (ex: /rota-inexistente) | O sistema deve detectar que a rota não existe. |
| 2      | Verificar a página 404             | A página NotFound deve ser exibida. |
| 3      | Verificar a mensagem               | Uma mensagem apropriada deve ser exibida. |
| 4      | Verificar a navegação              | Deve haver uma opção para voltar ou navegar para a página inicial. |

#### **Resultados Esperados**

- A página 404 é exibida corretamente.
- A mensagem é clara e informativa.
- O usuário pode navegar para outras páginas.

#### **Critérios de Aceitação**

- Não há erros no console.
- A página 404 está bem formatada.
- A navegação funciona corretamente.

---

## Resumo dos Casos de Teste

**Total de Casos de Teste:** 42

### Distribuição por Categoria:

- **Navegação e Página Inicial:** 3 casos
- **Menu e Produtos:** 5 casos
- **Detalhes do Produto:** 6 casos
- **Carrinho de Compras:** 7 casos
- **Finalização de Pedido:** 3 casos
- **Pagamento:** 6 casos
- **Confirmação de Pagamento:** 5 casos
- **Persistência de Dados:** 3 casos
- **Tratamento de Erros:** 4 casos

---

## Observações Finais

Este documento de casos de teste cobre os principais fluxos funcionais do sistema McBugs. Os casos de teste foram elaborados seguindo o modelo tradicional e focam em:

- **Fluxos positivos (happy paths):** Validação dos cenários ideais de uso do sistema.
- **Fluxos negativos:** Validação de tratamento de erros e validações de entrada.
- **Persistência de dados:** Validação do armazenamento local e restauração de estado.
- **Navegação:** Validação dos fluxos de navegação entre as páginas do sistema.

**Nota:** Este documento não cobre testes de performance, testes de automação ou testes de integração avançados, conforme especificado nas instruções.

---

**Documento criado por:** Analista de Qualidade Sênior  
**Data:** 2025-01-27  
**Versão do Sistema:** 1.0


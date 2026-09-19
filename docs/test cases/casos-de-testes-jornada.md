# Documento de Casos de Teste de Jornada - Sistema McBugs

**Sistema:** McBugs - Totem de Autoatendimento  
**Data de Criação:** 2025-01-27  
**Versão:** 1.0

---

## Casos de Teste - Jornadas Completas

### **CT001 - Jornada Completa: Pedido "Para Comer Aqui"**

#### **Objetivo**

Validar o fluxo completo de um pedido do tipo "Para comer aqui" desde a seleção inicial até a confirmação final do pagamento, garantindo que todos os passos funcionem corretamente em sequência.

#### **Pré-Condições**

- O sistema McBugs deve estar online e acessível.
- O sistema deve estar conectado ao Supabase.
- O navegador deve estar configurado corretamente.
- A conexão com a internet deve estar ativa.
- O localStorage deve estar limpo (sem dados de pedidos anteriores).

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a URL raiz do sistema (/) | A página inicial deve ser carregada corretamente com as opções "Para comer aqui" e "Para levar". |
| 2      | Clicar no botão "Para comer aqui"  | O tipo de pedido "dine-in" deve ser definido e salvo no localStorage. O usuário deve ser redirecionado para /menu. |
| 3      | Verificar a página do menu        | A página do menu deve ser exibida com as categorias (Lanches, Fritas, Bebidas, Sobremesas) e produtos disponíveis. |
| 4      | Clicar em um produto (ex: Big Mock) | O usuário deve ser redirecionado para a página de detalhes do produto (/product/big-mock). |
| 5      | Verificar os detalhes do produto  | A página deve exibir: imagem, nome, preço, descrição e ingredientes do produto. |
| 6      | Aumentar a quantidade para 2      | A quantidade deve ser atualizada para 2 e o preço total deve ser recalculado. |
| 7      | Clicar no botão "Quero • [preço]" | O produto deve ser adicionado ao carrinho com quantidade 2. O usuário deve ser redirecionado para /menu. |
| 8      | Verificar a barra de carrinho     | A barra inferior deve exibir o total do pedido e a quantidade de itens. |
| 9      | Clicar em outro produto (ex: Coca-Crash) | O usuário deve ser redirecionado para a página de detalhes do produto. |
| 10     | Clicar no botão "Quero • [preço]" | O produto deve ser adicionado ao carrinho. O usuário deve ser redirecionado para /menu. |
| 11     | Clicar no botão "Ver pedido" na barra de carrinho | O usuário deve ser redirecionado para /cart. |
| 12     | Verificar os itens no carrinho    | Todos os produtos adicionados devem estar listados com suas quantidades e preços corretos. |
| 13     | Verificar o total do pedido       | O total deve ser calculado corretamente (soma de todos os itens). |
| 14     | Clicar no botão "Finalizar pedido" | Um drawer deve ser aberto solicitando o nome do cliente. |
| 15     | Inserir o nome "João Silva"       | O nome deve ser inserido no campo. |
| 16     | Clicar no botão "Finalizar"       | O sistema deve criar o pedido no banco de dados com status "pending" e tipo "dine-in". Uma mensagem "enviando a cozinha...." deve ser exibida. |
| 17     | Verificar o redirecionamento      | O usuário deve ser redirecionado para /payment. O carrinho deve estar vazio. |
| 18     | Verificar a página de pagamento  | As informações do pedido (número e total) devem ser exibidas. As três opções de pagamento (PIX, Cartão de Débito, Cartão de Crédito) devem estar disponíveis. |
| 19     | Clicar na opção "PIX"             | O método de pagamento deve ser atualizado no banco de dados para "pix". O usuário deve ser redirecionado para /payment/pix/confirm. |
| 20     | Verificar a página de confirmação | A página deve exibir: número do pedido, total, método de pagamento PIX, instruções de pagamento, detalhes do pedido (cliente, tipo "Comer no local", forma de pagamento, data), listagem de itens e mensagem sobre aguardar ser chamado pelo número do pedido. |
| 21     | Verificar o pedido no banco de dados | O pedido deve estar salvo com: customer_name="João Silva", order_type="dine-in", payment_method="pix", status="pending", total correto e items em formato JSON. |
| 22     | Clicar no botão "Fazer Novo Pedido" | O estado do sistema deve ser limpo (carrinho e pedido atual). O usuário deve ser redirecionado para a página inicial (/). |

#### **Resultados Esperados**

- Todo o fluxo é executado sem erros.
- O tipo de pedido "dine-in" é mantido durante toda a jornada.
- Todos os produtos são adicionados corretamente ao carrinho.
- O pedido é criado no banco de dados com todas as informações corretas.
- O método de pagamento é atualizado corretamente.
- A página de confirmação exibe todas as informações corretas, incluindo a mensagem específica para "dine-in".
- O estado é limpo corretamente ao finalizar.

#### **Critérios de Aceitação**

- O pedido é criado no banco de dados com status "pending" e tipo "dine-in".
- Todos os dados do pedido são salvos corretamente (itens, total, tipo de pedido, nome do cliente, método de pagamento).
- O carrinho é limpo após a criação do pedido.
- A página de confirmação exibe a mensagem específica para pedidos "dine-in" sobre aguardar ser chamado.
- O fluxo completo é executado sem interrupções ou erros.
- O localStorage é atualizado corretamente em cada etapa.

---

### **CT002 - Jornada Completa: Pedido "Para Levar"**

#### **Objetivo**

Validar o fluxo completo de um pedido do tipo "Para levar" desde a seleção inicial até a confirmação final do pagamento, garantindo que todos os passos funcionem corretamente em sequência.

#### **Pré-Condições**

- O sistema McBugs deve estar online e acessível.
- O sistema deve estar conectado ao Supabase.
- O navegador deve estar configurado corretamente.
- A conexão com a internet deve estar ativa.
- O localStorage deve estar limpo (sem dados de pedidos anteriores).

#### **Passos**

| **Id** | **Ação**                          | **Resultado Esperado**                            |
|--------|------------------------------------|---------------------------------------------------|
| 1      | Acessar a URL raiz do sistema (/) | A página inicial deve ser carregada corretamente com as opções "Para comer aqui" e "Para levar". |
| 2      | Clicar no botão "Para levar"      | O tipo de pedido "takeaway" deve ser definido e salvo no localStorage. O usuário deve ser redirecionado para /menu. |
| 3      | Verificar a página do menu        | A página do menu deve ser exibida com as categorias (Lanches, Fritas, Bebidas, Sobremesas) e produtos disponíveis. |
| 4      | Clicar na aba "Fritas"             | Apenas produtos da categoria "Fritas" devem ser exibidos. |
| 5      | Clicar em um produto de fritas (ex: Batatas Full Stack) | O usuário deve ser redirecionado para a página de detalhes do produto. |
| 6      | Verificar os detalhes do produto  | A página deve exibir: imagem, nome, preço, descrição e ingredientes do produto. |
| 7      | Manter a quantidade em 1           | A quantidade deve permanecer em 1. |
| 8      | Clicar no botão "Quero • [preço]" | O produto deve ser adicionado ao carrinho. O usuário deve ser redirecionado para /menu. |
| 9      | Clicar na aba "Bebidas"            | Apenas produtos da categoria "Bebidas" devem ser exibidos. |
| 10     | Clicar em um produto de bebida (ex: Fanta Warning) | O usuário deve ser redirecionado para a página de detalhes do produto. |
| 11     | Aumentar a quantidade para 3       | A quantidade deve ser atualizada para 3 e o preço total deve ser recalculado. |
| 12     | Clicar no botão "Quero • [preço]" | O produto deve ser adicionado ao carrinho com quantidade 3. O usuário deve ser redirecionado para /menu. |
| 13     | Verificar a barra de carrinho     | A barra inferior deve exibir o total do pedido e a quantidade de itens (4 itens no total). |
| 14     | Clicar no botão "Ver pedido" na barra de carrinho | O usuário deve ser redirecionado para /cart. |
| 15     | Verificar os itens no carrinho    | Todos os produtos adicionados devem estar listados com suas quantidades e preços corretos. |
| 16     | Aumentar a quantidade de um item no carrinho | A quantidade deve ser incrementada e o subtotal e total devem ser atualizados. |
| 17     | Verificar o total do pedido       | O total deve ser calculado corretamente (soma de todos os itens). |
| 18     | Clicar no botão "Finalizar pedido" | Um drawer deve ser aberto solicitando o nome do cliente. |
| 19     | Inserir o nome "Maria Santos"     | O nome deve ser inserido no campo. |
| 20     | Clicar no botão "Finalizar"       | O sistema deve criar o pedido no banco de dados com status "pending" e tipo "takeaway". Uma mensagem "enviando a cozinha...." deve ser exibida. |
| 21     | Verificar o redirecionamento      | O usuário deve ser redirecionado para /payment. O carrinho deve estar vazio. |
| 22     | Verificar a página de pagamento  | As informações do pedido (número e total) devem ser exibidas. As três opções de pagamento (PIX, Cartão de Débito, Cartão de Crédito) devem estar disponíveis. |
| 23     | Clicar na opção "Cartão de Crédito" | O método de pagamento deve ser atualizado no banco de dados para "credit". O usuário deve ser redirecionado para /payment/credit/confirm. |
| 24     | Verificar a página de confirmação | A página deve exibir: número do pedido, total, método de pagamento Cartão de Crédito, instruções de pagamento, detalhes do pedido (cliente, tipo "Para levar", forma de pagamento, data) e listagem de itens. |
| 25     | Verificar que não há mensagem de aguardar | Não deve haver mensagem sobre aguardar ser chamado, pois o tipo é "takeaway". |
| 26     | Verificar o pedido no banco de dados | O pedido deve estar salvo com: customer_name="Maria Santos", order_type="takeaway", payment_method="credit", status="pending", total correto e items em formato JSON. |
| 27     | Clicar no botão "Fazer Novo Pedido" | O estado do sistema deve ser limpo (carrinho e pedido atual). O usuário deve ser redirecionado para a página inicial (/). |

#### **Resultados Esperados**

- Todo o fluxo é executado sem erros.
- O tipo de pedido "takeaway" é mantido durante toda a jornada.
- Todos os produtos são adicionados corretamente ao carrinho.
- A navegação entre categorias funciona corretamente.
- As quantidades podem ser ajustadas no carrinho.
- O pedido é criado no banco de dados com todas as informações corretas.
- O método de pagamento é atualizado corretamente.
- A página de confirmação exibe todas as informações corretas, sem mensagem de aguardar ser chamado.
- O estado é limpo corretamente ao finalizar.

#### **Critérios de Aceitação**

- O pedido é criado no banco de dados com status "pending" e tipo "takeaway".
- Todos os dados do pedido são salvos corretamente (itens, total, tipo de pedido, nome do cliente, método de pagamento).
- O carrinho é limpo após a criação do pedido.
- A página de confirmação não exibe mensagem sobre aguardar ser chamado (diferente de "dine-in").
- O fluxo completo é executado sem interrupções ou erros.
- O localStorage é atualizado corretamente em cada etapa.
- A navegação entre categorias e ajuste de quantidades no carrinho funcionam corretamente.

---

## Resumo dos Casos de Teste de Jornada

**Total de Casos de Teste de Jornada:** 2

### Distribuição:

- **Jornada "Para Comer Aqui":** 1 caso
- **Jornada "Para Levar":** 1 caso

---

## Observações Finais

Este documento contém os casos de teste de jornada completa do sistema McBugs, cobrindo os dois principais fluxos de pedido:

- **Fluxo "Para Comer Aqui" (dine-in):** Valida todo o processo desde a seleção do tipo de pedido até a confirmação final, incluindo a mensagem específica sobre aguardar ser chamado.

- **Fluxo "Para Levar" (takeaway):** Valida todo o processo desde a seleção do tipo de pedido até a confirmação final, incluindo navegação entre categorias e ajuste de quantidades no carrinho.

Os casos de teste foram elaborados seguindo o modelo tradicional e focam em validar os fluxos funcionais completos (happy paths) do sistema, garantindo que todas as etapas funcionem corretamente em sequência.

**Nota:** Este documento não cobre testes de performance, testes de automação ou testes de integração avançados, conforme especificado nas instruções.

---

**Documento criado por:** Analista de Qualidade Sênior  
**Data:** 2025-01-27  
**Versão do Sistema:** 1.0


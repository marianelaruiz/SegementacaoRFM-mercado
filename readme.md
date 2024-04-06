
# 🚲 Segmentação "O mercado"" 🚲

### **Table of Contents**
- [🚲 Segmentação "O mercado" 🚲](#-segmentacao-mercado)    
  - [**Introdução**](#introdução)
  - [**Objetivo**](#objetivo)
  - [**Equipe**](#equipe)
  - [**Ferramentas e Tecnologias**](#ferramentas-e-tecnologias)
  - [**Processamento e análises**](#rocessamento-e-análises)
  - [**Resultados e Conclusões**](#Resultados-e-Conclusões)
  - [**Fontes de dados**](#fonte-de-dados)
  - [**Google Sheets Dashboard**](#tableau-dashboard)

---

## **Introdução** eg:fire  

A loja “O Mercado” está num ambiente altamente competitivo e está experimentando mudanças significativas nas preferências dos consumidores. A fidelização do cliente tornou-se um desafio e a loja em questão está a procura de manter e aumentar o seu rendimento através de uma melhor compreensão de sua base de clientes e personalização de seas estratégias de marketing e retenção.

A estratégia escolhida pela loja é analisar suas vendas e segmentar a sua base de clientes usando a metodologia **RFM** (Recência,Frequência e Valor Monetário). Esta estratégia proporcionará a empresa uma importante vantagem competitiva, proporcionando uma profunda compreensão do comportamento de compra de seus clientes e permitirá tomar decisões estratégicas com base em dados.

---


## **Objetivo**

Aplicar a segmentação de clientes através do RFM para compreender o resultado da segmentação e em quais grupos a empresa pode concentrar esforços e/ou traçar estratégias de fidelização.

Esse objetivo é alcançado por meio dos seguintes subobjetivos:

- Identificar quem são esses clientes.
- Identificar se eles são casados, se têm filhos e qual é a idade deles.
- Identificar qual é o volume de vendas da empresa (em quantidade).
- Identificar uma relação entre os perfis dos clientes e os produtos que eles mais compram.


---

## **Equipe**

 - Marianela Ruiz
---

## **Ferramentas e Tecnologias**
- Ferramentas de anotações - Notion: https://www.notion.so/Laboratoria-480a7301ad034cd2b0710147b70d011d?pvs=4 
- ferramentas de visualização : Spreadsheets(Google Planilhas)
- Ferramenta do documentação e explicação do projeto - GitHub: https://github.com/marianelaruiz/SegementacaoRFM-mercado

---

## **Fontes de dados**
- Principal fonte de dados: https://drive.google.com/drive/folders/1forAVve6QP25VcWgZjA1G7r_WRP-SyEq

---

## **Processamento e análises**
Descreva os processos de limpeza e exploração dos dados, as técnicas de análises aplicadas, etc

Exploração e análise de dados
Realizei várias etapas para preparar os dados para análise, incluindo:
1. processar e preparar o banco de dados: Nessa fase, os dados são preparados, o que envolve selecionar o subconjunto de dados a ser usado, limpar os dados para melhorar sua qualidade, adicionar novos dados para detectar possíveis problemas, como valores nulos, dados ausentes, dados duplicados etc. A partir de um banco de dados no Google Sheets, passamos por vários processos:
- Identificar e lidar com valores nulos
- Remover os clientes que não têm um identificador exclusivo.
- Remover clientes que eram duplicados, deixando-os apenas uma vez.
- Editar valores vazios.
- Criar novas variáveis, como idade, total de compras, faixa etária, número de compras na loja e em línea para facilitar o uso dos dados.
- Adicionar novas colunas, como segmento RFM, para categorizar os clientes e analisá-los de acordo com as categorias.
 - Remover os valores discrepantes, especialmente em relação à idade. Encontrei alguns outliers que provavelmente são erros de registro no banco de dados ou clientes que usam os dados de outras pessoas, então os removi para melhorar a precisão da análise.
- Os dados fora do escopo da análise foram identificados como clientes que têm transações após junho de 2022, já que o escopo da análise do estudo é do período de 30/07/2020 a 29/06/2022, então decidi remover esses clientes.
- As medidas de posição foram usadas para segmentar os clientes por quintis, porque isso permite uma melhor interpretação das metas de dados e atende às necessidades da empresa.
- Como nosso objetivo é agrupar os clientes por seu comportamento de compras, precisamos saber o número de dias desde que o cliente fez sua última compra (Recência), quantas vezes ele fez compras (Frequência) e quanto gastou em suas compras (Monetário). A segmentação RFM foi usada para obter essas variáveis. As variáveis obtidas serão usadas como insumos para a análise RFM, para determinar os grupos de clientes existentes na empresa.


Seguindo essas etapas, conseguimos garantir que nossos dados fossem confiáveis e bem preparados para a análise.

---

## **Resultados e Conclusões**
 
Com base na análise realizada neste projeto, por meio da segmentação RFM, podemos conhecer o perfil dos clientes da empresa "O Mercado". Para isso, foi analisado o histórico de compras de cada cliente, decidiu-se segmentar os clientes por seu comportamento de compra, como os últimos dias de compra do cliente, a frequência de compras e quanto esse cliente gastou.

- A identificação dos perfis dos clientes revelou que há clientes não rentáveis e inativos, bem como clientes nos quais a empresa precisa investir mais tempo e recursos. Embora a interpretação dos segmentos seja subjetiva, não há dúvida de que as informações obtidas podem ser de grande valia para a empresa e podem ser usadas para criar campanhas de marketing focadas nos segmentos identificados, que têm um grau maior de aceitação.

- A análise revela que a taxa de resposta à campanha de marketing foi baixa, com apenas 15% dos clientes participando ativamente. Isso sugere áreas significativas para aprimoramento da estratégia de marketing, incluindo a personalização da mensagem e a diversificação dos canais de comunicação.
  
- A análise revela que o vinho é o produto mais popular entre os clientes, com uma proporção significativamente maior de vendas em comparação com outros produtos disponíveis. Essa constatação sugere oportunidades para capitalizar a demanda por vinho e adaptar as estratégias comerciais para maximizar a receita e a satisfação do cliente.

- A análise demográfica revela que a maioria dos clientes é casada e mais velhos. Isso sugere uma oportunidade de desenvolver estratégias de marketing e produtos que se concentrem nas necessidades e preferências desse grupo demográfico específico, o que poderia levar a uma maior retenção de clientes e maior receita.


---

## ** Painel de controle (dashboard) no Google Sheets**

https://docs.google.com/spreadsheets/d/11CILRgakAJyvLFDcvDcnb_asMjqLUU8M35V0dQN5ItU/edit#gid=1023444668

<img src="img/dashboard-mercado.png" alt="Alt text" width="800" height="500">
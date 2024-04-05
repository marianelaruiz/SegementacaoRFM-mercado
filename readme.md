
# 🚲 Segmentação "O mercado: BOA" 🚲

### **Table of Contents**
- [🚲 Segmentação "O mercado" 🚲](#-segmentacao-mercado-boa)
    - [**Table of Contents**](#table-of-contents)
  - [**Introdução**](#introdução)
  - [**Objetivo**](#objetivo)
  - [**Equipe**](#equipe)
  - [**Ferramentas e Tecnologias**](#ferramentas-e-tecnologias)
  - [**Processamento e análises**](#rocessamento-e-análises)
  - [**Resultados e Conclusões**](#Resultados-e-Conclusões)
  - [**Fontes de dados**](#fonte-de-dados)
  - [**Data Exploration and Analyisis**](#data-exploration-and-analyisis)
  - [**Prediction**](#prediction)
  - [**Results and conclusions**](#results-and-conclusions)
  - [**Google Sheets Dashboard**](#tableau-dashboard)

---

## **Introdução**

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
Apresenta os principais resultados obtidos a partir da análise de dados. 
Com base na análise realizada neste projeto, por meio da segmentação RFM, podemos conhecer o perfil dos clientes da empresa "O Mercado". Para isso, foi analisado o histórico de compras de cada cliente, decidiu-se segmentar os clientes por seu comportamento de compra, como os últimos dias de compra do cliente, a frequência de compras e quanto esse cliente gastou.

A identificação dos perfis dos clientes revelou que há clientes não rentáveis e inativos, bem como clientes nos quais a empresa precisa investir mais tempo e recursos. Embora a interpretação dos segmentos seja subjetiva, não há dúvida de que as informações obtidas podem ser de grande valia para a empresa e podem ser usadas para criar campanhas de marketing focadas nos segmentos identificados, que têm um grau maior de aceitação.

Por outro lado, observou-se que a maioria dos clientes não aceitou a campanha de marketing enviada e apenas 15% dos clientes responderam à campanha de marketing. Isso pode ser devido a diferentes fatores, como:

  - Relevância da mensagem: é possível que a mensagem não tenha sido relevante ou atraente o suficiente para a maioria dos clientes. Seria útil realizar pesquisas ou análises de feedback para entender as preferências dos clientes e ajustar a mensagem de acordo.

  - Falta de personalização: se a mensagem não foi adaptada às necessidades individuais dos clientes ou não foi adequadamente personalizada, é provável que tenha sido ignorada por muitos. A personalização pode aumentar a eficácia da campanha.

  - Saturação do canal: se os clientes recebem mensagens de marketing com frequência pelo mesmo canal (por exemplo, e-mail), eles podem estar insensíveis ou ignorando ativamente essas mensagens. Pode ser útil explorar outros canais de comunicação ou variar a frequência das mensagens.


---

## **Results and conclusions**

Com base na análise realizada, foram observadas várias descobertas interessantes.

- There is a correlation between the amount of rentals and the weather based on the degrees. The service is used more frequently when the weather is good, and temperatures are moderate. Secondly, the service is used more frequently between June and August, which are typically the months with better weather in Helsinki and Espoo.

- There are spikes in the total amount of rentals early in the morning when people usually want to get to work or to school and also in the afternoon when people come back from school and work. This indicates that the service is mainly used for commuting purposes.

- People travel more than 1M km per season with the bike system, which has a significant impact on how people move around the city in a more sustainable way.

- The busiest stations where there are more departures and returns. The busiest stations are Itämerentori, Kamppi, and Töölönlahdenkatu.


Additionally, the results indicate that the bike-sharing system has a significant impact on how people move around the city in a more sustainable way. The insights obtained from this analysis can be used to inform policy decisions related to transportation and urban planning in the region.

---



## ** Painel de controle (dashboard) no Google Sheets**

https://docs.google.com/spreadsheets/d/11CILRgakAJyvLFDcvDcnb_asMjqLUU8M35V0dQN5ItU/edit#gid=1023444668

<img src="img/dashboard-mercado.png" alt="Alt text" width="800" height="500">
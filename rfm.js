=SE(union_clientesTransacoes_resumo!Z2<= $D$15, 1,
    SE(union_clientesTransacoes_resumo!Z2<= $D$16, 2,
        SE(union_clientesTransacoes_resumo!Z2<= $D$17, 3,
            SE(union_clientesTransacoes_resumo!Z2<= $D$18, 4,5)
        )
    )
)


//+---------- segmentacao
=IFS(AND(I2<=2; L2<=2); "Hibernando";
AND(I2=1; L2>=4); "Não posso perdê-lo";
AND(I2<=2; L2>=2); "Risco de Perda";
AND(I2>=2; I2<=3; L2<=2); "Sonolento";
AND(I2<=3; I2>=2; L2>=2; L2<=3); "Precisa de Atenção";
AND(I2>=3; I2<=4; L2=1); "Promissor";
AND(I2>=4; L2=1); "Cliente novo";
AND(I2>=3; L2>1; L2<=3); "Potencialmente Leal";
AND(I2>=2; I2<=4;L2>=3);  "Cliente Leal";
AND(I2>=3; L2<=4); "Cliente Leal";
AND(I2>=4; I2<=5; L2>=4; L2<=5); "Campeão")



// ----- anlisis de coorte, tabela
=ArrayFormula(
    {
        clientes!A:S,
        PROCV(clientes!A:A,resumo_compras!A:H,{2, 3, 4, 5, 6, 7, 8}, FALSO)
    }
)

=ArrayFormula(
    {
        transacoes!A:D,
        PROCV(transacoes!B:B,clientes!A:S,{8}, FALSO)
    }
)


=DATADIF(E5,C5, "M")









=FILTER(transacoes!A1:D, NÚM.CARACT(transacoes!B1:B) > 0)


=FILTER(transacoes!A:D, 
    NÚM.CARACT(transacoes!B1:B) > 0, 
    DATEVALUE(transacoes!C1:C) <= DATE(2022, 6, 29)
)

transacoes mayores a junio de 2022		
4394 ->	20%

total depois de eliminar transacoes mayores a junio: 17728


Formula para contar
=CONT.SE(transacoes!C:C, ">"&DATA(2022, 6, 29))


# ---------------------------------------- segmentacao RFM categorias
=IFS(E(I5>=4, M5>=4), "Campeão",
E(I5>=2, M5>=3), "Cliente Leal",
E(I5>=3, M5>=1, M5<=3), "Potencialmente Leal",
E(I5>=4, M5<=1), "Cliente novo",
E(I5>=3, I5<=4, M5<=1), "Promissor",
E(I5>=2, I5<=3, M5>=2, M5<=3), "Precisa de Atenção",
E(I5>=2, I5<=3, M5<=2), "Sonolento",
E(I5<=2, M5>=2), "Risco de Perda",
E(I5<=1, M5>=4), "Não posso perdê-lo",
E(I5>=1, I5<=2, M5>=1,M5<=2), "Hibernando",
E(I5<=1, M5<=1), "Perdido")


=IFS(
  AND(I2 >= 4; I2 <= 5; M2 >= 4; M2 <= 5); "Campeões";
  AND(I2 >= 2; I2 <= 5; M2 >= 3; M2 <= 5); "Clientes fieis";
  AND(I2 >= 3; I2 <= 5; M2 >= 1; M2 <= 3); "Lealdade potencial";
  AND(I2 >= 4; I2 <= 5; M2 >= 0; M2 <= 1); "Clientes Recentes";
  AND(I2 >= 3; I2 <= 4; M2 >= 0; M2 <= 1); "Promissor";
  AND(I2 >= 2; I2 <= 3; M2 >= 2; M2 <= 3); "Clientes que precisam de atenção";
  AND(I2 >= 2; I2 <= 3; M2 >= 0; M2 <= 2); "Prestes a 'hibernar'";
  AND(I2 >= 0; I2 <= 2; M2 >= 2; M2 <= 5); "Em risco";
  AND(I2 >= 0; I2 <= 1; M2 >= 4; M2 <= 5); "Não posso perdê-los";
  AND(I2 >= 1; I2 <= 2; M2 >= 1; M2 <= 2); "Hibernando";
  AND(I2 >= 0; I2 <= 2; M2 >= 0; M2 <= 2); "Perdido"
)

=IFS(
E(I2>4, M2>4), "Campeão",
E(I2>2, M2>3), "Cliente Leal",
E(I2>3, M2>1, M2<=3), "Potencialmente Leal",
E(I2>4, M2<=1), "Cliente novo",
E(I2>3, I2<=4, M2<=1), "Promissor",
E(I2>2, I2<=3, M2>2, M2<=3), "Precisa de Atenção",
E(I2>2, I2<=3, M2<=2), "Sonolento",
E(I2<=2, M2>2), "Risco de Perda",
E(I2<=1, M2>4), "Não posso perdê-lo",
E(I2>1, I2<=2, M2>1,M2<=2), "Hibernando",
E(I2<=2, M2<=2), "Perdido"
)


=IFS(
E(I2>4, M2>4), "Campeão", 1 
E(I2>2, M2>3), "Cliente Leal", 1
E(I2>3, M2>1, M2<=3), "Potencialmente Leal", 2
E(I2>4, M2<=1), "Cliente novo", 3
E(I2>3, I2<=4, M2<=1), "Promissor", 3
E(I2>2, I2<=3, M2>2, M2<=3), "Precisa de Atenção", 2
E(I2>2, I2<=3, M2<=2), "Sonolento", 4
E(I2<=2, M2>2), "Risco de Perda", 3
E(I2<=1, M2>4), "Não posso perdê-lo", 2
E(I2>1, I2<=2, M2>1,M2<=2), "Hibernando", 4
E(I2<=2, M2<=2), "Perdido" 4
)

=IFS(
  O2="Campeão", "Esmeralda",
  O2="Cliente Leal", "Esmeralda",
  O2="Potencialmente Leal", "Ouro",
  O2="Promissor", "Prata",
  O2="Risco de Perda", "Prata",
  O2="Precisa de Atenção", "Ouro",
  O2="Cliente novo", "Prata",
  O2="Sonolento", "Bronze",
  O2="Não posso perdê-lo", "Ouro",
  O2="Hibernando", "Bronze",
  O2="Perdido", "Bronze"
)

Esmeralda - Clientes que quieres conservar
Oro - Clientes a los que quieres motivar para que compren más
Plata - Clientes potenciales
Bronze -Clientes que quieres ignorar

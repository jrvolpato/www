$meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
$fases = ['Parto','1º Mês pós Parto','Cobertura','1º Mês pós Cobertura','2º Mês pós Cobertura','3º Mês pós Cobertura','4º Mês pós Cobertura','Desmama','1º Mês pós Desmama','2º Mês pós Desmama','3º Mês pós Desmama','4º Mês pós Desmama'];
$escores = ['<3','>3'];
$lactacao = ['1º Mês','2º Mês','3º Mês','4º Mês','5º Mês','6º Mês','7º Mês','Não','Não','Não','Não','Não'];
$gestacao = ['Não','Não','Não','Terço Inicial','Terço Inicial','Terço Inicial','Terço Médio','Terço Médio','Terço Médio','Terço Final','Terço Final','Terço Final'];
$parto = ['1','2','3','4','5','6','7','8','9','10','11','12'];
$pv = ['450','450','451','451','452','453','456','459','464','472','483','498'];
$leite = ['8,6','10','8,7','6,7','4,9','3,4','2,3','0','0','0','0','0'];
$MSkg = ["11.07","11.35","11.67","11.28","10.91","10.62","10.4","9.41","9.41","9.41","9.41","9.41"];
$NDT = ['6133','6563','6172','5575','5021','4596','4308','3114','3290','3578','4016','4639'];
$PB = ['1246','1356','1255','1100','957','842','764','594','620','664','737','850'];
$CA = ['35','39','35','31','26','22','20','14','14','23','23','23'];
$P = ['23','25','23','21','18','16','14','11','11','15','15','15'];
$epoca = ['Águas','Águas','Águas','Águas','Seca','Seca','Seca','Seca','Seca','Águas','Águas','Águas'];
$estrategia = {
"101":["Proteico Águas","Proteico Águas","Proteico Águas","Proteico Águas","Proteico 66","Proteico 66","Proteico 66","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"201":["Reprodução MD","Proteico Águas","Proteico Águas","Proteico Águas","Pró-Engorda","Pró-Engorda","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"301":["Reprodução MD","Reprodução MD","Reprodução MD","Pró-Águas","Pró-Engorda","Pró-Engorda","Proteico 66","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"401":["Reprodução MD","Reprodução MD","Reprodução MD","Pró-Águas","Pró-Secas","Pró-Secas","Pró-Secas","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"501":["Reprodução MD","Reprodução MD","Reprodução MD","Proteico Águas","Pró-Secas","Pró-Secas","Pró-Secas","Pró-Engorda","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"601":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Pró-Secas","Pró-Secas","Pró-Secas","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"701":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Proteico 66","Pró-Secas","Pró-Secas","Pró-Secas","Reprodução MD","Reprodução MD","Reprodução MD"],
"801":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Proteico 66","Proteico 66","Pró-Engorda","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"901":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"1001":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1101":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1201":["Reprodução MD","Reprodução MD","Proteico Águas","Proteico Águas","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"102":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"202":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Proteico 66","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"302":["Reprodução MD","Reprodução MD","Pró-Engorda","Pró-Engorda","Proteico 66","Proteico 66","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"402":["Reprodução MD","Reprodução MD","Reprodução MD","Pró-Engorda","Pró-Engorda","Pró-Engorda","Pró-Engorda","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"502":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Pró-Engorda","Pró-Engorda","Pró-Engorda","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"602":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","Pró-Engorda","Pró-Engorda","Pró-Engorda","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"702":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","Pró-Engorda","Pró-Engorda","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"802":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"902":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1002":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1102":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1202":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"121":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"221":["Reprodução MD","Reprodução MD","Proteico Águas","Proteico Águas","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"321":["Proteico Águas","Proteico Águas","Proteico Águas","Proteico Águas","Proteico 66","Proteico 66","Proteico 66","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"421":["Reprodução MD","Proteico Águas","Proteico Águas","Proteico Águas","Pró-Engorda","Pró-Engorda","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"521":["Reprodução MD","Reprodução MD","Reprodução MD","Pró-Águas","Pró-Engorda","Pró-Engorda","Proteico 66","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"621":["Reprodução MD","Reprodução MD","Reprodução MD","Pró-Águas","Pró-Secas","Pró-Secas","Pró-Secas","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"721":["Reprodução MD","Reprodução MD","Reprodução MD","Proteico Águas","Pró-Secas","Pró-Secas","Pró-Secas","Pró-Engorda","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"821":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Pró-Secas","Pró-Secas","Pró-Secas","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"921":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Proteico 66","Pró-Secas","Pró-Secas","Pró-Secas","Reprodução MD","Reprodução MD","Reprodução MD"],
"1021":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Proteico 66","Proteico 66","Pró-Engorda","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"1121":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"1221":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"122":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"222":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"322":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"422":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Proteico 66","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"522":["Reprodução MD","Reprodução MD","Pró-Engorda","Pró-Engorda","Proteico 66","Proteico 66","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"622":["Reprodução MD","Reprodução MD","Reprodução MD","Pró-Engorda","Pró-Engorda","Pró-Engorda","Pró-Engorda","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"722":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Pró-Engorda","Pró-Engorda","Pró-Engorda","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"822":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","Pró-Engorda","Pró-Engorda","Pró-Engorda","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"922":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","Pró-Engorda","Pró-Engorda","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"1022":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"1122":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1222":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"171":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Pró-Secas","Pró-Secas","Pró-Secas","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"271":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Proteico 66","Pró-Secas","Pró-Secas","Pró-Secas","Reprodução MD","Reprodução MD","Reprodução MD"],
"371":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Proteico 66","Proteico 66","Pró-Engorda","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"471":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"571":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"671":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"771":["Reprodução MD","Reprodução MD","Proteico Águas","Proteico Águas","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"871":["Proteico Águas","Proteico Águas","Proteico Águas","Proteico Águas","Proteico 66","Proteico 66","Proteico 66","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"971":["Reprodução MD","Proteico Águas","Proteico Águas","Proteico Águas","Pró-Engorda","Pró-Engorda","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1071":["Reprodução MD","Reprodução MD","Reprodução MD","Pró-Águas","Pró-Engorda","Pró-Engorda","Proteico 66","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"1171":["Reprodução MD","Reprodução MD","Reprodução MD","Pró-Águas","Pró-Secas","Pró-Secas","Pró-Secas","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"1271":["Reprodução MD","Reprodução MD","Reprodução MD","Proteico Águas","Pró-Secas","Pró-Secas","Pró-Secas","Pró-Engorda","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"172":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","Pró-Engorda","Pró-Engorda","Pró-Engorda","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"272":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","Pró-Engorda","Pró-Engorda","Pró-Engorda","Reprodução MD","Reprodução MD","Reprodução MD"],
"372":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"],
"472":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"572":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"672":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"772":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"872":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","MD Seca","MD Seca","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"972":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Proteico 66","Proteico 66","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1072":["Reprodução MD","Reprodução MD","Pró-Engorda","Pró-Engorda","Proteico 66","Proteico 66","MD Seca","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1172":["Reprodução MD","Reprodução MD","Reprodução MD","Pró-Engorda","Pró-Engorda","Pró-Engorda","Pró-Engorda","MD Seca","MD Seca","Reprodução MD","Reprodução MD","Reprodução MD"],
"1272":["Reprodução MD","Reprodução MD","Reprodução MD","Reprodução MD","Pró-Engorda","Pró-Engorda","Pró-Engorda","Proteico 66","Proteico 66","Reprodução MD","Reprodução MD","Reprodução MD"]
};
$produtos = {
"Reprodução MD":["Águas"," 52.50 ","0.030","95","100","75","60","19.5","210","#913F00","minert-reproducao-md"],
"Proteico Águas":["Águas"," 50.50 ","0.100","90","120","20","15","300","500","#007041","minert-proteico-aguas"],
"Pró-Águas":["Águas","36.30 ","0.500","95","90","10","4","200","690","#58CDE1","minert-pro-aguas"],
"MD Seca":["Seca","50.00 ","0.060","90","100","75","28","422","310","#009501","minert-md-seca"],
"Proteico 66":["Seca","55.50 ","0.080","95","125","20","12","660","390","#80005B","minerthal-proteico-66"],
"Pró-Engorda":["Seca","47.50 ","0.300","95","100","20","7","300","670","#FA0065","minerthal-pro-engorda"],
"Pró-Secas":["Seca","35.00 ","1.000","90","70","10","4","200","640","#FF541B","minerthal-pro-secas"]	
};
$porcents = {
"1":["0.0025","0.0014","0.11","0.60","31"],
"2":["0.0020","0.0012","0.11","0.55","28"],
"3":["0.0020","0.0012","0.09","0.55","31"],
"4":["0.0020","0.0012","0.08","0.5","30"],
"5":["0.0015","0.0010","0.065","0.5","31"],
"6":["0.0015","0.0010","0.06","0.45","30"],
"7":["0.0015","0.0008","0.06","0.45","31"],
"8":["0.0015","0.0008","0.08","0.45","31"],
"9":["0.0025","0.0012","0.08","0.5","30"],
"10":["0.0025","0.0014","0.14","0.6","31"],
"11":["0.0025","0.0014","0.12","0.6","30"],
"12":["0.0025","0.0014","0.12","0.6","31"]
};

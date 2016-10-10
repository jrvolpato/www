function geraTabela ($mes,$fase,$escore) {

	$produtonome = [];
	$codigo = $mes+($fase-1)+$escore;
	$posicao = ($fase-1);
	
	var tabelahtml = '';
	
	$posicaoini=$posicao; $mesjs=$mes; var more = $(".more");

	$('#box_estrategia_content').append('<div id="tabela"></div>');
	
	tabelahtml+='<div class="row"><div class="col col1"><h3>Estratégia de Suplementação</h3></div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+"'><h3>Minerthal<br/>"+$estrategia[$codigo][$i]+"</h3></div>"; $produtonome[$i]= $estrategia[$codigo][$i];}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+"'><h3>Minerthal<br/>"+$estrategia[$codigo][$i]+"</h3></div>"; $produtonome[$i]= $estrategia[$codigo][$i];}

	tabelahtml+='</div>	<div class="row"><div class="col col1 noborder"></div>';

	for ($i = $mes-1; $i < 12; $i++) {$link = ($produtos[$produtonome[$i]][10]); tabelahtml+="<div class='col qmes"+$i+" noborder'><a href='#' onclick='window.open(\"http://www.minerthal.com.br/produtos/"+$link.replace('minert-','minerthal-')+"\", \"_system\")'><img src='"+$link+".jpeg' alt='' title='' /></a></div>";}	
	for ($i = 0; $i < $mes-1; $i++) {$link = ($produtos[$produtonome[$i]][10]); tabelahtml+="<div class='col qmes"+$i+" noborder'><a href='#' onclick='window.open(\"http://www.minerthal.com.br/produtos/"+$link.replace('minert-','minerthal-')+"\", \"_system\")'><img src='"+$link+".jpeg' alt='' title='' /></a></div>";}		

	tabelahtml+='</div><div class="row"><div class="col col1 noborder">Mês</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder' style='text-transform: capitalize;font-weight:bold'>"+$meses[$i]+"</div>";}
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder' style='text-transform: capitalize;font-weight:bold'>"+$meses[$i]+"</div>";}

	tabelahtml+='</div><div class="row"><div class="col col1">Fase de Produção</div>';		

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>"+$fases[$i]+"</div>";}		
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>"+$fases[$i]+"</div>";}

	tabelahtml+='</div><div class="row"><div class="col col1">Lactação</div>';

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>Lactação: "+$lactacao[$i]+"</div>";}	
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>Lactação: "+$lactacao[$i]+"</div>";}

	tabelahtml+='</div><div class="row"><div class="col col1">Gestação</div>';

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>Gestação: "+$gestacao[$i]+"</div>";}	
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>Gestação: "+$gestacao[$i]+"</div>";}

	tabelahtml+='</div><div class="row"><div class="col col1">Período</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+$epoca[$i]+"</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+$epoca[$i]+"</div>";}

	tabelahtml+='</div><div class="row apaga" id="dadosdavaca"><div class="col col1 rtitulo">Dados Vaca</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'></div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'></div>";}

	tabelahtml+='</div><div class="row apaga" id="pvkg"><div class="col col1 noborder">PV (kg)</div>';

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+" noborder'>"+$pv[$i]+"</div>";}	
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+" noborder'>"+$pv[$i]+"</div>";}

	tabelahtml+='</div><div class="row apaga" id="prodleite"><div class="col col1">Produção de Leite (l)</div>';

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+(($mes-$posicao)-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>"+$leite[$i]+"</div>";}	
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+(($mes-$posicao)-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>"+$leite[$i]+"</div>";}

	tabelahtml+='</div><div class="row apaga" id="ingestao"><div class="col col1">Ingestão MS (kg)</div>';

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>"+$MSkg[$i].replace('/\+/', ',')+"</div>";}	
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'>"+$MSkg[$i].replace('/\+/', ',')+"</div>";}

	tabelahtml+='</div><div class="row" id="rowfirsta"><div class="col col1 rtitulo">Exigências/dia</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Exigências/dia</div>";}
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Exigências/dia</div>";}

	tabelahtml+='</div><div class="row" id="ca1"><div class="col col1 noborder">Ca (g)</div>';

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+" noborder'><span>"+$CA[$i]+"</span>g Ca</div>";}	
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+" noborder'><span>"+$CA[$i]+"</span>g Ca</div>";}

	tabelahtml+='</div><div class="row" id="p1"><div class="col col1">P (g)</div>';

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'><span>"+$P[$i]+"</span>g P</div>";}	
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'><span>"+$P[$i]+"</span>g P</div>";}

	tabelahtml+='</div><div class="row" id="pb1"><div class="col col1">PB (g)</div>';

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'><span>"+$PB[$i]+"</span>g PB</div>";}	
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'><span>"+$PB[$i]+"</span>g PB</div>";}

	tabelahtml+='</div><div class="row" id="ndt1"><div class="col col1">Energia (g NDT)</div>';

	for ($i = $posicao; $i < 12; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'><span>"+Math.round($NDT[$i].replace('/\+/', ','))+"</span>g NDT</div>";}	
	for ($i = 0; $i < $posicao; $i++) { $posi=($i+($mes-$posicao-1)); if ($posi > 11) {$posi = ($posi-12);} if ($posi < 0) {$posi = ($posi+12);} tabelahtml+="<div class='col qmes"+$posi+"'><span>"+Math.round($NDT[$i].replace('/\+/', ','))+"</span>g NDT</div>";}
	
	
	tabelahtml+='</div><div class="row" id="rowfirstb"><div class="col col1 ">Consumo Produto (g/dia)</div>';
	
	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Consumo Produto</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Consumo Produto</div>";}

	tabelahtml+='</div><div class="row" id="consumo"><div class="col col1">Consumo Produto (g/dia)</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder'><span>"+($produtos[$produtonome[$i]][2])+"</span>g/dia</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder'><span>"+($produtos[$produtonome[$i]][2])+"</span>g/dia</div>";}
	
	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);
	
	$("#rowfirstb").insertBefore("#rowfirsta");
	$("#consumo").insertAfter("#rowfirstb");
	

	for ($i = 1; $i < 13; $i++) { 
		$v =  $('div#consumo div:eq('+$i+') span').html();
		$v2 = $('div#pvkg div:eq('+$i+')').html();
		$v3 = vtop($('div#prodleite div:eq('+$i+')').html());
		$v4 = ptov((((parseFloat($v)*parseFloat($v2))*10)*(1+(parseFloat($v3)*15)/1000)).toFixed(0));
 		$('div#consumo div:eq('+$i+') span').text($v4);
	}
	
	
	tabelahtml='<div class="row"><div class="col col1 rtitulo">Consumo Nutrientes via Suplemento/dia</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Consumo Nutrientes via Suplemento/dia</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Consumo Nutrientes via Suplemento/dia</div>";}

	tabelahtml+='</div><div class="row" id="ca2"><div class="col col1 noborder">Ca (g)</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder'><span>"+($produtos[$produtonome[$i]][5])+"</span>g Ca</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder'><span>"+($produtos[$produtonome[$i]][5])+"</span>g Ca</div>";}
	
	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = $('div#ca2 div:eq('+$i+') span').html();
		$v2 = vtop($('div#consumo div:eq('+$i+') span').html());
		$v3 = ptov(((parseFloat($v)/1000)*parseFloat($v2)).toFixed(2));
		$('div#ca2 div:eq('+$i+') span').text($v3);
	}
	
	tabelahtml='<div class="row" id="p2"><div class="col col1">P (g)</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+"'><span>"+($produtos[$produtonome[$i]][6])+"</span>g P</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+"'><span>"+($produtos[$produtonome[$i]][6])+"</span>g P</div>";}

	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = $('div#p2 div:eq('+$i+') span').html();
		$v2 = vtop($('div#consumo div:eq('+$i+') span').html());
		$v3 = ptov(((parseFloat($v)/1000)*parseFloat($v2)).toFixed(2));
		$('div#p2 div:eq('+$i+') span').text($v3);
	}

	tabelahtml='<div class="row" id="pb2"><div class="col col1">PB (g)</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+"'><span>"+($produtos[$produtonome[$i]][7])+"</span>g PB</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+"'><span>"+($produtos[$produtonome[$i]][7])+"</span>g PB</div>";}

	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = $('div#pb2 div:eq('+$i+') span').html();
		$v2 = vtop($('div#consumo div:eq('+$i+') span').html());
		$v3 = ptov(((parseFloat($v)/1000)*parseFloat($v2)).toFixed(2));
		$('div#pb2 div:eq('+$i+') span').text($v3);
	}
	
	tabelahtml='<div class="row" id="ndt2"><div class="col col1">Energia (g NDT)</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+"'><span>"+($produtos[$produtonome[$i]][8])+"</span>g NDT</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+"'><span>"+($produtos[$produtonome[$i]][8])+"</span>g NDT</div>";}

	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = $('div#ndt2 div:eq('+$i+') span').html();
		$v2 = vtop($('div#consumo div:eq('+$i+') span').html());
		$v3 = ptov(((parseFloat($v)/1000)*parseFloat($v2)).toFixed(2));
		$('div#ndt2 div:eq('+$i+') span').text($v3);
	}
	
	tabelahtml='<div class="row apaga" id="imsrow"><div class="col col1 rtitulo">IMS</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'></div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'></div>";}

	tabelahtml+='</div>';

	tabelahtml+='<div class="row apaga" id="efeito"><div class="col col1 noborder">Efeito do Suplemento na IMS</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder'>"+($produtos[$produtonome[$i]][4])+"</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder'>"+($produtos[$produtonome[$i]][4])+"</div>";}

	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);


	tabelahtml='<div class="row apaga" id="ismpasto"><div class="col col1">IMS Pasto</div></div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = vtop($('div#ingestao div:eq('+$i+')').html()); //11+07
		//console.log($v);
		$v2 = $('div#efeito div:eq('+$i+')').html(); //100
		//console.log($v2);
		$v3 = ptov(parseFloat($v)*parseFloat($v2)/100); //11,07
		//console.log($v3);
		$posi = ($i+parseFloat($mesjs)-2); if ($posi > 11) {$posi=($posi-12);}
		//console.log($posi);
		qmes = 'qmes'+$posi;
		$('#ismpasto').append('<div class="col qmes'+$posi+'">'+$v3+'</div>');
		//console+log(qmes);
	}
	
	tabelahtml='<div class="row apaga" id="imsporcentagem"><div class="col col1"></div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+($produtos[$produtonome[$i]][3])+"</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+($produtos[$produtonome[$i]][3])+"</div>";}

	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);

	tabelahtml='<div class="row apaga"><div class="col col1 rtitulo">Consumo de Nutriente Pasto</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'></div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'></div>";}

	tabelahtml+='</div><div class="row apaga" id="consumoca" ><div class="col col1 noborder">Cálcio (g)</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder'>"+($porcents[$i+1][0])+"</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" noborder'>"+($porcents[$i+1][0])+"</div>";}
	
	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = $('div#consumoca div:eq('+$i+')').html();
		$v2 = vtop($('div#ismpasto div:eq('+$i+')').html());
		$v3 = ptov(((parseFloat($v2)*parseFloat($v))*1000).toFixed(2));
		$('div#consumoca div:eq('+$i+')').text($v3);
	}

	tabelahtml='<div class="row apaga" id="consumop" ><div class="col col1">Fósforo (g)</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+($porcents[$i+1][1])+"</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+($porcents[$i+1][1])+"</div>";}
	
	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = $('div#consumop div:eq('+$i+')').html();
		$v2 = vtop($('div#ismpasto div:eq('+$i+')').html());
		$v3 = ptov(((parseFloat($v2)*parseFloat($v))*1000).toFixed(2));
		$('div#consumop div:eq('+$i+')').text($v3);
	}

	tabelahtml='<div class="row apaga" id="consumopb" ><div class="col col1">Proteína Bruta (g)</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+($porcents[$i+1][2])+"</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+($porcents[$i+1][2])+"</div>";}
	
	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = $('div#consumopb div:eq('+$i+')').html();
		$v2 = vtop($('div#ismpasto div:eq('+$i+')').html());
		$v3 = ptov(((parseFloat($v2)*parseFloat($v))*1000).toFixed(2));
		$('div#consumopb div:eq('+$i+')').text($v3);
	}

	tabelahtml='<div class="row apaga" id="consumondt" ><div class="col col1">Energia (NDT - g)</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+($porcents[$i+1][3])+"</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+"'>"+($porcents[$i+1][3])+"</div>";}
	
	tabelahtml+='</div>';
	
	$('#tabela').append(tabelahtml);
	
	for ($i = 1; $i < 13; $i++) { 
		$v = $('div#consumondt div:eq('+$i+')').html();
		$v2 = vtop($('div#ismpasto div:eq('+$i+')').html());
		$v3 = ptov(((parseFloat($v2)*parseFloat($v))*1000).toFixed(2));
		$('div#consumondt div:eq('+$i+')').text($v3);
	}

	tabelahtml='<div class="row"><div class="col col1 rtitulo">Atendimento Cálcio</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Atendimento Cálcio</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Atendimento Cálcio</div>";}

	tabelahtml+='</div><div class="row" id="capasto" ><div class="col col1 noborder">CA Pasto (%)</div></div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = vtop($('div#consumoca div:eq('+$i+')').html());
		$v2 = vtop($('div#ca2 div:eq('+$i+') span').html());
		$v3 = ptov((parseFloat($v)/(parseFloat($v)+parseFloat($v2))*100).toFixed(2))
		$posi = ($i+parseFloat($mesjs)-2); if ($posi > 11) {$posi=($posi-12);} 
		$('#capasto').append('<div class="col qmes'+$posi+' noborder"><span>'+$v3+'</span>% Pasto</div>');	}

	tabelahtml='<div class="row" id="casuplemento"><div class="col col1">CA Suplemento (%)</div></div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = vtop($('div#capasto div:eq('+$i+') span').html());
		$v2 = ptov((100-(parseFloat($v))).toFixed(2));
		$posi = ($i+parseFloat($mesjs)-2); if ($posi > 11) {$posi=($posi-12);} 
		$('#casuplemento').append('<div class="col qmes'+$posi+'">'+$v2+'% Suplemento</div>');
	}

	tabelahtml='<div class="row" ><div class="col col1 rtitulo">Atendimento Fósforo</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Atendimento Fósforo</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Atendimento Fósforo</div>";}

	tabelahtml+='</div><div class="row" id="ppasto" ><div class="col col1 noborder">P Pasto (%)</div></div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = vtop($('div#consumop div:eq('+$i+')').html());
		$v2 = vtop($('div#p2 div:eq('+$i+') span').html());
		$v3 = ptov((parseFloat($v)/(parseFloat($v)+parseFloat($v2))*100).toFixed(2))
		$posi = ($i+parseFloat($mesjs)-2); if ($posi > 11) {$posi=($posi-12);} 
		$('#ppasto').append('<div class="col qmes'+$posi+' noborder"><span>'+$v3+'</span>% Pasto</div>');
	}

	tabelahtml='<div class="row" id="psuplementp" ><div class="col col1">P Suplemento (%)</div></div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = vtop($('div#ppasto div:eq('+$i+') span').html());
		$v2 = ptov((100-(parseFloat($v))).toFixed(2));
		$posi = ($i+parseFloat($mesjs)-2); if ($posi > 11) {$posi=($posi-12);} 
		$('#psuplementp').append('<div class="col qmes'+$posi+'">'+$v2+'% Suplemento</div>');
	}

	tabelahtml='<div class="row" ><div class="col col1 rtitulo">Atendimento Proteína Bruta</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Atendimento Proteína Bruta</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Atendimento Proteína Bruta</div>";}

	tabelahtml+='</div><div class="row" id="pbpasto"><div class="col col1 noborder">PB Pasto (%)</div></div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = vtop($('div#consumopb div:eq('+$i+')').html());
		$v2 = vtop($('div#pb2 div:eq('+$i+') span').html());
		$v3 = ptov((parseFloat($v)/(parseFloat($v)+parseFloat($v2))*100).toFixed(2))
		$posi = ($i+parseFloat($mesjs)-2); if ($posi > 11) {$posi=($posi-12);} 
		$('#pbpasto').append('<div class="col qmes'+$posi+' noborder"><span>'+$v3+'</span>% Pasto</div>');
	}
	
	tabelahtml='<div class="row" id="pbsuplemento" ><div class="col col1">PB Suplemento (%)</div></div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = vtop($('div#pbpasto div:eq('+$i+') span').html());
		$v2 = ptov((100-(parseFloat($v))).toFixed(2));
		$posi = ($i+parseFloat($mesjs)-2); if ($posi > 11) {$posi=($posi-12);} 
		$('#pbsuplemento').append('<div class="col qmes'+$posi+'">'+$v2+'% Suplemeto</div>');
	}

	tabelahtml='<div class="row" ><div class="col col1 rtitulo">Atendimento Energia NDT</div>';

	for ($i = $mes-1; $i < 12; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Atendimento Energia NDT</div>";}	
	for ($i = 0; $i < $mes-1; $i++) { tabelahtml+="<div class='col qmes"+$i+" rtitulo'>Atendimento Energia NDT</div>";}

	tabelahtml+='</div><div class="row" id="ndtpasto" ><div class="col col1 noborder">NDT Pasto (%)</div></div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = vtop($('div#consumondt div:eq('+$i+')').html());
		$v2 = vtop($('div#ndt2 div:eq('+$i+') span').html());
		$v3 = ptov((parseFloat($v)/(parseFloat($v)+parseFloat($v2))*100).toFixed(2));
		$posi = ($i+parseFloat($mesjs)-2); if ($posi > 11) {$posi=($posi-12);} 
		$('#ndtpasto').append('<div class="col qmes'+$posi+' noborder"><span>'+$v3+'</span>% Pasto</div>');
	}

	tabelahtml='<div class="row" id="ndtsuplemento"><div class="col col1">NDT Suplemento (%)</div></div>';
	
	$('#tabela').append(tabelahtml);

	for ($i = 1; $i < 13; $i++) { 
		$v = vtop($('div#ndtpasto div:eq('+$i+') span').html());
		$v2 = ptov((100-(parseFloat($v))).toFixed(2));
		$posi = ($i+parseFloat($mesjs)-2); if ($posi > 11) {$posi=($posi-12);} 
		$('#ndtsuplemento').append('<div class="col qmes'+$posi+'">'+$v2+'% Suplemento</div>');
	}

	
	tabelahtml='</div></div>';
	
	$('#tabela').append(tabelahtml);
	
	//$(".qmes0, .qmes1, .qmes2, .qmes3, .qmes4, .qmes5, .qmes6, .qmes7, .qmes8, .qmes9, .qmes10, .qmes11 ").css("display", "none");
	//$(".qmes"+($ajaxestrategia1-1)+", .qmes"+($ajaxestrategia2-1)+", .qmes"+($ajaxestrategia3-1)+"").css('display', 'table-cell');

}












